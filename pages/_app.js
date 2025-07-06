import { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return loading ? <Loader /> : <Component {...pageProps} />
}
