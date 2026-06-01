import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Cloud, HeartCutout, WashiStrip, Rose, TapeStrip, SpeechBubble } from './Roses.jsx'

// Lock screen: keypad, padlock, clouds, and 4-dot indicator.
// "Unlock code" is hardcoded to 1234 for the demo. Any 4-digit input triggers onUnlock.
const UNLOCK_CODE = '1234'

export default function LockScreen({ onUnlock }) {
  const [input, setInput] = useState('')
  const [shake, setShake] = useState(false)

  useEffect(() => {
    if (input.length === 4) {
      // Brief delay so user sees the 4th dot fill
      const ok = input === UNLOCK_CODE
      const t = setTimeout(() => {
        if (ok) onUnlock?.()
        else {
          setShake(true)
          setTimeout(() => {
            setShake(false)
            setInput('')
          }, 600)
        }
      }, 220)
      return () => clearTimeout(t)
    }
  }, [input, onUnlock])

  const press = (n) => {
    if (input.length < 4) setInput((s) => s + n)
  }
  const back = () => setInput((s) => s.slice(0, -1))

  return (
    <div className="relative w-full h-full bg-blush-soft overflow-hidden">
      {/* Floating clouds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[6%] top-[14%] animate-float-x" style={{ animationDelay: '0s' }}>
          <Cloud size={140} />
        </div>
        <div className="absolute right-[8%] top-[18%] animate-float-x" style={{ animationDelay: '1.2s' }}>
          <Cloud size={120} />
        </div>
        <div className="absolute left-[12%] bottom-[18%] animate-float-x" style={{ animationDelay: '0.6s' }}>
          <Cloud size={100} />
        </div>
        <div className="absolute right-[14%] bottom-[12%] animate-float-x" style={{ animationDelay: '1.8s' }}>
          <Cloud size={130} />
        </div>
        <div className="absolute left-1/2 top-[8%] -translate-x-1/2 animate-float-x" style={{ animationDelay: '0.4s' }}>
          <Cloud size={90} />
        </div>
      </div>

      {/* washi tapes at corners */}
      <div className="absolute left-4 top-6 rotate-[-18deg] opacity-80">
        <WashiStrip size={120} color="pink" rotation={-18} />
      </div>
      <div className="absolute right-4 top-8 rotate-[14deg] opacity-80">
        <WashiStrip size={100} color="gold" rotation={14} />
      </div>

      {/* From/For labels */}
      <div className="absolute left-[6%] top-[10%] z-10">
        <SpeechBubble rotation={-6} size={220}>
          <div className="text-left">
            <div className="text-crimson-400 text-lg">From:</div>
            <div className="text-crimson-500 text-3xl font-semibold">Zoey</div>
          </div>
        </SpeechBubble>
      </div>
      <div className="absolute right-[4%] top-[14%] z-10">
        <SpeechBubble rotation={5} size={220}>
          <div className="text-left">
            <div className="text-crimson-400 text-lg">For:</div>
            <div className="text-crimson-500 text-3xl font-semibold">Jim</div>
          </div>
        </SpeechBubble>
      </div>

      {/* Center padlock + keypad */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6">
        <motion.div
          className="flex flex-col items-center"
          animate={shake ? { x: [-10, 10, -10, 10, 0] } : { x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Padlock */}
          <div className="relative w-[180px] h-[200px] mb-2">
            <div className="absolute inset-x-0 top-0 flex justify-center">
              <HeartCutout size={150} className="-translate-y-6" />
            </div>
            <div
              className="absolute inset-x-0 bottom-0 mx-auto w-[150px] h-[120px] rounded-2xl bg-gradient-to-b from-crimson-300 to-crimson-500 border-2 border-crimson-700"
              style={{ boxShadow: '0 12px 30px rgba(0,0,0,0.3), inset 0 -8px 14px rgba(0,0,0,0.25), inset 0 6px 8px rgba(255,255,255,0.15)' }}
            >
              {/* shackle base */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-[88px] h-[100px] rounded-t-full border-[14px] border-crimson-200 border-b-0"
                style={{ boxShadow: 'inset 0 4px 6px rgba(255,255,255,0.4)' }}
              />
              <div className="absolute left-1/2 -translate-x-1/2 top-[34px] w-4 h-4 rounded-full bg-crimson-100" />
              <div className="absolute left-1/2 -translate-x-1/2 top-[58px] w-10 h-3 rounded bg-crimson-700/40" />
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-4 my-6">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                  input.length > i
                    ? 'bg-crimson-500 border-crimson-500 scale-110'
                    : 'bg-white/40 border-crimson-300'
                }`}
              />
            ))}
          </div>

          {/* Keypad */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl glass-dark bg-white/10 border-white/30"
            style={{ boxShadow: '0 14px 40px rgba(0,0,0,0.18)' }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <button
                key={n}
                onClick={() => press(String(n))}
                className="key-key w-16 h-16 sm:w-20 sm:h-20 rounded-2xl font-semibold text-2xl text-crimson-600 flex items-center justify-center"
                aria-label={`Digit ${n}`}
              >
                {n}
              </button>
            ))}
            <div className="w-16 h-16 sm:w-20 sm:h-20" />
            <button
              onClick={() => press('0')}
              className="key-key w-16 h-16 sm:w-20 sm:h-20 rounded-2xl font-semibold text-2xl text-crimson-600 flex items-center justify-center"
              aria-label="Digit 0"
            >
              0
            </button>
            <button
              onClick={back}
              className="key-key w-16 h-16 sm:w-20 sm:h-20 rounded-2xl text-crimson-600 flex items-center justify-center"
              aria-label="Backspace"
            >
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                <path d="M9 3 L3 10 L9 17 H22 V3 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M11 7 L17 13 M17 7 L11 13" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
          </div>

          <p className="mt-6 font-hand text-2xl text-crimson-400 italic">hint: it's the day we met</p>
        </motion.div>
      </div>

      {/* corner rose accents */}
      <div className="absolute left-6 bottom-6 rotate-[-12deg] opacity-90">
        <Rose size={70} palette="pink" />
      </div>
      <div className="absolute right-6 bottom-8 rotate-[15deg] opacity-90">
        <Rose size={60} palette="red" />
      </div>
    </div>
  )
}
