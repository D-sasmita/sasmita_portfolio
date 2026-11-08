import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion'

const nodes = [
  { label: 'Software', r: 38, dur: 40, start: 0 },
  { label: 'Data', r: 28, dur: 30, start: 120 },
  { label: 'ML', r: 18, dur: 22, start: 240 },
]

export default function HeroVisual() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const rot = useTransform(scrollYProgress, [0, 1], [0, 40])
  const reduce = useReducedMotion()
  const mx = useSpring(0, { stiffness: 60, damping: 16 }), my = useSpring(0, { stiffness: 60, damping: 16 })
  useEffect(() => {
    if (reduce) return
    const h = (e) => { mx.set((e.clientX / window.innerWidth - 0.5) * 2); my.set((e.clientY / window.innerHeight - 0.5) * 2) }
    window.addEventListener('mousemove', h, { passive: true })
    return () => window.removeEventListener('mousemove', h)
  }, [reduce, mx, my])
  const ox = useTransform(mx, (v) => v * 12), oy = useTransform(my, (v) => v * 12)
  const cx = useTransform(mx, (v) => v * -16), cy = useTransform(my, (v) => v * -16)
  return (
    <motion.div ref={ref} className="hero-visual" style={{ y }} aria-hidden="true">
      <motion.div className="orbit-wrap" style={{ rotate: rot, x: ox, y: oy }}>
        {nodes.map((n) => (
          <div key={n.label} className="ring" style={{ width: `${n.r * 2.2}%`, height: `${n.r * 2.2}%` }} />
        ))}
        {nodes.map((n) => (
          <motion.div key={n.label} className="orbit" style={{ width: `${n.r * 2.2}%`, height: `${n.r * 2.2}%` }}
            initial={{ rotate: n.start }} animate={{ rotate: n.start + 360 }}
            transition={{ duration: n.dur, repeat: Infinity, ease: 'linear' }}>
            <span className="node mono"><i />{n.label}</span>
          </motion.div>
        ))}
      </motion.div>
      <span className="pulse" /><span className="pulse p2" />
      <motion.div className="core serif" style={{ x: cx, y: cy }}>SD</motion.div>
      <span className="tick t1" /><span className="tick t2" /><span className="tick t3" /><span className="tick t4" />
    </motion.div>
  )
}
