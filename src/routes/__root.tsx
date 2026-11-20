import { Outlet, ScrollRestoration, useLocation } from '@tanstack/react-router'
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

export default function RootLayout() {
  const { pathname } = useLocation()
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
