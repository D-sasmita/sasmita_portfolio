import { Database, TreePine } from 'lucide-react'
import {
  siPython, siOpenjdk, siJavascript, siCplusplus, siReact, siNodedotjs, siExpress, siDotnet, siSpringboot,
  siPandas, siNumpy, siPlotly, siStreamlit, siMysql, siMongodb, siGit, siGithub, siJupyter,
} from 'simple-icons'

// Brand glyphs bundled locally (no remote images). `ink: true` uses the theme text color so dark logos stay visible in dark mode.
const brand = {
  python: [siPython], java: [siOpenjdk, true], javascript: [siJavascript], cpp: [siCplusplus],
  react: [siReact], node: [siNodedotjs], express: [siExpress, true], dotnet: [siDotnet], spring: [siSpringboot],
  pandas: [siPandas, true], numpy: [siNumpy], plotly: [siPlotly, true], streamlit: [siStreamlit],
  mysql: [siMysql], mongodb: [siMongodb], git: [siGit], github: [siGithub, true], jupyter: [siJupyter],
}

export default function SkillIcon({ icon, name }) {
  if (icon === 'sql') return <Database size={34} strokeWidth={1.5} aria-hidden="true" />
  if (icon === 'xgboost') return <TreePine size={34} strokeWidth={1.5} aria-hidden="true" />
  const [si, ink] = brand[icon]
  return (
    <svg viewBox="0 0 24 24" width="34" height="34" role="img" aria-label={name} fill={ink ? 'currentColor' : `#${si.hex}`}>
      <path d={si.path} />
    </svg>
  )
}
