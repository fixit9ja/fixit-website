import Layout from '../components/Layout';
import Link from 'next/link';
import s from './services.module.css';

const SERVICES = [
  { id:'engineering', icon:'🏗', title:'Engineering & General Contracting',
    img:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    intro:'We handle large-scale construction and infrastructure projects from planning to final handover, delivered to the highest standards of quality, safety, and efficiency.',
    items:[['Construction Project Management','Scheduling, budgeting, and contractor coordination.'],['Structural Engineering & Design','Expert solutions for building design and structural integrity.'],['Infrastructure Development','Roads, drainage systems, and utility networks.'],['Building Construction','Turnkey residential, commercial, and industrial solutions.'],['Renovation & Retrofitting','Modernising structures for improved safety and functionality.']] },
  { id:'hydrographic', icon:'🌊', title:'Hydrographic Equipment Maintenance & Calibration',
    img:'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    intro:'We ensure the accuracy, reliability, and longevity of critical instruments used in marine, coastal, and inland water surveys through scheduled servicing and on-site technical support.',
    items:[['Preventive & Corrective Maintenance','Routine inspection and rapid-response repairs.'],['Calibration Services','Echo sounders, tide gauges, GPS, current meters, and ADCPs.'],['Sensor Testing & Diagnostics','In-house and field-based fault identification.'],['Deployment Support','Integration of equipment on vessels and survey platforms.'],['Spare Parts & Component Replacement','Genuine OEM parts supply and warranty management.'],['Documentation & Reporting','Service reports and calibration certificates for compliance.']] },
  { id:'marine', icon:'⚓', title:'Marine Survey Support & Logistics',
    img:'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    intro:'Comprehensive operational assistance for hydrographic, geophysical, and environmental surveys, ensuring safe, efficient, and accurate marine operations.',
    items:[['Vessel Provisioning & Chartering','Suitable survey vessels for coastal, offshore, or inland operations.'],['Launch & Recovery Operations','Safe deployment and retrieval of ADCPs, CTDs, sonars, and buoys.'],['On-Site Technical Support','Skilled technicians for setup, troubleshooting, and monitoring.'],['Logistical Planning & Mobilisation','Transport, permits, customs clearance, fuelling, and provisioning.'],['HSE Compliance & Safety Oversight','International marine safety and environmental protocols.']] },
  { id:'handyman', icon:'🔧', title:'Handyman & Facilities Maintenance',
    img:'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    intro:'Comprehensive repair, maintenance, and renovation services for residential and commercial properties, handled by skilled tradespeople who deliver reliable results.',
    items:[['General Repairs & Maintenance','Leaks, broken fixtures, wall patching, and wear-and-tear repairs.'],['Plumbing Services','Installation and repair of pipes, faucets, toilets, and water heaters.'],['Electrical Services','Troubleshooting, lighting, wiring repairs, and safety compliance.'],['Carpentry Services','Doors, windows, cabinets, furniture, and custom wooden structures.'],['Home & Office Renovations','Painting, flooring, and layout changes tailored to your needs.'],['Air Conditioner Services','Installation, repair, maintenance, and AC system replacement.']] },
  { id:'medical', icon:'🏥', title:'Medical Facilities & Fertility Centres',
    img:'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    intro:'Specialised design, construction, and equipping of state-of-the-art medical facilities and fertility centres that meet regulatory standards and patient care requirements.',
    items:[['Design & Setup','Functional, compliant layouts for hospitals, clinics, and fertility centres.'],['Specialised Construction','Sterile environments, operating theatres, and laboratories.'],['Medical Equipment Installation','Calibration and installation of medical devices and imaging systems.'],['Compliance & Certification','Ensuring facilities meet local and international healthcare regulations.'],['Project Management','Full process management from planning to handover.']] },
  { id:'it', icon:'💻', title:'IT Infrastructure & Data Solutions',
    img:'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    intro:'We design and deploy secure, scalable IT infrastructure and data solutions for businesses and institutions, ensuring security, efficiency, and compliance.',
    items:[['Data Security Infrastructure','Secure systems for storage, backup, and archival.'],['IT Network Setup','Robust network design and installation.'],['Data Archival Solutions','Efficient long-term data storage and retrieval systems.'],['Cybersecurity Solutions','Protection against breaches, attacks, and threats.'],['Project Management','End-to-end IT deployment compliant with industry standards.']] },
  { id:'procurement', icon:'📦', title:'Technical Equipment Procurement & Supply',
    img:'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    intro:'We source and supply advanced technical equipment backed by strong OEM partnerships with Kongsberg, Teledyne, Trimble, Emerson, and more.',
    items:[['Marine & Hydrographic Instruments','Top-tier equipment for surveys, coastal monitoring, and research.'],['OEM Partnerships','Genuine equipment from Kongsberg, Teledyne, Trimble, Emerson, and others.'],['Delivery, Installation & Commissioning','Full logistics through to operational readiness.'],['Spare Parts & Warranty Management','Genuine spares and prompt OEM warranty resolution.'],['Training & Capacity Building','Training programmes for operational proficiency.'],['Environmental Monitoring Equipment','Instrumentation for compliance and environmental monitoring.']] },
];

export default function Services() {
  return (
    <Layout title="Services" description="Fix-It Handyman Limited offers engineering, hydrographic, marine survey, handyman, medical, IT, and equipment procurement services across Nigeria.">

      <section className={s.hero}>
        <div className={s.heroBg}>
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80" alt="" />
          <div className={s.heroMask} />
        </div>
        <div className={`container ${s.heroContent}`}>
          <p className="eyebrow">What We Offer</p>
          <h1>Our Services</h1>
          <p>Seven integrated service divisions delivering comprehensive technical solutions across Nigeria.</p>
        </div>
      </section>

      {/* Sticky quick-nav */}
      <nav className={s.quickNav}>
        <div className="container">
          <div className={s.qnRow}>
            {SERVICES.map(sv => (
              <a key={sv.id} href={`#${sv.id}`} className={s.qnLink}>
                <span>{sv.icon}</span>
                {sv.title.split('&')[0].split(' ').slice(0,2).join(' ')}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Service blocks */}
      {SERVICES.map((sv, i) => (
        <section key={sv.id} id={sv.id} className={`${s.block} ${i%2===1?s.blockAlt:''}`}>
          <div className="container">
            <div className={s.blockGrid}>
              <div className={s.blockImg}>
                <img src={sv.img} alt={sv.title} />
                <div className={s.blockBadge}>
                  <span>{sv.icon}</span>
                  <strong>0{i+1}</strong>
                </div>
              </div>
              <div className={s.blockText}>
                <p className="eyebrow">{`Service 0${i+1}`}</p>
                <h2>{sv.title}</h2>
                <p className={s.blockIntro}>{sv.intro}</p>
                <ul className={s.items}>
                  {sv.items.map(([t,d])=>(
                    <li key={t}>
                      <strong>{t}</strong>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`btn btn-red ${s.blockBtn}`}>Enquire →</Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className={s.cta}>
        <div className="container">
          <h2>Need a Custom Solution?</h2>
          <p>We tailor our services to your exact requirements. Let's talk about your project.</p>
          <div className={s.ctaBtns}>
            <Link href="/contact" className="btn btn-red">Contact Our Team</Link>
            <a href="tel:+2349021111193" className="btn btn-outline-white">+234 902 111 1193</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
