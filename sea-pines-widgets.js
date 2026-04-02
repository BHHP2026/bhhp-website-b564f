(function(){
  if (!window.location.pathname.match(/\/sea-pines(\/|$)/)) return;

  // ââ Fonts âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  if (!document.getElementById('sp-widget-fonts')) {
    var link = document.createElement('link');
    link.id = 'sp-widget-fonts';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,700;0,6..96,900;1,6..96,400;1,6..96,700&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Montserrat:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(link);
  }

  // ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  // STRIPE 1 \u2014 HERO IMAGE: "The Resort Lifestylee"
  // ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  var stripe1CSS = `
    .sp-stripe-hero { position: relative; height: 65vh; overflow: hidden; }
    .sp-stripe-hero .sp-bg { position: absolute; inset: 0; background: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=2000&q=90') center 40% / cover no-repeat; z-index: 0; }
    .sp-stripe-hero .sp-overlay { position: absolute; inset: 0; background: rgba(10,15,28,0.50); z-index: 1; }
    .sp-stripe-hero .sp-vignette { position: absolute; inset: 0; background: radial-gradient(ellipse at center, transparent 25%, rgba(10,15,28,0.30) 65%, rgba(10,15,28,0.55) 100%); z-index: 2; }
    .sp-hero-title { position: relative; z-index: 3; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px 60px; }
    .sp-eyebrow { display: flex; align-items: center; justify-content: center; gap: 14px; margin-bottom: 24px; }
    .sp-eyebrow-rule { width: 28px; height: 1px; background: #0ABAB5; opacity: 0.8; }
    .sp-eyebrow-text { font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 4px; text-transform: uppercase; color: #fff; }
    .sp-t-the { font-family: 'Bodoni Moda', Didot, serif; font-style: italic; font-weight: 400; font-size: clamp(24px, 2.6vw, 38px); color: #fff; line-height: 1; }
    .sp-t-main { font-family: 'Bodoni Moda', Didot, serif; font-style: italic; font-weight: 400; font-size: clamp(68px, 8.5vw, 122px); color: #fff; line-height: 0.90; letter-spacing: -2px; }
    .sp-t-sub { font-family: 'Bodoni Moda', Didot, serif; font-style: normal; font-weight: 400; font-size: clamp(30px, 3.6vw, 52px); color: #fff; letter-spacing: 12px; text-transform: uppercase; line-height: 1; margin: 8px 0 0 6px; }
    .sp-badge { position: absolute; right: 64px; bottom: 56px; z-index: 4; width: 108px; height: 108px; border-radius: 50%; background: rgba(10,15,28,0.35); border: 1.5px solid rgba(255,255,255,0.22); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
    .sp-badge .b-year { font-family: 'Bodoni Moda', serif; font-size: 28px; font-weight: 700; color: #fff; line-height: 1; }
    .sp-badge .b-label { font-size: 8px; font-weight: 600; letter-spacing: 1.5px; color: rgba(255,255,255,0.55); text-transform: uppercase; line-height: 1.5; margin-top: 5px; }
    @media (max-width: 768px) {
      .sp-badge { right: 24px; bottom: 32px; width: 80px; height: 80px; }
      .sp-badge .b-year { font-size: 20px; }
    }
  `;

  var stripe1HTML = `
    <div class="sp-stripe-hero">
      <div class="sp-bg"></div>
      <div class="sp-overlay"></div>
      <div class="sp-vignette"></div>
      <div class="sp-hero-title">
        <div class="sp-eyebrow">
          <div class="sp-eyebrow-rule"></div>
          <span class="sp-eyebrow-text">Sea Pines Resort &nbsp;Â\u00B7&nbsp; Hilton Head Island</span>
          <div class="sp-eyebrow-rule"></div>
        </div>
        <p class="sp-t-the">The</p>
        <p class="sp-t-main">Resort</p>
        <p class="sp-t-sub">Lifestyle</p>
      </div>
      <div class="sp-badge">
        <span class="b-year">1956</span>
        <span class="b-label">Est. by<br>C. Fraser</span>
      </div>
    </div>
  `;

  // ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  // STRIPE 2 \u2014 CHARLES FRASER: Editorial Text Band
  // ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  var stripe2CSS = `
    .sp-stripe-text { background: #ffffff; padding: 100px 40px; text-align: center; }
    .sp-stripe-text-inner { max-width: 820px; margin: 0 auto; }
    .sp-text-eyebrow { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 500; letter-spacing: 4px; text-transform: uppercase; color: #D4AF37; margin-bottom: 24px; display: flex; align-items: center; justify-content: center; gap: 16px; }
    .sp-text-eyebrow-rule { width: 40px; height: 1px; background: #D4AF37; flex-shrink: 0; }
    .sp-text-section-title { font-family: 'Playfair Display', Georgia, serif; font-style: normal; font-weight: 400; font-size: clamp(42px, 5vw, 64px); color: #111; line-height: 1.10; text-transform: uppercase; letter-spacing: 0; margin-bottom: 20px; }
    .sp-text-section-title em { font-style: italic; color: #092969; }
    .sp-text-body { font-family: 'Montserrat', sans-serif; font-size: 14px; font-weight: 400; line-height: 1.85; color: #444; margin-bottom: 20px; max-width: 700px; margin-left: auto; margin-right: auto; }
    .sp-text-pull-quote { border-top: 1px solid rgba(212,175,55,0.25); border-bottom: 1px solid rgba(212,175,55,0.25); padding: 36px 48px; margin: 36px auto 44px; max-width: 640px; }
    .sp-text-pull-quote p { font-family: 'Playfair Display', Georgia, serif; font-style: italic; font-size: clamp(18px, 2vw, 24px); line-height: 1.65; color: #092969; margin-bottom: 14px; }
    .sp-text-pull-quote cite { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 500; letter-spacing: 3px; text-transform: uppercase; color: #D4AF37; font-style: normal; }
    .sp-text-cta { display: inline-flex; align-items: center; gap: 10px; font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: #092969; text-decoration: none; border: 1px solid #092969; padding: 14px 28px; transition: background 0.2s, color 0.2s; }
    .sp-text-cta:hover { background: #092969; color: #fff; }
    @media (max-width: 768px) {
      .sp-stripe-text { padding: 60px 24px; }
      .sp-text-pull-quote { padding: 28px 24px; }
    }
  `;

  var stripe2HTML = `
    <div class="sp-stripe-text">
      <div class="sp-stripe-text-inner">
        <div class="sp-text-eyebrow">
          <div class="sp-text-eyebrow-rule"></div>
          Founded 1956 &nbsp;Â\u00B7&nbsp; A Vision Ahead of Its Time
          <div class="sp-text-eyebrow-rule"></div>
        </div>
        <h2 class="sp-text-section-title">Charles Fraser &amp; the<br><em>Birth of Sea Pines</em></h2>
        <p class="sp-text-body">In 1956, a young Yale-educated attorney named Charles Fraser looked out over 5,000 acres of pristine Carolina Sea Islands barrier island and saw something extraordinary \u2014 not a resort to be imposed upon the land, but one designed to live in perfect harmony with it. His father had purchased the land, but it was Charles who transformed it into the world's first environmentally planned resort community.</p>
        <p class="sp-text-body">Fraser balanced homes, golf courses, and gathering spaces with preserved tidal marshes, ancient live oaks, and the island's native ecosystem. He established a conservation foundation to safeguard Sea Pines' natural beauty well beyond his own lifetime \u2014 a foresight that, nearly seven decades later, is woven into the very character of Hilton Head Island itself.</p>
        <div class="sp-text-pull-quote">
          <p>"Hilton Head is the very first community in the United States to have been eco-planned. Charles Fraser was way ahead of his time \u2014 and his legacy stands to this day."</p>
          <cite>\u2014 Talita, BHHP</cite>
        </div>
        <a href="#" class="sp-text-cta">Explore Sea Pines &nbsp;â</a>
      </div>
    </div>
  `;

  // ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  // STRIPE 3 \u2014 TWO IMAGE PANELS: Marina + Pool
  // ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
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
        <div class="sp-img-bg" style="background-image:url('/sea_pines_harbour_town%20marina.jpg'); background-position:center 30%;"></div>
        <div class="sp-img-grad"></div>
        <div class="sp-caption">
          <div class="sp-cap-eyebrow">Harbour Town Marina</div>
          <div class="sp-cap-title">Where life moves at the pace of the tide</div>
        </div>
      </div>
      <div class="sp-img-panel">
        <div class="sp-img-bg" style="background-image:url('/Riviera%20pool%20side.jpg'); background-position:center 55%;"></div>
        <div class="sp-img-grad"></div>
        <div class="sp-caption">
          <div class="sp-cap-eyebrow">Sea Pines Resort</div>
          <div class="sp-cap-title">Riviera poolside living</div>
        </div>
      </div>
    </div>
  `;

  // ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  // STRIPE 4 \u2014 GOLF COURSES: A Legacy Unmatched
  // ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
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
    .sp-golf-hero-img { position: absolute; inset: 0; background-image: url('/Sea%20Pines%20Lighthouse%20Golf'); background-size: cover; background-position: center 35%; }
    .sp-golf-hero-grad { position: absolute; inset: 0; background: linear-gradient(to top, rgba(8,14,28,0.95) 0%, rgba(8,14,28,0.45) 45%, rgba(8,14,28,0.1) 100%); }
    .sp-golf-hero-content { position: absolute; bottom: 0; left: 0; right: 0; padding: 40px 44px; }
    .sp-golf-hero-num { font-family: 'Playfair Display', Georgia, serif; font-size: 72px; font-weight: 400; color: rgba(212,175,55,0.2); line-height: 1; margin: 0 0 4px; }
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
    .sp-golf-card-badge::before { content: 'â  '; }
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
          <p class="sp-golf-mag-eyebrow-text">Golf at Sea Pines &nbsp;Â\u00B7&nbsp; Three Championship Courses</p>
          <div class="sp-golf-mag-eyebrow-rule"></div>
        </div>
        <h2 class="sp-golf-mag-title">A Legacy<br><em style="color:#0ABAB5">Unmatched</em></h2>
        <p class="sp-golf-mag-subtitle">Three world-class courses, three distinct personalities \u2014 all within a private 5,000-acre address on Hilton Head Island.</p>
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
            <p class="sp-golf-hero-tag">Championship Play &nbsp;Â\u00B7&nbsp; PGA Tour Host</p>
            <h3 class="sp-golf-hero-name">Harbour Town<br><em>Golf Links</em></h3>
            <p class="sp-golf-hero-designer">Pete Dye &nbsp;Â\u00B7&nbsp; Jack Nicklaus</p>
            <p class="sp-golf-hero-desc">Host of the RBC Heritage every April. Ranked Top 100 in America by Golf Digest. The 18th hole \u2014 lighthouse over Calibogue Sound \u2014 is one of the most photographed finishing holes in golf.</p>
            <span class="sp-golf-hero-badge">Top 100 Â\u00B7 Golf Digest</span>
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
            <p class="sp-golf-card-desc">Weaving through tidal marshes and ancient live oaks \u2014 strategic shot-making over brute force. Stunning water views on nearly every hole.</p>
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

  // ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  // STRIPE 5 \u2014 GOLF LEARNING CENTER: Refine Your Game
  // ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
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
          <p class="sp-glc-eyebrow-text">Golf Learning Center &nbsp;Â\u00B7&nbsp; Sea Pines Resort</p>
          <div class="sp-glc-eyebrow-rule"></div>
        </div>
        <h2 class="sp-glc-title">Refine Your<br><em style="color:#0ABAB5">Game.</em></h2>
        <p class="sp-glc-subtitle">PGA &amp; LPGA certified instructors, TrackMan technology, and personalized programs for every level \u2014 all steps from the most storied courses in the South.</p>
      </div>
      <div class="sp-glc-grid">
        <div class="sp-glc-hero">
          <div class="sp-glc-hero-img"></div>
          <div class="sp-glc-hero-scrim"></div>
          <div class="sp-glc-hero-content">
            <p class="sp-glc-hero-label">Golf Learning Center &nbsp;Â\u00B7&nbsp; Hilton Head Island</p>
            <h3 class="sp-glc-hero-name">World-Class<br><em>Instruction</em></h3>
            <p class="sp-glc-hero-desc">PGA &amp; LPGA certified professionals, decades of combined experience, and the latest launch monitor technology \u2014 all tailored to your game.</p>
            <span class="sp-glc-hero-chip">Golf Digest Editors' Choice</span>
            <span class="sp-glc-hero-chip">No. 5 Golf Resort Â\u00B7 Golf Inc</span>
          </div>
        </div>
        <div class="sp-glc-stack">
          <div class="sp-glc-card">
            <div class="sp-glc-card-img" style="background-image:url('https://www.seapines.com/sites/default/files/styles/image_grid/public/2022-03/rick-barry.jpg'); background-position:center 38%;"></div>
            <div class="sp-glc-card-scrim"></div>
            <div class="sp-glc-card-content">
              <p class="sp-glc-card-tag">One-on-One Coaching</p>
              <h4 class="sp-glc-card-name">Private <em>Instruction</em></h4>
              <p class="sp-glc-card-sub">PGA Â\u00B7 LPGA Certified Staff</p>
            </div>
          </div>
          <div class="sp-glc-card">
            <div class="sp-glc-card-img" style="background-image:url('https://www.seapines.com/sites/default/files/styles/image_grid/public/2022-03/julie-cole.jpg'); background-position:center 30%;"></div>
            <div class="sp-glc-card-scrim"></div>
            <div class="sp-glc-card-content">
              <p class="sp-glc-card-tag">Group Clinics Â\u00B7 Golf Schools</p>
              <h4 class="sp-glc-card-name">Golf <em>Schools</em></h4>
              <p class="sp-glc-card-sub">Women's Â\u00B7 Adult Â\u00B7 All Levels</p>
            </div>
          </div>
          <div class="sp-glc-card">
            <div class="sp-glc-card-img" style="background-image:url('https://www.seapines.com/sites/default/files/styles/image_grid/public/2022-03/tim-cooke.jpg'); background-position:center 35%;"></div>
            <div class="sp-glc-card-scrim"></div>
            <div class="sp-glc-card-content">
              <p class="sp-glc-card-tag">Launch Monitor Â\u00B7 Precision Analysis</p>
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
      position: relative; overflow: hidden;
      background:
        linear-gradient(135deg,
          rgba(10,22,40,0.88) 0%, rgba(10,22,40,0.75) 30%,
          rgba(14,31,62,0.7) 50%, rgba(10,22,40,0.8) 70%,
          rgba(10,22,40,0.92) 100%),
        url('https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1400&q=80') center/cover no-repeat;
    }
    .sp-access-inner { padding: 56px 48px 64px; position: relative; z-index: 2; max-width: 1200px; margin: 0 auto; }
    .sp-access-eyebrow { font-family: 'Montserrat', sans-serif; font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: #0ABAB5; font-weight: 500; text-align: center; margin-bottom: 10px; }
    .sp-access-title { font-family: 'Bodoni Moda', Didot, 'Bodoni MT', serif; font-weight: 400; font-size: 40px; line-height: 1.08; color: #fff; text-align: center; margin-top: 8px; margin-bottom: 10px; }
    .sp-access-title em { font-style: italic; color: #0ABAB5; }
    .sp-access-tagline { font-size: 13px; color: rgba(255,255,255,0.6); text-align: center; letter-spacing: 0.5px; margin: 0 auto 44px; line-height: 1.6; max-width: 560px; }
    .sp-access-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 3px; margin-bottom: 40px; }
    .sp-access-card { background: rgba(10,22,40,0.6); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.06); overflow: hidden; transition: all 0.3s ease; }
    .sp-access-card:hover { background: rgba(10,22,40,0.85); border-color: rgba(10,186,181,0.3); }
    .sp-access-card-photo { width: 100%; height: 120px; object-fit: cover; display: block; opacity: 0.8; transition: opacity 0.3s; }
    .sp-access-card:hover .sp-access-card-photo { opacity: 1; }
    .sp-access-card-body { text-align: center; padding: 20px 14px 24px; }
    .sp-access-card-distance { font-family: 'Bodoni Moda', Didot, 'Bodoni MT', serif; font-size: 34px; font-weight: 700; color: #fff; margin-bottom: 2px; }
    .sp-access-card-unit { font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: #0ABAB5; margin-bottom: 10px; font-weight: 500; }
    .sp-access-card-name { font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.9); margin-bottom: 4px; }
    .sp-access-card-detail { font-size: 10px; color: rgba(255,255,255,0.5); line-height: 1.5; }
    .sp-access-driving { display: flex; justify-content: center; gap: 48px; padding-top: 28px; border-top: 1px solid rgba(255,255,255,0.08); }
    .sp-access-driving-item { text-align: center; }
    .sp-access-driving-city { font-size: 9px; letter-spacing: 3px; text-transform: uppercase; font-weight: 600; color: rgba(255,255,255,0.7); }
    .sp-access-driving-time { font-family: 'Bodoni Moda', Didot, 'Bodoni MT', serif; font-size: 18px; font-weight: 700; color: #fff; margin-top: 3px; }
    .sp-access-driving-miles { font-size: 9px; color: rgba(255,255,255,0.4); margin-top: 1px; letter-spacing: 0.5px; }
    @media (max-width: 768px) {
      .sp-access-grid { grid-template-columns: repeat(2,1fr); }
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
            <img class="sp-access-card-photo" src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=600&q=80" alt="Airplane at gate with sunset sky" referrerpolicy="no-referrer">
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
              <div class="sp-access-card-detail">SAV — #1 rated U.S. airport, daily flights from all major hubs</div>
            </div>
          </div>
          <div class="sp-access-card">
            <img class="sp-access-card-photo" src="/images/sea-pines/sp-sps-harbour.jpg" alt="Harbour Town Marina aerial view" referrerpolicy="no-referrer">
            <div class="sp-access-card-body">
              <div class="sp-access-card-distance">10</div>
              <div class="sp-access-card-unit">Minutes</div>
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

  // ── Inject all styles ──────────────────────────────────────────────────────
  var styleEl = document.createElement('style');
  styleEl.id = 'sp-widgets-css';
  styleEl.textContent = stripe1CSS + stripe2CSS + stripe3CSS + golfCSS + glcCSS + accessCSS;
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

  function injectAll() {
    injectWidgets();
    injectAccessWidget();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectAll);
  } else {
    injectAll();
  }

})();
