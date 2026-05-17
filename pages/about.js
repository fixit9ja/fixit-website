import Layout from '../components/Layout';
import Link from 'next/link';
import s from './about.module.css';

const TEAM = [
  { name: 'Ifeanyi G. Okeke',              role: 'Chief Executive Officer / MD',           dept: 'Leadership' },
  { name: 'Okoli Chinenye Peace',              role: 'Chief Operating Officer',           dept: 'Leadership' },
  { name: 'Paul N. Ilanghom',              role: 'Human Resource Manager',           dept: 'Leadership' },
  { name: 'Engr. Chukwuebuka E. Okeke',   role: 'Electrical & Electronics Engr', dept: 'Engineering' },
  { name: 'Engr. Sunday Sule',           role: 'Mechanical Engineer',              dept: 'Engineering' },
  { name: 'Engr. Magnus Hwosafe',          role: 'Civil & Structural Engineer',        dept: 'Engineering' },
 { name: 'Nzube Dominic Okonkwo',                   role: 'Finance / Accountant',dept: 'Finance' },
  { name: 'Oluwafemi Adeola',              role: 'ICT Department',                    dept: 'Technology' },
  { name: 'Martins Abu',                   role: 'HVAC & Air Conditioning Specialist (Nationwide)',dept: 'Operations' },
  { name: 'Abubakar D. Ismaila',                   role: 'HVAC & Air Conditioning Specialist (Abuja)',dept: 'Operations' },
  { name: 'Jamiu O. Akanni',                   role: 'HVAC & Air Conditioning Specialist (Lagos)',dept: 'Operations' },
  { name: 'Kenneth I. Ternenge',                   role: 'Head Painting Department',dept: 'Operations' },
];

const COMPLIANCE = [
  { abbr:'CAC',   note:'RC 1385277' },
  { abbr:'FIRS',  note:'TIN: 20204119-0001' },
  { abbr:'NSITF', note:'Current Compliance' },
  { abbr:'ITF',   note:'Current Compliance' },
  { abbr:'BPP',   note:'Valid Certificate' },
  { abbr:'NEMSA', note:'Licensed' },
  { abbr:'SCUML', note:'Registered' },
  { abbr:'DUNS',  note:'International Credential' },
];

const DEPT_COLOR = { Leadership:'var(--red)', Engineering:'var(--cyan)', Technology:'var(--royal)', Operations:'#2e8b57', Finance:'#e67e22' };

export default function About() {
  return (
    <Layout title="About Us" description="Learn about Fix-It Handyman Limited, Nigeria's trusted multi-disciplinary engineering company since 2017.">

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroBg}>
          <img src="https://images.unsplash.com/photo-1521791055366-0d553381ad47?w=1600&q=80" alt="" />
          <div className={s.heroMask} />
        </div>
        <div className={`container ${s.heroContent}`}>
          <p className="eyebrow">About Us</p>
          <h1>Who We Are</h1>
          <p>A Nigerian engineering company built on expertise, integrity, and a passion for excellence.</p>
        </div>
      </section>

      {/* STORY */}
      <section className={s.story}>
        <div className="container">
          <div className={s.storyGrid}>
            <div className={s.storyText}>
              <p className="eyebrow">Our Story</p>
              <h2 className="section-title">From Abuja.<br /><span>To The Nation.</span></h2>
              <p>Fix-It Handyman Limited was incorporated in Nigeria in January 2017 with a clear purpose: to provide reliable, high-quality technical services to businesses, government agencies, and individuals across Nigeria.</p>
              <p>What began as a focused handyman and maintenance business has evolved into a multi-disciplinary company with seven service divisions, spanning engineering contracting, hydrographic equipment services, marine survey support, medical facility construction, IT infrastructure, and advanced technical procurement.</p>
              <p>Today, we operate from our head office in Abuja (FCT) and a regional office in Lagos, serving clients across both the public and private sectors.</p>
            </div>
            <div className={s.storyImgs}>
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" alt="Construction" className={s.img1} />
              <img src="https://res.cloudinary.com/dbjahorp6/image/upload/v1779013258/IMG-20240318-WA0191_hhwcoi.jpg" alt="Marine" className={s.img2} />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className={s.mvSect}>
        <div className="container">
          <div className={s.mvGrid}>
            <div className={s.mvCard} style={{borderTopColor:'var(--red)'}}>
              <div className={s.mvNum}>01</div>
              <h3>Mission</h3>
              <p>To deliver reliable, high-quality, and innovative technical solutions across engineering, construction, maintenance, hydrographic services, and procurement, exceeding client expectations through professionalism, precision, and integrity.</p>
            </div>
            <div className={s.mvCard} style={{borderTopColor:'var(--cyan)'}}>
              <div className={s.mvNum}>02</div>
              <h3>Vision</h3>
              <p>To be the foremost multi-disciplinary engineering and technical services company in West Africa, renowned for innovation, reliability, and sustainable solutions that empower communities and industries.</p>
            </div>
            <div className={s.mvCard} style={{borderTopColor:'var(--royal)'}}>
              <div className={s.mvNum}>03</div>
              <h3>Core Values</h3>
              <ul className={s.valList}>
                {['Integrity & Transparency','Technical Excellence','Client-First Approach','Safety & Compliance','Continuous Innovation'].map(v=>(
                  <li key={v}><span>—</span>{v}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MANAGEMENT TEAM */}
      <section className={s.teamSect}>
        <div className="container">
          <div className={s.teamHead}>
            <p className="eyebrow">Our People</p>
            <h2 className="section-title">Management <span>Team</span></h2>
          </div>
          <div className={s.teamGrid}>
            {TEAM.map(m => (
              <div key={m.name} className={s.teamCard}>
                <div className={s.teamDept} style={{background: DEPT_COLOR[m.dept]}}>{m.dept}</div>
                <div className={s.teamInfo}>
                  <h3>{m.name}</h3>
                  <span>{m.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className={s.compSect}>
        <div className="container">
          <div className={s.compHead}>
            <p className="eyebrow" style={{color:'var(--cyan)'}}>Fully Compliant</p>
            <h2 className="section-title" style={{color:'var(--white)'}}>Regulatory <span style={{color:'var(--red)'}}>Registrations</span></h2>
          </div>
          <div className={s.compGrid}>
            {COMPLIANCE.map(c => (
              <div key={c.abbr} className={s.compCard}>
                <strong>{c.abbr}</strong>
                <span>{c.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
