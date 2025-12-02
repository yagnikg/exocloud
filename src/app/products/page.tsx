import { Printer, Activity, HeartPulse } from 'lucide-react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Products() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">Our Products</h1>
                <p className="section-subtitle">Cutting-edge software solutions designed to transform industries.</p>

                <div className={styles.productList}>
                    {/* Printspace */}
                    <div id="printspace" className={styles.productSection}>
                        <div className={styles.productContent}>
                            <div className={styles.iconWrapper}>
                                <Printer size={48} />
                            </div>
                            <h2 className={styles.productTitle}>PrintSpace</h2>
                            <p className={styles.productTagline}>Smart AI and NLP Based ERP for Garment Manufacturing</p>
                            <p className={styles.productDescription}>
                                Revolutionize your garment manufacturing process with our intelligent ERP.
                                PrintSpace leverages AI and NLP to streamline operations, optimize inventory,
                                and enhance decision-making.
                            </p>
                            <ul className={styles.featureList}>
                                <li>AI-driven demand forecasting</li>
                                <li>NLP-based command interface</li>
                                <li>Real-time production tracking</li>
                                <li>Automated inventory management</li>
                                <li>Automated quality control</li>
                                <li>Packing and dispatch control</li>
                                <li>Multi warehouse management</li>
                                <li>Jobwork and sub-contracting management</li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary">Request Demo</Link>
                        </div>
                        <div className={styles.productImagePlaceholder}>
                            <Image
                                src="/images/printspace_pali_factory_manager_1764705195273.png"
                                alt="PrintSpace - Pali Textile Factory Manager"
                                fill
                                className={styles.productImage}
                            />
                        </div>
                    </div>

                    {/* AccuTrack */}
                    <div id="accutrack" className={styles.productSection}>
                        <div className={styles.productContent}>
                            <div className={styles.iconWrapper}>
                                <Activity size={48} />
                            </div>
                            <h2 className={styles.productTitle}>AccuTrack</h2>
                            <p className={styles.productTagline}>Intelligent Asset, HR & Inventory Tracking for Industry 4.0</p>
                            <p className={styles.productDescription}>
                                Gain complete visibility and control over your assets and workforce.
                                AccuTrack integrates seamlessly with IoT devices to provide real-time insights
                                and automated tracking.
                            </p>
                            <ul className={styles.featureList}>
                                <li>Real-time Machines tracking</li>
                                <li>Automated attendance & People Time management</li>
                                <li>Employee's productivity tracking</li>
                                <li>Inventory management</li>
                                <li>QA Reports and testing</li>
                                <li>Predective machine maintenance and costing</li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary">Request Demo</Link>
                        </div>
                        <div className={styles.productImagePlaceholder}>
                            <Image
                                src="/images/accutrack_cnc_worker_landscape_1764705209304.png"
                                alt="AccuTrack - CNC Worker"
                                fill
                                className={styles.productImage}
                            />
                        </div>
                    </div>

                    {/* Healthcare Automation */}
                    <div className={styles.productSection}>
                        <div className={styles.productContent}>
                            <div className={styles.iconWrapper}>
                                <HeartPulse size={48} />
                            </div>
                            <h2 className={styles.productTitle}>We’re Cooking Something Big</h2>
                            <span className={styles.comingSoonBadge}>Launching Soon</span>
                            <p className={styles.productDescription}>
                                Don't blink, it's coming soon! Trust us, it's going to be something Healthy.
                            </p>
                            <p className={styles.notifyText}>Be the first to know when we launch.</p>
                            <Link href="/contact" className="btn btn-secondary">Join Waitlist</Link>
                        </div>
                        <div className={`${styles.productImagePlaceholder} ${styles.comingSoonPlaceholder}`}>
                            <Image
                                src="/images/healthcare_coming_soon_landscape_1764705224992.png"
                                alt="Coming Soon - Healthcare"
                                fill
                                className={styles.productImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
