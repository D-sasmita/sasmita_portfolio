import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import SkillIcon from './SkillIcon.jsx'
import { skills } from '../data/portfolio.js'

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionHead number="04" label="Skills" title="Tools I work with." />
        <div className="skills-grid">
          {skills.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08} className="skill-card">
              <h3 className="mono"><span>0{i + 1}</span>{g.title}</h3>
              <ul className="skill-icons">
                {g.items.map((s, j) => (
                  <motion.li key={s.name} className="skill-tile" title={s.name}
                    initial={{ opacity: 0, scale: 0.7, y: 14 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.15 + (i * 5 + j) * 0.04 }}
                    whileHover={{ y: -6, rotate: [0, -4, 4, 0], transition: { duration: 0.45 } }}>
                    <SkillIcon icon={s.icon} name={s.name} />
                    <span className="mono">{s.name}</span>
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
