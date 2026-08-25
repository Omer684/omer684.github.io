import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Stats from './components/Stats'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Building from './components/Building'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="grain relative min-h-screen bg-paper">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Projects />
        <Skills />
        <Building />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
