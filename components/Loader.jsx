import { useEffect, useState } from 'react'

export default function Loader() {
  const [dots, setDots] = useState(".")

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? "." : prev + "."))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-cyan-400 font-mono z-50 px-4">
      {/* Pulse Dot */}
      <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse shadow-lg mb-6" />

      {/* Booting Text */}
      <h1 className="text-lg md:text-xl tracking-widest mb-8 text-center">
        Booting AI System{dots}
      </h1>

      {/* Infinite Animated Bar */}
      <div className="relative w-full max-w-md h-3 bg-gray-800 rounded-full overflow-hidden border border-cyan-500 shadow-cyan-400/30 shadow-sm">
        <div className="absolute w-1/3 h-full bg-cyan-400 animate-loaderMove rounded-full" />
      </div>
    </div>
  )
}
