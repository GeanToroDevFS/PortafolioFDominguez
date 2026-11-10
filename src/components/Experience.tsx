import { roles } from '../data/profile'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const Experience = () => (
  <section id="trayectoria" className="mx-auto max-w-6xl px-6 py-20" aria-labelledby="titulo-trayectoria">
    <Reveal>
      <SectionHeading
        headingId="titulo-trayectoria"
        index="III"
        kicker="Trayectoria"
        title="Servicio en la Alcaldía de Yumbo"
        lede="Cargos y vigencias tal como constan en la hoja de vida."
      />
    </Reveal>
    <ol className="relative space-y-6 border-l border-gold/35 pl-6 md:pl-10">
      {roles.map((role, index) => (
        <li key={role.title + role.org} className="relative">
          <span className="absolute -left-[1.68rem] top-8 h-3 w-3 rounded-full border border-gold bg-ink md:-left-[2.7rem]" />
          <Reveal delay={index * 0.05}>
            <article className="panel p-6 md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <p className="text-xs tracking-[0.2em] text-gold uppercase">{role.kind}</p>
            </div>
            <h3 className="mt-2 text-3xl text-ivory">{role.title}</h3>
            <p className="mt-1 text-mist">
              {role.org}
              <span className="text-gold"> · </span>
              {role.unit}
            </p>
            <ul className="mt-4 space-y-1 text-sm text-ivory">
              {role.periods.map((period) => (
                <li key={period.from}>
                  {period.from} — {period.to}
                </li>
              ))}
            </ul>
            {role.chief ? <p className="mt-3 text-sm text-mist">Jefe inmediato: {role.chief}</p> : null}
            <p className="copy mt-4 text-sm leading-relaxed text-mist">{role.summary}</p>
            </article>
          </Reveal>
        </li>
      ))}
    </ol>
  </section>
)

export default Experience
