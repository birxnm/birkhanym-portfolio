import Button, { Arrow } from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import { nextEvent, profile } from '../data/site.js'
import Section, { Title } from './Section.jsx'

export default function Contact() {
  const contacts = [
    ...profile.socials,
    { label: 'Email', handle: profile.email, href: `mailto:${profile.email}` },
  ]
  return (
    <Section id="contact" nav="contact" tinted swirl="left">
      <Reveal>
        <Title script={nextEvent.script} head={nextEvent.head} size="xl" />
      </Reveal>
      <Reveal delay={150}>
        <p className="eyebrow mt-8 !text-sm">{nextEvent.meta}</p>
        <p className="mt-4 max-w-2xl text-2xl font-medium sm:text-3xl">{nextEvent.line}</p>
      </Reveal>

      <Reveal delay={250} className="mt-10">
        <Button href={`mailto:${profile.email}`} variant="solid">
          Say hi <Arrow />
        </Button>
      </Reveal>

      <Reveal delay={350}>
        <ul className="mt-16 grid gap-x-10 gap-y-4 border-t border-ink/10 pt-8 text-sm font-medium uppercase tracking-widest sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                {...(c.href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noreferrer' })}
                className="group inline-flex flex-col gap-1 hover:text-pink"
              >
                <span className="text-pink">{c.label}</span>
                <span className="normal-case tracking-normal text-base">{c.handle}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-xs text-grey">© {new Date().getFullYear()} {profile.name}</p>
      </Reveal>
    </Section>
  )
}
