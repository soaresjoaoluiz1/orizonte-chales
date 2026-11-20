import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import Reveal from './Reveal'
import { cn } from '../lib/cn'

const faqs = [
  { q: 'Em quanto tempo eu recebo o chalé?', a: 'Em 30 dias no seu terreno, a contar da confirmação do pedido com a entrada de 30%.' },
  { q: 'Qual a madeira usada?', a: 'Itaúba, madeira nobre amazônica de alta densidade e resistência natural à umidade e cupim. Nada de pinus.' },
  { q: 'Como funciona o pagamento?', a: '30% na entrada pra abrir a produção e 70% na entrega, no seu terreno. Sem letra miúda, sem taxa escondida.' },
  { q: 'O chalé vem montado?', a: 'Sim. Fabricamos em módulos, transportamos e instalamos no seu terreno. Você recebe pronto pra morar ou receber hóspedes.' },
  { q: 'Preciso ter terreno próprio?', a: 'Sim. A Orizonte entrega e instala no seu terreno, em qualquer cidade da região sul.' },
  { q: 'A estrutura é só madeira?', a: 'Não. A base é estrutural em aço, por isso o chalé é mais seguro, mais rápido de montar e tem vida útil maior do que um construído só com madeira.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="container-x py-28 md:py-36">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            <p className="label">Dúvidas</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-display-md text-cream">
              O que você <br />
              <span className="text-gold">precisa saber.</span>
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <div className="divide-y divide-cream/10 border-y border-cream/10">
            {faqs.map((f, i) => {
              const active = open === i
              return (
                <button
                  key={i}
                  onClick={() => setOpen(active ? null : i)}
                  className="group flex w-full flex-col items-start py-7 text-left"
                >
                  <div className="flex w-full items-start justify-between gap-6">
                    <span className="font-display text-2xl text-cream transition group-hover:text-gold md:text-3xl">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: active ? 45 : 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className={cn(
                        'mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition',
                        active ? 'border-gold text-gold' : 'border-cream/20 text-cream/60',
                      )}
                    >
                      <Plus size={18} />
                    </motion.span>
                  </div>
                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/70 md:text-lg">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
