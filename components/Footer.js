import Link from 'next/link';
import s from './Footer.module.css';

const LOGO = 'https://res.cloudinary.com/dbjahorp6/image/upload/v1778979476/FIX-IT_HANYMAN_u0w1ko.png';

const COLS = [
  { head: 'Company', links: [['/', 'Home'],['/about','About Us'],['/services','Services'],['/divisions','Our Divisions'],['/clients','Our Clients'],['/projects','Projects'],['/contact','Contact']] },
  { head: 'Services', links: [['/services#engineering','Engineering & Contracting'],['/services#hydrographic','Hydrographic Services'],['/services#marine','Marine Survey'],['/services#handyman','Handyman Services'],['/services#medical','Medical Facilities'],['/services#it','IT Infrastructure'],['/services#procurement','Equipment Procurement']] },
  { head: 'Divisions', links: [['/divisions#aircon','Fix-It Air Conditioner'],['/divisions#electrical','Fix-It Electrical'],['/divisions#painters','Fix-It Painters'],['/divisions#safety','Fix-It Safety Services']] },
];

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.top}>
        <div className="container">
          <div className={s.grid}>
            <div className={s.brand}>
              <img src={LOGO} alt="Fix-It Handyman Limited" className={s.logo} />
              <p className={s.tagline}>Engineering, construction & technical services across Nigeria since 2017.</p>
              <div className={s.badges}>
                <span>RC: 1385277</span>
                <span>TIN: 20204119-0001</span>
              </div>
              <div className={s.contact}>
                <a href="tel:+2349021111193">📞 +234 902 111 1193</a>
                <a href="mailto:info@fix-it.ng">✉ info@fix-it.ng</a>
                <a href="https://www.fix-it.ng" target="_blank" rel="noopener noreferrer">🌐 www.fix-it.ng</a>
              </div>
            </div>
            {COLS.map(col => (
              <div key={col.head} className={s.col}>
                <h4>{col.head}</h4>
                <ul>
                  {col.links.map(([href, label]) => (
                    <li key={href}><Link href={href}>{label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={s.bottom}>
        <div className="container">
          <p>© {new Date().getFullYear()} Fix-It Handyman Limited. All rights reserved.</p>
          <p className={s.compliance}>CAC · FIRS · NEMSA · ITF · NSITF · BPP · SCUML Registered</p>
        </div>
      </div>
    </footer>
  );
}
