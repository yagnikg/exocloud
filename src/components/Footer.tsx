import Link from 'next/link';
import { Mail, Phone, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <h3 className={styles.title}>Exocloud</h3>
                        <p className={styles.description}>
                            Empowering businesses with intelligent automation, cloud migration, and AI-driven solutions.
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.subtitle}>Quick Links</h4>
                        <Link href="/services" className={styles.link}>Services</Link>
                        <Link href="/products" className={styles.link}>Products</Link>
                        <Link href="/about" className={styles.link}>About Us</Link>
                        <Link href="/contact" className={styles.link}>Contact</Link>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.subtitle}>Contact</h4>
                        <div className={styles.contactItem}>
                            <Mail size={18} />
                            <a href="mailto:Yagnik@exocloud.in">Yagnik@exocloud.in</a>
                        </div>
                        <div className={styles.contactItem}>
                            <Phone size={18} />
                            <a href="tel:+919979681995">+91 99796 81995</a>
                        </div>
                        <div className={styles.contactItem}>
                            <Linkedin size={18} />
                            <a href="https://www.linkedin.com/company/110317805/admin/dashboard/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </div>
                </div>

                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Exocloud Technologies. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
