'use client';

import Image from 'next/image';
import styles from './ClientCarousel.module.css';

const clients = [
    { name: 'Intexo Oncology', url: 'https://intexo.in', logo: '/images/intexo.png' },
    { name: 'Kayapalat Care', url: 'https://www.kayapalatcare.com', logo: '/images/kayapalat.png' },
    { name: 'Anand Components', url: 'https://anandcomponents.com', logo: '/images/anand.png' },
    { name: 'Lakhani Cottons', url: 'https://www.lakhanicottons.com/', logo: '/images/lakhani.png' },
];

// Duplicate clients to ensure smooth infinite scroll
const allClients = [...clients, ...clients, ...clients, ...clients, ...clients, ...clients];

export default function ClientCarousel() {
    return (
        <section id="trusted-by" className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>Trusted by Our Clients</h2>
                <div className={styles.carousel}>
                    <div className={styles.track}>
                        {allClients.map((client, index) => (
                            <div key={index} className={styles.slide}>
                                <a href={client.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        width={200}
                                        height={60}
                                        className={styles.logo}
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
