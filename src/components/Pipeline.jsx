import { motion, useReducedMotion } from 'framer-motion'
import { Github, ArrowUpRight } from 'lucide-react'
import { pipeline, projects } from '../data/content'
import { easeExpo } from '../lib/motion'
import Button from './ui/Button'

// Featured case study: the flagship License-Plate-Recognition pipeline,
// rendered as a high-contrast dark band with an animated process flow.
export default function Pipeline() {
  const reduce = useReducedMotion()
  const p = projects[0]

  return (
    <div className="mt-16 overflow-hidden border border-ink bg-ink text-paper">
      <div className="grid lg:grid-cols-2">
        {/* Left: narrative */}
        <div className="flex flex-col justify-between gap-10 border-b border-white/10 p-8 md:p-12 lg:border-b-0 lg:border-r">
          <div>
            <span className="label text-accent">Featured case study</span>
            <h3 className="mt-5 font-display text-3xl font-black leading-tight tracking-tight md:text-4xl">
              {p.title}
            </h3>
            <p className="mt-5 max-w-md leading-relaxed text-paper/70">{p.blurb}</p>

            <div className="mt-7 inline-flex items-baseline gap-3 border border-white/15 px-4 py-2">
              <span className="font-mono text-2xl font-semibold text-accent">{p.metric}</span>
            </div>
          </div>

          <div>
            <ul className="mb-7 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li key={t} className="border border-white/15 px-2.5 py-1 font-mono text-[12px] text-paper/70">
                  {t}
                </li>
              ))}
            </ul>
            <Button href={p.github} external variant="accent" icon={Github}>
              View source
            </Button>
          </div>
        </div>

        {/* Right: pipeline flow */}
        <div className="p-8 md:p-12">
          <div className="mb-8 flex items-center gap-3">
            <span className="label text-paper/50">Pipeline</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <ol className="relative">
            {pipeline.map((s, i) => (
              <motion.li
                key={s.step}
                initial={reduce ? false : { opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, ease: easeExpo, delay: i * 0.08 }}
                className="relative flex gap-5 pb-7 last:pb-0"
              >
                {/* connector */}
                {i < pipeline.length - 1 ? (
                  <span className="absolute left-[15px] top-9 h-[calc(100%-1.5rem)] w-px bg-white/15" />
                ) : null}
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center border border-white/20 bg-ink font-mono text-xs text-accent">
                  {s.step}
                </span>
                <div className="pt-1">
                  <h4 className="font-mono text-sm uppercase tracking-wider text-paper">{s.title}</h4>
                  <p className="mt-1 text-sm text-paper/55">{s.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
