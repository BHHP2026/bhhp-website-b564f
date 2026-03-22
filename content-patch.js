/**
 * BHHP Content Patch â Carolina Sea Islands Rebrand
 * Replaces "Lowcountry" references with contextually appropriate alternatives
 * across all pages (index.html, discover-bluffton.html, etc.)
 *
 * Injected via Netlify snippet on all pages.
 * The editorial-widget.js handles its own text independently.
 */
(function () {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', patchContent);
  } else {
    patchContent();
  }

  function patchContent() {
    // âââ CONTEXT-AWARE REPLACEMENT MAP âââ
    // Order matters: longer/more-specific phrases first to avoid partial matches
    const replacements = [
      // === HEADINGS & TITLES ===
      ["The Lowcountry's Best-Kept Secret", "The Carolina Sea Islands' Best-Kept Secret"],
      ["THE LOWCOUNTRY'S BEST-KEPT SECRET", "THE CAROLINA SEA ISLANDS' BEST-KEPT SECRET"],
      ["World-Class Communities, Lowcountry Soul", "World-Class Communities, Coastal Soul"],
      ["Old Town Bluffton: Art, Dining & the Soul of the Lowcountry", "Old Town Bluffton: Art, Dining & the Soul of the Carolina Sea Islands"],
      ["Old Town Bluffton: Art, Dining & Lowcountry Charm", "Old Town Bluffton: Art, Dining & Coastal Charm"],
      ["Golf & Lowcountry Living", "Golf & Coastal Living"],
      ["Your Lowcountry Home Awaits", "Your Carolina Sea Islands Home Awaits"],
      ["YOUR LOWCOUNTRY HOME AWAITS", "YOUR CAROLINA SEA ISLANDS HOME AWAITS"],

      // === TAGLINES & SUBTITLES ===
      ["discovering the Lowcountry", "discovering the Carolina Sea Islands"],
      ["DISCOVERING THE LOWCOUNTRY", "DISCOVERING THE CAROLINA SEA ISLANDS"],
      ["Golf Â· Deep-Water Access Â· Equestrian Â· Lowcountry Elegance", "Golf Â· Deep-Water Access Â· Equestrian Â· Coastal Elegance"],
      ["GOLF Â· DEEP-WATER ACCESS Â· EQUESTRIAN Â· LOWCOUNTRY ELEGANCE", "GOLF Â· DEEP-WATER ACCESS Â· EQUESTRIAN Â· COASTAL ELEGANCE"],

      // === BODY COPY â SPECIFIC PHRASES ===
      ["perfect Lowcountry property", "perfect Carolina Sea Islands property"],
      ["perfect Lowcountry home", "perfect Carolina Sea Islands home"],
      ["elegant Lowcountry homes", "elegant coastal homes"],
      ["serious Lowcountry homebuyers", "serious Carolina Sea Islands homebuyers"],
      ["every Lowcountry homebuyer", "every Carolina Sea Islands homebuyer"],
      ["move to the Lowcountry", "move to the Carolina Sea Islands"],
      ["fallen in love with the Lowcountry", "fallen in love with the Carolina Sea Islands"],
      ["heart of the Lowcountry", "heart of the Carolina Sea Islands"],
      ["soul of the Lowcountry", "soul of the Carolina Sea Islands"],
      ["Lowcountry planter families", "Carolina Sea Islands planter families"],

      // === LIFESTYLE & CULTURE ===
      ["Lowcountry shrimp and grits", "coastal shrimp and grits"],
      ["Lowcountry charm", "coastal charm"],
      ["Lowcountry elegance", "coastal elegance"],
      ["Lowcountry living", "coastal living"],
      ["Lowcountry soul", "coastal soul"],
      ["Lowcountry experience", "coastal experience"],
      ["Lowcountry landscape", "Carolina Sea Islands landscape"],
      ["Lowcountry marshes", "coastal marshes"],
      ["Lowcountry pace", "coastal pace"],
      ["Lowcountry homes", "coastal homes"],

      // === MARKET / REGION REFERENCES ===
      ["fastest-growing Lowcountry market", "fastest-growing Carolina Sea Islands market"],
      ["Lowcountry market", "Carolina Sea Islands market"],
      ["Carolina Lowcountry", "Carolina Sea Islands"],
      ["the wild Lowcountry", "the wild Carolina Sea Islands"],
      ["pristine Lowcountry", "pristine Carolina Sea Islands"],

      // === CATCH-ALL (last resort for any remaining) ===
      ["the Lowcountry's", "the Carolina Sea Islands'"],
      ["THE LOWCOUNTRY'S", "THE CAROLINA SEA ISLANDS'"],
      ["the Lowcountry", "the Carolina Sea Islands"],
      ["THE LOWCOUNTRY", "THE CAROLINA SEA ISLANDS"],
      ["Lowcountry", "Carolina Sea Islands"],
      ["LOWCOUNTRY", "CAROLINA SEA ISLANDS"]
    ];

    // âââ WALK ALL TEXT NODES âââ
    // Skip elements injected by editorial-widget.js (it handles its own text)
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          // Skip editorial widget content (already patched in editorial-widget.js)
          if (node.parentElement.closest('.editorial-widget, [class*="editorial-widget"]')) {
            return NodeFilter.FILTER_REJECT;
          }
          // Skip script and style tags
          const tag = node.parentElement.tagName;
          if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') {
            return NodeFilter.FILTER_REJECT;
          }
          // Only process nodes that contain "lowcountry" (case-insensitive)
          if (node.textContent.toLowerCase().indexOf('lowcountry') !== -1) {
            return NodeFilter.FILTER_ACCEPT;
          }
          return NodeFilter.FILTER_REJECT;
        }
      }
    );

    const textNodes = [];
    var node;
    while (node = walker.nextNode()) {
      textNodes.push(node);
    }

    // Apply replacements to each text node
    textNodes.forEach(function (textNode) {
      var text = textNode.textContent;
      for (var i = 0; i < replacements.length; i++) {
        if (text.indexOf(replacements[i][0]) !== -1) {
          text = text.split(replacements[i][0]).join(replacements[i][1]);
        }
      }
      if (text !== textNode.textContent) {
        textNode.textContent = text;
      }
    });

    // âââ PATCH SCHEMA.ORG JSON-LD âââ
    // Also fix Lowcountry in structured data
    var scripts = document.querySelectorAll('script[type="application/ld+json"]');
    scripts.forEach(function (script) {
      if (script.textContent.toLowerCase().indexOf('lowcountry') !== -1) {
        var json = script.textContent;
        for (var i = 0; i < replacements.length; i++) {
          if (json.indexOf(replacements[i][0]) !== -1) {
            json = json.split(replacements[i][0]).join(replacements[i][1]);
          }
        }
        script.textContent = json;
      }
    });

    // âââ PATCH META TAGS & TITLE âââ
    var metaTags = document.querySelectorAll('meta[content*="Lowcountry"], meta[content*="lowcountry"], meta[content*="LOWCOUNTRY"]');
    metaTags.forEach(function (meta) {
      var content = meta.getAttribute('content');
      for (var i = 0; i < replacements.length; i++) {
        if (content.indexOf(replacements[i][0]) !== -1) {
          content = content.split(replacements[i][0]).join(replacements[i][1]);
        }
      }
      meta.setAttribute('content', content);
    });

    // Patch document title
    if (document.title.toLowerCase().indexOf('lowcountry') !== -1) {
      var title = document.title;
      for (var i = 0; i < replacements.length; i++) {
        if (title.indexOf(replacements[i][0]) !== -1) {
          title = title.split(replacements[i][0]).join(replacements[i][1]);
        }
      }
      document.title = title;
    }

    // âââ PATCH IMAGE ALT TEXT âââ
    var images = document.querySelectorAll('img[alt*="Lowcountry"], img[alt*="lowcountry"]');
    images.forEach(function (img) {
      var alt = img.getAttribute('alt');
      for (var i = 0; i < replacements.length; i++) {
        if (alt.indexOf(replacements[i][0]) !== -1) {
          alt = alt.split(replacements[i][0]).join(replacements[i][1]);
        }
      }
      img.setAttribute('alt', alt);
    });
  }
})();

/* ============================================================
   BHHP Luxury Listings Patch
   - Fixes listing-info positioning (copy anchored to bottom)
   - Raises anchor z-index so entire card is clickable
   - Sets correct listing URLs
   - Injects additional listing slides dynamically
   ============================================================ */
(function () {
  'use strict';

  var LISTINGS = [
    {
      name: 'Collier Beach Ocean Estate',
      address: '10 Collier Beach Road Â· Hilton Head Island, SC 29928',
      specs: '6 Beds  Â·  8 Baths  Â·  5,000 Sq Ft  Â·  Active',
      price: '$7,950,000',
      url: 'https://search.besthiltonheadproperties.com/search/detail/256909813?s[orderBy]=sourceCreationDate%2Cdesc&s[page]=1&s[mainInputSearch]=false&s[circle][lat]=32.1889992&s[circle][lng]=-80.7002976&s[circle][radius]=3&s[address]=10%20Collier%20Beach%20Rd%2C%20Hilton%20Head%20Island%2C%20SC%2029928',
      image: null  // uses existing slide in HTML
    },
    {
      name: 'Island Creek Estate',
      address: '29 Island Creek Drive Â· Okatie, SC 29909',
      specs: '4 Beds  Â·  5 Baths  Â·  3,570 Sq Ft  Â·  Active',
      price: '$1,950,000',
      url: 'https://search.besthiltonheadproperties.com/search/detail/258417153?s[orderBy]=sourceCreationDate%2Cdesc&s[page]=1&s[mainInputSearch]=false&s[circle][lat]=32.329027&s[circle][lng]=-80.840907&s[circle][radius]=3&s[address]=29%20Island%20Creek%20Dr%2C%20Okatie%2C%20SC%2029909',
      image: '/images/island-creek.jpg'
    },
    {
      name: 'Blue Dasher Estate',
      address: '35 Blue Dasher Lane Â· Bluffton, SC 29909',
      specs: '5 Beds  Â·  4.5 Baths  Â·  3,282 Sq Ft  Â·  Active',
      price: '$1,225,000',
      url: 'https://hhimls.mlsmatrix.com/Matrix/Results.aspx?c=H4sIAAAAAAAEAItWMjEyMlDSUTIDYksgNjS2MFTSySvNyaGIUDI0AJlqogTjYpipZEQFa6hIYHEiGYakHe4(tDym1MDAIA3duFgA0ExYO2wBAAA)',
      image: '/images/blue-dasher.jpg'
    },
    {
      name: 'Hidden Lake Estate',
      address: '4 Hidden Lake Court Â· Bluffton, SC 29910',
      specs: '5 Beds  Â·  5.5 Baths  Â·  4,858 Sq Ft  Â·  Active',
      price: '$1,185,000',
      url: 'https://hhimls.mlsmatrix.com/Matrix/Results.aspx?c=H4sIAAAAAAAEAItWMjEyMlDSUTIDYksgNjS2MFTSySvNyaGIUDI0AJlqqgTjYpipZEQFa6hIYHEiGYa4x5QaGBgaHuo5tA7duFgAN8pI2WwBAAA)',
      image: '/images/hidden-lake.png'
    }
  ];

  function buildSlide(listing) {
    var slide = document.createElement('div');
    slide.className = 'listing-slide';
    slide.style.cssText = 'background:center center/cover no-repeat #1a2a4a;';
    if (listing.image) {
      slide.style.backgroundImage = 'url(' + listing.image + ')';
    }
    slide.innerHTML =
      '<div class="listing-slide-overlay"></div>' +
      '<a href="' + listing.url + '" target="_blank" rel="noopener noreferrer"' +
      ' style="position:absolute;inset:0;z-index:3;cursor:pointer;"></a>' +
      '<div class="listing-info" style="position:absolute;bottom:0;left:0;right:0;z-index:2;pointer-events:none;">' +
        '<div>' +
          '<div class="listing-name">' + listing.name + '</div>' +
          '<div class="listing-location">' + listing.address + '</div>' +
          '<div class="listing-location">' + listing.specs + '</div>' +
        '</div>' +
        '<div>' +
          '<div class="listing-price-label">Asking Price</div>' +
          '<div class="listing-price">' + listing.price + '</div>' +
        '</div>' +
      '</div>';
    return slide;
  }

  function patchListings() {

    // ââ ALL-PAGES patches (run regardless of carousel) ââââââââââââââââââââââ

    // ââ 0a. Nav: About dropdown â remove "Our Team", link "Talita Haggist" ââ
    document.querySelectorAll('li').forEach(function(li) {
      var t = li.textContent.trim();
      if (t === 'Our Team' || t === 'Wexford' || t === 'Harbour Town') li.remove();
    });
    document.querySelectorAll('a').forEach(function(a) {
      if (a.textContent.trim() === 'Talita Haggist') {
        a.href = 'https://bhhp-staging.netlify.app/our-story';
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
    });

    // ââ 0b. Nav: "Blog" â "Editorial" ââââââââââââââââââââââââ
    document.querySelectorAll('a.nav-link, .mobile-menu a').forEach(function(a) {
      if (a.textContent.trim() === 'Blog') {
        a.textContent = 'Editorial';
        a.href = 'https://bhhp-staging.netlify.app/editorial/';
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
    });

    // ââ 0b. Hero headline: "Luxury" â "Elegance" âââââââââââââ
    var heroEm = document.querySelector('.hero-headline em');
    if (heroEm && heroEm.textContent.trim().match(/Luxury/i)) {
      heroEm.textContent = 'Elegance';
    }
    var quoteBg = document.querySelector('.quote-bg-text');
    if (quoteBg && quoteBg.textContent.trim().match(/LUXURY/i)) {
      quoteBg.textContent = 'ELEGANCE';
    }

    // ââ 0b. Hero sub copy ââââââââââââââââââââââââââââââââââââ
    var heroSub = document.querySelector('.hero-sub');
    if (heroSub && heroSub.textContent.includes('trusted name')) {
      heroSub.textContent = 'Find your next home with precision. Sell your current one with confidence. Carolina Sea Islands real estate, elevated.';
    }
    if (heroSub) {
      heroSub.style.color = '#ffffff';
      heroSub.style.fontSize = '13px';
      heroSub.style.fontWeight = '300';
      heroSub.style.opacity = '1';
    }

    // ââ 0. Quote widget: update text + attribution tiffany blue ââââââ
    var quoteText = document.querySelector('p.quote-text');
    if (quoteText && quoteText.textContent.trim().match(/hilton head is not just/i)) {
      quoteText.textContent = 'Every home here tells a story that begins the moment you arrive and never quite ends. My work is making sure the right story finds the right person.';
    }
    var quoteAttr = document.querySelector('.quote-attr');
    if (quoteAttr) quoteAttr.style.color = '#0ABAB5';

    // ââ 0. "A Lifestyle UNLIKE ANY OTHER" â tiffany blue span âââââââ
    var ilsSpan = document.querySelector('h2.ils-heading span');
    if (ilsSpan) ilsSpan.style.color = '#0ABAB5';

    // ââ 0. "Your Time TO SHINE" â tiffany blue span âââââââââââââââââ
    var shineSpan = document.querySelector('h2.fiftyfive-heading span');
    if (shineSpan) shineSpan.style.color = '#0ABAB5';

    // ââ 0. Editorial widget: desc copy + white, button tiffany blue âââ
    var editorialDesc = document.querySelector('p.editorial-intro-desc');
    if (editorialDesc && editorialDesc.textContent.trim().match(/elegant, inspired|stories from the Carolina/i)) {
      editorialDesc.textContent = 'The latest in architecture, lifestyle, and island living â curated news from the Carolina Sea Islands, by Best Hilton Head Properties.';
    }
    if (editorialDesc) editorialDesc.style.color = '#ffffff';
    var editorialIssue = document.querySelector('.editorial-intro-issue');
    if (editorialIssue) editorialIssue.style.color = '#0ABAB5';
    var editorialBtn = document.querySelector('a.editorial-intro-cta');
    if (editorialBtn) {
      editorialBtn.style.color = '#0ABAB5';
      editorialBtn.style.borderColor = '#0ABAB5';
    }

    // ââ 0. "Now Publishing" â tiffany blue ââââââââââââââââââââââââââ
    document.querySelectorAll('*').forEach(function(el) {
      if (el.children.length < 2 && el.textContent.trim() === 'Now Publishing') el.style.color = '#0ABAB5';
    });

    // ââ 0. Old green rgb(111,191,176) â brand tiffany across site ââââ
    document.querySelectorAll('.advsearch-h-ghost').forEach(function(el) { el.style.color = '#0ABAB5'; });
    document.querySelectorAll('.strip-icon-phone').forEach(function(el) { el.style.backgroundColor = '#0ABAB5'; });
    document.querySelectorAll('.dbw-eyebrow').forEach(function(el) { el.style.color = '#0ABAB5'; });
    document.querySelectorAll('.bhhp-ig-follow').forEach(function(el) { el.style.color = '#0ABAB5'; });
    document.querySelectorAll('.bhhp-yt-subscribe').forEach(function(el) { el.style.backgroundColor = '#0ABAB5'; });
    document.querySelectorAll('*').forEach(function(el) {
      if (el.children.length === 0 && el.textContent.trim() === 'Global') {
        if (getComputedStyle(el).color === 'rgb(111, 191, 176)') el.style.color = '#0ABAB5';
      }
    });

    // ââ 0. "YOUR BLUFFTON HOME SEARCH" â tiffany blue em (all pages) ââââ
    var articlesEm = document.querySelector('h2.articles-heading em');
    if (articlesEm) articlesEm.setAttribute('style', 'color:#0ABAB5 !important');

    // ââ 0. "RESORT EDITORIAL ARTICLES PREVIEW" â tiffany blue ARTICLES ââ
    // .dim class has rgba(0,0,0,0.25) with higher specificity â need !important via setAttribute
    document.querySelectorAll('h2').forEach(function(h) {
      if (h.textContent.indexOf('RESORT EDITORIAL') !== -1) {
        var span = h.querySelector('em span') || h.querySelector('em');
        if (span) span.setAttribute('style', 'color:#0ABAB5 !important');
      }
    });

    // ââ 0. discover-bluffton.html: remove Moss Creek community card ââââââ
    document.querySelectorAll('article.comm-card').forEach(function(card) {
      if (card.textContent.match(/moss creek/i)) card.remove();
    });

    // ââ 0. Bluffton widget: tagline + button â tiffany blue âââââââââââââ
    var dbwTagline = document.querySelector('.dbw-tagline');
    if (dbwTagline) dbwTagline.style.color = '#0ABAB5';
    var dbwCta = document.querySelector('a.dbw-cta');
    if (dbwCta) { dbwCta.style.color = '#0ABAB5'; dbwCta.style.borderColor = '#0ABAB5'; }
    var dbwDesc = document.querySelector('p.dbw-desc');
    if (dbwDesc) dbwDesc.style.color = '#ffffff';

    // ââ 0. Bluffton video: skip burned-in intro (0â7s) and outro (56s+) title cards ââ
    // Targets homepage widget (.discover-bluffton-video) AND discover-bluffton.html hero (video with bluffton-hero.mp4)
    var bluffVid = document.querySelector('.discover-bluffton-video');
    if (!bluffVid) {
      document.querySelectorAll('video').forEach(function(v) {
        if ((v.src || v.currentSrc || '').indexOf('bluffton-hero') !== -1) bluffVid = v;
        var src = v.querySelector('source');
        if (src && (src.src || src.getAttribute('src') || '').indexOf('bluffton-hero') !== -1) bluffVid = v;
      });
    }
    if (bluffVid) {
      var VID_START = 8;   // skip "experience bluffton IN 60 SECONDS" intro card
      var VID_END   = 56;  // skip "bluffton Â· HEART OF THE LOWCOUNTRY" outro card
      // Remove native loop so we control restart point
      bluffVid.removeAttribute('loop');
      bluffVid.loop = false;
      var vidJumping = false;
      var jumpTo = function(t) {
        if (vidJumping) return;
        vidJumping = true;
        bluffVid.currentTime = t;
        setTimeout(function() { vidJumping = false; }, 300);
      };
      var checkRange = function() {
        if (bluffVid.currentTime < VID_START) jumpTo(VID_START);
        else if (bluffVid.currentTime >= VID_END) jumpTo(VID_START);
      };
      bluffVid.addEventListener('timeupdate', checkRange);
      bluffVid.addEventListener('ended', function() {
        bluffVid.currentTime = VID_START;
        bluffVid.play();
      });
      // Set start point immediately (handles already-loaded case)
      if (bluffVid.readyState >= 1) {
        jumpTo(VID_START);
      } else {
        bluffVid.addEventListener('loadedmetadata', function() { jumpTo(VID_START); });
      }
    }

    // ââ 0. discover-bluffton.html hero: tagline â tiffany blue âââââââââââ
    var heroTagline = document.querySelector('.hero-tagline');
    if (heroTagline) heroTagline.setAttribute('style', 'color:#0ABAB5 !important');

    // ââ 0. 55+ cards + VIEW ALL â search site, new tab ââââââââââââââ
    document.querySelectorAll('.fiftyfive-card').forEach(function(card) {
      card.style.position = 'relative';
      var overlay = document.createElement('a');
      overlay.href = 'https://search.besthiltonheadproperties.com';
      overlay.target = '_blank';
      overlay.rel = 'noopener noreferrer';
      overlay.style.cssText = 'position:absolute;inset:0;z-index:10;display:block;';
      card.appendChild(overlay);
    });
    document.querySelectorAll('a').forEach(function(a) {
      if (a.textContent.trim().match(/view all 55/i)) {
        a.href = 'https://search.besthiltonheadproperties.com';
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
    });

    // ââ 0. "Explore the Islands" â search site, new tab âââââââââââââ
    document.querySelectorAll('a').forEach(function(a) {
      if (a.textContent.trim().match(/explore the islands/i)) {
        a.href = 'https://search.besthiltonheadproperties.com';
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
    });

    // ââ 0. Island Neighborhoods: "Neighborhoods" â Tiffany blue, remove active listing counts âââââ
    var neighborhoodsSection = document.querySelector('.neighborhoods-section');
    if (neighborhoodsSection) {
      var neighborhoodsDim = neighborhoodsSection.querySelector('h2.section-h2 .dim');
      if (neighborhoodsDim) {
        neighborhoodsDim.style.color = '#0ABAB5';
        neighborhoodsDim.style.opacity = '1';
      }
      neighborhoodsSection.querySelectorAll('.nc-count').forEach(function(el) { el.remove(); });
      neighborhoodsSection.querySelectorAll('a.view-all-link').forEach(function(a) {
        if (a.textContent.trim().match(/view all areas/i)) {
          a.href = 'https://search.besthiltonheadproperties.com';
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
        }
      });
    }

    // ââ 0. Contact strip: outline button + tiffany mail icon âââââââââ
    var stripBtn = document.querySelector('a.strip-btn');
    if (stripBtn) {
      stripBtn.style.backgroundColor = 'transparent';
      stripBtn.style.color = 'rgb(129, 216, 208)';
      stripBtn.style.border = '1px solid rgb(129, 216, 208)';
      stripBtn.style.padding = '14px 32px';
      stripBtn.style.fontWeight = '500';
      stripBtn.style.letterSpacing = '3px';
      stripBtn.style.fontSize = '10px';
    }
    var emailPath = document.querySelector('.strip-icon-email svg path');
    if (emailPath) emailPath.style.fill = '#0ABAB5';
    var stripBtnIcon = document.querySelector('a.strip-btn svg path');
    if (stripBtnIcon) stripBtnIcon.style.fill = '#0ABAB5';

    // ââ 0. Rename heading: "Luxury Listings" â "Featured Estates" âââ
    var listingsTitle = document.querySelector('.listings-title');
    if (listingsTitle) listingsTitle.style.fontSize = '14px';

    var headline = document.querySelector('.listings-headline');
    if (headline) {
      // Replace bare text node with a styled gold span
      Array.from(headline.childNodes).forEach(function(node) {
        if (node.nodeType === 3 && node.textContent.trim().match(/Luxury|Featured/i)) {
          var span = document.createElement('span');
          span.textContent = 'FEATURED ';
          span.style.color = '#ffffff';
          span.style.fontSize = '52px';
          span.style.verticalAlign = 'baseline';
          headline.replaceChild(span, node);
        }
      });
      var dimSpan = headline.querySelector('.dim');
      if (dimSpan) {
        dimSpan.textContent = 'Estates';
        dimSpan.style.color = '#0ABAB5';
        dimSpan.style.opacity = '1';
        dimSpan.style.fontSize = '52px';
      }
    }

    // ââ CAROUSEL-ONLY patches ââââââââââââââââââââââââââââââââââââââââââââââââ
    var carousel = document.querySelector('.listing-carousel');
    if (!carousel) return;

    // ââ 1. Fix the existing HTML slide ââââââââââââââââââââââ
    var existingSlides = carousel.querySelectorAll('.listing-slide');
    existingSlides.forEach(function (slide) {
      var anchor = slide.querySelector('a');
      if (anchor) {
        anchor.style.zIndex = '3';
        anchor.style.cursor = 'pointer';
        var nameEl = slide.querySelector('.listing-name');
        if (nameEl) {
          var name = nameEl.textContent.trim().toLowerCase();
          var match = LISTINGS.find(function (l) {
            return name.includes(l.name.toLowerCase()) || l.name.toLowerCase().includes(name);
          });
          if (match) {
            anchor.href = match.url;
            anchor.target = '_blank';
            anchor.rel = 'noopener noreferrer';
          }
        }
      }
      var info = slide.querySelector('.listing-info');
      if (info) {
        info.style.position = 'absolute';
        info.style.bottom = '0';
        info.style.left = '0';
        info.style.right = '0';
        info.style.zIndex = '2';
        info.style.pointerEvents = 'none';
      }
    });

    // ââ 2. Inject additional slides ââââââââââââââââââââââââââ
    var injected = LISTINGS.filter(function (l) { return l.image !== null; });
    injected.forEach(function (listing) {
      var already = carousel.querySelector('[data-bhhp-listing="' + listing.name + '"]');
      if (already) return;
      var slide = buildSlide(listing);
      slide.setAttribute('data-bhhp-listing', listing.name);
      slide.style.opacity = '0';
      slide.style.transition = 'opacity 0.5s';
      carousel.appendChild(slide);
    });

    // ââ 3. Also inject image-less slides âââââââââââââââââââââ
    var noImage = LISTINGS.filter(function (l) { return l.image === null && l.name !== 'Collier Beach Ocean Estate'; });
    noImage.forEach(function (listing) {
      var already = carousel.querySelector('[data-bhhp-listing="' + listing.name + '"]');
      if (already) return;
      var slide = buildSlide(listing);
      slide.setAttribute('data-bhhp-listing', listing.name);
      slide.style.opacity = '0';
      slide.style.transition = 'opacity 0.5s';
      carousel.appendChild(slide);
    });

    // ââ 4. Hook nav arrows to cycle through all slides âââââââ
    var allSlides = Array.from(carousel.querySelectorAll('.listing-slide'));
    var total = allSlides.length;
    var current = 0;

    allSlides.forEach(function (s, i) {
      s.style.opacity = i === 0 ? '1' : '0';
      s.style.pointerEvents = i === 0 ? 'auto' : 'none';
      s.style.zIndex = i === 0 ? '1' : '0';
    });

    // Update counter total â fix text node directly to handle any spacing format
    var counterEl = document.querySelector('.listings-counter');
    if (counterEl) {
      Array.from(counterEl.childNodes).forEach(function(node) {
        if (node.nodeType === 3 && node.textContent.indexOf('|') !== -1) {
          node.textContent = node.textContent.replace(/\|\s*\d+/, '|  ' + total);
        }
      });
    }
    var curEl = document.querySelector('.listings-counter .cur');

    function goTo(idx) {
      allSlides[current].style.opacity = '0';
      allSlides[current].style.pointerEvents = 'none';
      allSlides[current].style.zIndex = '0';
      current = (idx + total) % total;
      allSlides[current].style.opacity = '1';
      allSlides[current].style.pointerEvents = 'auto';
      allSlides[current].style.zIndex = '1';
      if (curEl) curEl.textContent = String(current + 1).padStart(2, '0');
    }

    // Nav uses .lnav-btn divs
    var navBtns = document.querySelectorAll('.lnav-btn');
    navBtns.forEach(function (btn) {
      var newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);
    });
    var freshBtns = document.querySelectorAll('.lnav-btn');
    if (freshBtns[0]) freshBtns[0].addEventListener('click', function () { goTo(current - 1); });
    if (freshBtns[1]) freshBtns[1].addEventListener('click', function () { goTo(current + 1); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', patchListings);
  } else {
    patchListings();
  }
})();
