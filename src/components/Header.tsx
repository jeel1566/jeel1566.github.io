'use client';
import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                JEEL
            </Link>
            <nav className={styles.nav}>
                <Link href="#work" className={styles.navLink}>Work</Link>
                <Link href="#about" className={styles.navLink}>About</Link>
                <Link href="#contact" className={styles.navLink}>Contact</Link>
            </nav>
        </header>
    );
}
