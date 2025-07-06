import '../styles/globals.css'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return loading ? (
    <div className="flex items-center justify-center h-screen bg-black text-cyan-300 text-2xl font-mono">
      <div className="glitch">ZARXIO SYSTEM LOADING...</div>
    </div>
  ) : (
    <Component {...pageProps} />
  )
}

export default MyApp
