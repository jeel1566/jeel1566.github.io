// Component 4: CTAButton
// Concepts: props (text, variant, to, href, onClick)
import { Link } from 'react-router-dom';

function CTAButton({ text, variant = 'primary', to, href, onClick }) {
    const className = `cta-btn ${variant}`;

    // Internal route link
    if (to) {
        return <Link to={to} className={className}>{text}</Link>;
    }

    // External link
    if (href) {
        return (
            <a href={href} className={className} target="_blank" rel="noreferrer">
                {text}
            </a>
        );
    }

    // Normal button
    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    );
}

export default CTAButton;
