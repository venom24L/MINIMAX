import { useEffect, useRef } from 'react'

// Scratch-off polaroid: a photo hidden under a gray/silver "scratch me" canvas.
// Drag pointer (or finger) across the canvas to wipe away the gray layer.
export default function ScratchPolaroid({
  width = 240,
  height = 300,
  image = null,                // optional <img> node rendered beneath the canvas
  caption = 'memory',
  rotation = 0,
  className = '',
  style = {},
  bgClass = 'photo-1',
}) {
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)
  const drawingRef = useRef(false)
  const lastRef = useRef({ x: 0, y: 0 })

  // Initialize canvas with gray + "Scratch me" text + a few "scratch here" guides.
  // Re-runs on resize so the silver layer always matches the container.
  const drawSilver = () => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return
    const rect = wrap.getBoundingClientRect()
    const w = rect.width
    const h = rect.height
    const dpr = window.devicePixelRatio || 1
    canvas.width = w * dpr
    canvas.height = h * dpr
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`
    const ctx = canvas.getContext('2d')
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    // Base silver gradient
    const grad = ctx.createLinearGradient(0, 0, w, h)
    grad.addColorStop(0, '#cfd2d6')
    grad.addColorStop(0.5, '#a9adb2')
    grad.addColorStop(1, '#cfd2d6')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, w, h)

    // Subtle glitter
    for (let i = 0; i < 100; i++) {
      ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.3})`
      ctx.beginPath()
      ctx.arc(Math.random() * w, Math.random() * h, Math.random() * 1.4, 0, Math.PI * 2)
      ctx.fill()
    }

    // "Scratch me" text - handwritten style, scaled to current size
    const titleSize = Math.max(20, Math.min(36, w * 0.13))
    const subSize = Math.max(11, Math.min(18, w * 0.06))
    ctx.save()
    ctx.translate(w / 2, h / 2)
    ctx.rotate(-0.12)
    ctx.fillStyle = '#5a3030'
    ctx.font = `700 ${titleSize}px 'Caveat', cursive`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('Scratch me', 0, -titleSize * 0.4)
    ctx.font = `400 ${subSize}px 'Caveat', cursive`
    ctx.fillStyle = '#7a4a4a'
    ctx.fillText('· to reveal the photo ·', 0, subSize * 1.2)
    ctx.restore()

    // Hint at corners
    ctx.font = `400 ${Math.max(10, subSize - 2)}px 'Caveat', cursive`
    ctx.fillStyle = 'rgba(0,0,0,0.25)'
    ctx.textAlign = 'left'
    ctx.fillText('← drag →', 10, h - 10)
    ctx.textAlign = 'right'
    ctx.fillText('use your finger', w - 10, 18)
  }

  useEffect(() => {
    drawSilver()
    const wrap = wrapRef.current
    if (!wrap) return
    const ro = new ResizeObserver(() => drawSilver())
    ro.observe(wrap)
    return () => ro.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getPos = (e) => {
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    let clientX, clientY
    if (e.touches && e.touches.length) {
      clientX = e.touches[0].clientX
      clientY = e.touches[0].clientY
    } else {
      clientX = e.clientX
      clientY = e.clientY
    }
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    }
  }

  const scratch = (x, y) => {
    const ctx = canvasRef.current.getContext('2d')
    ctx.globalCompositeOperation = 'destination-out'
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.lineWidth = 36
    const last = lastRef.current
    if (last.x === 0 && last.y === 0) {
      last.x = x
      last.y = y
    }
    ctx.beginPath()
    ctx.moveTo(last.x, last.y)
    ctx.lineTo(x, y)
    ctx.stroke()
    last.x = x
    last.y = y
    // Reset composite
    ctx.globalCompositeOperation = 'source-over'
  }

  const onDown = (e) => {
    e.preventDefault()
    drawingRef.current = true
    const { x, y } = getPos(e)
    lastRef.current = { x, y }
    scratch(x, y)
  }
  const onMove = (e) => {
    if (!drawingRef.current) return
    e.preventDefault()
    const { x, y } = getPos(e)
    scratch(x, y)
  }
  const onUp = () => {
    drawingRef.current = false
    lastRef.current = { x: 0, y: 0 }
  }

  return (
    <div
      className={`polaroid photo-shadow w-full ${className}`}
      style={{
        maxWidth: width + 24,
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
    >
      {/* Image revealed underneath */}
      <div
        ref={wrapRef}
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        {image ? (
          <img src={image} alt={caption} className="w-full h-full object-cover" />
        ) : (
          <div className={`w-full h-full ${bgClass} flex items-center justify-center`}>
            <div className="text-white/90 font-hand2 text-3xl text-center px-4 leading-tight">
              {caption}
            </div>
          </div>
        )}
        {/* Canvas overlay (the scratch layer) */}
        <canvas
          ref={canvasRef}
          className="scratch absolute inset-0"
          onMouseDown={onDown}
          onMouseMove={onMove}
          onMouseUp={onUp}
          onMouseLeave={onUp}
          onTouchStart={onDown}
          onTouchMove={onMove}
          onTouchEnd={onUp}
        />
      </div>
      {/* Caption */}
      <div
        className="absolute left-0 right-0 bottom-2 text-center font-hand text-xl text-crimson-600"
      >
        {caption}
      </div>
    </div>
  )
}
