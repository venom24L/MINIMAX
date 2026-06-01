import { useEffect, useState } from 'react'

// Spotify-style music widget. Animated progress bar + play/skip.
export default function SpotifyWidget({ className = '', style = {}, rotation = 2 }) {
  const [playing, setPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!playing) return
    const id = setInterval(() => {
      setProgress((p) => (p >= 1 ? 0 : p + 0.0035))
    }, 80)
    return () => clearInterval(id)
  }, [playing])

  return (
    <div
      className={`glass rounded-2xl p-3 photo-shadow ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
    >
      <div className="flex items-center gap-3">
        {/* Album art */}
        <div
          className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0"
          style={{
            background:
              'linear-gradient(135deg, #ff7a96 0%, #c84556 50%, #5e0913 100%)',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="36" height="36" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
              <circle cx="18" cy="18" r="3" fill="#fff5f7" />
              <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.2)" strokeDasharray="2 4" />
            </svg>
          </div>
          <div className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 50%)',
            }}
          />
        </div>

        {/* Song info */}
        <div className="flex-1 min-w-0">
          <div className="text-crimson-700 font-semibold text-sm leading-tight truncate">
            Just the Two of Us
          </div>
          <div className="text-crimson-500/80 text-xs truncate">Bill Withers</div>
        </div>
        <div className="w-6 h-6 rounded-full bg-[#1DB954] flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M2 1 L2 11 L11 6 Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-3 px-1">
        <div
          className="h-1 bg-white/40 rounded-full overflow-hidden cursor-pointer"
          onClick={(e) => {
            const r = e.currentTarget.getBoundingClientRect()
            setProgress((e.clientX - r.left) / r.width)
          }}
        >
          <div
            className="h-full bg-crimson-500 rounded-full"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-crimson-500/80 mt-1">
          <span>{Math.floor(progress * 240 / 60)}:{String(Math.floor((progress * 240) % 60)).padStart(2, '0')}</span>
          <span>4:00</span>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-2 flex items-center justify-center gap-5 text-crimson-600">
        <button className="hover:scale-110 transition" aria-label="Shuffle">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 4 L4 4 L11 11 M11 4 L4 11 L11 11 M2 11 L4 11" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </button>
        <button className="hover:scale-110 transition" aria-label="Previous">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M14 2 L14 14 L5 8 Z" />
            <rect x="2" y="2" width="2" height="12" />
          </svg>
        </button>
        <button
          onClick={() => setPlaying((p) => !p)}
          className="w-10 h-10 rounded-full bg-crimson-500 text-white flex items-center justify-center hover:scale-105 transition"
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 14 14"><rect x="3" y="2" width="3" height="10" fill="currentColor" /><rect x="8" y="2" width="3" height="10" fill="currentColor" /></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 2 L3 12 L12 7 Z" fill="currentColor" /></svg>
          )}
        </button>
        <button className="hover:scale-110 transition" aria-label="Next">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 2 L2 14 L11 8 Z" />
            <rect x="12" y="2" width="2" height="12" />
          </svg>
        </button>
        <button className="hover:scale-110 transition" aria-label="Repeat">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 5 L2 2 L11 2 L11 5 M12 9 L12 12 L3 12 L3 9" stroke="currentColor" strokeWidth="1.4" fill="none" />
            <path d="M11 2 L7 6" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </button>
      </div>
    </div>
  )
}
