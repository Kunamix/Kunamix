import React, { useState } from 'react'
import styles from './Page.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to Firebase or EmailJS
    console.log('Form submitted:', form)
    setSent(true)
  }

  return (
    <>
      <div className={styles.pageHero}>
        <div className={styles.pageBg} />
        <div className={styles.pageGrid} />
        <div className={styles.pageContent}>
          <p className={styles.pageTag}>Get In Touch</p>
          <h1 className={styles.pageTitle}>CONTACT US</h1>
          <p className={styles.pageSub}>Ready to build something great? Let's talk.</p>
        </div>
      </div>

      <section className={styles.contactPage}>
        <div className={styles.contactInfo}>
          <h2>LET'S START A CONVERSATION</h2>
          <p className={styles.bodyText}>Whether you have a project in mind, a question about our services, or just want to say hello — we'd love to hear from you.</p>
          <div className={styles.contactDetail}>📧 hello@kunamix.com</div>
          <div className={styles.contactDetail}>📞 +91 00000 00000</div>
          <div className={styles.contactDetail}>📍 India — Working Globally</div>
          <div style={{ marginTop: 32 }}>
            <p style={{ fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999', marginBottom: 12 }}>Response Time</p>
            <p style={{ fontSize: 15, color: '#555' }}>We typically respond within <strong style={{ color: '#0A0806' }}>24 hours</strong> on business days.</p>
          </div>
        </div>

        {sent ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start', justifyContent: 'center' }}>
            <span style={{ fontSize: 60 }}>✅</span>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, color: '#0A0806' }}>MESSAGE SENT!</h3>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.7 }}>Thanks for reaching out. We'll be in touch within 24 hours.</p>
            <button onClick={() => setSent(false)} className={styles.submitBtn} style={{ marginTop: 12 }}>Send Another</button>
          </div>
        ) : (
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <input className={styles.formInput} name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
              <input className={styles.formInput} name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
            </div>
            <input className={styles.formInput} name="company" placeholder="Company / Brand" value={form.company} onChange={handleChange} />
            <input className={styles.formInput} name="budget" placeholder="Project Budget (e.g. ₹50k–₹1L)" value={form.budget} onChange={handleChange} />
            <textarea className={styles.formTextarea} name="message" placeholder="Tell us about your project…" value={form.message} onChange={handleChange} required />
            <button type="submit" className={styles.submitBtn}>Send Message →</button>
          </form>
        )}
      </section>
    </>
  )
}
