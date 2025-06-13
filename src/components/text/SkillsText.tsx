'use client'
import React from 'react'
import SkillsGallery from '../skill/SkillsGallery'

export default function SkillsText() {
  return (
    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md mt-4 overflow-hidden md:max-w-3xl p-4  '>
        <div className='flex items-center'>
        <SkillsGallery />
        </div>
    </div>
  )
}
