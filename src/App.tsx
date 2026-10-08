import { About } from './components/About.tsx'
import { Contact } from './components/Contact.tsx'
import { Education } from './components/Education.tsx'
import { Experience } from './components/Experience.tsx'
import { Footer } from './components/Footer.tsx'
import { Hero } from './components/Hero.tsx'
import { Navbar } from './components/Navbar.tsx'
import { Projects } from './components/Projects.tsx'
import { Skills } from './components/Skills.tsx'

/**
 * Single-page order. Navbar labels come from the same `sections` list in portfolio.ts.
 */
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
