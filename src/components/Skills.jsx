import { motion, useReducedMotion } from 'framer-motion'
import { skillGroups } from '../data/content'
import { staggerParent, staggerChild } from '../lib/motion'
import SectionHeader from './ui/SectionHeader'

export default function Skills() {
  const reduce = useReducedMotion()

  return (
    <section id="skills" className="scroll-mt-24 border-b border-line py-24 md:py-32">
      <div className="container-wide">
        <SectionHeader
          index="03"
          eyebrow="Capabilities"
          title="The stack behind the work"
          description="Six areas I reach for daily — from raw SQL and statistical modeling to computer-vision pipelines and the tooling that ships them."
        />

        <motion.div
          variants={staggerParent}
          initial={reduce ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              variants={reduce ? undefined : staggerChild}
              className="group bg-paper p-7 transition-colors duration-300 hover:bg-paper-card lg:p-8"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <h3 className="font-display text-xl font-bold tracking-tight">{group.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-line px-2.5 py-1 font-mono text-[12px] text-ink-muted transition-colors duration-300 group-hover:border-ink/20"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
