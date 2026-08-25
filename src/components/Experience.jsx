import { motion, useReducedMotion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { experience, education } from '../data/content'
import { easeExpo } from '../lib/motion'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'

export default function Experience() {
  const reduce = useReducedMotion()

  return (
    <section id="experience" className="scroll-mt-24 border-b border-line py-24 md:py-32">
      <div className="container-wide">
        <SectionHeader
          index="04"
          eyebrow="Experience & education"
          title="The path so far"
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Timeline */}
          <div className="lg:col-span-7">
            <ol className="relative border-l border-line">
              {experience.map((e, i) => (
                <motion.li
                  key={i}
                  initial={reduce ? false : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, ease: easeExpo, delay: i * 0.08 }}
                  className="relative ml-6 pb-10 last:pb-0 md:ml-8"
                >
                  <span className="absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-paper md:-left-[calc(2rem+5px)]" />
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-mono text-[12px] text-accent">{e.period}</span>
                    <span className="label border border-line px-2 py-0.5">{e.type}</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold tracking-tight md:text-2xl">
                    {e.role}
                  </h3>
                  <p className="mt-0.5 font-mono text-sm text-ink-muted">{e.org}</p>
                  <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-subtle">{e.note}</p>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Education card */}
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.1} className="border border-ink bg-paper-card p-7 md:p-8">
              <GraduationCap size={22} className="text-accent" />
              <span className="mt-5 block font-mono text-[12px] text-accent">{education.period}</span>
              <h3 className="mt-2 font-display text-2xl font-bold leading-tight tracking-tight">
                {education.degree}
              </h3>
              <p className="mt-1 font-mono text-sm text-ink-muted">{education.school}</p>
              <ul className="mt-5 space-y-2 border-t border-line pt-5">
                {education.notes.map((n) => (
                  <li key={n} className="flex items-start gap-2 text-[15px] text-subtle">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {n}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
