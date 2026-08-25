import { ArrowUp, Github, Linkedin, Mail, MessageCircle, FileText } from 'lucide-react'
import { profile, socials, navLinks } from '../data/content'

const socialLinks = [
  { icon: Github, href: socials.github, label: 'GitHub' },
  { icon: Linkedin, href: socials.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${socials.email}`, label: 'Email' },
  { icon: MessageCircle, href: socials.whatsapp, label: 'WhatsApp' },
  { icon: FileText, href: socials.resume, label: 'Résumé' },
]

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-ink text-paper">
      <div className="container-wide pt-16 md:pt-20">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-display text-3xl font-black tracking-tightest md:text-4xl">
              {profile.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-4 max-w-sm leading-relaxed text-paper/60">
              {profile.role} building analytics, ML and computer-vision systems that ship — from
              Haripur, Pakistan, to wherever the work is.
            </p>
          </div>

          <div className="md:col-span-3">
            <span className="label text-paper/50">Navigate</span>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="link-underline font-mono text-sm text-paper/80 hover:text-paper"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <span className="label text-paper/50">Elsewhere</span>
            <ul className="mt-5 space-y-3">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 font-mono text-sm text-paper/80 hover:text-paper"
                  >
                    <s.icon size={15} className="text-paper/40 transition-colors group-hover:text-accent" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 py-7 sm:flex-row sm:items-center">
          <p className="font-mono text-[12px] text-paper/40">
            © 2026 {profile.name} · {profile.role} · Haripur, KPK, Pakistan
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-paper/60 hover:text-paper"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center border border-white/20 transition-colors group-hover:border-accent group-hover:bg-accent">
              <ArrowUp size={14} />
            </span>
          </a>
        </div>
      </div>

      {/* Oversized wordmark bleed */}
      <div
        aria-hidden="true"
        className="select-none whitespace-nowrap text-center font-display text-[26vw] font-black leading-[0.7] text-white/[0.06]"
        style={{ WebkitTextStroke: '1px rgba(255,255,255,0.28)' }}
      >
        OMER
      </div>
    </footer>
  )
}
