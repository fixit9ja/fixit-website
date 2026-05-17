import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const LOGO_URL = 'https://res.cloudinary.com/dbjahorp6/image/upload/v1778979476/FIX-IT_HANYMAN_u0w1ko.png';

export default function Layout({ children, title = '', description = '' }) {
  const pageTitle = title
    ? `${title} | Fix-It Handyman Limited`
    : 'Fix-It Handyman Limited | Engineering, Construction & Technical Services';
  const pageDesc = description ||
    'Fix-It Handyman Limited — Nigeria\'s trusted partner for engineering, construction, hydrographic services, maintenance, and technical solutions since 2017.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={LOGO_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content={LOGO_URL} />
        {/* Favicon — using Cloudinary logo directly */}
        <link rel="icon" type="image/png" href={LOGO_URL} />
        <link rel="apple-touch-icon" href={LOGO_URL} />
        <meta name="theme-color" content="#1A3A6B" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
