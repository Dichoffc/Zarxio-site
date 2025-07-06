import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white font-mono">
      <Head>
        <title>ZARXIO</title>
        <meta name="description" content="Zarxio - All-in-One Social Media Tool" />
      </Head>
      <header className="p-6 flex justify-between items-center bg-opacity-30 bg-gray-900 backdrop-blur-md shadow-md">
        <h1 className="text-3xl font-bold tracking-widest text-cyan-400">ZARXIO</h1>
        <nav className="space-x-6 text-sm">
          <Link href="/download">Downloader</Link>
          <Link href="/products">Produk</Link>
          <Link href="/promo">Promosi</Link>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center text-center px-4 mt-24">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Social Media Toolbox of the Future</h2>
        <p className="text-gray-300 max-w-xl mb-6">Zarxio hadir sebagai solusi AI downloader & jasa digital yang futuristik, cepat, dan handal.</p>
        <div className="flex space-x-4">
          <Link href="/download" className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl font-semibold transition">Coba Downloader</Link>
          <Link href="/products" className="bg-gray-800 border border-cyan-500 px-6 py-3 rounded-xl font-semibold transition">Lihat Produk</Link>
        </div>
      </main>

      <footer className="mt-32 text-center text-gray-500 text-sm p-4">
        © 2025 ZARXIO. Built for creators & hustlers.
      </footer>
    </div>
  )
}