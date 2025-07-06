export default function Promo() {
  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      <h1 className="text-3xl font-bold mb-4 text-cyan-400">Promosi Akun</h1>
      <div className="space-y-6">
        <p>Kunjungi akun IG kami: <a href="https://instagram.com/xiotense" className="text-cyan-400" target="_blank">@xiotense</a></p>
        <p>Hubungi via WhatsApp: <a href="https://wa.me/6281234567890" className="text-green-400" target="_blank">Klik untuk Chat</a></p>
        <p>Join Telegram: <a href="https://t.me/xiotense" className="text-blue-400" target="_blank">t.me/xiotense</a></p>
      </div>
    </div>
  );
}