import { useEffect, useState } from 'react'
import { profile } from '../data/site.js'

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'more', label: 'More' },
  { id: 'contact', label: 'Contact' },
]

// Sticky top bar. Turns solid once you scroll, and highlights the section in view.
export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.dataset.nav)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    document.querySelectorAll('[data-nav]').forEach((el) => observer.observe(el))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-10 sm:py-5">
        <a href="#about" className="hidden text-sm font-semibold uppercase tracking-widest sm:block">
          {profile.name.split(' ')[0]}
          <span className="text-pink">.</span>
        </a>
        <nav className="mx-auto flex gap-5 text-[0.68rem] font-medium uppercase tracking-[0.16em] sm:mx-0 sm:gap-10 sm:text-sm">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative py-1 transition hover:text-pink ${active === l.id ? 'text-pink' : ''}`}
            >
              {l.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-0.5 bg-pink transition-all duration-300 ${
                  active === l.id ? 'w-full' : 'w-0'
                }`}
              />
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
