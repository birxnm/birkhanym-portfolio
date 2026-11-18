import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { profile } from '../data/site.js'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/more', label: 'More' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="swirl hidden h-[760px] w-[980px] rotate-[18deg] lg:block" style={{ right: '-160px', top: '420px' }} />
      <div className="swirl hidden h-[900px] w-[600px] -rotate-[25deg] lg:block" style={{ left: '-300px', top: '520px', borderWidth: 8 }} />

      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-10 sm:py-7">
        <Link to="/" className="hidden text-sm sm:block font-semibold uppercase tracking-widest">
          {profile.name.split(' ')[0]}
        </Link>
        <nav className="flex gap-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] sm:gap-10 sm:text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => `transition hover:text-pink ${isActive ? 'text-pink' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-5 pb-16 sm:px-10">
        <Outlet />
      </main>

      <footer className="relative z-10 mx-auto flex max-w-7xl flex-wrap gap-x-10 gap-y-2 px-5 pb-10 text-xs font-medium uppercase tracking-widest sm:px-10">
        {profile.socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-pink">
            {s.label} | {s.handle}
          </a>
        ))}
      </footer>
    </div>
  )
}
