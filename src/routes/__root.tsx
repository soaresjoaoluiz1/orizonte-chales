import { Outlet, ScrollRestoration, useLocation } from '@tanstack/react-router'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BottomNav from '../components/BottomNav'
import WhatsAppFloat from '../components/WhatsAppFloat'
import IntroLoader from '../components/IntroLoader'
import Cursor from '../components/Cursor'
import ScrollProgress from '../components/ScrollProgress'
import LeadModal from '../components/LeadModal'
import { LeadModalProvider } from '../context/LeadModalContext'
import { trackCustom } from '../lib/pixel'

function nomeDaRota(pathname: string) {
  if (pathname === '/') return 'home'
  return pathname.replace(/^\//, '').replace(/\//g, '-') || 'home'
}

export default function RootLayout() {
  const { pathname } = useLocation()

  // SPA PageView: o pixel inicial dispara na primeira carga. A cada mudanca
  // de rota precisamos re-disparar manualmente pra o Pixel saber que a
  // pessoa viu outra pagina. Pagina de modelo tambem dispara ViewContent.
  useEffect(() => {
    if (typeof window === 'undefined') return
    window.fbq?.('track', 'PageView')
    if (pathname.startsWith('/modelos/glow')) {
      window.fbq?.('track', 'ViewContent', {
        content_name: 'Glow 21 m2',
        content_category: 'chale-modular',
        content_ids: ['glow-21m2'],
        content_type: 'product',
        value: 84900,
        currency: 'BRL',
      })
    } else if (pathname.startsWith('/modelos/a-frame')) {
      window.fbq?.('track', 'ViewContent', {
        content_name: 'A-Frame 18 m2',
        content_category: 'chale-modular',
        content_ids: ['a-frame-18m2'],
        content_type: 'product',
        value: 59900,
        currency: 'BRL',
      })
    } else if (pathname.startsWith('/modelos')) {
      window.fbq?.('track', 'ViewCategory', { content_category: 'chale-modular' })
    } else if (pathname.startsWith('/pagamento')) {
      trackCustom('ViewPricing')
    } else if (pathname.startsWith('/como-funciona')) {
      trackCustom('ViewProcess')
    }
  }, [pathname])

  return (
    <LeadModalProvider>
      <IntroLoader />
      <Cursor />
      <ScrollProgress />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-[70vh] pb-24 md:pb-0"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <WhatsAppFloat />
      <BottomNav />
      <LeadModal />
      <ScrollRestoration />
    </LeadModalProvider>
  )
}
