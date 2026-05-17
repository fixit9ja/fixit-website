import Layout from '../components/Layout';
import s from './clients.module.css';

// ─── REPLACE EACH src WITH THE ACTUAL CLIENT LOGO URL ───────────────────────
// For each client, update: name, sector, img (logo URL), and location.
// When you have real logos hosted on Cloudinary, replace the placeholder img URL.
// ─────────────────────────────────────────────────────────────────────────────

const SECTORS = ['All', 'Oil & Gas', 'Government', 'Healthcare', 'NGO', 'Commercial', 'Maritime'];

const CLIENTS = [
  { name: 'Client Organization 01', sector: 'Oil & Gas',    location: 'Port Harcourt',  img: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&q=60' },
  { name: 'Client Organization 02', sector: 'Government',   location: 'Abuja',           img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=60' },
  { name: 'Client Organization 03', sector: 'Healthcare',   location: 'Lagos',           img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=300&q=60' },
  { name: 'Client Organization 04', sector: 'NGO',          location: 'Abuja',           img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=60' },
  { name: 'Client Organization 05', sector: 'Maritime',     location: 'Lagos',           img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&q=60' },
  { name: 'Client Organization 06', sector: 'Commercial',   location: 'Abuja',           img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=300&q=60' },
  { name: 'Client Organization 07', sector: 'Oil & Gas',    location: 'Delta State',     img: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&q=60' },
  { name: 'Client Organization 08', sector: 'Government',   location: 'Abuja',           img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=60' },
  { name: 'Client Organization 09', sector: 'Healthcare',   location: 'Enugu',           img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=300&q=60' },
  { name: 'Client Organization 10', sector: 'Maritime',     location: 'Port Harcourt',   img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&q=60' },
  { name: 'Client Organization 11', sector: 'Commercial',   location: 'Lagos',           img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=60' },
  { name: 'Client Organization 12', sector: 'NGO',          location: 'Abuja',           img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=300&q=60' },
  { name: 'Client Organization 13', sector: 'Oil & Gas',    location: 'Rivers State',    img: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&q=60' },
  { name: 'Client Organization 14', sector: 'Government',   location: 'Abuja',           img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=60' },
  { name: 'Client Organization 15', sector: 'Commercial',   location: 'Kano',            img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=300&q=60' },
  { name: 'Client Organization 16', sector: 'Healthcare',   location: 'Abuja',           img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=300&q=60' },
];

const SECTOR_COLOR = {
  'Oil & Gas':   '#e67e22',
  'Government':  'var(--royal)',
  'Healthcare':  '#27ae60',
  'NGO':         '#8e44ad',
  'Commercial':  'var(--muted)',
  'Maritime':    'var(--cyan)',
};

const TESTIMONIALS = [
  {
    quote: "Fix-It Handyman Limited delivered our hydrographic equipment maintenance contract on time and to specification. Their technical team is highly professional.",
    author: "Project Manager",
    org: "Government Marine Agency",
    sector: "Government",
  },
  {
    quote: "We have been using Fix-It for our office HVAC and general maintenance needs for over three years. Reliable, responsive, and always professional.",
    author: "Facilities Manager",
    org: "Commercial Client, Abuja",
    sector: "Commercial",
  },
  {
    quote: "Fix-It handled the full setup of our fertility centre, from construction through to medical equipment installation. Excellent workmanship throughout.",
    author: "Medical Director",
    org: "Private Healthcare Client, Lagos",
    sector: "Healthcare",
  },
];

export default function Clients() {
  return (
    <Layout
      title="Our Clients"
      description="Organizations Fix-It Handyman Limited has worked for across oil and gas, government, healthcare, NGOs, maritime, and commercial sectors in Nigeria."
    >

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroBg}>
          <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1600&q=80" alt="" />
          <div className={s.heroMask} />
        </div>
        <div className={`container ${s.heroContent}`}>
          <p className="eyebrow">Who We Serve</p>
          <h1>Our Clients</h1>
          <p>We have proudly served organisations across oil and gas, government, healthcare, NGOs, maritime, and commercial sectors across Nigeria.</p>
        </div>
      </section>

      {/* INTRO STATS */}
      <section className={s.statsBar}>
        <div className="container">
          <div className={s.statsRow}>
            {[
              { n: '200+', l: 'Projects Completed' },
              { n: '6',    l: 'Industry Sectors' },
              { n: '8+',   l: 'Years of Service' },
              { n: '2',    l: 'National Offices' },
            ].map(st => (
              <div key={st.l} className={s.stat}>
                <strong>{st.n}</strong>
                <span>{st.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS GRID */}
      <section className={s.clientsSect}>
        <div className="container">
          <div className={s.sectorRow}>
            {SECTORS.map(sec => (
              <span key={sec} className={s.sectorTag}>{sec}</span>
            ))}
          </div>

          <div className={s.grid}>
            {CLIENTS.map((c, i) => (
              <div key={i} className={s.card}>
                <div className={s.cardImgWrap}>
                  <img src={c.img} alt={c.name} className={s.cardImg} />
                  <div className={s.cardImgOverlay} />
                </div>
                <div className={s.cardBody}>
                  <span className={s.sector} style={{ background: SECTOR_COLOR[c.sector] }}>{c.sector}</span>
                  <h3>{c.name}</h3>
                  <span className={s.location}>📍 {c.location}</span>
                </div>
              </div>
            ))}
          </div>

          <p className={s.note}>
            Logo placeholders are shown above. Real client logos and names will be added as approved.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={s.testimonials}>
        <div className="container">
          <p className="eyebrow" style={{ color: 'var(--cyan)' }}>What They Say</p>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>Client <span>Testimonials</span></h2>
          <div className={s.testGrid}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={s.testCard}>
                <span className={s.testQuote}>"</span>
                <p>{t.quote}</p>
                <div className={s.testAuthor}>
                  <strong>{t.author}</strong>
                  <span>{t.org}</span>
                  <em style={{ color: SECTOR_COLOR[t.sector] }}>{t.sector}</em>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className={s.sectorSect}>
        <div className="container">
          <p className="eyebrow">Industries We Serve</p>
          <h2 className="section-title">Our Client <span>Sectors</span></h2>
          <div className={s.sectorGrid}>
            {[
              { icon: '⛽', name: 'Oil & Gas',   desc: 'Hydrographic services, equipment procurement, and engineering for upstream and downstream oil and gas operators.' },
              { icon: '🏛',  name: 'Government',  desc: 'Engineering contracts, facility maintenance, and technical support for federal and state government agencies.' },
              { icon: '🏥', name: 'Healthcare',   desc: 'Medical facility design, construction, equipment installation, and compliance for hospitals and clinics.' },
              { icon: '🌍', name: 'NGOs',         desc: 'Technical solutions, logistics support, and procurement services for local and international NGOs.' },
              { icon: '⚓', name: 'Maritime',     desc: 'Marine survey support, hydrographic equipment maintenance, and vessel logistics for maritime operations.' },
              { icon: '🏢', name: 'Commercial',   desc: 'Facilities management, HVAC, electrical, and renovation services for offices, retail, and commercial properties.' },
            ].map(sec => (
              <div key={sec.name} className={s.sectorCard}>
                <span className={s.sectorIcon}>{sec.icon}</span>
                <h3>{sec.name}</h3>
                <p>{sec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}
