import { motion, useSpring, useReducedMotion } from 'framer-motion'

// 3D tilt toward the cursor + a spotlight that follows it (CSS vars --mx/--my).
export default function TiltCard({ children, className }) {
  const reduce = useReducedMotion()
  const rx = useSpring(0, { stiffness: 180, damping: 18 })
  const ry = useSpring(0, { stiffness: 180, damping: 18 })
  const move = (e) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height
    ry.set((px - 0.5) * 8); rx.set(-(py - 0.5) * 8)
    e.currentTarget.style.setProperty('--mx', `${px * 100}%`)
    e.currentTarget.style.setProperty('--my', `${py * 100}%`)
  }
  const leave = () => { rx.set(0); ry.set(0) }
  return (
    <motion.article className={className} style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }} onMouseMove={move} onMouseLeave={leave}>
      {children}
    </motion.article>
  )
}
