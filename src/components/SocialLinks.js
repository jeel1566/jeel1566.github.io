// Component 9: SocialLinks
// Concepts: props (links array — array of objects)
function SocialLinks({ links = [] }) {
    return (
        <div className="social-links">
            {links.map(({ label, url }) => (
                <a
                    key={label}
                    href={url}
                    className="social-link-btn"
                    target="_blank"
                    rel="noreferrer"
                >
                    {label} ↗
                </a>
            ))}
        </div>
    );
}

export default SocialLinks;
