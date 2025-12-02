'use client';

import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={styles.navbar} style={{
            background: scrolled
                ? (theme === 'light' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(5, 5, 5, 0.8)')
                : (theme === 'light' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(10, 10, 10, 0.4)'),
            width: scrolled ? '95%' : '90%',
            borderColor: theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.08)'
        }}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    EXOCLOUD
                </Link>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    <Link href="/services" className={styles.link}>Services</Link>
                    <Link href="/products" className={styles.link}>Products</Link>
                    <Link href="/about" className={styles.link}>About</Link>
                    <Link href="/contact" className={styles.link}>Contact</Link>
                    <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
                        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                    </button>
                </div>

                {/* Mobile Controls */}
                <div className={styles.mobileControls}>
                    <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
                        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                    </button>
                    <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className={styles.mobileMenu}>
                        <Link href="/services" className={styles.link} onClick={() => setIsOpen(false)}>Services</Link>
                        <Link href="/products" className={styles.link} onClick={() => setIsOpen(false)}>Products</Link>
                        <Link href="/about" className={styles.link} onClick={() => setIsOpen(false)}>About</Link>
                        <Link href="/contact" className={styles.link} onClick={() => setIsOpen(false)}>Contact</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
