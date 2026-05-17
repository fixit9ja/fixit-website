import Layout from '../components/Layout';
import { useState } from 'react';
import s from './contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', service:'', message:'' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = e => setForm({...form, [e.target.name]: e.target.value});

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://formspree.io/f/xnjrazgq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
      } else {
        alert('Something went wrong. Please try again or email us directly at fixit.9ja@gmail.com');
      }
    } catch (err) {
      alert('Something went wrong. Please try again or email us directly at fixit.9ja@gmail.com');
    }
    setLoading(false);
  };

  return (
    <Layout title="Contact" description="Contact Fix-It Handyman Limited, Abuja and Lagos offices. Engineering, construction, and technical services across Nigeria.">

      <section className={s.hero}>
        <div className={s.heroBg}>
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80" alt="" />
          <div className={s.heroMask} />
        </div>
        <div className={`container ${s.heroContent}`}>
          <p className="eyebrow">Get in Touch</p>
          <h1>Contact Us</h1>
          <p>Our team will respond within one business day.</p>
        </div>
      </section>

      <section className={s.main}>
        <div className="container">
          <div className={s.layout}>

            {/* FORM */}
            <div className={s.formWrap}>
              <h2>Send Us a Message</h2>
              <p>Tell us about your project and we'll respond with a tailored quote.</p>
              {sent ? (
                <div className={s.success}>
                  <span>✅</span>
                  <div>
                    <strong>Message Received!</strong>
                    <p>Thank you, we will be in touch within one business day.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className={s.form}>
                  <div className={s.row}>
                    <div className={s.field}>
                      <label htmlFor="name">Full Name *</label>
                      <input id="name" name="name" type="text" required placeholder="e.g. Emeka Okafor" value={form.name} onChange={onChange} />
                    </div>
                    <div className={s.field}>
                      <label htmlFor="email">Email *</label>
                      <input id="email" name="email" type="email" required placeholder="you@example.com" value={form.email} onChange={onChange} />
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.field}>
                      <label htmlFor="phone">Phone Number</label>
                      <input id="phone" name="phone" type="tel" placeholder="+234 xxx xxx xxxx" value={form.phone} onChange={onChange} />
                    </div>
                    <div className={s.field}>
                      <label htmlFor="service">Service Required</label>
                      <select id="service" name="service" value={form.service} onChange={onChange}>
                        <option value="">Select a service...</option>
                        <optgroup label="Main Services">
                          <option>Engineering & General Contracting</option>
                          <option>Hydrographic Equipment Services</option>
                          <option>Marine Survey Support</option>
                          <option>Handyman & Maintenance</option>
                          <option>Medical Facility Setup</option>
                          <option>IT Infrastructure</option>
                          <option>Equipment Procurement</option>
                        </optgroup>
                        <optgroup label="Divisions">
                          <option>Fix-It Air Conditioner</option>
                          <option>Fix-It Painters</option>
                          <option>Fix-It Safety Services</option>
                        </optgroup>
                        <option>Other / Not Sure</option>
                      </select>
                    </div>
                  </div>
                  <div className={s.field}>
                    <label htmlFor="message">Project Details *</label>
                    <textarea id="message" name="message" required rows={5} placeholder="Describe your project, location, requirements, or any questions..." value={form.message} onChange={onChange} />
                  </div>
                  <button type="submit" className={`btn btn-red ${s.submit}`} disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>

            {/* INFO */}
            <div className={s.info}>
              <div className={s.infoCard}>
                <h3>Contact Information</h3>
                <div className={s.infoItem}>
                  <span>📞</span>
                  <div><strong>Phone</strong><a href="tel:+2349021111193">+234 902 111 1193</a></div>
                </div>
                <div className={s.infoItem}>
                  <span>✉️</span>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:fixit.9ja@gmail.com">fixit.9ja@gmail.com</a>
                  </div>
                </div>
                <div className={s.infoItem}>
                  <span>🌐</span>
                  <div><strong>Website</strong><a href="https://www.fix-it.ng" target="_blank" rel="noopener noreferrer">www.fix-it.ng</a></div>
                </div>

                <div className={s.divider} />

                <h4>Our Offices</h4>
                <div className={s.office}>
                  <span>🏢</span>
                  <div>
                    <strong>Head Office, Abuja</strong>
                    <span>Suite B-005, Quad Plaza, Ameh Ebute St, Wuye District, Abuja-FCT</span>
                  </div>
                </div>
                <div className={s.office}>
                  <span>🏙️</span>
                  <div>
                    <strong>Lagos Office</strong>
                    <span>3, Oyedele Ogunniyi St, Anthony Village, Lagos State</span>
                  </div>
                </div>

                <div className={s.divider} />

                <h4>Business Hours</h4>
                <div className={s.hoursTable}>
                  <div className={s.hoursRow}>
                    <span>Monday – Friday</span>
                    <strong>9:00 AM – 5:00 PM</strong>
                  </div>
                  <div className={s.hoursRow}>
                    <span>Saturday</span>
                    <strong className={s.appt}>By Appointment</strong>
                  </div>
                  <div className={s.hoursRow}>
                    <span>Sunday</span>
                    <strong className={s.appt}>By Appointment</strong>
                  </div>
                </div>
                <p className={s.hoursNote}>* Weekend appointments must be booked in advance via phone or email.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
