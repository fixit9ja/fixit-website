import Layout from '../components/Layout';
import Link from 'next/link';
import styles from './index.module.css';

const STATS = [
  { value: '8+',  label: 'Years in Operation' },
  { value: '7',   label: 'Service Divisions' },
  { value: '200+',label: 'Projects Completed' },
  { value: '2',   label: 'National Offices' },
];

const SERVICES_PREVIEW = [
  {
    icon: '🏗️',
    title: 'Engineering & Contracting',
    desc: 'Large-scale construction, structural design, and infrastructure development delivered to international standards.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  },
  {
    icon: '🌊',
    title: 'Hydrographic Services',
    desc: 'Maintenance, calibration, and field support for marine and oceanographic survey equipment.',
    img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80',
  },
  {
    icon: '🔧',
    title: 'Handyman & Maintenance',
    desc: 'Plumbing, electrical, carpentry, HVAC, and general property repairs for homes and businesses.',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
  },
  {
    icon: '🏥',
    title: 'Medical Facility Setup',
    desc: 'Design, construction, and equipping of modern hospitals, clinics, and fertility centres.',
    img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80',
  },
  {
    icon: '💻',
    title: 'IT Infrastructure',
    desc: 'Secure data networks, cybersecurity solutions, and IT systems for businesses and institutions.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
  },
  {
    icon: '📦',
    title: 'Equipment Procurement',
    desc: 'Sourcing and supplying marine, hydrographic, industrial, and specialised technical equipment.',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
  },
];

const TRUST_LOGOS = [
  'Kongsberg', 'Teledyne', 'Trimble', 'Emerson', 'Fouani Group', 'Honeywell',
];

export default function Home() {
  return (
    <Layout>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=85"
            alt="Engineering and construction"
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            <span className={styles.pulse} />
            Registered with CAC · RC 1385277
          </div>

          <h1 className={styles.heroTitle}>
            Engineering Solutions<br />
            <em>Built for Nigeria.</em>
          </h1>

          <p className={styles.heroSub}>
            From construction and hydrographic services to medical facility setup and IT
            infrastructure — Fix-It Handyman Limited is your trusted multi-disciplinary
            partner across every project.
          </p>

          <div className={styles.heroCtas}>
            <Link href="/services" className="btn btn-primary">Explore Our Services</Link>
            <Link href="/contact" className="btn btn-outline">Get a Free Quote</Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className={styles.statsBar}>
          <div className="container">
            <div className={styles.statsGrid}>
              {STATS.map(s => (
                <div key={s.label} className={styles.stat}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────── */}
      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introImgWrap}>
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&q=80"
                alt="Construction team at work"
                className={styles.introImg}
              />
              <div className={styles.introAccent}>
                <strong>Est. 2017</strong>
                <span>Abuja · Lagos</span>
              </div>
            </div>
            <div className={styles.introText}>
              <span className="section-label">Who We Are</span>
              <h2 className="section-title">Nigeria's Trusted<br />Technical Partner</h2>
              <p>
                Fix-It Handyman Limited is a multi-disciplinary Nigerian company offering a broad
                spectrum of services spanning engineering, construction, maintenance, hydrographic
                survey support, healthcare infrastructure, IT solutions, and specialized
                procurement.
              </p>
              <p style={{ marginTop: 16 }}>
                Since our incorporation in 2017, we have built a strong reputation for delivering
                high-quality, practical, and cost-effective solutions to clients across both the
                public and private sectors — with a team of certified engineers, technicians, and
                project managers who bring international standards to every engagement.
              </p>
              <div className={styles.introCerts}>
                {['CAC Registered', 'Tax Compliant', 'NEMSA Licensed', 'BPP Certified'].map(c => (
                  <span key={c} className={styles.cert}>{c}</span>
                ))}
              </div>
              <Link href="/about" className="btn btn-navy" style={{ marginTop: 28 }}>
                Learn More About Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.serviceHead}>
            <div>
              <span className="section-label">What We Do</span>
              <h2 className="section-title">Our Service Divisions</h2>
            </div>
            <Link href="/services" className="btn btn-navy">View All Services</Link>
          </div>

          <div className={styles.servicesGrid}>
            {SERVICES_PREVIEW.map((s, i) => (
              <Link href="/services" key={s.title} className={styles.serviceCard}>
                <div className={styles.serviceImgWrap}>
                  <img src={s.img} alt={s.title} className={styles.serviceImg} />
                  <div className={styles.serviceImgOverlay} />
                  <span className={styles.serviceIcon}>{s.icon}</span>
                </div>
                <div className={styles.serviceBody}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className={styles.serviceArrow}>Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────────── */}
      <section className={styles.whyUs}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyText}>
              <span className="section-label">Why Choose Us</span>
              <h2 className="section-title" style={{ color: '#fff' }}>
                The Fix-It Difference
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 32 }}>
                We combine broad industry expertise with a commitment to quality, compliance,
                and client satisfaction on every project we undertake.
              </p>
              <ul className={styles.whyList}>
                {[
                  ['🔰', 'Fully Registered & Compliant', 'CAC, FIRS, NEMSA, ITF, NSITF, BPP, and SCUML registered.'],
                  ['🤝', 'Trusted OEM Partnerships', 'Authorised representatives of Kongsberg, Teledyne, Trimble, Emerson, and more.'],
                  ['⚙️', 'End-to-End Delivery', 'From project planning to after-sales support — we manage the full lifecycle.'],
                  ['🏆', 'Proven Track Record', 'Successfully executed projects across oil & gas, healthcare, government, and commercial sectors.'],
                ].map(([icon, title, desc]) => (
                  <li key={title} className={styles.whyItem}>
                    <span className={styles.whyIcon}>{icon}</span>
                    <div>
                      <strong>{title}</strong>
                      <p>{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.whyImg}>
              <img
                src="https://images.unsplash.com/photo-1521791055366-0d553381ad47?w=700&q=80"
                alt="Professional team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERS ──────────────────────────────────────────── */}
      <section className={styles.partners}>
        <div className="container">
          <p className={styles.partnersLabel}>Trusted OEM Partners & Associates</p>
          <div className={styles.partnersRow}>
            {TRUST_LOGOS.map(p => (
              <div key={p} className={styles.partnerChip}>{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ──────────────────────────────────────────── */}
      <section className={styles.ctaBand}>
        <div className="container">
          <div className={styles.ctaBandInner}>
            <div>
              <h2>Ready to Start Your Project?</h2>
              <p>Speak with our team today — we'll provide a tailored solution and free quote.</p>
            </div>
            <div className={styles.ctaBandBtns}>
              <Link href="/contact" className="btn btn-primary">Get a Free Quote</Link>
              <a href="tel:+2349021111193" className="btn btn-outline">Call Us Now</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
