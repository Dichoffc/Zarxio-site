const products = [
  { name: 'Akun IG Fresh', price: 'Rp20.000', desc: 'Akun Instagram ready pakai, followers 0–50', id: 1 },
  { name: 'Tools AutoView TikTok', price: 'Rp10.000', desc: 'Generate view otomatis ke video TikTok lu', id: 2 },
  { name: 'Panel Sosmed Termurah', price: 'Rp15.000', desc: 'Akses ke layanan follower/like via API', id: 3 },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      <h1 className="text-3xl font-bold mb-6 text-cyan-400">Produk Digital</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {products.map(prod => (
          <div key={prod.id} className="bg-gray-900 p-6 rounded-xl border border-gray-700">
            <h2 className="text-xl font-bold">{prod.name}</h2>
            <p className="text-gray-400">{prod.desc}</p>
            <p className="mt-2 text-cyan-400 font-semibold">{prod.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}