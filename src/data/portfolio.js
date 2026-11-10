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

const G = (r) => ({ label: 'GitHub', href: `https://github.com/D-sasmita/${r}`, icon: 'github' })
const L = (href) => ({ label: 'Live demo', href, icon: 'live' })

export const projects = [
  { id: 'moodmelody', category: 'Mobile', visual: 'moodmelody', title: 'MoodMelody', kind: 'Android application',
    description: 'Matches your mood with curated YouTube playlists. Choose a mood, tap a vibe and listen to music that fits how you feel. Published on Google Play.',
    tags: ['Kotlin', 'Android', 'Google Play'],
    links: [{ label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.marwadiuniversity.moodmelody', icon: 'play' }, G('moodmelody-music-mood-tracker')] },
  { id: 'timex-spring', category: 'Web', visual: 'timex', title: 'TimeX (Spring Boot)', kind: 'Full-stack e-commerce',
    description: 'Full-stack watch e-commerce platform with JWT authentication, admin analytics and AI-powered product recommendations.',
    tags: ['Spring Boot', 'React', 'JWT', 'AI recommendations'], links: [L('https://timex-frontend-e1ol.onrender.com'), G('timex-spring')] },
  { id: 'timex-mern', category: 'Web', visual: 'timex', title: 'TimeX (MERN)', kind: 'Full-stack e-commerce',
    description: 'A watch store with a complete shopping experience for customers and an admin dashboard for managing products, orders and store analytics.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'], links: [L('https://timex-frontend-npuy.onrender.com/'), G('TimeX_MERN')] },
  { id: 'rag', category: 'Data & ML', visual: 'rag', title: 'PDF Question Answering', kind: 'Retrieval-augmented generation',
    description: 'Upload PDFs, ask questions and get answers grounded in the document.',
    tags: ['LangChain', 'FAISS', 'Groq', 'Streamlit'], links: [L('https://pdf-app-langchain-ixvw2omx7spihzzmqtpp9q.streamlit.app/'), G('pdf-qa-langchain')] },
  { id: 'olympics', category: 'Data & ML', visual: 'olympics', title: 'Olympics Data Explorer', kind: 'Data application',
    description: 'Interactive Olympic history and medal analytics dashboard.',
    tags: ['Python', 'Pandas', 'Streamlit', 'Plotly'], links: [L('https://olympics-data-explorer-dznxkcahqebghbhaiuhmjm.streamlit.app/'), G('olympics-data-explorer')] },
  { id: 'dialogue', category: 'Data & ML', icon: 'chat', title: 'Dialogue Summarizer', kind: 'Fine-tuned language model',
    description: 'Streamlit app for a Flan-T5 model fine-tuned with LoRA on the SAMSum dataset, summarizing short dialogues.',
    tags: ['Flan-T5', 'LoRA', 'Hugging Face', 'Streamlit'], links: [L('https://dialogue-summarizer-app-yhg4rto4v4ytsdqyjcfvkb.streamlit.app/'), G('dialogue-summarizer-app')] },
  { id: 'heart-lung', category: 'Data & ML', icon: 'heart', title: 'Heart & Lung Sound Classification', kind: 'Machine learning',
    description: 'Classification of heart and lung sounds using MFCC features and supervised machine learning techniques.',
    tags: ['MFCC', 'Supervised ML', 'Jupyter'], links: [G('heart-lung-sound-classification')] },
  { id: 'stocks', category: 'Data & ML', icon: 'trend', title: 'Multimodal Stock Forecasting', kind: 'Machine learning',
    description: 'Multi-modal stock market prediction using news sentiment, technical indicators and Transformers.',
    tags: ['Transformers', 'Sentiment analysis', 'Technical indicators'], links: [G('ai-multimodal-stock-market-forecasting')] },
  { id: 'blockchain', category: 'Web', icon: 'blocks', title: 'Blockchain Supply Chain Tracker', kind: 'Decentralized application',
    description: 'Supply chain tracking system for transparent product traceability and role-based ownership management.',
    tags: ['Solidity', 'Hardhat', 'React', 'MetaMask'], links: [G('blockchain-supply-chain-tracker')] },
  { id: 'sms', category: 'Data & ML', icon: 'shield', title: 'SMS Spam Detector', kind: 'Machine learning app + API',
    description: 'Classifies SMS messages as spam or not spam with a TF-IDF vectorizer and a Naive Bayes model, plus a containerized FastAPI service.',
    tags: ['scikit-learn', 'Streamlit', 'FastAPI', 'Docker'],
    links: [L('https://sms-spam-detector-cmifw8qt3scwrfeb2xackh.streamlit.app/'), { label: 'App repo', href: 'https://github.com/D-sasmita/sms-spam-detector', icon: 'github' }, { label: 'API repo', href: 'https://github.com/D-sasmita/sms-spam-api', icon: 'github' }] },
  { id: 'sales', category: 'Data & ML', icon: 'bars', title: 'E-commerce Sales Analysis', kind: 'Exploratory data analysis',
    description: 'Exploratory analysis of e-commerce sales and profitability.',
    tags: ['Python', 'Pandas', 'Plotly'], links: [G('ecommerce-sales-analysis-python')] },
  { id: 'sentiment', category: 'Data & ML', icon: 'smile', title: 'Sentiment Detection with PyTorch', kind: 'Case study',
    description: 'A sentiment detection case study built with PyTorch.',
    tags: ['Python', 'PyTorch'], links: [G('sentiment-detection-usinng-pytorch-a-case-study-on-pytorch')] },
  { id: 'mallbazar', category: 'Web', icon: 'bag', title: 'MallBazar', kind: 'E-commerce front end',
    description: 'Responsive e-commerce site with interactive elements and a user-friendly shopping experience.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'], links: [L('https://d-sasmita.github.io/MALLBAZAR-ecommerce/'), G('MALLBAZAR-ecommerce')] },
  { id: 'globalminds', category: 'Web', icon: 'globe', title: 'Global Minds', kind: 'Web platform',
    description: 'A community platform for crowdsourcing solutions to climate change, poverty and other pressing issues.',
    tags: ['HTML', 'CSS'], links: [G('Global_Minds')] },
]

export const more = [
  { title: 'Android practice apps', description: 'A set of small Kotlin apps built while learning Android development.',
    tags: ['Kotlin', 'Android Studio'],
    links: [['Weather', 'Android-Weather-App'], ['Fetch JSON', 'Android-FetchJson-App'], ['Broadcast Receiver', 'Android-BroadcastReceiver-App'], ['Bonus & Tax Calculator', 'Android-BonusTaxCalculator-App'],
      ['Bill Calculator', 'Android-Bill-Calculator-App'], ['Salary Calculator', 'Salary-Calculator-app'], ['Calculator', 'Android-Calculator-App'], ['Login', 'Android-Login-app'], ['Plant Doctor', 'Plant-Doctor']]
      .map(([label, r]) => ({ label, href: `https://github.com/D-sasmita/${r}`, icon: 'github' })) },
  { title: 'Watch Store', description: 'Watch store web app split into separate frontend and backend repositories.', tags: ['HTML', 'JavaScript'],
    links: [{ label: 'Frontend', href: 'https://github.com/D-sasmita/Watchstore_Frontend', icon: 'github' }, { label: 'Backend', href: 'https://github.com/D-sasmita/Watch-Store_backend', icon: 'github' }] },
  { title: 'Product Management API', description: 'RESTful API for managing product information in a shopping cart application.', tags: ['REST API'],
    links: [G('shopping-cart-api-express-or-product-management-api')] },
  { title: 'MallBazaar', description: 'E-commerce platform merging the essence of traditional bazaars with the convenience of modern malls.', tags: ['HTML'], links: [G('MallBazaar-A-Modern-Shopping-Experience')] },
  { title: 'To-Do App', description: 'A to-do application built with JavaScript.', tags: ['JavaScript'], links: [G('TO-DO-APP')] },
  { title: 'SQL 50', description: 'My solutions to the LeetCode SQL 50 study plan.', tags: ['SQL', 'LeetCode'], links: [G('SQl-50')] },
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
