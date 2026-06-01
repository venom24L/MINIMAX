/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: '#7a0d18',
          50: '#fbeaec',
          100: '#f3c4ca',
          200: '#e08490',
          300: '#c84556',
          400: '#a91c30',
          500: '#7a0d18',
          600: '#5e0913',
          700: '#43060d',
          800: '#2a0308',
          900: '#160103',
        },
        blush: {
          50: '#fff5f7',
          100: '#ffe4ea',
          200: '#ffcad3',
          300: '#ffa1b3',
          400: '#ff7a96',
          500: '#ff5a7c',
        },
        cream: {
          50: '#fffaf2',
          100: '#fdf3e1',
          200: '#f7e6c4',
        },
      },
      fontFamily: {
        hand: ['"Caveat"', 'cursive'],
        hand2: ['"Dancing Script"', 'cursive'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        paper: '0 6px 14px rgba(0,0,0,0.18), 0 1px 0 rgba(255,255,255,0.4) inset',
        polaroid: '0 12px 24px rgba(0,0,0,0.35), 0 2px 6px rgba(0,0,0,0.2)',
        glass: '0 8px 32px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.25) inset',
        wax: 'inset 0 -8px 14px rgba(0,0,0,0.35), inset 0 6px 8px rgba(255,255,255,0.25), 0 4px 8px rgba(0,0,0,0.4)',
      },
      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        floatY: {
          '0%,100%': { transform: 'translateY(0) rotate(var(--r, 0deg))' },
          '50%': { transform: 'translateY(-12px) rotate(var(--r, 0deg))' },
        },
        floatX: {
          '0%,100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(14px) translateY(-8px)' },
        },
        breathe: {
          '0%,100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        },
        sway: {
          '0%,100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        drift: {
          '0%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(20px,-10px)' },
          '100%': { transform: 'translate(0,0)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        wiggle: {
          '0%,100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        twinkle: {
          '0%,100%': { opacity: 0.4 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        'spin-slow': 'spinSlow 14s linear infinite',
        'float-y': 'floatY 5s ease-in-out infinite',
        'float-x': 'floatX 9s ease-in-out infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
        'sway': 'sway 4s ease-in-out infinite',
        'drift': 'drift 12s ease-in-out infinite',
        'fade-up': 'fadeUp 0.9s ease-out both',
        'wiggle': 'wiggle 3s ease-in-out infinite',
        'twinkle': 'twinkle 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
