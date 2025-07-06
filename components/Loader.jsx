import React, { useEffect, useState } from 'react'

export default function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 2 : 100))
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-cyan-400 px-4">
      <div className="text-center space-y-6 w-full max-w-sm">
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

        {/* Bar Loading */}
        <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-cyan-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Teks Loading */}
        <p className="text-lg font-semibold tracking-wide">
          Loading AI System... {progress}%
        </p>
      </div>
    </div>
  )
}
