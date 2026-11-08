import Reveal from './Reveal.jsx'
import SplitText from './SplitText.jsx'

export default function SectionHead({ number, label, title }) {
  return (
    <div className="section-head">
      <Reveal><span className="mono label">{number} / {label}</span></Reveal>
      <SplitText as="h2" className="serif" text={title} inView />
    </div>
  )
}
