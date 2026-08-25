import { marqueeTech } from '../data/content'

// Infinite horizontal ticker of tools. Decorative → aria-hidden.
// The CSS marquee animation is neutralized by the global reduced-motion rule.
export default function Marquee() {
  const items = [...marqueeTech, ...marqueeTech]
  return (
    <section aria-hidden="true" className="overflow-hidden border-y border-ink bg-ink py-5">
      <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform hover:[animation-play-state:paused]">
        {items.map((t, i) => (
          <span key={i} className="mx-7 inline-flex items-center gap-7">
            <span className="font-mono text-sm uppercase tracking-[0.2em] text-paper/85">{t}</span>
            <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
          </span>
        ))}
      </div>
    </section>
  )
}
