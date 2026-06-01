// Drifting petals overlay — adds gentle movement to the whole page.
import { useEffect, useRef } from 'react'

export default function FloatingPetals({ count = 18 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    const petals = Array.from(el.children)
    const start = performance.now()
    const tick = (t) => {
      const elapsed = (t - start) / 1000
      petals.forEach((p, i) => {
        const speed = 0.3 + (i % 5) * 0.05
        const drift = Math.sin(elapsed * speed + i) * 18
        p.style.transform = `translate3d(${drift}px, ${(elapsed * speed * 12) % 120 - 10}vh, 0) rotate(${(elapsed * 20 + i * 30) % 360}deg)`
        p.style.opacity = 0.55 + Math.sin(elapsed + i) * 0.25
      })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])
  const colors = ['#ff7a96', '#c84556', '#ffd6e0', '#ffb1c2', '#a91c30']
  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const c = colors[i % colors.length]
        return (
          <span
            key={i}
            className="absolute"
            style={{
              left: `${(i * 7.3) % 100}%`,
              top: '-8vh',
              width: 14,
              height: 18,
              background: c,
              borderRadius: '70% 30% 70% 30%',
              filter: 'blur(0.4px)',
              boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.18)',
              willChange: 'transform',
            }}
          />
        )
      })}
    </div>
  )
}
