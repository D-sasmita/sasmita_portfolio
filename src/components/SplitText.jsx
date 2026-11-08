import { Fragment } from 'react'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

// Word-by-word masked rise. `inView` triggers on scroll; otherwise on mount.
export default function SplitText({ text, as: Tag = 'span', className = '', delay = 0, inView = false, emWords = [] }) {
  const words = text.split(' ')
  const trigger = inView ? { whileInView: { y: 0 }, viewport: { once: true, margin: '-60px' } } : { animate: { y: 0 } }
  return (
    <Tag className={className} aria-label={text}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="word" aria-hidden="true">
            <motion.span className={`word-in${emWords.includes(w) ? ' em' : ''}`} initial={{ y: '115%' }} {...trigger}
              transition={{ duration: 0.9, delay: delay + i * 0.07, ease }}>{w}</motion.span>
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </Fragment>
      ))}
    </Tag>
  )
}
