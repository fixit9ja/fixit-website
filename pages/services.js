import Layout from '../components/Layout';
import Link from 'next/link';
import styles from './services.module.css';

const SERVICES = [
  {
    id: 'engineering',
    icon: '🏗️',
    title: 'Engineering & General Contracting',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    intro: 'We handle large-scale construction and infrastructure projects from planning to final handover — delivered to the highest standards of quality, safety, and efficiency.',
    items: [
      ['Construction Project Management', 'Overseeing scheduling, budgeting, and contractor coordination across all project phases.'],
      ['Structural Engineering & Design', 'Expert engineering for building design, structural integrity, and regulatory compliance.'],
      ['Infrastructure Development', 'Roads, drainage systems, utility networks, and civil infrastructure.'],
      ['Building Construction', 'Turnkey residential, commercial, and industrial building solutions.'],
      ['Renovation & Retrofitting', 'Modernising existing structures for improved safety, functionality, and aesthetics.'],
    ],
  },
  {
    id: 'hydrographic',
    icon: '🌊',
    title: 'Hydrographic Equipment Maintenance & Calibration',
    img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    intro: 'We ensure the accuracy, reliability, and longevity of critical instruments used in marine, coastal, and inland water surveys through scheduled servicing and on-site support.',
    items: [
      ['Preventive & Corrective Maintenance', 'Routine inspection and rapid-response repairs for hydrographic instruments.'],
      ['Calibration Services', 'Accurate calibration of echo sounders, tide gauges, GPS systems, current meters, and ADCPs.'],
      ['Sensor Testing & Diagnostics', 'In-house and field-based diagnostics to verify performance and identify faults.'],
      ['Deployment Support & System Integration', 'Technical assistance for integrating equipment on vessels and survey platforms.'],
      ['Spare Parts & Component Replacement', 'Genuine spare parts supply and warranty management through OEM partners.'],
      ['Documentation & Reporting', 'Service reports, calibration certificates, and maintenance logs for full audit trails.'],
    ],
  },
  {
    id: 'marine',
    icon: '⚓',
    title: 'Marine Survey Support & Logistics',
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    intro: 'Comprehensive operational assistance for hydrographic, geophysical, and environmental surveys — ensuring the right resources, equipment, and logistics for safe marine operations.',
    items: [
      ['Vessel Provisioning & Chartering', 'Sourcing survey vessels equipped for coastal, offshore, or inland operations.'],
      ['Launch & Recovery Operations', 'Safe deployment and retrieval of ADCPs, CTDs, side-scan sonars, and buoys.'],
      ['On-Site Technical Support', 'Skilled technicians for equipment setup, troubleshooting, and real-time monitoring.'],
      ['Logistical Planning & Mobilisation', 'End-to-end planning for transportation, permits, customs clearance, and provisioning.'],
      ['HSE Compliance & Safety Oversight', 'Health, safety, and environmental protocols aligned to international marine standards.'],
    ],
  },
  {
    id: 'handyman',
    icon: '🔧',
    title: 'Handyman & Facilities Maintenance',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    intro: 'Comprehensive repair, maintenance, and renovation services for residential and commercial properties — handled by skilled tradespeople who deliver reliable results.',
    items: [
      ['General Repairs & Maintenance', 'Leaks, broken fixtures, wall patching, and general wear-and-tear repairs.'],
      ['Plumbing Services', 'Installation and repair of pipes, faucets, toilets, and water heaters.'],
      ['Electrical Services', 'Troubleshooting, lighting installation, wiring repair, and safety compliance.'],
      ['Carpentry Services', 'Doors, windows, cabinets, furniture, and custom wooden structures.'],
      ['Home & Office Renovations', 'Painting, flooring, and layout changes tailored to your requirements.'],
      ['Air Conditioner Services', 'Installation, repair, routine maintenance, and AC system replacement.'],
    ],
  },
  {
    id: 'medical',
    icon: '🏥',
    title: 'Medical Facilities & Fertility Centres',
    img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    intro: 'Specialised design, construction, and equipping of state-of-the-art medical facilities and fertility centres that meet regulatory standards and patient care requirements.',
    items: [
      ['Design & Setup', 'Functional, compliant layouts for hospitals, clinics, and fertility centres.'],
      ['Specialised Construction', 'Sterile environments, operating theatres, laboratories, and patient rooms.'],
      ['Medical Equipment Installation', 'Calibration and installation of medical devices and imaging systems.'],
      ['Compliance & Certification', 'Ensuring facilities meet local and international healthcare regulations.'],
      ['Project Management', 'Full process management from planning to handover with minimal disruption.'],
    ],
  },
  {
    id: 'it',
    icon: '💻',
    title: 'IT Infrastructure & Data Solutions',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    intro: 'We design and deploy secure, scalable IT infrastructure and data solutions for businesses and institutions — ensuring data security, efficiency, and compliance.',
    items: [
      ['Data Security Infrastructure', 'Secure systems for data storage, backup, and archival.'],
      ['IT Network Setup', 'Robust network design and installation for businesses and institutions.'],
      ['Data Archival Solutions', 'Efficient, secure long-term data storage and retrieval systems.'],
      ['Cybersecurity Solutions', 'Protection measures against data breaches, attacks, and threats.'],
      ['Project Management', 'End-to-end IT deployment with compliance to industry standards.'],
    ],
  },
  {
    id: 'procurement',
    icon: '📦',
    title: 'Technical Equipment Procurement & Supply',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    intro: 'We source and supply advanced technical equipment across industries — backed by strong OEM partnerships with Kongsberg, Teledyne, Trimble, Emerson, and more.',
    items: [
      ['Marine & Hydrographic Instruments', 'Top-tier equipment for oceanographic surveys, coastal monitoring, and environmental research.'],
      ['OEM Partnerships', 'Genuine equipment and components from Fouani, 2M Kablo, Emerson, Kongsberg, Teledyne, Trimble, and others.'],
      ['Delivery, Installation & Commissioning', 'Full logistics, installation, and commissioning to ensure operational readiness.'],
      ['Spare Parts & Warranty Management', 'Genuine spares and prompt warranty resolution through OEM channels.'],
      ['Training & Capacity Building', 'Training programmes to equip your team with operational proficiency.'],
      ['Environmental Monitoring Equipment', 'Instrumentation for environmental compliance and monitoring.'],
    ],
  },
];

export default function Services() {
  return (
    <Layout title="Our Services" description="Fix-It Handyman Limited offers engineering, hydrographic services, marine survey support, handyman services, medical facility setup, IT infrastructure, and equipment procurement across Nigeria.">

      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80" alt="Services" />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className="section-label">What We Offer</span>
          <h1>Our Services</h1>
          <p>Seven integrated service divisions delivering comprehensive technical solutions across Nigeria.</p>
        </div>
      </section>

      {/* Quick nav */}
      <nav className={styles.quickNav}>
        <div className="container">
          <div className={styles.quickNavInner}>
            {SERVICES.map(s => (
              <a key={s.id} href={`#${s.id}`} className={styles.quickNavLink}>
                <span>{s.icon}</span>{s.title.split('&')[0].trim()}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Services */}
      {SERVICES.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`${styles.serviceSection} ${i % 2 === 1 ? styles.serviceSectionAlt : ''}`}
        >
          <div className="container">
            <div className={styles.serviceGrid}>
              <div className={styles.serviceImg}>
                <img src={s.img} alt={s.title} />
                <div className={styles.serviceImgLabel}>
                  <span>{s.icon}</span>
                  <strong>0{i + 1}</strong>
                </div>
              </div>
              <div className={styles.serviceText}>
                <h2>{s.title}</h2>
                <p className={styles.serviceIntro}>{s.intro}</p>
                <ul className={styles.serviceItems}>
                  {s.items.map(([title, desc]) => (
                    <li key={title}>
                      <strong>{title}</strong>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn btn-primary" style={{ marginTop: 28 }}>
                  Enquire About This Service
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Don't See What You Need?</h2>
          <p>We offer custom solutions for unique requirements. Reach out and let's discuss your project.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 28 }}>
            <Link href="/contact" className="btn btn-primary">Contact Our Team</Link>
            <a href="tel:+2349021111193" className="btn btn-outline">+234 902 111 1193</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
