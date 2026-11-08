import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle.jsx'
import { nav, profile } from '../data/portfolio.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <motion.div className="progress" style={{ scaleX: progress }} />
      <div className="container header-inner">
        <a href="#top" className="brand serif" onClick={() => setOpen(false)}>
          SASMITA DAS
        </a>
        <nav className="nav-desktop" aria-label="Primary">
          {nav.map((n) => <a key={n.id} href={`#${n.id}`} className="nav-link mono">{n.label}</a>)}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <button className="icon-btn menu-btn" onClick={() => setOpen((o) => !o)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav-mobile"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {nav.map((n, i) => (
              <motion.a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
                <span className="mono">0{i + 1}</span>
                <span className="serif">{n.label}</span>
              </motion.a>
            ))}
            <p className="mono muted">{profile.email}</p>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
