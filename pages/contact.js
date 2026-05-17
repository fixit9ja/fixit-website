import Layout from '../components/Layout';
import { useState } from 'react';
import styles from './contact.module.css';

const OFFICES = [
  {
    city: 'Abuja (Head Office)',
    addr: 'Suite B-005, Quad Plaza, Ameh Ebute Street, Wuye District, Abuja-FCT',
    icon: '🏢',
  },
  {
    city: 'Lagos Office',
    addr: '3, Oyedele Ogunniyi Street, Anthony Village, Lagos State',
    icon: '🏙️',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // In production connect to Formspree, Netlify Forms, or your API
    setSent(true);
  };

  return (
    <Layout title="Contact Us" description="Contact Fix-It Handyman Limited for engineering, construction, hydrographic services, and technical solutions across Nigeria.">

      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80" alt="Contact" />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className="section-label">Get in Touch</span>
          <h1>Contact Us</h1>
          <p>Ready to start your project? Reach out and our team will respond within one business day.</p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>

            {/* Form */}
            <div className={styles.formWrap}>
              <h2>Send Us a Message</h2>
              <p>Fill in the form below and our team will be in touch with a tailored response.</p>

              {sent ? (
                <div className={styles.successMsg}>
                  <span>✅</span>
                  <div>
                    <strong>Message Sent!</strong>
                    <p>Thank you for reaching out. We'll respond within one business day.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name *</label>
                      <input id="name" name="name" type="text" required placeholder="e.g. Emeka Okafor"
                        value={form.name} onChange={handleChange} />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address *</label>
                      <input id="email" name="email" type="email" required placeholder="you@example.com"
                        value={form.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input id="phone" name="phone" type="tel" placeholder="+234 xxx xxx xxxx"
                        value={form.phone} onChange={handleChange} />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="service">Service Required</label>
                      <select id="service" name="service" value={form.service} onChange={handleChange}>
                        <option value="">Select a service...</option>
                        <option>Engineering & General Contracting</option>
                        <option>Hydrographic Equipment Services</option>
                        <option>Marine Survey Support</option>
                        <option>Handyman & Maintenance</option>
                        <option>Medical Facility Setup</option>
                        <option>IT Infrastructure</option>
                        <option>Equipment Procurement</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Project Details *</label>
                    <textarea id="message" name="message" required rows={5}
                      placeholder="Please describe your project, requirements, or question..."
                      value={form.message} onChange={handleChange} />
                  </div>
                  <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                    Send Message →
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className={styles.infoWrap}>
              <div className={styles.infoCard}>
                <h3>Contact Information</h3>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📞</span>
                  <div>
                    <strong>Phone</strong>
                    <a href="tel:+2349021111193">+234 902 111 1193</a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>✉️</span>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:info@fix-it.ng">info@fix-it.ng</a>
                    <a href="mailto:fixit.9ja@gmail.com">fixit.9ja@gmail.com</a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>🌐</span>
                  <div>
                    <strong>Website</strong>
                    <a href="https://www.fix-it.ng" target="_blank" rel="noopener noreferrer">www.fix-it.ng</a>
                  </div>
                </div>

                <div className={styles.divider} />

                <h4>Our Offices</h4>
                {OFFICES.map(o => (
                  <div key={o.city} className={styles.officeItem}>
                    <span>{o.icon}</span>
                    <div>
                      <strong>{o.city}</strong>
                      <span>{o.addr}</span>
                    </div>
                  </div>
                ))}

                <div className={styles.divider} />

                <div className={styles.hours}>
                  <h4>Business Hours</h4>
                  <div className={styles.hoursRow}>
                    <span>Monday – Friday</span>
                    <span>8:00 AM – 5:00 PM</span>
                  </div>
                  <div className={styles.hoursRow}>
                    <span>Saturday</span>
                    <span>9:00 AM – 2:00 PM</span>
                  </div>
                  <div className={styles.hoursRow}>
                    <span>Sunday</span>
                    <span>By appointment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
