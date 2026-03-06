// Component 10: Footer
// Concepts: static presentational component
function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer-left">
                <span className="footer-logo">JEEL.</span> Copyright {currentYear} | B.Sc IT | JG University
            </p>
            <p className="footer-right">Built with React and CSS</p>
        </footer>
    );
}

export default Footer;
