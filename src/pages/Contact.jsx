import Pic from '../components/Pic.jsx'
import { profile } from '../data/site.js'

export default function Contact() {
  return (
    <section className="grid items-center gap-12 pt-4 lg:grid-cols-[1.3fr_0.7fr]">
      <div>
        <p className="script -mb-[0.1em] relative z-10 -rotate-6 text-[clamp(3rem,8vw,8rem)]">Let&apos;s build</p>
        <h1 className="headline text-[clamp(3.4rem,12vw,11rem)]">Together</h1>
        <p className="mt-8 max-w-xl text-xl leading-relaxed text-grey">
          Something beautiful, with AI inside. Find me here.
        </p>
        <ul className="mt-8 grid gap-3 text-lg font-medium">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className="group inline-flex items-baseline gap-4 hover:text-pink">
                <span className="eyebrow w-24">{s.label}</span>
                <span className="border-b-2 border-transparent group-hover:border-pink">{s.handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Pic file="it-queen.jpg" label="Your photo" ratio={3 / 4} rot={4} className="mx-auto w-full max-w-xs" />
    </section>
  )
}
