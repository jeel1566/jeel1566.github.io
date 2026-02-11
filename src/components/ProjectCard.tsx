'use client';
import styles from './project-card.module.css';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    gradient?: string;
}

export default function ProjectCard({ title, description, tags, gradient }: ProjectCardProps) {
    return (
        <div className={styles.card}>
            <div
                className={styles.imageContainer}
                style={{ background: gradient || undefined }}
            >
                <div className={styles.imageOverlay} />
            </div>
            <div className={styles.content}>
                <div>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                </div>
                <div className={styles.tags}>
                    {tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
