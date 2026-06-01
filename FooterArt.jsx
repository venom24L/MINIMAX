import { Cat } from './assets/Roses.jsx'

// Footer art: large cutout "I LOVE U" with leopard + crimson textures,
// plus two cat illustrations sitting in front.
export default function FooterArt({ className = '', style = {} }) {
  return (
    <div className={`relative ${className}`} style={style}>
      {/* Layered letters */}
      <div className="relative flex items-end justify-center select-none" style={{ minHeight: 240 }}>
        {/* Crimson back layer (offset shadow) */}
        <div
          className="absolute inset-x-0 top-6 flex justify-center"
          style={{ transform: 'translate(6px, 6px)' }}
        >
          <div className="font-black text-[18vw] sm:text-[160px] leading-none tracking-tight text-cutout-crimson opacity-80">
            I LOVE U
          </div>
        </div>

        {/* Leopard top layer */}
        <div className="relative">
          <h1
            className="font-black text-[18vw] sm:text-[160px] leading-none tracking-tight text-cutout-leopard"
            style={{ textShadow: '4px 4px 0 #7a0d18' }}
          >
            I LOVE U
          </h1>
        </div>
      </div>

      {/* Cats */}
      <div className="relative -mt-12 sm:-mt-16 flex items-end justify-center gap-2 sm:gap-6">
        <div className="animate-bounce" style={{ animationDuration: '3s' }}>
          <Cat variant="white" size={150} className="drop-shadow-xl" />
        </div>
        <div className="animate-bounce" style={{ animationDuration: '3.2s', animationDelay: '0.4s' }}>
          <Cat variant="black" size={140} className="drop-shadow-xl" />
        </div>
      </div>

      {/* Subtle sparkle line under */}
      <div className="mt-2 flex items-center justify-center gap-2 text-rose-100/80 font-hand text-xl">
        <span>~</span>
        <span className="text-rose-200">♡ forever & always ♡</span>
        <span>~</span>
      </div>
    </div>
  )
}
