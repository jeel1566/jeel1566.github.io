'use client';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './home.module.css';
import ProjectCard from '@/components/ProjectCard';

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
      const tl = gsap.timeline();
      tl.from(`.${styles.title} span`, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
      })
        .from(`.${styles.subtitle}`, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        }, '-=0.5');

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
      <div className={styles.centerContent}>
        <h1 className={styles.title}>
          <span className={styles.inlineBlock}>Building</span>{' '}
          <span className={`${styles.inlineBlock} ${styles.gradientText}`}>The Future</span>{' '}
          <span className={styles.inlineBlock}>of Context</span>
        </h1>
        <p className={styles.subtitle}>
          Creative Developer • Student • Visionary behind FlowGent & Context Bridge
        </p>
      </div>

      <section className={styles.projectsSection}>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className="h-full">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>

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

      <div className={styles.backgroundOverlay}>
        <div className={`${styles.blob} ${styles.blobBlue}`}></div>
        <div className={`${styles.blob} ${styles.blobPurple}`}></div>
        <div className={`${styles.blob} ${styles.blobPink}`}></div>
      </div>
    </main>
  );
}
