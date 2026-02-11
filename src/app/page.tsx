'use client';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './home.module.css';
import ProjectCard from '@/components/ProjectCard';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'FlowGent',
    description: 'Advanced N8N AI ecosystem extension for seamless workflow automation and intelligence integration.',
    tags: ['N8N', 'AI', 'Automation', 'TypeScript'],
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #556270 100%)'
  },
  {
    title: 'Context Bridge',
    description: 'Chrome extension facilitating AI context sharing between different LLM sessions and platforms.',
    tags: ['Chrome Extension', 'React', 'AI', 'Supabase'],
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
  },
  {
    title: 'Tech Startup Vision',
    description: 'Conceptualizing a new tech entity focused on bridging human intent with AI execution capability.',
    tags: ['Startup', 'Vision', 'Future Tech'],
    gradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)'
  }
];

export default function Home() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      const tl = gsap.timeline();

      tl.from(`.${styles.heroTitle}`, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
      })
        .from(`.${styles.heroImage}`, {
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: 'power2.out',
        }, '-=1');

      // Scroll Animations
      gsap.from(`.${styles.projectsSection} > div`, {
        scrollTrigger: {
          trigger: `.${styles.projectsSection}`,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={comp} className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroContent}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroTitle}>JEEL PATEL</h1>
        </div>

        <div className={styles.lightingEffect}></div>

        <div className={styles.heroImageContainer}>
          {/* Using a placeholder if image is missing, or user provided image */}
          {/* Note: User needs to place 'hero.png' in public folder or update this path */}
          <div className={styles.heroImage}>
            <Image
              src="/hero.png"
              alt="Jeel Patel"
              fill
              style={{ objectFit: 'contain', objectPosition: 'bottom' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.projectsSection}>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className="h-full">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>

      {/* Memory Section */}
      <section className={styles.memorySection}>
        <h2 className={styles.memoryTitle}>Memory & Vision</h2>
        <div className={styles.memoryContent}>
          <p className={styles.mb6}>
            I am currently exploring the intersection of AI and human intent.
            My journey involves building tools that bridge contexts—like <strong>Context Bridge</strong>—and
            enhancing workflows with <strong>FlowGent</strong>. Use my memory to understand my path.
          </p>
          <p>
            As a student and aspiring tech founder, I am focused on creating aesthetic, meaningful software
            that defines the future. This portfolio is just the beginning.
          </p>
        </div>
      </section>
    </main>
  );
}
