(function(){
  // ── CSS ─────────────────────────────────────────────────────────────────
  var css = `
    .articles-section{background:var(--cream,#F5F0E8);padding:80px 0 72px;overflow:hidden;position:relative}
    .articles-watermark{position:absolute;right:-60px;top:50%;transform:translateY(-50%);font-size:280px;font-family:'Bodoni Moda',serif;font-weight:700;color:rgba(0,0,0,.025);line-height:1;pointer-events:none;letter-spacing:-0.05em;user-select:none;text-transform:uppercase}
    .articles-header{display:flex;align-items:flex-end;justify-content:space-between;padding:0 80px 48px}
    .articles-eyebrow{font-family:'Montserrat',sans-serif;font-size:10px;font-weight:500;letter-spacing:4px;text-transform:uppercase;color:var(--teal,#6FBFB0);margin-bottom:10px;display:flex;align-items:center;gap:10px}
    .articles-eyebrow::before,.articles-eyebrow::after{content:'';width:28px;height:1px;background:var(--teal,#6FBFB0);opacity:.5}
    .articles-heading{font-family:'Bodoni Moda',serif;font-size:clamp(32px,4vw,52px);font-weight:400;font-style:normal;text-transform:uppercase;letter-spacing:1px;line-height:1;color:var(--charcoal,#1C1C1E)}
    .articles-heading em{font-weight:400;font-style:italic;color:#999}
    .articles-subtitle{font-family:'Montserrat',sans-serif;font-size:12px;font-weight:400;letter-spacing:3px;text-transform:uppercase;color:#888;margin-top:10px}
    .articles-view-all{font-family:'Montserrat',sans-serif;font-size:12px;font-weight:500;letter-spacing:2px;text-transform:uppercase;color:var(--charcoal,#1C1C1E);text-decoration:none;border-bottom:1px solid var(--charcoal,#1C1C1E);padding-bottom:4px;transition:color .3s,border-color .3s;white-space:nowrap}
    .articles-view-all:hover{color:var(--teal,#6FBFB0);border-color:var(--teal,#6FBFB0)}
    .articles-track-wrapper{position:relative;overflow:hidden;padding:0 0 0 80px}
    .articles-track{display:flex;gap:20px;overflow-x:auto;scroll-behavior:smooth;padding:0 80px 20px 0;-ms-overflow-style:none;scrollbar-width:none}
    .articles-track::-webkit-scrollbar{display:none}
    .article-card{min-width:340px;max-width:340px;height:520px;border-radius:16px;overflow:hidden;position:relative;cursor:pointer;flex-shrink:0;transition:transform .4s ease,box-shadow .4s ease;text-decoration:none;display:block}
    .article-card:hover{transform:translateY(-6px);box-shadow:0 20px 50px rgba(0,0,0,.15)}
    .article-card-img{position:absolute;inset:0;background-size:cover;background-position:center;transition:transform .6s ease}
    .article-card:hover .article-card-img{transform:scale(1.05)}
    .article-card-grad{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.75) 0%,rgba(0,0,0,.25) 40%,rgba(0,0,0,.05) 70%,rgba(0,0,0,.1) 100%)}
    .article-card-content{position:absolute;bottom:0;left:0;right:0;padding:28px 24px;z-index:2}
    .article-card-tag{font-family:'Montserrat',sans-serif;font-size:9px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:var(--teal,#6FBFB0);margin-bottom:10px}
    .article-card-name{font-family:'Bodoni Moda',serif;font-size:22px;font-weight:400;font-style:italic;color:#fff;line-height:1.25;margin-bottom:8px}
    .article-card-desc{font-family:'Montserrat',sans-serif;font-size:12px;font-weight:300;color:rgba(255,255,255,.75);line-height:1.6;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
    .article-card-read{font-family:'Montserrat',sans-serif;font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--teal,#6FBFB0);margin-top:14px;display:inline-block;opacity:0;transform:translateY(8px);transition:opacity .3s ease,transform .3s ease}
    .article-card:hover .article-card-read{opacity:1;transform:translateY(0)}
    .articles-arrows{display:flex;gap:10px;padding:28px 80px 0;justify-content:flex-end}
    .articles-arrow{width:44px;height:44px;border-radius:50%;border:1px solid rgba(0,0,0,.15);background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .3s;font-size:18px;color:var(--charcoal,#1C1C1E)}
    .articles-arrow:hover{background:var(--navy,#092969);color:#fff;border-color:var(--navy,#092969)}
    @media(max-width:768px){
      .articles-header{padding:0 24px 32px;flex-direction:column;align-items:flex-start;gap:16px}
      .articles-track-wrapper{padding-left:24px}
      .articles-arrows{padding:20px 24px 0}
      .articles-watermark{font-size:120px}
    }`;
  var styleEl = document.createElement('style');
  styleEl.id = 'editorial-widget-css';
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ── Update blog-section header banner ──────────────────────────────────
  var blogSection = document.querySelector('.blog-section');
  if (blogSection) {
    var eyebrow = blogSection.querySelector('.eyebrow');
    if (eyebrow) eyebrow.textContent = 'RESORT EDITORIAL';
    var h2 = blogSection.querySelector('.section-h2');
    if (h2) h2.innerHTML = 'RESORT EDITORIAL <em><span class=\"dim\">Articles</span></em> PREVIEW';
  }

  // ── Build widget HTML ──────────────────────────────────────────────────
  var html = `<section class=\"articles-section\" id=\"editorial-articles-widget\">
    <div class=\"articles-watermark\">Editorial</div>
    <div class=\"articles-header\">
      <div class=\"articles-title-block\">
        <div class=\"articles-eyebrow\">Hilton Head Island &nbsp;&middot;&nbsp; Bluffton &nbsp;&middot;&nbsp; Carolina Sea Islands</div>
        <h2 class=\"articles-heading\">YOUR BLUFFTON <em>Home Search</em><br>STARTS HERE</h2>
        <p class=\"articles-subtitle\">Ten essential reads for buyers discovering the Carolina Sea Islands.</p>
      </div>
      <a href=\"discover-bluffton.html\" class=\"articles-view-all\">Read All Articles</a>
    </div>
    <div class=\"articles-track-wrapper\">
      <div class=\"articles-track\" id=\"ewArticlesTrack\">

        <a class=\"article-card\" href=\"discover-bluffton.html\">
          <div class=\"article-card-img\" style=\"background-image:url('images/bluffton-inn-golf-carts.jpg')\"></div>
          <div class=\"article-card-grad\"></div>
          <div class=\"article-card-content\">
            <div class=\"article-card-tag\">Real Estate</div>
            <div class=\"article-card-name\">Bluffton vs. Hilton Head: Where Should You Buy?</div>
            <div class=\"article-card-desc\">Everything you need to know about choosing between the island and the mainland &mdash; from taxes to lifestyle to long-term value.</div>
            <span class=\"article-card-read\">Read Article &rarr;</span>
          </div>
        </a>

        <a class=\"article-card\" href=\"discover-bluffton.html\">
          <div class=\"article-card-img\" style=\"background-image:url('images/article-communities.jpg')\"></div>
          <div class=\"article-card-grad\"></div>
          <div class=\"article-card-content\">
            <div class=\"article-card-tag\">Communities</div>
            <div class=\"article-card-name\">The Top Gated Communities in Bluffton, SC</div>
            <div class=\"article-card-desc\">Palmetto Bluff, Colleton River, Berkeley Hall, Belfair &mdash; a detailed guide to the Southeast&rsquo;s most prestigious addresses.</div>
            <span class=\"article-card-read\">Read Article &rarr;</span>
          </div>
        </a>

        <a class=\"article-card\" href=\"discover-bluffton.html\">
          <div class=\"article-card-img\" style=\"background-image:url('images/article-market.jpg')\"></div>
          <div class=\"article-card-grad\"></div>
          <div class=\"article-card-content\">
            <div class=\"article-card-tag\">Market Insight</div>
            <div class=\"article-card-name\">Bluffton Real Estate Market 2026: Prices, Trends &amp; Forecast</div>
            <div class=\"article-card-desc\">Median prices, inventory levels, and what buyers should expect in the fastest-growing Carolina Sea Islands market.</div>
            <span class=\"article-card-read\">Read Article &rarr;</span>
          </div>
        </a>

        <a class=\"article-card\" href=\"discover-bluffton.html\">
          <div class=\"article-card-img\" style=\"background-image:url('images/article-palmetto.jpg')\"></div>
          <div class=\"article-card-grad\"></div>
          <div class=\"article-card-content\">
            <div class=\"article-card-tag\">Signature Community</div>
            <div class=\"article-card-name\">Inside Palmetto Bluff: Montage Resort Living</div>
            <div class=\"article-card-desc\">A 20,000-acre nature preserve, Montage resort amenities, and May River estates &mdash; the crown jewel of the Carolina Sea Islands.</div>
            <span class=\"article-card-read\">Read Article &rarr;</span>
          </div>
        </a>

        <a class=\"article-card\" href=\"discover-bluffton.html\">
          <div class=\"article-card-img\" style=\"background-image:url('images/article-mayriver.jpg')\"></div>
          <div class=\"article-card-grad\"></div>
          <div class=\"article-card-content\">
            <div class=\"article-card-tag\">Nature &amp; Waterfront</div>
            <div class=\"article-card-name\">The May River: Bluffton&rsquo;s Crown Jewel</div>
            <div class=\"article-card-desc\">From dolphin-filled sunsets to the last oyster house in South Carolina, the May River defines the Bluffton experience.</div>
            <span class=\"article-card-read\">Read Article &rarr;</span>
          </div>
        </a>

        <a class=\"article-card\" href=\"discover-bluffton.html\">
          <div class=\"article-card-img\" style=\"background-image:url('images/article-oldtown.jpg')\"></div>
          <div class=\"article-card-grad\"></div>
          <div class=\"article-card-content\">
            <div class=\"article-card-tag\">Culture &amp; Lifestyle</div>
            <div class=\"article-card-name\">Old Town Bluffton: Art, Dining &amp; Coastal Charm</div>
            <div class=\"article-card-desc\">Galleries, farm-to-table restaurants, and centuries-old live oaks &mdash; discover the artistic heart of the Carolina Sea Islands.</div>
            <span class=\"article-card-read\">Read Article &rarr;</span>
          </div>
        </a>

        <a class=\"article-card\" href=\"discover-bluffton.html\">
          <div class=\"article-card-img\" style=\"background-image:url('images/article-golf.jpg')\"></div>
          <div class=\"article-card-grad\"></div>
          <div class=\"article-card-content\">
            <div class=\"article-card-tag\">Golf Living</div>
            <div class=\"article-card-name\">Golf Communities in Bluffton: A Complete Guide</div>
            <div class=\"article-card-desc\">Nicklaus, Fazio, Dye &mdash; over 25 championship courses and the communities built around them.</div>
            <span class=\"article-card-read\">Read Article &rarr;</span>
          </div>
        </a>

        <a class=\"article-card\" href=\"discover-bluffton.html\">
          <div class=\"article-card-img\" style=\"background-image:url('images/article-relocation.jpg')\"></div>
          <div class=\"article-card-grad\"></div>
          <div class=\"article-card-content\">
            <div class=\"article-card-tag\">Relocation</div>
            <div class=\"article-card-name\">Moving to Bluffton from the Northeast: What to Expect</div>
            <div class=\"article-card-desc\">Tax savings, climate, culture shift, and why so many New Yorkers, Bostonians, and Washingtonians are making the move.</div>
            <span class=\"article-card-read\">Read Article &rarr;</span>
          </div>
        </a>

        <a class=\"article-card\" href=\"discover-bluffton.html\">
          <div class=\"article-card-img\" style=\"background-image:url('images/article-family.jpg')\"></div>
          <div class=\"article-card-grad\"></div>
          <div class=\"article-card-content\">
            <div class=\"article-card-tag\">Family</div>
            <div class=\"article-card-name\">Family Life in Bluffton: Schools, Activities &amp; Community</div>
            <div class=\"article-card-desc\">Top-rated schools, youth sports, nature camps, and a community built for families who value the outdoors.</div>
            <span class=\"article-card-read\">Read Article &rarr;</span>
          </div>
        </a>

        <a class=\"article-card\" href=\"discover-bluffton.html\">
          <div class=\"article-card-img\" style=\"background-image:url('images/article-buyers.jpg')\"></div>
          <div class=\"article-card-grad\"></div>
          <div class=\"article-card-content\">
            <div class=\"article-card-tag\">Buyer&rsquo;s Guide</div>
            <div class=\"article-card-name\">Why Buyers Are Choosing Bluffton Over Hilton Head in 2026</div>
            <div class=\"article-card-desc\">Bigger lots, lower taxes, gated luxury, and a small-town soul &mdash; the reasons that make Bluffton the smarter buy.</div>
            <span class=\"article-card-read\">Read Article &rarr;</span>
          </div>
        </a>

      </div>
    </div>
    <div class=\"articles-arrows\">
      <button class=\"articles-arrow\" onclick=\"document.getElementById('ewArticlesTrack').scrollBy({left:-380,behavior:'smooth'})\" aria-label=\"Scroll left\">&#8592;</button>
      <button class=\"articles-arrow\" onclick=\"document.getElementById('ewArticlesTrack').scrollBy({left:380,behavior:'smooth'})\" aria-label=\"Scroll right\">&#8594;</button>
    </div>
  </section>`;

  // ── Inject after blog-section ──────────────────────────────────────────
  if (blogSection && !document.getElementById('editorial-articles-widget')) {
    blogSection.insertAdjacentHTML('afterend', html);
  }
})();

// ── Remove post-footer content ───────────────────────────────────────
(function(){
  var f = document.querySelector(\"footer\");
  if (!f) return;
  var s = f.nextElementSibling;
  while (s) {
    var n = s.nextElementSibling;
    if (s.tagName !== \"SCRIPT\") s.remove();
    s = n;
  }
})();

// ── Dynamic Script Loader ───────────────────────────────────────────────
// editorial-widget.js is the only script hardcoded in index.html.
// Netlify snippet injection is not working, so we load the remaining
// widget scripts dynamically from here.
(function(){
  var scripts = [
    'content-patch.js',
    'editorial-intro-widget.js',
    'discover-bluffton-widget.js',
    'footer-patch.js'
  ];
  var v = '20260321';
  scripts.forEach(function(src){
    var s = document.createElement('script');
    s.src = '/' + src + '?v=' + v;
    document.body.appendChild(s);
  });
})();
