// components/Loader.jsx
import React from 'react'

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-cyan-400">
      <div className="text-center space-y-4 animate-pulse">
        <div className="w-24 h-24 rounded-full border-4 border-cyan-400 border-dashed mx-auto animate-spin"></div>
        <p className="text-xl font-bold">Loading ZARXIO...</p>
        <div className="scanner mx-auto"></div>
      </div>
    </div>
  )
}
