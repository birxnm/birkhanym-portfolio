import Button from '../components/Button.jsx'
import Pic from '../components/Pic.jsx'
import { profile } from '../data/site.js'

export default function Home() {
  return (
    <section className="grid items-center gap-10 pt-4 lg:grid-cols-[1.25fr_0.75fr] lg:pt-10">
      <div>
        <p className="script -mb-[0.1em] relative z-10 -rotate-6 text-[clamp(3.2rem,9vw,9rem)]">I&apos;m an</p>
        <h1 className="headline text-[clamp(3.6rem,13.5vw,12.5rem)]">IT Queen</h1>

        <p className="mt-8 text-xl font-semibold sm:text-3xl">{profile.name}</p>
        <p className="mt-3 max-w-xl text-lg leading-relaxed text-grey sm:text-xl">
          {profile.tagline} {profile.sub}
        </p>
        <p className="eyebrow mt-6">{profile.badge}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button to="/projects" variant="solid">
            View projects <span aria-hidden>→</span>
          </Button>
          <Button to="/contact">Contact</Button>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-md flex-col items-center sm:max-w-lg lg:max-w-none">
        <Pic file="it-queen.jpg" label="Your photo" ratio={3 / 4} rot={3} className="w-[78%]" />
        <Pic
          file="back2roots-app.png"
          label="Back2Roots app"
          ratio={0.78}
          rot={-5}
          className="-mt-24 -ml-[38%] w-[48%] sm:-mt-32"
        />
      </div>
    </section>
  )
}
