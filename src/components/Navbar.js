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
    // useState — toggle mobile hamburger menu
    const [menuOpen, setMenuOpen] = useState(false);

    // useContext — read & update active page
    const { activePage, setActivePage } = useNav();

    // Sync active page with URL on route change
    const location = useLocation();
    useEffect(() => {
        setActivePage(location.pathname);
        setMenuOpen(false); // close menu on route change
    }, [location.pathname, setActivePage]);

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">JEEL.</Link>

                <div className="navbar-links">
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${activePage === link.path ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Hamburger — useState toggle */}
                <div
                    className="navbar-hamburger"
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </div>
            </nav>

            {/* Mobile dropdown menu */}
            <div className={`navbar-mobile-menu ${menuOpen ? 'open' : ''}`}>
                {navLinks.map(link => (
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
