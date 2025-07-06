import Head from 'next/head'

export default function Home() {
  const user = {
    username: 'xiotense',
    email: 'xiotense@gmail.com',
    usageStats: {
      downloads: 128,
      promosSent: 45,
      activeSince: 'Feb 2024'
    }
  }

  return (
    <>
      <Head>
        <title>ZARXIO – Futuristic Toolbox</title>
        <meta name="description" content="Zarxio - AI downloader & jasa digital futuristik" />
      </Head>

      {/* Background */}
      <div className="stars" />
      <div className="matrix" />

      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-12 font-mono relative z-10">
        {/* Header */}
        <header className="flex items-center justify-between mb-12 border-b border-gray-700 pb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-cyan-400 tracking-wider">ZARXIO</h1>
          <nav className="space-x-6 text-sm md:text-base">
            <a href="/download" className="hover:text-cyan-400 transition">Downloader</a>
            <a href="/products" className="hover:text-cyan-400 transition">Produk</a>
            <a href="/promo" className="hover:text-cyan-400 transition">Promosi</a>
          </nav>
        </header>

        {/* User Info */}
        <div className="flex items-center gap-4 mb-8">
          <img
            src="https://api.dicebear.com/7.x/bottts/svg?seed=zarxio"
            alt="AI Avatar"
            className="w-16 h-16 rounded-full border-2 border-cyan-400 shadow"
          />
          <div>
            <p className="font-semibold text-lg">@{user.username}</p>
            <p className="text-sm text-gray-400">{user.email}</p>
          </div>
        </div>

        {/* Statistik */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12 text-sm text-gray-300">
          <div className="bg-gray-800 p-4 rounded-lg border border-cyan-600">
            <p className="text-cyan-400 text-xl font-bold">{user.usageStats.downloads}</p>
            <p>Total Downloads</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg border border-cyan-600">
            <p className="text-cyan-400 text-xl font-bold">{user.usageStats.promosSent}</p>
            <p>Promosi Terkirim</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg border border-cyan-600">
            <p className="text-cyan-400 text-xl font-bold">{user.usageStats.activeSince}</p>
            <p>Aktif Sejak</p>
          </div>
        </div>

        {/* Hero Section */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Social Media Toolbox of the Future
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Zarxio hadir sebagai solusi AI downloader & jasa digital yang futuristik, cepat, dan handal.
          </p>

          <div className="flex justify-center gap-4">
            <a href="/download" className="bg-cyan-500 hover:bg-cyan-600 text-black px-6 py-2 rounded-full shadow-lg transition font-semibold">
              🚀 Coba Downloader
            </a>
            <a href="/products" className="border border-cyan-400 hover:bg-cyan-900 text-cyan-400 px-6 py-2 rounded-full transition font-semibold">
              📦 Lihat Produk
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 text-sm text-center text-gray-500">
          © 2025 <span className="text-cyan-500 font-semibold">ZARXIO</span>. Built for creators & hustlers.
        </footer>
      </main>
    </>
  )
}
