import { useCallback, useState } from 'react'

const read = () => (typeof document !== 'undefined' && document.documentElement.dataset.theme) || 'light'

export default function useTheme() {
  const [theme, setTheme] = useState(read)
  const toggle = useCallback(() => {
    const next = read() === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try { localStorage.setItem('theme', next) } catch (e) { /* storage unavailable */ }
    setTheme(next)
  }, [])
  return { theme, toggle }
}
