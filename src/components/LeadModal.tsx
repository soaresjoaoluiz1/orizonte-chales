import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useLeadModal } from '../context/LeadModalContext'
import LeadForm from './LeadForm'

export default function LeadModal() {
  const { open, modelo, origem, fechar } = useLeadModal()
  const sheetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') fechar()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    setTimeout(() => sheetRef.current?.focus(), 50)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, fechar])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-[90] bg-night/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={fechar}
          aria-hidden
        >
          <div className="flex min-h-full items-end justify-center px-0 py-0 sm:items-center sm:px-4 sm:py-10">
            <motion.div
              key="sheet"
              ref={sheetRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="lead-modal-title"
              tabIndex={-1}
              initial={{ y: 60, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 60, opacity: 0, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
              className="relative w-full max-w-md rounded-t-[28px] border border-cream/10 bg-night p-5 pt-6 shadow-[0_-10px_60px_rgba(0,0,0,.6)] sm:rounded-[28px] sm:p-7"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={fechar}
                aria-label="Fechar"
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 bg-night/60 text-cream/70 transition hover:border-cream/40 hover:text-cream"
              >
                <X size={16} />
              </button>

              <div className="mb-5 pr-10">
                <p className="label">Reserva e proposta</p>
                <p id="lead-modal-title" className="mt-2 font-display text-2xl text-cream md:text-3xl">
                  Receba sua proposta pelo WhatsApp.
                </p>
                <p className="mt-2 text-xs text-mist">
                  Deixe seus dados que a gente te chama pra entender o seu terreno e seu projeto.
                </p>
              </div>

              <LeadForm modeloPadrao={modelo} origem={origem} compact onDone={fechar} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
