import { profile } from '../data/profile'

const Footer = () => (
  <footer className="relative z-10 border-t border-gold/20 px-6 py-8">
    <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-mist md:flex-row md:items-center md:justify-between">
      <p className="text-xl text-ivory">{profile.name}</p>
      <p>
        T.P. {profile.professionalCard} del C. S. de la J. · {profile.location}
      </p>
    </div>
    <hr className="gold-rule mx-auto mt-6 max-w-6xl" />
  </footer>
)

export default Footer
