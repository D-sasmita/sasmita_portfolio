import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import HeroVisual from './HeroVisual.jsx'
import SplitText from './SplitText.jsx'
import Magnetic from './Magnetic.jsx'
import { interests, ticker } from '../data/portfolio.js'

const ease = [0.22, 1, 0.36, 1]
const up = (d) => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d, ease } })

export default function Hero() {
  const items = [...ticker, ...ticker]
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.p className="mono label" {...up(0.05)}><span className="live-dot" />Sasmita Das — Portfolio 2026</motion.p>
          <SplitText as="h1" className="serif" text="Curious by nature. Engineer by practice." emWords={['Engineer']} delay={0.15} />
          <motion.p className="lead" {...up(0.55)}>
            I'm a Computer Engineering student at Marwadi University who enjoys understanding how systems work,
            exploring data, solving programming problems and turning ideas into practical applications.
          </motion.p>
          <motion.ul className="chips" initial="h" animate="s" variants={{ s: { transition: { staggerChildren: 0.08, delayChildren: 0.7 } } }}>
            {interests.map((i) => (
              <motion.li key={i} className="chip mono" variants={{ h: { opacity: 0, y: 14, scale: 0.9 }, s: { opacity: 1, y: 0, scale: 1 } }}>{i}</motion.li>
            ))}
          </motion.ul>
          <motion.div className="cta-row" {...up(0.95)}>
            <Magnetic><a href="#projects" className="btn btn-primary">Explore My Work <ArrowDownRight size={18} /></a></Magnetic>
            <Magnetic><a href="#contact" className="btn btn-ghost">Let's Connect <ArrowUpRight size={18} /></a></Magnetic>
          </motion.div>
        </div>
        <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.9, rotate: -6 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.2, delay: 0.3, ease }}>
          <HeroVisual />
        </motion.div>
      </div>
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track mono">
          {items.map((t, i) => <span key={i}>{t}<b>✦</b></span>)}
        </div>
      </div>
    </section>
  )
}
