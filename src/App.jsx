import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import More from './pages/More.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import Projects from './pages/Projects.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectPage />} />
        <Route path="more" element={<More />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Projects />} />
      </Route>
    </Routes>
  )
}
