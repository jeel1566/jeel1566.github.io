// Component 7: SkillBar
// Concepts: props (name, score, max), useEffect (trigger animation on mount)
import { useState, useEffect } from 'react';

function SkillBar({ name, score, max = 5 }) {
    const [animated, setAnimated] = useState(false);

    // useEffect — triggers bar animation after component mounts
    useEffect(() => {
        const timer = setTimeout(() => setAnimated(true), 150);
        return () => clearTimeout(timer);
    }, []);

    const percent = Math.round((score / max) * 100);

    return (
        <div className="skill-bar-wrapper">
            <div className="skill-bar-top">
                <span className="skill-bar-name">{name}</span>
                <span className="skill-bar-score">{score}/{max}</span>
            </div>
            <div className="skill-bar-track">
                <div
                    className="skill-bar-fill"
                    style={{ width: animated ? `${percent}%` : '0%' }}
                />
            </div>
        </div>
    );
}

export default SkillBar;
