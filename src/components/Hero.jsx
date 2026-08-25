import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import { profile } from '../data/content'
import { easeExpo } from '../lib/motion'
import SplitText from './ui/SplitText'
import Magnetic from './ui/Magnetic'
import BlackHoleHero from './ui/BlackHoleHero'

/** True while the viewport is narrow — drives the black hole's framing swap. */
function useNarrow(query = '(max-width: 767px)') {
  const [narrow, setNarrow] = useState(false)
  useEffect(() => {
    const m = window.matchMedia(query)
    const sync = () => setNarrow(m.matches)
    sync()
    m.addEventListener('change', sync)
    return () => m.removeEventListener('change', sync)
  }, [query])
  return narrow
}

function RotatingWord({ words }) {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)

  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2400)
    return () => clearInterval(t)
  }, [words.length, reduce])

  if (reduce) return <span className="text-accent">{words[0]}</span>

  return (
    <span className="relative inline-block align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: '0.25em', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-0.25em', opacity: 0 }}
          transition={{ duration: 0.42, ease: easeExpo }}
          className="inline-block whitespace-nowrap text-accent"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const narrow = useNarrow()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70])
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-black text-paper"
    >
      {/* Gravitational-lensing black hole — the accretion disk is tuned to the
          site's blue accent so it reads as a "data singularity", not a stock BH.
          Wrapped in an absolutely-positioned box with a definite size so the
          component's h-full canvas fills the viewport (no position conflict). */}
      <div className="absolute inset-0">
        <BlackHoleHero
          focus={narrow ? [0.5, 0.72] : [0.72, 0.44]}
          scrim={narrow ? 'top' : 'left'}
          scrimStrength={0.92}
          distance={24}
          elevation={narrow ? -7 : -5.5}
          roll={-20}
          fov={narrow ? 58 : 44}
          spinSpeed={0.06}
          doppler={0.4}
          brightness={1.05}
          glow={narrow ? 0.9 : 1.05}
          exposure={0.95}
          vignette={0.32}
          hotColor="#EAF2FF"
          midColor="#3B82F6"
          coolColor="#122A6B"
          steps={narrow ? 200 : 300}
          resolution={narrow ? 0.6 : 0.72}
        />
      </div>

      {/* Content overlay */}
      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="container-wide relative z-10 flex min-h-[100svh] flex-col justify-center pt-[var(--nav-h)]"
      >
        <div className="max-w-2xl py-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeExpo }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2"
          >
            <span className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="label !text-white/80">{profile.availability}</span>
            </span>
            <span className="label !text-white/45">{profile.affiliation}</span>
          </motion.div>

          <h1 className="mt-7 font-display text-[16vw] font-black leading-[0.85] tracking-tightest text-white sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            <SplitText text="Muhammad" by="chars" />
            <br />
            <SplitText text="Omer" by="chars" delay={0.18} />
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-6 font-display text-2xl italic text-white/70 sm:text-3xl md:text-4xl"
          >
            I build <RotatingWord words={profile.builds} />
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6, ease: easeExpo }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/55"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.98, duration: 0.6, ease: easeExpo }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 bg-paper px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.14em] text-ink transition-colors duration-300 ease-expo hover:bg-accent hover:text-white"
              >
                View work
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Magnetic>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/25 px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.14em] text-white/90 transition-colors duration-300 ease-expo hover:border-white/60 hover:bg-white/5"
            >
              Get in touch
            </a>
          </motion.div>

          {/* Slim spec row — the old spec-sheet, distilled to fit over the art */}
          <motion.dl
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15, duration: 0.7 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 font-mono text-[12px] text-white/45"
          >
            {[
              { k: 'Role', v: profile.role },
              { k: 'Based', v: 'Haripur, KPK · PK' },
              { k: 'Status', v: profile.responseTime },
            ].map((row) => (
              <div key={row.k} className="flex items-center gap-2">
                <dt className="text-white/30">{row.k}</dt>
                <dd className="text-white/70">{row.v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.span
          animate={reduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="label !text-white/40">Scroll</span>
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  )
}
