import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

const links = [
  { href: '#perfil', label: 'Perfil' },
  { href: '#ejercicio', label: 'Ejercicio' },
  { href: '#trayectoria', label: 'Trayectoria' },
  { href: '#formacion', label: 'Formación' },
  { href: '#contacto', label: 'Contacto' },
]

const Header = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const ids = links.map((link) => link.href.slice(1))

    const onScroll = () => {
      setScrolled(window.scrollY > 12)

      const line = window.innerHeight * 0.38
      let current = ''
      for (const id of ids) {
        const section = document.getElementById(id)
        if (!section) continue
        const rect = section.getBoundingClientRect()
        if (rect.top <= line && rect.bottom > line) current = id
      }

      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      if (atBottom) current = ids[ids.length - 1]

      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const linkClass = (href: string, idle: string) =>
    `text-sm transition-colors duration-300 ${active === href.slice(1) ? 'text-gold' : idle}`

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-40 transition-colors ${
        scrolled || open ? 'bg-ink/85 backdrop-blur-md border-b border-gold/25' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#contenido" className="flex items-center gap-3 text-ivory">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/70 font-serif text-sm text-gold">
            FD
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-lg">Domínguez Muñoz</span>
            <span className="block text-[11px] tracking-[0.22em] uppercase text-gold">Abogado</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Secciones">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href.slice(1) ? 'true' : undefined}
              className={linkClass(link.href, 'text-mist hover:text-gold')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.phoneHref}
          className="hidden text-sm text-gold md:inline"
        >
          {profile.phoneDisplay}
        </a>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center border border-gold/40 text-ivory md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
          <span aria-hidden="true" className="flex w-4 flex-col gap-1">
            <span className="h-px bg-ivory" />
            <span className="h-px bg-ivory" />
            <span className="h-px bg-ivory" />
          </span>
        </button>
      </div>

      {open ? (
        <nav id="menu-movil" className="border-t border-gold/20 px-6 py-4 md:hidden" aria-label="Secciones">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active === link.href.slice(1) ? 'true' : undefined}
                  className={`block py-1 transition-colors duration-300 ${
                    active === link.href.slice(1) ? 'text-gold' : 'text-ivory'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.phoneHref} className="block py-1 text-gold">
                {profile.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}

export default Header
