import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Research from './components/Research.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import CursorGlow from './components/CursorGlow.jsx'

export default function App() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Research />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
