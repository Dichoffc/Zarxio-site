/// pages/_app.js
import { useEffect, useState } from 'react'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Simulasi loading awal (2 detik)
    const timer = setTimeout(() => {
      setLoading(false)
      // Simulasi user login
      setUser({ username: 'xiotense', email: 'xiotense@gmail.com' })
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-cyan-400 text-xl font-mono animate-pulse">
        🚀 ZARXIO System Booting...
      </div>
    )
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full text-sm text-gray-400 bg-gray-900 px-4 py-2 z-50 shadow-md">
        🔐 Logged in as <span className="text-white font-bold">@{user?.username}</span> ({user?.email})
      </div>
      <div className="pt-12">
        <Component {...pageProps} />
      </div>
    </>
  )
}
