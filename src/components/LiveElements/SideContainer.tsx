'use client'
import React from 'react'
import { SpotifyCard } from './Spotify/SpotifyCard';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';


export default function SideContainer() {

  const containerVariables = {
    hidden : {
      opacity : 0
    },
    visible : {
      opacity: 1,
      transition : {
        duration: 1
      }
    }
  }


  const t = useTranslations("SideContainer")
  return (
    <div 
    
    className=' bg-white rounded-xl shadow-md overflow-hidden mt-2 md:w-120 container'>
      <motion.div 
        initial = "hidden"
    whileInView={"visible"}
    variants={containerVariables}
    viewport={{ once: true, amount: 0.4 }}
      className="p-4">
      <h2 className='text-size font-bold text-gray-900 mb-2'>
        {t('aboutme')}
      </h2>
      <SpotifyCard/>
      </motion.div>
      
    </div>
  )
}

