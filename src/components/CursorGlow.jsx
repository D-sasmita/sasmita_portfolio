import { useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function CursorGlow() {
  const reduce = useReducedMotion()
  useEffect(() => {
    if (reduce || !window.matchMedia('(hover: hover)').matches) return
    const el = document.documentElement
    let raf
    const h = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => { el.style.setProperty('--cx', `${e.clientX}px`); el.style.setProperty('--cy', `${e.clientY}px`) })
    }
    window.addEventListener('mousemove', h, { passive: true })
    return () => { window.removeEventListener('mousemove', h); cancelAnimationFrame(raf) }
  }, [reduce])
  return reduce ? null : <div className="cursor-glow" aria-hidden="true" />
}
