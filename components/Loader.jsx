import { useState, useEffect } from 'react'

export default function Loader() {
  const [progress, setProgress] = useState(0)
  const [dots, setDots] = useState(".")

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100))
    }, 30)

    const dotInterval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? "." : prev + "."))
    }, 500)

    return () => {
      clearInterval(progressInterval)
      clearInterval(dotInterval)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-cyan-400 font-mono transition-all">
      <div className="animate-pulse w-3 h-3 mb-6 rounded-full bg-cyan-400 shadow-cyan-400 shadow-md"></div>

      <h1 className="text-xl md:text-2xl tracking-widest mb-6">
        Booting AI Interface{dots}
      </h1>

      <div className="w-[80%] max-w-md bg-gray-800 rounded-full h-4 overflow-hidden border border-cyan-500 shadow-md">
        <div
          className="h-full bg-cyan-400 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-sm text-cyan-300 mt-4 tracking-wide">
        Initializing... {progress}%
      </p>
    </div>
  )
}
