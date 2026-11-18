import Button, { Arrow } from '../components/Button.jsx'
import Folder from '../components/Folder.jsx'
import Pic from '../components/Pic.jsx'
import Reveal from '../components/Reveal.jsx'
import { folderSlugs, projects } from '../data/site.js'
import Section, { Title } from './Section.jsx'

export default function ProjectsIntro() {
  return (
    <Section id="projects" nav="projects" tinted>
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 grid items-center gap-6 sm:grid-cols-[0.8fr_1.2fr] lg:order-1">
          <Reveal className="hidden sm:block">
            <Pic file="astana-hub-mural.jpg" label="Astana Hub" ratio={0.58} rot={-2} position="70% center" />
          </Reveal>
          <div className="flex flex-col">
            {folderSlugs.map((slug, i) => (
              <Reveal key={slug} delay={i * 90}>
                <Folder
                  href={`#${slug}`}
                  title={projects[slug].folder.title}
                  sub={projects[slug].folder.sub}
                  dark={i % 2 === 1}
                  offset={i % 2 === 1}
                />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Reveal>
            <Title script="Projects I" head="Build" size="xl" />
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-grey">
              Tap a folder to open a project. It starts with Back2Roots, where I was the founder, and goes on to the
              products I build and lead today.
            </p>
          </Reveal>
          <Reveal delay={250} className="mt-8 flex flex-wrap gap-4">
            <Button href="#k7" variant="solid">
              Latest build: K7 <Arrow />
            </Button>
            <Button href="#more">
              More builds <Arrow />
            </Button>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
