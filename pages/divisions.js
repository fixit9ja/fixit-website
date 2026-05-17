import Layout from '../components/Layout';
import Link from 'next/link';
import s from './divisions.module.css';

const DIVS = [
  {
    id: 'aircon',
    name: 'Fix-It Air Conditioner',
    tag: 'A Division of Fix-It Handyman Limited',
    icon: '❄️',
    color: 'var(--cyan)',
    img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80',
    desc: 'We supply, install, maintain, and repair air conditioning systems across the full spectrum — from residential split units to large commercial and industrial HVAC installations. Our certified technicians ensure your systems run efficiently, reliably, and within manufacturer specifications year-round.',
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
    icon: '🎨',
    color: 'var(--red)',
    img: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800&q=80',
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
    icon: '🔥',
    color: 'var(--royal)',
    img: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&q=80',
    desc: 'We specialise in the inspection, servicing, refilling, and certification of fire extinguishers and fire safety equipment for homes, offices, factories, and public facilities. Keeping your fire safety equipment in full working order is not just good practice — it\'s the law, and we make compliance simple.',
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
          <p>Focused service companies operating under the Fix-It Handyman Limited umbrella — each built to deliver specialist expertise.</p>
        </div>
      </section>

      {/* Overview cards */}
      <section className={s.overview}>
        <div className="container">
          <div className={s.overGrid}>
            {DIVS.map(d => (
              <a key={d.id} href={`#${d.id}`} className={s.overCard} style={{'--accent': d.color}}>
                <span className={s.overIcon}>{d.icon}</span>
                <strong>{d.name}</strong>
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
              <div className={s.divImg}>
                <img src={d.img} alt={d.name} />
                <div className={s.divImgBadge} style={{background: d.color}}>
                  <span>{d.icon}</span>
                </div>
              </div>
              <div className={s.divText}>
                <p className="eyebrow" style={{color: d.color, '--clr': d.color}}>{d.tag}</p>
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
          <p>Whether you need AC servicing, a fresh coat of paint, or fire safety compliance — we have a dedicated team ready.</p>
          <Link href="/contact" className="btn btn-red" style={{marginTop:28}}>Contact Us Today</Link>
        </div>
      </section>
    </Layout>
  );
}
