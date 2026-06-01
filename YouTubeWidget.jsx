import { useState } from 'react'
import { motion } from 'framer-motion'

// YouTube-style video widget with glassmorphism controls.
// We don't embed a real YouTube iframe; we render a faux video canvas.
export default function YouTubeWidget({ className = '', style = {}, rotation = -2 }) {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0.18)

  return (
    <div
      className={`glass rounded-2xl p-3 photo-shadow ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between mb-2 px-1">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-red-600 flex items-center justify-center">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="white">
              <path d="M1 1 L1 9 L13 5 Z" />
            </svg>
          </div>
          <div className="font-semibold text-sm text-crimson-700">our song</div>
        </div>
        <div className="flex items-center gap-1.5 text-crimson-600/70 text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          live · 720p
        </div>
      </div>

      {/* Video surface */}
      <div
        className="relative aspect-video rounded-lg overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #5e0913 0%, #a91c30 40%, #ff7a96 100%)',
        }}
      >
        {/* Decorative fake video content */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.2), transparent 50%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.18), transparent 50%)',
            }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="font-hand2 text-white text-3xl text-center px-4">
            can i play this song<br/>for you, my love?
          </div>
        </div>

        {/* Glass control bar */}
        <div className="absolute inset-x-2 bottom-2 glass-dark rounded-lg px-3 py-2 flex items-center gap-3"
          style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(10px)' }}
        >
          <button
            onClick={() => setPlaying((p) => !p)}
            className="w-9 h-9 rounded-full bg-white/95 flex items-center justify-center text-crimson-600 hover:scale-105 transition"
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? (
              <svg width="14" height="14" viewBox="0 0 14 14"><rect x="2" y="1" width="3" height="12" fill="currentColor" /><rect x="9" y="1" width="3" height="12" fill="currentColor" /></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 1 L13 7 L2 13 Z" fill="currentColor" /></svg>
            )}
          </button>
          <div className="flex-1 flex items-center gap-2 text-white/90 text-xs">
            <span>1:14</span>
            <div
              className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer"
              onClick={(e) => {
                const r = e.currentTarget.getBoundingClientRect()
                setProgress((e.clientX - r.left) / r.width)
              }}
            >
              <div
                className="h-full bg-red-500 rounded-full"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <span>5:42</span>
          </div>
          <button className="text-white/80 hover:text-white" aria-label="Volume">
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M1 5 L4 5 L8 2 L8 12 L4 9 L1 9 Z" fill="currentColor" />
              <path d="M11 4 Q14 7 11 10" stroke="currentColor" strokeWidth="1.4" fill="none" />
            </svg>
          </button>
          <button className="text-white/80 hover:text-white" aria-label="Fullscreen">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 5 L1 1 L5 1 M9 1 L13 1 L13 5 M1 9 L1 13 L5 13 M9 13 L13 13 L13 9" stroke="currentColor" strokeWidth="1.4" fill="none" />
            </svg>
          </button>
        </div>

        {/* Live reactions floating */}
        <motion.div
          className="absolute top-2 right-2 glass-dark rounded-full px-2 py-0.5 text-[10px] text-white/90"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ♥ 1.2k
        </motion.div>
      </div>

      <div className="mt-2 text-xs text-crimson-600/80 px-1 italic font-hand text-base">
        the day we slow-danced in the kitchen ♡
      </div>
    </div>
  )
}
