export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">
      <div className="scanner w-64 h-2 mb-6"></div>
      <h1 className="text-cyan-400 text-2xl glitch tracking-wide">🔍 Scanning User Identity...</h1>
    </div>
  )
    }
