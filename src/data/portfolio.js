export const profile = {
  name: 'Sasmita Das',
  education: 'B.Tech in Computer Engineering, Marwadi University',
  graduation: 'March 2027',
  email: 'sasmita.das0302@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sasmita-d-9b20aa293/',
  github: 'https://github.com/D-sasmita',
  leetcode: 'https://leetcode.com/u/Sasmita_00/',
}

export const interests = ['Software Development', 'Data Engineering', 'Machine Learning']

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export const projects = [
  {
    id: 'moodmelody',
    index: '01',
    title: 'MoodMelody',
    kind: 'Android application',
    description: 'An Android app that connects how you feel with the music you listen to, matching moods to playlists. Published on Google Play.',
    tags: ['Kotlin', 'Android', 'Google Play'],
    links: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.marwadiuniversity.moodmelody', icon: 'play' },
      { label: 'GitHub', href: 'https://github.com/D-sasmita/moodmelody-music-mood-tracker', icon: 'github' },
    ],
  },
  {
    id: 'olympics',
    index: '02',
    title: 'Olympics Data Explorer',
    kind: 'Data application',
    description: 'An interactive way to explore and visualize Olympic athlete data, built with Python, Pandas, Streamlit and Plotly.',
    tags: ['Python', 'Pandas', 'Streamlit', 'Plotly'],
    links: [{ label: 'GitHub', href: 'https://github.com/D-sasmita', icon: 'github' }],
  },
  {
    id: 'timex',
    index: '03',
    title: 'TimeX (Spring Boot)',
    kind: 'Full-stack e-commerce',
    description: 'The Spring Boot version of TimeX, my e-commerce project, rebuilt on a Java backend.',
    tags: ['Java', 'Spring Boot', 'E-commerce'],
    links: [{ label: 'GitHub', href: 'https://github.com/D-sasmita/timex-spring', icon: 'github' }],
  },
  {
    id: 'rag',
    index: '04',
    title: 'PDF Question Answering',
    kind: 'Retrieval-augmented generation',
    description: 'A RAG app that answers questions about a PDF by retrieving the most relevant passages and passing them to a language model.',
    tags: ['Python', 'LangChain', 'FAISS', 'HuggingFace', 'Streamlit'],
    links: [{ label: 'GitHub', href: 'https://github.com/D-sasmita/pdf-qa-langchain', icon: 'github' }],
  },
]

export const research = {
  title: 'ML-based power grid load forecasting using XGBoost',
  role: 'Co-authored publication',
  venue: 'IEEE Xplore',
  href: 'https://ieeexplore.ieee.org/document/11232653',
  keywords: ['Machine Learning', 'XGBoost', 'Load Forecasting', 'Power Grid'],
}

export const skills = [
  { title: 'Programming', items: [
    { name: 'Python', icon: 'python' }, { name: 'Java', icon: 'java' }, { name: 'JavaScript', icon: 'javascript' },
    { name: 'C++', icon: 'cpp' }, { name: 'SQL', icon: 'sql' } ] },
  { title: 'Frontend & Backend', items: [
    { name: 'React', icon: 'react' }, { name: 'Node.js', icon: 'node' }, { name: 'Express', icon: 'express' },
    { name: '.NET MVC', icon: 'dotnet' }, { name: 'Spring Boot', icon: 'spring' } ] },
  { title: 'Data & Machine Learning', items: [
    { name: 'Pandas', icon: 'pandas' }, { name: 'NumPy', icon: 'numpy' }, { name: 'Plotly', icon: 'plotly' },
    { name: 'Streamlit', icon: 'streamlit' }, { name: 'XGBoost', icon: 'xgboost' } ] },
  { title: 'Databases & Tools', items: [
    { name: 'MySQL', icon: 'mysql' }, { name: 'MongoDB', icon: 'mongodb' }, { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' }, { name: 'Jupyter', icon: 'jupyter' } ] },
]

export const ticker = ['Software Development', 'Data Engineering', 'Machine Learning', 'Experiment', 'Learn', 'Build']
