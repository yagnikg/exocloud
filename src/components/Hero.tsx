'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    const handleScroll = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        const target = document.getElementById('trusted-by');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className={styles.hero}>
            <Image
                src="/images/hero-bg.png"
                alt="Futuristic Background"
                fill
                className={styles.backgroundImage}
                priority
            />
            <div className={styles.overlay} />

            <div className={styles.container}>
                <div className={styles.title}>
                    Future-Ready <br />
                    <span className={styles.highlight} data-text="INTELLIGENCE">INTELLIGENCE</span>
                </div>
                <p className={styles.subtitle}>
                    Migrate, Optimize, and Automate with AI-driven precision.
                    We engineer the digital backbone for the next generation of enterprises.
                </p>
                <div className={styles.actions}>
                    <Link href="/contact" className="btn btn-primary">
                        Start Evolution
                    </Link>
                    <Link href="/services" className="btn btn-secondary">
                        Explore Systems
                    </Link>
                </div>
                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>500+</span>
                        <span className={styles.statLabel}>Databases Migrated**</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>Upto 45%</span>
                        <span className={styles.statLabel}>Cloud OPS Cost Reduction</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>24/7</span>
                        <span className={styles.statLabel}>Support</span>
                    </div>
                </div>
            </div>

            <div onClick={handleScroll} className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <div className={styles.arrows}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </section>
    );
}
