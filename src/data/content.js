// ─────────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.
// Edit values here; components read from this file.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Muhammad Omer',
  initials: 'MO',
  role: 'Data Scientist & AI Engineer',
  subroles: ['Data Analyst', 'Machine Learning Practitioner'],
  affiliation: 'BS Data Science · PAF-IAST',
  location: 'Haripur, Khyber Pakhtunkhwa, Pakistan',
  graduating: '2028',
  availability: 'Open to internships & full-time roles',
  responseTime: 'Replies within 24h',
  // Rotating words in the hero headline
  builds: ['SQL analytics', 'CPU vision pipelines', 'forecasting models', 'data products'],
  intro:
    'BS Data Science student who ships — from SQL analytics over 100K-order datasets to a CPU-only computer-vision pipeline and forecasting models that hold up under honest evaluation.',
}

export const socials = {
  email: 'm.omarknb684@gmail.com',
  phone: '+92 315 938 4108',
  whatsapp: 'https://wa.me/923159384108',
  linkedin: 'https://linkedin.com/in/muhammad-omer-b63814317',
  github: 'https://github.com/Omer684',
  resume: 'https://omer684.github.io/resume.pdf',
}

export const stats = [
  { value: 0.94, decimals: 2, label: 'Best forecast R²', sub: 'Random Forest, Fleet Intelligence' },
  { value: 20, prefix: '', suffix: '×', display: '15–20×', label: 'CPU inference speedup', sub: 'License-plate pipeline' },
  { value: 11, suffix: '', label: 'Projects shipped', sub: 'Analytics · ML · CV · Web' },
  { value: 10, suffix: '', label: 'Certifications', sub: 'Kaggle · Deloitte · more' },
]

export const about = {
  heading: 'Scientist in training,\nengineer in practice.',
  paragraphs: [
    'I’m a BS Data Science student at PAF-IAST (graduating 2028), based in Haripur, Pakistan. I like the whole arc of a data problem — from raw tables and messy frames to a model, a dashboard, or a service that someone can actually use.',
    'On the analytics side I write end-to-end SQL: window functions, CTEs, cohort and RFM segmentation, attrition diagnostics. On the engineering side I’ve built a YOLOv8 + OpenCV + EasyOCR license-plate pipeline that runs ~0.6s/frame on CPU, and a Fleet Intelligence platform pairing a Random Forest (R²=0.94) with a linear-programming optimizer.',
    'I also serve as Director of Research & Innovation at Grow Pakistan Innovation Network, and I’ve completed job simulations with Deloitte, PM Accelerator, Simplilearn, and HackerRank.',
  ],
}

export const skillGroups = [
  {
    title: 'Data Analytics & SQL',
    items: ['MySQL', 'Window Functions', 'CTEs', 'RFM Segmentation', 'Cohort Analysis', 'EDA'],
  },
  {
    title: 'Machine Learning',
    items: ['Scikit-learn', 'Random Forest', 'XGBoost', 'Classification', 'Feature Engineering'],
  },
  {
    title: 'Computer Vision',
    items: ['YOLOv8', 'OpenCV', 'EasyOCR', 'Haar Cascades', 'MJPEG Streams'],
  },
  {
    title: 'Deep Learning',
    items: ['TensorFlow', 'PyTorch', 'Keras', 'CNNs', 'Neural Networks'],
  },
  {
    title: 'Data Visualization',
    items: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn', 'Plotly'],
  },
  {
    title: 'Backend & Tools',
    items: ['Flask', 'Python', 'Git', 'Jupyter', 'MongoDB', 'Bash / Linux'],
  },
]

export const marqueeTech = [
  'Python', 'MySQL', 'Pandas', 'NumPy', 'Scikit-learn', 'YOLOv8', 'OpenCV', 'EasyOCR',
  'TensorFlow', 'PyTorch', 'Flask', 'Streamlit', 'Power BI', 'Tableau', 'Plotly',
  'SQLAlchemy', 'SciPy', 'Leaflet.js', 'Git', 'Linux',
]

// Project categories (also drive the filter chips, in order)
export const projectCategories = ['All', 'Data & Analytics', 'ML & Computer Vision', 'Web & Systems']

export const projects = [
  {
    title: 'Real-Time License Plate Recognition',
    category: 'ML & Computer Vision',
    featured: true,
    blurb:
      'A CPU-only ANPR pipeline: frame ingestion → YOLOv8 detection → Haar-cascade localization → EasyOCR → live Flask dashboard. Async orchestration cut latency 15–20×.',
    tech: ['Python', 'YOLOv8', 'EasyOCR', 'OpenCV', 'Flask', 'Async', 'Vercel'],
    metric: '~0.6s / frame · CPU-only',
    github: 'https://github.com/Omer684/Real-time-License-Plate-Recognition',
  },
  {
    title: 'Fleet Intelligence Platform',
    category: 'ML & Computer Vision',
    featured: true,
    blurb:
      'Logistics decision platform combining a Random Forest cost/ETA predictor (R²=0.94) with a linear-programming route optimizer, wrapped in a Streamlit UI.',
    tech: ['Python', 'Scikit-learn', 'SciPy', 'Streamlit'],
    metric: 'R² = 0.94',
    github: 'https://github.com/Omer684/fleet-intelligence-platform',
  },
  {
    title: 'Olist E-Commerce SQL Analysis',
    category: 'Data & Analytics',
    featured: true,
    blurb:
      'Deep-dive analytics on a 100K-order Brazilian marketplace across 8 tables — 13 queries covering revenue, RFM segmentation, cohort retention and delivery performance.',
    tech: ['MySQL', 'Window Functions', 'CTEs', 'RFM', 'Cohort Analysis'],
    metric: '100K orders · 13 queries',
    github: 'https://github.com/Omer684/olist-ecommerce-sql-analysis',
  },
  {
    title: 'AI Industry Intelligence Dashboard',
    category: 'Data & Analytics',
    blurb:
      'ETL + sentiment analysis over live AI-industry news, surfaced through an interactive Streamlit dashboard backed by a cloud MySQL store.',
    tech: ['Python', 'Streamlit', 'MySQL', 'Plotly', 'NLP', 'REST APIs'],
    metric: 'Live ETL + NLP',
    github: 'https://github.com/Omer684/ai-trend-dashboard',
    live: 'https://ai-trend-dashboard.streamlit.app',
  },
  {
    title: 'DataLens — Profiler & Schema Assistant',
    category: 'Data & Analytics',
    blurb:
      'Upload a dataset and get instant profiling: IQR-based outlier detection, distribution summaries, and auto-generated SQL DDL from the inferred schema.',
    tech: ['Python', 'Pandas', 'Streamlit', 'SQLAlchemy'],
    metric: 'Auto SQL DDL',
    github: 'https://github.com/Omer684/data-profiler-tool',
    live: 'https://data-profiler-tool.streamlit.app',
  },
  {
    title: 'HR Employee Attrition Analysis',
    category: 'Data & Analytics',
    blurb:
      'Diagnostic SQL on IBM’s 1,470-employee dataset — 10 queries isolating the drivers of attrition via conditional aggregation, subqueries and window functions.',
    tech: ['MySQL', 'CTEs', 'Subqueries', 'Window Functions'],
    metric: '1,470 employees',
    github: 'https://github.com/Omer684/hr-attrition-sql-analysis',
  },
  {
    title: 'Global Suicide Rate Analysis',
    category: 'ML & Computer Vision',
    blurb:
      'A modeling study where the real work was integrity: found and removed data leakage that inflated the score, reporting an honest R²=0.51 instead of a flattering lie.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn'],
    metric: 'Honest R² = 0.51',
    github: 'https://github.com/Omer684/global-suicide-rate-prediction',
  },
  {
    title: 'Fleet Logistics Pro',
    category: 'Web & Systems',
    blurb:
      'Real-time shipment tracking web app with a live Leaflet map, SQLite persistence and a Tailwind interface for dispatch and status updates.',
    tech: ['Python', 'Flask', 'SQLite', 'Leaflet.js', 'Tailwind'],
    metric: 'Live map tracking',
    github: 'https://github.com/Omer684/Fleet-Logistics-pro',
  },
  {
    title: 'Net Pulse — Network Monitor',
    category: 'Web & Systems',
    blurb:
      'A zero-dependency GUI network monitor for Linux built entirely in Bash + Zenity — pragmatic systems tooling with no runtime beyond the shell.',
    tech: ['Bash', 'Zenity', 'Linux', 'Shell Scripting'],
    metric: 'Zero dependencies',
    github: 'https://github.com/Omer684/net-pulse',
  },
  {
    title: 'Library Management System',
    category: 'Web & Systems',
    blurb:
      'A CLI library system over a 3-table MySQL schema with full CRUD and four report types — a clean take on classic relational modeling.',
    tech: ['Python', 'MySQL', 'CLI', 'CRUD'],
    metric: '3-table schema',
    github: 'https://github.com/Omer684/library-management-system',
  },
  {
    title: 'Dress By Diya',
    category: 'Web & Systems',
    client: true,
    blurb:
      'A live, mobile-first e-commerce storefront for a fashion brand with streamlined WhatsApp ordering — a shipped client project people buy from today.',
    tech: ['Tailwind CSS', 'Mobile-first', 'WhatsApp Orders'],
    metric: 'Client · Live',
    live: 'https://dressbydiya.me',
    github: 'https://github.com/Omer684',
  },
]

export const building = {
  learning: [
    'Apache Spark (PySpark)',
    'Apache Airflow',
    'Google BigQuery',
    'Dimensional / star-schema modeling',
    'Production pipeline patterns',
  ],
  next: 'An end-to-end Spark + Airflow + BigQuery data pipeline, shipped with a public repo and a full write-up.',
}

export const experience = [
  {
    period: 'Jul 2026 — Present',
    role: 'Director of Research & Innovation',
    org: 'Grow Pakistan Innovation Network',
    type: 'Volunteer',
    note: 'Leading research direction and innovation initiatives within the network.',
  },
  {
    period: 'May — Jun 2026',
    role: 'Data Analytics Job Simulation',
    org: 'DecodeLabs',
    type: 'Simulation',
    note: 'End-to-end analytics workflow: cleaning, analysis and stakeholder-ready reporting.',
  },
  {
    period: 'Jul — Aug 2025',
    role: 'Data Science Job Simulation',
    org: 'Ai Data House',
    type: 'Simulation',
    note: 'Applied ML and data-science practice on realistic industry problem sets.',
  },
]

export const education = {
  period: '2024 — 2028 (Expected)',
  degree: 'BS Data Science',
  school: 'PAF-IAST, Haripur',
  notes: ['Member, Machine Learning research group', 'FSc Computer Science (2024)'],
}

export const certifications = [
  { name: 'Data Analytics Simulation', issuer: 'DecodeLabs', date: 'Jun 2026' },
  { name: 'Certified Data Scientist', issuer: 'PM Accelerator', date: 'Jun 2026' },
  { name: 'Power BI', issuer: 'Simplilearn', date: 'Apr 2026' },
  { name: 'SQL (Basic)', issuer: 'HackerRank', date: 'Jan 2026' },
  { name: 'Data Analytics Simulation', issuer: 'Deloitte', date: 'Dec 2025' },
  { name: 'Data Science Simulation', issuer: 'Ai Data House', date: 'Aug 2025' },
  { name: 'Python', issuer: 'Kaggle', date: 'Aug 2026' },
  { name: 'Pandas', issuer: 'Kaggle', date: 'Aug 2026' },
  { name: 'Advanced SQL', issuer: 'Kaggle', date: 'Aug 2026' },
  { name: 'Data Visualization', issuer: 'Kaggle', date: 'Aug 2026' },
]

export const opportunityTypes = [
  'Data Science Internship',
  'AI/ML Engineering',
  'Data Analytics',
  'Research Collaboration',
  'Freelance',
  'Mentorship / Networking',
  'Other',
]

// Flagship pipeline steps (License Plate Recognition) for the process diagram
export const pipeline = [
  { step: '01', title: 'Frame Ingestion', desc: 'MJPEG stream / video decoded frame-by-frame.' },
  { step: '02', title: 'YOLOv8 Detection', desc: 'Vehicle & plate region proposals on CPU.' },
  { step: '03', title: 'Haar Localization', desc: 'Cascade refines the exact plate crop.' },
  { step: '04', title: 'EasyOCR', desc: 'Characters read from the normalized crop.' },
  { step: '05', title: 'Flask Dashboard', desc: 'Live results streamed to the browser.' },
]

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
