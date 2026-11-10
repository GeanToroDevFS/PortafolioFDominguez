import { profile } from '../data/profile'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const facts = [
  ['Documento', profile.document],
  ['Tarjeta profesional', `No. ${profile.professionalCard} del ${profile.professionalCardIssuer}`],
  ['Nacimiento', `${profile.birth}, ${profile.birthPlace}`],
  ['Estado civil', profile.civilStatus],
]

const Contact = () => (
  <section id="contacto" className="mx-auto max-w-6xl px-6 py-20" aria-labelledby="titulo-contacto">
    <Reveal>
      <SectionHeading
        headingId="titulo-contacto"
        index="V"
        kicker="Contacto"
        title="Datos de correspondencia"
        lede="Información personal consignada en la hoja de vida."
      />
    </Reveal>

    <div className="grid gap-4 md:grid-cols-3">
      <Reveal>
        <article className="panel h-full p-6">
          <h3 className="text-2xl text-gold">Correo</h3>
          <ul className="mt-4 space-y-3">
            {profile.emails.map((email) => (
              <li key={email}>
                <a className="break-all text-sm text-ivory underline decoration-gold/40 underline-offset-4 hover:text-gold" href={`mailto:${email}`}>
                  {email}
                </a>
              </li>
            ))}
          </ul>
        </article>
      </Reveal>
      <Reveal delay={0.05}>
        <article className="panel h-full p-6">
          <h3 className="text-2xl text-gold">Teléfono</h3>
          <a className="mt-4 block text-lg text-ivory hover:text-gold" href={profile.phoneHref}>
            {profile.phoneDisplay}
          </a>
          <a
            className="mt-4 inline-block text-sm text-gold underline underline-offset-4"
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Escribir por WhatsApp
          </a>
        </article>
      </Reveal>
      <Reveal delay={0.1}>
        <article className="panel h-full p-6">
          <h3 className="text-2xl text-gold">Dirección</h3>
          <p className="mt-4 text-ivory">{profile.address}</p>
          <p className="text-mist">{profile.city}</p>
          <a
            className="mt-4 inline-block text-sm text-gold underline underline-offset-4"
            href={profile.maps}
            target="_blank"
            rel="noreferrer"
          >
            Ver en el mapa
          </a>
        </article>
      </Reveal>
    </div>

    <Reveal>
      <dl className="panel mt-4 grid gap-5 p-6 sm:grid-cols-2">
        {facts.map(([label, value]) => (
          <div key={label}>
            <dt className="text-xs tracking-[0.2em] text-gold uppercase">{label}</dt>
            <dd className="mt-2 text-ivory">{value}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  </section>
)

export default Contact
