import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Timer, TreePine, Hammer, KeyRound, TrendingUp, Home, FileText, HandCoins, Truck, ArrowUpRight } from 'lucide-react'
import Hero from '../components/Hero'
import FAQ from '../components/FAQ'
import Marquee from '../components/Marquee'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import { useLeadModal } from '../context/LeadModalContext'

const IMG = (p: string) => `/img/${p}`

export default function HomePage() {
  return (
    <>
      <Hero />

      <Marquee items={['21 m² · pronto em 30 dias', '/', 'Itaúba maciça', '/', 'Estrutura metálica', '/', 'Araranguá SC', '/', 'Atendemos todo Brasil', '/']} />

      <LeadCapture />

      <ValuePropsSection />

      <ProductSection />

      <PlantSection />

      <ProcessSection />

      <InvestmentSection />

      <StatsSection />

      <GallerySection />

      <FAQ />

      <ClosingCTA />
    </>
  )
}

function LeadCapture() {
  const { abrir } = useLeadModal()
  return (
    <section className="relative overflow-hidden border-b border-line bg-charcoal/40 py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/20 blur-[160px]" />
      </div>
      <div className="container-x relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="label justify-center">Comece agora</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-display-md font-medium text-cream text-balance">
              Receba a proposta <span className="text-gold">direto no WhatsApp</span> em até 1 dia útil.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-cream/70 md:text-lg">
              Preço firme, prazo exato pra sua cidade e condições de pagamento. Preenche o formulário rápido e a gente te chama.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <button
              type="button"
              onClick={() => abrir({ origem: 'home-topo' })}
              className="btn-whatsapp mt-10 inline-flex"
            >
              Receber proposta no WhatsApp
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ValuePropsSection() {
  const items = [
    { Icon: Timer, title: '30 dias no terreno', desc: 'Do pedido à chave. Sem reforma eterna, sem mão de obra.' },
    { Icon: TreePine, title: 'Itaúba maciça', desc: 'Madeira nobre de alta densidade, durável, resistente a tempo e cupim.' },
    { Icon: Hammer, title: 'Estrutura metálica', desc: 'Base em aço estrutural. Mais seguro, estável e rápido de instalar.' },
    { Icon: Home, title: 'Chave na mão', desc: 'Piso, elétrica, hidráulica e acabamento prontos. Chega morando.' },
  ]

  return (
    <section className="container-x py-24 md:py-28">
      <div className="grid gap-4 md:grid-cols-4">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-3xl border border-line bg-ash p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:bg-charcoal hover:shadow-[0_20px_40px_-20px_rgba(212,168,87,0.2)]"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            <div className="relative flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-charcoal transition group-hover:border-gold/50 group-hover:text-gold">
                <item.Icon size={20} strokeWidth={1.5} />
              </div>
              <span className="font-mono text-[10px] text-cream/40">0{i + 1}</span>
            </div>
            <h3 className="relative mt-10 font-display text-xl font-medium text-cream md:text-2xl">{item.title}</h3>
            <p className="relative mt-3 text-sm leading-relaxed text-cream/60">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function ProductSection() {
  const { abrir } = useLeadModal()
  return (
    <section id="produto" className="relative overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/30 blur-[180px]" />
      </div>
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <p className="label">O produto</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-display-lg font-medium text-cream">
                Modelo <br />
                <span className="text-gold">Essência 21 m².</span>
              </h2>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-cream/75 md:text-lg">
                1 quarto com cama de casal, banheiro completo, lavabo, sala e cozinha integradas, varanda. Tudo em 21 m² de espaço aproveitado ao máximo.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8 text-sm text-cream/70">
                <div>
                  <p className="label !gap-0 before:hidden">Dimensões</p>
                  <p className="mt-2 font-display text-2xl text-cream">3 × 7,30 m</p>
                </div>
                <div>
                  <p className="label !gap-0 before:hidden">Investimento</p>
                  <p className="mt-2 font-display text-2xl text-gold">R$ 84.900</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.55}>
              <button
                type="button"
                onClick={() => abrir({ modelo: 'Essência 21 m²', origem: 'home-produto' })}
                className="btn-whatsapp mt-10 inline-flex"
              >
                Quero este modelo
              </button>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 1.04, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-line grain-overlay"
            >
              <img src={IMG('chale-lago.jpeg')} alt="Chalé Orizonte na beira do lago" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream/70">ESSÊNCIA · 21 M² · ORIZONTE 2026</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PlantSection() {
  const amb = [
    { label: 'Quarto', dim: '2,00 × 2,98 m', desc: 'Cama de casal, armário embutido' },
    { label: 'Banheiro', dim: '1,20 × 1,48 m', desc: 'Box, vaso e cuba, revestimento completo' },
    { label: 'Lavabo', dim: '1,18 × 0,50 m', desc: 'Área de serviço compacta' },
    { label: 'Sala + Cozinha', dim: '2,98 × 2,52 m', desc: 'Integradas, bancada, cooktop' },
    { label: 'Varanda', dim: '2,90 × 0,80 m', desc: 'Deck de madeira externo' },
  ]
  return (
    <section className="relative overflow-hidden border-y border-line bg-ash py-28 md:py-36">
      <div className="container-x">
        <div className="flex items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="label">Planta e medidas</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 max-w-xl text-display-md font-medium text-cream">
                Cada centímetro <br />
                <span className="text-gold">com propósito.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[28px] border border-line bg-charcoal/40 p-6"
          >
            <img src={IMG('planta-medidas.jpg')} alt="Planta e medidas do chalé Essência" className="h-auto w-full rounded-2xl" />
          </motion.div>

          <div className="space-y-3">
            {amb.map((a, i) => (
              <Reveal key={a.label} delay={i * 0.08}>
                <div className="group flex items-center justify-between gap-6 rounded-2xl border border-line bg-charcoal/40 p-5 transition hover:border-gold/40">
                  <div>
                    <p className="label !gap-0 before:hidden">{a.label}</p>
                    <p className="mt-2 font-display text-2xl text-cream">{a.dim}</p>
                  </div>
                  <p className="max-w-[180px] text-right text-xs text-cream/60 md:text-sm">{a.desc}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.5}>
              <div className="mt-6 rounded-2xl border border-gold/30 bg-gold/5 p-5">
                <p className="label !gap-0 before:hidden">Área total</p>
                <div className="mt-2 flex items-baseline gap-3">
                  <p className="font-display text-4xl text-gold md:text-5xl">21,9 m²</p>
                  <p className="text-cream/60">em 3 × 7,30 m</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  const steps = [
    { n: '01', Icon: FileText, t: 'Conversa', d: 'Fala no WhatsApp, enviamos proposta com preço firme.' },
    { n: '02', Icon: HandCoins, t: 'Entrada', d: '30% na entrada abre a produção imediatamente.' },
    { n: '03', Icon: Hammer, t: 'Produção', d: 'Estrutura em aço, revestimento itaúba, acabamento interno.' },
    { n: '04', Icon: Truck, t: 'Transporte', d: 'Saímos de Araranguá SC direto pro seu terreno, Brasil todo.' },
    { n: '05', Icon: KeyRound, t: 'Entrega', d: 'Instalamos, você paga 70% e recebe a chave na hora.' },
  ]

  return (
    <section ref={ref} className="relative overflow-hidden py-28 md:py-36">
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0 -z-10 opacity-20">
        <img src={IMG('chale-praia.jpg')} className="h-full w-full object-cover" alt="" aria-hidden />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-night via-night/80 to-night" />

      <div className="container-x">
        <div className="flex items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="label">Processo em 5 passos</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 max-w-xl text-display-md font-medium text-cream">
                Do primeiro contato <br />
                à <span className="text-gold">chave na mão</span>.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid gap-3 md:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-charcoal/60 p-6 transition hover:border-gold/40">
                <div className="flex items-start justify-between">
                  <s.Icon size={22} strokeWidth={1.4} className="text-gold" />
                  <span className="font-mono text-xs text-cream/40">{s.n}</span>
                </div>
                <h3 className="mt-10 font-display text-xl font-medium text-cream">{s.t}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-cream/60">{s.d}</p>
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gold/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function InvestmentSection() {
  const { abrir } = useLeadModal()
  return (
    <section className="container-x py-28 md:py-36">
      <div className="relative overflow-hidden rounded-[32px] border border-gold/30 bg-gradient-to-br from-charcoal to-ash grain-overlay">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-gold/15 blur-[160px]" />
        <div className="relative z-10 grid gap-12 p-10 md:grid-cols-[1.1fr_1fr] md:gap-16 md:p-16">
          <div>
            <Reveal>
              <p className="label">Investimento inteligente</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-display-md font-medium text-cream text-balance">
                Mais que um refúgio. <br />
                Uma <span className="text-gold">fonte de renda.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-cream/75 md:text-lg">
                Enquanto uma casa comum leva meses de obra, o Orizonte está pronto em 30 dias. Isso é tempo transformado em faturamento no Airbnb, pousada ou locação temporada.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => abrir({ origem: 'home-investimento' })}
                  className="btn-whatsapp"
                >
                  Quero investir
                </button>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4">
            <Reveal delay={0.1}>
              <InvCard
                Icon={TrendingUp}
                title="Retorno rápido"
                desc="Pronto em 30 dias é menos tempo parado. Quanto antes recebe hóspede, antes começa a gerar."
              />
            </Reveal>
            <Reveal delay={0.2}>
              <InvCard
                Icon={Home}
                title="Alta ocupação"
                desc="Chalé premium em terreno natural atrai hóspedes dispostos a pagar mais pela experiência."
              />
            </Reveal>
            <Reveal delay={0.3}>
              <InvCard
                Icon={KeyRound}
                title="Baixa manutenção"
                desc="Itaúba e aço são materiais nobres. Menos reparo, mais operação."
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function InvCard({ Icon, title, desc }: { Icon: any; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-line bg-night/60 p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
        <Icon size={18} strokeWidth={1.6} />
      </div>
      <div>
        <p className="font-display text-xl text-cream">{title}</p>
        <p className="mt-1 text-sm text-cream/70">{desc}</p>
      </div>
    </div>
  )
}

function StatsSection() {
  const stats = [
    { n: 30, suf: 'dias', d: 'do pedido à chave no terreno', literal: null as string | null },
    { n: 21, suf: 'm²', d: 'Essência · 3 × 7,30 m', literal: null },
    { n: 0, suf: '', d: 'pagamento entrada e entrega', literal: '30/70' },
    { n: 100, suf: '%', d: 'itaúba maciça + aço estrutural', literal: null },
  ]
  return (
    <section className="container-x py-28">
      <div className="grid gap-12 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="group">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-6xl font-medium text-cream md:text-7xl">
                  {s.literal ? s.literal : <CountUp value={s.n} />}
                </span>
                {s.suf && <span className="font-display text-2xl text-gold">{s.suf}</span>}
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: '-15% 0px' }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 h-px w-12 origin-left bg-gold transition-all duration-500 group-hover:w-16"
              />
              <p className="mt-4 max-w-[200px] text-sm leading-relaxed text-cream/60">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function GallerySection() {
  const tiles = [
    { src: IMG('chale-montanha.jpg'), span: 'md:col-span-7 md:row-span-2', label: 'Serra', cap: 'Chalé com vista pra serra' },
    { src: IMG('chale-praia.jpg'), span: 'md:col-span-5', label: 'Litoral', cap: 'À beira mar' },
    { src: IMG('chale-lago.jpeg'), span: 'md:col-span-5', label: 'Refúgio', cap: 'Na beira do lago' },
    { src: IMG('chale-floresta.jpg'), span: 'md:col-span-6', label: 'Floresta', cap: 'Imerso na natureza' },
    { src: IMG('planta-medidas.jpg'), span: 'md:col-span-6', label: 'Planta', cap: '21 m² otimizados' },
  ]

  return (
    <section className="container-x py-28 md:py-36">
      <div className="flex items-end justify-between gap-6">
        <div>
          <Reveal>
            <p className="label">Em cada cenário</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 max-w-2xl text-display-lg font-medium text-cream">
              Serra, lago, praia, <br />
              <span className="text-gold">floresta.</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mt-14 grid auto-rows-[220px] gap-3 md:grid-cols-12 md:auto-rows-[260px] md:gap-4">
        {tiles.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative overflow-hidden rounded-3xl border border-line bg-ash ${t.span}`}
          >
            <img
              src={t.src}
              alt={t.cap}
              className="h-full w-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">{t.label}</p>
                <p className="mt-2 font-display text-lg text-cream md:text-xl">{t.cap}</p>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 bg-night/40 text-cream/70 transition group-hover:border-gold group-hover:text-gold">
                <ArrowUpRight size={14} />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function ClosingCTA() {
  const { abrir } = useLeadModal()
  return (
    <section className="container-x pb-28 md:pb-36">
      <div className="relative overflow-hidden rounded-[32px] border border-line bg-ash grain-overlay">
        <div className="absolute inset-0 -z-0">
          <img src={IMG('chale-floresta.jpg')} className="h-full w-full object-cover opacity-20" alt="" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-br from-night/85 via-night/80 to-night/95" />
        </div>
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/20 blur-[120px]" />

        <div className="relative z-10 flex flex-col items-center gap-10 p-8 text-center md:p-16">
          <div className="max-w-2xl">
            <Reveal>
              <p className="label justify-center">Vamos conversar</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-display-md font-medium text-cream text-balance">
                Em 1 dia útil a proposta chega{' '}
                <span className="text-gold">no seu WhatsApp.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-cream/70">
                Preenche o formulário rápido. Enviamos proposta com prazo exato pra sua cidade, condições de pagamento e detalhes do modelo escolhido.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.3}>
            <button
              type="button"
              onClick={() => abrir({ origem: 'home-cta' })}
              className="btn-whatsapp"
            >
              Receber proposta no WhatsApp
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
