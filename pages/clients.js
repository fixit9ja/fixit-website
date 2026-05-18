import Layout from '../components/Layout';
import Link from 'next/link';
import s from './clients.module.css';

// Replace img with real Cloudinary logo URL for each client when ready.
// For logo-only display, use a white/light background image or the actual logo PNG.
const CLIENTS = [
  { name: 'Nigerian Liquefied Natural Gas (NLNG)',          sector: 'Oil & Gas',          img: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&q=60' },
  { name: 'Honeywell Group',                                 sector: 'Conglomerate',        img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=60' },
  { name: 'ECOWAS',                                          sector: 'Intergovernmental',   img: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400&q=60' },
  { name: 'European Union Commission',                       sector: 'International Body',  img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=60' },
  { name: 'International Organization for Migration (IOM)', sector: 'International Body',  img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=60' },
  { name: 'Client Embassy',                                  sector: 'Diplomatic Mission',  img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=60' },
  { name: 'Client NGO 1',                                    sector: 'NGO',                 img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=60' },
  { name: 'Client NGO 2',                                    sector: 'NGO',                 img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=60' },
  { name: 'Client Organization',                             sector: 'Government',          img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=60' },
  { name: 'Client Organization',                             sector: 'Healthcare',          img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&q=60' },
  { name: 'Client Organization',                             sector: 'Marine',              img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=60' },
  { name: 'Client Organization',                             sector: 'Commercial',          img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=60' },
];

const SECTOR_COLOR = {
  'Oil & Gas':          '#c0392b',
  'Conglomerate':       '#8e44ad',
  'Intergovernmental':  '#1a6e3c',
  'International Body': '#1a5276',
  'Diplomatic Mission': '#784212',
  'NGO':                '#6c3483',
  'Government':         'var(--royal)',
  'Healthcare':         '#1a7a4a',
  'Marine':             'var(--cyan)',
  'Commercial':         'var(--navy)',
  'Industrial':         '#5d6d7e',
};

export default function Clients() {
  return (
    <Layout
      title="Our Clients"
      description="Organizations Fix-It Handyman Limited has worked for, including ECOWAS, EU Commission, IOM, NLNG, Honeywell, NGOs, embassies, and more."
    >

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroBg}>
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80" alt="" />
          <div className={s.heroMask} />
        </div>
        <div className={`container ${s.heroContent}`}>
          <p className="eyebrow">Our Track Record</p>
          <h1>Organizations We Have<br /><span>Worked For</span></h1>
          <p>
            From intergovernmental bodies and diplomatic missions to oil and gas giants,
            NGOs, and healthcare institutions, Fix-It Handyman Limited has delivered
            across sectors and scales.
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className={s.strip}>
        <div className="container">
          <div className={s.stripGrid}>
            {[
              { n: '200+', l: 'Projects Completed' },
              { n: '50+',  l: 'Organizations Served' },
              { n: '10+',  l: 'Industry Sectors' },
              { n: '8+',   l: 'Years of Delivery' },
            ].map(st => (
              <div key={st.l} className={s.stripStat}>
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
          <div className={s.sectionHead}>
            <p className="eyebrow">Our Clients</p>
            <h2 className="section-title">Trusted by <span>Leading Organizations</span></h2>
            <p className="section-sub">
              A selection of the intergovernmental bodies, diplomatic missions, private companies,
              and NGOs we have been proud to serve.
            </p>
          </div>

          <div className={s.grid}>
            {CLIENTS.map((c, i) => (
              <div key={i} className={s.card}>
                {/* Logo / image area */}
                <div className={s.logoWrap}>
                  <img src={c.img} alt={c.name} className={s.logoImg} />
                  <div className={s.logoOverlay} />
                  <span
                    className={s.sector}
                    style={{ background: SECTOR_COLOR[c.sector] || 'var(--navy)' }}
                  >
                    {c.sector}
                  </span>
                </div>
                {/* Name only — no project description */}
                <div className={s.cardName}>
                  <p>{c.name}</p>
                </div>
              </div>
            ))}
          </div>

          <p className={s.note}>
            * Placeholder images shown. Client logos will be updated shortly.
          </p>
        </div>
      </section>

      {/* TRUST BAND */}
      <section className={s.trustBand}>
        <div className="container">
          <div className={s.trustInner}>
            <div className={s.trustText}>
              <p className="eyebrow" style={{ color: 'var(--cyan)' }}>Why They Choose Us</p>
              <h2 className="section-title" style={{ color: 'var(--white)' }}>
                Delivering Results<br />
                <span style={{ color: 'var(--red)' }}>Every Time</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 28, lineHeight: 1.75 }}>
                Our clients return to us because we deliver what we promise, on time,
                within budget, and to international standards. From a single maintenance
                call to a multi-year service contract, we treat every engagement with
                the same commitment to excellence.
              </p>
              <Link href="/contact" className="btn btn-red">Work With Us</Link>
            </div>
            <div className={s.trustCards}>
              {[
                { icon: '🤝', t: 'Long-Term Relationships', d: 'Many of our clients have engaged us across multiple projects over several years.' },
                { icon: '📋', t: 'Framework Contracts',      d: 'We hold ongoing service agreements with several public and private sector organisations.' },
                { icon: '🌍', t: 'Diverse Sectors',          d: 'Intergovernmental bodies, diplomatic missions, oil and gas, marine, healthcare, NGOs, and commercial.' },
              ].map(tr => (
                <div key={tr.t} className={s.trustCard}>
                  <span>{tr.icon}</span>
                  <div>
                    <strong>{tr.t}</strong>
                    <p>{tr.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={s.cta}>
        <div className="container">
          <h2>Ready to Join Our Client List?</h2>
          <p>Contact our team to discuss your project and how we can help.</p>
          <Link href="/contact" className="btn btn-red" style={{ marginTop: 28 }}>
            Get in Touch
          </Link>
        </div>
      </section>

    </Layout>
  );
}
