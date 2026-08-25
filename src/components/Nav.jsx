import { useState, useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { navLinks, profile, socials } from '../data/content'
import useActiveSection from '../hooks/useActiveSection'
import Button from './ui/Button'

const ids = navLinks.map((l) => l.id)

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(ids)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled ? 'border-line bg-paper/80 backdrop-blur-md' : 'border-transparent'
        }`}
      >
        <nav className="container-wide flex h-[var(--nav-h)] items-center justify-between">
          <a
            href="#top"
            className={`font-display text-xl font-black tracking-tightest transition-colors ${
              scrolled ? 'text-ink' : 'text-white'
            }`}
            aria-label={`${profile.name} — home`}
          >
            {profile.initials}
            <span className="text-accent">.</span>
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`label transition-colors ${
                    active === l.id
                      ? scrolled
                        ? 'text-ink'
                        : 'text-white'
                      : scrolled
                        ? 'text-subtle hover:text-ink'
                        : '!text-white/55 hover:!text-white'
                  }`}
                >
                  <span className="relative inline-block">
                    {l.label}
                    {active === l.id ? (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute -bottom-1.5 left-0 h-px w-full bg-accent"
                      />
                    ) : null}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-5 md:flex">
            <a
              href={socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={`label transition-colors ${
                scrolled ? 'text-subtle hover:text-ink' : '!text-white/55 hover:!text-white'
              }`}
            >
              Résumé
            </a>
            <Button
              href="#contact"
              variant={scrolled ? 'primary' : 'light'}
              icon={ArrowUpRight}
              className="!px-5 !py-2.5"
            >
              Hire me
            </Button>
          </div>

          <button
            className={`-mr-2 p-2 transition-colors md:hidden ${
              scrolled ? 'text-ink' : 'text-white'
            }`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[70] bg-paper md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container-wide flex h-[var(--nav-h)] items-center justify-between">
              <span className="font-display text-xl font-black tracking-tightest">
                {profile.initials}
                <span className="text-accent">.</span>
              </span>
              <button
                className="-mr-2 p-2 text-ink"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <div className="container-wide mt-6 flex flex-col">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + i * 0.05, duration: 0.4 }}
                  className="flex items-baseline gap-4 border-b border-line py-5 font-display text-4xl font-bold tracking-tightest"
                >
                  <span className="label text-accent">0{i + 1}</span>
                  {l.label}
                </motion.a>
              ))}

              <div className="mt-10 flex flex-col gap-3">
                <Button href={socials.resume} external variant="outline">
                  Résumé
                </Button>
                <Button
                  href="#contact"
                  variant="accent"
                  icon={ArrowUpRight}
                  onClick={() => setOpen(false)}
                >
                  Hire me
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
