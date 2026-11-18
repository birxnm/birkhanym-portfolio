import Button, { Arrow } from '../components/Button.jsx'
import Collage from '../components/Collage.jsx'
import Reveal from '../components/Reveal.jsx'
import { projects } from '../data/site.js'
import Section, { Title } from './Section.jsx'

export default function ProjectSection({ slug, tinted }) {
  const p = projects[slug]
  return (
    <Section id={slug} nav="projects" tinted={tinted} swirl={tinted ? 'right' : 'left'}>
      <a
        href="#projects"
        className="group inline-flex rounded-full border-2 border-ink px-5 py-2 text-xs font-semibold uppercase tracking-widest transition hover:bg-ink hover:text-white"
      >
        <Arrow char="←" />&nbsp;Projects
      </a>

      <div className="mt-8 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <Title script={p.script} head={p.head} size={p.head.length <= 3 ? 'xl' : 'md'} />
            <p className="mt-6 max-w-2xl text-xl font-medium leading-snug sm:text-2xl">{p.hook}</p>
          </Reveal>

          {p.facts && (
            <dl className="mt-7 grid gap-4 sm:grid-cols-3">
              {p.facts.map(([label, value], i) => (
                <Reveal key={label} delay={100 + i * 90} className="rounded-2xl bg-mist px-5 py-4">
                  <dt className="eyebrow !text-[0.7rem]">{label}</dt>
                  <dd className="mt-1.5 text-base font-semibold leading-snug">{value}</dd>
                </Reveal>
              ))}
            </dl>
          )}

          {p.story && (
            <div className="mt-7 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
              {p.story.map((s, i) => (
                <div key={s.step} className="contents">
                  <Reveal delay={100 + i * 150} className="rounded-3xl bg-mist p-6">
                    <p className="eyebrow !text-[0.7rem]">{s.step}</p>
                    <h3 className="mt-2 text-xl font-semibold leading-tight">{s.title}</h3>
                    <p className="mt-1 text-xs font-medium text-grey">{s.meta}</p>
                    <p className="mt-3 text-sm leading-relaxed text-grey">{s.body}</p>
                  </Reveal>
                  {i === 0 && (
                    <span className="self-center text-center text-4xl font-extrabold text-pink max-md:rotate-90" aria-hidden>
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}

          <Reveal delay={250}>
            {p.body && <p className="mt-7 max-w-2xl text-lg leading-relaxed text-grey">{p.body}</p>}

            {p.chips && (
              <ul className="mt-6 flex flex-wrap gap-3">
                {p.chips.map((c) => (
                  <li key={c} className="rounded-full border-2 border-ink px-5 py-2 text-sm font-medium">
                    {c}
                  </li>
                ))}
              </ul>
            )}

            {p.tag && <p className="script mt-6 text-4xl sm:text-5xl">{p.tag}</p>}

            {p.links && (
              <div className="mt-7 flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <Button key={l.href} href={l.href}>
                    {l.label} <Arrow char="↗" />
                  </Button>
                ))}
              </div>
            )}
          </Reveal>
        </div>

        <Collage pics={p.pics} />
      </div>
    </Section>
  )
}
