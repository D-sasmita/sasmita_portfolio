import { FileText, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import { research } from '../data/portfolio.js'

export default function Research() {
  return (
    <section id="research" className="section">
      <div className="container">
        <SectionHead number="03" label="Research" title="Published work." />
        <Reveal>
          <article className="paper">
            <div className="paper-side mono">
              <FileText size={22} />
              <span>{research.venue}</span>
              <span className="muted">{research.role}</span>
            </div>
            <div className="paper-main">
              <p className="mono label">Featured publication</p>
              <h3 className="serif">{research.title}</h3>
              <ul className="tags">{research.keywords.map((k) => <li key={k} className="tag mono">{k}</li>)}</ul>
              <a className="btn btn-primary" href={research.href} target="_blank" rel="noopener noreferrer">
                Read on IEEE Xplore <ArrowUpRight size={18} />
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
