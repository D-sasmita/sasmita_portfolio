import { Sun, Moon } from 'lucide-react'
import useTheme from '../hooks/useTheme.js'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const dark = theme === 'dark'
  return (
    <button className="icon-btn" onClick={toggle} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} title="Toggle theme">
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
