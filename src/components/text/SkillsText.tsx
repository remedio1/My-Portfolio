'use client'
import React from 'react'
import SkillsGallery from '../skill/SkillsGallery'
import SoftGallery from '../skill/SoftGallery'


export default function SkillsText() {
  return (
    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md mt-4  md:max-w-3xl p-6  '>
      <div className='text-size font-bold text-gray-900 mb-1 '>
        Tecnologias:
      </div>
        <div className='flex '>
        <SkillsGallery />
        </div>
        <div className='text-size font-bold text-gray-900 '>
        Habilidades e Soft Skills:
      </div>
        <div className=''>
          <SoftGallery/>
        </div>
    </div>
  )
}
