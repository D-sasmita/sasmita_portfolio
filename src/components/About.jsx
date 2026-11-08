import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import { profile } from '../data/portfolio.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead number="01" label="About" title="I like knowing why things work." />
        <div className="about-grid">
          <Reveal className="about-text">
            <p>
              My curiosity usually starts with a question: how does this system actually behave? I learn by taking things apart,
              running experiments and building small, working versions until the idea makes sense.
            </p>
            <p>
              That approach has taken me from Android apps to data exploration and machine learning research. I care about code
              that is readable, data that is understood before it is modelled, and software that someone can actually use.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="facts">
            <dl>
              <div><dt className="mono">Studying</dt><dd>{profile.education}</dd></div>
              <div><dt className="mono">Graduating</dt><dd>{profile.graduation}</dd></div>
              <div><dt className="mono">Focus</dt><dd>Software, data and machine learning</dd></div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
