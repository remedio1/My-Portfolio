'use client'
import React from 'react'
import { SpotifyCard } from './Spotify/SpotifyCard';
import { motion } from 'framer-motion';


export default function SideContainer() {
  return (
    <div className=' bg-white rounded-xl shadow-md overflow-hidden md:w-96 mt-4'>
      <motion.div className="p-4">
      <h2 className='text-size font-bold text-gray-900 mb-2'>
        Um pouco sobre mim
      </h2>
      <SpotifyCard/>
      </motion.div>
      
    </div>
  )
}
