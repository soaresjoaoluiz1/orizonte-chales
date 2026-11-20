import { motion } from 'framer-motion'
import { useLeadModal } from '../context/LeadModalContext'
import Reveal from '../components/Reveal'

const IMG = (p: string) => `/img/${p}`

const passos = [
  { n: '01', t: 'Conversa', d: 'Você fala no WhatsApp. A gente entende seu terreno, necessidade e envia a proposta.', img: 'harmonia.png' },
  { n: '02', t: 'Entrada 30%', d: 'Com 30% a gente abre a produção do seu chalé imediatamente na nossa fábrica.', img: 'oficina-dia.jpeg' },
  { n: '03', t: 'Produção', d: 'Estrutura metálica, revestimento em itaúba e acabamento interno. Tudo controlado.', img: 'oficina-noite.jpeg' },
  { n: '04', t: 'Transporte', d: 'Os módulos saem da fábrica em Araranguá direto pro seu terreno, com equipe nossa.', img: 'glow.png' },
  { n: '05', t: 'Entrega', d: 'A gente instala, você paga os 70% e recebe a chave. 30 dias no total, sem atraso.', img: 'lago.jpeg' },
]

export default function ComoFunciona() {
  const { abrir } = useLeadModal()
  return (
    <>
      <section className="container-x pt-40 pb-20 md:pt-48">
        <Reveal>
          <p className="label">Processo</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 text-display-lg text-cream">
            Do WhatsApp <br />
            à <span className="text-gold">chave na mão</span> <br />
            em 30 dias.
          </h1>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-10 max-w-xl text-lg text-cream/70 md:text-xl">
            Nada de reforma que não acaba. A gente fabrica, transporta e instala.
            Você acompanha em 5 passos simples.
          </p>
        </Reveal>
      </section>

      <section className="container-x">
        <div className="space-y-4">
          {passos.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative grid items-center gap-6 overflow-hidden rounded-[28px] border border-cream/10 bg-charcoal/40 p-6 md:grid-cols-[120px_1.4fr_1fr] md:gap-10 md:p-8"
            >
              <p className="font-mono text-xs text-gold">{p.n}</p>
              <div>
                <h3 className="font-display text-4xl text-cream md:text-5xl">{p.t}</h3>
                <p className="mt-3 max-w-md text-base text-cream/70 md:text-lg">{p.d}</p>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl md:aspect-[4/3]">
                <img
                  src={IMG(p.img)}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-night/50 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container-x mt-28 mb-20">
        <div className="relative overflow-hidden rounded-[40px] border border-cream/10 bg-charcoal/60 p-8 text-center grain-overlay md:p-16">
          <Reveal>
            <p className="label justify-center">Vamos começar</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-display-md text-cream text-balance">
              Em 1 dia útil, <span className="text-gold">próximos passos</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <button
              type="button"
              onClick={() => abrir({ origem: 'como-funciona' })}
              className="btn-whatsapp mt-10 inline-flex"
            >
              Receber proposta no WhatsApp
            </button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
