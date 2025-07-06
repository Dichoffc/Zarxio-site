import { useState } from 'react';

export default function Download() {
  const [url, setUrl] = useState('');
  const [platform, setPlatform] = useState('tiktok');
  const [result, setResult] = useState(null);

  const handleDownload = async () => {
    const res = await fetch(`/api/${platform}?url=${encodeURIComponent(url)}`);
    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      <h1 className="text-3xl font-bold mb-6 text-cyan-400">Downloader Sosmed</h1>
      <div className="space-y-4 max-w-xl">
        <input type="text" value={url} onChange={e => setUrl(e.target.value)} placeholder="Masukkan URL..." className="w-full p-3 rounded bg-gray-800 text-white" />
        <select value={platform} onChange={e => setPlatform(e.target.value)} className="w-full p-3 rounded bg-gray-800 text-white">
          <option value="tiktok">TikTok</option>
          <option value="instagram">Instagram</option>
          <option value="youtube">YouTube</option>
        </select>
        <button onClick={handleDownload} className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl font-semibold transition">Download</button>
        {result && (
          <div className="bg-gray-900 mt-6 p-4 rounded-xl">
            <pre className="text-sm whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}