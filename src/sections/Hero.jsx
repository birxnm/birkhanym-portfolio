import Button, { Arrow } from '../components/Button.jsx'
import Pic from '../components/Pic.jsx'
import Reveal from '../components/Reveal.jsx'
import { profile } from '../data/site.js'
import Section from './Section.jsx'

export default function Hero() {
  return (
    <Section id="about" nav="about" swirl="left">
      <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <Reveal>
            <p className="script relative z-10 -mb-[0.12em] -rotate-6 text-[clamp(3.2rem,9vw,9rem)]">I&apos;m an</p>
            <h1 className="headline text-[clamp(3.2rem,14vw,7.5rem)] lg:whitespace-nowrap lg:text-[clamp(5.5rem,8vw,9.5rem)]">IT Queen</h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-10 text-2xl font-semibold sm:text-3xl">{profile.name}</p>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-grey sm:text-xl">
              {profile.tagline} {profile.sub}
            </p>
            <p className="eyebrow mt-6">{profile.badge}</p>
          </Reveal>
          <Reveal delay={300} className="mt-9 flex flex-wrap gap-4">
            <Button href="#projects" variant="solid">
              View projects <Arrow />
            </Button>
            <Button href="#contact">Contact</Button>
          </Reveal>
        </div>

        <Reveal delay={200} className="mx-auto w-[80%] max-w-md lg:w-full">
          <Pic file="it-queen.jpg" label="IT Queen KZ final" ratio={0.9} rot={3} position="45% center" />
        </Reveal>
      </div>

      <a
        href="#projects"
        className="absolute -bottom-16 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-grey sm:flex"
      >
        Scroll
        <span className="scroll-cue h-10 w-px bg-ink/40" />
      </a>
    </Section>
  )
}
