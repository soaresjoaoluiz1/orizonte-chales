import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { CheckCircle2, MessageCircle, Clock, ArrowUpRight, Instagram } from 'lucide-react'
import { waLink, PLACEHOLDERS } from '../config/placeholders'
import { trackContact } from '../lib/pixel'
import Reveal from '../components/Reveal'

const IMG = (p: string) => `/img/${p}`

export default function Obrigado() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden grain-overlay">
        <div className="absolute inset-0 -z-10">
          <img src={IMG('chale-montanha.jpg')} className="h-full w-full object-cover opacity-30" alt="" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-br from-night via-night/95 to-night" />
        </div>
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-gold/15 blur-[180px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[160px]" />

        <div className="container-x relative z-10 flex min-h-[100svh] flex-col items-center justify-center py-24 pt-32">
          <motion.div
            initial={{ scale: 0, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.2 }}
            className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold/50 bg-gold/10 md:h-28 md:w-28"
          >
            <CheckCircle2 className="text-gold" size={48} strokeWidth={1.4} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-gold md:text-xs">
              Pedido recebido · {new Date().toLocaleDateString('pt-BR')}
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-3xl text-center font-display text-display-md font-medium text-cream text-balance md:text-display-lg"
          >
            Obrigado! <br />
            Seu pedido chegou <span className="font-serif italic text-gold">até nós.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-center text-lg text-cream/75 md:text-xl"
          >
            Nossa equipe recebeu seus dados e vai preparar uma proposta sob medida. Em até <strong className="text-cream">1 dia útil</strong> entramos em contato pelo WhatsApp.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-3"
          >
            <NextStep n="01" Icon={MessageCircle} title="Recebido" desc="Seus dados chegaram até nossa equipe." done />
            <NextStep n="02" Icon={Clock} title="Em análise" desc="Preparamos sua proposta em até 1 dia útil." />
            <NextStep n="03" Icon={ArrowUpRight} title="Chegamos no WhatsApp" desc="Preço firme, prazo exato e condições." />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 flex flex-col items-center gap-6"
          >
            <p className="text-center text-sm uppercase tracking-[0.25em] text-cream/50">Quer adiantar? Fala direto com a gente</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                onClick={trackContact}
                className="btn-whatsapp"
              >
                <MessageCircle size={16} /> Falar no WhatsApp agora
              </a>
              <a
                href={PLACEHOLDERS.INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <Instagram size={16} /> Seguir {PLACEHOLDERS.INSTAGRAM_HANDLE}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-16 flex items-center gap-4 border-t border-line pt-8"
          >
            <Link to="/" className="btn-ghost">
              Voltar pro início
            </Link>
            <span className="text-cream/30">·</span>
            <Link to="/modelos" className="btn-ghost">
              Ver modelos
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

function NextStep({ n, Icon, title, desc, done = false }: { n: string; Icon: any; title: string; desc: string; done?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border p-6 ${done ? 'border-gold/40 bg-gold/5' : 'border-line bg-ash/60'}`}>
      <div className="flex items-start justify-between">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${done ? 'border border-gold/40 bg-gold/10 text-gold' : 'border border-line bg-charcoal text-cream/60'}`}>
          <Icon size={18} strokeWidth={1.6} />
        </div>
        <span className="font-mono text-[10px] text-cream/40">{n}</span>
      </div>
      <p className={`mt-6 font-display text-xl font-medium ${done ? 'text-gold' : 'text-cream'}`}>{title}</p>
      <p className="mt-2 text-sm text-cream/60">{desc}</p>
      {done && (
        <div className="mt-4 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
          <CheckCircle2 size={14} /> Concluído
        </div>
      )}
    </div>
  )
}
