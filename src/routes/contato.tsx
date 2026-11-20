import { MapPin, ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { PLACEHOLDERS } from '../config/placeholders'
import { useLeadModal } from '../context/LeadModalContext'

export default function Contato() {
  const { abrir } = useLeadModal()
  return (
    <>
      <section className="container-x pt-40 pb-16 md:pt-48">
        <Reveal>
          <p className="label">Contato</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 text-display-lg text-cream">
            Vamos tirar <br />
            seu chalé <br />
            <span className="text-gold">do papel?</span>
          </h1>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-10 max-w-xl text-lg text-cream/70 md:text-xl">
            Preenche o formulário rápido e a gente responde no seu WhatsApp em até 1 dia útil.
          </p>
        </Reveal>
        <Reveal delay={0.35}>
          <button
            type="button"
            onClick={() => abrir({ origem: 'contato-topo' })}
            className="btn-whatsapp mt-10 inline-flex"
          >
            Receber proposta no WhatsApp
          </button>
        </Reveal>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-4 md:grid-cols-2">
          <ContactCard
            kicker="Canal recomendado"
            title="WhatsApp"
            value="Preencher formulário rápido"
            onClick={() => abrir({ origem: 'contato-cards' })}
          />
          <ContactCard
            kicker="E-mail"
            title={PLACEHOLDERS.EMAIL_CONTATO}
            href={`mailto:${PLACEHOLDERS.EMAIL_CONTATO}`}
          />
          <ContactCard
            kicker="Instagram"
            title={PLACEHOLDERS.INSTAGRAM_HANDLE}
            href={PLACEHOLDERS.INSTAGRAM_URL}
            external
          />
          <div className="rounded-[28px] border border-cream/10 bg-charcoal/40 p-6">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 shrink-0 text-gold" size={20} />
              <div>
                <p className="label !gap-0 before:hidden">Onde estamos</p>
                <p className="mt-2 font-display text-3xl text-cream">{PLACEHOLDERS.CITY}</p>
                <p className="mt-1 text-sm text-mist">Entregamos no Brasil todo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

interface ContactCardProps {
  kicker: string
  title: string
  value?: string
  href?: string
  onClick?: () => void
  external?: boolean
}

function ContactCard({ kicker, title, value, href, onClick, external }: ContactCardProps) {
  const className =
    'group flex items-center justify-between gap-6 rounded-[28px] border border-cream/10 bg-charcoal/40 p-6 text-left transition hover:border-gold/40'
  const inner = (
    <>
      <div>
        <p className="label !gap-0 before:hidden">{kicker}</p>
        <p className="mt-2 font-display text-3xl text-cream transition group-hover:text-gold md:text-4xl">
          {value || title}
        </p>
      </div>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cream/15 text-cream/60 transition group-hover:border-gold group-hover:text-gold">
        <ArrowUpRight size={18} className="transition group-hover:rotate-45" />
      </div>
    </>
  )

  if (onClick && !href) {
    return (
      <button type="button" onClick={onClick} className={`w-full ${className}`}>
        {inner}
      </button>
    )
  }

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={className}
    >
      {inner}
    </a>
  )
}
