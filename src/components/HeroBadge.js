// Component 2: HeroBadge
// Concepts: props (text, dotColor)
function HeroBadge({ text, dotColor = '#32d74b' }) {
    return (
        <div className="hero-badge">
            <span className="hero-badge-dot" style={{ background: dotColor }} />
            <span className="hero-badge-text">{text}</span>
        </div>
    );
}

export default HeroBadge;
