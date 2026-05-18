import Layout from '../components/Layout';
import Link from 'next/link';
import s from './index.module.css';

const STATS = [
  { n: '8+',   l: 'Years Operating' },
  { n: '200+', l: 'Projects Done' },
  { n: '7',    l: 'Service Divisions' },
  { n: '2',    l: 'National Offices' },
];

const SERVICES = [
  { icon: '🏗', label: 'Engineering &\nContracting',  anchor: 'engineering',  img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
  { icon: '🌊', label: 'Hydrographic\nEquipment',    anchor: 'hydrographic', img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80' },
  { icon: '⚓', label: 'Marine Survey\nSupport',      anchor: 'marine',       img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80' },
  { icon: '🔧', label: 'Handyman &\nMaintenance',    anchor: 'handyman',     img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80' },
  { icon: '🏥', label: 'Medical\nFacilities',        anchor: 'medical',      img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80' },
  { icon: '💻', label: 'IT\nInfrastructure',         anchor: 'it',           img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80' },
  { icon: '📦', label: 'Equipment\nProcurement',     anchor: 'procurement',  img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80' },
];

const DIVISIONS = [
  { name: 'Fix-It Air Conditioner', desc: 'Supply, maintenance and repair of AC units, from split systems to commercial installations.', logo: 'https://res.cloudinary.com/dbjahorp6/image/upload/v1778984115/FIX_IT_AIRCONDITIONER_LOGO_2_x_j2rtod.png', anchor: 'aircon' },
  { name: 'Fix-It Electrical',      desc: 'Residential and commercial electrical work from LV to HV. NEMSA registered and fully certified.', logo: 'https://res.cloudinary.com/dbjahorp6/image/upload/v1779030914/FIXIT_NEW_LOGO_BIGx_dltsil.png', anchor: 'electrical' },
  { name: 'Fix-It Painters',        desc: 'Professional painting of residential, commercial, and industrial buildings.', logo: 'https://res.cloudinary.com/dbjahorp6/image/upload/v1778984113/FIX_IT_PAINTERS_LOGO_jgjyqc.png', anchor: 'painters' },
  { name: 'Fix-It Safety Services', desc: 'Inspection, servicing, and certification of fire extinguishers and safety equipment.', logo: 'https://res.cloudinary.com/dbjahorp6/image/upload/v1778984113/FIRE_SAFETY_LOGO_2_fet0a9.png', anchor: 'safety' },
];

const WHY = [
  { icon: '🔰', t: 'Fully Registered',    d: 'CAC, FIRS, NEMSA, ITF, NSITF, BPP and SCUML compliant.' },
  { icon: '🤝', t: 'OEM Partnerships',    d: 'Trusted representatives for leading global technology and engineering manufacturers across marine, positioning, automation, and industrial solutions.' },
  { icon: '⚙️', t: 'End-to-End Delivery', d: 'From planning through after-sales, we own the full lifecycle.' },
  { icon: '🏆', t: 'Proven Track Record', d: 'Public and private sector clients across oil and gas, NGOs, healthcare, and government.' },
];

export default function Home() {
  return (
    <Layout>

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroBg}>
          <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=85" alt="" />
          <div className={s.heroMask} />
        </div>

        <div className={`container ${s.heroContent}`}>
          <h1 className={s.heroH1}>
            Nigeria's<br />
            <span>Multi-Disciplinary</span><br />
            Technical Partner
          </h1>
          <p className={s.heroP}>
            Engineering, construction, hydrographic services, maintenance,
            IT infrastructure, and equipment procurement, all under one roof.
          </p>
          <Link href="/services" className="btn btn-red">Explore Services</Link>
        </div>

        {/* Mascot */}
        <div className={s.mascotWrap}>
          <img
            src="https://res.cloudinary.com/dbjahorp6/image/upload/v1778984113/FIXIT_NEW_mascot_nf3bdw.png"
            alt="Fix-It Mascot"
            className={s.mascot}
          />
        </div>

        {/* Stats strip */}
        <div className={s.statsStrip}>
          <div className="container">
            <div className={s.statsRow}>
              {STATS.map(st => (
                <div key={st.l} className={s.stat}>
                  <strong>{st.n}</strong>
                  <span>{st.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className={s.introBand}>
        <div className="container">
          <div className={s.introGrid}>
            <div className={s.introImg}>
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" alt="Our team at work" />
              <div className={s.introImgTag}>
                <strong>2017</strong>
                <span>Founded</span>
              </div>
            </div>
            <div className={s.introText}>
              <p className="eyebrow">Who We Are</p>
              <h2 className="section-title">Built on Expertise.<br /><span>Driven by Results.</span></h2>
              <p className="section-sub">
                Fix-It Handyman Limited is a multi-disciplinary Nigerian company delivering
                high-quality, cost-effective technical solutions to public and private sector
                clients across the country.
              </p>
              <p className="section-sub" style={{ marginTop: 14 }}>
                Our certified engineers, technicians, and project managers bring international
                standards to every engagement, from small repairs to large-scale infrastructure projects.
              </p>
              <div className={s.certRow}>
                {['CAC Registered', 'Tax Compliant', 'NEMSA Licensed', 'BPP Certified'].map(c => (
                  <span key={c} className={s.cert}>{c}</span>
                ))}
              </div>
              <Link href="/about" className={`btn btn-ghost ${s.introBtn}`}>Our Full Story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={s.servSect}>
        <div className="container">
          <div className={s.servHead}>
            <div>
              <p className="eyebrow">What We Do</p>
              <h2 className="section-title">Our <span>Services</span></h2>
            </div>
            <Link href="/services" className="btn btn-cyan">All Services</Link>
          </div>
          <div className={s.servGrid}>
            {SERVICES.map((sv, i) => (
              <Link href={`/services#${sv.anchor}`} key={sv.anchor} className={s.servCard}>
                <div className={s.servImg}>
                  <img src={sv.img} alt={sv.label.replace('\n', ' ')} />
                  <div className={s.servOverlay} />
                </div>
                <div className={s.servBody}>
                  <span className={s.servIcon}>{sv.icon}</span>
                  <h3>{sv.label.split('\n').map((ln, j) => <span key={j}>{ln}<br /></span>)}</h3>
                  <span className={s.servArrow}>→</span>
                </div>
                <div className={s.servNum}>0{i + 1}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className={s.divSect}>
        <div className="container">
          <div className={s.divHead}>
            <p className="eyebrow" style={{ color: 'var(--cyan)' }}>Specialised Divisions</p>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>Our <span style={{ color: 'var(--red)' }}>Subsidiaries</span></h2>
            <p className="section-sub" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Focused service arms delivering specialist solutions under the Fix-It umbrella.
            </p>
          </div>
          <div className={s.divGrid}>
            {DIVISIONS.map(d => (
              <Link href={`/divisions#${d.anchor}`} key={d.name} className={s.divCard}>
                <div className={s.divLogoBox}>
                  <img src={d.logo} alt={d.name} className={s.divLogoImg} />
                </div>
                <h3>{d.name}</h3>
                <p>{d.desc}</p>
                <span className={s.divLink}>Learn more</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className={s.whySect}>
        <div className="container">
          <div className={s.whyGrid}>
            <div className={s.whyLeft}>
              <p className="eyebrow">Why Choose Us</p>
              <h2 className="section-title">The Fix-It<br /><span>Advantage</span></h2>
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80"
                alt="Professional team"
                className={s.whyImg}
              />
            </div>
            <div className={s.whyRight}>
              {WHY.map(w => (
                <div key={w.t} className={s.whyCard}>
                  <span>{w.icon}</span>
                  <div>
                    <strong>{w.t}</strong>
                    <p>{w.d}</p>
                  </div>
                </div>
              ))}
              <div className={s.whyCta}>
                <Link href="/about" className="btn btn-red">About Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MASCOT CTA BAND */}
      <section className={s.mascotBand}>
        <div className="container">
          <div className={s.mascotBandInner}>
            <img
              src="https://res.cloudinary.com/dbjahorp6/image/upload/v1778984113/FIXIT_NEW_mascot_nf3bdw.png"
              alt="Fix-It Mascot"
              className={s.mascotBandImg}
            />
            <div className={s.mascotBandText}>
              <h2>Ready to Fix It?</h2>
              <p>
                Whatever the project, big or small, our team is ready to deliver.
                Get in touch today for a free consultation and quote.
              </p>
              <Link href="/contact" className="btn btn-red">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS TEASER */}
      <section className={s.clientsSect}>
        <div className="container">
          <div className={s.clientsHead}>
            <div>
              <p className="eyebrow">Our Clients</p>
              <h2 className="section-title">Organizations We Have <span>Worked For</span></h2>
              <p className="section-sub">Trusted by public institutions, private companies, and NGOs across Nigeria.</p>
            </div>
          <div className={s.clientsGrid}>
            {[
              { name:'ECOWAS Commission',                          sector:'Intergovernmental',  img:'https://res.cloudinary.com/dbjahorp6/image/upload/v1779071948/ECOWAS_Signet_horizontal-1_ubjrg7.png' },
              { name:'International Organization for Migration',   sector:'International Body', img:'https://res.cloudinary.com/dbjahorp6/image/upload/v1779069023/International_Organization_for_Migration_logo.svg_sky6nf.png' },
              { name:'Netherlands Embassy in Nigeria',             sector:'Diplomatic Mission', img:'https://res.cloudinary.com/dbjahorp6/image/upload/v1779070467/599c8a2f336bb_cg8ypo.jpg' },
              { name:'Malaria Consortium',                         sector:'NGO',                img:'https://res.cloudinary.com/dbjahorp6/image/upload/v1779070318/Malaria-Consortium-Logo-no-strapline_xdemep.webp' },
              { name:'Rural Electrification Agency',               sector:'Government',         img:'https://res.cloudinary.com/dbjahorp6/image/upload/v1779070819/REA_GREEN_DAVID_guxegf.png' },
              { name:'Plan International',                         sector:'NGO',                img:'https://res.cloudinary.com/dbjahorp6/image/upload/v1779071632/Plan_International_Logo.svg_sofp4e.png' },
            ].map((c, i) => (
              <div key={i} className={s.clientCard}>
                <div className={s.clientImgWrap}>
                  <img src={c.img} alt={c.name} className={s.clientImg} />
                </div>
                <div className={s.clientInfo}>
                  <strong>{c.name}</strong>
                  <span>{c.sector}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={s.clientsFooter}>
            <Link href="/clients" className={s.clientsLink}>See all organizations we have worked for →</Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}
