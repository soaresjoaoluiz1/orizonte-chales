interface Props {
  items: string[]
  slow?: boolean
}

export default function Marquee({ items, slow }: Props) {
  const content = [...items, ...items, ...items]
  return (
    <div className="relative overflow-hidden border-y border-cream/10 bg-ash/40 py-7">
      <div className={`flex min-w-max whitespace-nowrap gap-16 ${slow ? 'animate-marquee-slow' : 'animate-marquee'}`}>
        {content.map((it, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className="font-display text-4xl text-cream md:text-6xl">{it}</span>
            <span className="h-2 w-2 rounded-full bg-gold" />
          </div>
        ))}
      </div>
    </div>
  )
}
