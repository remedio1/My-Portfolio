'use client'
import React from 'react'
import ProjectGallery from '../Projects/ProjectGallery';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';


export default function Projects() {
  
const containerVariants = {
    hidden : {
      opacity : 0
    },
    visible : {
      opacity: 1,
}
}
    const t = useTranslations('projects');
  return (
    <div className='bg-white rounded-xl shadow-md mt-2 p-6 container'>
        <motion.span
        initial="hidden"
        variants={containerVariants}
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.4 }}
         className='text-size font-bold text-gray-900 '>
            {t('header.title')}
        </motion.span>
        <div className='mt-4'>
        <ProjectGallery/>
        </div>
    </div>
  )
}
