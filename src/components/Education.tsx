import { complementary, formalStudies } from '../data/profile'
import DocumentLinks from './DocumentLinks'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const Education = () => (
  <section id="formacion" className="mx-auto max-w-6xl px-6 py-20" aria-labelledby="titulo-formacion">
    <Reveal>
      <SectionHeading
        headingId="titulo-formacion"
        index="IV"
        kicker="Formación"
        title="Estudios y formación continua"
      />
    </Reveal>

    <div className="grid gap-4">
      {formalStudies.map((study, index) => (
        <Reveal key={study.title + study.date} delay={index * 0.04}>
          <article className="panel grid gap-3 p-6 md:grid-cols-[9rem_1fr_auto] md:items-center md:p-7">
            <p className="text-xs tracking-[0.2em] text-gold uppercase">{study.level}</p>
            <div>
              <h3 className="text-3xl text-ivory">{study.title}</h3>
              <p className="mt-1 text-mist">
                {study.school} · {study.place}
              </p>
              <DocumentLinks documents={study.documents} />
            </div>
            <p className="text-sm text-ivory">{study.date}</p>
          </article>
        </Reveal>
      ))}
    </div>

    <Reveal>
      <h3 className="mt-14 text-3xl text-ivory">Otros estudios</h3>
    </Reveal>
    <ul className="mt-6 divide-y divide-gold/20 border-y border-gold/20">
      {complementary.map((item) => (
        <li key={item.title} className="grid gap-2 py-5 md:grid-cols-[1fr_auto] md:items-baseline">
          <div>
            <p className="text-ivory">{item.title}</p>
            <p className="mt-1 text-sm text-mist">{item.school}</p>
            <DocumentLinks documents={item.documents} />
          </div>
          <p className="text-sm text-gold">
            {item.hours} · {item.date}
          </p>
        </li>
      ))}
    </ul>
  </section>
)

export default Education
