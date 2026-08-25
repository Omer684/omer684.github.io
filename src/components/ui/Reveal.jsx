import { motion, useReducedMotion } from 'framer-motion'
import { easeExpo } from '../../lib/motion'

// Fade/slide element into view on scroll. Renders final state instantly
// when the user prefers reduced motion.
export default function Reveal({
  as = 'div',
  children,
  className,
  delay = 0,
  y = 24,
  duration = 0.6,
  once = true,
  amount = 0.2,
  ...rest
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  if (reduce) {
    const Tag = as
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, ease: easeExpo, delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
