import TiltCard from './TiltCard.jsx'
import { Github, Play, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import ProjectVisual from './ProjectVisual.jsx'
import { projects } from '../data/portfolio.js'

const icons = { github: Github, play: Play }

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionHead number="02" label="Projects" title="Things I've built." />
        <div className="project-grid">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.12}>
              <TiltCard className="card">
                <div className="card-visual"><ProjectVisual id={p.id} /></div>
                <div className="card-body">
                  <div className="card-meta mono"><span>{p.index}</span><span>{p.kind}</span></div>
                  <h3 className="serif">{p.title}</h3>
                  <p>{p.description}</p>
                  <ul className="tags">{p.tags.map((t) => <li key={t} className="tag mono">{t}</li>)}</ul>
                  <div className="card-links">
                    {p.links.map((l) => {
                      const Icon = icons[l.icon]
                      return (
                        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="link-arrow">
                          <Icon size={16} />{l.label}<ArrowUpRight size={14} />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
