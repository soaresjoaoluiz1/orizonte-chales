import { Link, useLocation } from '@tanstack/react-router'
import { Home, LayoutGrid, Wrench, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLeadModal } from '../context/LeadModalContext'
import { cn } from '../lib/cn'

const items = [
  { to: '/', label: 'Início', Icon: Home },
  { to: '/modelos', label: 'Modelos', Icon: LayoutGrid },
  { to: '/como-funciona', label: 'Processo', Icon: Wrench },
] as const

export default function BottomNav() {
  const { pathname } = useLocation()
  const { abrir } = useLeadModal()

  return (
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
    >
      <div className="glass flex items-center justify-around rounded-full border border-cream/10 px-3 py-2.5">
        {items.map(({ to, label, Icon }) => {
          const active = to === '/' ? pathname === '/' : pathname.startsWith(to)
          return (
            <Link
              key={to}
              to={to}
              className={cn(
                'flex min-w-[64px] flex-col items-center justify-center gap-1 rounded-full px-2 py-2 transition',
                active ? 'bg-gold/15 text-gold' : 'text-cream/60',
              )}
            >
              <Icon size={18} strokeWidth={active ? 2 : 1.6} />
              <span className="text-[9px] font-medium uppercase tracking-[0.2em]">{label}</span>
            </Link>
          )
        })}
        <button
          type="button"
          onClick={() => abrir({ origem: 'bottomnav' })}
          className="flex min-w-[64px] flex-col items-center justify-center gap-1 rounded-full bg-gold/15 px-2 py-2 text-gold transition"
        >
          <MessageCircle size={18} strokeWidth={2} />
          <span className="text-[9px] font-medium uppercase tracking-[0.2em]">Orçamento</span>
        </button>
      </div>
    </motion.nav>
  )
}
