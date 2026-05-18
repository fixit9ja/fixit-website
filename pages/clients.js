.hero { position:relative; min-height:55vh; display:flex; align-items:flex-end; overflow:hidden; }
.heroBg { position:absolute; inset:0; }
.heroBg img { width:100%; height:100%; object-fit:cover; }
.heroMask { position:absolute; inset:0; background:linear-gradient(to top, rgba(6,15,30,0.97) 0%, rgba(13,30,61,0.70) 100%); }
.heroContent { position:relative; z-index:2; padding:120px 0 60px; }
.heroContent h1 { font-size:clamp(2.4rem,5vw,4.5rem); font-weight:900; text-transform:uppercase; color:var(--white); margin-bottom:14px; line-height:1; }
.heroContent h1 span { color:var(--cyan); }
.heroContent p { font-size:1.05rem; color:rgba(255,255,255,0.72); max-width:600px; line-height:1.7; }

/* STATS STRIP */
.strip { background:var(--dark); border-top:3px solid var(--red); }
.stripGrid { display:grid; grid-template-columns:repeat(4,1fr); }
.stripStat { padding:24px 20px; text-align:center; border-right:1px solid rgba(255,255,255,0.07); }
.stripStat:last-child { border-right:none; }
.stripStat strong { display:block; font-family:var(--font-head); font-size:2.4rem; font-weight:900; color:var(--cyan); line-height:1; }
.stripStat span { font-size:0.78rem; color:rgba(255,255,255,0.5); letter-spacing:0.05em; }

/* CLIENTS GRID */
.clientsSect { padding:100px 0; background:var(--off); }
.sectionHead { margin-bottom:56px; }

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.card {
  background: var(--white);
  border-radius: var(--r-sm);
  overflow: hidden;
  box-shadow: var(--sh-sm);
  border: 1px solid var(--light);
  transition: all 0.28s;
  display: flex;
  flex-direction: column;
}
.card:hover { transform: translateY(-4px); box-shadow: var(--sh-md); border-color: var(--cyan); }

/* Logo area — white background, logo fits inside without cropping */
.logoWrap {
  position: relative;
  height: 140px;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-bottom: 1px solid var(--light);
}
.logoImg {
  width: 100%;
  height: 100%;
  object-fit: contain;   /* full logo visible, no cropping */
  object-position: center;
}
/* Overlay only for the sector tag positioning */
.logoOverlay { display: none; }

.sector {
  position: absolute;
  top: 0;
  left: 0;
  font-family: var(--font-head);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--white);
  padding: 4px 10px;
  border-radius: 0 0 4px 0;
}

/* Name — clean and minimal */
.cardName {
  padding: 14px 16px;
  background: var(--white);
}
.cardName p {
  font-family: var(--font-head);
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--navy);
  line-height: 1.3;
  margin: 0;
}

.note { margin-top:28px; font-size:0.78rem; color:var(--muted); font-style:italic; text-align:center; }

/* TRUST BAND */
.trustBand { padding:100px 0; background:linear-gradient(135deg, var(--dark) 0%, var(--navy) 100%); }
.trustInner { display:grid; grid-template-columns:1fr 1.1fr; gap:80px; align-items:start; }
.trustCards { display:flex; flex-direction:column; gap:3px; }
.trustCard { display:flex; gap:16px; padding:24px 20px; background:rgba(255,255,255,0.05); border-top:3px solid var(--cyan); transition:background 0.2s; }
.trustCard:hover { background:rgba(255,255,255,0.08); }
.trustCard span { font-size:1.8rem; flex-shrink:0; }
.trustCard strong { display:block; font-family:var(--font-head); font-size:1rem; font-weight:800; text-transform:uppercase; color:var(--white); margin-bottom:5px; }
.trustCard p { font-size:0.87rem; color:rgba(255,255,255,0.55); line-height:1.6; margin:0; }

/* CTA */
.cta { padding:80px 0; background:var(--red); text-align:center; }
.cta h2 { font-family:var(--font-head); font-size:clamp(2rem,4vw,2.8rem); font-weight:900; text-transform:uppercase; color:var(--white); margin-bottom:12px; }
.cta p { color:rgba(255,255,255,0.85); font-size:1.05rem; }

@media(max-width:1024px) { .grid{grid-template-columns:repeat(3,1fr);} }
@media(max-width:768px) { .grid{grid-template-columns:repeat(2,1fr);} .stripGrid{grid-template-columns:repeat(2,1fr);} .trustInner{grid-template-columns:1fr;} }
@media(max-width:480px) { .grid{grid-template-columns:1fr;} }
