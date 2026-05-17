import Layout from '../components/Layout';
import Link from 'next/link';
import styles from './about.module.css';

const TEAM = [
  {
    name: 'Ifeanyi G. Okeke',
    role: 'CEO / Managing Director',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    desc: 'BSc Physical & Industrial Physics. 15+ years in engineering & construction. HSE & Project Management certified. Member of LECAN.',
  },
  {
    name: 'Engr. Chukwuebuka E. Okeke',
    role: 'Partner / Electrical & Electronics Engineer',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    desc: 'Certified Electrical & Electronics Engineer. 10+ years experience. COREN & NSE registered. Led projects for NLNG and Honeywell Group.',
  },
  {
    name: 'Engr. Amachree Sule',
    role: 'Senior Electrical Engineer',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    desc: 'M.Tech & B.Tech Electrical Engineering (RSUST). B.Sc Physics/Materials Science (UNIPORT). 20+ years professional experience.',
  },
  {
    name: 'Engr. Magnus Hwosafe',
    role: 'Lead Civil & Structural Engineer',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    desc: 'B.Eng Civil Engineering, University of Benin. COREN registered. NSE member. 10+ years in substation construction & project management.',
  },
  {
    name: 'Oluwafemi Adeola',
    role: 'Lead, ICT Department',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    desc: 'Enterprise Infrastructure Architect with 16+ years managing IT teams. Cybersecurity & IT Security Analyst. Background in Computer Electronics Engineering.',
  },
  {
    name: 'Martins Abu',
    role: 'Senior HVAC & Air Conditioning Specialist',
    img: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=400&q=80',
    desc: 'Certified HVAC Service Technician with 27 years experience in heating, air conditioning, refrigerant systems, and duct fabrication.',
  },
];

const COMPLIANCE = [
  { abbr: 'CAC', full: 'Corporate Affairs Commission', note: 'RC 1385277' },
  { abbr: 'FIRS', full: 'Federal Inland Revenue Service', note: 'TIN: 20204119-0001' },
  { abbr: 'NSITF', full: 'Nigeria Social Insurance Trust Fund', note: 'Current Compliance' },
  { abbr: 'ITF', full: 'Industrial Training Fund', note: 'Current Compliance' },
  { abbr: 'BPP', full: 'Bureau of Public Procurement', note: 'Valid Certificate' },
  { abbr: 'NEMSA', full: 'Nigerian Electricity Mgmt Services Agency', note: 'Licensed' },
  { abbr: 'SCUML', full: 'Special Control Unit Against Money Laundering', note: 'Registered' },
  { abbr: 'DUNS', full: 'Dun & Bradstreet', note: 'International Credential' },
];

export default function About() {
  return (
    <Layout title="About Us" description="Learn about Fix-It Handyman Limited — Nigeria's trusted multi-disciplinary engineering and technical services company since 2017.">

      {/* ── PAGE HERO ──────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src="https://images.unsplash.com/photo-1521791055366-0d553381ad47?w=1600&q=80" alt="Our team" />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className="section-label">About Us</span>
          <h1>Who We Are</h1>
          <p>A Nigerian engineering company built on expertise, integrity, and a passion for excellence.</p>
        </div>
      </section>

      {/* ── STORY ──────────────────────────────────── */}
      <section className={styles.story}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">From Humble Beginnings<br />to National Reach</h2>
              <p>Fix-It Handyman Limited was incorporated in Nigeria in January 2017 with a clear purpose: to provide reliable, high-quality technical services to businesses, government agencies, and individuals across Nigeria.</p>
              <p style={{ marginTop: 16 }}>What began as a focused handyman and maintenance business has since evolved into a multi-disciplinary company with seven service divisions — spanning engineering contracting, hydrographic equipment services, marine survey support, medical facility construction, IT infrastructure, and advanced technical equipment procurement.</p>
              <p style={{ marginTop: 16 }}>Today, we operate from our head office in Abuja (FCT) and a regional office in Lagos State, serving clients across both the public and private sectors with a team of certified professionals committed to delivering international-standard results.</p>
            </div>
            <div className={styles.storyImgs}>
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" alt="Construction work" className={styles.storyImg1} />
              <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80" alt="Marine operations" className={styles.storyImg2} />
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION ───────────────────────── */}
      <section className={styles.mvSection}>
        <div className="container">
          <div className={styles.mvGrid}>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>🎯</div>
              <h3>Our Mission</h3>
              <p>To deliver reliable, high-quality, and innovative technical solutions across engineering, construction, maintenance, hydrographic services, and specialized procurement. We exceed client expectations through professionalism, precision, and integrity — providing end-to-end support that empowers our clients to operate efficiently, safely, and sustainably.</p>
            </div>
            <div className={`${styles.mvCard} ${styles.mvCardGold}`}>
              <div className={styles.mvIcon}>🌟</div>
              <h3>Our Vision</h3>
              <p>To be the foremost multi-disciplinary engineering and technical services company in West Africa, renowned for innovation, reliability, and sustainable solutions that empower communities and industries across the region.</p>
            </div>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>💎</div>
              <h3>Our Core Values</h3>
              <ul className={styles.valuesList}>
                {['Integrity & Transparency', 'Technical Excellence', 'Client-First Approach', 'Safety & Compliance', 'Continuous Innovation'].map(v => (
                  <li key={v}><span>✓</span>{v}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ───────────────────────────────────── */}
      <section className={styles.team}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">Our People</span>
            <h2 className="section-title">The Management Team</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Led by certified engineers and seasoned professionals with decades of combined experience.
            </p>
          </div>
          <div className={styles.teamGrid}>
            {TEAM.map(m => (
              <div key={m.name} className={styles.teamCard}>
                <div className={styles.teamImgWrap}>
                  <img src={m.img} alt={m.name} className={styles.teamImg} />
                </div>
                <div className={styles.teamInfo}>
                  <h4>{m.name}</h4>
                  <span className={styles.teamRole}>{m.role}</span>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE ─────────────────────────────── */}
      <section className={styles.compliance}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label">Compliance</span>
            <h2 className="section-title">Regulatory Registrations</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              We are fully registered and compliant with all applicable Nigerian regulatory bodies.
            </p>
          </div>
          <div className={styles.complianceGrid}>
            {COMPLIANCE.map(c => (
              <div key={c.abbr} className={styles.compCard}>
                <strong>{c.abbr}</strong>
                <span>{c.full}</span>
                <em>{c.note}</em>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to Work With Us?</h2>
          <p>Contact our team for a consultation and tailored project quote.</p>
          <Link href="/contact" className="btn btn-primary" style={{ marginTop: 28 }}>
            Contact Us Today
          </Link>
        </div>
      </section>
    </Layout>
  );
}
