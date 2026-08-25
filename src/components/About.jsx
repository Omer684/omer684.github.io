import { about, education } from '../data/content'
import Reveal from './ui/Reveal'

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-line py-24 md:py-32">
      <div className="container-wide">
        <Reveal className="flex items-center gap-3">
          <span className="label text-accent">01</span>
          <span className="h-px w-8 bg-line" />
          <span className="label">About</span>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Reveal
              as="h2"
              className="whitespace-pre-line font-display text-4xl font-black leading-[0.98] tracking-tightest md:text-5xl lg:text-6xl"
            >
              {about.heading}
            </Reveal>

            <Reveal delay={0.1} className="mt-10 border-t border-ink pt-6">
              <dl className="space-y-4">
                <div className="flex justify-between gap-4">
                  <dt className="label pt-1">Education</dt>
                  <dd className="text-right font-mono text-[13px] text-ink">
                    {education.degree}
                    <span className="block text-subtle">{education.school}</span>
                    <span className="block text-subtle">{education.period}</span>
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="space-y-6">
              {about.paragraphs.map((p, i) => (
                <Reveal
                  key={i}
                  delay={0.08 * i}
                  className="text-lg leading-relaxed text-ink-muted [&_strong]:font-semibold [&_strong]:text-ink"
                >
                  {p}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
