import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

export default function Magnetic({ children, strength = 0.35 }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const x = useMotionValue(0), y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 14, mass: 0.2 })
  const sy = useSpring(y, { stiffness: 220, damping: 14, mass: 0.2 })
  const move = (e) => {
    if (reduce) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const leave = () => { x.set(0); y.set(0) }
  return <motion.div ref={ref} className="magnetic" style={{ x: sx, y: sy }} onMouseMove={move} onMouseLeave={leave}>{children}</motion.div>
}
