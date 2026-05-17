import Layout from '../components/Layout';
import Link from 'next/link';
import styles from './projects.module.css';

const PROJECTS = [
  {
    category: 'Engineering',
    title: 'Commercial Building Construction, Abuja',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80',
    desc: 'Full design-build execution of a multi-storey commercial complex, including structural engineering, MEP systems, and interior fit-out.',
    tags: ['Construction', 'Structural Engineering'],
  },
  {
    category: 'Hydrographic',
    title: 'Hydrographic Survey Equipment Overhaul',
    img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=700&q=80',
    desc: 'Comprehensive maintenance, calibration, and deployment support for a multibeam echo sounder and ADCP fleet for a government marine agency.',
    tags: ['Calibration', 'Field Support'],
  },
  {
    category: 'Medical',
    title: 'Fertility Centre Setup, Lagos',
    img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=700&q=80',
    desc: 'Design, construction, and full medical equipment installation for a state-of-the-art fertility centre, meeting international healthcare standards.',
    tags: ['Healthcare', 'Equipment Installation'],
  },
  {
    category: 'Marine',
    title: 'Offshore Survey Support Operations',
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&q=80',
    desc: 'Vessel provisioning, on-site technical support, and logistics coordination for an environmental survey project in Nigerian coastal waters.',
    tags: ['Marine', 'Logistics'],
  },
  {
    category: 'Engineering',
    title: 'Substation Construction, Niger Delta',
    img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=700&q=80',
    desc: 'Electrical substation design, construction, and commissioning for an industrial facility, including earthing systems and protection relays.',
    tags: ['Electrical', 'Industrial'],
  },
  {
    category: 'IT',
    title: 'Enterprise IT Infrastructure Deployment',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80',
    desc: 'End-to-end design and installation of a secure IT network, data archival system, and cybersecurity framework for a financial institution.',
    tags: ['IT Network', 'Cybersecurity'],
  },
  {
    category: 'Handyman',
    title: 'Office Complex HVAC & Renovation, Abuja',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=80',
    desc: 'Complete HVAC system installation, electrical upgrades, plumbing, and renovation of a 6-floor office complex in Wuye District, Abuja.',
    tags: ['HVAC', 'Renovation'],
  },
  {
    category: 'Procurement',
    title: 'Marine Instruments Supply — NLNG',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80',
    desc: 'Procurement and supply of Kongsberg and Teledyne hydrographic instruments for a major oil and gas client, including commissioning and training.',
    tags: ['Procurement', 'OEM Supply'],
  },
];

const CATEGORIES = ['All', 'Engineering', 'Hydrographic', 'Marine', 'Medical', 'IT', 'Handyman', 'Procurement'];

export default function Projects() {
  return (
    <Layout title="Projects" description="View completed projects by Fix-It Handyman Limited across engineering, hydrographic services, marine operations, medical facility setup, and more.">

      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80" alt="Projects" />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className="section-label">Our Work</span>
          <h1>Projects</h1>
          <p>A selection of completed engagements across our service divisions — demonstrating breadth, quality, and expertise.</p>
        </div>
      </section>

      <section className={styles.projectsSection}>
        <div className="container">
          <div className={styles.grid}>
            {PROJECTS.map((p, i) => (
              <article key={p.title} className={styles.card}>
                <div className={styles.imgWrap}>
                  <img src={p.img} alt={p.title} />
                  <span className={styles.category}>{p.category}</span>
                </div>
                <div className={styles.body}>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className={styles.tags}>
                    {p.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <h2>Have a Project in Mind?</h2>
          <p>Let's discuss how Fix-It Handyman Limited can deliver results for your organisation.</p>
          <Link href="/contact" className="btn btn-primary" style={{ marginTop: 28 }}>
            Start a Conversation
          </Link>
        </div>
      </section>
    </Layout>
  );
}
