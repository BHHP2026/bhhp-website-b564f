(function(){
  if (!window.location.pathname.match(/\/sea-pines(\/|$)/)) return;

  // ── Fonts ─────────────────────────────────────────────────────────────────
  if (!document.getElementById('sp-widget-fonts')) {
    var link = document.createElement('link');
    link.id = 'sp-widget-fonts';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,700;0,6..96,900;1,6..96,400;1,6..96,700&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Montserrat:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(link);
  }

  // ══════════════════════════════════════════════════════════════════════════
  // STRIPE 1 — THE RESORT LIFESTYLE (hero image)
  // ══════════════════════════════════════════════════════════════════════════
  var s1CSS = `
    .sp-stripe-hero { position: relative; height: 65vh; overflow: hidden; }
    .sp-stripe-hero .sp-bg { position: absolute; inset: 0; background: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=2000&q=90') center 40% / cover no-repeat; z-index: 0; }
    .sp-stripe-hero .sp-overlay { position: absolute; inset: 0; background: rgba(10,15,28,0.50); z-index: 1; }
    .sp-stripe-hero .sp-vignette { position: absolute; inset: 0; background: radial-gradient(ellipse at center, transparent 25%, rgba(10,15,28,0.30) 65%, rgba(10,15,28,0.55) 100%); z-index: 2; }
    .sp-hero-title { position: relative; z-index: 3; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px 60px; }
    .sp-eyebrow { display: flex; align-items: center; justify-content: center; gap: 14px; margin-bottom: 24px; }
    .sp-eyebrow-rule { width: 28px; height: 1px; background: #0ABAB5; opacity: 0.8; }
    .sp-eyebrow-text { font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 4px; text-transform: uppercase; color: #fff; }
    .sp-t-the { font-family: 'Bodoni Moda', Didot, serif; font-style: italic; font-weight: 400; font-size: clamp(24px,2.6vw,38px); color: #fff; line-height: 1; }
    .sp-t-main { font-family: 'Bodoni Moda', Didot, serif; font-style: italic; font-weight: 400; font-size: clamp(68px,8.5vw,122px); color: #fff; line-height: 0.90; letter-spacing: -2px; }
    .sp-t-sub { font-family: 'Bodoni Moda', Didot, serif; font-style: normal; font-weight: 400; font-size: clamp(30px,3.6vw,52px); color: #fff; letter-spacing: 12px; text-transform: uppercase; line-height: 1; margin: 8px 0 0 6px; }
    .sp-badge { position: absolute; right: 64px; bottom: 56px; z-index: 4; width: 108px; height: 108px; border-radius: 50%; background: rgba(10,15,28,0.35); border: 1.5px solid rgba(255,255,255,0.22); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
    .sp-badge .b-year { font-family: 'Bodoni Moda', serif; font-size: 28px; font-weight: 700; color: #fff; line-height: 1; }
    .sp-badge .b-label { font-size: 8px; font-weight: 600; letter-spacing: 1.5px; color: rgba(255,255,255,0.55); text-transform: uppercase; line-height: 1.5; margin-top: 5px; }
    @media (max-width: 768px) { .sp-badge { right: 24px; bottom: 32px; width: 80px; height: 80px; } .sp-badge .b-year { font-size: 20px; } }
  `;

  var s1HTML = `
    <div class="sp-stripe-hero">
      <div class="sp-bg"></div><div class="sp-overlay"></div><div class="sp-vignette"></div>
      <div class="sp-hero-title">
        <div class="sp-eyebrow"><div class="sp-eyebrow-rule"></div><span class="sp-eyebrow-text">Sea Pines Resort &nbsp;·&nbsp; Hilton Head Island</span><div class="sp-eyebrow-rule"></div></div>
        <p class="sp-t-the">The</p><p class="sp-t-main">Resort</p><p class="sp-t-sub">Lifestyle</p>
      </div>
      <div class="sp-badge"><span class="b-year">1956</span><span class="b-label">Est. by<br>C. Fraser</span></div>
    </div>
  `;

  // ══════════════════════════════════════════════════════════════════════════
  // WIDGET 2 — A DAY AT SEA PINES (editorial timeline)
  // ══════════════════════════════════════════════════════════════════════════
  var w2CSS = `
    .sp-day-section { background: #0A1628; padding: 100px 40px; }
    .sp-day-inner { max-width: 1000px; margin: 0 auto; }
    .sp-day-eyebrow { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 500; letter-spacing: 4px; text-transform: uppercase; color: #0ABAB5; margin-bottom: 20px; display: flex; align-items: center; gap: 12px; }
    .sp-day-eyebrow::before { content: ''; display: inline-block; width: 24px; height: 1px; background: #0ABAB5; opacity: 0.6; }
    .sp-day-title { font-family: 'Bodoni Moda', Didot, serif; font-size: clamp(40px,5vw,68px); font-weight: 400; color: #fff; line-height: 1.05; margin-bottom: 12px; }
    .sp-day-title em { font-style: italic; }
    .sp-day-title strong { font-style: normal; font-weight: 400; color: #0ABAB5; letter-spacing: 4px; font-size: 0.65em; vertical-align: middle; }
    .sp-day-subtitle { font-family: Georgia, serif; font-size: 16px; font-style: italic; color: rgba(255,255,255,0.5); margin-bottom: 64px; }
    .sp-timeline { display: fle{;
      flex-direction: column;
      gap: 0;
      max-width: 840px;
      margin: 0 auto; }
    .sp-tl-item { display: grid;
      grid-template-columns: 240px 1fr;
      gap: 32px;
      align-items: center;
      padding: 32px 0;
      border-bottom: 1px solid rgba(255,255,255,0.06); }
    .sp-tl-item:last-child { border-bottom: none; }
    .sp-tl-time { font-family: 'Montserrat', sans-serif; font-size: 9px; letter-spacing: 4px; text-transform: uppercase; color: #0ABAB5; font-weight: 600; opacity: 0.8; }
    .sp-tl-moment { font-family: 'Bodoni Moda', Didot, serif; font-size: 18px; font-weight: 400; font-style: italic; color: rgba(255,255,255,0.92); margin-top: 6px; line-height: 1.55; }
    .sp-tl-img { height: 160px; background-size: cover; background-position: center; opacity: 0.75; }
  `;

             </div>
            <div class="sp-timeline-img"><div class="sp-timeline-img-inner" style="background: linear-gradient(135deg,#c9a96e 0%,#3a2a1a 100%);"></div></div>
          </div>
          <div class="sp-timeline-item">
            <div>
              <div class="sp-timeline-time">5 : 00 &nbsp; P M</div>
              <div class="sp-timeline-moment">A dolphin cruise from the marina — bottlenose dolphins are a daily encounter here.</div>
            </div>
            <div class="sp-timeline-img"><div class="sp-timeline-img-inner" style="background: linear-gradient(135deg,#1a5a8a 0%,#0a2a4a 100%);"></div></div>
          </div>
          <div class="sp-timeline-item">
            <div>
              <div class="sp-timeline-time">8 : 00 &nbsp; P M</div>
              <div class="sp-timeline-moment">Gregg Russell sings under Liberty Oak — a 400-year-old live oak and a Sea Pines tradition for 40 years.</div>
            </div>
            <div class="sp-timeline-img"><div class="sp-timeline-img-inner" style="background: linear-gradient(135deg,#1a1a3a 0%,#0a0a1a 100%);"></div></div>
          </div>
        </div>
      </div>
    </div>
  `;

  // ══════════════════════════════════════════════════════════════════════════
  // STRIPE 3 — MARINA + POOL (dual image panels)
  // ══════════════════════════════════════════════════════════════════════════
  var s3CSS = `
    .sp-stripe-images { display: grid; grid-template-columns: 1fr 1fr; height: 54vh; }
    .sp-img-panel { position: relative; overflow: hidden; }
    .sp-img-panel .sp-img-bg { position: absolute; inset: 0; background-size: cover; background-position: center; transition: transform 0.7s ease; }
    .sp-img-panel:hover .sp-img-bg { transform: scale(1.04); }
    .sp-img-panel .sp-img-grad { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,15,28,0.82) 0%, rgba(10,15,28,0.22) 45%, transparent 75%); z-index: 1; }
    .sp-img-panel .sp-caption { position: absolute; bottom: 0; left: 0; right: 0; padding: 24px 32px; z-index: 2; }
    .sp-cap-eyebrow { font-family: 'Montserrat', sans-serif; font-size: 9px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: #0ABAB5; margin-bottom: 6px; }
    .sp-cap-title { font-family: 'Bodoni Moda', serif; font-style: italic; font-size: 20px; font-weight: 400; color: #fff; line-height: 1.25; }
    .sp-img-panel:first-child { border-right: 1px solid rgba(255,255,255,0.07); }
    @media (max-width: 768px) { .sp-stripe-images { grid-template-columns: 1fr; height: auto; } .sp-img-panel { height: 320px; } }
  `;

  var s3HTML = `
    <div class="sp-stripe-images">
      <div class="sp-img-panel">
        <div class="sp-img-bg" style="background-image:url('/marina-aerial.jpg'); background-position:center 30%;"></div>
        <div class="sp-img-grad"></div>
        <div class="sp-caption"><div class="sp-cap-eyebrow">Harbour Town Marina</div><div class="sp-cap-title">Where life moves at the pace of the tide</div></div>
      </div>
      <div class="sp-img-panel">
        <div class="sp-img-bg" style="background-image:url('/pool-riviera.jpg'); background-position:center 55%;"></div>
        <div class="sp-img-grad"></div>
        <div class="sp-caption"><div class="sp-cap-eyebrow">Sea Pines Resort</div><div class="sp-cap-title">Riviera poolside living</div></div>
      </div>
    </div>
  `;

  // ══════════════════════════════════════════════════════════════════════════
  // STRIPE 2 — CHARLES FRASER (editorial text band)
  // ══════════════════════════════════════════════════════════════════════════
  var s2CSS = `
    .sp-stripe-text { background: #ffffff; padding: 100px 40px; text-align: center; }
    .sp-stripe-text-inner { max-width: 820px; margin: 0 auto; }
    .sp-text-eyebrow { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 500; letter-spacing: 4px; text-transform: uppercase; color: #D4AF37; margin-bottom: 24px; display: flex; align-items: center; justify-content: center; gap: 16px; }
    .sp-text-eyebrow-rule { width: 40px; height: 1px; background: #D4AF37; flex-shrink: 0; }
    .sp-text-section-title { font-family: 'Playfair Display', Georgia, serif; font-weight: 400; font-size: clamp(42px,5vw,64px); color: #111; line-height: 1.10; text-transform: uppercase; margin-bottom: 20px; }
    .sp-text-section-title em { font-style: italic; color: #092969; }
    .sp-text-body { font-family: 'Montserrat', sans-serif; font-size: 14px; line-height: 1.85; color: #444; margin-bottom: 20px; max-width: 700px; margin-left: auto; margin-right: auto; }
    .sp-text-pull-quote { border-top: 1px solid rgba(212,175,55,0.25); border-bottom: 1px solid rgba(212,175,55,0.25); padding: 36px 48px; margin: 36px auto 44px; max-width: 640px; }
    .sp-text-pull-quote p { font-family: 'Playfair Display', Georgia, serif; font-style: italic; font-size: clamp(18px,2vw,24px); line-height: 1.65; color: #092969; margin-bottom: 14px; }
    .sp-text-pull-quote cite { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 500; letter-spacing: 3px; text-transform: uppercase; color: #D4AF37; font-style: normal; }
    .sp-text-cta { display: inline-flex; align-items: center; gap: 10px; font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: #092969; text-decoration: none; border: 1px solid #092969; padding: 14px 28px; transition: background 0.2s, color 0.2s; }
    .sp-text-cta:hover { background: #092969; color: #fff; }
    @media (max-width: 768px) { .sp-stripe-text { padding: 60px 24px; } .sp-text-pull-quote { padding: 28px 24px; } }
  `;

  var s2HTML = `
    <div class="sp-stripe-text">
      <div class="sp-stripe-text-inner">
        <div class="sp-text-eyebrow"><div class="sp-text-eyebrow-rule"></div>Founded 1956 &nbsp;·&nbsp; A Vision Ahead of Its Time<div class="sp-text-eyebrow-rule"></div></div>
        <h2 class="sp-text-section-title">Charles Fraser &amp; the<br><em>Birth of Sea Pines</em></h2>
        <p class="sp-text-body">In 1956, a young Yale-educated attorney named Charles Fraser looked out over 5,000 acres of pristine Carolina Sea Islands barrier island and saw something extraordinary — not a resort to be imposed upon the land, but one designed to live in perfect harmony with it.</p>
        <p class="sp-text-body">Fraser balanced homes, golf courses, and gathering spaces with preserved tidal marshes, ancient live oaks, and the island's native ecosystem. He established a conservation foundation to safeguard Sea Pines' natural beauty well beyond his own lifetime.</p>
        <div class="sp-text-pull-quote">
          <p>"Hilton Head is the very first community in the United States to have been eco-planned. Charles Fraser was way ahead of his time — and his legacy stands to this day."</p>
          <cite>— Talita, BHHP</cite>
        </div>
        <a href="https://search.besthiltonheadproperties.com" class="sp-text-cta">Explore Sea Pines Homes &nbsp;→</a>
      </div>
    </div>
  `;

  // ══════════════════════════════════════════════════════════════════════════
  // WIDGET 1 — THE RESIDENCES (magazine grid + IDX CTA)
  // ══════════════════════════════════════════════════════════════════════════
 italic; }
    .sp-res-subtitle { font-family: Georgia, serif; font-size: 15px; font-style: italic; color: #666; max-width: 380px; line-height: 1.6; margin: 0; }
    .sp-res-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 4px; margin-bottom: 48px; }
    .sp-res-card { position: relative; height: 440px; overflow: hidden; cursor: pointer; text-decoration: none; display: block; }
    .sp-res-card-bg { position: absolute; inset: 0; background-size: cover; background-position: center; transition: transform 0.7s ease; }
    .sp-res-card:hover .sp-res-card-bg { transform: scale(1.05); }
    .sp-res-card-scrim { position: absolute; inset: 0; background: linear-gradient(to top, rgba(8,14,28,0.95) 0%, rgba(8,14,28,0.4) 50%, rgba(8,14,28,0.1) 100%); }
    .sp-res-card-content { position: absolute; bottom: 0; left: 0; right: 0; padding: 28px 24px; }
    .sp-res-card-type { font-family: 'Montserrat', sans-serif; font-size: 8px; letter-spacing: 3px; text-transform: uppercase; color: #0ABAB5; margin-bottom: 8px; font-weight: 600; }
    .sp-res-card-name { font-family: 'Playfair Display', Georgia, serif; font-size: 20px; font-weight: 400; color: #fff; line-height: 1.2; margin-bottom: 10px; }
    .sp-res-card-price { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 600; color: #fff; margin-bottom: 6px; }
    .sp-res-card-count { font-family: 'Montserrat', sans-serif; font-size: 9px; letter-spacing: 2px; color: rgba(255,255,255,0.45); text-transform: uppercase; }
    .sp-res-card-count::before { content: '◆  '; font-size: 7px; }
    .sp-res-cta-row { text-align: center; }
    .sp-res-cta { display: inline-flex; align-items: center; gap: 12px; font-family: 'Montserrat', sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: #fff; background: #0ABAB5; text-decoration: none; padding: 18px 40px; transition: background 0.2s; }
    .sp-res-cta:hover { background: #0d9e9a; }
    .sp-res-cta-sub { font-family: 'Montserrat', sans-serif; font-size: 10px; color: #999; letter-spacing: 1px; margin-top: 14px; }
    @media (max-width: 1024px) { .sp-res-grid { grid-template-columns: repeat(3, 1fr); } .sp-res-card { height: 360px; } }
    @media (max-width: 640px) { .sp-res-grid { grid-template-columns: 1fr 1fr; } .sp-res-section { padding: 60px 20px; } }
  `;

  var w1HTML = `
    <div class="sp-res-section">
      <div class="sp-res-inner">
        <div class="sp-res-header">
          <div>
            <div class="sp-res-eyebrow">Sea Pines Real Estate</div>
            <h2 class="sp-res-title">The <em>Residences</em></h2>
          </div>
          <p class="sp-res-subtitle">From oceanfront estates to marina villas — find the Sea Pines address that fits your life.</p>
        </div>
        <div class="sp-res-grid">
          <a class="sp-res-card" href="https://search.besthiltonheadproperties.com" target="_blank">
            <div class="sp-res-card-bg" style="background: linear-gradient(160deg,#1a3a5c 0%,#0d2240 100%);"></div>
            <div class="sp-res-card-scrim"></div>
            <div class="sp-res-card-content">
              <div class="sp-res-card-type">Premier Collection</div>
              <div class="sp-res-card-name">Oceanfront Estates</div>
              <div class="sp-res-card-price">$5M — $10M+</div>
              <div class="sp-res-card-count">8 Available</div>
            </div>
          </a>
          <a class="sp-res-card" href="https://search.besthiltonheadproperties.com" target="_blank">
            <div class="sp-res-card-bg" style="background: linear-gradient(160deg,#1a3a2c 0%,#0d2a1c 100%);"></div>
            <div class="sp-res-card-scrim"></div>
            <div class="sp-res-card-content">
              <div class="sp-res-card-type">Golf Course</div>
              <div class="sp-res-card-name">Fairway Homes</div>
              <div class="sp-res-card-price">$1.2M — $3M</div>
              <div class="sp-res-card-count">12 Available</div>
            </div>
          </a>
          <a class="sp-res-card" href="https://search.besthiltonheadproperties.com" target="_blank">
            <div class="sp-res-card-bg" style="background: linear-gradient(160deg,#2a1a0a 0%,#1a0d05 100%);"></div>
            <div class="sp-res-card-scrim"></div>
            <div class="sp-res-card-content">
              <div class="sp-res-card-type">Harbour Town</div>
              <div class="sp-res-card-name">Marina Villas</div>
              <div class="sp-res-card-price">$800K — $2M</div>
              <div class="sp-res-card-count">6 Available</div>
            </div>
          </a>
          <a class="sp-res-card" href="https://search.besthiltonheadproperties.com" target="_blank">
            <div class="sp-res-card-bg" style="background: linear-gradient(160deg,#1a2a4a 0%,#0a1a3a 100%);"></div>
            <div class="sp-res-card-scrim"></div>
            <div class="sp-res-card-content">
              <div class="sp-res-card-type">Lagoon-Front</div>
              <div class="sp-res-card-name">Lagoon Retreats</div>
              <div class="sp-res-card-price">$1.5M — $4M</div>
              <div class="sp-res-card-count">10 Available</div>
            </div>
          </a>
          <a class="sp-res-card" href="https://search.besthiltonheadproperties.com" target="_blank">
            <div class="sp-res-card-bg" style="background: linear-gradient(160deg,#2a2a3a 0%,#1a1a2a 100%);"></div>
            <div class="sp-res-card-scrim"></div>
            <div class="sp-res-card-content">
              <div class="sp-res-card-type">Resort Collection</div>
              <div class="sp-res-card-name">Resort Villas</div>
              <div class="sp-res-card-price">$500K — $1.2M</div>
              <div class="sp-res-card-count">18 Available</div>
            </div>
          </a>
        </div>
        <div class="sp-res-cta-row">
          <a href="https://search.besthiltonheadproperties.com" target="_blank" class="sp-res-cta">Search All Sea Pines Listings &nbsp;→</a>
          <p class="sp-res-cta-sub">Live listings · Updated daily · No registration required</p>
        </div>
      </div>
    </div>
  `;

  // ══════════════════════════════════════════════════════════════════════════
  // GOLF — A LEGACY UNMATCHED
  // ══════════════════════════════════════════════════════════════════════════
  var golfCSS = `
    .sp-golf-section { background: #fff; }
    .sp-golf-mag { max-width: 1400px; margin: 0 auto; padding: 80px 40px 0; }
    .sp-golf-mag-eyebrow { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; }
    .sp-golf-mag-eyebrow-rule { height: 1px; width: 40px; background: rgb(212,175,55); flex-shrink: 0; }
    .sp-golf-mag-eyebrow-text { font-family: 'Montserrat', sans-serif; font-size: 10px; letter-spacing: 4px; color: rgb(212,175,55); text-transform: uppercase; font-weight: 500; margin: 0; }
    .sp-golf-mag-title { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(40px,5vw,64px); font-weight: 400; color: #111; margin: 0 0 16px; line-height: 1.1; }
    .sp-golf-mag-title em { font-style: italic; }
    .sp-golf-mag-subtitle { font-family: Georgia, serif; font-size: 17px; color: #555; line-height: 1.7; max-width: 600px; font-style: italic; margin: 0 0 52px; }
    .sp-golf-video-strip { width: 100%; aspect-ratio: 16/7; background: #0a1628; position: relative; overflow: hidden; }
    .sp-golf-video-strip video { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); min-width: 100%; min-height: 100%; object-fit: cover; }
    .sp-golf-video-grad-top { position: absolute; top: 0; left: 0; right: 0; height: 80px; background: linear-gradient(to bottom, #fff 0%, transparent 100%); z-index: 2; }
    .sp-golf-video-grad-bot { position: absolute; bottom: 0; left: 0; right: 0; height: 80px; background: linear-gradient(to top, #fff 0%, transparent 100%); z-index: 2; }
    .sp-golf-mag-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 4px; min-height: 560px; margin-top: 4px; }
    .sp-golf-hero { position: relative; overflow: hidden; background: #0a1628; }
    .sp-golf-hero-img { position: absolute; inset: 0; background-image: url('/Sea%20Pines%20Lighthouse%20Golf'); background-size: cover; background-position: center 35%; }
    .sp-golf-hero-grad { position: absolute; inset: 0; background: linear-gradient(to top, rgba(8,14,28,0.95) 0%, rgba(8,14,28,0.45) 45%, rgba(8,14,28,0.1) 100%); }
    .sp-golf-hero-content { position: absolute; bottom: 0; left: 0; right: 0; padding: 40px 44px; }
    .sp-golf-hero-num { font-family: 'Playfair Display', serif; font-size: 72px; font-weight: 400; color: rgba(212,175,55,0.2); line-height: 1; margin: 0 0 4px; }
    .sp-golf-hero-tag { font-family: 'Montserrat', sans-serif; font-size: 9px; letter-spacing: 3px; color: rgb(212,175,55); text-transform: uppercase; font-weight: 600; margin: 0 0 10px; }
    .sp-golf-hero-name { font-family: 'Playfair Display', serif; font-size: 34px; font-weight: 400; color: #fff; margin: 0 0 8px; line-height: 1.15; }
    .sp-golf-hero-name em { font-style: italic; }
    .sp-golf-hero-designer { font-family: 'Montserrat', sans-serif; font-size: 9px; letter-spacing: 2.5px; color: rgba(255,255,255,0.5); text-transform: uppercase; margin: 0 0 16px; }
    .sp-golf-hero-desc { font-family: Georgia, serif; font-size: 13.5px; color: rgba(255,255,255,0.75); line-height: 1.75; margin: 0 0 20px; }
    .sp-golf-hero-badge { display: inline-block; font-family: 'Montserrat', sans-serif; font-size: 8px; letter-spacing: 2px; color: rgb(212,175,55); text-transform: uppercase; border: 1px solid rgba(212,175,55,0.4); padding: 5px 12px; margin-right: 8px; }
    .sp-golf-stack { display: flex; flex-direction: column; gap: 4px; }
    .sp-golf-card { background: #0d1e35; padding: 32px 36px; flex: 1; display: flex; flex-direction: column; justify-content: center; position: relative; overflow: hidden; }
    .sp-golf-card-bg { position: absolute; inset: 0; background-size: cover; background-position: center; opacity: 0.22; transition: opacity 0.4s; }
    .sp-golf-card:hover .sp-golf-card-bg { opacity: 0.38; }
    .sp-golf-card > *:not(.sp-golf-card-bg) { position: relative; z-index: 1; }
    .sp-golf-card-num { font-family: 'Playfair Display', serif; font-size: 40px; color: rgba(212,175,55,0.18); line-height: 1; margin: 0 0 6px; }
    .sp-golf-card-tag { font-family: 'Montserrat', sans-serif; font-size: 8.5px; letter-spacing: 3px; color: rgb(212,175,55); text-transform: uppercase; font-weight: 600; margin: 0 0 8px; }
    .sp-golf-card-name { font-family: 'Playfair Display', serif; font-size: 22px; color: #fff; margin: 0 0 6px; line-height: 1.2; }
    .sp-golf-card-name em { font-style: italic; }
    .sp-golf-card-designer { font-family: 'Montserrat', sans-serif; font-size: 8px; letter-spacing: 2px; color: rgba(255,255,255,0.35); text-transform: uppercase; margin: 0 0 12px; }
    .sp-golf-card-desc { font-family: Georgia, serif; font-size: 12.5px; color: rgba(255,255,255,0.6); line-height: 1.7; margin: 0 0 14px; }
    .sp-golf-card-badge { font-family: 'Montserrat', sans-serif; font-size: 7.5px; letter-spacing: 2px; color: rgb(212,175,55); text-transform: uppercase; }
    .sp-golf-card-badge::before { content: '★  '; }
    .sp-golf-bottom-pad { height: 80px; background: #fff; }
    @media (max-width: 768px) { .sp-golf-mag-grid { grid-template-columns: 1fr; } .sp-golf-hero { min-height: 420px; } .sp-golf-mag { padding: 60px 24px 0; } }
  `;

  var golfHTML = `
    <div class="sp-golf-section">
      <div class="sp-golf-mag">
        <div class="sp-golf-mag-eyebrow"><div class="sp-golf-mag-eyebrow-rule"></div><p class="sp-golf-mag-eyebrow-text">Golf at Sea Pines &nbsp;·&nbsp; Three Championship Courses</p><div class="sp-golf-mag-eyebrow-rule"></div></div>
        <h2 class="sp-golf-mag-title">A Legacy<br><em style="color:#0ABAB5">Unmatched</em></h2>
        <p class="sp-golf-mag-subtitle">Three world-class courses, three distinct personalities — all within a private 5,000-acre address on Hilton Head Island.</p>
      </div>
      <div class="sp-golf-video-strip">
        <div class="sp-golf-video-grad-top"></div>
        <video autoplay muted loop playsinline><source src="/golf-website-banner_23.mp4" type="video/mp4"></video>
        <div class="sp-golf-video-grad-bot"></div>
      </div>
      <div class="sp-golf-mag-grid">
        <div class="sp-golf-hero"><div class="sp-golf-hero-img"></div><div class="sp-golf-hero-grad"></div>
          <div class="sp-golf-hero-content">
            <p class="sp-golf-hero-num">01</p><p class="sp-golf-hero-tag">Championship Play &nbsp;·&nbsp; PGA Tour Host</p>
            <h3 class="sp-golf-hero-name">Harbour Town<br><em>Golf Links</em></h3>
            <p class="sp-golf-hero-designer">Pete Dye &nbsp;·&nbsp; Jack Nicklaus</p>
            <p class="sp-golf-hero-desc">Host of the RBC Heritage every April. Ranked Top 100 in America by Golf Digest. The 18th hole — lighthouse over Calibogue Sound — is one of the most photographed finishing holes in golf.</p>
            <span class="sp-golf-hero-badge">Top 100 · Golf Digest</span><span class="sp-golf-hero-badge">RBC Heritage Host</span>
          </div>
        </div>
        <div class="sp-golf-stack">
          <div class="sp-golf-card"><div class="sp-golf-card-bg" style="background-image:url('https://www.seapines.com/sites/default/files/styles/wide/public/media/images/heron-point-hole-18.jpg?itok=zhF-8wBc');"></div>
            <p class="sp-golf-card-num">02</p><p class="sp-golf-card-tag">Pete Dye Signature Design</p>
            <h3 class="sp-golf-card-name">Heron Point<br><em>by Pete Dye</em></h3>
            <p class="sp-golf-card-designer">Pete Dye Design</p>
            <p class="sp-golf-card-desc">Weaving through tidal marshes and ancient live oaks — strategic shot-making over brute force.</p>
            <span class="sp-golf-card-badge">Pete Dye Signature</span>
          </div>
          <div class="sp-golf-card"><div class="sp-golf-card-bg" style="background-image:url('https://www.seapines.com/sites/default/files/styles/wide/public/media/images/Golf.jpeg?itok=fL6PeDdv');"></div>
            <p class="sp-golf-card-num">03</p><p class="sp-golf-card-tag">2018 NGCOA Golf Course of the Year</p>
            <h3 class="sp-golf-card-name">Atlantic Dunes<br><em>by Davis Love III</em></h3>
            <p class="sp-golf-card-designer">Davis Love III Design</p>
            <p class="sp-golf-card-desc">The only course in Sea Pines with Atlantic ocean vistas. Named Golf Course of the Year by the NGCOA.</p>
            <span class="sp-golf-card-badge">NGCOA Course of the Year</span>
          </div>
        </div>
      </div>
      <div class="sp-golf-bottom-pad"></div>
    </div>
  `;

  // ══════════════════════════════════════════════════════════════════════════
  // GLC — REFINE YOUR GAME
  // ══════════════════════════════════════════════════════════════════════════
  var glcCSS = `
    .sp-glc-section { background: #fff; }
    .sp-glc-header { max-width: 1400px; margin: 0 auto; padding: 80px 40px 52px; }
    .sp-glc-eyebrow { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; }
    .sp-glc-eyebrow-rule { height: 1px; width: 40px; background: #111; flex-shrink: 0; }
    .sp-glc-eyebrow-text { font-family: 'Montserrat', sans-serif; font-size: 10px; letter-spacing: 4px; color: #555; text-transform: uppercase; font-weight: 500; margin: 0; }
    .sp-glc-title { font-family: 'Playfair Display', serif; font-size: clamp(40px,5vw,64px); font-weight: 400; color: #111; margin: 0 0 16px; line-height: 1.1; }
    .sp-glc-title em { font-style: italic; }
    .sp-glc-subtitle { font-family: Georgia, serif; font-size: 17px; color: #555; line-height: 1.7; max-width: 580px; font-style: italic; margin: 0; }
    .sp-glc-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 4px; min-height: 580px; }
    .sp-glc-hero { position: relative; overflow: hidden; background: #111; }
    .sp-glc-hero-img { position: absolute; inset: 0; background-image: url('https://www.seapines.com/sites/default/files/styles/hero_desktop/public/media/images/Golf%20learning%20center.jpg?h=e4f440a4&itok=ys8YCgF_'); background-size: cover; background-position: center 20%; }
    .sp-glc-hero-scrim { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.18) 50%, rgba(0,0,0,0.04) 100%); }
    .sp-glc-hero-content { position: absolute; bottom: 0; left: 0; right: 0; padding: 40px 44px; }
    .sp-glc-hero-label { font-family: 'Montserrat', sans-serif; font-size: 9px; letter-spacing: 3px; color: rgba(255,255,255,0.55); text-transform: uppercase; margin: 0 0 12px; }
    .sp-glc-hero-name { font-family: 'Playfair Display', serif; font-size: 34px; color: #fff; margin: 0 0 8px; line-height: 1.15; }
    .sp-glc-hero-name em { font-style: italic; }
    .sp-glc-hero-desc { font-family: Georgia, serif; font-size: 13.5px; color: rgba(255,255,255,0.72); line-height: 1.7; margin: 0 0 18px; max-width: 420px; }
    .sp-glc-hero-chip { display: inline-block; font-family: 'Montserrat', sans-serif; font-size: 8px; letter-spacing: 1.5px; color: rgba(255,255,255,0.7); text-transform: uppercase; border: 1px solid rgba(255,255,255,0.3); padding: 5px 12px; margin-right: 6px; }
    .sp-glc-stack { display: flex; flex-direction: column; gap: 4px; }
    .sp-glc-card { position: relative; overflow: hidden; flex: 1; background: #111; min-height: 186px; cursor: pointer; }
    .sp-glc-card-img { position: absolute; inset: 0; background-size: cover; background-position: center; transition: transform 0.5s ease; }
    .sp-glc-card:hover .sp-glc-card-img { transform: scale(1.04); }
    .sp-glc-card-scrim { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.1) 100%); }
    .sp-glc-card-content { position: absolute; bottom: 0; left: 0; right: 0; padding: 22px 28px; }
    .sp-glc-card-tag { font-family: 'Montserrat', sans-serif; font-size: 8px; letter-spacing: 3px; color: rgba(255,255,255,0.5); text-transform: uppercase; margin: 0 0 6px; }
    .sp-glc-card-name { font-family: 'Playfair Display', serif; font-size: 21px; color: #fff; margin: 0 0 5px; line-height: 1.15; }
    .sp-glc-card-name em { font-style: italic; }
    .sp-glc-card-sub { font-family: 'Montserrat', sans-serif; font-size: 8px; letter-spacing: 1.5px; color: rgba(255,255,255,0.45); text-transform: uppercase; margin: 0; }
    .sp-glc-pad { height: 80px; background: #fff; }
    @media (max-width: 768px) { .sp-glc-grid { grid-template-columns: 1fr; } .sp-glc-hero { min-height: 420px; } .sp-glc-header { padding: 60px 24px 40px; } }
  `;

  var glcHTML = `
    <div class="sp-glc-section">
      <div class="sp-glc-header">
        <div class="sp-glc-eyebrow"><div class="sp-glc-eyebrow-rule"></div><p class="sp-glc-eyebrow-text">Golf Learning Center &nbsp;·&nbsp; Sea Pines Resort</p><div class="sp-glc-eyebrow-rule"></div></div>
        <h2 class="sp-glc-title">Refine Your<br><em style="color:#0ABAB5">Game.</em></h2>
        <p class="sp-glc-subtitle">PGA &amp; LPGA certified instructors, TrackMan technology, and personalized programs for every level.</p>
      </div>
      <div class="sp-glc-grid">
        <div class="sp-glc-hero"><div class="sp-glc-hero-img"></div><div class="sp-glc-hero-scrim"></div>
          <div class="sp-glc-hero-content">
            <p class="sp-glc-hero-label">Golf Learning Center &nbsp;·&nbsp; Hilton Head Island</p>
            <h3 class="sp-glc-hero-name">World-Class<br><em>Instruction</em></h3>
            <p class="sp-glc-hero-desc">PGA &amp; LPGA certified professionals, decades of combined experience, and the latest launch monitor technology — all tailored to your game.</p>
            <span class="sp-glc-hero-chip">Golf Digest Editors' Choice</span><span class="sp-glc-hero-chip">No. 5 Golf Resort · Golf Inc</span>
          </div>
        </div>
        <div class="sp-glc-stack">
          <div class="sp-glc-card"><div class="sp-glc-card-img" style="background-image:url('https://www.seapines.com/sites/default/files/styles/image_grid/public/2022-03/rick-barry.jpg'); background-position:center 38%;"></div><div class="sp-glc-card-scrim"></div>
            <div class="sp-glc-card-content"><p class="sp-glc-card-tag">One-on-One Coaching</p><h4 class="sp-glc-card-name">Private <em>Instruction</em></h4><p class="sp-glc-card-sub">PGA · LPGA Certified Staff</p></div>
          </div>
          <div class="sp-glc-card"><div class="sp-glc-card-img" style="background-image:url('https://www.seapines.com/sites/default/files/styles/image_grid/public/2022-03/julie-cole.jpg'); background-position:center 30%;"></div><div class="sp-glc-card-scrim"></div>
            <div class="sp-glc-card-content"><p class="sp-glc-card-tag">Group Clinics · Golf Schools</p><h4 class="sp-glc-card-name">Golf <em>Schools</em></h4><p class="sp-glc-card-sub">Women's · Adult · All Levels</p></div>
          </div>
          <div class="sp-glc-card"><div class="sp-glc-card-img" style="background-image:url('https://www.seapines.com/sites/default/files/styles/image_grid/public/2022-03/tim-cooke.jpg'); background-position:center 35%;"></div><div class="sp-glc-card-scrim"></div>
            <div class="sp-glc-card-content"><p class="sp-glc-card-tag">Launch Monitor · Precision Analysis</p><h4 class="sp-glc-card-name">Club <em>Fitting</em></h4><p class="sp-glc-card-sub">TPI-Certified Staff</p></div>
          </div>
        </div>
      </div>
      <div class="sp-glc-pad"></div>
    </div>
  `;

  // ══════════════════════════════════════════════════════════════════════════
  // WIDGET 4 — SCHOOLS & FAMILY LIFE
  // ══════════════════════════════════════════════════════════════════════════
  var w4CSS = `
    .sp-family-section { background: #F7F5F0; padding: 100px 40px; }
    .sp-family-inner { max-width: 1200px; margin: 0 auto; }
    .sp-family-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
    .sp-family-eyebrow { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 500; letter-spacing: 4px; text-transform: uppercase; color: #0ABAB5; margin-bottom: 16px; display: flex; align-items: center; gap: 10px; }
    .sp-family-eyebrow::before { content: ''; display: inline-block; width: 24px; height: 1px; background: #0ABAB5; }
    .sp-family-title { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(36px,4vw,56px); font-weight: 400; color: #111; line-height: 1.1; margin-bottom: 24px; }
    .sp-family-title em { font-style: italic; }
    .sp-family-title strong { font-style: normal; font-weight: 400; color: #0A1628; }
    .sp-family-text { font-family: 'Montserrat', sans-serif; font-size: 14px; line-height: 1.85; color: #555; margin-bottom: 40px; }
    .sp-family-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
    .sp-family-stat { border-left: 2px solid #0ABAB5; padding-left: 16px; }
    .sp-family-stat-value { font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 400; color: #0A1628; line-height: 1; margin-bottom: 6px; }
    .sp-family-stat-label { font-family: 'Montserrat', sans-serif; font-size: 10px; letter-spacing: 1.5px; color: #888; text-transform: uppercase; }
    .sp-family-image { position: relative; height: 520px; overflow: hidden; }
    .sp-family-image-bg { position: absolute; inset: 0; background: linear-gradient(135deg, #c9a96e 0%, #1a3a2c 50%, #0a2a1c 100%); background-size: cover; background-position: center; }
    .sp-family-image-badge { position: absolute; bottom: 32px; left: 32px; background: rgba(10,22,40,0.75); backdrop-filter: blur(10px); border: 1px solid rgba(10,186,181,0.3); padding: 20px 24px; }
    .sp-family-badge-value { font-family: 'Playfair Display', serif; font-size: 40px; color: #fff; line-height: 1; }
    .sp-family-badge-label { font-family: 'Montserrat', sans-serif; font-size: 9px; letter-spacing: 2px; color: rgba(255,255,255,0.55); text-transform: uppercase; margin-top: 4px; }
    @media (max-width: 900px) { .sp-family-grid { grid-template-columns: 1fr; gap: 48px; } .sp-family-image { height: 360px; } .sp-family-section { padding: 60px 24px; } }
  `;

  var w4HTML = `
    <div class="sp-family-section">
      <div class="sp-family-inner">
        <div class="sp-family-grid">
          <div>
            <div class="sp-family-eyebrow">Family Life at Sea Pines</div>
            <h2 class="sp-family-title"><em>Where Families</em><br><strong>FLOURISH</strong></h2>
            <p class="sp-family-text">Sea Pines isn't just a place to own property — it's a place to raise a family. Children grow up biking shaded trails, learning to sail from Harbour Town Marina, and spending summers on five miles of private beach. The island offers top-rated public and private schools within minutes of the gate, and Sea Pines' own recreation programs keep kids engaged year-round.</p>
            <div class="sp-family-stats">
              <div class="sp-family-stat"><div class="sp-family-stat-value">A+</div><div class="sp-family-stat-label">Niche School Rating</div></div>
              <div class="sp-family-stat"><div class="sp-family-stat-value">12:1</div><div class="sp-family-stat-label">Student-Teacher Ratio</div></div>
              <div class="sp-family-stat"><div class="sp-family-stat-value">6</div><div class="sp-family-stat-label">Schools Within 10 Min</div></div>
              <div class="sp-family-stat"><div class="sp-family-stat-value">3</div><div class="sp-family-stat-label">Private School Options</div></div>
            </div>
          </div>
          <div class="sp-family-image">
            <div class="sp-family-image-bg"></div>
            <div class="sp-family-image-badge">
              <div class="sp-family-badge-value">15 mi</div>
              <div class="sp-family-badge-label">of bike trails</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // ══════════════════════════════════════════════════════════════════════════
  // WIDGET 5 — LOCATION & ACCESS
  // ══════════════════════════════════════════════════════════════════════════
  var w5CSS = `
    .sp-access-section { background: #0A1628; padding: 100px 40px; }
    .sp-access-inner { max-width: 1300px; margin: 0 auto; }
    .sp-access-eyebrow { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 500; letter-spacing: 4px; text-transform: uppercase; color: #0ABAB5; margin-bottom: 16px; display: flex; align-items: center; gap: 10px; }
    .sp-access-eyebrow::before { content: ''; display: inline-block; width: 24px; height: 1px; background: #0ABAB5; opacity: 0.6; }
    .sp-access-title { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(38px,4.5vw,60px); font-weight: 400; color: #fff; line-height: 1.1; margin-bottom: 14px; }
    .sp-access-title em { font-style: italic; }
    .sp-access-tagline { font-family: Georgia, serif; font-size: 16px; font-style: italic; color: rgba(255,255,255,0.5); margin-bottom: 56px; max-width: 520px; line-height: 1.6; }
    .sp-access-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 3px; margin-bottom: 48px; }
    .sp-access-card { background: #0E1F3E; overflow: hidden; }
    .sp-access-card-photo { width: 100%; height: 180px; object-fit: cover; display: block; filter: brightness(0.85) saturate(0.9); }
    .sp-access-card-body { padding: 24px 20px; }
    .sp-access-card-distance { font-family: 'Playfair Display', serif; font-size: 42px; font-weight: 400; color: #fff; line-height: 1; }
    .sp-access-card-unit { font-family: 'Montserrat', sans-serif; font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: #0ABAB5; margin-bottom: 10px; font-weight: 600; }
    .sp-access-card-name { font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 600; color: #fff; margin-bottom: 8px; }
    .sp-access-card-detail { font-family: 'Montserrat', sans-serif; font-size: 11px; color: rgba(255,255,255,0.45); line-height: 1.5; }
    .sp-access-driving { display: flex; justify-content: space-between; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 40px; flex-wrap: wrap; gap: 20px; }
    .sp-access-driving-item { text-align: center; flex: 1; min-width: 100px; }
    .sp-access-driving-city { font-family: 'Montserrat', sans-serif; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-bottom: 8px; }
    .sp-access-driving-time { font-family: 'Playfair Display', serif; font-size: 28px; color: #fff; line-height: 1; }
    .sp-access-driving-miles { font-family: 'Montserrat', sans-serif; font-size: 10px; color: rgba(255,255,255,0.3); margin-top: 4px; }
    @media (max-width: 900px) { .sp-access-cards { grid-template-columns: 1fr 1fr; } .sp-access-section { padding: 60px 24px; } }
    @media (max-width: 540px) { .sp-access-cards { grid-template-columns: 1fr; } }
  `;

  var w5HTML = `
    <div class="sp-access-section">
      <div class="sp-access-inner">
        <div class="sp-access-eyebrow">Getting Here</div>
        <h2 class="sp-access-title">Location &amp; <em>Access</em></h2>
        <p class="sp-access-tagline">Sea Pines sits at the southern tip of Hilton Head Island — where the Atlantic meets Calibogue Sound.</p>
        <div class="sp-access-cards">
          <div class="sp-access-card">
            <img class="sp-access-card-photo" src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=600&q=80" alt="Hilton Head Airport">
            <div class="sp-access-card-body">
              <div class="sp-access-card-distance">HHH</div>
              <div class="sp-access-card-unit">On Island</div>
              <div class="sp-access-card-name">Hilton Head Island Airport</div>
              <div class="sp-access-card-detail">Direct flights from Charlotte, Dallas, Washington, New York &amp; more</div>
            </div>
          </div>
          <div class="sp-access-card">
            <img class="sp-access-card-photo" src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600&q=80" alt="Savannah Airport">
            <div class="sp-access-card-body">
              <div class="sp-access-card-distance">45</div>
              <div class="sp-access-card-unit">Minutes</div>
              <div class="sp-access-card-name">Savannah / Hilton Head Intl</div>
              <div class="sp-access-card-detail">SAV — daily flights from all major hubs, #1 rated U.S. airport</div>
            </div>
          </div>
          <div class="sp-access-card">
            <img class="sp-access-card-photo" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80" alt="Harbour Town Marina">
            <div class="sp-access-card-body">
              <div class="sp-access-card-distance">10</div>
              <div class="sp-access-card-unit">Minutes</div>
              <div class="sp-access-card-name">Harbour Town Marina</div>
              <div class="sp-access-card-detail">Deep-water berths, dining, shops &amp; the iconic lighthouse</div>
            </div>
          </div>
          <div class="sp-access-card">
            <img class="sp-access-card-photo" src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80" alt="Sea Pines Beach">
            <div class="sp-access-card-body">
              <div class="sp-access-card-distance">5</div>
              <div class="sp-access-card-unit">Minutes</div>
              <div class="sp-access-card-name">Coligny Beach Park</div>
              <div class="sp-access-card-detail">Hilton Head's premier public beach, dining &amp; nightlife</div>
            </div>
          </div>
        </div>
        <div class="sp-access-driving">
          <div class="sp-access-driving-item"><div class="sp-access-driving-city">Atlanta</div><div class="sp-access-driving-time">4h 30m</div><div class="sp-access-driving-miles">290 miles</div></div>
          <div class="sp-access-driving-item"><div class="sp-access-driving-city">Charlotte</div><div class="sp-access-driving-time">4h 15m</div><div class="sp-access-driving-miles">280 miles</div></div>
          <div class="sp-access-driving-item"><div class="sp-access-driving-city">Savannah</div><div class="sp-access-driving-time">45 min</div><div class="sp-access-driving-miles">35 miles</div></div>
          <div class="sp-access-driving-item"><div class="sp-access-driving-city">Charleston</div><div class="sp-access-driving-time">2h 15m</div><div class="sp-access-driving-miles">150 miles</div></div>
          <div class="sp-access-driving-item"><div class="sp-access-driving-city">Jacksonville</div><div class="sp-access-driving-time">2h 45m</div><div class="sp-access-driving-miles">175 miles</div></div>
        </div>
      </div>
    </div>
  `;

  // ── Inject all styles ─────────────────────────────────────────────────────
  var styleEl = document.createElement('style');
  styleEl.id = 'sp-widgets-css';
    var ctaCSS = `
  /* ═══ CTA BLOCK ═══ */
  .sp-cta-block { max-width:1200px; margin:0 auto; padding:72px 40px; background:#0A1628; text-align:center; }
  .sp-cta-eyebrow { font-family:'Montserrat',sans-serif; font-size:9.5px; letter-spacing:4px; text-transform:uppercase; color:#0ABAB5; font-weight:600; margin-bottom:20px; }
  .sp-cta-title { font-family:'Playfair Display',Georgia,serif; font-size:clamp(2rem,3.5vw,3rem); font-weight:400; color:#fff; line-height:1.15; margin-bottom:16px; }
  .sp-cta-title em { font-style:italic; color:#0ABAB5; }
  .sp-cta-body { font-family:'Montserrat',sans-serif; font-size:15px; line-height:1.75; color:rgba(255,2514,28,0.05) 100%); }
    .sp-explore-card-content { position: absolute; bottom: 0; left: 0; right: 0; padding: 28px 28px; }
    .sp-explore-card-location { font-family: 'Montserrat', sans-serif; font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: #0ABAB5; margin-bottom: 8px; font-weight: 600; }
    .sp-explore-card-name { font-family: 'Playfair Display', serif; font-size: 24px; color: #fff; margin-bottom: 8px; line-height: 1.2; }
    .sp-explore-card-name em { font-style: italic; }
    .sp-explore-card-tagline { font-family: Georgia, serif; font-size: 13px; font-style: italic; color: rgba(255,255,255,0.6); line-height: 1.5; margin-bottom: 14px; }
    .sp-explore-card-stats { display: flex; gap: 16px; }
    .sp-explore-card-stats span { font-family: 'Montserrat', sans-serif; font-size: 9px; letter-spacing: 1.5px; color: rgba(255,255,255,0.4); text-transform: uppercase; border: 1px solid rgba(255,255,255,0.12); padding: 3px 8px; }
    @media (max-width: 768px) { .sp-explore-grid { grid-template-columns: 1fr; } .sp-explore-section { padding: 60px 24px; } }
  `;

  var w3HTML = `
    <div class="sp-explore-section">
      <div class="sp-explore-inner">
        <div class="sp-explore-eyebrow">Also on Hilton Head Island</div>
        <h2 class="sp-explore-title"><em>Explore</em> <strong>MORE</strong></h2>
        <div class="sp-explore-grid">
          <a class="sp-explore-card" href="/wexford">
            <div class="sp-explore-card-bg" style="background: linear-gradient(135deg,#1a3a2c 0%,#0a2a1c 100%);"></div>
            <div class="sp-explore-card-overlay"></div>
            <div class="sp-explore-card-content">
              <div class="sp-explore-card-location">Hilton Head Island</div>
              <div class="sp-explore-card-name">Wexford <em>Plantation</em></div>
              <div class="sp-explore-card-tagline">Old-world elegance behind a private marina on Broad Creek.</div>
              <div class="sp-explore-card-stats"><span>Avg $1.4M</span><span>Private Marina</span></div>
            </div>
          </a>
          <a class="sp-explore-card" href="/palmetto-dunes">
            <div class="sp-explore-card-bg" style="background: linear-gradient(135deg,#2a4a6a 0%,#0a2a4a 100%);"></div>
            <div class="sp-explore-card-overlay"></div>
            <div class="sp-explore-card-content">
              <div class="sp-explore-card-location">Hilton Head Island</div>
              <div class="sp-explore-card-name">Palmetto <em>Dunes</em></div>
              <div class="sp-explore-card-tagline">Three championship courses, an 11-mile lagoon, and the island's widest beach.</div>
              <div class="sp-explore-card-stats"><span>Avg $980K</span><span>3 Golf Courses</span></div>
            </div>
          </a>
          <a class="sp-explore-card" href="/hilton-head-plantation">
            <div class="sp-explore-card-bg" style="background: linear-gradient(135deg,#3a2a3a 0%,#1a1a2a 100%);"></div>
            <div class="sp-explore-card-overlay"></div>
            <div class="sp-explore-card-content">
              <div class="sp-explore-card-location">Hilton Head Island</div>
              <div class="sp-explore-card-name">Hilton Head <em>Plantation</em></div>
              <div class="sp-explore-card-tagline">4,000 acres of family-oriented coastal living with four golf courses.</div>
              <div class="sp-explore-card-stats"><span>Avg $850K</span><span>4,000 Acres</span></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  `;

  // ── Inject all styles ──────────────────────────────────────────────────────
  var styleEl = document.createElement('style');
  styleEl.id = 'sp-widgets-css';
    var ctaCSS = `
  /* ═══ CTA BLOCK ═══ */
  .sp-cta-block { max-width:1200px; margin:0 auto; padding:72px 40px; background:#0A1628; text-align:center; }
  .sp-cta-eyebrow { font-family:'Montserrat',sans-serif; font-size:9.5px; letter-spacing:4px; text-transform:uppercase; color:#0ABAB5; font-weight:600; margin-bottom:20px; }
  .sp-cta-title { font-family:'Playfair Display',Georgia,serif; font-size:clamp(2rem,3.5vw,3rem); font-weight:400; color:#fff; line-height:1.15; margin-bottom:16px; }
  .sp-cta-title em { font-style:italic; color:#0ABAB5; }
  .sp-cta-body { font-family:'Montserrat',sans-serif; font-size:15px; line-height:1.75; color:rgba(255,255,255,0.72); max-width:560px; margin:0 auto 40px; }
  .sp-cta-actions { display:flex; gap:16px; justify-content:center; flex-wrap:wrap; }
  .sp-cta-btn-primary { display:inline-block; font-family:'Montserrat',sans-serif; font-size:10px; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:#0A1628; background:#0ABAB5; padding:16px 36px; text-decoration:none; transition:background 0.2s; }
  .sp-cta-btn-primary:hover { background:#81D8D0; }
  .sp-cta-btn-secondary { display:inline-block; font-family:'Montserrat',sans-serif; font-size:10px; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:#fff; border:1px solid rgba(255,255,255,0.4); padding:16px 36px; text-decoration:none; transition:border-color 0.2s; }
  .sp-cta-btn-secondary:hover { border-color:#0ABAB5; color:#0ABAB5; }
`;
  styleEl.textContent = s1CSS + w2CSS + s3CSS + s2CSS + w1CSS + golfCSS + glcCSS + w4CSS + w5CSS + ctaCSS + w3CSS;
  document.head.appendChild(styleEl);


  var ctaHTML = `<section class="sp-cta-block">
  <div class="sp-cta-eyebrow">Begin Your Sea Pines Story</div>
  <h2 class="sp-cta-title">Find Your <em>Perfect</em><br>Sea Pines Address</h2>
  <p class="sp-cta-body">Our team knows every street, every view, every hidden gem inside these gates. Let us match you with the Sea Pines property that fits your life — and your legacy.</p>
  <div class="sp-cta-actions">
    <a class="sp-cta-btn-primary" href="/sea-pines/listings">View All Listings</a>
    <a class="sp-cta-btn-secondary" href="/contact">Schedule a Private Tour</a>
  </div>
</section>`;

  // ── Helper: inject html as new div after targetEl ─────────────────────────
  function injectAfter(html, targetEl) {
    var wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    targetEl.parentNode.insertBefore(wrapper, targetEl.nextSibling);
    return wrapper;
  }

  // ── Main injection ────────────────────────────────────────────────────────
  function injectWidgets() {

    // 1. After hero: Resort Lifestyle → A Day at Sea Pines → Marina+Pool → Charles Fraser
    var hero = document.querySelector('.hero');
    if (hero) {
      var heroBlock = document.createElement('div');
      heroBlock.id = 'sp-hero-block';
      heroBlock.innerHTML = s1HTML + w2HTML + s3HTML + s2HTML;
      hero.parentNode.insertBefore(heroBlock, hero.nextSibling);
    }

    // 2. After .market-section (The Numbers Speak): The Residences
    var market = document.querySelector('.market-section');
    if (market) injectAfter(w1HTML, market);

    // 3. After first .sps-section (Sports & Lifestyle): Golf → GLC → Schools & Family
    var sps = document.querySelector('.sps-section:not(.dps-section)');
    if (sps) {
      var golfBlock = document.createElement('div');
      golfBlock.id = 'sp-golf-block';
      golfBlock.innerHTML = golfHTML + glcHTML + w4HTML;
      sps.parentNode.insertBefore(golfBlock, sps.nextSibling);
    }

    // 4. After .faq-section: Location & Access
    var faq = document.querySelector('.faq-section');
    if (faq) injectAfter(w5HTML, faq);

    // 5. Before footer: CTA + Explore More
    var anchor = document.querySelector('.footer-container, footer, .site-footer, [class*="footer"]');
    if (anchor) {
      var bottomWrap = document.createElement('div');
      bottomWrap.id = 'sp-bottom-cta';
      bottomWrap.innerHTML = ctaHTML + w3HTML;
      anchor.parentNode.insertBefore(bottomWrap, anchor);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectWidgets);
  } else {
    injectWidgets();
  }

})();

// ── Harbour Town Cinematic Override ──────────────────────────────────────────
(function() {
  if (!window.location.pathname.match(/\/sea-pines(\/|$)/)) return;
  function applyHarbourTownCinematic() {
    var fs = document.querySelector('.feature-section');
    if (!fs) return;
    var title = fs.querySelector('h2.section-title');
    if (!title || !title.textContent.includes('Harbour Town')) return;
    var styleEl = document.getElementById('sp-ht-cinematic-css');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'sp-ht-cinematic-css';
      styleEl.textContent = `
        .feature-section { position:relative!important; height:80vh!important; min-height:540px!important; max-height:720px!important; overflow:hidden!important; background:#0a1220!important; display:block!important; padding:0!important; margin:0!important; }
        .feature-section::before { content:''!important; position:absolute!important; inset:0!important; background-image:url('/Harbour%20town%20night%20time.jpg')!important; background-size:cover!important; background-position:center 45%!important; z-index:0!important; }
        .feature-section::after { content:''!important; position:absolute!important; inset:0!important; background:linear-gradient(100deg,rgba(8,14,28,0.04) 0%,rgba(8,14,28,0.08) 28%,rgba(8,14,28,0.68) 55%,rgba(8,14,28,0.92) 100%)!important; z-index:1!important; }
        .feature-inner { position:absolute!important; inset:0!important; display:flex!important; align-items:center!important; justify-content:flex-end!important; z-index:2!important; padding:0!important; }
        .feature-img-col { display:none!important; }
        .feature-inner > div:last-child { width:44%!important; padding:0 6% 0 0!important; color:#fff!important; }
        .section-eyebrow { font-family:'Montserrat',sans-serif!important; font-size:9.5px!important; font-weight:600!important; letter-spacing:4px!important; text-transform:uppercase!important; color:#0ABAB5!important; margin-bottom:22px!important; display:flex!important; align-items:center!important; gap:12px!important; }
        .section-eyebrow::before { content:''!important; display:inline-block!important; width:28px!important; height:1px!important; background:#0ABAB5!important; flex-shrink:0!important; }
        .feature-section h2.section-title { font-family:'Playfair Display',Georgia,serif!important; font-size:clamp(2.2rem,3vw,3.2rem)!important; font-weight:400!important; color:#fff!important; line-height:1.1!important; margin:0 0 24px 0!important; letter-spacing:-0.5px!important; }
        .feature-section h2.section-title em { font-style:italic!important; color:#0ABAB5!important; }
        .feature-section .section-body { font-family:'Montserrat',sans-serif!important; font-size:14.5px!important; line-height:1.78!important; color:rgba(255,255,255,0.80)!important; max-width:400px!important; margin:0 0 38px 0!important; }
        .feature-section ul, .feature-section li { display:none!important; }
        .feature-section .section-cta { display:inline-block!important; font-family:'Montserrat',sans-serif!important; font-size:9.5px!important; font-weight:700!important; letter-spacing:3px!important; text-transform:uppercase!important; color:#fff!important; border:1px solid rgba(255,255,255,0.45)!important; padding:14px 28px!important; text-decoration:none!important; }
      `;
      document.head.appendChild(styleEl);
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyHarbourTownCinematic);
  } else {
    applyHarbourTownCinematic();
  }
  setTimeout(applyHarbourTownCinematic, 800);
})();
