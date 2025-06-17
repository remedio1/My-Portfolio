// components/SpotifyNowPlaying.tsx
"use client";

import useSWR from 'swr';
import { motion } from 'framer-motion';

// O fetcher é uma função simples para buscar dados
const fetcher = (url: string) => fetch(url).then((res) => res.json());

// Tipagem para os dados que nosso componente espera receber da nossa API
interface NowPlayingData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumImageUrl?: string;
  songUrl?: string;
}

// Pequeno componente para a animação de "ondas sonoras"
const SoundWave = () => (
  <div className="flex items-center justify-center space-x-1 w-5 h-5">
    {[...Array(3)].map((_, i) => (
      <motion.span
        key={i}
        className="w-1 h-3 bg-green-500 rounded-full"
        animate={{
          scaleY: [1, 1.5, 1],
          y: ['0%', '-10%', '0%']
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          delay: i * 0.2,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
);


export const SpotifyCurrentlyPlaying = () => {
  // Usamos SWR para buscar os dados. Ele revalida automaticamente em intervalos.
  const { data, error } = useSWR<NowPlayingData>('/api/NowPlaying', fetcher, {
    // Revalida a cada 5 segundos
    refreshInterval: 5000,
  });

  if (error) return <div className="text-red-500">Falha ao carregar...</div>;
  if (!data) return <div className="text-gray-400">Carregando...</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xs w-full bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg p-3 border border-gray-700"
    >
      {data.isPlaying && data.songUrl ? (
        <a 
          href={data.songUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center space-x-3 group"
        >
          {data.albumImageUrl && (
            <motion.img
              src={data.albumImageUrl}
              alt={data.title}
              width={56}
              height={56}
              className="w-14 h-14 rounded-md shadow-sm"
              layoutId="spotify-album-art" // Anima a imagem se a música mudar
            />
          )}
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold truncate group-hover:underline">{data.title}</p>
            <p className="text-gray-400 text-sm truncate">{data.artist}</p>
          </div>
          <SoundWave />
        </a>
      ) : (
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 bg-gray-700 rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>
          </div>
          <p className="text-gray-400">Não estou ouvindo nada agora</p>
        </div>
      )}
    </motion.div>
  );
};