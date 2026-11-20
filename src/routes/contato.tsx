import { MapPin, ArrowUpRight } from 'lucide-react'
import LeadForm from '../components/LeadForm'
import Reveal from '../components/Reveal'
import { PLACEHOLDERS, waLink } from '../config/placeholders'
import { trackContact } from '../lib/pixel'

export default function Contato() {
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
            Responder nossa equipe leva 1 dia útil ou menos. O WhatsApp é o canal mais rápido.
          </p>
        </Reveal>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div className="space-y-4">
            <ContactCard
              kicker="Canal recomendado"
              title="WhatsApp"
              value="Falar agora"
              href={waLink()}
              onClick={trackContact}
              external
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
                  <p className="mt-1 text-sm text-mist">Entregamos em toda a região sul</p>
                </div>
              </div>
            </div>
          </div>

          <LeadForm origem="contato" />
        </div>
      </section>
    </>
  )
}

function ContactCard({
  kicker,
  title,
  value,
  href,
  onClick,
  external,
}: {
  kicker: string
  title: string
  value?: string
  href: string
  onClick?: () => void
  external?: boolean
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="group flex items-center justify-between gap-6 rounded-[28px] border border-cream/10 bg-charcoal/40 p-6 transition hover:border-gold/40"
    >
      <div>
        <p className="label !gap-0 before:hidden">{kicker}</p>
        <p className="mt-2 font-display text-3xl text-cream transition group-hover:text-gold md:text-4xl">
          {value || title}
        </p>
      </div>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cream/15 text-cream/60 transition group-hover:border-gold group-hover:text-gold">
        <ArrowUpRight size={18} className="transition group-hover:rotate-45" />
      </div>
    </a>
  )
}
