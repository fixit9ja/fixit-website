import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const LOGO_URL = 'https://res.cloudinary.com/dbjahorp6/image/upload/v1778979476/FIX-IT_HANYMAN_u0w1ko.png';

const NAV_LINKS = [
  { href: '/',          label: 'Home' },
  { href: '/about',     label: 'About' },
  { href: '/services',  label: 'Services' },
  { href: '/projects',  label: 'Projects' },
  { href: '/contact',   label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoMark}>
            <img src={LOGO_URL} alt="Fix-It Handyman Limited Logo" className={styles.logoImg} />
          </div>
          <div className={styles.logoText}>
            <strong>Fix-It Handyman</strong>
            <small>Limited</small>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className={styles.links}>
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={styles.link}>{l.label}</Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link href="/contact" className={`btn btn-primary ${styles.cta}`}>
          Get a Quote
        </Link>

        {/* Hamburger */}
        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}>
        <ul>
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
