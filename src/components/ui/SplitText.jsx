import { motion, useReducedMotion } from 'framer-motion'
import { easeExpo } from '../../lib/motion'

// Headline reveal: words rise up out of a mask, char-by-char (or word-by-word).
// Falls back to plain, fully-visible text under prefers-reduced-motion.
export default function SplitText({
  text,
  className = '',
  as = 'span',
  by = 'chars',
  stagger = 0.028,
  delay = 0,
  amount = 0.6,
}) {
  const reduce = useReducedMotion()

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{text}</Tag>
  }

  const Tag = motion[as] || motion.span
  const words = String(text).split(' ')

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  }
  const child = {
    hidden: { y: '115%', opacity: 0 },
    show: { y: '0%', opacity: 1, transition: { duration: 0.7, ease: easeExpo } },
  }

  return (
    <Tag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      aria-label={text}
    >
      {words.map((word, wi) => (
        <span
          key={wi}
          aria-hidden="true"
          className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-top"
        >
          <span className="inline-block whitespace-nowrap">
            {by === 'chars' ? (
              word.split('').map((ch, ci) => (
                <motion.span key={ci} variants={child} className="inline-block">
                  {ch}
                </motion.span>
              ))
            ) : (
              <motion.span variants={child} className="inline-block">
                {word}
              </motion.span>
            )}
          </span>
          {wi < words.length - 1 ? <span className="inline-block">&nbsp;</span> : null}
        </span>
      ))}
    </Tag>
  )
}
