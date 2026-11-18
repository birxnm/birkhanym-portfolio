import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import { folderSlugs } from './data/site.js'
import Contact from './sections/Contact.jsx'
import Hero from './sections/Hero.jsx'
import MoreBuilds from './sections/MoreBuilds.jsx'
import ProjectSection from './sections/ProjectSection.jsx'
import ProjectsIntro from './sections/ProjectsIntro.jsx'

// One long scrolling page, in the same order as the Figma slides.
export default function App() {
  // Links like /#cortexai: jump to that section once the page has rendered.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProjectsIntro />
        {folderSlugs.map((slug, i) => (
          <ProjectSection key={slug} slug={slug} tinted={i % 2 === 0} />
        ))}
        <ProjectSection slug="k7" tinted />
        <MoreBuilds />
        <Contact />
      </main>
    </>
  )
}
