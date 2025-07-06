import React from 'react'

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-cyan-400">
      <div className="text-center space-y-6">
        {/* Avatar AI */}
        <div className="relative w-24 h-24 mx-auto">
          <img
            src="https://api.dicebear.com/7.x/bottts/svg?seed=zarxio"
            alt="AI Avatar"
            className="w-full h-full rounded-full border-2 border-cyan-400 shadow"
          />
          {/* Efek Ping AI */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Scan Bar */}
        <div className="w-48 h-1 bg-cyan-800 rounded-full overflow-hidden mx-auto">
          <div className="w-full h-full animate-scan-bar bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-300"></div>
        </div>

        {/* Teks Loading */}
        <p className="text-xl font-semibold animate-pulse tracking-wide">
          Initializing AI Systems...
        </p>
      </div>
    </div>
  )
}
