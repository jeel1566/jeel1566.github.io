// Component 6: ProjectCard
// Concepts: props (title, desc, tags, demo)
function ProjectCard({ title, desc, tags = [], demo }) {
    return (
        <div className="project-card">
            {/* Image placeholder area */}
            <div className="project-card-img">
                PROJECT PREVIEW
            </div>

            {/* Tags row */}
            <div className="project-card-tags">
                {tags.map((tag, i) => (
                    <span
                        key={tag}
                        className={`project-tag ${i === 0 ? 'accent' : 'muted'}`}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Title */}
            <h3 className="project-card-title">{title}</h3>

            {/* Description */}
            <p className="project-card-desc">{desc}</p>

            {/* Live demo link */}
            {demo && (
                <a
                    href={demo}
                    className="project-card-link"
                    target="_blank"
                    rel="noreferrer"
                >
                    LIVE DEMO →
                </a>
            )}
        </div>
    );
}

export default ProjectCard;
