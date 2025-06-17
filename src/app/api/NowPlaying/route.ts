import { NextResponse} from "next/server";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`; 

async function getAcessToken(){
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
    return response.json();
}

export async function GET (){
    try {
        const { access_token } = await getAcessToken();

        // get currently playing song
        const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        if (response.status === 204 || response.status > 400){
            return NextResponse.json ({ isPlaying: false }, {status : 200});
        }
        const song = await response.json();

        const currentlyPlaying = {
            isPlaying: song.is_playing,
            title: song.item.name,
            artist: song.item.artists.map((artist: {name: string}) => artist.name).join(', '),
            album: song.item.album.name,
            albumImageUrl: song.item.album.images[0].url,
            songUrl: song.item.external_urls.spotify,
        };

        return NextResponse.json(currentlyPlaying, {status: 200});
    } catch (error) {
        console.error('Error fetching currently playing song:', error);
        return NextResponse.json({ error: 'Failed to fetch currently playing song' }, { status: 500 });
    }
}