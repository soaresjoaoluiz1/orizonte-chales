import { Link } from '@tanstack/react-router'
import { Instagram, ArrowUpRight } from 'lucide-react'
import { PLACEHOLDERS, waLink } from '../config/placeholders'
import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-line bg-night">
      <div className="pointer-events-none absolute -right-20 -top-40 h-[400px] w-[400px] rounded-full bg-gold/10 blur-[120px]" />

      <div className="container-x py-20">
        <Reveal>
          <p className="font-display text-[clamp(4rem,14vw,14rem)] font-medium leading-[0.9] tracking-[-0.045em] text-cream">
            Orizonte<span className="text-gold">.</span>
          </p>
        </Reveal>

        <div className="mt-20 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src={`/img/logo-circle.png`}
              alt="Orizonte"
              className="h-20 w-20 rounded-full"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
              Chalés modulares em itaúba e estrutura metálica. Projetamos, fabricamos e instalamos
              no seu terreno em 30 dias. {PLACEHOLDERS.CITY}.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="label">Navegue</p>
            <ul className="mt-6 space-y-3 text-sm text-cream/80">
              <li><Link to="/modelos" className="hover:text-gold">Modelos</Link></li>
              <li><Link to="/como-funciona" className="hover:text-gold">Processo</Link></li>
              <li><Link to="/materiais" className="hover:text-gold">Materiais</Link></li>
              <li><Link to="/pagamento" className="hover:text-gold">Pagamento</Link></li>
              <li><Link to="/contato" className="hover:text-gold">Contato</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label">Fale conosco</p>
            <ul className="mt-6 space-y-3 text-sm text-cream/80">
              <li>
                <a href={waLink()} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 hover:text-gold">
                  WhatsApp <ArrowUpRight size={14} className="transition group-hover:rotate-45" />
                </a>
              </li>
              <li>
                <a href={`mailto:${PLACEHOLDERS.EMAIL_CONTATO}`} className="hover:text-gold">
                  {PLACEHOLDERS.EMAIL_CONTATO}
                </a>
              </li>
              <li>
                <a href={PLACEHOLDERS.INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-gold">
                  <Instagram size={14} /> {PLACEHOLDERS.INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-[11px] font-mono text-cream/50 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} {PLACEHOLDERS.BRAND_FULL}</span>
          <span className="uppercase tracking-[0.25em]">Feito em Araranguá</span>
        </div>
      </div>
    </footer>
  )
}
