import { FlowerBouquet, TapeStrip, WashiStrip } from './assets/Roses.jsx'

// Letter block: torn black construction-paper look with a romantic message.
export default function LetterBlock({ className = '', style = {}, rotation = -3 }) {
  return (
    <div className={`relative ${className}`} style={{ transform: `rotate(${rotation}deg)`, ...style }}>
      {/* Tape on top */}
      <div className="absolute -top-3 left-8 rotate-[-8deg] z-10">
        <TapeStrip rotation={-8} />
      </div>
      <div className="absolute -top-3 right-12 rotate-[6deg] z-10">
        <TapeStrip rotation={6} />
      </div>

      {/* Torn paper letter */}
      <div
        className="relative px-6 py-8 sm:px-10 sm:py-12 max-w-[460px] text-cream-50 font-serif"
        style={{
          background:
            'repeating-linear-gradient(135deg, #1a1a1a 0 18px, #141414 18px 19px)',
          boxShadow:
            '0 18px 30px rgba(0,0,0,0.45), inset 0 0 40px rgba(0,0,0,0.6)',
        }}
      >
        {/* Top torn edge */}
        <svg
          className="absolute -top-1 left-0 w-full h-6"
          viewBox="0 0 460 24"
          preserveAspectRatio="none"
        >
          <path
            d="M0 24 L0 12 L8 4 L18 14 L26 6 L36 16 L46 4 L56 14 L70 8 L82 18 L96 6 L108 16 L120 4 L132 14 L146 8 L160 18 L174 6 L186 16 L200 4 L214 14 L226 6 L240 18 L254 4 L266 14 L280 8 L294 18 L308 6 L320 16 L334 4 L348 14 L362 8 L376 18 L390 6 L402 16 L416 4 L430 14 L444 8 L460 16 L460 24 Z"
            fill="#1a1a1a"
          />
        </svg>
        {/* Bottom torn edge */}
        <svg
          className="absolute -bottom-1 left-0 w-full h-6 rotate-180"
          viewBox="0 0 460 24"
          preserveAspectRatio="none"
        >
          <path
            d="M0 24 L0 12 L8 4 L18 14 L26 6 L36 16 L46 4 L56 14 L70 8 L82 18 L96 6 L108 16 L120 4 L132 14 L146 8 L160 18 L174 6 L186 16 L200 4 L214 14 L226 6 L240 18 L254 4 L266 14 L280 8 L294 18 L308 6 L320 16 L334 4 L348 14 L362 8 L376 18 L390 6 L402 16 L416 4 L430 14 L444 8 L460 16 L460 24 Z"
            fill="#1a1a1a"
          />
        </svg>

        <div className="text-center font-hand2 text-3xl text-rose-200 mb-4">
          My dearest Jim,
        </div>
        <div className="space-y-3 text-[15px] leading-relaxed text-cream-50 italic">
          <p>
            I have been thinking about the small things — the way you hum
            while making coffee, the lopsided smile you give me at red lights,
            the soft thud your head makes when it falls asleep on my shoulder.
          </p>
          <p>
            You are the only person I want to text at 2am about nothing, and
            the only person I want beside me when everything goes wrong. This
            page is just a tiny, messy love letter — a corner of the world I
            built to remind you that I notice you, I choose you, and I love
            you in the loudest, quietest ways.
          </p>
          <p>
            Thank you for being my home. Always.
          </p>
        </div>
        <div className="mt-6 text-right font-hand2 text-2xl text-rose-200">
          forever yours, <span className="text-rose-100">Zoey</span>
        </div>
        {/* wax stamp */}
        <div className="absolute -bottom-6 -right-4 w-14 h-14 rounded-full wax-seal flex items-center justify-center text-cream-50 font-hand2 text-2xl">
          z ♥ j
        </div>
      </div>

      {/* Flower bouquet overlap */}
      <div className="absolute -right-12 -bottom-16 hidden sm:block animate-float-y pointer-events-none">
        <FlowerBouquet size={180} />
      </div>

      {/* decorative washi */}
      <div className="absolute -left-4 top-1/2 -rotate-90 opacity-80">
        <WashiStrip size={120} color="pink" rotation={90} />
      </div>
    </div>
  )
}
