import Layout from '../components/Layout';
import Link from 'next/link';
import s from './divisions.module.css';

const DIVS = [
  {
    id: 'aircon',
    name: 'Fix-It Air Conditioner',
    tag: 'A Division of Fix-It Handyman Limited',
    logo: 'https://res.cloudinary.com/dbjahorp6/image/upload/v1778984115/FIX_IT_AIRCONDITIONER_LOGO_2_x_j2rtod.png',
    color: 'var(--cyan)',
    desc: 'We supply, install, maintain, and repair air conditioning systems across the full spectrum, from residential split units to large commercial and industrial HVAC installations. Our certified technicians ensure your systems run efficiently, reliably, and within manufacturer specifications year-round.',
    items: [
      'Supply of split unit, cassette, ducted, and commercial AC systems',
      'Professional installation for homes, offices, and commercial spaces',
      'Routine preventive maintenance and annual servicing',
      'Fault diagnosis, repair, and refrigerant recharging',
      'Replacement of old or inefficient systems with energy-efficient models',
      'Emergency breakdown response',
      'Commercial and industrial HVAC installations',
    ],
  },
  {
    id: 'painters',
    name: 'Fix-It Painters',
    tag: 'A Division of Fix-It Handyman Limited',
    logo: 'https://res.cloudinary.com/dbjahorp6/image/upload/v1778984113/FIX_IT_PAINTERS_LOGO_jgjyqc.png',
    color: 'var(--red)',
    desc: 'We deliver professional, high-quality painting services for residential, commercial, and industrial buildings. From fresh interior repaint to full exterior weatherproofing and decorative finishes, our team works with precision, speed, and the right materials to give every surface a lasting, beautiful result.',
    items: [
      'Interior and exterior painting for homes and offices',
      'Commercial and industrial building painting',
      'Surface preparation, sanding, and priming',
      'Decorative finishes, textures, and feature walls',
      'Waterproofing and weatherproof exterior coatings',
      'New construction painting and handover finishes',
      'Touch-up and maintenance repainting',
    ],
  },
  {
    id: 'safety',
    name: 'Fix-It Safety Services',
    tag: 'A Division of Fix-It Handyman Limited',
    logo: 'https://res.cloudinary.com/dbjahorp6/image/upload/v1778984113/FIRE_SAFETY_LOGO_2_fet0a9.png',
    color: 'var(--royal)',
    desc: "We specialise in the inspection, servicing, refilling, and certification of fire extinguishers and fire safety equipment for homes, offices, factories, and public facilities. Keeping your fire safety equipment in full working order is not just good practice. It is the law, and we make compliance simple.",
    items: [
      'Fire extinguisher inspection and certification',
      'Refilling and recharging of all extinguisher types (CO₂, dry powder, foam, water)',
      'Annual service contracts for businesses and facilities',
      'Fire hose reel inspection and maintenance',
      'Fire safety audits and compliance reports',
      'Supply of new fire extinguishers and safety equipment',
      'Staff fire safety awareness training',
    ],
  },
];

export default function Divisions() {
  return (
    <Layout title="Our Divisions" description="Fix-It Handyman Limited's specialised divisions: Fix-It Air Conditioner, Fix-It Painters, and Fix-It Safety Services.">

      <section className={s.hero}>
        <div className={s.heroBg}>
          <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1600&q=80" alt="" />
          <div className={s.heroMask} />
        </div>
        <div className={`container ${s.heroContent}`}>
          <p className="eyebrow">Specialised Arms</p>
          <h1>Our Divisions</h1>
          <p>Focused service companies operating under the Fix-It Handyman Limited umbrella, each built to deliver specialist expertise.</p>
        </div>
      </section>

      {/* Overview cards */}
      <section className={s.overview}>
        <div className="container">
          <div className={s.overGrid}>
            {DIVS.map(d => (
              <a key={d.id} href={`#${d.id}`} className={s.overCard} style={{'--accent': d.color}}>
                <div className={s.overLogoWrap}>
                  <img src={d.logo} alt={d.name} className={s.overLogo} />
                </div>
                <span>Learn more ↓</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Division detail blocks */}
      {DIVS.map((d, i) => (
        <section key={d.id} id={d.id} className={`${s.divBlock} ${i%2===1?s.divBlockAlt:''}`}>
          <div className="container">
            <div className={s.divGrid}>
              <div className={s.divLogoPanel} style={{'--accent': d.color}}>
                <img src={d.logo} alt={d.name} className={s.divLogo} />
              </div>
              <div className={s.divText}>
                <p className="eyebrow" style={{color: d.color}}>{d.tag}</p>
                <h2 style={{color:'var(--navy)'}}>{d.name}</h2>
                <p className={s.divDesc}>{d.desc}</p>
                <ul className={s.divItems}>
                  {d.items.map(it => (
                    <li key={it} style={{'--dot': d.color}}>
                      <span className={s.divDot} />
                      {it}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn btn-red" style={{marginTop:28}}>Enquire Now →</Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className={s.cta}>
        <div className="container">
          <h2>All Divisions. One Company.</h2>
          <p>Whether you need AC servicing, a fresh coat of paint, or fire safety compliance. We have a dedicated team ready.</p>
          <Link href="/contact" className="btn btn-red" style={{marginTop:28}}>Contact Us Today</Link>
        </div>
      </section>
    </Layout>
  );
}
