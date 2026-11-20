import { Link, useLocation } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { PLACEHOLDERS } from '../config/placeholders'
import { useLeadModal } from '../context/LeadModalContext'
import { cn } from '../lib/cn'

const links = [
  { to: '/modelos', label: 'Modelos' },
  { to: '/como-funciona', label: 'Processo' },
  { to: '/materiais', label: 'Materiais' },
  { to: '/pagamento', label: 'Pagamento' },
  { to: '/contato', label: 'Contato' },
] as const

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { abrir } = useLeadModal()

  const abrirOrcamento = (origem: string) => {
    setOpen(false)
    abrir({ origem })
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2.3, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-500',
          scrolled ? 'py-2' : 'py-4',
        )}
      >
        <div className="container-x">
          <div
            className={cn(
              'flex items-center justify-between rounded-full border transition-all duration-500',
              scrolled
                ? 'border-line glass px-3 py-2'
                : 'border-transparent px-2 py-1',
            )}
          >
            <Link to="/" className="flex items-center gap-3">
              <img
                src={`/img/logo-circle.png`}
                alt="Orizonte"
                className="h-14 w-14 rounded-full"
              />
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-medium tracking-[-0.02em] text-cream">
                  {PLACEHOLDERS.BRAND_NAME}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-cream/50">
                  Chalés modulares
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {links.map((l) => {
                const active = pathname.startsWith(l.to)
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    className={cn(
                      'group relative text-[12px] font-medium transition',
                      active ? 'text-cream' : 'text-cream/60 hover:text-cream',
                    )}
                  >
                    {l.label}
                    <span
                      className={cn(
                        'absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold transition-opacity',
                        active ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                  </Link>
                )
              })}
            </nav>

            <button
              type="button"
              onClick={() => abrirOrcamento('header-desktop')}
              className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-night transition hover:bg-gold-soft md:inline-flex"
            >
              Orçamento
              <ArrowUpRight size={12} strokeWidth={2.5} />
            </button>

            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-cream md:hidden"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="absolute inset-0 bg-night grain-overlay"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="relative z-10 flex h-full flex-col px-6 pt-6">
                <div className="flex items-center justify-between">
                  <Link to="/" className="flex items-center gap-3">
                    <img
                      src={`/img/logo-circle.png`}
                      alt="Orizonte"
                      className="h-12 w-12 rounded-full"
                    />
                    <span className="font-display text-xl font-medium text-cream">Orizonte</span>
                  </Link>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Fechar"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line"
                  >
                    <X size={18} />
                  </button>
                </div>

                <nav className="mt-16 flex flex-1 flex-col gap-1">
                  {links.map((l, i) => (
                    <motion.div
                      key={l.to}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + i * 0.06 }}
                    >
                      <Link
                        to={l.to}
                        className="flex items-center justify-between border-b border-line py-5 font-display text-3xl font-medium text-cream hover:text-gold"
                      >
                        {l.label}
                        <span className="font-mono text-xs text-cream/40">0{i + 1}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="pb-10">
                  <button
                    type="button"
                    onClick={() => abrirOrcamento('header-mobile')}
                    className="btn-primary w-full"
                  >
                    Pedir orçamento
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
