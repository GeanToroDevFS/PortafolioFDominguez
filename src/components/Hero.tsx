import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/profile'

const ease = [0.22, 1, 0.36, 1] as const

const Hero = () => {
  const reduce = useReducedMotion()

  return (
    <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-16 pt-32" aria-label="Presentación">
      <div className="grid items-center gap-14 lg:grid-cols-[1.3fr_0.7fr]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="mb-5 text-xs tracking-[0.32em] text-gold uppercase">
            {profile.role} · {profile.location}
          </p>
          <h1 className="font-serif text-5xl leading-[0.92] text-ivory sm:text-6xl lg:text-7xl">
            <span className="block">{profile.given}</span>
            <span className="block italic text-gold">{profile.family}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-mist">{profile.specialty}</p>
          <p className="mt-3 text-sm tracking-wide text-ivory/80">
            Tarjeta profesional {profile.professionalCard} · {profile.professionalCardIssuer}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="bg-gold px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-[#e4c89a]"
            >
              Contactar
            </a>
            <a
              href="#trayectoria"
              className="border border-gold/50 px-6 py-3 text-sm text-ivory transition-colors hover:border-gold"
            >
              Ver trayectoria
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="border border-gold/50 px-6 py-3 text-sm text-ivory transition-colors hover:border-gold"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.figure
          className="mx-auto w-full max-w-sm"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease }}
        >
          <div className="bg-ivory p-3 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
            <img
              src="/retrato.jpg"
              alt="Retrato de Felipe Armando Domínguez Muñoz"
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <figcaption className="px-2 py-3 text-center font-serif text-xl text-ink">
              F. A. Domínguez Muñoz
            </figcaption>
          </div>
        </motion.figure>
      </div>
    </section>
  )
}

export default Hero
