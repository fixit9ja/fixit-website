import Layout from '../components/Layout';
import Link from 'next/link';
import s from './clients.module.css';

const CLIENTS = [
  { name: 'ECOWAS Commission, Abuja',                        sector: 'Intergovernmental',  img: 'https://res.cloudinary.com/dbjahorp6/image/upload/v1779071948/ECOWAS_Signet_horizontal-1_ubjrg7.png' },
  { name: 'European Union Commission, Abuja',                sector: 'International Body', img: 'https://res.cloudinary.com/dbjahorp6/image/upload/v1779073341/ec-logo-horiz_en_wijyfs.png' },
  { name: 'International Organization for Migration (IOM)',  sector: 'International Body', img: 'https://res.cloudinary.com/dbjahorp6/image/upload/v1779069023/International_Organization_for_Migration_logo.svg_sky6nf.png' },
  { name: 'Netherlands Embassy in Nigeria',                  sector: 'Diplomatic Mission', img: 'https://res.cloudinary.com/dbjahorp6/image/upload/v1779070467/599c8a2f336bb_cg8ypo.jpg' },
  { name: 'Norwegian Embassy in Nigeria',                    sector: 'Diplomatic Mission', img: 'https://res.cloudinary.com/dbjahorp6/image/upload/v1779069225/norveska-ambasada.jpg_tknwyi.webp' },
  { name: 'Botswana Embassy in Nigeria',                     sector: 'Diplomatic Mission', img: 'https://res.cloudinary.com/dbjahorp6/image/upload/v1779070142/botswana-773x435_kekyhd.jpg' },
  { name: 'Malaria Consortium',                              sector: 'NGO',                img: 'https://res.cloudinary.com/dbjahorp6/image/upload/v1779070318/Malaria-Consortium-Logo-no-strapline_xdemep.webp' },
  { name: 'FHI 360',                                         sector: 'NGO',                img: 'https://res.cloudinary.com/dbjahorp6/image/upload/v1779070675/fhi-360-logo.tmb-1920v_j5pcjp.webp' },
  { name: 'Rural Electrification Agency',                    sector: 'Government',         img: 'https://res.cloudinary.com/dbjahorp6/image/upload/v1779070819/REA_GREEN_DAVID_guxegf.png' },
  { name: 'Care International',                              sector: 'NGO',                img: 'https://res.cloudinary.com/dbjahorp6/image/upload/v1779071089/care-social-image_z89urf.jpg' },
  { name: 'Action Against Hunger',                           sector: 'NGO',                img: 'https://res.cloudinary.com/dbjahorp6/image/upload/v1779071485/images_wdlpx5.webp' },
  { name: 'Management Sciences for Health',                  sector: 'NGO',                img: 'https://res.cloudinary.com/dbjahorp6/image/upload/v1779071758/481673405_955771040058965_3343411815597313821_n_adhcco.jpg' },
  { name: 'Plan International',                              sector: 'NGO',                img: 'https://res.cloudinary.com/dbjahorp6/image/upload/v1779071632/Plan_International_Logo.svg_sofp4e.png' },
  { name: 'Achieving Health Nigeria Initiative (AHNi)',      sector: 'NGO',                img: 'https://res.cloudinary.com/dbjahorp6/image/upload/v1779072337/images_udvbxx.jpg' },
];

const SECTOR_COLOR = {
  'Intergovernmental':  '#1a6e3c',
  'International Body': '#1a5276',
  'Diplomatic Mission': '#784212',
  'NGO':                '#6c3483',
  'Government':         '#1A3FBF',
  'Oil & Gas':          '#c0392b',
  'Conglomerate':       '#8e44ad',
  'Healthcare':         '#1a7a4a',
  'Marine':             '#00AEEF',
  'Commercial':         '#0D1E3D',
  'Industrial':         '#5d6d7e',
};

export default function Clients() {
  return (
    <Layout
      title="Our Clients"
      description="Organizations Fix-It Handyman Limited has worked for, including ECOWAS, EU Commission, IOM, embassies, NGOs, and more."
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
            From intergovernmental bodies and diplomatic missions to government agencies
            and NGOs, Fix-It Handyman Limited has delivered across sectors and scales.
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
              A selection of the intergovernmental bodies, diplomatic missions, government
              agencies, and NGOs we have been proud to serve.
            </p>
          </div>

          <div className={s.grid}>
            {CLIENTS.map((c, i) => (
              <div key={i} className={s.card}>
                <div className={s.logoWrap}>
                  <img src={c.img} alt={c.name} className={s.logoImg} />
                  <span
                    className={s.sector}
                    style={{ background: SECTOR_COLOR[c.sector] || '#0D1E3D' }}
                  >
                    {c.sector}
                  </span>
                </div>
                <div className={s.cardName}>
                  <p>{c.name}</p>
                </div>
              </div>
            ))}
          </div>
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
                { icon: '🌍', t: 'Diverse Sectors',          d: 'Intergovernmental bodies, diplomatic missions, government agencies, NGOs, and commercial.' },
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
