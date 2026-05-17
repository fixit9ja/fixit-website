import Layout from '../components/Layout';
import Link from 'next/link';
import s from './projects.module.css';

const PROJECTS = [
  { cat:'Engineering',   title:'Commercial Building Construction, Abuja',     img:'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80',   desc:'Multi-storey commercial complex including structural engineering, MEP systems, and full interior fit-out.', tags:['Construction','Structural'] },
  { cat:'Hydrographic',  title:'Survey Equipment Overhaul, Marine Agency',   img:'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=700&q=80',   desc:'Maintenance, calibration, and deployment support for a multibeam echo sounder and ADCP fleet.', tags:['Calibration','Field Support'] },
  { cat:'Medical',       title:'Fertility Centre Setup, Lagos',                img:'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=700&q=80',  desc:'Design, construction, and full medical equipment installation for a state-of-the-art fertility centre.', tags:['Healthcare','Equipment'] },
  { cat:'Marine',        title:'Offshore Survey Support Operations',           img:'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&q=80',   desc:'Vessel provisioning, on-site technical support, and logistics coordination for an environmental survey.', tags:['Marine','Logistics'] },
  { cat:'Engineering',   title:'Electrical Substation, Niger Delta',           img:'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=700&q=80', desc:'Electrical substation design, construction, and commissioning for an industrial facility.', tags:['Electrical','Industrial'] },
  { cat:'IT',            title:'Enterprise IT Deployment, Financial Institution', img:'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80', desc:'Secure IT network, data archival system, and cybersecurity framework for a major client.', tags:['IT Network','Cybersecurity'] },
  { cat:'Handyman',      title:'Office Complex HVAC & Renovation, Abuja',     img:'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=80',  desc:'HVAC installation, electrical upgrades, plumbing, and renovation of a 6-floor office complex.', tags:['HVAC','Renovation'] },
  { cat:'Procurement',   title:'Marine Instruments Supply, NLNG',             img:'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80',   desc:'Procurement and supply of Kongsberg and Teledyne instruments, including commissioning and training.', tags:['Procurement','OEM'] },
];

const CAT_COLOR = { Engineering:'var(--royal)', Hydrographic:'var(--cyan)', Medical:'#2e8b57', Marine:'var(--navy)', IT:'#6a0dad', Handyman:'var(--muted)', Procurement:'var(--red)' };

export default function Projects() {
  return (
    <Layout title="Projects" description="Completed projects by Fix-It Handyman Limited across engineering, hydrographic, marine, medical, IT, and procurement.">

      <section className={s.hero}>
        <div className={s.heroBg}>
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80" alt="" />
          <div className={s.heroMask} />
        </div>
        <div className={`container ${s.heroContent}`}>
          <p className="eyebrow">Our Work</p>
          <h1>Projects</h1>
          <p>A selection of completed engagements demonstrating breadth, quality, and expertise.</p>
        </div>
      </section>

      <section className={s.grid_sect}>
        <div className="container">
          <div className={s.grid}>
            {PROJECTS.map((p, i) => (
              <article key={p.title} className={s.card}>
                <div className={s.imgWrap}>
                  <img src={p.img} alt={p.title} />
                  <span className={s.cat} style={{background: CAT_COLOR[p.cat]}}>{p.cat}</span>
                  <div className={s.num}>0{i+1}</div>
                </div>
                <div className={s.body}>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className={s.tags}>{p.tags.map(t=><span key={t}>{t}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={s.cta}>
        <div className="container">
          <h2>Have a Project in Mind?</h2>
          <p>Let's discuss how Fix-It Handyman Limited can deliver results for your organisation.</p>
          <Link href="/contact" className="btn btn-red" style={{marginTop:28}}>Start a Conversation →</Link>
        </div>
      </section>
    </Layout>
  );
}
