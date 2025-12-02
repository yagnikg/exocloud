import { Award, Users, Target, Lightbulb, Shield } from 'lucide-react';
import styles from './page.module.css';

export default function About() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">About Exocloud</h1>
                <p className="section-subtitle">
                    Building intelligent systems that reduce manual work and enable businesses to focus on their core operations.
                </p>

                {/* Story & Team */}
                <div className={styles.storySection}>
                    <div className={styles.storyContent}>
                        <h2 className={styles.heading}>Our Story</h2>
                        <p className={styles.text}>
                            Exocloud Technologies was founded with a singular mission: to bridge the gap between complex enterprise technology and business efficiency.
                            With over 25 years of combined experience, our core team consists of Oracle Certified Professionals who have successfully migrated over 500 databases
                            and optimized cloud infrastructure for businesses of all sizes.
                        </p>
                        <div className={styles.teamHighlight}>
                            <Users size={32} className={styles.icon} />
                            <div>
                                <h3 className={styles.highlightTitle}>Expert Team</h3>
                                <p className={styles.highlightText}>
                                    Our team comprises seasoned experts in Oracle Cloud, AI integration, and enterprise automation.
                                    We bring deep technical knowledge and a strategic approach to every project.
                                </p>
                            </div>
                        </div>
                        <div className={styles.teamHighlight}>
                            <Award size={32} className={styles.icon} />
                            <div>
                                <h3 className={styles.highlightTitle}>Certified Excellence</h3>
                                <p className={styles.highlightText}>
                                    We are proud to be an Oracle Certified Team, ensuring that our solutions meet the highest standards of reliability, security, and performance.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imagePlaceholder}>
                        <span>Team / Office Image</span>
                    </div>
                </div>

                {/* Mission, Vision, Values */}
                <div className={styles.valuesSection}>
                    <div className={styles.valueCard}>
                        <Target size={40} className={styles.valueIcon} />
                        <h3>Mission</h3>
                        <p>To provide future-ready automation and AI-enhanced enterprise systems that drive growth and efficiency.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <Lightbulb size={40} className={styles.valueIcon} />
                        <h3>Vision</h3>
                        <p>To build intelligent ecosystems where businesses operate seamlessly with minimal manual intervention.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <Shield size={40} className={styles.valueIcon} />
                        <h3>Values</h3>
                        <p>Innovation, Transparency, Reliability, and Automation-First Thinking.</p>
                    </div>
                </div>

                {/* Timeline */}
                <div className={styles.timelineSection}>
                    <h2 className={styles.heading} style={{ textAlign: 'center' }}>Our Journey</h2>
                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.year}>2020</div>
                            <div className={styles.milestone}>
                                <h3>Inception</h3>
                                <p>Exocloud founded with a focus on Oracle Database migration.</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.year}>2022</div>
                            <div className={styles.milestone}>
                                <h3>Expansion</h3>
                                <p>Expanded services to include AI integration and custom ERP development.</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.year}>2024</div>
                            <div className={styles.milestone}>
                                <h3>Innovation</h3>
                                <p>Launched Printspace and AccuTrack products for Industry 4.0.</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.year}>Future</div>
                            <div className={styles.milestone}>
                                <h3>Global Scale</h3>
                                <p>Expanding our footprint to global markets with advanced healthcare automation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
