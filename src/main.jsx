import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowDown, Menu, X, Github, Linkedin, ExternalLink } from 'lucide-react';
import './style.css';
import {
  profile, stats, featured, pipeline, archive, websites, skills,
  experience, education, building, credentials, faqs,
} from './data.js';

const BASE = import.meta.env.BASE_URL;
const asset = (path) => `${BASE}${path}`;
const resumeUrl = asset('Muhammad_Omer_Resume.pdf');
const privacyUrl = asset('privacy.html');

function ContactForm() {
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setSending(true);
    setStatus('');
    try {
      const response = await fetch('https://formspree.io/f/mrppbwro', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error('The message was not sent.');
      form.reset();
      setStatus('Message sent. I will reply within 24 hours.');
    } catch (err) {
      setStatus(`${err.message} Email me directly at ${profile.email}.`);
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={submit} action="https://formspree.io/f/mrppbwro" method="POST">
      <div className="form-pair">
        <label>Your name *<input name="name" autoComplete="name" placeholder="Your name" required maxLength="120" /></label>
        <label>Email *<input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label>
      </div>
      <label>Opportunity type
        <select name="opportunity_type" defaultValue="">
          <option value="">Select an option</option>
          <option>Data science internship</option>
          <option>Data analyst role</option>
          <option>AI / ML engineering role</option>
          <option>Freelance project</option>
          <option>Research collaboration</option>
          <option>Mentorship / networking</option>
          <option>Other</option>
        </select>
      </label>
      <label>Subject *<input name="subject" placeholder="Role / project / collaboration" required maxLength="180" /></label>
      <label>Message *<textarea name="message" placeholder="Tell me about the opportunity..." minLength="10" maxLength="5000" required rows="6" /></label>
      <input className="trap" type="text" name="_gotcha" tabIndex="-1" autoComplete="off" aria-hidden="true" />
      <button className="form-submit" disabled={sending} type="submit">{sending ? 'SENDING...' : 'SEND MESSAGE'} <ArrowUpRight size={18} /></button>
      <p role="status" aria-live="polite" className="form-status">{status}</p>
      <p className="form-privacy">Your details are used only to reply to your message. <a href={privacyUrl}>Privacy policy</a></p>
    </form>
  );
}

function ProjectVisual({ p }) {
  if (p.visual === 'intel') {
    return (
      <div className="intel-visual">
        <div className="data-bars">{[35, 59, 42, 73, 50, 86, 61, 96, 77, 91, 66, 100].map((n, j) => <i key={j} style={{ height: n + '%' }} />)}</div>
        <div className="intel-number">{p.value}<small>{p.suffix}</small></div>
      </div>
    );
  }
  if (p.visual === 'vision') {
    return (
      <div className="vision-art">
        <div className="target"><span>OBJECT DETECTED</span><strong>YOLO / OCR</strong></div>
        <span className="corner-data mono">CONFIDENCE / PIPELINE</span>
      </div>
    );
  }
  if (p.visual === 'fleet') {
    return (
      <div className="fleet-art">
        <div className="fleet-path"><i /><i /><i /></div>
        <span>FORECAST → REALLOCATE</span>
      </div>
    );
  }
  return (
    <div className="lens-art">
      <strong>DATA<span>/</span>LENS</strong>
      <div className="lens-bars">▂ ▅ ▃ ▇ ▄ ▆ █</div>
    </div>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  const close = () => setMenu(false);

  return (
    <>
      <header className="header">
        <a href="#home" className="monogram" aria-label="Back to top">MO<span>.</span></a>
        <div className="header-line" />
        <nav className={menu ? 'nav open' : 'nav'} aria-label="Main navigation">
          <a onClick={close} href="#home">HOME</a>
          <a onClick={close} href="#work">PROJECTS</a>
          <a onClick={close} href="#experience">EXPERIENCE</a>
          <a onClick={close} href="#web">WEB WORK</a>
          <a onClick={close} href="#about">ABOUT</a>
          <a onClick={close} href="#services">SERVICES</a>
          <a onClick={close} href="#credentials">CREDENTIALS</a>
          <a onClick={close} href="#contact">CONTACT</a>
        </nav>
        <div className="header-actions">
          <a className="resume-nav" href={resumeUrl} target="_blank" rel="noopener noreferrer">RESUME <ArrowUpRight size={16} /></a>
          <a className="header-right" href={`mailto:${profile.email}`}>LET'S CONNECT <ArrowUpRight size={16} /></a>
        </div>
        <button className="mobile-menu" aria-label="Toggle menu" aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid">
            <img className="selected-hero-reference" src={asset('selected-hero.png')} alt="" aria-hidden="true" />
            <div className="hero-photo"><img src={asset('portrait.webp')} alt="Editorial portrait of Muhammad Omer in a black suit" /><div className="photo-overlay" /></div>
            <div className="hero-left-top mono">DATA SCIENCE<br />MACHINE LEARNING<br />INTELLIGENT SYSTEMS <div className="small-rule" /></div>
            <div className="hero-top-right mono"><span className="red-dot" /> OPEN TO INTERNSHIPS &amp; FULL-TIME ROLES</div>
            <div className="hero-name"><span className="hero-index mono">PORTFOLIO / 2026</span><h1>OMER</h1><p className="full-name mono">MUHAMMAD OMER <span>— DATA SCIENCE</span></p></div>
            <div className="hero-intro"><span className="line" /><p>BUILDING INTELLIGENT<br />SYSTEMS FROM<br />REAL-WORLD DATA.</p><a href="#work" className="hero-cta"><span><ArrowUpRight size={26} /></span> EXPLORE MY WORK</a></div>
            <div className="hero-bottom-left mono"><span className="red-square" /> SCROLL TO EXPLORE <ArrowDown size={15} /></div>
            <div className="hero-bottom-right mono">HARIPUR, PAKISTAN / WORKING WORLDWIDE</div>
            <div className="side-index mono">01 — 05</div>
          </div>
        </section>

        <section className="intro band">
          <div className="wrap intro-grid">
            <span className="mono kicker">[ 01 / INTRODUCTION ]</span>
            <div><p>I turn <em>complex data</em> into useful intelligence — through analytics, machine learning, and systems built to solve real problems.</p></div>
            <div className="intro-bottom mono">DATA / ENGINEERING / IMPACT <span>↓</span></div>
          </div>
        </section>

        <section className="stats-section" aria-label="Results at a glance">
          <div className="wrap stats-grid">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <strong>{s.value}</strong>
                <span className="mono">{s.label}</span>
                <p>{s.sub}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="work section">
          <div className="wrap">
            <div className="section-heading">
              <div><span className="mono kicker">[ 02 / SELECTED DATA PROJECTS ]</span><h2>THE <em>WORK.</em></h2></div>
              <p>Selected for technical depth, practical application and analytical value — not visual polish alone.</p>
            </div>

            <div className="project-grid">
              {featured.map((p, i) => (
                <div key={p.no} className={'feature-item ' + (i === 0 ? 'first' : '')}>
                  <a className={'project-visual ' + p.visual} href={p.href} target="_blank" rel="noreferrer" aria-label={'Explore ' + p.title}>
                    <div className="visual-header mono"><span>MO / {p.label}</span><span>{p.no} — 04</span></div>
                    <ProjectVisual p={p} />
                    <div className="visual-footer mono"><span>{p.category}</span><ArrowUpRight size={19} /></div>
                  </a>
                  <div className="project-detail">
                    <div className="project-number mono">{p.no} / FEATURED PROJECT</div>
                    <h3>{p.title}</h3>
                    <div className="metric mono">{p.metric}</div>
                    <p>{p.summary}</p>
                    <div className="stack mono">{p.stack}</div>
                    <div className="project-actions">
                      <a href={p.href} target="_blank" rel="noreferrer">EXPLORE PROJECT <ArrowUpRight size={17} /></a>
                      {p.repo && <a className="secondary-action" href={p.repo} target="_blank" rel="noreferrer">SOURCE <Github size={15} /></a>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pipeline">
              <div className="archive-heading"><span className="mono kicker">HOW PROJECT 02 WORKS</span><h3>LICENSE-PLATE PIPELINE</h3></div>
              <ol className="pipeline-steps">
                {pipeline.map(([title, desc], i) => (
                  <li key={title}><span className="mono">STEP {i + 1}</span><strong>{title}</strong><p>{desc}</p></li>
                ))}
              </ol>
            </div>

            <div className="archive">
              <div className="archive-heading"><span className="mono kicker">ADDITIONAL WORK / 05—10</span><h3>PROJECT ARCHIVE</h3></div>
              {archive.map(([no, name, type, desc, url]) => (
                <a href={url} target="_blank" rel="noreferrer" className="archive-row" key={no}>
                  <span className="mono">{no}</span>
                  <div><strong>{name}</strong><small>{desc}</small></div>
                  <span className="mono archive-type">{type}</span>
                  <ArrowUpRight size={20} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="web" className="web-section section">
          <div className="wrap">
            <div className="section-heading">
              <div><span className="mono kicker">[ 03 / SEPARATE PRACTICE ]</span><h2>WEB <em>EXPERIENCES.</em></h2></div>
              <p>Alongside data science, I build digital storefronts and functional web experiences for small businesses.</p>
            </div>
            <div className="web-grid">
              {websites.map((w, i) => (
                <a key={w.name} className={'web-tile ' + w.className} href={w.href} target="_blank" rel="noreferrer">
                  <div className="mono tile-top">{String(i + 1).padStart(2, '0')} / {w.kind} <ArrowUpRight size={19} /></div>
                  <strong>{w.mark}</strong>
                  <div className="tile-bottom"><div><h3>{w.name}</h3><p>{w.detail}</p></div><span className="mono">VISIT SITE ↗</span></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about section">
          <div className="wrap">
            <span className="mono kicker">[ 04 / ABOUT ME ]</span>
            <div className="about-grid">
              <h2>THE PERSON<br />BEHIND <em>THE DATA.</em></h2>
              <div className="about-copy">
                <p className="lead">I'm Muhammad Omer, a Data Science undergraduate at PAF-IAST, graduating in 2028 and based in Haripur, Pakistan.</p>
                <p>I like the whole arc of a data problem: raw tables and messy files, then a model, a dashboard or a service that someone can use.</p>
                <p>On the analytics side I write end-to-end SQL with window functions, CTEs, cohort analysis and RFM segmentation. On the engineering side I built a CPU-only licence-plate pipeline and a fleet platform that pairs a forecasting model with an optimiser.</p>
                <div className="about-links">
                  <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GITHUB <ArrowUpRight size={15} /></a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LINKEDIN <ArrowUpRight size={15} /></a>
                  <a href={resumeUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={17} /> VIEW RESUME</a>
                </div>
              </div>
            </div>
            <div className="capabilities">
              {skills.map(([label, items]) => (
                <div className="cap-row" key={label}><span className="mono">{label}</span><p>{items}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="extras-section section">
          <div className="wrap">
            <span className="mono kicker">[ EXPERIENCE ]</span>
            <h2 className="extras-title">EXPERIENCE<span>.</span></h2>
            {experience.map((e) => (
              <div className="extra-row" key={e.title + e.when}>
                <span className="mono">{e.when}</span>
                <div>
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                  {e.link && <a href={asset(e.link[0])} target="_blank" rel="noreferrer">{e.link[1]}</a>}
                </div>
              </div>
            ))}
            <span className="mono kicker sub-kicker">[ EDUCATION ]</span>
            {education.map((e) => (
              <div className="extra-row" key={e.title}>
                <span className="mono">{e.when}</span>
                <div><h3>{e.title}</h3><p>{e.text}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="building" className="extras-section section">
          <div className="wrap">
            <span className="mono kicker">[ CURRENTLY LEARNING ]</span>
            <h2 className="extras-title">BUILDING <span>NEXT.</span></h2>
            <div className="extra-row">
              <span className="mono">STUDYING</span>
              <div><ul className="learning-list">{building.learning.map((l) => <li key={l}>{l}</li>)}</ul></div>
            </div>
            <div className="extra-row">
              <span className="mono">NEXT PROJECT</span>
              <div><p>{building.next}</p></div>
            </div>
          </div>
        </section>

        <section id="services" className="extras-section section">
          <div className="wrap">
            <span className="mono kicker">[ SELECTED SERVICES ]</span>
            <h2 className="extras-title">WHAT I <span>DO.</span></h2>
            <div className="service-grid">
              <article><span className="mono">01</span><h3>Data analysis</h3><p>Cleaning, exploration and reporting using Python, Pandas and SQL.</p></article>
              <article><span className="mono">02</span><h3>Dashboards</h3><p>Clear, useful reporting interfaces for operational and business data.</p></article>
              <article><span className="mono">03</span><h3>Python workflows</h3><p>Repeatable scripts for data processing and small automation tasks.</p></article>
            </div>
          </div>
        </section>

        <section id="credentials" className="extras-section section">
          <div className="wrap">
            <span className="mono kicker">[ CERTIFICATES ]</span>
            <h2 className="extras-title">CREDENTIALS<span>.</span></h2>
            <div className="credential-list">
              {credentials.map(([title, issuer, date], i) => (
                <div key={`${issuer}-${title}-${i}`} className="credential-row credential-static">
                  <strong>{title}</strong><span>{issuer} / {date}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="extras-section section">
          <div className="wrap">
            <span className="mono kicker">[ COMMON QUESTIONS ]</span>
            <h2 className="extras-title">FAQ<span>.</span></h2>
            <div className="faq-list">
              {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="wrap">
            <span className="mono kicker">[ GET IN TOUCH ]</span>
            <div className="contact-layout">
              <div>
                <h2>LET'S<br /><em>TALK.</em></h2>
                <p className="contact-overline mono">DATA SCIENCE / ANALYTICS / COLLABORATIONS</p>
                <a className="contact-mail" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={20} /></a>
                <p className="contact-note mono">{profile.availability.toUpperCase()}<br />{profile.responseTime.toUpperCase()}<br />{profile.location.toUpperCase()}</p>
                <div className="contact-social mono">
                  <a href={profile.github} target="_blank" rel="noreferrer">GITHUB ↗</a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN ↗</a>
                  <a href={profile.whatsapp} target="_blank" rel="noreferrer">WHATSAPP ↗</a>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer wrap mono">
        <span>© {new Date().getFullYear()} MUHAMMAD OMER</span>
        <span>DESIGNED WITH INTENTION.</span>
        <a href={privacyUrl}>PRIVACY POLICY</a>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
