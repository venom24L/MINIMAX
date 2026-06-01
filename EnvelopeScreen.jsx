import { useState } from 'react'
import { motion } from 'framer-motion'
import { WashiStrip, Rose, TapeStrip } from './assets/Roses.jsx'

// Envelope screen: red paper envelope with wax seal, gentle breathing animation.
// Click/tap the envelope to call onOpen().
export default function EnvelopeScreen({ onOpen }) {
  const [open, setOpen] = useState(false)
  const handle = () => {
    if (open) return
    setOpen(true)
    setTimeout(() => onOpen?.(), 80)
  }
  return (
    <div className="relative w-full h-full bg-pink-soft flex flex-col items-center justify-center overflow-hidden">
      {/* corner bits */}
      <div className="absolute left-6 top-10 rotate-[-12deg] opacity-80">
        <WashiStrip size={130} color="pink" rotation={-12} />
      </div>
      <div className="absolute right-8 top-16 rotate-[10deg] opacity-80">
        <WashiStrip size={110} color="gold" rotation={10} />
      </div>
      <div className="absolute left-12 bottom-12 rotate-[6deg] opacity-70">
        <WashiStrip size={100} color="blue" rotation={6} />
      </div>
      <div className="absolute right-10 bottom-16 rotate-[-8deg] opacity-70">
        <WashiStrip size={120} color="mint" rotation={-8} />
      </div>

      {/* subtle floating roses */}
      <div className="absolute left-10 top-1/3 animate-float-y opacity-80" style={{ animationDelay: '0.4s' }}>
        <Rose size={70} palette="pink" />
      </div>
      <div className="absolute right-10 bottom-1/3 animate-float-y opacity-80" style={{ animationDelay: '1.1s' }}>
        <Rose size={60} palette="red" />
      </div>

      {/* handwritten tag line */}
      <motion.div
        className="relative z-10 mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="font-hand2 text-4xl text-crimson-500">a letter for you</div>
      </motion.div>

      {/* Envelope */}
      <motion.button
        onClick={handle}
        className="relative z-10 envelope-shadow"
        style={{ width: 360, height: 240, maxWidth: '85vw' }}
        animate={{ scale: [1, 1.035, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.05, rotate: -2 }}
        whileTap={{ scale: 0.97 }}
        aria-label="Tap to open envelope"
      >
        <svg viewBox="0 0 360 240" width="100%" height="100%">
          <defs>
            <linearGradient id="envelope-back" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a91c30" />
              <stop offset="100%" stopColor="#7a0d18" />
            </linearGradient>
            <linearGradient id="envelope-front" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#c84556" />
              <stop offset="100%" stopColor="#7a0d18" />
            </linearGradient>
            <pattern id="paper-tex" patternUnits="userSpaceOnUse" width="200" height="200">
              <rect width="200" height="200" fill="transparent" />
              <circle cx="20" cy="40" r="0.6" fill="rgba(0,0,0,0.18)" />
              <circle cx="120" cy="80" r="0.4" fill="rgba(0,0,0,0.18)" />
              <circle cx="180" cy="20" r="0.5" fill="rgba(0,0,0,0.18)" />
              <circle cx="60" cy="160" r="0.5" fill="rgba(0,0,0,0.18)" />
            </pattern>
            <radialGradient id="wax-grad" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#ff7a96" />
              <stop offset="50%" stopColor="#a91c30" />
              <stop offset="100%" stopColor="#43060d" />
            </radialGradient>
          </defs>
          {/* shadow under envelope */}
          <ellipse cx="180" cy="232" rx="160" ry="10" fill="rgba(0,0,0,0.3)" />

          {/* envelope back */}
          <rect x="6" y="14" width="348" height="212" rx="6" fill="url(#envelope-back)" />
          <rect x="6" y="14" width="348" height="212" rx="6" fill="url(#paper-tex)" />

          {/* letter peeking */}
          <g>
            <rect x="40" y="32" width="280" height="180" rx="3" fill="#fffaf2" />
            <rect x="40" y="32" width="280" height="180" rx="3" fill="url(#paper-tex)" opacity="0.3" />
            <line x1="60" y1="60" x2="300" y2="60" stroke="#c84556" strokeWidth="1" opacity="0.4" />
            <line x1="60" y1="80" x2="280" y2="80" stroke="#c84556" strokeWidth="1" opacity="0.3" />
            <line x1="60" y1="100" x2="290" y2="100" stroke="#c84556" strokeWidth="1" opacity="0.3" />
            <line x1="60" y1="120" x2="250" y2="120" stroke="#c84556" strokeWidth="1" opacity="0.3" />
            <text x="180" y="180" textAnchor="middle" fontFamily="'Caveat', cursive" fontSize="28" fill="#7a0d18">
              ~ for jim ~
            </text>
          </g>

          {/* envelope front flap (closed) */}
          <path
            d="M6 14 L180 130 L354 14 L354 226 L6 226 Z"
            fill="url(#envelope-front)"
          />
          <path
            d="M6 14 L180 130 L354 14"
            stroke="rgba(0,0,0,0.25)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M6 226 L180 110 L354 226"
            stroke="rgba(0,0,0,0.25)"
            strokeWidth="1.2"
            fill="none"
          />
          {/* paper grain overlay */}
          <path
            d="M6 14 L180 130 L354 14 L354 226 L6 226 Z"
            fill="url(#paper-tex)"
            opacity="0.7"
          />

          {/* wax seal */}
          <g transform="translate(180,150)">
            <circle r="36" fill="url(#wax-grad)" />
            <circle r="36" fill="url(#paper-tex)" opacity="0.4" />
            <circle r="30" fill="none" stroke="rgba(0,0,0,0.25)" strokeWidth="1" />
            <text textAnchor="middle" y="6" fontFamily="'Caveat', cursive" fontSize="28" fill="#fff5f7">Z ♥ J</text>
            {/* seal drips */}
            <path d="M-30 16 L-26 30 L-22 18 Z" fill="url(#wax-grad)" />
            <path d="M28 18 L34 32 L20 24 Z" fill="url(#wax-grad)" />
            <path d="M-4 32 L0 42 L4 30 Z" fill="url(#wax-grad)" />
          </g>
        </svg>

        {/* tape */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <TapeStrip rotation={-6} />
        </div>
      </motion.button>

      {/* tap-to-open text */}
      <motion.div
        className="relative z-10 mt-8 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="font-hand2 text-3xl text-crimson-500">Tap to open</div>
        <motion.div
          className="mt-1 text-crimson-300"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
            <path d="M4 4 L14 14 L24 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}
