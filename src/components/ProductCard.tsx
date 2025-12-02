import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    title: string;
    description: string;
    link: string;
    isComingSoon?: boolean;
}

export default function ProductCard({ title, description, link, isComingSoon }: ProductCardProps) {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            {isComingSoon ? (
                <span className={styles.comingSoon}>Launching Soon</span>
            ) : (
                <Link href={link} className={styles.link}>
                    Learn More <ArrowRight size={16} />
                </Link>
            )}
        </div>
    );
}
