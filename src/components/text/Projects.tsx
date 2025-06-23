'use client'
import React from 'react'
import ProjectGallery from '../Projects/ProjectGallery';
import { useTranslations } from 'next-intl';

export default function Projects() {
  
    const t = useTranslations('projects');
  return (
    <div className='bg-white rounded-xl shadow-md mt-2 p-6'>
        <span className='text-size font-bold text-gray-900 '>
            {t('header.title')}
        </span>
        <div className='mt-4'>
        <ProjectGallery/>
        </div>
    </div>
  )
}
