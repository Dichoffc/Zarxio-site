import { useEffect, useState } from 'react'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      setUser({ username: 'xiotense', email: 'xiotense@gmail.com' })
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-cyan-400 font-mono animate-fade">
        <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-xl glitch">Booting ZARXIO OS...</p>
        <div className="scanner" />
      </div>
    )
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-gray-900 text-gray-300 px-4 py-2 text-sm z-50 shadow font-mono">
        🔐 Welcome, <strong className="text-white">@{user?.username}</strong> ({user?.email})
      </div>
      <div className="pt-12 transition-all duration-500 ease-in-out animate-fade">
        <Component {...pageProps} />
      </div>
    </>
  )
}
