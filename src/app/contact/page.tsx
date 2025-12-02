'use client';

import { Mail, Phone, MapPin, Clock, Linkedin, Send, Loader2 } from 'lucide-react';
import styles from './page.module.css';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Replace these with your actual EmailJS credentials
        const serviceId = 'service_7kqz8yy';
        const templateId = 'template_iir8izv';
        const publicKey = 'rdfhli0sr3g0eAC_J';

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                },
                publicKey
            );
            alert('Thank you! Your message has been sent successfully.');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            alert('Failed to send message. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">Contact Us</h1>
                <p className="section-subtitle">Get in touch with our team to discuss your cloud migration and automation needs.</p>

                <div className={styles.grid}>
                    {/* Contact Info */}
                    <div className={styles.infoColumn}>
                        <div className={styles.infoCard}>
                            <h2 className={styles.cardTitle}>Get in Touch</h2>

                            <div className={styles.contactItem}>
                                <Mail className={styles.icon} />
                                <div>
                                    <h3>Email</h3>
                                    <a href="mailto:Yagnik@exocloud.in">Yagnik@exocloud.in</a>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <Phone className={styles.icon} />
                                <div>
                                    <h3>Phone</h3>
                                    <a href="tel:+919979681995">+91 99796 81995</a>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <Linkedin className={styles.icon} />
                                <div>
                                    <h3>LinkedIn</h3>
                                    <a href="https://www.linkedin.com/company/110317805/admin/dashboard/" target="_blank" rel="noopener noreferrer">Follow us on LinkedIn</a>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <Clock className={styles.icon} />
                                <div>
                                    <h3>Support Hours</h3>
                                    <p>Mon - Fri: 9:00 AM - 6:00 PM IST</p>
                                    <p>24/7 Support for Critical Issues</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.mapPlaceholder}>
                            <MapPin size={48} className={styles.mapIcon} />
                            <span>Google Maps Placeholder</span>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={styles.formColumn}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <h2 className={styles.cardTitle}>Send us a Message</h2>

                            <div className={styles.formGroup}>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 98765 43210"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="How can we help you?"
                                    rows={5}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
                                {loading ? (
                                    <>Sending... <Loader2 size={18} className="animate-spin" style={{ marginLeft: '0.5rem' }} /></>
                                ) : (
                                    <>Send Message <Send size={18} style={{ marginLeft: '0.5rem' }} /></>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
