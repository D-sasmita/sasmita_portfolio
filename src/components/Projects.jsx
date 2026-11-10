import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Play, ExternalLink, ArrowUpRight, MessagesSquare, HeartPulse, TrendingUp, Blocks, ShieldAlert, BarChart3, Smile, ShoppingBag, Globe } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import TiltCard from './TiltCard.jsx'
import ProjectVisual from './ProjectVisual.jsx'
import { projects, more, profile } from '../data/portfolio.js'

const linkIcons = { github: Github, play: Play, live: ExternalLink }
const cardIcons = { chat: MessagesSquare, heart: HeartPulse, trend: TrendingUp, blocks: Blocks, shield: ShieldAlert, bars: BarChart3, smile: Smile, bag: ShoppingBag, globe: Globe }
const filters = ['All', 'Web', 'Mobile', 'Data & ML']

function Visual({ p }) {
  if (p.visual) return <ProjectVisual id={p.visual} />
  const Icon = cardIcons[p.icon]
  return <div className="pv pv-generic" aria-hidden="true"><span className="gen-ring"><Icon size={38} strokeWidth={1.4} /></span></div>
}

function Links({ links }) {
  return links.map((l) => {
    const Icon = linkIcons[l.icon]
    return <a key={l.href + l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="link-arrow"><Icon size={16} />{l.label}<ArrowUpRight size={14} /></a>
  })
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const list = projects.filter((p) => filter === 'All' || p.category === filter)
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionHead number="02" label="Projects" title="Things I've built." />
        <Reveal className="filters" >
          {filters.map((f) => (
            <button key={f} className={`filter mono ${filter === f ? 'is-active' : ''}`} onClick={() => setFilter(f)} aria-pressed={filter === f}>
              {f}<span>{f === 'All' ? projects.length : projects.filter((p) => p.category === f).length}</span>
            </button>
          ))}
        </Reveal>
        <motion.div layout className="project-grid">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.div layout key={p.id} className="card-cell" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.35 }}>
                <TiltCard className="card">
                  <div className="card-visual"><Visual p={p} /></div>
                  <div className="card-body">
                    <div className="card-meta mono"><span>{String(projects.indexOf(p) + 1).padStart(2, '0')}</span><span>{p.kind}</span></div>
                    <h3 className="serif">{p.title}</h3>
                    <p>{p.description}</p>
                    <ul className="tags">{p.tags.map((t) => <li key={t} className="tag mono">{t}</li>)}</ul>
                    <div className="card-links"><Links links={p.links} /></div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="more">
          <p className="mono label">More on GitHub</p>
          <ul className="more-list">
            {more.map((m) => (
              <li key={m.title} className="more-row">
                <div><h4 className="serif">{m.title}</h4><p>{m.description}</p></div>
                <ul className="tags">{m.tags.map((t) => <li key={t} className="tag mono">{t}</li>)}</ul>
                <div className="more-links"><Links links={m.links} /></div>
              </li>
            ))}
          </ul>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={18} />All repositories <ArrowUpRight size={18} /></a>
        </Reveal>
      </div>
    </section>
  )
}
