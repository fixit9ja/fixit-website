import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import s from './Navbar.module.css';

const LOGO = 'https://res.cloudinary.com/dbjahorp6/image/upload/v1778979476/FIX-IT_HANYMAN_u0w1ko.png';

const LINKS = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/divisions',label: 'Divisions' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact',  label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [router.pathname]);

  return (
    <header className={`${s.header} ${scrolled ? s.solid : ''}`}>
      <div className={`container ${s.inner}`}>
        <Link href="/" className={s.logo}>
          <img src={LOGO} alt="Fix-It Handyman Limited" />
          <div className={s.logoWords}>
            <span className={s.logoTop}>Fix-It Handyman</span>
            <span className={s.logoBot}>Limited</span>
          </div>
        </Link>

        <nav className={`${s.nav} ${open ? s.open : ''}`}>
          <ul>
            {LINKS.map(l => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`${s.link} ${router.pathname === l.href ? s.active : ''}`}
                >
                  {l.label}
                  <span className={s.underline} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button className={`${s.burger} ${open ? s.burgerOpen : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
      {/* red accent line */}
      <div className={s.redLine} />
    </header>
  );
}
