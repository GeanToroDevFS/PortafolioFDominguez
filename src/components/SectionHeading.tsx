type Props = {
  index: string
  kicker: string
  title: string
  lede?: string
  headingId?: string
}

const SectionHeading = ({ index, kicker, title, lede, headingId }: Props) => (
  <div className="max-w-2xl mb-12">
    <p className="text-gold text-xs tracking-[0.28em] uppercase mb-3">
      <span className="text-lg tracking-normal normal-case mr-3">{index}</span>
      {kicker}
    </p>
    <h2 id={headingId} className="text-4xl md:text-5xl text-ivory leading-[1.05]">{title}</h2>
    {lede ? <p className="copy mt-4 text-mist leading-relaxed">{lede}</p> : null}
  </div>
)

export default SectionHeading
