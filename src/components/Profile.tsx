import { areas, profile, sources, values } from '../data/profile'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const Profile = () => (
  <>
    <section id="perfil" className="mx-auto max-w-6xl px-6 py-20" aria-labelledby="titulo-perfil">
      <Reveal>
        <SectionHeading
          headingId="titulo-perfil"
          index="I"
          kicker="Perfil"
          title="Ejercicio jurídico con criterio y ética"
        />
      </Reveal>
      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
        <Reveal>
          <div className="panel space-y-5 p-7 md:p-9">
            {profile.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="font-serif text-xl leading-relaxed text-ivory md:text-2xl">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="panel h-full p-7">
            <p className="text-xs tracking-[0.24em] text-gold uppercase">Fuentes del derecho</p>
            <ul className="mt-5 space-y-3">
              {sources.map((source) => (
                <li key={source} className="border-b border-gold/20 pb-3 font-serif text-2xl text-ivory">
                  {source}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.05}>
        <ul className="mt-6 flex flex-wrap gap-2">
          {values.map((value) => (
            <li key={value} className="border border-gold/30 px-3 py-1.5 text-sm text-mist">
              {value}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>

    <section id="ejercicio" className="mx-auto max-w-6xl px-6 py-12" aria-labelledby="titulo-ejercicio">
      <Reveal>
        <SectionHeading
          headingId="titulo-ejercicio"
          index="II"
          kicker="Ejercicio"
          title="Áreas de trabajo"
          lede="Corresponden a la formación y a los cargos desempeñados en la administración municipal de Yumbo."
        />
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {areas.map((area, index) => (
          <Reveal key={area.title} delay={index * 0.04}>
            <article className="panel h-full p-6">
              <h3 className="font-serif text-2xl text-gold">{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{area.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  </>
)

export default Profile
