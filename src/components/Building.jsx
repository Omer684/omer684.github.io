import { ArrowRight, FlaskConical } from 'lucide-react'
import { building } from '../data/content'
import Reveal from './ui/Reveal'

export default function Building() {
  return (
    <section className="border-b border-line bg-ink text-paper py-24 md:py-32">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Reveal className="flex items-center gap-3">
              <FlaskConical size={16} className="text-accent" />
              <span className="label text-paper/60">In the lab</span>
            </Reveal>
            <Reveal
              as="h2"
              delay={0.05}
              className="mt-6 font-display text-4xl font-black leading-[0.95] tracking-tightest md:text-5xl"
            >
              What I'm learning next
            </Reveal>
            <Reveal delay={0.1} className="mt-5 max-w-sm leading-relaxed text-paper/60">
              Leveling up from analysis into data engineering — the pipelines, orchestration and
              warehousing that turn one-off notebooks into production systems.
            </Reveal>
          </div>

          <div className="lg:col-span-8 lg:pl-10">
            <Reveal className="border-t border-white/15 pt-6">
              <span className="label text-paper/50">Learning now</span>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {building.learning.map((item) => (
                  <li
                    key={item}
                    className="border border-white/15 px-3.5 py-2 font-mono text-[13px] text-paper/80 transition-colors duration-300 hover:border-accent hover:text-paper"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 border border-white/15 p-7 md:p-8">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                <span className="label text-accent">Next project · planning</span>
              </div>
              <p className="mt-4 font-display text-xl leading-snug text-paper md:text-2xl">
                {building.next}
              </p>
              <div className="mt-5 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-paper/50">
                Repo + write-up incoming
                <ArrowRight size={14} className="text-accent" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
