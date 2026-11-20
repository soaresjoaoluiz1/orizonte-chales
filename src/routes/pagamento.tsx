import { CheckCircle2 } from 'lucide-react'
import Reveal from '../components/Reveal'
import MagneticButton from '../components/MagneticButton'
import { useLeadModal } from '../context/LeadModalContext'

export default function Pagamento() {
  const { abrir } = useLeadModal()
  return (
    <>
      <section className="container-x pt-40 pb-20 md:pt-48">
        <Reveal>
          <p className="label">Pagamento</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 text-display-lg text-cream">
            Simples: <br />
            30% agora, <br />
            <span className="text-gold">70% na entrega.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-10 max-w-xl text-lg text-cream/70 md:text-xl">
            Nada de letra miúda. Você paga 30% pra abrir a produção e 70% quando o chalé estiver instalado no seu terreno.
          </p>
        </Reveal>
      </section>

      <section className="container-x py-12">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] border border-cream/10 bg-charcoal/50 p-8 md:p-12">
              <p className="label">1. Entrada</p>
              <p className="mt-4 font-display text-[120px] leading-none text-gold md:text-[180px]">30<span className="text-5xl md:text-7xl">%</span></p>
              <p className="mt-4 max-w-sm text-cream/80 md:text-lg">
                Confirma o pedido e abre a produção. A gente para tudo que estiver na fila e começa o seu chalé.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-[32px] border border-cream/10 bg-charcoal/50 p-8 md:p-12">
              <p className="label">2. Na entrega</p>
              <p className="mt-4 font-display text-[120px] leading-none text-gold md:text-[180px]">70<span className="text-5xl md:text-7xl">%</span></p>
              <p className="mt-4 max-w-sm text-cream/80 md:text-lg">
                Pago quando o chalé estiver instalado no seu terreno. Você vê, aprova, paga, recebe a chave.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x mt-10">
        <div className="rounded-[28px] border border-cream/10 bg-ash/60 p-8 md:p-10">
          <p className="label">Formas aceitas</p>
          <ul className="mt-6 grid gap-x-10 gap-y-4 md:grid-cols-2">
            {['Pix', 'Transferência bancária', 'Cartão (consulte condições)', 'Parcelamento direto'].map((f) => (
              <li key={f} className="flex items-center gap-3 border-b border-cream/5 pb-3 text-cream/90">
                <CheckCircle2 className="text-gold" size={18} />
                <span className="text-base md:text-lg">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x my-28">
        <div className="relative overflow-hidden rounded-[40px] border border-cream/10 bg-charcoal/60 p-8 text-center md:p-16 grain-overlay">
          <Reveal>
            <p className="label justify-center">Dúvida sobre condições?</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-display-md text-cream text-balance">
              A gente faz <span className="text-gold">o quadro certo</span> pra sua realidade.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10">
              <MagneticButton
                onClick={() => abrir({ origem: 'pagamento' })}
                className="btn-whatsapp"
              >
                Receber proposta no WhatsApp
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
