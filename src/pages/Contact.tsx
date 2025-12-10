import { useState } from 'react'
import emailjs from '@emailjs/browser'
import PageLayout from '../components/PageLayout'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import { triggerConfetti } from '../utils/confetti'
import { EMAILJS_CONFIG } from '../config/emailjs'
import styles from '../styles/PageLayout.module.css'
import modalStyles from '../styles/Modal.module.css'
import data from '../data/data.json'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  // const [submitted, setSubmitted] = useState(false) // Replaced by Modal
  const [sending, setSending] = useState(false)
  // const [error, setError] = useState<string | null>(null) // Replaced by Modal

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'success' | 'error' | null;
    title: string;
    message: string;
    details?: string;
  }>({
    isOpen: false,
    type: null,
    title: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // setError(null)

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      // Success!
      triggerConfetti()
      // setSubmitted(true)
      setModalState({
        isOpen: true,
        type: 'success',
        title: 'Success!',
        message: '🎉 Thank you! Your message has been sent successfully!'
      })

      setFormData({ name: '', email: '', subject: '', message: '' })

    } catch (err: any) {
      console.error('EmailJS Error:', err)
      // setError('Failed to send message. Please try emailing directly.')
      setModalState({
        isOpen: true,
        type: 'error',
        title: 'Error Sending Message',
        message: '⚠️ Failed to send message. Please try emailing directly.',
        details: JSON.stringify(err, Object.getOwnPropertyNames(err), 2) // Capture full error object
      })
    } finally {
      setSending(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }))
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
                  <p className={styles.contactValue}>
                    <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
                  </p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📱</span>
                <div>
                  <h3 className={styles.contactLabel}>Phone</h3>
                  <p className={styles.contactValue}>
                    <a href={`tel:${data.contact.phone}`}>{data.contact.phone}</a>
                  </p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <div>
                  <h3 className={styles.contactLabel}>Location</h3>
                  <p className={styles.contactValue}>{data.contact.location}</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>🔗</span>
                <div>
                  <h3 className={styles.contactLabel}>LinkedIn</h3>
                  <p className={styles.contactValue}>
                    <a href={`https://${data.contact.linkedin}`} target="_blank" rel="noopener noreferrer">
                      {data.contact.linkedin}
                    </a>
                  </p>
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
                  disabled={sending}
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
                  disabled={sending}
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
                  disabled={sending}
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
                  disabled={sending}
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton} disabled={sending}>
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </form>


          </div>
        </div>
      </div>
      <Footer />

      <Modal isOpen={modalState.isOpen} onClose={closeModal}>
        <div style={{ textAlign: 'center' }}>
          <h1 className={modalStyles.modalTitle} style={{
            color: modalState.type === 'error' ? '#ef4444' : '#10b981',
            marginBottom: '1rem'
          }}>
            {modalState.title}
          </h1>

          <p className={modalStyles.modalDescription}>
            {modalState.message}
          </p>

          {modalState.type === 'error' && modalState.details && (
            <div style={{
              marginTop: '2rem',
              padding: '1rem',
              background: '#f3f4f6',
              borderRadius: '8px',
              textAlign: 'left',
              overflow: 'auto',
              maxHeight: '200px'
            }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Technical Details:</p>
              <pre style={{ fontSize: '0.8rem', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                {modalState.details}
              </pre>
            </div>
          )}
        </div>
      </Modal>
    </PageLayout>
  )
}
