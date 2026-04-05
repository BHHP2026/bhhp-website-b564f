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
  // STRIPE 2 — CHARLES FRASER: Editorial Map Hero
  // Background: 1711 hand-colored Carolina map (Library of Congress, no restrictions)
  // Crop: pct:10,65,28,28 — "Hiltons Head Island" centered
  // ══════════════════════════════════════════════════════════════════════════
  var stripe2CSS = `
    .sp-fraser-map { position: relative; min-height: 660px; display: flex; align-items: center; overflow: hidden; }
    .sp-fraser-map-bg { position: absolute; inset: 0; background-image: url('/sc.jpg'); background-size: cover; background-position: center 40%; }
    .sp-fraser-map-overlay { position: absolute; inset: 0; background: linear-gradient(150deg, rgba(5,18,14,0.72) 0%, rgba(8,14,28,0.80) 100%); }
    .sp-fraser-content { position: relative; z-index: 2; max-width: 820px; margin: 0 auto; padding: 90px 48px; text-align: center; }
    .sp-fraser-eyebrow { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 4px; text-transform: uppercase; color: #0ABAB5; margin-bottom: 28px; }
    .sp-fraser-title { font-family: 'Bodoni Moda', Didot, serif; font-size: clamp(34px, 4.2vw, 58px); line-height: 1.12; font-weight: 400; color: #fff; margin-bottom: 30px; }
    .sp-fraser-title em { color: #0ABAB5; font-style: italic; }
    .sp-fraser-rule { width: 48px; height: 1px; background: #0ABAB5; margin: 0 auto 32px; opacity: 0.65; }
    .sp-fraser-body { font-family: 'Montserrat', sans-serif; font-size: 14px; line-height: 1.90; color: rgba(255,255,255,0.80); max-width: 650px; margin: 0 auto 20px; font-weight: 400; }
    .sp-fraser-body strong { color: #fff; font-weight: 600; }
    .sp-fraser-body-b { font-family: 'Montserrat', sans-serif; font-size: 14px; line-height: 1.90; color: rgba(255,255,255,0.80); max-width: 650px; margin: 0 auto 40px; font-weight: 400; }
    .sp-fraser-body-b strong { color: #fff; font-weight: 600; }
    .sp-fraser-cta { display: inline-block; font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #0ABAB5; text-decoration: none; border-bottom: 1px solid rgba(10,186,181,0.40); padding-bottom: 4px; transition: border-color 0.2s; }
    .sp-fraser-cta:hover { border-color: #0ABAB5; }
    .sp-fraser-ghost-year { font-family: 'Bodoni Moda', serif; font-size: 140px; font-weight: 400; font-style: italic; color: rgba(255,255,255,0.04); position: absolute; bottom: -16px; right: 36px; line-height: 1; pointer-events: none; z-index: 1; }
    .sp-fraser-map-credit { position: absolute; bottom: 12px; left: 20px; z-index: 3; font-family: 'Montserrat', sans-serif; font-size: 9px; font-weight: 400; letter-spacing: 1px; color: rgba(255,255,255,0.22); }
    @media (max-width: 768px) {
      .sp-fraser-content { padding: 64px 28px; }
      .sp-fraser-ghost-year { font-size: 80px; right: 16px; }
    }
  `;

  var stripe2HTML = `
    <div class="sp-fraser-map" id="sp-fraser-widget">
      <div class="sp-fraser-map-bg"></div>
      <div class="sp-fraser-map-overlay"></div>
      <div class="sp-fraser-content">
        <div class="sp-fraser-eyebrow">A Living Legacy &nbsp;&middot;&nbsp; Sea Pines Resort</div>
        <h2 class="sp-fraser-title">One man.<br>One vision.<br><em>5,200 acres</em> of forever.</h2>
        <div class="sp-fraser-rule"></div>
        <p class="sp-fraser-body"><strong>Charles Fraser</strong> didn&rsquo;t just build a resort. He invented a philosophy. No billboards. No neon. Building heights limited so the tree canopy always wins. Wetlands preserved. Wildlife protected.</p>
        <p class="sp-fraser-body-b">In 1973, Sea Pines was declared a <strong>Registered National Landmark</strong> &mdash; one of the few planned communities in American history to receive the distinction. Nearly seven decades later, that covenant with the land is woven into the very character of Hilton Head Island itself. <strong>To own here is to become part of that story.</strong></p>
        <a href="https://besthiltonheadproperties.com/sea-pines" class="sp-fraser-cta">View Available Properties &nbsp;&rarr;</a>
      </div>
      <div class="sp-fraser-ghost-year">1956</div>
      <span class="sp-fraser-map-credit">Map: &ldquo;Province of Carolina&rdquo; &mdash; Library of Congress, 1711</span>
    </div>
  `;

  // STRIPE 3 — TWO IMAGE PANELS: Marina + Pool
  // ══════════════════════════════════════════════════════════════════════════
  var stripe3CSS = `
    .sp-stripe-images { display: grid; grid-template-columns: 1fr 1fr; height: 54vh; }
    .sp-img-panel { position: relative; overflow: hidden; }
    .sp-img-panel .sp-img-bg { position: absolute; inset: 0; background-size: cover; background-position: center; transition: transform 0.7s ease; }
    .sp-img-panel:hover .sp-img-bg { transform: scale(1.04); }
    .sp-img-panel .sp-img-grad { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,15,28,0.82) 0%, rgba(10,15,28,0.22) 45%, transparent 75%); z-index: 1; }
    .sp-img-panel .sp-caption { position: absolute; bottom: 0; left: 0; right: 0; padding: 24px 32px; z-index: 2; }
    .sp-img-panel .sp-cap-eyebrow { font-family: 'Montserrat', sans-serif; font-size: 9px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: #0ABAB5; margin-bottom: 6px; }
    .sp-img-panel .sp-cap-title { font-family: 'Bodoni Moda', serif; font-style: italic; font-size: 20px; font-weight: 400; color: #fff; line-height: 1.25; }
    .sp-img-panel:first-child { border-right: 1px solid rgba(255,255,255,0.07); }
    @media (max-width: 768px) {
      .sp-stripe-images { grid-template-columns: 1fr; height: auto; }
      .sp-img-panel { height: 320px; }
    }
  `;

  var stripe3HTML = `
    <div class="sp-stripe-images">
      <div class="sp-img-panel">
        <div class="sp-img-bg" style="background-image:url('/marina-aerial.jpg'); background-position:center 30%;"></div>
        <div class="sp-img-grad"></div>
        <div class="sp-caption">
          <div class="sp-cap-eyebrow">Harbour Town Marina</div>
          <div class="sp-cap-title">Where life moves at the pace of the tide</div>
        </div>
      </div>
      <div class="sp-img-panel">
        <div class="sp-img-bg" style="background-image:url('/pool-riviera.jpg'); background-position:center 55%;"></div>
        <div class="sp-img-grad"></div>
        <div class="sp-caption">
          <div class="sp-cap-eyebrow">Sea Pines Resort</div>
          <div class="sp-cap-title">Riviera poolside living</div>
        </div>
      </div>
    </div>
  `;

  // ══════════════════════════════════════════════════════════════════════════
  // STRIPE 4 — GOLF COURSES: A Legacy Unmatched
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
    .sp-golf-video-strip video { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); min-width: 100%; min-height: 100%; width: auto; height: auto; object-fit: cover; }
    .sp-golf-video-grad-top { position: absolute; top: 0; left: 0; right: 0; height: 80px; background: linear-gradient(to bottom, #fff 0%, transparent 100%); z-index: 2; }
    .sp-golf-video-grad-bot { position: absolute; bottom: 0; left: 0; right: 0; height: 80px; background: linear-gradient(to top, #fff 0%, transparent 100%); z-index: 2; }
    .sp-golf-mag-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 4px; min-height: 560px; margin-top: 4px; }
    .sp-golf-hero { position: relative; overflow: hidden; background: #0a1628; }
    .sp-golf-hero-img { position: absolute; inset: 0; background-image: url('https://www.seapines.com/sites/default/files/styles/hero_desktop/public/media/images/harbour-town-golf-links-aerial-hole-18.jpg'); background-size: cover; background-position: center 35%; }
    .sp-golf-hero-grad { position: absolute; inset: 0; background: linear-gradient(to top, rgba(8,14,28,0.95) 0%, rgba(8,14,28,0.45) 45%, rgba(8,14,28,0.1) 100%); }
    .sp-golf-hero-content { position: absolute; bottom: 0; left: 0; right: 0; padding: 40px 44px; }
    .sp-golf-hero-num { font-family: 'Playfair Display', Georgia, serif; font-size: 72px; font-weight: 400; color: rgba(212,177�55,0.2); line-height: 1; margin: 0 0 4px; }
    .sp-golf-hero-tag { font-family: 'Montserrat', sans-serif; font-size: 9px; letter-spacing: 3px; color: rgb(212,175,55); text-transform: uppercase; font-weight: 600; margin: 0 0 10px; }
    .sp-golf-hero-name { font-family: 'Playfair Display', Georgia, serif; font-size: 34px; font-weight: 400; color: #fff; margin: 0 0 8px; line-height: 1.15; }
    .sp-golf-hero-name em { font-style: italic; }
    .sp-golf-hero-designer { font-family: 'Montserrat', sans-serif; font-size: 9px; letter-spacing: 2.5px; color: rgba(255,255,255,0.5); text-transform: uppercase; margin: 0 0 16px; }
    .sp-golf-hero-desc { font-family: Georgia, serif; font-size: 13.5px; color: rgba(255,255,255,0.75); line-height: 1.75; margin: 0 0 20px; }
    .sp-golf-hero-badge { display: inline-block; font-family: 'Montserrat', sans-serif; font-size: 8px; letter-spacing: 2px; color: rgb(212,175,55); text-transform: uppercase; border: 1px solid rgba(212,175,55,0.4); padding: 5px 12px; margin-right: 8px; margin-bottom: 4px; }
    .sp-golf-stack { display: flex; flex-direction: column; gap: 4px; }
    .sp-golf-card { background: #0d1e35; padding: 32px 36px; flex: 1; display: flex; flex-direction: column; justify-content: center; position: relative; overflow: hidden; }
    .sp-golf-card-bg { position: absolute; inset: 0; background-size: cover; background-position: center; opacity: 0.22; transition: opacity 0.4s; }
    .sp-golf-card:hover .sp-golf-card-bg { opacity: 0.38; }
    .sp-golf-card > *:not(.sp-golf-card-bg) { position: relative; z-index: 1; }
    .sp-golf-card-num { font-family: 'Playfair Display', Georgia, serif; font-size: 40px; font-weight: 400; color: rgba(212,175,55,0.18); line-height: 1; margin: 0 0 6px; }
    .sp-golf-card-tag { font-family: 'Montserrat', sans-serif; font-size: 8.5px; letter-spacing: 3px; color: rgb(212,175,55); text-transform: uppercase; font-weight: 600; margin: 0 0 8px; }
    .sp-golf-card-name { font-family: 'Playfair Display', Georgia, serif; font-size: 22px; font-weight: 400; color: #fff; margin: 0 0 6px; line-height: 1.2; }
    .sp-golf-card-name em { font-style: italic; }
    .sp-golf-card-designer { font-family: 'Montserrat', sans-serif; font-size: 8px; letter-spacing: 2px; color: rgba(255,255,255,0.35); text-transform: uppercase; margin: 0 0 12px; }
    .sp-golf-card-desc { font-family: Georgia, serif; font-size: 12.5px; color: rgba(255,255,255,0.6); line-height: 1.7; margin: 0 0 14px; }
    .sp-golf-card-badge { font-family: 'Montserrat', sans-serif; font-size: 7.5px; letter-spacing: 2px; color: rgb(212,175,55); text-transform: uppercase; }
    .sp-golf-card-badge::before { content: '★  '; }
    .sp-golf-bottom-pad { height: 80px; background: #fff; }
    @media (max-width: 768px) {
      .sp-golf-mag-grid { grid-template-columns: 1fr; }
      .sp-golf-hero { min-height: 420px; }
      .sp-golf-mag { padding: 60px 24px 0; }
    }
  `;

  var golfHTML = `
    <div class="sp-golf-section">
      <div class="sp-golf-mag">
        <div class="sp-golf-mag-eyebrow">
          <div class="sp-golf-mag-eyebrow-rule"></div>
          <p class="sp-golf-mag-eyebrow-text">Golf at Sea Pines &nbsp;·&nbsp; Three Championship Courses</p>
          <div class="sp-golf-mag-eyebrow-rule"></div>
        </div>
        <h2 class="sp-golf-mag-title">A Legacy<br><em>Unmatched</em></h2>
        <p class="sp-golf-mag-subtitle">Three world-class courses, three distinct personalities — all within a private 5,000-acre address on Hilton Head Island.</p>
      </div>
      <div class="sp-golf-video-strip">
        <div class="sp-golf-video-grad-top"></div>
        <video autoplay muted loop playsinline>
          <source src="/golf-website-banner_23.mp4" type="video/mp4">
        </video>
        <div class="sp-golf-video-grad-bot"></div>
      </div>
      <div class="sp-golf-mag-grid">
        <div class="sp-golf-hero">
          <div class="sp-golf-hero-img"></div>
          <div class="sp-golf-hero-grad"></div>
          <div class="sp-golf-hero-content">
            <p class="sp-golf-hero-num">01</p>
            <p class="sp-golf-hero-tag">Championship Play &nbsp;·&nbsp; PGA Tour Host</p>
            <h3 class="sp-golf-hero-name">Harbour Town<br><em>Golf Links</em></h3>
            <p class="sp-golf-hero-designer">Pete Dye &nbsp;·&nbsp; Jack Nicklaus</p>
            <p class="sp-golf-hero-desc">Host of the RBC Heritage every April. Ranked Top 100 in America by Golf Digest. The 18th hole — lighthouse over Calibogue Sound — is one of the most photographed finishing holes in golf.</p>
            <span class="sp-golf-hero-badge">Top 100 · Golf Digest</span>
            <span class="sp-golf-hero-badge">RBC Heritage Host</span>
          </div>
        </div>
        <div class="sp-golf-stack">
          <div class="sp-golf-card">
            <div class="sp-golf-card-bg" style="background-image:url('https://www.seapines.com/sites/default/files/styles/wide/public/media/images/heron-point-hole-18.jpg?itok=zhF-8wBc');"></div>
            <p class="sp-golf-card-num">02</p>
            <p class="sp-golf-card-tag">Pete Dye Signature Design</p>
            <h3 class="sp-golf-card-name">Heron Point<br><em>by Pete Dye</em></h3>
            <p class="sp-golf-card-designer">Pete Dye Design</p>
            <p class="sp-golf-card-desc">Weaving through tidal marshes and ancient live oaks — strategic shot-making over brute force. Stunning water views on nearly every hole.</p>
            <span class="sp-golf-card-badge">Pete Dye Signature</span>
          </div>
          <div class="sp-golf-card">
            <div class="sp-golf-card-bg" style="background-image:url('https://www.seapines.com/sites/default/files/styles/wide/public/media/images/Golf.jpeg?itok=fL6PeDdv');"></div>
            <p class="sp-golf-card-num">03</p>
            <p class="sp-golf-card-tag">2018 NGCOA Golf Course of the Year</p>
            <h3 class="sp-golf-card-name">Atlantic Dunes<br><em>by Davis Love III</em></h3>
            <p class="sp-golf-card-designer">Davis Love III Design</p>
            <p class="sp-golf-card-desc">The only course in Sea Pines with Atlantic ocean vistas. Completely renovated and named Golf Course of the Year by the NGCOA.</p>
            <span class="sp-golf-card-badge">NGCOA Course of the Year</span>
          </div>
        </div>
      </div>
      <div class="sp-golf-bottom-pad"></div>
    </div>
  `;

  // ══════════════════════════════════════════════════════════════════════════
  // STRIPE 5 — GOLF LEARNING CENTER: Refine Your Game
  // ══════════════════════════════════════════════════════════════════════════
  var glcCSS = `
    .sp-glc-section { background: #fff; }
    .sp-glc-header { max-width: 1400px; margin: 0 auto; padding: 80px 40px 52px; }
    .sp-glc-eyebrow { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; }
    .sp-glc-eyebrow-rule { height: 1px; width: 40px; background: #111; flex-shrink: 0; }
    .sp-glc-eyebrow-text { font-family: 'Montserrat', sans-serif; font-size: 10px; letter-spacing: 4px; color: #555; text-transform: uppercase; font-weight: 500; margin: 0; }
    .sp-glc-title { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(40px,5vw,64px); font-weight: 400; color: #111; margin: 0 0 16px; line-height: 1.1; }
    .sp-glc-title em { font-style: italic; }
    .sp-glc-subtitle { font-family: Georgia, serif; font-size: 17px; color: #555; line-height: 1.7; max-width: 580px; font-style: italic; margin: 0; }
    .sp-glc-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 4px; min-height: 580px; }
    .sp-glc-hero { position: relative; overflow: hidden; background: #111; }
    .sp-glc-hero-img { position: absolute; inset: 0; background-image: url('https://www.seapines.com/sites/default/files/styles/hero_desktop/public/media/images/Golf%20learning%20center.jpg?h=e4f440a4&itok=ys8YCgF_'); background-size: cover; background-position: center 20%; }
    .sp-glc-hero-scrim { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.18) 50%, rgba(0,0,0,0.04) 100%); }
    .sp-glc-hero-content { position: absolute; bottom: 0; left: 0; right: 0; padding: 40px 44px; }
    .sp-glc-hero-label { font-family: 'Montserrat', sans-serif; font-size: 9px; letter-spacing: 3px; color: rgba(255,255,255,0.55); text-transform: uppercase; margin: 0 0 12px; }
    .sp-glc-hero-name { font-family: 'Playfair Display', Georgia, serif; font-size: 34px; font-weight: 400; color: #fff; margin: 0 0 8px; line-height: 1.15; }
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
    .sp-glc-card-name { font-family: 'Playfair Display', Georgia, serif; font-size: 21px; font-weight: 400; color: #fff; margin: 0 0 5px; line-height: 1.15; }
    .sp-glc-card-name em { font-style: italic; }
    .sp-glc-card-sub { font-family: 'Montserrat', sans-serif; font-size: 8px; letter-spacing: 1.5px; color: rgba(255,255,255,0.45); text-transform: uppercase; margin: 0; }
    .sp-glc-pad { height: 80px; background: #fff; }
    @media (max-width: 768px) {
      .sp-glc-grid { grid-template-columns: 1fr; }
      .sp-glc-hero { min-height: 420px; }
      .sp-glc-header { padding: 60px 24px 40px; }
    }
  `;

  var glcHTML = `
    <div class="sp-glc-section">
      <div class="sp-glc-header">
        <div class="sp-glc-eyebrow">
          <div class="sp-glc-eyebrow-rule"></div>
          <p class="sp-glc-eyebrow-text">Golf Learning Center &nbsp;·&nbsp; Sea Pines Resort</p>
          <div class="sp-glc-eyebrow-rule"></div>
        </div>
        <h2 class="sp-glc-title">Refine Your<br><em>Game.</em></h2>
        <p class="sp-glc-subtitle">PGA &amp; LPGA certified instructors, TrackMan technology, and personalized programs for every level — all steps from the most storied courses in the South.</p>
      </div>
      <div class="sp-glc-grid">
        <div class="sp-glc-hero">
          <div class="sp-glc-hero-img"></div>
          <div class="sp-glc-hero-scrim"></div>
          <div class="sp-glc-hero-content">
            <p class="sp-glc-hero-label">Golf Learning Center &nbsp;·&nbsp; Hilton Head Island</p>
            <h3 class="sp-glc-hero-name">World-Class<br><em>Instruction</em></h3>
            <p class="sp-glc-hero-desc">PGA &amp; LPGA certified professionals, decades of combined experience, and the latest launch monitor technology — all tailored to your game.</p>
            <span class="sp-glc-hero-chip">Golf Digest Editors' Choice</span>
            <span class="sp-glc-hero-chip">No. 5 Golf Resort · Golf Inc</span>
          </div>
        </div>
        <div class="sp-glc-stack">
          <div class="sp-glc-card">
            <div class="sp-glc-card-img" style="background-image:url('https://www.seapines.com/sites/default/files/styles/image_grid/public/2022-03/rick-barry.jpg'); background-position:center 38%;"></div>
            <div class="sp-glc-card-scrim"></div>
            <div class="sp-glc-card-content">
              <p class="sp-glc-card-tag">One-on-One Coaching</p>
              <h4 class="sp-glc-card-name">Private <em>Instruction</em></h4>
              <p class="sp-glc-card-sub">PGA · LPGA Certified Staff</p>
            </div>
          </div>
          <div class="sp-glc-card">
            <div class="sp-glc-card-img" style="background-image:url('https://www.seapines.com/sites/default/files/styles/image_grid/public/2022-03/julie-cole.jpg'); background-position:center 30%;"></div>
            <div class="sp-glc-card-scrim"></div>
            <div class="sp-glc-card-content">
              <p class="sp-glc-card-tag">Group Clinics · Golf Schools</p>
              <h4 class="sp-glc-card-name">Golf <em>Schools</em></h4>
              <p class="sp-glc-card-sub">Women's · Adult · All Levels</p>
            </div>
          </div>
          <div class="sp-glc-card">
            <div class="sp-glc-card-img" style="background-image:url('https://www.seapines.com/sites/default/files/styles/image_grid/public/2022-03/tim-cooke.jpg'); background-position:center 35%;"></div>
            <div class="sp-glc-card-scrim"></div>
            <div class="sp-glc-card-content">
              <p class="sp-glc-card-tag">Launch Monitor · Precision Analysis</p>
              <h4 class="sp-glc-card-name">Club <em>Fitting</em></h4>
              <p class="sp-glc-card-sub">TPI-Certified Staff</p>
            </div>
          </div>
        </div>
      </div>
      <div class="sp-glc-pad"></div>
    </div>
  `;

  // ══════════════════════════════════════════════════════════════════════════
  // WIDGET 6 — LOCATION & ACCESS: Full Bleed with Photo Cards
  // Injected after .culture-section ("A Life Beyond the Fairways")
  // ══════════════════════════════════════════════════════════════════════════
  var accessCSS = `
    .sp-access-section {
      position: relative;
      overflow: hidden;
      background:
        linear-gradient(135deg,
          rgba(10,22,40,0.88) 0%,
          rgba(10,22,40,0.75) 30%,
          rgba(14,31,62,0.7) 50%,
          rgba(10,22,40,0.8) 70%,
          rgba(10,22,40,0.92) 100%),
        url('https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1400&q=80') center/cover no-repeat;
    }
    .sp-access-inner {
      padding: 56px 48px 64px;
      position: relative;
      z-index: 2;
      max-width: 1200px;
      margin: 0 auto;
    }
    .sp-access-eyebrow {
      font-family: 'Montserrat', sans-serif;
      font-size: 10px;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: #0ABAB5;
      font-weight: 500;
      text-align: center;
      margin-bottom: 10px;
    }
    .sp-access-title {
      font-family: 'Bodoni Moda', Didot, 'Bodoni MT', serif;
      font-weight: 400;
      font-size: 40px;
      line-height: 1.08;
      color: #fff;
      text-align: center;
      margin-top: 8px;
      margin-bottom: 10px;
    }
    .sp-access-title em { font-style: italic; color: #0ABAB5; }
    .sp-access-tagline {
      font-size: 13px;
      color: rgba(255,255,255,0.6);
      text-align: center;
      letter-spacing: 0.5px;
      margin: 0 auto 44px;
      line-height: 1.6;
      max-width: 560px;
    }
    .sp-access-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 3px;
      margin-bottom: 40px;
    }
    .sp-access-card {
      background: rgba(10,22,40,0.6);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(255,255,255,0.06);
      overflow: hidden;
      transition: all 0.3s ease;
    }
    .sp-access-card:hover {
      background: rgba(10,22,40,0.85);
      border-color: rgba(10,186,181,0.3);
    }
    .sp-access-card-photo {
      width: 100%;
      height: 120px;
      object-fit: cover;
      display: block;
      opacity: 0.8;
      transition: opacity 0.3s;
    }
    .sp-access-card:hover .sp-access-card-photo { opacity: 1; }
    .sp-access-card-body { text-align: center; padding: 20px 14px 24px; }
    .sp-access-card-distance {
      font-family: 'Bodoni Moda', Didot, 'Bodoni MT', serif;
      font-size: 34px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 2px;
    }
    .sp-access-card-unit {
      font-size: 9px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #0ABAB5;
      margin-bottom: 10px;
      font-weight: 500;
    }
    .sp-access-card-name {
      font-size: 12px;
      font-weight: 600;
      color: rgba(255,255,255,0.9);
      margin-bottom: 4px;
    }
    .sp-access-card-detail {
      font-size: 10px;
      color: rgba(255,255,255,0.5);
      line-height: 1.5;
    }
    .sp-access-driving {
      display: flex;
      justify-content: center;
      gap: 48px;
      padding-top: 28px;
      border-top: 1px solid rgba(255,255,255,0.08);
    }
    .sp-access-driving-item { text-align: center; }
    .sp-access-driving-city {
      font-size: 9px;
      letter-spacing: 3px;
      text-transform: uppercase;
      font-weight: 600;
      color: rgba(255,255,255,0.7);
    }
    .sp-access-driving-time {
      font-family: 'Bodoni Moda', Didot, 'Bodoni MT', serif;
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      margin-top: 3px;
    }
    .sp-access-driving-miles {
      font-size: 9px;
      color: rgba(255,255,255,0.4);
      margin-top: 1px;
      letter-spacing: 0.5px;
    }
    @media (max-width: 768px) {
      .sp-access-grid { grid-template-columns: repeat(2, 1fr); }
      .sp-access-inner { padding: 40px 24px 48px; }
      .sp-access-driving { gap: 20px; flex-wrap: wrap; }
    }
  `;

  var accessHTML = `
    <section class="sp-access-section">
      <div class="sp-access-inner">
        <div class="sp-access-eyebrow">Getting Here</div>
        <h2 class="sp-access-title">Location &amp; <em>Access</em></h2>
        <p class="sp-access-tagline">Sea Pines sits at the southern tip of Hilton Head Island — where the Atlantic meets Calibogue Sound.</p>

        <div class="sp-access-grid">
          <div class="sp-access-card">
            <img class="sp-access-card-photo" src="https:/images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=600&q=80" alt="Airplane at gate with sunset sky" referrerpolicy="no-referrer">
            <div class="sp-access-card-body">
              <div class="sp-access-card-distance">HHH</div>
              <div class="sp-access-card-unit">On Island</div>
              <div class="sp-access-card-name">Hilton Head Island Airport</div>
              <div class="sp-access-card-detail">Direct flights from Charlotte, Dallas, Washington, New York &amp; more</div>
            </div>
          </div>
          <div class="sp-access-card">
            <img class="sp-access-card-photo" src="/images/savannah-airport.jpg" alt="Savannah Hilton Head International Airport" referrerpolicy="no-referrer">
            <div class="sp-access-card-body">
              <div class="sp-access-card-distance">45</div>
              <div class="sp-access-card-unit">Minutes</div>
              <div class="sp-access-card-name">Savannah/Hilton Head Intl</div>
              <div class="sp-access-card-detail">SAV ℔ #1 rated U.S. airport, daily flights from all major hubs</div>
            </div>
          </div>
          <div class="sp-access-card">
            <img class="sp-access-card-photo" src="/images/sea-pines/sp-sps-harbour.jpg" alt="Harbour Town Marina aerial view" referrerpolicy="no-referrer">
            <div class="sp-access-card-body">
              <div class="sp-access-card-distance">10</div>
              <div class="sp-acce1ss-card-unit">Minutes</div>
              <div class="sp-access-card-name">Harbour Town Marina</div>
              <div class="sp-access-card-detail">Deep-water berths, dining, shops &amp; the iconic lighthouse</div>
            </div>
          </div>
          <div class="sp-access-card">
            <img class="sp-access-card-photo" src="/images/sea-pines/sp-sps-beach.jpg" alt="Sea Pines Beach on Hilton Head Island" referrerpolicy="no-referrer">
            <div class="sp-access-card-body">
              <div class="sp-access-card-distance">5</div>
              <div class="sp-access-card-unit">Minutes</div>
              <div class="sp-access-card-name">Coligny Beach Park</div>
              <div class="sp-access-card-detail">Hilton Head's premier public beach, dining &amp; nightlife</div>
            </div>
          </div>
        </div>

        <div class="sp-access-driving">
          <div class="sp-access-driving-item">
            <div class="sp-access-driving-city">Atlanta</div>
            <div class="sp-access-driving-time">4h 30m</div>
            <div class="sp-access-driving-miles">290 miles</div>
          </div>
          <div class="sp-access-driving-item">
            <div class="sp-access-driving-city">Charlotte</div>
            <div class="sp-access-driving-time">4h 15m</div>
            <div class="sp-access-driving-miles">280 miles</div>
          </div>
          <div class="sp-access-driving-item">
            <div class="sp-access-driving-city">Savannah</div>
            <div class="sp-access-driving-time">45 min</div>
            <div class="sp-access-driving-miles">35 miles</div>
          </div>
          <div class="sp-access-driving-item">
            <div class="sp-access-driving-city">Charleston</div>
            <div class="sp-access-driving-time">2h 15m</div>
            <div class="sp-access-driving-miles">150 miles</div>
          </div>
          <div class="sp-access-driving-item">
            <div class="sp-access-driving-city">Jacksonville</div>
            <div class="sp-access-driving-time">2h 45m</div>
            <div class="sp-access-driving-miles">175 miles</div>
          </div>
        </div>
      </div>
    </section>
  `;

  // ── RESIDENCES WIDGET CSS ──────────────────────────────────────────────────
  var residencesCSS = `
    #sp-residences-widget { background: #fff; }
    .sp-res-section { max-width: 1200px; margin: 0 auto; padding: 56px 40px 60px; background: #fff; }
    .sp-res-eyebrow { font-family: 'Montserrat', sans-serif; font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: #0ABAB5; font-weight: 500; margin-bottom: 8px; }
    .sp-res-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 36px; padding-bottom: 20px; border-bottom: 1px solid rgba(129,216,208,0.2); margin-top: 8px; }
    .sp-res-title { font-family: 'Bodoni Moda', Didot, serif; font-size: 38px; font-weight: 400; line-height: 1.1; color: #111; margin: 0; }
    .sp-res-desc { font-family: 'Montserrat', sans-serif; font-size: 13px; color: #555; line-height: 1.7; text-align: right; margin: 0; }
    .sp-res-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 280px 280px; gap: 3px; }
    .sp-res-card { position: relative; overflow: hidden; cursor: pointer; }
    .sp-res-card:first-child { grid-row: 1 / 3; }
    .sp-res-card-bg { position: absolute; inset: 0; background-size: cover; background-position: center; transition: transform 0.6s ease; }
    .sp-res-card:hover .sp-res-card-bg { transform: scale(1.04); }
    .sp-res-card-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.05) 100%); }
    .sp-res-card-content { position: absolute; bottom: 0; left: 0; right: 0; padding: 24px; }
    .sp-res-card-type { font-family: 'Montserrat', sans-serif; font-size: 8px; letter-spacing: 3px; text-transform: uppercase; color: #0ABAB5; font-weight: 500; display: block; margin-bottom: 6px; }
    .sp-res-card-name { font-family: 'Bodoni Moda', Didot, serif; font-size: 20px; font-style: italic; color: white; margin: 0 0 6px; }
    .sp-res-card:first-child .sp-res-card-name { font-size: 28px; }
    .sp-res-card-price { font-family: 'Montserrat', sans-serif; font-size: 12px; color: rgba(255,255,255,0.85); margin: 0 0 4px; font-weight: 500; }
    .sp-res-card-count { font-family: 'Montserrat', sans-serif; font-size: 9px; letter-spacing: 2px; color: #0ABAB5; margin: 0; text-transform: uppercase; }
    .sp-res-cta { font-family: 'Montserrat', sans-serif; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; font-weight: 600; color: #0A1628; border: 1px solid #0A1628; padding: 14px 40px; text-decoration: none; display: inline-block; transition: all 0.3s ease; }
    .sp-res-cta:hover { background: #0A1628; color: #fff; }
  `;

  var residencesHTML = `
    <div class="sp-res-section">
      <p class="sp-res-eyebrow">— SEA PINES REAL ESTATE</p>
      <div class="sp-res-header">
        <div>
          <h2 class="sp-res-title">The <em>Residences</em></h2>
        </div>
        <p class="sp-res-desc">From oceanfront estates to marina<br>villas — find the Sea Pines address that<br>fits your life.</p>
      </div>
      <div class="sp-res-grid">
        <div class="sp-res-card">
          <div class="sp-res-card-bg" style="background-image:url('/images/sea-pines/Sea%20Pines%20ocean%20front%20estate.png')"></div>
          <div class="sp-res-card-overlay"></div>
          <div class="sp-res-card-content">
            <span class="sp-res-card-type">PREMIER COLLECTION</span>
            <h3 class="sp-res-card-name">Oceanfront Estates</h3>
            <p class="sp-res-card-price">$5M — $10M+</p>
            <p class="sp-res-card-count">✦ 8 AVAILABLE</p>
          </div>
        </div>
        <div class="sp-res-card">
          <div class="sp-res-card-bg" style="background-image:url('/images/sea-pines/Sea%20Pines%20Fairytale%20Home.png')"></div>
          <div class="sp-res-card-overlay"></div>
          <div class="sp-res-card-content">
            <span class="sp-res-card-type">GOLF COURSE</span>
            <h3 class="sp-res-card-name">Fairway Homes</h3>
            <p class="sp-res-card-price">$1.2M — $3M</p>
            <p class="sp-res-card-count">✦ 12 AVAILABLE</p>
          </div>
        </div>
        <div class="sp-res-card">
          <div class="sp-res-card-bg" style="background-image:url('/images/sea-pines/Sea%20Pines-Marina%20Homes.jpg')"></div>
          <div class="sp-res-card-overlay"></div>
          <div class="sp-res-card-content">
            <span class="sp-res-card-type">HARBOUR TOWN</span>
            <h3 class="sp-res-card-name">Marina Villas</h3>
            <p class="sp-res-card-price">$800K — $2M</p>
            <p class="sp-res-card-count">✦ 6 AVAILABLE</p>
          </div>
        </div>
        <div class="sp-res-card">
          <div class="sp-res-card-bg" style="background-image:url('/images/sea-pines/Sea%20Pines%20Lagoon%20Vilas.png')"></div>
          <div class="sp-res-card-overlay"></div>
          <div class="sp-res-card-content">
            <span class="sp-res-card-type">LAGOON-FRONT</span>
            <h3 class="sp-res-card-name">Lagoon Retreats</h3>
            <p class="sp-res-card-price">$1.5M — $4M</p>
            <p class="sp-res-card-count">✦ 10 AVAILABLE</p>
          </div>
        </div>
        <div class="sp-res-card">
          <div class="sp-res-card-bg" style="background-image:url('/images/sea-pines/Sea%20Pines-Tennis%20Villas.png')"></div>
          <div class="sp-res-card-overlay"></div>
          <div class="sp-res-card-content">
            <span class="sp-res-card-type">RESORT COLLECTION</span>
            <h3 class="sp-res-card-name">Resort Villas</h3>
            <p class="sp-res-card-price">$500K — $1M</p>
            <p class="sp-res-card-count">✦ 18 AVAILABLE</p>
          </div>
        </div>
      </div>
      <div style="text-align:center;padding:40px 0 0;">
        <a href="/listings?community=sea-pines" class="sp-res-cta">VIEW ALL SEA PINES LISTINGS</a>
      </div>
    </div>
  `;


// ═════════════════════════════════════════════════════════════════════════
// WIDGET 3 — EXPLORE MORE: "Where Hilton Head's Finest Call Home"
// ══════════════════════════════════════════════════════════════════════════
var w3CSS = `
  .sp-w3-section { background: #F7F5F0; padding: 80px 0 72px; overflow: hidden; position: relative; }
  .sp-w3-watermark { position: absolute; right: -40px; top: 50%; transform: translateY(-50%); font-size: 260px; font-family: 'Bodoni Moda', serif; font-weight: 700; color: rgba(0,0,0,0.025); line-height: 1; pointer-events: none; letter-spacing: -0.05em; user-select: none; text-transform: uppercase; }
  .sp-w3-header { display: flex; align-items: flex-end; justify-content: space-between; padding: 0 80px 48px; flex-wrap: wrap; gap: 24px; }
  .sp-w3-eyebrow { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 500; letter-spacing: 4px; text-transform: uppercase; color: #0ABAB5; margin-bottom: 14px; display: flex; align-items: center; gap: 10px; }
  .sp-w3-eyebrow::before { content: ''; display: inline-block; width: 24px; height: 1px; background: #0ABAB5; opacity: 0.6; }
  .sp-w3-heading { font-family: 'Bodoni Moda', serif; font-size: clamp(28px,3.8vw,50px); font-weight: 400; text-transform: uppercase; letter-spacing: 1px; line-height: 1; color: #111111; }
  .sp-w3-heading em { font-weight: 400; font-style: italic; color: #0ABAB5; }
  .sp-w3-subtitle { font-family: 'Montserrat', sans-serif; font-size: 12px; font-weight: 400; letter-spacing: 3px; text-transform: uppercase; color: #888; margin-top: 10px; }
  .sp-w3-header-right { text-align: right; flex-shrink: 0; }
  .sp-w3-header-desc { font-family: 'Bodoni Moda', serif; font-style: italic; font-size: 15px; color: #666; line-height: 1.65; max-width: 300px; margin-bottom: 18px; }
  .sp-w3-header-cta { display: inline-block; font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; color: #111; text-decoration: none; border-bottom: 1px solid rgba(0,0,0,0.25); padding-bottom: 3px; transition: color 0.2s, border-color 0.2s; }
  .sp-w3-header-cta:hover { color: #0ABAB5; border-color: #0ABAB5; }
  .sp-w3-track-wrapper { position: relative; overflow: hidden; padding: 0 0 0 80px; }
  .sp-w3-track { display: flex; gap: 20px; overflow-x: auto; scroll-behavior: smooth; padding: 0 80px 20px 0; scrollbar-width: none; }
  .sp-w3-track::-webkit-scrollbar { display: none; }
  .sp-w3-card { min-width: 340px; max-width: 340px; height: 520px; border-radius: 16px; overflow: hidden; position: relative; cursor: pointer; flex-shrink: 0; text-decoration: none; display: block; transition: transform 0.4s ease, box-shadow 0.4s ease; }
  .sp-w3-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.18); }
  .sp-w3-card-img { position: absolute; inset: 0; background-size: cover; background-position: center; transition: transform 0.6s ease; }
  .sp-w3-card:hover .sp-w3-card-img { transform: scale(1.05); }
  .sp-w3-card-grad { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.32) 40%, rgba(0,0,0,0.06) 68%, rgba(0,0,0,0.14) 100%); transition: opacity 0.4s; }
  .sp-w3-card:hover .sp-w3-card-grad { opacity: 0.88; }
  .sp-w3-card-content { position: absolute; bottom: 0; left: 0; right: 0; padding: 28px 24px; z-index: 2; }
  .sp-w3-card-tag { font-family: 'Montserrat', sans-serif; font-size: 9px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: #0ABAB5; margin-bottom: 10px; }
  .sp-w3-card-name { font-family: 'Bodoni Moda', serif; font-size: 24px; font-weight: 400; font-style: italic; color: #fff; line-height: 1.25; margin-bottom: 8px; }
  .sp-w3-card-desc { font-family: 'Montserrat', sans-serif; font-size: 12px; font-weight: 300; color: rgba(255,255,255,0.75); line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
  .sp-w3-card-price { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 500; letter-spacing: 1.5px; color: rgba(255,255,255,0.45); margin-top: 8px; }
  .sp-w3-card-price strong { color: rgba(255,255,255,0.78); font-weight: 600; }
  .sp-w3-card-cta { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #0ABAB5; margin-top: 12px; display: inline-block; opacity: 0; transform: translateY(8px); transition: opacity 0.3s ease, transform 0.3s ease; }
  .sp-w3-card:hover .sp-w3-card-cta { opacity: 1; transform: translateY(0); }
  .sp-w3-arrows { display: flex; gap: 10px; padding: 28px 80px 0; justify-content: flex-end; }
  .sp-w3-arrow { width: 44px; height: 44px; border-radius: 50%; border: 1px solid rgba(0,0,0,0.15); background: transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.3s; font-size: 18px; color: #111; }
  .sp-w3-arrow:hover { background: #0A1628; border-color: #0A1628; color: #fff; }
  @media (max-width: 900px) { .sp-w3-header { padding: 0 32px 40px; } .sp-w3-track-wrapper { padding-left: 32px; } .sp-w3-track { padding-right: 32px; } .sp-w3-arrows { padding: 20px 32px 0; } }
`;

var w3HTML = `
  <section class="sp-w3-section">
    <div class="sp-w3-watermark">HHI</div>
    <div class="sp-w3-header">
      <div>
        <div class="sp-w3-eyebrow">Also on Hilton Head Island</div>
        <h2 class="sp-w3-heading">WHERE HILTON HEAD'S <em>Finest</em> CALL HOME</h2>
        <p class="sp-w3-subtitle">Gated Communities &nbsp;&middot;&nbsp; Oceanfront &nbsp;&middot;&nbsp; Golf &nbsp;&middot;&nbsp; Marina</p>
      </div>
      <div class="sp-w3-header-right">
        <p class="sp-w3-header-desc">Every island enclave tells its own story. Explore Hilton Head's most storied addresses.</p>
        <a href="/neighborhoods" class="sp-w3-header-cta">View All Neighborhoods &nbsp;&rarr;</a>
      </div>
    </div>
    <div class="sp-w3-track-wrapper">
      <div class="sp-w3-track" id="sp-w3-track">
        <a class="sp-w3-card" href="/palmetto-dunes">
          <div class="sp-w3-card-img" style="background-image:url('https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=700&q=80');"></div>
          <div class="sp-w3-card-grad"></div>
          <div class="sp-w3-card-content">
            <div class="sp-w3-card-tag">Hilton Head Island</div>
            <div class="sp-w3-card-name">Palmetto Dunes</div>
            <div class="sp-w3-card-desc">Three championship courses, an 11-mile lagoon system, and the island's widest, most pristine stretch of beach.</div>
            <div class="sp-w3-card-price">From <strong>$750K</strong> &nbsp;&middot;&nbsp; 3 Golf Courses</div>
            <div class="sp-w3-card-cta">Explore &rarr;</div>
          </div>
        </a>
        <a class="sp-w3-card" href="/wexford">
          <div class="sp-w3-card-img" style="background-image:url('https://images.unsplash.com/photo-1534430480872-3498386e7856?w=700&q=80'); background-position:center 30%;"></div>
          <div class="sp-w3-card-grad"></div>
          <div class="sp-w3-card-content">
            <div class="sp-w3-card-tag">Hilton Head Island</div>
            <div class="sp-w3-card-name">Wexford Plantation</div>
            <div class="sp-w3-card-desc">Old-world elegance anchored by a private deep-water marina on Broad Creek. One of the island's most coveted addresses.</div>
            <div class="sp-w3-card-price">From <strong>$900K</strong> &nbsp;&middot;&nbsp; Private Marina</div>
            <div class="sp-w3-card-cta">Explore &rarr;</div>
          </div>
        </a>
        <a class="sp-w3-card" href="/hilton-head-plantation">
          <div class="sp-w3-card-img" style="background-image:url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&q=80'); background-position:center 40%;"></div>
          <div class="sp-w3-card-grad"></div>
          <div class="sp-w3-card-content">
            <div class="sp-w3-card-tag">Hilton Head Island</div>
            <div class="sp-w3-card-name">Hilton Head Plantation</div>
            <div class="sp-w3-card-desc">The island's largest gated community &mdash; 4,000 acres with four golf courses, a beach club, and deep community roots.</div>
            <div class="sp-w3-card-price">From <strong>$600K</strong> &nbsp;&middot;&nbsp; 4,000 Acres</div>
            <div class="sp-w3-card-cta">Explore &rarr;</div>
          </div>
        </a>
        <a class="sp-w3-card" href="/port-royal">
          <div class="sp-w3-card-img" style="background-image:url('https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=700&q=80'); background-position:center 20%;"></div>
          <div class="sp-w3-card-grad"></div>
          <div class="sp-w3-card-content">
            <div class="sp-w3-card-tag">Hilton Head Island</div>
            <div class="sp-w3-card-name">Port Royal Plantation</div>
            <div class="sp-w3-card-desc">A quiet, understated enclave on the island's north end &mdash; pristine oceanfront lots and three championship courses.</div>
            <div class="sp-w3-card-price">From <strong>$800K</strong> &nbsp;&middot;&nbsp; Oceanfront</div>
            <div class="sp-w3-card-cta">Explore &rarr;</div>
          </div>
        </a>
        <a class="sp-w3-card" href="/shipyard">
          <div class="sp-w3-card-img" style="background-image:url('https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=700&q=80');"></div>
          <div class="sp-w3-card-grad"></div>
          <div class="sp-w3-card-content">
            <div class="sp-w3-card-tag">Hilton Head Island</div>
            <div class="sp-w3-card-name">Shipyard Plantation</div>
            <div class="sp-w3-card-desc">Mid-island living with a private beach club, three golf courses, and the most walkable village center on the island.</div>
            <div class="sp-w3-card-price">From <strong>$450K</strong> &nbsp;&middot;&nbsp; Beach Club</div>
            <div class="sp-w3-card-cta">Explore &rarr;</div>
          </div>
        </a>
        <a class="sp-w3-card" href="/long-cove">
          <div class="sp-w3-card-img" style="background-image:url('https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=700&q=80'); background-position:center 35%;"></div>
          <div class="sp-w3-card-grad"></div>
          <div class="sp-w3-card-content">
            <div class="sp-w3-card-tag">Hilton Head Island</div>
            <div class="sp-w3-card-name">Long Cove Club</div>
            <div class="sp-w3-card-desc">Pete Dye's personal masterpiece on Broad Creek &mdash; a private, intimate club where members know each other by name.</div>
            <div class="sp-w3-card-price">From <strong>$1.1M</strong> &nbsp;&middot;&nbsp; Pete Dye Course</div>
            <div class="sp-w3-card-cta">Explore &rarr;</div>
          </div>
        </a>
      </div>
    </div>
    <div class="sp-w3-arrows">
      <button class="sp-w3-arrow" id="sp-w3-prev">&#8592;</button>
      <button class="sp-w3-arrow" id="sp-w3-next">&#8594;</button>
    </div>
  </section>
`;


  // ══════════════════════════════════════════════════════════════════════════
// MAP WIDGET — "5,000 Acres. One Master Vision." (Google Maps Split)
// ══════════════════════════════════════════════════════════════════════════
var mapCSS = `
  .sp-map-section {
    background: #0A1628;
    display: grid;
    grid-template-columns: 380px 1fr;
    min-height: 600px;
    overflow: hidden;
  }
  .sp-map-left {
    padding: 72px 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .sp-map-eyebrow {
    font-family: 'Montserrat', sans-serif;
    font-size: 10px; font-weight: 700; letter-spacing: 3px;
    text-transform: uppercase; color: #0ABAB5;
    margin-bottom: 20px; display: flex; align-items: center; gap: 10px;
  }
  .sp-map-eyebrow::before {
    content: ''; display: inline-block; width: 24px;
    height: 1px; background: #0ABAB5; opacity: 0.6;
  }
  .sp-map-title {
    font-family: 'Bodoni Moda', Didot, serif;
    font-size: clamp(28px, 2.5vw, 38px);
    color: #fff; line-height: 1.15;
    margin-bottom: 20px; font-weight: 400;
    text-transform: uppercase; letter-spacing: 1px;
  }
  .sp-map-title em { color: #0ABAB5; font-style: italic; text-transform: none; }
  .sp-map-sub {
    font-family: 'Montserrat', sans-serif;
    font-size: 13px; color: rgba(255,255,255,0.5);
    line-height: 1.75; margin-bottom: 36px;
  }
  .sp-map-pills { display: flex; flex-direction: column; gap: 10px; }
  .sp-map-pill {
    font-family: 'Montserrat', sans-serif;
    display: flex; align-items: center; gap: 10px;
    font-size: 10px; font-weight: 600; letter-spacing: 1.5px;
    text-transform: uppercase; color: rgba(255,255,255,0.6);
  }
  .sp-map-pill-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: #0ABAB5; flex-shrink: 0;
  }
  .sp-map-cta {
    font-family: 'Montserrat', sans-serif;
    display: inline-flex; align-items: center; gap: 8px;
    margin-top: 36px; font-size: 10px; font-weight: 700;
    letter-spacing: 2.5px; text-transform: uppercase;
    color: #0ABAB5; text-decoration: none;
    border-bottom: 1px solid rgba(10,186,181,0.3); padding-bottom: 3px;
    cursor: pointer;
  }
  .sp-map-right iframe {
    width: 100%; height: 100%; min-height: 600px;
    display: block; border: none;
  }
  @media (max-width: 900px) {
    .sp-map-section { grid-template-columns: 1fr; min-height: auto; }
    .sp-map-left { padding: 56px 28px; }
    .sp-map-right iframe { min-height: 420px; }
  }
`;

var mapHTML = `
  <div class="sp-map-section" id="sp-map-widget">
    <div class="sp-map-left">
      <div class="sp-map-eyebrow">Sea Pines &nbsp;&middot;&nbsp; Hilton Head Island</div>
      <h2 class="sp-map-title">5,000 Acres.<br><em>One Master</em><br>Vision.</h2>
      <p class="sp-map-sub">From the Atlantic shore to Calibogue Sound &mdash; every path, preserve, and fairway designed with purpose since 1956.</p>
      <div class="sp-map-pills">
        <div class="sp-map-pill"><span class="sp-map-pill-dot"></span>Harbour Town Marina &amp; Lighthouse</div>
        <div class="sp-map-pill"><span class="sp-map-pill-dot"></span>Sea Pines Beach Club</div>
        <div class="sp-map-pill"><span class="sp-map-pill-dot"></span>605-Acre Forest Preserve</div>
        <div class="sp-map-pill"><span class="sp-map-pill-dot"></span>4 Championship Golf Courses</div>
        <div class="sp-map-pill"><span class="sp-map-pill-dot"></span>South Beach Marina Village</div>
      </div>
      <a class="sp-map-cta" href="/sea-pines">Explore Sea Pines Listings &nbsp;&rarr;</a>
    </div>
    <div class="sp-map-right">
      <iframe
        src="https://maps.google.com/maps?q=Sea+Pines+Resort,+Hilton+Head+Island,+SC&t=h&z=14&ie=UTF8&iwloc=B&output=embed"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Sea Pines Resort &mdash; Hilton Head Island, SC &mdash; Satellite Map">
      </iframe>
    </div>
  </div>
`;

// ── Inject all styles ──────────────────────────────────────────────────────
  var styleEl = document.createElement('style');
  styleEl.id = 'sp-widgets-css';
  styleEl.textContent = stripe1CSS + stripe2CSS + stripe3CSS + golfCSS + glcCSS + accessCSS + residencesCSS + w3CSS + mapCSS;
  document.head.appendChild(styleEl);

  // ── Inject stripes 1–5 after the hero section ──────────────────────────────
  function injectWidgets() {
    var hero = document.querySelector('.hero');
    if (!hero) return;

    var container = document.createElement('div');
    container.id = 'sp-new-widgets';
    container.innerHTML = stripe1HTML + stripe2HTML + stripe3HTML + golfHTML + glcHTML;

    hero.parentNode.insertBefore(container, hero.nextSibling);
  }

  // ── Inject Residences after the market section ─────────────────────────────
  function injectResidencesWidget() {
    var market = document.querySelector('.market-section');
    if (!market) return;
    if (document.getElementById('sp-residences-widget')) return;

    var el = document.createElement('div');
    el.id = 'sp-residences-widget';
    el.innerHTML = residencesHTML;
    market.parentNode.insertBefore(el, market.nextSibling);
  }

  // ── Inject Location & Access after the tree story (culture section) ────────
  function injectAccessWidget() {
    var culture = document.querySelector('.culture-section');
    if (!culture) return;
    if (document.getElementById('sp-access-widget')) return;

    var el = document.createElement('div');
    el.id = 'sp-access-widget';
    el.innerHTML = accessHTML;
    culture.parentNode.insertBefore(el, culture.nextSibling);
  }

  
function injectExploreMoreWidget() {
  if (document.getElementById('sp-explore-widget')) return;
  var accessWidget = document.getElementById('sp-access-widget');
  var anchor = accessWidget || document.querySelector('footer, .footer, #footer');
  if (!anchor) return;
  var el = document.createElement('div');
  el.id = 'sp-explore-widget';
  el.innerHTML = w3HTML;
  anchor.parentNode.insertBefore(el, anchor.nextSibling);
  var track = el.querySelector('#sp-w3-track');
  var nextBtn = el.querySelector('#sp-w3-next');
  var prevBtn = el.querySelector('#sp-w3-prev');
  if (track && nextBtn && prevBtn) {
    nextBtn.addEventListener('click', function(){ track.scrollBy({left:360, behavior:'smooth'}); });
    prevBtn.addEventListener('click', function(){ track.scrollBy({left:-360, behavior:'smooth'}); });
  }
}
// ── Inject Map Widget after the Residences widget ─────────────────────────
function injectMapWidget() {
  if (document.getElementById('sp-map-widget')) return;
  var residences = document.getElementById('sp-residences-widget');
  var anchor = residences || document.querySelector('.market-section');
  if (!anchor) return;
  var el = document.createElement('div');
  el.innerHTML = mapHTML;
  anchor.parentNode.insertBefore(el.firstElementChild, anchor.nextSibling);
}

function injectAll() {
    injectWidgets();
    injectResidencesWidget();
    injectMapWidget();
  injectAccessWidget();
    injectExploreMoreWidget();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectAll);
  } else {
    injectAll();
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
    if (document.getElementById('sp-ht-cinematic-css')) return;
    var styleEl = document.createElement('style');
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
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyHarbourTownCinematic);
  } else {
    applyHarbourTownCinematic();
  }
  setTimeout(applyHarbourTownCinematic, 800);
})();
