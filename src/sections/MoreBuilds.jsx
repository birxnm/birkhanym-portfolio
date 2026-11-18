import Reveal from '../components/Reveal.jsx'
import { moreBuilds } from '../data/site.js'
import Section, { Title } from './Section.jsx'

export default function MoreBuilds() {
  return (
    <Section id="more" nav="more">
      <Reveal>
        <Title script="And also" head="More builds" size="lg" />
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {moreBuilds.map((b, i) => {
          const dark = i % 2 === 1
          return (
            <Reveal
              key={b.title}
              as="article"
              delay={i * 110}
              className={`rounded-3xl p-7 shadow-[0_12px_26px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-2 ${
                dark ? 'bg-ink text-white' : 'bg-pink text-white'
              }`}
            >
              <p className={`script text-7xl ${dark ? 'text-pink' : 'text-ink'}`}>0{i + 1}</p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight">{b.title}</h3>
              <p className={`mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] ${dark ? 'text-pink' : 'text-white'}`}>
                {b.meta}
              </p>
              <p className="mt-3 text-base leading-relaxed text-white/95">{b.body}</p>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
