import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Props {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  format?: (n: number) => string
  className?: string
}

export default function CountUp({ value, duration = 1600, prefix = '', suffix = '', format, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(value * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  const content = format ? format(display) : `${prefix}${display.toLocaleString('pt-BR')}${suffix}`

  return <span ref={ref} className={className}>{content}</span>
}
