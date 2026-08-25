import { useState } from 'react'
import { Mail, Linkedin, Github, MessageCircle, MapPin, ArrowUpRight, Check } from 'lucide-react'
import { profile, socials, opportunityTypes } from '../data/content'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'
import Button from './ui/Button'

const channels = [
  { icon: Mail, label: 'Email', value: socials.email, href: `mailto:${socials.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'muhammad-omer', href: socials.linkedin },
  { icon: Github, label: 'GitHub', value: 'Omer684', href: socials.github },
  { icon: MessageCircle, label: 'WhatsApp', value: profile.phone, href: socials.whatsapp },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get('name')
    const email = data.get('email')
    const type = data.get('type')
    const subject = data.get('subject')
    const message = data.get('message')

    const body = `Name: ${name}\nEmail: ${email}\nOpportunity type: ${type}\n\n${message}`
    const mailSubject = subject || `[${type}] Portfolio enquiry from ${name}`
    window.location.href = `mailto:${socials.email}?subject=${encodeURIComponent(
      mailSubject,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const fieldCls =
    'w-full border-b border-line bg-transparent py-3 text-ink placeholder:text-subtle/60 transition-colors focus:border-accent focus:outline-none'
  const labelCls = 'label mb-2 block'

  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-wide">
        <SectionHeader
          index="05"
          eyebrow="Contact"
          title={"Let's build something\nworth shipping."}
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Channels */}
          <div className="lg:col-span-5">
            <Reveal className="inline-flex items-center gap-2 border border-line px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="label text-ink">{profile.availability}</span>
            </Reveal>

            <Reveal delay={0.05} className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
              Open to data science internships, ML/AI engineering roles, research collaboration and
              freelance work. I reply within 24 hours.
            </Reveal>

            <div className="mt-8 border-t border-ink">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 border-b border-line py-4 transition-colors hover:bg-paper-card"
                >
                  <span className="flex items-center gap-3">
                    <c.icon size={18} className="text-subtle transition-colors group-hover:text-accent" />
                    <span className="label">{c.label}</span>
                  </span>
                  <span className="flex items-center gap-2 font-mono text-[13px] text-ink">
                    {c.value}
                    <ArrowUpRight
                      size={14}
                      className="text-subtle transition-transform duration-300 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    />
                  </span>
                </a>
              ))}
              <div className="flex items-center gap-3 py-4">
                <MapPin size={18} className="text-subtle" />
                <span className="font-mono text-[13px] text-ink-muted">{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              {sent ? (
                <div className="flex h-full min-h-[320px] flex-col items-center justify-center border border-ink bg-paper-card p-10 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
                    <Check size={22} />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold">Your email client is open</h3>
                  <p className="mt-2 max-w-sm text-ink-muted">
                    I've pre-filled a message to{' '}
                    <span className="font-mono text-ink">{socials.email}</span>. Hit send and I'll
                    get back to you within 24h.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 cursor-pointer font-mono text-[12px] uppercase tracking-wider text-accent hover:underline"
                  >
                    ← Edit the message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="border border-line bg-paper-card p-7 md:p-9">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelCls}>
                        Name
                      </label>
                      <input id="name" name="name" required className={fieldCls} placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelCls}>
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className={fieldCls}
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="type" className={labelCls}>
                      Opportunity type
                    </label>
                    <select id="type" name="type" className={`${fieldCls} cursor-pointer`} defaultValue={opportunityTypes[0]}>
                      {opportunityTypes.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="subject" className={labelCls}>
                      Subject
                    </label>
                    <input id="subject" name="subject" className={fieldCls} placeholder="Short summary" />
                  </div>

                  <div className="mt-6">
                    <label htmlFor="message" className={labelCls}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className={`${fieldCls} resize-none`}
                      placeholder="Tell me about the role or project…"
                    />
                  </div>

                  <div className="mt-8">
                    <Button variant="primary" icon={ArrowUpRight} type="submit" className="w-full sm:w-auto">
                      Send message
                    </Button>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
