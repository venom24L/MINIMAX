import { motion } from 'framer-motion'
import { Rose, WashiStrip } from './Roses.jsx'

// Loading screen: soft pink background, rotating rose wreath, "LOADING" text.
export default function LoadingScreen() {
  // 12 rose positions around a circle
  const petals = Array.from({ length: 12 }, (_, i) => i)
  const palettes = ['red', 'pink', 'white', 'red', 'pink', 'white', 'red', 'pink', 'white', 'red', 'pink', 'white']
  return (
    <div className="relative w-full h-full bg-pink-soft flex flex-col items-center justify-center overflow-hidden">
      {/* Background scattered paper bits */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[8%] top-[15%] rotate-[-12deg] opacity-70">
          <WashiStrip size={120} color="pink" rotation={-12} />
        </div>
        <div className="absolute right-[10%] top-[20%] rotate-[8deg] opacity-70">
          <WashiStrip size={100} color="gold" rotation={8} />
        </div>
        <div className="absolute left-[15%] bottom-[18%] rotate-[6deg] opacity-60">
          <WashiStrip size={90} color="mint" rotation={6} />
        </div>
        <div className="absolute right-[12%] bottom-[22%] rotate-[-9deg] opacity-60">
          <WashiStrip size={110} color="blue" rotation={-9} />
        </div>
      </div>

      {/* Wreath */}
      <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] flex items-center justify-center">
        {/* Continuous CSS keyframe rotation */}
        <div
          className="absolute inset-0 animate-spin-slow"
          style={{ animationDuration: '14s' }}
        >
          {petals.map((i) => {
            const angle = (i / petals.length) * Math.PI * 2
            const r = 44 // % of container
            const x = 50 + Math.cos(angle) * r
            const y = 50 + Math.sin(angle) * r
            return (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: `translate(-50%, -50%) rotate(${(angle * 180) / Math.PI + 90}deg)`,
                }}
              >
                <Rose size={56} palette={palettes[i]} />
              </div>
            )
          })}
        </div>

        {/* Center heart label */}
        <motion.div
          className="relative z-10 sticker px-6 py-3 rounded-md rotate-[-4deg]"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 220, damping: 18 }}
        >
          <div className="font-hand2 text-3xl text-crimson-500 leading-none">for you, my love</div>
          <div className="font-hand text-lg text-crimson-400 text-center">~ a little surprise ~</div>
        </motion.div>
      </div>

      {/* Loading text */}
      <motion.div
        className="mt-10 flex flex-col items-center gap-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center gap-2">
          {['L', 'O', 'A', 'D', 'I', 'N', 'G'].map((c, i) => (
            <motion.span
              key={i}
              className="font-hand2 text-4xl text-crimson-500"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.08 }}
            >
              {c}
            </motion.span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-crimson-300 text-sm font-medium tracking-[0.4em]">
          <span className="w-8 h-[1px] bg-crimson-200" />
          PLEASE WAIT
          <span className="w-8 h-[1px] bg-crimson-200" />
        </div>
      </motion.div>
    </div>
  )
}
