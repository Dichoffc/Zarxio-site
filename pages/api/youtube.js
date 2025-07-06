export default async function handler(req, res) {
  const { url } = req.query;
  try {
    const response = await fetch(`https://youtube-api.fake/downloader?url=${url}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil data dari YouTube API' });
  }
}