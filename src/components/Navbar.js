// Component 1: Navbar
// Concepts: useContext (NavContext), useState (mobile menu), Link (routing)
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNav } from './NavContext';

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' },
    { label: 'Contact', path: '/contact' },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { activePage, setActivePage } = useNav();
    const location = useLocation();

    useEffect(() => {
        setActivePage(location.pathname);
        setMenuOpen(false);
    }, [location.pathname, setActivePage]);

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">JEEL.</Link>

                <div className="navbar-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${activePage === link.path ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <button
                    type="button"
                    className="navbar-hamburger"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </nav>

            <div id="mobile-navigation" className={`navbar-mobile-menu ${menuOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`nav-link ${activePage === link.path ? 'active' : ''}`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Navbar;
