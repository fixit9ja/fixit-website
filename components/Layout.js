import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const LOGO = 'https://res.cloudinary.com/dbjahorp6/image/upload/v1778979476/FIX-IT_HANYMAN_u0w1ko.png';

export default function Layout({ children, title = '', description = '' }) {
  const t = title ? `${title} | Fix-It Handyman Limited` : 'Fix-It Handyman Limited | Engineering & Technical Services Nigeria';
  const d = description || "Fix-It Handyman Limited — Nigeria's multi-disciplinary engineering, construction, hydrographic, and technical services company since 2017.";
  return (
    <>
      <Head>
        <title>{t}</title>
        <meta name="description" content={d} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={t} />
        <meta property="og:description" content={d} />
        <meta property="og:image" content={LOGO} />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
