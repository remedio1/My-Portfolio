import React from 'react'
import { SpotifyCurrentlyPlaying } from './Spotify/SpotifyCurrentlyPlaying';

export default function SideContainer() {
  return (
    <div className=' bg-white rounded-xl shadow-md overflow-hidden md:w-96 mt-4'><SpotifyCurrentlyPlaying/></div>
  )
}
