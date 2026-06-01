// Rose SVG components and decorative asset library.
// Style: paper cutout roses with overlapping petals, watercolor-ish highlights.
// All assets are inline SVGs to keep the project self-contained.

const PETAL = (cx, cy, r, fill, opacity = 1) => (
  <ellipse cx={cx} cy={cy} rx={r} ry={r * 1.2} fill={fill} opacity={opacity} />
)

export function Rose({ size = 100, palette = 'red', className = '', style }) {
  // palette: 'red' | 'pink' | 'white' | 'mixed'
  const palettes = {
    red:   { main: '#a91c30', deep: '#5e0913', light: '#e08490' },
    pink:  { main: '#ff7a96', deep: '#c84556', light: '#ffd6e0' },
    white: { main: '#fff5f7', deep: '#ffd6e0', light: '#ffffff' },
    mixed: { main: '#c84556', deep: '#7a0d18', light: '#ffd6e0' },
  }
  const c = palettes[palette] || palettes.red
  const id = `r-${palette}-${Math.random().toString(36).slice(2, 8)}`
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={`${id}-bg`} cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={c.light} />
          <stop offset="100%" stopColor={c.main} />
        </radialGradient>
        <radialGradient id={`${id}-deep`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={c.deep} stopOpacity="0" />
          <stop offset="100%" stopColor={c.deep} stopOpacity="0.5" />
        </radialGradient>
      </defs>
      {/* outer petals */}
      {PETAL(50, 50, 38, c.main, 0.45)}
      {PETAL(28, 32, 22, c.main, 0.85)}
      {PETAL(72, 32, 22, c.main, 0.85)}
      {PETAL(28, 70, 22, c.main, 0.85)}
      {PETAL(72, 70, 22, c.main, 0.85)}
      {PETAL(50, 20, 22, c.main, 0.85)}
      {PETAL(50, 80, 22, c.main, 0.85)}
      {PETAL(20, 50, 22, c.main, 0.85)}
      {PETAL(80, 50, 22, c.main, 0.85)}
      {/* mid petals */}
      {PETAL(38, 38, 18, c.light, 0.95)}
      {PETAL(62, 38, 18, c.light, 0.95)}
      {PETAL(38, 62, 18, c.light, 0.95)}
      {PETAL(62, 62, 18, c.light, 0.95)}
      {/* inner */}
      {PETAL(50, 50, 18, `url(#${id}-bg)`, 1)}
      {PETAL(46, 46, 12, c.deep, 0.55)}
      {PETAL(54, 54, 10, c.deep, 0.55)}
      <circle cx="50" cy="50" r="6" fill={c.deep} opacity="0.9" />
      <circle cx="48" cy="48" r="2" fill={c.light} opacity="0.7" />
      <circle cx="50" cy="50" r="40" fill={`url(#${id}-deep)`} />
    </svg>
  )
}

export function RoseBunch({ size = 200, className = '', style }) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size, ...style }}>
      <div className="absolute" style={{ left: '0%', top: '10%' }}>
        <Rose size={size * 0.55} palette="red" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.25))' }} />
      </div>
      <div className="absolute" style={{ left: '40%', top: '0%' }}>
        <Rose size={size * 0.6} palette="pink" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.25))' }} />
      </div>
      <div className="absolute" style={{ left: '30%', top: '40%' }}>
        <Rose size={size * 0.5} palette="mixed" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.25))' }} />
      </div>
      <div className="absolute" style={{ left: '55%', top: '35%' }}>
        <Rose size={size * 0.45} palette="white" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.25))' }} />
      </div>
      {/* leaves */}
      <svg
        className="absolute"
        style={{ left: '5%', top: '55%', width: size * 0.5, height: size * 0.4 }}
        viewBox="0 0 100 80"
      >
        <path
          d="M5 70 Q20 10 95 30 Q60 50 70 75 Q35 70 5 70 Z"
          fill="#3a6b3a"
          opacity="0.85"
        />
        <path d="M10 68 Q40 50 90 35" stroke="#264826" strokeWidth="1.2" fill="none" />
      </svg>
    </div>
  )
}

export function HeartCutout({ size = 80, className = '', style, fill = '#c84556' }) {
  return (
    <svg className={className} style={style} width={size} height={size} viewBox="0 0 100 100">
      <defs>
        <filter id="heart-shadow">
          <feDropShadow dx="0" dy="3" stdDeviation="2" floodOpacity="0.35" />
        </filter>
      </defs>
      <path
        filter="url(#heart-shadow)"
        d="M50 88 C 18 64, 8 40, 22 24 C 32 14, 46 16, 50 28 C 54 16, 68 14, 78 24 C 92 40, 82 64, 50 88 Z"
        fill={fill}
        stroke="#5e0913"
        strokeWidth="1.2"
      />
      <path
        d="M30 30 Q35 22 44 24"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  )
}

export function Cloud({ size = 120, className = '', style }) {
  return (
    <svg className={className} style={style} width={size} height={size * 0.6} viewBox="0 0 200 120">
      <g>
        <ellipse cx="50" cy="70" rx="40" ry="32" fill="#fffaf2" />
        <ellipse cx="100" cy="55" rx="55" ry="40" fill="#fffaf2" />
        <ellipse cx="155" cy="70" rx="40" ry="32" fill="#fffaf2" />
        <ellipse cx="80" cy="80" rx="50" ry="28" fill="#fffaf2" />
        <ellipse cx="130" cy="80" rx="50" ry="28" fill="#fffaf2" />
      </g>
      <g opacity="0.4" style={{ mixBlendMode: 'multiply' }}>
        <ellipse cx="50" cy="72" rx="38" ry="6" fill="#e8d8c0" />
        <ellipse cx="100" cy="58" rx="53" ry="6" fill="#e8d8c0" />
        <ellipse cx="155" cy="72" rx="38" ry="6" fill="#e8d8c0" />
      </g>
    </svg>
  )
}

export function Cat({ variant = 'white', size = 160, className = '', style }) {
  const isWhite = variant === 'white'
  const body = isWhite ? '#fffaf2' : '#1a1a1a'
  const shadow = isWhite ? '#e8d8c0' : '#000'
  const pink = '#ffb1c2'
  return (
    <svg className={className} style={style} width={size} height={size} viewBox="0 0 160 160">
      {/* tail */}
      <path
        d="M120 120 Q150 110 145 80 Q140 60 120 70"
        fill="none"
        stroke={body}
        strokeWidth="14"
        strokeLinecap="round"
      />
      {/* body */}
      <ellipse cx="80" cy="115" rx="42" ry="28" fill={body} />
      <ellipse cx="80" cy="125" rx="32" ry="10" fill={shadow} opacity="0.35" />
      {/* head */}
      <circle cx="80" cy="70" r="34" fill={body} />
      {/* ears */}
      <path d="M52 50 L60 22 L78 44 Z" fill={body} />
      <path d="M108 50 L100 22 L82 44 Z" fill={body} />
      <path d="M58 44 L62 30 L72 42 Z" fill={pink} opacity="0.8" />
      <path d="M102 44 L98 30 L88 42 Z" fill={pink} opacity="0.8" />
      {/* eyes */}
      <ellipse cx="68" cy="70" rx="4" ry="6" fill="#1a1a1a" />
      <ellipse cx="92" cy="70" rx="4" ry="6" fill="#1a1a1a" />
      {isWhite && (
        <>
          <ellipse cx="68" cy="68" rx="1" ry="2" fill="#fff" />
          <ellipse cx="92" cy="68" rx="1" ry="2" fill="#fff" />
        </>
      )}
      {/* nose & mouth */}
      <path d="M78 78 L82 78 L80 81 Z" fill={pink} />
      <path d="M80 81 Q76 86 72 84" stroke="#1a1a1a" strokeWidth="1.4" fill="none" />
      <path d="M80 81 Q84 86 88 84" stroke="#1a1a1a" strokeWidth="1.4" fill="none" />
      {/* whiskers */}
      <line x1="60" y1="82" x2="40" y2="78" stroke={isWhite ? '#1a1a1a' : '#fff'} strokeWidth="1" />
      <line x1="60" y1="86" x2="40" y2="88" stroke={isWhite ? '#1a1a1a' : '#fff'} strokeWidth="1" />
      <line x1="100" y1="82" x2="120" y2="78" stroke={isWhite ? '#1a1a1a' : '#fff'} strokeWidth="1" />
      <line x1="100" y1="86" x2="120" y2="88" stroke={isWhite ? '#1a1a1a' : '#fff'} strokeWidth="1" />
      {/* chest patch */}
      <ellipse cx="80" cy="115" rx="14" ry="14" fill={isWhite ? '#ffd6e0' : '#3a1a1a'} opacity="0.7" />
      {/* paw lines */}
      <ellipse cx="68" cy="138" rx="8" ry="4" fill={shadow} opacity="0.4" />
      <ellipse cx="92" cy="138" rx="8" ry="4" fill={shadow} opacity="0.4" />
    </svg>
  )
}

export function FlowerBouquet({ size = 220, className = '', style }) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size * 1.2, ...style }}>
      <div className="absolute" style={{ left: '10%', top: '5%' }}>
        <Rose size={size * 0.4} palette="red" />
      </div>
      <div className="absolute" style={{ left: '45%', top: '0%' }}>
        <Rose size={size * 0.45} palette="pink" />
      </div>
      <div className="absolute" style={{ left: '0%', top: '30%' }}>
        <Rose size={size * 0.35} palette="white" />
      </div>
      <div className="absolute" style={{ left: '55%', top: '25%' }}>
        <Rose size={size * 0.4} palette="mixed" />
      </div>
      <div className="absolute" style={{ left: '30%', top: '20%' }}>
        <Rose size={size * 0.32} palette="pink" />
      </div>
      {/* leaves */}
      <svg
        className="absolute"
        style={{ left: '0%', top: '40%', width: '100%', height: '50%' }}
        viewBox="0 0 200 120"
      >
        <path d="M20 110 Q40 30 110 50 Q150 70 180 30 Q170 90 130 110 Q70 120 20 110 Z" fill="#3a6b3a" opacity="0.85" />
        <path d="M30 105 Q70 70 100 55" stroke="#264826" strokeWidth="1.4" fill="none" />
        <path d="M40 100 Q90 50 170 35" stroke="#264826" strokeWidth="1.4" fill="none" />
      </svg>
      {/* ribbon */}
      <svg
        className="absolute"
        style={{ left: '20%', top: '50%', width: '60%', height: '20%' }}
        viewBox="0 0 200 60"
      >
        <path d="M20 30 Q60 10 100 30 Q140 50 180 30" stroke="#c84556" strokeWidth="6" fill="none" />
        <circle cx="100" cy="30" r="8" fill="#c84556" />
        <path d="M85 28 L70 50 L95 35 Z" fill="#a91c30" />
        <path d="M115 28 L130 50 L105 35 Z" fill="#a91c30" />
      </svg>
    </div>
  )
}

export function Star({ size = 200, className = '', style, fill = 'leopard' }) {
  return (
    <div
      className={`${className} ${fill === 'leopard' ? 'leopard-bg' : ''}`}
      style={{
        width: size,
        height: size,
        ...style,
      }}
    >
      <svg viewBox="0 0 100 100" width="100%" height="100%" className="star-shape">
        <polygon
          points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35"
          fill="rgba(0,0,0,0.0)"
        />
      </svg>
    </div>
  )
}

export function WashiStrip({ size = 80, color = 'pink', className = '', style, rotation = 0 }) {
  const palettes = {
    pink: 'repeating-linear-gradient(45deg, #ff7a96 0 6px, #ff5a7c 6px 12px, #ffd6e0 12px 18px)',
    blue: 'repeating-linear-gradient(45deg, #b6d6f2 0 6px, #87b6e0 6px 12px, #e6f0fa 12px 18px)',
    gold: 'repeating-linear-gradient(45deg, #f3c46b 0 6px, #c89a3a 6px 12px, #fbe6b4 12px 18px)',
    mint: 'repeating-linear-gradient(45deg, #b9e0c4 0 6px, #87c89a 6px 12px, #dff0e3 12px 18px)',
  }
  return (
    <div
      className={className}
      style={{
        width: size,
        height: 18,
        background: palettes[color],
        boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
        transform: `rotate(${rotation}deg)`,
        opacity: 0.92,
        ...style,
      }}
    />
  )
}

export function TapeStrip({ className = '', style, rotation = -6 }) {
  return (
    <div className={`tape ${className}`} style={{ transform: `rotate(${rotation}deg)`, ...style }} />
  )
}

export function SpeechBubble({ children, size = 200, className = '', style, rotation = -2 }) {
  return (
    <div
      className={`relative ${className}`}
      style={{ transform: `rotate(${rotation}deg)`, ...style }}
    >
      <svg width={size} height={size * 0.55} viewBox="0 0 200 110">
        <path
          d="M20 10 Q10 10 10 25 L10 80 Q10 95 25 95 L80 95 L92 105 L92 95 L175 95 Q190 95 190 80 L190 25 Q190 10 180 10 Z"
          fill="#fffaf2"
          stroke="#2a0a10"
          strokeWidth="1.5"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center px-6 pb-3">
        <div className="font-hand text-2xl text-crimson-500 text-center leading-tight">
          {children}
        </div>
      </div>
    </div>
  )
}
