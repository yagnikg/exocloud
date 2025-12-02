import Hero from '@/components/Hero';
import ClientCarousel from '@/components/ClientCarousel';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, TrendingUp, ShieldCheck } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Hero />
      <ClientCarousel />

      {/* Products Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <b><p className="section-subtitle">Designed for companies. Built for people.</p></b>
          <div className={styles.grid}>
            <ProductCard
              title="PrintSpace"
              description="Smart AI and NLP Based ERP for the garment manufacturing industry. Streamline operations and boost efficiency."
              link="/products#printspace"
            />
            <ProductCard
              title="AccuTrack"
              description="Intelligent asset, Human Resources & inventory tracking system designed for Industry 4.0."
              link="/products#accutrack"
            />
            <ProductCard
              title="We’re Cooking Something Big"
              description="Don't blink, it's coming soon! <br> Trust us, it's going to be something Healthy."
              link="#"
              isComingSoon
            />
          </div>
        </div>
      </section>

      {/* E-Commerce Section */}
      <section className={`section ${styles.ecommerceSection}`}>
        <div className="container">
          <div className={styles.split}>
            <div className={styles.content}>
              <h2 className="section-title" style={{ textAlign: 'left' }}>High-Performance E-Commerce</h2>
              <p className={styles.text}>
                We transform struggling online stores into high-speed, scalable powerhouses.
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <CheckCircle className={styles.icon} />
                  <span>Migrated crashing stores to stable architectures in minimal time.</span>
                </li>
                <li className={styles.listItem}>
                  <TrendingUp className={styles.icon} />
                  <span>1.5+ years of zero performance issues or crashes.</span>
                </li>
                <li className={styles.listItem}>
                  <ShieldCheck className={styles.icon} />
                  <span>Proven improvements in speed, conversion, and UX for cosmetic brands.</span>
                </li>
              </ul>
            </div>
            <div className={styles.imagePlaceholder}>
              <Image
                src="/images/ecommerce_dashboard_ui_1764703482483.png"
                alt="E-Commerce Dashboard"
                fill
                className={styles.dashboardImage}
              />
              <div className={styles.statCard}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statText}>Uptime</span>
              </div>
              <div className={styles.statCard} style={{ top: '60%', right: '-20px' }}>
                <span className={styles.statNumber}>3x</span>
                <span className={styles.statText}>Faster Load</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
