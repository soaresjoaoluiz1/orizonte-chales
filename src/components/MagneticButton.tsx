import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  strength?: number
  target?: string
  rel?: string
}

export default function MagneticButton({ children, href, onClick, className, strength = 0.35, target, rel }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 220, damping: 18, mass: 0.6 })

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * strength
    const y = (e.clientY - rect.top - rect.height / 2) * strength
    mx.set(x)
    my.set(y)
  }
  const handleLeave = () => {
    mx.set(0)
    my.set(0)
  }

  const inner = (
    <motion.span ref={ref} style={{ x: sx, y: sy }} className="inline-block">
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        className={className}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {inner}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={className} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {inner}
    </button>
  )
}
