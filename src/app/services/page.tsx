import { Cloud, Database, Cpu, ShoppingCart, Headphones } from 'lucide-react';
import styles from './page.module.css';

const services = [
    {
        id: 'oracle-cloud',
        title: 'Oracle Cloud Services',
        icon: <Cloud size={40} />,
        features: [
            'OCI migration (500+ instances experience)',
            'Autonomous DB setup & tuning',
            'DBCS configuration',
            'Cloud cost optimization (45% savings)',
            'Backup, HA, DR and security hardening'
        ]
    },
    {
        id: 'apex-development',
        title: 'Oracle APEX & App Development',
        icon: <Database size={40} />,
        features: [
            'Custom APEX apps',
            'ERP automation',
            'Workflow digitization',
            'API integrations',
            'AI-powered enhancements'
        ]
    },
    {
        id: 'ai-integration',
        title: 'AI Integration & Automation',
        icon: <Cpu size={40} />,
        features: [
            'Embedded AI modules in enterprise apps',
            'Document automation',
            'NLP-based data entry reduction',
            'AI chat assistants for ERP & CRM'
        ]
    },
    {
        id: 'ecommerce',
        title: 'E-Commerce Development',
        icon: <ShoppingCart size={40} />,
        features: [
            'High-speed storefronts',
            'Cosmetics brand optimization',
            'Stable backend integrations',
            'Secure checkout flows'
        ]
    },
    {
        id: 'consulting',
        title: 'IT Consulting & Support',
        icon: <Headphones size={40} />,
        features: [
            'DBA support',
            'System architecture',
            'Performance tuning',
            'Custom automation'
        ]
    }
];

export default function Services() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">Our Services</h1>
                <p className="section-subtitle">Comprehensive solutions for modern enterprises, from cloud migration to AI-driven automation.</p>

                <div className={styles.grid}>
                    {services.map((service) => (
                        <div key={service.id} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>
                            <h2 className={styles.cardTitle}>{service.title}</h2>
                            <ul className={styles.list}>
                                {service.features.map((feature, index) => (
                                    <li key={index} className={styles.listItem}>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
