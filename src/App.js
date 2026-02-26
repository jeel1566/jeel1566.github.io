import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavProvider } from './components/NavContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PhotoCard from './components/PhotoCard';
import CTAButton from './components/CTAButton';
import ProjectCard from './components/ProjectCard';
import SkillBar from './components/SkillBar';
import ContactForm from './components/ContactForm';
import './App.css';

// --- Home Page ---
function Home() {
  return (
    <div className="page">
      <div className="section hero-section">
        <div className="hero-left">
          <div className="hero-headline fade-in fade-in-2">
            <h1 className="line-dim">HI, I'M</h1>
            <h1 className="line-white">JEEL</h1>
            <h1 className="line-green">&amp; I BUILD COOL STUFF →</h1>
          </div>
          <p className="hero-desc fade-in fade-in-3">
            B.Sc IT Student @ JG University · 19yo · Building real projects
            with AI tools, React &amp; Python — one build at a time.
          </p>
        </div>
        <div className="hero-right fade-in fade-in-3">
          <PhotoCard
            imgSrc="/about.jpg"
            tag={null}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
}

// --- About Page ---
const techStack = ['Python', 'React', 'n8n', 'AI Tools', 'Prompt Eng', 'Git', 'JavaScript', 'CSS'];

function About() {
  return (
    <div className="page">
      <div className="section about-section">
        <div className="about-left">
          <div>
            <div className="section-label-row">
              <span className="section-label-line" />
              <span className="section-label-text">About Me</span>
            </div>
            <h2 className="about-headline fade-in fade-in-1">
              JUST A KID<br />WHO BUILDS.
            </h2>
          </div>
          <p className="about-desc fade-in fade-in-2">
            B.Sc IT student at <strong style={{ color: '#fff' }}>JG University</strong>. 19 years old, obsessed with
            AI tools, prompt engineering, and shipping projects that actually do stuff.
          </p>
          <p className="about-desc fade-in fade-in-3">
            From Python scripts to React apps to n8n automations — I build
            with whatever makes the idea real. This portfolio itself is a
            React project with 15 components showing off hooks, context,
            routing, and forms.
          </p>
          <div className="about-chips fade-in fade-in-4">
            {techStack.map(chip => (
              <span key={chip} className="tech-chip">{chip}</span>
            ))}
          </div>
          <div className="fade-in fade-in-5">
            <CTAButton text="SEE MY PROJECTS →" variant="primary" to="/projects" />
          </div>
        </div>
        <div className="about-right fade-in">
          <PhotoCard
            imgSrc="/about-selfie.jpg"
            tagColor="#32d74b"
            style={{ width: '100%', height: '380px' }}
            imgStyle={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { label: 'AGE', value: '19' },
              { label: 'DEGREE', value: 'B.Sc IT' },
              { label: 'CITY', value: 'India' },
            ].map(({ label, value }) => (
              <div key={label} style={{
                flex: 1, background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: '8px', padding: '14px 16px'
              }}>
                <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '2px', color: 'var(--muted)', marginBottom: '4px' }}>{label}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--white)' }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Projects Page ---
const projects = [
  {
    title: 'AI TASK MANAGER',
    desc: 'Smart task manager using useState + n8n automation to auto-assign priorities. Real usecase, built with React hooks.',
    tags: ['React', 'useState', 'n8n'],
    demo: '#',
  },
  {
    title: 'THEME SWITCHER',
    desc: 'Global dark/light toggle app using createContext + useContext. One click, the whole app switches. Clean and simple.',
    tags: ['Context API', 'useContext', 'CSS'],
    demo: '#',
  },
  {
    title: 'CONTACT WIZARD',
    desc: 'Controlled form with live useEffect validation + animated success feedback. Built with React Forms best practices.',
    tags: ['React Forms', 'useEffect', 'useState'],
    demo: '#',
  },
];

function Projects() {
  return (
    <div className="page">
      <div className="section">
        <div className="projects-header">
          <div>
            <div className="section-label-row">
              <span className="section-label-line" />
              <span className="section-label-text">My Work</span>
            </div>
            <h2 className="projects-title fade-in fade-in-1">THINGS I BUILT.</h2>
          </div>
          <CTAButton text="GitHub ↗" variant="ghost" href="https://github.com" />
        </div>
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div key={proj.title} className={`fade-in fade-in-${i + 1}`}>
              <ProjectCard
                title={proj.title}
                desc={proj.desc}
                tags={proj.tags}
                demo={proj.demo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Skills Page ---
const reactSkills = [
  { name: 'Python', score: 2.8 },
  { name: 'Prompt Engineering', score: 4.5 },
  { name: 'React', score: 2.5 },
  { name: 'Git & GitHub', score: 2.5 },
];

const toolsSkills = [
  { name: 'n8n Automations', score: 3.5 },
  { name: 'AI Tools', score: 3.9 },
];

function Skills() {
  return (
    <div className="page">
      <div className="section">
        <div className="skills-header">
          <div className="section-label-row">
            <span className="section-label-line" />
            <span className="section-label-text">Skills &amp; Tools</span>
          </div>
          <h2 className="skills-title fade-in fade-in-1">WHAT I KNOW.</h2>
        </div>
        <div className="skills-grid">
          <div className="skills-col fade-in fade-in-2">
            <p className="skills-col-title">CODING &amp; FRAMEWORKS</p>
            {reactSkills.map(s => (
              <SkillBar key={s.name} name={s.name} score={s.score} max={5} />
            ))}
          </div>
          <div className="skills-col fade-in fade-in-3">
            <p className="skills-col-title">TOOLS &amp; PLATFORMS</p>
            {toolsSkills.map(s => (
              <SkillBar key={s.name} name={s.name} score={s.score} max={5} />
            ))}
            <div style={{
              marginTop: '16px', background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: '8px', padding: '16px',
            }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: 'var(--muted)', marginBottom: '8px' }}>
                CURRENTLY LEARNING
              </p>
              <p style={{ fontSize: '14px', color: 'var(--green)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                Next.js · TypeScript · Full-Stack AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Contact Page ---
function Contact() {
  return (
    <div className="page">
      <div className="section contact-section">
        <div className="contact-left">
          <div>
            <div className="section-label-row">
              <span className="section-label-line" />
              <span className="section-label-text">Hit Me Up</span>
            </div>
            <h2 className="contact-headline fade-in fade-in-1">
              LET'S BUILD<br />SOMETHING<br />CRAZY.
            </h2>
          </div>
          <p className="contact-desc fade-in fade-in-2">
            Got a collab idea or just wanna talk AI? I'm 19, free most days,
            and always building something. Drop me a message!
          </p>
          <div className="fade-in fade-in-4" style={{ marginTop: '8px' }}>
            <a
              href="mailto:jeelpatel1566@gmail.com"
              style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--green)' }}
            >
              jeelpatel1566@gmail.com
            </a>
          </div>
        </div>
        <div className="contact-right fade-in fade-in-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

// --- Main App Component ---
function App() {
  return (
    <NavProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </NavProvider>
  );
}

export default App;
