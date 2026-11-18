import { Link } from 'react-router-dom'
import Pic from '../components/Pic.jsx'
import { moreBuilds } from '../data/site.js'

export default function More() {
  return (
    <section>
      <Link
        to="/projects"
        className="inline-flex rounded-full border-2 border-ink px-5 py-2 text-xs font-semibold uppercase tracking-widest transition hover:bg-ink hover:text-white"
      >
        ← Projects
      </Link>

      <div className="relative mt-8">
        <p className="script -mb-[0.1em] relative z-10 -rotate-6 text-[clamp(2.6rem,7vw,6.5rem)]">And also</p>
        <h1 className="headline text-[clamp(3rem,10vw,9rem)]">More builds</h1>
        <Pic
          file="astana-hub-mural.jpg"
          label="Astana Hub"
          ratio={4 / 3}
          rot={4}
          className="absolute right-0 top-0 hidden w-72 lg:block"
        />
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {moreBuilds.map((b, i) => {
          const dark = i % 2 === 1
          return (
            <article
              key={b.title}
              className={`rounded-3xl p-7 shadow-[0_10px_22px_rgba(0,0,0,0.2)] ${dark ? 'bg-ink text-white' : 'bg-pink text-white'}`}
            >
              <p className={`script text-6xl ${dark ? 'text-pink' : 'text-ink'}`}>0{i + 1}</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight">{b.title}</h2>
              <p className={`mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] ${dark ? 'text-pink' : 'text-white'}`}>
                {b.meta}
              </p>
              <p className="mt-3 text-base leading-relaxed text-white/95">{b.body}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
