import ModelCard from '../components/ModelCard'
import Reveal from '../components/Reveal'
import Marquee from '../components/Marquee'
import { PLACEHOLDERS } from '../config/placeholders'

const IMG = (p: string) => `/img/${p}`

export default function ModelosIndex() {
  const { glow, aFrame } = PLACEHOLDERS.MODELOS
  return (
    <>
      <section className="container-x pt-40 pb-16 md:pt-48">
        <Reveal>
          <p className="label">Catálogo 2026</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 text-display-lg text-cream">
            Dois jeitos <br />
            de ter o seu <br />
            <span className="text-gold">chalé.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-10 max-w-xl text-lg text-cream/70 md:text-xl">
            Mesma qualidade construtiva, mesma itaúba, mesma estrutura metálica.
            Você escolhe o espaço e o estilo.
          </p>
        </Reveal>
      </section>

      <Marquee items={['Glow', '·', 'A-Frame', '·', 'Entregue', '·', 'Pronto', '·']} slow />

      <section className="container-x py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <ModelCard
            nome={glow.nome}
            metragem={glow.metragem}
            dimensoes={glow.dimensoes}
            preco={glow.preco}
            resumo={glow.resumo}
            image={IMG('glow-poster.png')}
            to="/modelos/glow"
            destaque
            index={0}
          />
          <ModelCard
            nome={aFrame.nome}
            metragem={aFrame.metragem}
            dimensoes={aFrame.dimensoes}
            preco={aFrame.preco}
            resumo={aFrame.resumo}
            image={IMG('aframe-poster.png')}
            to="/modelos/a-frame"
            index={1}
          />
        </div>
      </section>
    </>
  )
}
