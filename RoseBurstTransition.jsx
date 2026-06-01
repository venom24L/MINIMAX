import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Rose } from './assets/Roses.jsx'

// Generates a wall of dense roses and animates them scaling from 0 to 50
// to wipe across the entire viewport. Used for both Transition A and B.
export default function RoseBurstTransition({ active, onComplete }) {
  // Only generate roses once
  const roses = useMemo(() => {
    const arr = []
    const palettes = ['red', 'pink', 'white', 'mixed']
    // Build a 16x10 grid covering the viewport
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 16; col++) {
        const jitterX = (Math.random() - 0.5) * 4
        const jitterY = (Math.random() - 0.5) * 4
        const scale = 0.85 + Math.random() * 0.7
        const rot = (Math.random() - 0.5) * 40
        const palette = palettes[(row + col) % palettes.length]
        arr.push({
          id: `${row}-${col}`,
          left: `calc(${(col / 16) * 100}% + ${jitterX}px)`,
          top: `calc(${(row / 10) * 100}% + ${jitterY}px)`,
          scale,
          rot,
          palette,
        })
      }
    }
    return arr
  }, [])

  useEffect(() => {
    if (!active) return
    const t = setTimeout(() => onComplete?.(), 1500)
    return () => clearTimeout(t)
  }, [active, onComplete])

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="rose-burst"
          className="fixed inset-0 z-[60] pointer-events-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* origin marker at center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0">
            <motion.div
              className="relative"
              initial={{ scale: 0 }}
              animate={{ scale: 50 }}
              transition={{ duration: 1.3, ease: [0.7, 0, 0.84, 0] }}
            >
              <div
                className="relative"
                style={{ width: '100vw', height: '100vh' }}
              >
                {roses.map((r) => (
                  <div
                    key={r.id}
                    className="absolute"
                    style={{
                      left: r.left,
                      top: r.top,
                      transform: `translate(-50%, -50%) rotate(${r.rot}deg) scale(${r.scale})`,
                    }}
                  >
                    <Rose size={90} palette={r.palette} />
                  </div>
                ))}
                {/* center fill so the wipe is solid */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    width: '60vmin',
                    height: '60vmin',
                    background:
                      'radial-gradient(circle, rgba(122,13,24,0.5) 0%, rgba(122,13,24,0.0) 70%)',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
