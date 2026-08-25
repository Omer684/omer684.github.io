import Reveal from './Reveal'

// Consistent editorial section header: numbered eyebrow + hairline + big serif title.
export default function SectionHeader({ index, eyebrow, title, description, align = 'left' }) {
  const centered = align === 'center'
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : ''}>
      <Reveal
        className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}
      >
        <span className="label text-accent">{index}</span>
        <span className="h-px w-8 bg-line" />
        <span className="label">{eyebrow}</span>
      </Reveal>

      <Reveal
        as="h2"
        delay={0.05}
        className="mt-5 font-display text-4xl font-black leading-[0.95] tracking-tightest md:text-5xl lg:text-[3.4rem]"
      >
        {title}
      </Reveal>

      {description ? (
        <Reveal
          delay={0.1}
          className={`mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {description}
        </Reveal>
      ) : null}
    </div>
  )
}
