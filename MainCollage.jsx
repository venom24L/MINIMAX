import { motion } from 'framer-motion'
import YouTubeWidget from './YouTubeWidget.jsx'
import SpotifyWidget from './SpotifyWidget.jsx'
import ScratchPolaroid from './ScratchPolaroid.jsx'
import LetterBlock from './LetterBlock.jsx'
import MapWidget from './MapWidget.jsx'
import FooterArt from './FooterArt.jsx'
import FadeUp from './FadeUp.jsx'
import {
  Rose,
  HeartCutout,
  WashiStrip,
  TapeStrip,
  SpeechBubble,
  Star,
} from './assets/Roses.jsx'

export default function MainCollage() {
  return (
    <div className="relative w-full bg-crimson-textured text-cream-50 overflow-x-hidden">
      {/* ===== Header band ===== */}
      <header className="relative pt-20 pb-12 px-6 sm:px-10">
        {/* decorative bits */}
        <div className="absolute left-4 top-6 rotate-[-12deg] opacity-80">
          <WashiStrip size={150} color="pink" rotation={-12} />
        </div>
        <div className="absolute right-4 top-10 rotate-[10deg] opacity-80">
          <WashiStrip size={130} color="gold" rotation={10} />
        </div>
        <div className="absolute right-12 top-32 opacity-90">
          <Rose size={70} palette="red" />
        </div>
        <div className="absolute left-12 top-28 opacity-90 rotate-[-8deg]">
          <Rose size={60} palette="pink" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block sticker px-4 py-1.5 rounded-md rotate-[-3deg] mb-4">
            <span className="font-hand2 text-lg text-crimson-600">a love letter in scraps</span>
          </div>
          <h1 className="font-hand2 text-[64px] sm:text-[88px] leading-none text-cream-50">
            <span className="text-cutout-leopard">For</span>{' '}
            <span className="italic text-rose-100">Jim,</span>
          </h1>
          <h2 className="font-hand2 text-[42px] sm:text-[56px] leading-tight text-rose-100 mt-2">
            from your <span className="text-cutout-leopard">Zoey</span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3 text-rose-200/80 font-hand text-xl">
            <span className="w-10 h-[1px] bg-rose-200/50" />
            <span>scratch the polaroids, hover the pin, open the song</span>
            <span className="w-10 h-[1px] bg-rose-200/50" />
          </div>
        </div>
      </header>

      {/* ===== Section 1: Polaroids (scattered over leopard star on desktop, stacked on mobile) ===== */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-10">
        <div className="relative max-w-6xl mx-auto md:[min-height:720px]">
          {/* Desktop: absolute scattered layout. Mobile: stacked. */}
          {/* Leopard star background (desktop only) */}
          <div
            className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 leopard-bg star-shape animate-spin-slow"
            style={{
              width: 'min(620px, 90vw)',
              height: 'min(620px, 90vw)',
              animationDuration: '60s',
              filter: 'drop-shadow(0 18px 30px rgba(0,0,0,0.35))',
            }}
          />

          {/* Mobile leopard accent strip (decorative) */}
          <div className="md:hidden mb-6 flex justify-center">
            <div
              className="leopard-bg star-shape w-44 h-44"
              style={{ filter: 'drop-shadow(0 10px 18px rgba(0,0,0,0.35))' }}
            />
          </div>

          {/* title tag */}
          <FadeUp className="md:absolute md:left-2 md:top-2 md:sm:left-8 md:top-4 z-30 text-center md:text-left mb-6 md:mb-0">
            <div className="inline-block sticker px-4 py-2 rounded-md rotate-[-4deg]">
              <span className="font-hand2 text-xl text-crimson-600">our little moments</span>
            </div>
          </FadeUp>

          {/* Mobile: stacked flex column. Desktop: absolute. */}
          <div className="md:hidden flex flex-col gap-8 items-center">
            <FadeUp delay={0.05} className="w-full max-w-[280px]">
              <ScratchPolaroid width={240} height={260} rotation={-4} caption="first date ♡" bgClass="photo-1" />
            </FadeUp>
            <FadeUp delay={0.1} className="w-full max-w-[280px]">
              <ScratchPolaroid width={240} height={260} rotation={3} caption="that sunset" bgClass="photo-2" />
            </FadeUp>
            <FadeUp delay={0.15} className="w-full max-w-[280px]">
              <ScratchPolaroid width={240} height={260} rotation={-2} caption="coffee & kisses" bgClass="photo-3" />
            </FadeUp>
            <FadeUp delay={0.2} className="w-full max-w-[280px]">
              <ScratchPolaroid width={240} height={260} rotation={4} caption="i love u" bgClass="photo-4" />
            </FadeUp>
            <div className="sticker px-3 py-1.5 rounded-full rotate-[-6deg] bg-rose-100">
              <span className="font-hand2 text-base text-crimson-500">scratch to reveal ✨</span>
            </div>
          </div>

          {/* Desktop: absolute polaroids */}
          <div className="hidden md:block">
            <FadeUp delay={0.05} className="absolute z-20" style={{ left: '4%', top: '4%' }}>
              <ScratchPolaroid width={210} height={240} rotation={-9} caption="first date ♡" bgClass="photo-1" />
            </FadeUp>
            <FadeUp delay={0.15} className="absolute z-20" style={{ right: '4%', top: '8%' }}>
              <ScratchPolaroid width={220} height={250} rotation={6} caption="that sunset" bgClass="photo-2" />
            </FadeUp>
            <FadeUp delay={0.25} className="absolute z-20" style={{ left: '6%', bottom: '6%' }}>
              <ScratchPolaroid width={200} height={230} rotation={5} caption="coffee & kisses" bgClass="photo-3" />
            </FadeUp>
            <FadeUp delay={0.35} className="absolute z-20" style={{ right: '6%', bottom: '4%' }}>
              <ScratchPolaroid width={230} height={260} rotation={-7} caption="i love u" bgClass="photo-4" />
            </FadeUp>
            <FadeUp delay={0.45} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <div className="sticker px-3 py-1.5 rounded-full rotate-[-6deg] bg-rose-100">
                <span className="font-hand2 text-base text-crimson-500">scratch to reveal ✨</span>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ===== Section 2: Media widgets row ===== */}
      <section className="relative py-16 px-4 sm:px-10">
        <div className="max-w-5xl mx-auto relative">
          {/* decorations */}
          <div className="absolute -top-4 left-4 rotate-[-8deg]">
            <WashiStrip size={140} color="blue" rotation={-8} />
          </div>
          <div className="absolute -top-2 right-8 rotate-[6deg]">
            <WashiStrip size={110} color="gold" rotation={6} />
          </div>

          <FadeUp className="text-center mb-12">
            <div className="inline-block sticker px-4 py-2 rounded-md rotate-[3deg]">
              <span className="font-hand2 text-xl text-crimson-600">sounds & screens</span>
            </div>
          </FadeUp>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center justify-items-center">
            <FadeUp delay={0.1} className="w-full max-w-[360px]">
              <YouTubeWidget />
            </FadeUp>
            <FadeUp delay={0.2} className="w-full max-w-[360px] md:mt-16">
              <SpotifyWidget />
            </FadeUp>
          </div>

          {/* Speech bubble */}
          <FadeUp delay={0.3} className="flex justify-center mt-12">
            <SpeechBubble size={280} rotation={-2}>
              <div className="text-left">
                <div>press play,</div>
                <div>it's the song that reminds me of you</div>
              </div>
            </SpeechBubble>
          </FadeUp>
        </div>
      </section>

      {/* ===== Section 3: Letter block ===== */}
      <section className="relative py-20 px-4 sm:px-10">
        <div className="max-w-5xl mx-auto flex justify-center">
          <FadeUp>
            <LetterBlock />
          </FadeUp>
        </div>
        {/* Decorative rose scatter */}
        <div className="absolute left-6 top-12 rotate-[-10deg] opacity-80">
          <Rose size={80} palette="red" />
        </div>
        <div className="absolute right-10 bottom-12 rotate-[12deg] opacity-80">
          <Rose size={70} palette="pink" />
        </div>
        <div className="absolute right-1/3 top-8 rotate-[6deg] opacity-70">
          <HeartCutout size={50} fill="#ffd6e0" />
        </div>
      </section>

      {/* ===== Section 4: Memory map ===== */}
      <section className="relative py-16 px-4 sm:px-10">
        <div className="max-w-5xl mx-auto relative">
          <FadeUp className="text-center mb-10">
            <div className="inline-block sticker px-4 py-2 rounded-md rotate-[-2deg]">
              <span className="font-hand2 text-xl text-crimson-600">where it started</span>
            </div>
          </FadeUp>

          <div className="flex justify-center">
            <FadeUp delay={0.1} className="w-full max-w-[420px]">
              <MapWidget />
            </FadeUp>
          </div>

          {/* note card */}
          <FadeUp delay={0.2} className="flex justify-center mt-10">
            <div className="sticker px-5 py-3 rounded-md rotate-[-2deg] max-w-[300px] text-center">
              <p className="font-hand text-lg text-crimson-600">
                click the pin to read the message
                <br/>i left for you, jim ♡
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== Footer art ===== */}
      <section className="relative pt-20 pb-32 px-4 sm:px-10">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <FooterArt />
          </FadeUp>
          <FadeUp delay={0.2} className="text-center mt-6">
            <div className="font-hand2 text-3xl text-rose-100">
              — made with so much love, by Zoey —
            </div>
            <div className="mt-2 text-rose-200/60 text-sm tracking-widest">
              v 1.0 · 2024
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
