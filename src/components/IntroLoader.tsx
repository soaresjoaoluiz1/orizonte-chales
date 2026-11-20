import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const EASE = [0.76, 0, 0.24, 1] as const

export default function IntroLoader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-night"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="pointer-events-none absolute inset-0 -z-10 h-80 w-80 rounded-full bg-gold/20 blur-[80px]" />
            <img
              src={`/img/logo-circle.png`}
              alt="Orizonte"
              className="h-40 w-40 rounded-full"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.35em' }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            className="mt-8 font-mono text-[10px] font-medium uppercase text-cream/60"
          >
            Orizonte — Chalés Modulares
          </motion.span>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, delay: 0.5, ease: 'easeInOut' }}
            className="mt-8 h-px w-60 origin-left bg-gold/60"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
