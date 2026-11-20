import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface Props {
  nome: string
  metragem: string
  dimensoes: string
  preco: string
  resumo: string
  to: string
  image: string
  destaque?: boolean
  index?: number
}

export default function ModelCard({ nome, metragem, dimensoes, preco, resumo, to, image, destaque, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15% 0px' }}
      transition={{ duration: 1, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={to} className="group block">
        <div className="relative overflow-hidden rounded-[28px] border border-line bg-ash transition-all duration-700 hover:border-gold/60 hover:shadow-[0_30px_60px_-20px_rgba(212,168,87,0.25)]">
          <div className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{ background: 'radial-gradient(400px circle at 50% 0%, rgba(212,168,87,0.1), transparent 40%)' }} />
          <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[5/6]">
            <motion.img
              src={image}
              alt={nome}
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ scale: 1.05 }}
              whileHover={{ scale: 1.12 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-night/20" />

            <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6">
              {destaque ? (
                <span className="chip border-gold/40 bg-gold/10 text-gold">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
                  </span>
                  Mais vendido
                </span>
              ) : <span />}
              <div className="text-right">
                <p className="font-mono text-[10px] text-cream/50">MODELO</p>
                <p className="font-mono text-xs text-cream/90">{String(index + 1).padStart(2, '0')}</p>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 px-7 pb-7">
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">{dimensoes}</p>
                  <h3 className="mt-3 font-display text-5xl font-medium text-cream md:text-6xl">
                    {nome}
                  </h3>
                  <p className="mt-1 font-display text-3xl text-cream/40">{metragem}</p>
                </div>
                <motion.div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-night transition"
                  whileHover={{ rotate: 45 }}
                >
                  <ArrowUpRight size={18} strokeWidth={2.2} />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-6 px-7 py-6">
            <p className="max-w-xs text-sm leading-relaxed text-cream/70">{resumo}</p>
            <div className="shrink-0 text-right">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/50">A partir de</p>
              <p className="mt-1 font-display text-3xl font-medium text-cream">{preco}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
