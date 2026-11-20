import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import LeadForm from '../components/LeadForm'
import Reveal from '../components/Reveal'
import MagneticButton from '../components/MagneticButton'
import { PLACEHOLDERS, waLink } from '../config/placeholders'
import { trackContact } from '../lib/pixel'

const IMG = (p: string) => `/img/${p}`

export default function ModelosAFrame() {
  const m = PLACEHOLDERS.MODELOS.aFrame
  return (
    <>
      <section className="relative overflow-hidden pt-32 md:pt-40">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-5">
              <Reveal>
                <p className="label">Modelo 02</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-6 text-display-lg text-cream">
                  <span className="text-gold">A-Frame</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-2 font-display text-5xl text-cream/60">18 m²</p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="mt-8 max-w-md text-lg leading-relaxed text-cream/75">{m.resumo}</p>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="mt-10 flex items-center gap-10 border-t border-cream/10 pt-8 text-sm text-cream/70">
                  <div>
                    <p className="label !gap-0 before:hidden">Dimensões</p>
                    <p className="mt-2 font-display text-2xl text-cream">{m.dimensoes}</p>
                  </div>
                  <div>
                    <p className="label !gap-0 before:hidden">Prazo</p>
                    <p className="mt-2 font-display text-2xl text-cream">{m.prazo}</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0, scale: 1.04, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-cream/10 grain-overlay"
              >
                <img src={IMG('aframe-poster.png')} alt="A-Frame 18 m²" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream/70">ORIZONTE / 2026 / 02</p>
                  <p className="font-display text-2xl text-cream">{m.preco}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x mt-24 md:mt-32">
        <div className="grid gap-16 md:grid-cols-[1.3fr_1fr]">
          <div>
            <Reveal>
              <p className="label">O que vem no modelo</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-display-md text-cream">
                Formato <br />
                <span className="text-gold">icônico.</span>
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-1">
              {m.specs.map((s, i) => (
                <Reveal key={s} delay={i * 0.07}>
                  <li className="flex items-start gap-4 border-b border-cream/10 py-5 text-cream/90">
                    <Check className="mt-1 shrink-0 text-gold" size={18} />
                    <span className="text-base md:text-lg">{s}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <aside className="md:sticky md:top-32 md:h-fit">
            <div className="relative overflow-hidden rounded-[28px] border border-cream/10 bg-charcoal/50 p-8 md:p-10">
              <p className="label">Investimento</p>
              <p className="mt-4 font-display text-6xl text-gold">{m.preco}</p>
              <p className="mt-2 text-sm text-mist">À vista ou 30/70.</p>

              <div className="my-7 h-px w-full bg-cream/10" />

              <div className="space-y-3 text-sm">
                <Row label="Entrada" value={PLACEHOLDERS.PAGAMENTO.entrada} />
                <Row label="Na entrega" value={PLACEHOLDERS.PAGAMENTO.entrega} />
                <Row label="Prazo" value={`${m.prazo} no terreno`} />
              </div>

              <div className="mt-8">
                <MagneticButton
                  href={waLink(PLACEHOLDERS.WHATSAPP_MESSAGE_AFRAME)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={trackContact}
                  className="btn-whatsapp w-full"
                >
                  Falar sobre o A-Frame
                </MagneticButton>
              </div>
            </div>

            <div className="mt-6">
              <LeadForm modeloPadrao="A-Frame 18 m²" origem="a-frame" compact />
            </div>
          </aside>
        </div>
      </section>

      <section className="container-x my-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[16/10] overflow-hidden rounded-[32px]"
        >
          <img src={IMG('prancha-aframe.png')} alt="Prancha arquitetônica A-Frame" className="h-full w-full object-cover" />
          <div className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.25em] text-cream/70 md:text-sm">
            Prancha técnica · A-Frame
          </div>
        </motion.div>
      </section>
    </>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-cream/60">{label}</span>
      <span className="font-display text-xl text-cream">{value}</span>
    </div>
  )
}
