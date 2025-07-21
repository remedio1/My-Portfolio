import React from 'react'
import MenuItem from '../MenuItem'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export default function Footer() {
  return (
    <div className='rounded-lg shadow-md mt-2 p-6 container justify-between flex'>
      <div>
        <span>
          2025 © Alexandre
        </span>
      </div>
      <div className=' flex gap-1'>
        <MenuItem href = "https://www.linkedin.com/in/aleh223/" text="" icon = {FaLinkedin} />
        <MenuItem href= "https://github.com/remedio1" text=""icon={FaGithub} />
        <MenuItem href = "https://www.instagram.com/aleh_.araujo/" text="" icon = {FaInstagram} />
        <MenuItem href = "mailto:aleh22k1@gmail.com" text="" icon={SiGmail} />
      </div>
    </div>
  )
}

