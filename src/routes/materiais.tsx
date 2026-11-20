import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import Marquee from '../components/Marquee'

const IMG = (p: string) => `/img/${p}`

const blocos = [
  {
    kicker: '01 · Madeira',
    title: 'Itaúba, não pinus',
    desc: 'Madeira nobre amazônica de densidade alta, resistência natural a cupim e à umidade. Vai durar décadas, não anos.',
    img: 'harmonia.png',
  },
  {
    kicker: '02 · Estrutura',
    title: 'Aço estrutural',
    desc: 'A base é metálica. Mais seguro, mais estável e muito mais rápido de montar do que estrutura 100% em madeira.',
    img: 'oficina-dia.jpeg',
  },
  {
    kicker: '03 · Acabamento',
    title: 'Chaveiro de verdade',
    desc: 'Chega com piso, revestimento, elétrica e hidráulica. Entrega completa, você só se acomoda.',
    img: 'glow.png',
  },
  {
    kicker: '04 · Fabricação',
    title: 'Controlado e limpo',
    desc: 'Tudo feito na nossa fábrica em Araranguá, sob clima controlado. Qualidade que terreno aberto não entrega.',
    img: 'oficina-noite.jpeg',
  },
]

export default function Materiais() {
  return (
    <>
      <section className="container-x pt-40 pb-20 md:pt-48">
        <Reveal>
          <p className="label">Materiais e construção</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 text-display-lg text-cream">
            A diferença <br />
            está no que <br />
            <span className="text-gold">ninguém vê.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-10 max-w-xl text-lg text-cream/70 md:text-xl">
            Dá pra fazer um chalé barato com pinus e parafuso. A gente não faz.
          </p>
        </Reveal>
      </section>

      <Marquee items={['Itaúba', '·', 'Aço', '·', 'Acabamento', '·', 'Fábrica', '·']} slow />

      <section className="container-x py-24 md:py-28">
        <div className="space-y-24 md:space-y-32">
          {blocos.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 1 }}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-20 ${i % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''}`}
            >
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[4/5] overflow-hidden rounded-[32px]"
              >
                <img src={IMG(b.img)} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-night/40" />
              </motion.div>
              <div>
                <Reveal>
                  <p className="label">{b.kicker}</p>
                </Reveal>
                <Reveal delay={0.1}>
                  <h3 className="mt-5 text-display-md text-cream">{b.title}</h3>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/75">{b.desc}</p>
                </Reveal>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container-x my-24">
        <div className="rounded-[40px] border border-gold/30 bg-gold/5 p-10 text-center md:p-20">
          <Reveal>
            <p className="label !justify-center">Vale a diferença</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-display-md text-cream text-balance">
              Chalé em pinus <br />
              vive 10 anos. <br />
              <span className="text-gold">Chalé em itaúba <br />atravessa gerações.</span>
            </h2>
          </Reveal>
        </div>
      </section>
    </>
  )
}
