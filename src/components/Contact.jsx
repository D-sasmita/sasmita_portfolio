import { Mail, Github, Linkedin, Code2, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SplitText from './SplitText.jsx'
import { profile } from '../data/portfolio.js'

const links = [
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'LeetCode', href: profile.leetcode, icon: Code2 },
]

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal>
          <p className="mono label">05 / Contact</p>
          <SplitText as="h2" className="serif contact-title" text="Have an idea, a role or a question? Let's talk." emWords={["Let's", 'talk.']} inView />
          <a href={`mailto:${profile.email}`} className="mail-link serif"><Mail size={28} />{profile.email}</a>
        </Reveal>
        <Reveal delay={0.15} className="social-row">
          {links.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social">
              <Icon size={18} /><span>{label}</span><ArrowUpRight size={14} />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
