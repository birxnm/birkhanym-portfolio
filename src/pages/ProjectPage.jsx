import { Link, Navigate, useParams } from 'react-router-dom'
import Button from '../components/Button.jsx'
import Pic from '../components/Pic.jsx'
import { projects } from '../data/site.js'

export default function ProjectPage() {
  const { slug } = useParams()
  const p = projects[slug]
  if (!p) return <Navigate to="/projects" replace />

  return (
    <article>
      <Link
        to="/projects"
        className="inline-flex rounded-full border-2 border-ink px-5 py-2 text-xs font-semibold uppercase tracking-widest transition hover:bg-ink hover:text-white"
      >
        ← Projects
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="script -mb-[0.1em] relative z-10 -rotate-6 text-[clamp(2.6rem,7vw,6.5rem)]">{p.script}</p>
          <h1 className="headline text-[clamp(3rem,9vw,8.5rem)] break-words">{p.head}</h1>
          <p className="mt-6 max-w-2xl text-xl font-medium leading-snug sm:text-2xl">{p.hook}</p>

          {p.facts && (
            <dl className="mt-7 grid gap-4 sm:grid-cols-3">
              {p.facts.map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-mist px-5 py-4">
                  <dt className="eyebrow !text-[0.7rem]">{label}</dt>
                  <dd className="mt-1.5 text-base font-semibold leading-snug">{value}</dd>
                </div>
              ))}
            </dl>
          )}

          {p.story && (
            <div className="mt-7 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
              {p.story.map((s, i) => (
                <div key={s.step} className="contents">
                  <div className="rounded-3xl bg-mist p-6">
                    <p className="eyebrow !text-[0.7rem]">{s.step}</p>
                    <h2 className="mt-2 text-xl font-semibold leading-tight">{s.title}</h2>
                    <p className="mt-1 text-xs font-medium text-grey">{s.meta}</p>
                    <p className="mt-3 text-sm leading-relaxed text-grey">{s.body}</p>
                  </div>
                  {i === 0 && (
                    <span className="self-center text-center text-4xl font-extrabold text-pink max-md:rotate-90" aria-hidden>
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}

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
                  {l.label} <span aria-hidden>↗</span>
                </Button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 content-start items-center gap-x-4 gap-y-8 sm:gap-x-6">
          {p.pics.map((pic, i) => (
            <Pic key={pic.file} {...pic} className={i === 0 ? 'col-span-2' : ''} />
          ))}
        </div>
      </div>
    </article>
  )
}
