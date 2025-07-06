import { useEffect, useState } from 'react'

export default function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 100 : prev + 1.5))
    }, 25)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black font-mono text-cyan-400 px-6">
      <h1 className="text-3xl font-bold tracking-widest text-cyan-400 mb-8 glitch">WELCOME</h1>

      <div className="w-full max-w-sm bg-gray-900 border border-cyan-500 rounded-xl h-5 overflow-hidden mb-3 shadow-lg shadow-cyan-500/20">
        <div
          className="h-full bg-cyan-400 transition-all duration-200 ease-in-out"
          style={{
            width: `${progress}%`,
            boxShadow: '0 0 6px cyan',
          }}
        ></div>
      </div>

      <p className="text-sm text-cyan-300 tracking-wide">
        Loading AI System... {Math.round(progress)}%
      </p>
    </div>
  )
}
