import React from 'react'
import { SpotifyCard } from './Spotify/SpotifyCard';


export default function SideContainer() {
  return (
    <div className=' bg-white rounded-xl shadow-md overflow-hidden md:w-96 mt-4 p-4'>
      <SpotifyCard/>
    </div>
  )
}
