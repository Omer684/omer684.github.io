import { stats } from '../data/content'
import Counter from './ui/Counter'
import Reveal from './ui/Reveal'

export default function Stats() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="container-wide">
        <div className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 0.06}
              className="flex flex-col gap-2 bg-paper px-5 py-10 lg:px-8 lg:py-14"
            >
              <span className="font-display text-5xl font-black tracking-tightest tabular md:text-6xl">
                <Counter
                  value={s.value}
                  decimals={s.decimals || 0}
                  prefix={s.prefix || ''}
                  suffix={s.suffix || ''}
                  display={s.display}
                />
              </span>
              <span className="label text-ink">{s.label}</span>
              <span className="text-sm text-subtle">{s.sub}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
