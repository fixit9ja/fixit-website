# Fix-It Handyman Limited — Website

A professional Next.js website for Fix-It Handyman Limited.

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: CSS Modules (no extra dependencies needed)
- **Fonts**: Syne (headings) + DM Sans (body) — Google Fonts
- **Images**: Unsplash placeholder images (replace with real photos)
- **Deployment**: Vercel

---

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## Deployment to Vercel via GitHub

### Step 1 — Push to GitHub

```bash
cd fixit-website
git init
git add .
git commit -m "Initial commit — Fix-It Handyman website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fixit-website.git
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
2. Click **"Add New Project"**.
3. Select your `fixit-website` repository.
4. Vercel will auto-detect Next.js. Leave all settings as default.
5. Click **"Deploy"** — your site will be live in ~60 seconds.

### Step 3 — Connect Your Custom Domain

1. In your Vercel project, go to **Settings → Domains**.
2. Add your domain (e.g. `fix-it.ng` or `www.fix-it.ng`).
3. Vercel will give you DNS records (usually an A record and CNAME).
4. Log in to your domain registrar and add those DNS records.
5. Vercel will automatically provision an SSL certificate.

---

## Customisation Checklist

- [ ] Replace placeholder Unsplash images with real company photos
- [ ] Add the company logo to `public/` and reference it in `Navbar.js`
- [ ] Set up the contact form backend (options below)
- [ ] Update `pages/projects.js` with real project details and photos
- [ ] Add `public/favicon.ico` with your brand icon

### Contact Form Options

**Option A — Formspree (easiest, free tier available)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your form endpoint URL
3. In `contact.js`, replace the `handleSubmit` with:

```js
const handleSubmit = async e => {
  e.preventDefault();
  const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });
  if (res.ok) setSent(true);
};
```

**Option B — Netlify Forms** (if you deploy on Netlify instead)

**Option C — EmailJS** (free tier, sends directly to Gmail)

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, stats, services preview, why us |
| About | `/about` | Story, mission/vision, team, compliance |
| Services | `/services` | All 7 service divisions in detail |
| Projects | `/projects` | Portfolio of completed work |
| Contact | `/contact` | Contact form + office details |

## Company Colors (CSS Variables)

```css
--navy:       #1A3A6B   /* Primary dark blue */
--blue:       #2E6DB4   /* Medium blue */
--sky:        #4A9FD5   /* Light blue */
--gold:       #C8952A   /* Accent gold */
--gold-light: #E8B94A   /* Light gold */
```
