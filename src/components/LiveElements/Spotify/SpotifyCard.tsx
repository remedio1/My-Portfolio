"use client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

type SpotifyData = {
  isPlaying: boolean;
  isRecent?: boolean;
  album?: string;
  albumImageUrl?: string;
  artist?: string;
  songUrl?: string;
  title?: string;
};

const fetchSpotifyData = async (): Promise<SpotifyData> => {
  const res = await fetch('api/route');
  if (!res.ok) {
    throw new Error("Failed to fetch Spotify data");
  }
  return res.json();
};

export const SpotifyCard = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["spotify"],
    queryFn: fetchSpotifyData,
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  if (isLoading) {
    return <SpotifyCardSkeleton />;
  }

  if (error) {
    return (
      <div className="p-4 rounded-lg bg-red-50 text-red-800">
        <p>Error loading Spotify data</p>
      </div>
    );
  }

  if (!data || (!data.isPlaying && !data.isRecent)) {
    return (
      <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
        <p className="text-gray-500">No music data available</p>
      </div>
    );
  }

  return (
    <Link
      href={data.songUrl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="block no-underline"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-hidden rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <div className="flex items-center p-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="relative w-16 h-16 mr-4 flex-shrink-0">
            {data.albumImageUrl ? (
              <Image
                src={data.albumImageUrl}
                alt={data.album || "Album cover"}
                fill
                className="object-cover rounded-md"
              />
            ) : (
              <div className="w-full h-full bg-gray-700 rounded-md" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 fill-current text-green-500"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.8-.179-.92-.6-.12-.418.18-.8.6-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.659.262 1.08zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              <p className="text-xs font-medium uppercase tracking-wider text-green-500">
                {data.isPlaying ? "Now Playing" : "Recently Played"}
              </p>
            </div>

            <motion.h3
              className="mt-1 text-base font-semibold truncate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={data.title}
            >
              {data.title}
            </motion.h3>

            <motion.p
              className="text-sm text-gray-300 truncate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              key={data.artist}
            >
              {data.artist}
            </motion.p>
          </div>

          {data.isPlaying && (
            <div className="ml-4 flex-shrink-0">
              <motion.div
                className="flex space-x-1"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-1 h-8 bg-green-500 rounded-full"
                    animate={{
                      height: ["8px", "16px", "24px", "16px", "8px"],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
};

const SpotifyCardSkeleton = () => (
  <div className="overflow-hidden rounded-lg border border-gray-200 animate-pulse">
    <div className="flex items-center p-4 bg-gray-800">
      <div className="w-16 h-16 mr-4 bg-gray-700 rounded-md"></div>
      <div className="flex-1">
        <div className="h-2 w-20 bg-gray-700 rounded mb-2"></div>
        <div className="h-4 w-3/4 bg-gray-700 rounded mb-2"></div>
        <div className="h-3 w-1/2 bg-gray-700 rounded"></div>
      </div>
    </div>
  </div>
);
