import Button from '../components/Button.jsx'
import Folder from '../components/Folder.jsx'
import Pic from '../components/Pic.jsx'
import { folderSlugs, projects } from '../data/site.js'

export default function Projects() {
  return (
    <section className="grid items-center gap-10 pt-2 lg:grid-cols-[1fr_1fr] lg:gap-16">
      <div className="order-2 grid items-center gap-6 sm:grid-cols-[0.8fr_1.2fr] lg:order-1">
        <Pic
          file="astana-hub-mural.jpg"
          label="Your photo"
          ratio={0.58}
          rot={-2}
          position="78% center"
          className="hidden sm:block"
        />
        <div className="flex flex-col">
          {folderSlugs.map((slug, i) => (
            <Folder
              key={slug}
              to={`/projects/${slug}`}
              title={projects[slug].folder.title}
              sub={projects[slug].folder.sub}
              dark={i % 2 === 1}
              offset={i % 2 === 1}
            />
          ))}
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <p className="script -mb-[0.1em] relative z-10 -rotate-6 text-[clamp(3rem,8vw,8rem)]">Projects I</p>
        <h1 className="headline text-[clamp(4rem,14vw,14rem)]">Build</h1>
        <p className="mt-8 max-w-lg text-lg leading-relaxed text-grey">
          Tap a folder to open a project. It starts with Back2Roots, where I was the founder, and goes on to the
          products I build and lead today.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button to="/projects/k7" variant="solid">
            Latest build: K7 <span aria-hidden>→</span>
          </Button>
          <Button to="/more">
            More builds <span aria-hidden>→</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
