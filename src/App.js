import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavProvider } from './components/NavContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PhotoCard from './components/PhotoCard';
import CTAButton from './components/CTAButton';
import ProjectCard from './components/ProjectCard';
import SkillBar from './components/SkillBar';
import ContactForm from './components/ContactForm';
import SEO from './components/SEO';
import './App.css';

const SITE_URL = 'https://www.jeelpatel1566.me';

function Home() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jeel Patel',
    url: SITE_URL,
    jobTitle: 'B.Sc IT Student and Frontend Developer',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'JG University',
    },
    email: 'mailto:jeelpatel1566@gmail.com',
    knowsAbout: [
      'React',
      'Python',
      'Prompt Engineering',
      'AI Tools',
      'n8n Automation',
      'JavaScript',
    ],
    sameAs: ['https://github.com/jeel1566'],
  };

  return (
    <div className="page">
      <SEO
        title="Jeel Patel | AI, React, and Python Portfolio"
        description="Portfolio of Jeel Patel, a B.Sc IT student at JG University building AI-first projects with React, Python, and automation tools."
        path="/"
        jsonLd={personSchema}
      />

      <div className="section hero-section">
        <div className="hero-left">
          <div className="hero-headline fade-in fade-in-2">
            <h1 className="hero-title">
              <span className="line-dim">Hi, I am</span>
              <span className="line-white">Jeel Patel</span>
              <span className="line-green">I build useful AI-first web products.</span>
            </h1>
          </div>
          <p className="hero-desc fade-in fade-in-3">
            B.Sc IT student at JG University, focused on building practical products with
            AI tools, React, and Python.
          </p>
        </div>
        <div className="hero-right fade-in fade-in-3">
          <PhotoCard
            imgSrc="/about.jpg"
            alt="Portrait of Jeel Patel"
            tag={null}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      <section className="section seo-summary" aria-labelledby="quick-facts-title">
        <h2 id="quick-facts-title" className="summary-title">Quick Facts</h2>
        <ul className="summary-list">
          <li><strong>Name:</strong> Jeel Patel</li>
          <li><strong>Role:</strong> B.Sc IT student and builder</li>
          <li><strong>Focus:</strong> AI tools, React, Python, n8n</li>
          <li><strong>Location:</strong> India</li>
          <li><strong>Contact:</strong> jeelpatel1566@gmail.com</li>
        </ul>

        <div className="faq-block" aria-labelledby="faq-title">
          <h2 id="faq-title" className="summary-title">Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>What does Jeel Patel work on?</h3>
            <p>Jeel builds portfolio projects and automation workflows using React, Python, and AI tools.</p>
          </div>
          <div className="faq-item">
            <h3>Is Jeel available for collaboration?</h3>
            <p>Yes. Collaboration requests can be sent to jeelpatel1566@gmail.com.</p>
          </div>
          <div className="faq-item">
            <h3>What technologies are currently in focus?</h3>
            <p>React, prompt engineering, Python scripting, and automation with n8n.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

const techStack = ['Python', 'React', 'n8n', 'AI Tools', 'Prompt Engineering', 'Git', 'JavaScript', 'CSS'];

function About() {
  return (
    <div className="page">
      <SEO
        title="About Jeel Patel | Background and Skills"
        description="Learn about Jeel Patel, a B.Sc IT student at JG University focused on AI tools, React apps, and practical automation projects."
        path="/about"
      />

      <div className="section about-section">
        <div className="about-left">
          <div>
            <div className="section-label-row">
              <span className="section-label-line" />
              <span className="section-label-text">About Me</span>
            </div>
            <h2 className="about-headline fade-in fade-in-1">
              JUST A KID
              <br />
              WHO BUILDS.
            </h2>
          </div>
          <p className="about-desc fade-in fade-in-2">
            B.Sc IT student at <strong style={{ color: '#fff' }}>JG University</strong>. 19 years old, focused on
            AI tools, prompt engineering, and shipping projects that solve real problems.
          </p>
          <p className="about-desc fade-in fade-in-3">
            From Python scripts to React apps to n8n automations, I build with whatever makes an idea
            practical and useful.
          </p>
          <div className="about-chips fade-in fade-in-4">
            {techStack.map((chip) => (
              <span key={chip} className="tech-chip">{chip}</span>
            ))}
          </div>
          <div className="fade-in fade-in-5">
            <CTAButton text="See My Projects" variant="primary" to="/projects" />
          </div>
        </div>
        <div className="about-right fade-in">
          <PhotoCard
            imgSrc="/about-selfie.jpg"
            alt="Jeel Patel selfie"
            tagColor="#32d74b"
            style={{ width: '100%', height: '380px' }}
            imgStyle={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { label: 'Age', value: '19' },
              { label: 'Degree', value: 'B.Sc IT' },
              { label: 'City', value: 'India' },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  flex: 1,
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '14px 16px',
                }}
              >
                <p
                  style={{
                    fontSize: '9px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    color: 'var(--muted)',
                    marginBottom: '4px',
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'var(--white)',
                  }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: 'AI TASK MANAGER',
    desc: 'Smart task manager using useState and n8n automation to auto-assign priorities.',
    tags: ['React', 'useState', 'n8n'],
    demo: 'https://github.com/jeel1566',
  },
  {
    title: 'THEME SWITCHER',
    desc: 'Global dark and light toggle app using createContext and useContext.',
    tags: ['Context API', 'useContext', 'CSS'],
    demo: 'https://github.com/jeel1566',
  },
  {
    title: 'CONTACT WIZARD',
    desc: 'Controlled form with useEffect validation and animated success feedback.',
    tags: ['React Forms', 'useEffect', 'useState'],
    demo: 'https://github.com/jeel1566',
  },
];

function Projects() {
  return (
    <div className="page">
      <SEO
        title="Projects | Jeel Patel"
        description="Explore React, automation, and AI projects built by Jeel Patel, including task management, context-based theming, and form workflows."
        path="/projects"
      />

      <div className="section">
        <div className="projects-header">
          <div>
            <div className="section-label-row">
              <span className="section-label-line" />
              <span className="section-label-text">My Work</span>
            </div>
            <h2 className="projects-title fade-in fade-in-1">THINGS I BUILT.</h2>
          </div>
          <CTAButton text="GitHub Profile" variant="ghost" href="https://github.com/jeel1566" />
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

const reactSkills = [
  { name: 'Python', score: 2.8 },
  { name: 'Prompt Engineering', score: 4.5 },
  { name: 'React', score: 2.5 },
  { name: 'Git and GitHub', score: 2.5 },
];

const toolsSkills = [
  { name: 'n8n Automations', score: 3.5 },
  { name: 'AI Tools', score: 3.9 },
];

function Skills() {
  return (
    <div className="page">
      <SEO
        title="Skills | Jeel Patel"
        description="View Jeel Patel's skills across React, Python, prompt engineering, automation, and AI tooling."
        path="/skills"
      />

      <div className="section">
        <div className="skills-header">
          <div className="section-label-row">
            <span className="section-label-line" />
            <span className="section-label-text">Skills and Tools</span>
          </div>
          <h2 className="skills-title fade-in fade-in-1">WHAT I KNOW.</h2>
        </div>
        <div className="skills-grid">
          <div className="skills-col fade-in fade-in-2">
            <p className="skills-col-title">Coding and Frameworks</p>
            {reactSkills.map((s) => (
              <SkillBar key={s.name} name={s.name} score={s.score} max={5} />
            ))}
          </div>
          <div className="skills-col fade-in fade-in-3">
            <p className="skills-col-title">Tools and Platforms</p>
            {toolsSkills.map((s) => (
              <SkillBar key={s.name} name={s.name} score={s.score} max={5} />
            ))}
            <div
              style={{
                marginTop: '16px',
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '16px',
              }}
            >
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  color: 'var(--muted)',
                  marginBottom: '8px',
                }}
              >
                CURRENTLY LEARNING
              </p>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--green)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                }}
              >
                Next.js, TypeScript, Full-Stack AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <SEO
        title="Contact | Jeel Patel"
        description="Contact Jeel Patel for collaboration on React, AI, and automation projects."
        path="/contact"
      />

      <div className="section contact-section">
        <div className="contact-left">
          <div>
            <div className="section-label-row">
              <span className="section-label-line" />
              <span className="section-label-text">Contact</span>
            </div>
            <h2 className="contact-headline fade-in fade-in-1">
              LET US BUILD
              <br />
              SOMETHING
              <br />
              GREAT.
            </h2>
          </div>
          <p className="contact-desc fade-in fade-in-2">
            Have a project or collaboration idea? Send a message and I will get back to you.
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

function App() {
  return (
    <NavProvider>
      <BrowserRouter>
        <Navbar />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </NavProvider>
  );
}

export default App;
