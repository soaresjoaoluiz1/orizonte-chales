import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { ArrowDown } from 'lucide-react'
import { waLink, PLACEHOLDERS } from '../config/placeholders'
import { trackContact } from '../lib/pixel'
import MagneticButton from './MagneticButton'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yImg = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1.02, 1.1])
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative isolate min-h-[100svh] w-full overflow-hidden grain-overlay">
      <motion.div style={{ y: yImg, scale: scaleImg }} className="absolute inset-0 -z-10">
        <img
          src={`/img/chale-montanha.jpg`}
          alt="Chalé Orizonte na montanha ao entardecer"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/40 via-night/50 to-night" />
        <div className="absolute inset-0 bg-gradient-to-r from-night/85 via-night/30 to-transparent" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-dot opacity-40" />

      <motion.div style={{ opacity }} className="absolute left-0 right-0 top-28 z-10 hidden md:block">
        <div className="container-x flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.8 }}
            className="chip"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            Produção ativa · Araranguá SC · Atendemos todo o Brasil
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 0.8 }}
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50"
          >
            Catálogo {new Date().getFullYear()}
          </motion.div>
        </div>
      </motion.div>

      <motion.div style={{ y: yText }} className="container-x relative z-10 flex min-h-[100svh] flex-col justify-end pb-28 pt-40 md:pb-36">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
            className="mb-6 flex flex-wrap items-center gap-3 md:hidden"
          >
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Araranguá SC
            </span>
          </motion.div>

          <h1 className="font-display text-display-xl font-medium text-cream">
            <SplitLine text="Seu refúgio." delay={2.5} />
            <br />
            <SplitLine text="Seu " delay={2.75} />
            <span className="font-serif italic font-medium text-gold">
              <SplitLine text="investimento." delay={2.9} />
            </span>
            <br />
            <SplitLine text="Pronto em 30 dias." delay={3.1} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 max-w-xl text-base text-cream/70 md:text-lg"
          >
            Chalés modulares de 21 m² em itaúba e estrutura metálica, prontos pra morar, receber hóspedes ou colocar no Airbnb. A gente fabrica, entrega e instala no seu terreno.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href={waLink(PLACEHOLDERS.WHATSAPP_MESSAGE_ESSENCIA)}
              target="_blank"
              rel="noreferrer"
              onClick={trackContact}
              className="btn-whatsapp"
            >
              Quero receber proposta
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/10">→</span>
            </MagneticButton>

            <Link to="/contato" className="btn-outline">
              Pedir orçamento
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4.0 }}
            className="mt-20 grid max-w-3xl grid-cols-3 gap-6 border-t border-cream/10 pt-10"
          >
            <HeroStat value="30" suffix="dias" label="entrega no terreno" />
            <HeroStat value="R$ 84.900" suffix="firme" label="21 m² completo" />
            <HeroStat value="Todo" suffix="Brasil" label="atendimento nacional" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.3em] text-cream/50">
          <span>Deslize</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} className="text-gold" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

function HeroStat({ value, suffix, label }: { value: string; suffix: string; label: string }) {
  return (
    <div>
      <p className="flex items-baseline gap-1.5 font-display text-2xl text-cream md:text-4xl">
        {value}
        {suffix && <span className="text-sm text-gold md:text-base">{suffix}</span>}
      </p>
      <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-cream/50 md:text-xs">
        {label}
      </p>
    </div>
  )
}

function SplitLine({ text, delay = 0, accent = false }: { text: string; delay?: number; accent?: boolean }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pr-[0.2em]">
          <motion.span
            className={`inline-block ${accent ? 'text-gold' : ''}`}
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.2, delay: delay + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </>
  )
}
