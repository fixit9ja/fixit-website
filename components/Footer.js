import Link from 'next/link';
import styles from './Footer.module.css';

const LOGO_URL = 'https://res.cloudinary.com/dbjahorp6/image/upload/v1778979476/FIX-IT_HANYMAN_u0w1ko.png';

const SERVICES = [
  'Engineering & Contracting',
  'Hydrographic Equipment',
  'Marine Survey Support',
  'Handyman Services',
  'Medical Facilities',
  'IT Infrastructure',
  'Equipment Procurement',
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topBar} />

      <div className="container">
        <div className={styles.grid}>

          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logoMark}><img src={LOGO_URL} alt="Fix-It Handyman Limited" className={styles.logoImg} /></div>
            <h3>Fix-It Handyman Limited</h3>
            <p>
              A multi-disciplinary engineering and technical services company delivering
              excellence across Nigeria since 2017.
            </p>
            <div className={styles.regInfo}>
              <span>RC: 1385277</span>
              <span>TIN: 20204119-0001</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h4>Quick Links</h4>
            <ul>
              {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'],
                ['/projects', 'Projects'], ['/contact', 'Contact']].map(([href, label]) => (
                <li key={href}><Link href={href}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.col}>
            <h4>Our Services</h4>
            <ul>
              {SERVICES.map(s => (
                <li key={s}><Link href="/services">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4>Contact Us</h4>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.icon}>📍</span>
                <span>Suite B-005, Quad Plaza, Ameh Ebute St, Wuye District, Abuja-FCT</span>
              </li>
              <li>
                <span className={styles.icon}>📍</span>
                <span>3, Oyedele Ogunniyi St, Anthony Village, Lagos</span>
              </li>
              <li>
                <span className={styles.icon}>📞</span>
                <a href="tel:+2349021111193">+234 902 111 1193</a>
              </li>
              <li>
                <span className={styles.icon}>✉️</span>
                <a href="mailto:info@fix-it.ng">info@fix-it.ng</a>
              </li>
              <li>
                <span className={styles.icon}>🌐</span>
                <a href="https://www.fix-it.ng" target="_blank" rel="noopener noreferrer">www.fix-it.ng</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Fix-It Handyman Limited. All rights reserved.</p>
          <p className={styles.compliance}>
            Fully compliant with CAC · FIRS · NSITF · ITF · BPP · NEMSA · SCUML
          </p>
        </div>
      </div>
    </footer>
  );
}
