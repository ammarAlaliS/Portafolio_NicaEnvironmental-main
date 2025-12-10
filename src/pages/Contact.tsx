import { useState } from 'react'
import PageLayout from '../components/PageLayout'
import Footer from '../components/Footer'
import styles from '../styles/PageLayout.module.css'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert('Thank you for your message! I will get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <PageLayout>
            <div className={styles.contentWrapper}>
                <h1 className={styles.pageTitle}>Contact Me</h1>

                <div className={styles.contactLayout}>
                    <div className={styles.contactInfo}>
                        <h2 className={styles.sectionTitle}>Get in Touch</h2>
                        <p className={styles.contactDescription}>
                            I'm always interested in new opportunities, collaborations, and discussions about
                            environmental engineering solutions. Feel free to reach out!
                        </p>

                        <div className={styles.contactDetails}>
                            <div className={styles.contactItem}>
                                <span className={styles.contactIcon}>📧</span>
                                <div>
                                    <h3 className={styles.contactLabel}>Email</h3>
                                    <p className={styles.contactValue}>contact@nicaenvironmental.com</p>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <span className={styles.contactIcon}>📱</span>
                                <div>
                                    <h3 className={styles.contactLabel}>Phone</h3>
                                    <p className={styles.contactValue}>+505 1234 5678</p>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <span className={styles.contactIcon}>📍</span>
                                <div>
                                    <h3 className={styles.contactLabel}>Location</h3>
                                    <p className={styles.contactValue}>Managua, Nicaragua</p>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <span className={styles.contactIcon}>🔗</span>
                                <div>
                                    <h3 className={styles.contactLabel}>LinkedIn</h3>
                                    <p className={styles.contactValue}>linkedin.com/in/nicaenvironmental</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contactForm}>
                        <h2 className={styles.sectionTitle}>Send a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.formLabel}>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={styles.formInput}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.formLabel}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={styles.formInput}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="subject" className={styles.formLabel}>Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={styles.formInput}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.formLabel}>Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={styles.formTextarea}
                                    rows={6}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className={styles.submitButton}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </PageLayout>
    )
}
