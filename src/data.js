// Single source of truth for portfolio content. Edit here, not in main.jsx.
// Wording follows the resume PDF where earlier versions disagreed.

export const profile = {
  location: 'Haripur, Khyber Pakhtunkhwa, Pakistan',
  availability: 'Open to internships and full-time roles',
  responseTime: 'Replies within 24 hours',
  email: 'm.omarknb684@gmail.com',
  github: 'https://github.com/Omer684',
  linkedin: 'https://www.linkedin.com/in/muhammad-omer-b63814317',
  whatsapp: 'https://wa.me/923159384108',
};

export const stats = [
  { value: '0.94', label: 'Forecast R²', sub: 'Random Forest, Fleet Intelligence' },
  { value: '15–20×', label: 'CPU speed-up', sub: 'License-plate pipeline' },
  { value: '100K', label: 'Orders analysed', sub: 'Olist, 8 tables, 13 queries' },
  { value: '10', label: 'Credentials', sub: 'Kaggle, Deloitte, PM Accelerator and more' },
];

export const featured = [
  {
    no: '01', title: 'AI Industry Intelligence', category: 'LIVE DATA / INDUSTRY ANALYTICS',
    summary: 'A multi-source ETL pipeline that collects live AI job listings and news into a cloud MySQL database, scores news sentiment, and shows hiring and keyword trends in a Streamlit dashboard.',
    metric: 'Live ETL + sentiment analysis',
    stack: 'PYTHON / STREAMLIT / MYSQL / PLOTLY / NLP / REST APIS',
    href: 'https://ai-trend-dashboard.streamlit.app/', repo: 'https://github.com/Omer684/ai-trend-dashboard',
    visual: 'intel', label: 'LIVE SIGNALS', value: '101', suffix: 'JOB RECORDS · SAMPLE RUN',
  },
  {
    no: '02', title: 'Real-Time License Plate Recognition', category: 'COMPUTER VISION / OPTIMIZATION',
    summary: 'A CPU-only pipeline: YOLOv8 finds vehicles, Haar cascades localise the plate, EasyOCR reads it, and a Flask dashboard streams results live. Async threads, lazy model loading and resolution capping cut latency 15–20×.',
    metric: '~0.6 s per frame on CPU',
    stack: 'PYTHON / YOLOV8 / OPENCV / EASYOCR / FLASK',
    href: 'https://github.com/Omer684/Real-time-License-Plate-Recognition',
    visual: 'vision', label: 'COMPUTER VISION', value: 'CV', suffix: 'DETECTION → RECOGNITION',
  },
  {
    no: '03', title: 'Fleet Intelligence Platform', category: 'OPERATIONS / DATA SYSTEMS',
    summary: 'Forecasts city-zone delivery demand 36 hours ahead with a Random Forest, then uses SciPy linear programming to move idle fleet from surplus zones to deficit zones at minimum cost.',
    metric: 'R² = 0.94',
    stack: 'PYTHON / SCIKIT-LEARN / SCIPY / STREAMLIT',
    href: 'https://github.com/Omer684/fleet-intelligence-platform',
    visual: 'fleet', label: 'OPERATIONAL INTELLIGENCE', value: '↗', suffix: 'DATA → DECISIONS',
  },
  {
    no: '04', title: 'DataLens — Data Profiler', category: 'DATA QUALITY / ANALYTICS TOOLS',
    summary: 'Upload a dataset and get instant profiling: IQR-based outlier detection, distribution summaries, and SQL table definitions generated from the inferred schema.',
    metric: 'Auto-generated SQL DDL',
    stack: 'PYTHON / PANDAS / STREAMLIT / SQLALCHEMY',
    href: 'https://data-profiler-tool.streamlit.app', repo: 'https://github.com/Omer684/data-profiler-tool',
    visual: 'lens', label: 'DATA EXPLORATION', value: 'DATA', suffix: 'PROFILE / INSPECT / UNDERSTAND',
  },
];

export const pipeline = [
  ['Frame ingestion', 'Video or MJPEG stream decoded frame by frame.'],
  ['YOLOv8 detection', 'Vehicle and plate region proposals on CPU.'],
  ['Haar localisation', 'A cascade and contour checks refine the plate crop.'],
  ['EasyOCR', 'Characters read from the normalised crop.'],
  ['Flask dashboard', 'Results streamed live to the browser.'],
];

export const archive = [
  ['05', 'Olist E-Commerce SQL Analysis', 'SQL / BUSINESS ANALYTICS', '100K orders across 8 tables. 13 queries on revenue, RFM segments, cohort retention and delivery. Found $13.59M in revenue, with repeat customers only about 3% of the base.', 'https://github.com/Omer684/olist-ecommerce-sql-analysis'],
  ['06', 'HR Attrition Analysis', 'SQL / PEOPLE ANALYTICS', "10 diagnostic queries on IBM's 1,470-employee dataset, using conditional aggregation, subqueries and window functions.", 'https://github.com/Omer684/hr-attrition-sql-analysis'],
  ['07', 'Global Suicide Rate Prediction', 'MACHINE LEARNING / MODELING', 'Found and removed data leakage that inflated the score, then reported an honest R² of 0.51.', 'https://github.com/Omer684/global-suicide-rate-prediction'],
  ['08', 'Fleet Logistics Pro', 'WEB APP / LOGISTICS', 'Live shipment tracking with a Leaflet map, SQLite storage and a dispatch interface.', 'https://github.com/Omer684/Fleet-Logistics-pro'],
  ['09', 'Net Pulse', 'BASH / NETWORK MONITORING', 'A GUI network monitor for Linux built only with Bash and Zenity, no other dependencies.', 'https://github.com/Omer684/net-pulse'],
  ['10', 'Library Management System', 'PYTHON / MYSQL', 'A command-line library system on a 3-table MySQL schema with full CRUD and four report types.', 'https://github.com/Omer684/library-management-system'],
];

export const websites = [
  { name: 'Dress by Diya', kind: 'FASHION / E-COMMERCE', href: 'https://dressbydiya.me/', className: 'diya', mark: 'DIYA', detail: 'A live, mobile-first storefront for a women’s clothing brand, with WhatsApp ordering.' },
  { name: 'SH Jewelry', kind: 'JEWELRY / E-COMMERCE', href: 'https://shjewelry-ecommerce.vercel.app/', className: 'jewelry', mark: 'SH.', detail: 'A responsive shopping experience for an accessories brand.' },
];

export const skills = [
  ['01 / ANALYTICS & SQL', 'MySQL · Window functions · CTEs · RFM · Cohort analysis · EDA'],
  ['02 / MACHINE LEARNING', 'Scikit-learn · Random Forest · XGBoost · Feature engineering'],
  ['03 / COMPUTER VISION', 'YOLOv8 · OpenCV · EasyOCR · Haar cascades'],
  ['04 / DEEP LEARNING', 'TensorFlow · PyTorch · Keras · CNNs (basic)'],
  ['05 / VISUALISATION', 'Power BI · Tableau · Plotly · Matplotlib · Seaborn'],
  ['06 / DELIVERY', 'Python · Streamlit · Flask · React · Git · Linux'],
];

export const experience = [
  { when: 'LEADERSHIP / GROW PAKISTAN', title: 'Board Director', text: 'Grow Pakistan. A youth-focused leadership role supporting the organisation’s mission to empower young people.', link: ['experience/grow-pakistan-board-director.png', 'VIEW ANNOUNCEMENT ↗'] },
  { when: '10 JUN – 25 JUL 2026', title: 'Data Science Intern', text: 'M-tech Production & Marketing. Completed an internship programme in the data science domain.', link: ['certificates/mtech-internship.pdf', 'VIEW CERTIFICATE ↗'] },
  { when: '01 MAY – 01 JUN 2026', title: 'Data Analytics Virtual Intern', text: 'DecodeLabs. Completed the virtual internship programme in data analytics: cleaned and analysed real-world datasets, then built visual reports and a final analytics report from raw data to recommendation.' },
  { when: '01 JUL – 15 AUG 2025', title: 'Data Science Intern', text: 'Ai Data House. Completed an internship in the data science department: data cleaning, exploratory analysis, model evaluation, and basic regression and classification.' },
];

export const education = [
  { when: '2024 – 2028 (EXPECTED)', title: 'BS Data Science', text: 'PAF-IAST, Haripur. Member of the Machine Learning research group.' },
  { when: '2024', title: 'FSc Computer Science', text: 'Jinnah Jam-e School & College.' },
];

export const building = {
  learning: ['Apache Spark (PySpark)', 'Apache Airflow', 'Google BigQuery', 'Star-schema modelling', 'Production pipeline patterns'],
  next: 'An end-to-end Spark, Airflow and BigQuery data pipeline, published with a public repository and a full write-up.',
};

export const credentials = [
  ['Data Analytics Virtual Internship', 'DecodeLabs', 'Jun 2026'],
  ['Certified Data Scientist', 'PM Accelerator', 'Jun 2026'],
  ['Power BI for Beginners', 'Simplilearn', 'Apr 2026'],
  ['SQL (Basic)', 'HackerRank', 'Jan 2026'],
  ['Data Analytics Job Simulation', 'Deloitte', 'Dec 2025'],
  ['Data Science Internship', 'Ai Data House', 'Aug 2025'],
  ['Python', 'Kaggle', '12 Aug 2026'],
  ['Pandas', 'Kaggle', '13 Aug 2026'],
  ['Advanced SQL', 'Kaggle', '18 Aug 2026'],
  ['Data Visualization', 'Kaggle', '18 Aug 2026'],
];

export const faqs = [
  ['What services do I offer?', 'Data cleaning, SQL analysis, exploratory data analysis, dashboards and small Python automation projects.'],
  ['Am I open to roles and internships?', 'Yes. I am open to data scientist, data analyst, AI engineer and internship roles. Use the contact form below.'],
  ['Can you see my source code?', 'Most projects link to a public GitHub repository, and several run as live applications.'],
  ['How can you discuss a project with me?', 'Tell me the problem, the data you have, the result you expect and your timeline through the contact form.'],
];
