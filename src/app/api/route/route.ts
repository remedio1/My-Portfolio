import { NextResponse } from 'next/server';

// Variáveis de Ambiente
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

// Codificação para o Header de Autorização
const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

// CORREÇÃO 1: Usar as URLs oficiais do Spotify
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played';

// Função para obter o Access Token
async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN!,
    }),
  });

  if (!response.ok) {
    throw new Error('Falha ao obter o Access Token do Spotify');
  }

  return response.json();
}

// CORREÇÃO 2: A função agora retorna um objeto JS, não um NextResponse
async function getSongData() {
  const { access_token } = await getAccessToken();

  // Tenta buscar a música tocando agora
  const nowPlayingResponse = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: 'no-store', // Importante para não usar cache em dados dinâmicos
  });

  // Se nada estiver tocando (status 204) ou der erro, busca as recentes
  if (nowPlayingResponse.status === 204 || nowPlayingResponse.status > 400) {
    const recentlyPlayedResponse = await fetch(RECENTLY_PLAYED_ENDPOINT + '?limit=1', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: 'no-store',
    });

    if (recentlyPlayedResponse.status === 204 || recentlyPlayedResponse.status > 400) {
      return { isPlaying: false };
    }

    const recentlyPlayed = await recentlyPlayedResponse.json();
    const item = recentlyPlayed.items[0].track;

    // Retorna um objeto simples
    return {
      isPlaying: false,
      isRecent: true,
      title: item.name,
      artist: item.artists.map((_artist: { name: string }) => _artist.name).join(', '),
      album: item.album.name,
      albumImageUrl: item.album.images[0].url,
      songUrl: item.external_urls.spotify,
    };
  }

  const song = await nowPlayingResponse.json();

  // Verifica se o item recebido é válido (pode ser null se o player estiver inativo)
  if (!song || !song.item) {
    return { isPlaying: false };
  }

  // Retorna um objeto simples
  return {
    isPlaying: song.is_playing,
    title: song.item.name,
    artist: song.item.artists.map((_artist: { name: string }) => _artist.name).join(', '),
    album: song.item.album.name,
    albumImageUrl: song.item.album.images[0].url,
    songUrl: song.item.external_urls.spotify,
  };
}

// A função GET agora controla a resposta HTTP
export async function GET() {
  try {
    // Chama a função que busca os dados
    const data = await getSongData();
    
    // Log para depuração no servidor
    console.log("Dados formatados do Spotify:", data);
    
    // Cria a resposta final
    return NextResponse.json(data);

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
    console.error("Spotify API error:", errorMessage);
    return NextResponse.json(
      { isPlaying: false, error: 'Erro ao buscar dados do Spotify', details: errorMessage },
      { status: 500 }
    );
  }
}