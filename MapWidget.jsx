import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Memory map widget: stylized map with a pulsing pin. Click the pin to
// expand a custom popup with photo, location, date, and a voice-note UI.
export default function MapWidget({ className = '', style = {}, rotation = -2 }) {
  const [open, setOpen] = useState(false)
  const [playing, setPlaying] = useState(false)

  return (
    <div
      className={`glass rounded-2xl p-3 photo-shadow ${className}`}
      style={{ transform: `rotate(${rotation}deg)`, ...style }}
    >
      <div className="flex items-center justify-between mb-2 px-1">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-crimson-500 text-white flex items-center justify-center text-[10px] font-bold">
            M
          </div>
          <div className="text-crimson-700 font-semibold text-sm">memory map</div>
        </div>
        <div className="text-crimson-500/70 text-xs">where it all began</div>
      </div>

      <div className="relative rounded-lg overflow-hidden" style={{ height: 230 }}>
        {/* Stylized map background */}
        <div className="absolute inset-0 map-grid" />
        {/* Roads */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 230" preserveAspectRatio="none">
          <path d="M-10 110 Q120 80 220 130 T 410 90" stroke="#fff" strokeWidth="6" fill="none" />
          <path d="M-10 110 Q120 80 220 130 T 410 90" stroke="#f3c46b" strokeWidth="2" fill="none" strokeDasharray="6 4" />
          <path d="M80 -10 Q120 80 60 240" stroke="#fff" strokeWidth="5" fill="none" />
          <path d="M80 -10 Q120 80 60 240" stroke="#ffb1c2" strokeWidth="1.5" fill="none" />
          <path d="M280 -10 Q260 100 320 240" stroke="#fff" strokeWidth="4" fill="none" />
          <path d="M280 -10 Q260 100 320 240" stroke="#a8d8b9" strokeWidth="1.5" fill="none" />

          {/* Park */}
          <ellipse cx="160" cy="180" rx="60" ry="34" fill="#c8e0c2" opacity="0.7" />
          <ellipse cx="160" cy="180" rx="60" ry="34" fill="none" stroke="#7a9d72" strokeDasharray="3 3" />

          {/* Water */}
          <path d="M340 0 Q380 60 360 130 Q380 200 340 230 L400 230 L400 0 Z" fill="#b6d6f2" opacity="0.6" />
        </svg>

        {/* Heart sticker mid */}
        <div className="absolute" style={{ left: '40%', top: '20%' }}>
          <svg width="40" height="36" viewBox="0 0 40 36">
            <path d="M20 32 C 8 22, 4 14, 10 8 C 14 4, 18 6, 20 12 C 22 6, 26 4, 30 8 C 36 14, 32 22, 20 32 Z" fill="#ff7a96" stroke="#a91c30" strokeWidth="1.4" />
          </svg>
        </div>

        {/* Pin */}
        <button
          onClick={() => setOpen(true)}
          className="absolute pin-pulse"
          style={{ left: '52%', top: '46%' }}
          aria-label="Open memory"
        >
          <svg width="42" height="56" viewBox="0 0 42 56">
            <path
              d="M21 2 C 9 2, 2 11, 2 22 C 2 36, 21 54, 21 54 C 21 54, 40 36, 40 22 C 40 11, 33 2, 21 2 Z"
              fill="#c84556"
              stroke="#5e0913"
              strokeWidth="1.4"
            />
            <circle cx="21" cy="22" r="7" fill="#fff5f7" />
            <text x="21" y="26" textAnchor="middle" fontFamily="'Caveat', cursive" fontSize="13" fill="#7a0d18">z♥j</text>
          </svg>
        </button>
      </div>

      {/* Map footer */}
      <div className="mt-2 flex items-center justify-between text-[11px] text-crimson-500/80 px-1">
        <span>Saigon, District 26</span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          saved place
        </span>
      </div>

      {/* Memory popup overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute inset-0 z-30 flex items-center justify-center p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="absolute inset-0 bg-black/30 rounded-2xl backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="relative w-[88%] max-w-[300px] rounded-2xl overflow-hidden glass-dark text-cream-50"
              initial={{ scale: 0.7, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.7, y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 240, damping: 22 }}
            >
              {/* Photo thumbnail */}
              <div
                className="h-32 relative"
                style={{
                  background:
                    'linear-gradient(135deg, #ffb1c2 0%, #ff7a96 50%, #c84556 100%)',
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center font-hand2 text-2xl text-white text-center px-2">
                  the corner café ☕
                </div>
                <div className="absolute top-2 right-2 bg-white/20 backdrop-blur rounded-full px-2 py-0.5 text-[10px]">
                  📍 Saigon 26
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-2 left-2 w-7 h-7 rounded-full bg-white/30 backdrop-blur flex items-center justify-center"
                  aria-label="Close"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 2 L10 10 M10 2 L2 10" stroke="white" strokeWidth="1.6" /></svg>
                </button>
              </div>

              {/* Info */}
              <div className="p-3">
                <div className="font-hand2 text-xl leading-tight">Somewhere special</div>
                <div className="text-[11px] text-cream-100/80 mt-0.5">2024-03-24 · 6:42 PM</div>

                {/* Voice note UI */}
                <div className="mt-3 rounded-xl bg-white/10 backdrop-blur border border-white/15 p-2.5 flex items-center gap-2">
                  <button
                    onClick={() => setPlaying((p) => !p)}
                    className="w-9 h-9 rounded-full bg-white text-crimson-600 flex items-center justify-center flex-shrink-0"
                    aria-label="Play voice note"
                  >
                    {playing ? (
                      <svg width="12" height="12" viewBox="0 0 12 12"><rect x="2" y="2" width="3" height="8" fill="currentColor" /><rect x="7" y="2" width="3" height="8" fill="currentColor" /></svg>
                    ) : (
                      <svg width="12" height="12" viewBox="0 0 12 12"><path d="M3 2 L3 10 L10 6 Z" fill="currentColor" /></svg>
                    )}
                  </button>
                  <div className="flex-1 flex items-center gap-[2px] h-7">
                    {Array.from({ length: 28 }).map((_, i) => {
                      const h = 30 + Math.abs(Math.sin(i * 0.7) * 70) + (i % 3) * 6
                      return (
                        <span
                          key={i}
                          className="waveform-bar"
                          style={{
                            height: `${h}%`,
                            animationDelay: `${i * 0.04}s`,
                            opacity: playing ? 1 : 0.6,
                          }}
                        />
                      )
                    })}
                  </div>
                  <div className="text-[10px] text-cream-100/80 font-medium">0:14</div>
                </div>
                <div className="mt-2 text-[11px] italic text-cream-100/80 leading-snug">
                  "I knew it was you the moment you spilled coffee on my shoes and laughed."
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
