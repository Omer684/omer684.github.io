import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'
import { easeExpo } from '../../lib/motion'

function format(n, decimals) {
  return decimals > 0 ? n.toFixed(decimals) : Math.round(n).toLocaleString()
}

// Counts up from 0 to `value` when scrolled into view.
// If `display` is provided (e.g. a range like "15–20×"), it's shown verbatim.
export default function Counter({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  display,
  duration = 1.6,
  className,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduce = useReducedMotion()
  const [text, setText] = useState(display ?? format(0, decimals))

  useEffect(() => {
    if (!inView || display) return
    if (reduce) {
      setText(format(value, decimals))
      return
    }
    const controls = animate(0, value, {
      duration,
      ease: easeExpo,
      onUpdate: (v) => setText(format(v, decimals)),
    })
    return () => controls.stop()
  }, [inView, value, decimals, display, duration, reduce])

  return (
    <span ref={ref} className={className}>
      {display ? (
        display
      ) : (
        <>
          {prefix}
          {text}
          {suffix}
        </>
      )}
    </span>
  )
}
