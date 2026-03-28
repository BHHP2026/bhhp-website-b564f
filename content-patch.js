/**
 * BHHP Content Patch — Carolina Sea Islands Rebrand
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
    const replacements = [
      ["The Lowcountry's Best-Kept Secret", "The Carolina Sea Islands' Best-Kept Secret"],
      ["THE LOWCOUNTRY'S BEST-KEPT SECRET", "THE CAROLINA SEA ISLANDS' BEST-KEPT SECRET"],
      ["World-Class Communities, Lowcountry Soul", "World-Class Communities, Coastal Soul"],
      ["Old Town Bluffton: Art, Dining & the Soul of the Lowcountry", "Old Town Bluffton: Art, Dining & the Soul of the Carolina Sea Islands"],
      ["Old Town Bluffton: Art, Dining & Lowcountry Charm", "Old Town Bluffton: Art, Dining & Coastal Charm"],
      ["Golf & Lowcountry Living", "Golf & Coastal Living"],
      ["Your Lowcountry Home Awaits", "Your Carolina Sea Islands Home Awaits"],
      ["YOUR LOWCOUNTRY HOME AWAITS", "YOUR CAROLINA SEA ISLANDS HOME AWAITS"],
      ["discovering the Lowcountry", "discovering the Carolina Sea Islands"],
      ["DISCOVERING THE LOWCOUNTRY", "DISCOVERING THE CAROLINA SEA ISLANDS"],
      ["Golf · Deep-Water Access · Equestrian · Lowcountry Elegance", "Golf · Deep-Water Access · Equestrian · Coastal Elegance"],
      ["GOLF · DEEP-WATER ACCESS · EQUESTRIAN · LOWCOUNTRY ELEGANCE", "GOLF · DEEP-WATER ACCESS · EQUESTRIAN · COASTAL ELEGANCE"],
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
      ["fastest-growing Lowcountry market", "fastest-growing Carolina Sea Islands market"],
      ["Lowcountry market", "Carolina Sea Islands market"],
      ["Carolina Lowcountry", "Carolina Sea Islands"],
      ["the wild Lowcountry", "the wild Carolina Sea Islands"],
      ["pristine Lowcountry", "pristine Carolina Sea Islands"],
      ["the Lowcountry's", "the Carolina Sea Islands'"],
      ["THE LOWCOUNTRY'S", "THE CAROLINA SEA ISLANDS'"],
      ["the Lowcountry", "the Carolina Sea Islands"],
      ["THE LOWCOUNTRY", "THE CAROLINA SEA ISLANDS"],
      ["Lowcountry", "Carolina Sea Islands"],
      ["LOWCOUNTRY", "CAROLINA SEA ISLANDS"]
    ];

    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          if (node.parentElement.closest('.editorial-widget, [class*="editorial-widget"]')) {
            return NodeFilter.FILTER_REJECT;
          }
          const tag = node.parentElement.tagName;
          if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') {
            return NodeFilter.FILTER_REJECT;
          }
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

    if (document.title.toLowerCase().indexOf('lowcountry') !== -1) {
      var title = document.title;
      for (var i = 0; i < replacements.length; i++) {
        if (title.indexOf(replacements[i][0]) !== -1) {
          title = title.split(replacements[i][0]).join(replacements[i][1]);
        }
      }
      document.title = title;
    }

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
   ============================================================ */
(function () {
  'use strict';

  var LISTINGS = [
    {
      name: 'Collier Beach Ocean Estate',
      address: '10 Collier Beach Road · Hilton Head Island, SC 29928',
      specs: '6 Beds  ·  8 Baths  ·  5,000 Sq Ft  ·  Active',
      price: '$7,950,000',
      url: 'https://search.besthiltonheadproperties.com/search/detail/256909813?s[orderBy]=sourceCreationDate%2Cdesc&s[page]=1&s[mainInputSearch]=false&s[circle][lat]=32.1889992&s[circle][lng]=-80.7002976&s[circle][radius]=3&s[address]=10%20Collier%20Beach%20Rd%2C%20Hilton%20Head%20Island%2C%20SC%2029928',
      image: null
    },
    {
      name: 'Island Creek Estate',
      address: '29 Island Creek Drive · Okatie, SC 29909',
      specs: '4 Beds  ·  5 Baths  ·  3,570 Sq Ft  ·  Active',
      price: '$1,950,000',
      url: 'https://search.besthiltonheadproperties.com/search/detail/258417153?s[orderBy]=sourceCreationDate%2Cdesc&s[page]=1&s[mainInputSearch]=false&s[circle][lat]=32.329027&s[circle][lng]=-80.840907&s[circle][radius]=3&s[address]=29%20Island%20Creek%20Dr%2C%20Okatie%2C%20SC%2029909',
      image: '/images/29%20Island%20Creek.jpg'
    },
    {
      name: 'Blue Dasher Estate',
      address: '35 Blue Dasher Lane · Bluffton, SC 29909',
      specs: '5 Beds  ·  4.5 Baths  ·  3,282 Sq Ft  ·  Active',
      price: '$1,225,000',
      url: 'https://hhimls.mlsmatrix.com/Matrix/Results.aspx?c=H4sIAAAAAAAEAItWMjEyMlDSUTIDYksgNjS2MFTSySvNyaGIUDI0AJlqogTjYpipZEQFa6hIYHEiGYakHe4(tDym1MDAIA3duFgA0ExYO2wBAAA)',
      image: '/images/35%20Blue%20Dash%20Lane%20.jpg'
    },
    {
      name: 'Hidden Lake Estate',
      address: '4 Hidden Lake Court · Bluffton, SC 29910',
      specs: '5 Beds  ·  5.5 Baths  ·  4,858 Sq Ft  ·  Active',
      price: '$1,185,000',
      url: 'https://hhimls.mlsmatrix.com/Matrix/Results.aspx?c=H4sIAAAAAAAEAItWMjEyMlDSUTIDYksgNjS2MFTSySvNyaGIUDI0AJlqqgTjYpipZEQFa6hIYHEiGYa4x5QaGBgaHuo5tA7duFgAN8pI2WwBAAA)',
      image: '/images/4%20Hidden%20Lane.png'
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

  // ── HERO LUXURY→ELEGANCE ──────────────────────────────────────────────────
  // Uses multiple fallback selectors + retries at 2s and 5s to handle
  // cases where Ylopo renders or re-renders the hero after DOMContentLoaded.
  function patchHeroLuxury() {
    var heroEm = null;

    // 1. Try the primary known selector
    heroEm = document.querySelector('.hero-headline em');

    // 2. Broader fallback: any em inside a hero-ish container
    if (!heroEm) {
      heroEm = document.querySelector(
        '[class*="hero"] h1 em, [class*="hero"] h2 em, .hero em, #hero em'
      );
    }

    // 3. Last resort: walk ALL em tags looking for one that is just "Luxury"
    if (!heroEm) {
      document.querySelectorAll('em').forEach(function(em) {
        if (!heroEm && em.textContent.trim().match(/^luxury$/i)) {
          heroEm = em;
        }
      });
    }

    if (heroEm) {
      heroEm.textContent = heroEm.textContent
        .replace(/LUXURY/g, 'ELEGANCE')
        .replace(/Luxury/g, 'Elegance')
        .replace(/luxury/g, 'elegance');
      // Reveal the element now that it has the correct text.
      // The head CSS snippet hides it at load to prevent any flash of old copy.
      heroEm.style.visibility = 'visible';
    }

    // Background watermark behind the headline
    var quoteBg = document.querySelector('.quote-bg-text');
    if (quoteBg && quoteBg.textContent.trim().match(/luxury/i)) {
      quoteBg.textContent = quoteBg.textContent
        .replace(/LUXURY/g, 'ELEGANCE')
        .replace(/Luxury/g, 'Elegance')
        .replace(/luxury/g, 'elegance');
    }
  }

  // ── HERO SUB COPY ─────────────────────────────────────────────────────────
  // Rewrites the sub-headline if it still contains any Ylopo default copy.
  // Always applies styling regardless of text content.
  function patchHeroSub() {
    var heroSub = document.querySelector('.hero-sub');
    if (!heroSub) return;
    if (heroSub.textContent.match(/trusted|luxury|hilton head/i)) {
      heroSub.textContent = 'Find your next home with precision. Sell your current one with confidence. Carolina Sea Islands real estate, elevated.';
    }
    // Always reveal the sub regardless of whether we rewrote the text —
    // the head CSS snippet hides it at load to prevent flash of old copy.
    heroSub.style.visibility = 'visible';
    heroSub.style.color = '#ffffff';
    heroSub.style.fontSize = '13px';
    heroSub.style.fontWeight = '300';
    heroSub.style.opacity = '1';
  }

  function patchListings() {

    // ── Nav patches ───────────────────────────────────────────────────────────
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
    document.querySelectorAll('a.nav-link, .mobile-menu a').forEach(function(a) {
      if (a.textContent.trim() === 'Blog') {
        a.textContent = 'Editorial';
        a.href = 'https://bhhp-staging.netlify.app/editorial/';
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
    });

    // ── Hero: Luxury→Elegance + sub copy (immediate + retried) ───────────────
    patchHeroLuxury();
    patchHeroSub();
    setTimeout(patchHeroLuxury, 2000);
    setTimeout(patchHeroSub,   2000);
    setTimeout(patchHeroLuxury, 5000);
    setTimeout(patchHeroSub,   5000);

    // Safety net: if the hero selectors never matched, force-reveal after 3s
    // so nothing stays permanently hidden due to a selector mismatch.
    setTimeout(function () {
      var hidden = document.querySelectorAll(
        '.hero-headline em, .hero-sub, [class*="hero"] h1 em, [class*="hero"] h2 em, .hero em, #hero em'
      );
      hidden.forEach(function (el) {
        if (getComputedStyle(el).visibility === 'hidden') {
          el.style.visibility = 'visible';
        }
      });
    }, 3000);

    // ── Serhant CTA body: remove "first and only" claim ──────────────────────
    var serhantCta = document.querySelector('p.serhant-cta-body');
    if (serhantCta && serhantCta.textContent.match(/first and only/i)) {
      serhantCta.textContent = 'Best Hilton Head Properties brings cutting-edge marketing solutions to the Hilton Head Island marketplace through our partnership with SERHANT. \u2014 New York\u2019s most avant-garde creative powerhouse. Cinematic campaigns, advanced analytics, and a global marketing mindset that empowers every client to excel in their real estate goals.';
    }

    // ── Video widget: button → OUR STORY, sub text → remove London ───────────
    var cinvidBtn = document.querySelector('a.cinvid-btn');
    if (cinvidBtn && cinvidBtn.textContent.match(/meet talita/i)) {
      cinvidBtn.textContent = 'OUR STORY';
    }
    var cinvidSub = document.querySelector('p.cinvid-sub');
    if (cinvidSub && cinvidSub.textContent.match(/london/i)) {
      cinvidSub.textContent = 'HILTON HEAD ISLAND \u00b7 INTERNATIONAL MARKETS';
    }

    // ── Talita bio: approved copy + white text ────────────────────────────────
    var bioPara = document.querySelector('p.bio-body');
    if (bioPara) {
      bioPara.textContent = 'Talita Haggist is a Global Real Estate Advisor whose life and career have been shaped by an uncommon international journey. The daughter of property developers, she pursued engineering studies across Brazil, Russia, Germany, and Italy \u2014 a foundation that gave her an avant-garde perspective on markets, value, and opportunity that few advisors can match. After founding a full-service property management company and serving as senior liaison to one of Brazil\u2019s most prominent corporations, she relocated from London to Hilton Head Island, drawn by the island\u2019s understated elegance and enduring investment strength. That rare international lens is what Talita brings to every client relationship \u2014 translating global insight into the kind of clear, confident guidance that helps people find the properties that truly elevate their lives.';
      bioPara.style.color = '#ffffff';
    }

    // ── Quote widget ──────────────────────────────────────────────────────────
    var quoteText = document.querySelector('p.quote-text');
    if (quoteText && quoteText.textContent.trim().match(/hilton head is not just/i)) {
      quoteText.textContent = 'Every home here tells a story that begins the moment you arrive and never quite ends. My work is making sure the right story finds the right person.';
    }
    var quoteAttr = document.querySelector('.quote-attr');
    if (quoteAttr) quoteAttr.style.color = '#0ABAB5';

    // ── Tiffany blue accent patches ───────────────────────────────────────────
    var ilsSpan = document.querySelector('h2.ils-heading span');
    if (ilsSpan) ilsSpan.style.color = '#0ABAB5';

    var shineSpan = document.querySelector('h2.fiftyfive-heading span');
    if (shineSpan) shineSpan.style.color = '#0ABAB5';

    var editorialDesc = document.querySelector('p.editorial-intro-desc');
    if (editorialDesc && editorialDesc.textContent.trim().match(/elegant, inspired|stories from the Carolina/i)) {
      editorialDesc.textContent = 'The latest in architecture, lifestyle, and island living — curated news from the Carolina Sea Islands, by Best Hilton Head Properties.';
    }
    if (editorialDesc) editorialDesc.style.color = '#ffffff';
    var editorialIssue = document.querySelector('.editorial-intro-issue');
    if (editorialIssue) editorialIssue.style.color = '#0ABAB5';
    var editorialBtn = document.querySelector('a.editorial-intro-cta');
    if (editorialBtn) {
      editorialBtn.style.color = '#0ABAB5';
      editorialBtn.style.borderColor = '#0ABAB5';
    }

    document.querySelectorAll('*').forEach(function(el) {
      if (el.children.length < 2 && el.textContent.trim() === 'Now Publishing') el.style.color = '#0ABAB5';
    });

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

    var articlesEm = document.querySelector('h2.articles-heading em');
    if (articlesEm) articlesEm.setAttribute('style', 'color:#0ABAB5 !important');

    document.querySelectorAll('h2').forEach(function(h) {
      if (h.textContent.indexOf('RESORT EDITORIAL') !== -1) {
        var span = h.querySelector('em span') || h.querySelector('em');
        if (span) span.setAttribute('style', 'color:#0ABAB5 !important');
      }
    });

    // ── discover-bluffton.html specific ───────────────────────────────────────
    document.querySelectorAll('article.comm-card').forEach(function(card) {
      if (card.textContent.match(/moss creek/i)) card.remove();
    });

    var dbwTagline = document.querySelector('.dbw-tagline');
    if (dbwTagline) dbwTagline.style.color = '#0ABAB5';
    var dbwCta = document.querySelector('a.dbw-cta');
    if (dbwCta) { dbwCta.style.color = '#0ABAB5'; dbwCta.style.borderColor = '#0ABAB5'; }
    var dbwDesc = document.querySelector('p.dbw-desc');
    if (dbwDesc) dbwDesc.style.color = '#ffffff';

    var bluffVid = document.querySelector('.discover-bluffton-video');
    if (!bluffVid) {
      document.querySelectorAll('video').forEach(function(v) {
        if ((v.src || v.currentSrc || '').indexOf('bluffton-hero') !== -1) bluffVid = v;
        var src = v.querySelector('source');
        if (src && (src.src || src.getAttribute('src') || '').indexOf('bluffton-hero') !== -1) bluffVid = v;
      });
    }
    if (bluffVid) {
      var VID_START = 8;
      var VID_END   = 56;
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
      if (bluffVid.readyState >= 1) {
        jumpTo(VID_START);
      } else {
        bluffVid.addEventListener('loadedmetadata', function() { jumpTo(VID_START); });
      }
    }

    var heroTagline = document.querySelector('.hero-tagline');
    if (heroTagline) heroTagline.setAttribute('style', 'color:#0ABAB5 !important');

    // ── 55+ cards ─────────────────────────────────────────────────────────────
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

    document.querySelectorAll('a').forEach(function(a) {
      if (a.textContent.trim().match(/explore the islands/i)) {
        a.href = 'https://search.besthiltonheadproperties.com';
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
    });

    // ── Island Neighborhoods widget ───────────────────────────────────────────
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

    // ── Contact strip ─────────────────────────────────────────────────────────
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

    // ── Featured Estates heading ───────────────────────────────────────────────
    var listingsTitle = document.querySelector('.listings-title');
    if (listingsTitle) listingsTitle.style.fontSize = '14px';

    var headline = document.querySelector('.listings-headline');
    if (headline) {
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

    // ── Carousel ──────────────────────────────────────────────────────────────
    var carousel = document.querySelector('.listing-carousel');
    if (!carousel) return;

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

    var allSlides = Array.from(carousel.querySelectorAll('.listing-slide'));
    var total = allSlides.length;
    var current = 0;

    allSlides.forEach(function (s, i) {
      s.style.opacity = i === 0 ? '1' : '0';
      s.style.pointerEvents = i === 0 ? 'auto' : 'none';
      s.style.zIndex = i === 0 ? '1' : '0';
    });

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


/* HOMEPAGE CONVERSION PATCHES */
(function () {
  function patchHomepageUI() {

    var heroBtn = Array.from(document.querySelectorAll('a.btn-outline')).find(function (a) {
      return a.textContent.trim() === 'Our Neighborhoods';
    });
    if (heroBtn) {
      heroBtn.textContent = 'Get Your Free Home Valuation →';
      heroBtn.href = 'https://search.besthiltonheadproperties.com/seller';
    }

    var quoteSection = document.querySelector('.quote-section');
    if (quoteSection) quoteSection.style.display = 'none';

    var searchBody = document.querySelector('.advsearch-body');
    if (searchBody && searchBody.textContent.includes('45 years')) {
      searchBody.textContent = 'Browse every listing on Hilton Head Island and Bluffton — filtered by community, price, waterfront, lifestyle, and more. Backed by Talita Haggist’s elite market expertise and the global reach of SERHANT.';
    }

    var serhant  = document.querySelector('.serhant-section');
    var buysell  = document.querySelector('.buysell-section');
    var listings = document.querySelector('.listings-section');
    var cinvid   = document.querySelector('.cinvid-section');
    var tst2     = document.querySelector('.tst2-section');
    if (serhant  && buysell)  serhant.after(buysell);
    if (buysell  && listings) buysell.after(listings);
    if (tst2     && cinvid)   tst2.after(cinvid);

    var serhantSection = document.querySelector('.serhant-section');
    var statsSection   = document.querySelector('.stats-section');
    if (serhantSection && statsSection && !document.querySelector('.serhant-stats-bar')) {
      var logoImg   = document.querySelector('.serhant-logo-img');
      var logoClone = logoImg ? logoImg.cloneNode(true) : null;
      if (logoClone) {
        logoClone.style.cssText = 'height:44px;width:auto;display:block;margin:8px auto 0;';
        logoClone.className = '';
        logoClone.alt = 'SERHANT.';
      }
      var bar = document.createElement('div');
      bar.className = 'serhant-stats-bar';
      bar.style.cssText = 'background:#fff;padding:36px 80px 60px;text-align:center;border-top:1px solid #e8e8e8;font-family:Montserrat,sans-serif;';
      var ey = document.createElement('div');
      ey.style.cssText = 'font-size:10px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:rgb(212,175,55);margin-bottom:28px;';
      ey.textContent = 'SERHANT. · 2025 Office Numbers';
      var hl = document.createElement('div');
      hl.style.cssText = 'font-family:"Playfair Display",serif;font-size:48px;font-weight:400;color:rgb(17,17,17);line-height:1.4;margin-bottom:32px;';
      hl.textContent = 'The Numbers Behind the';
      if (logoClone) hl.appendChild(logoClone);
      var nd = document.createElement('div'); nd.textContent = 'Network'; hl.appendChild(nd);
      var bp = document.createElement('p');
      bp.style.cssText = 'font-size:14px;font-weight:500;line-height:1.8;color:rgb(80,80,80);max-width:720px;margin:0 auto 52px;letter-spacing:0.3px;';
      bp.textContent = 'SERHANT. — one of the fastest-growing real estate brokerages in the country. As proud founding members of SERHANT. in South Carolina, Best Hilton Head Properties brings this level of reach, resources, and marketing power directly to Hilton Head Island. When you work with us, you’re backed by a national network built for a new era of real estate.';
      var gr = document.createElement('div');
      gr.style.cssText = 'display:flex;justify-content:center;gap:80px;align-items:flex-start;flex-wrap:wrap;';
      [{num:'$6B+',label:'Sales Volume in 2025'},{num:'2,500+',label:'Agents Nationwide'},{num:'Top 30',label:'Brokerage in the U.S.'}].forEach(function (item) {
        var col = document.createElement('div'); col.style.cssText = 'text-align:center;';
        var nm  = document.createElement('div'); nm.style.cssText  = 'font-family:"Playfair Display",serif;font-size:48px;font-weight:400;color:rgb(9,41,105);line-height:1;'; nm.textContent = item.num;
        var lb  = document.createElement('div'); lb.style.cssText  = 'font-size:9px;letter-spacing:3px;text-transform:uppercase;color:rgb(153,153,153);margin-top:12px;'; lb.textContent = item.label;
        col.appendChild(nm); col.appendChild(lb); gr.appendChild(col);
      });
      bar.appendChild(ey); bar.appendChild(hl); bar.appendChild(bp); bar.appendChild(gr);
      serhantSection.appendChild(bar);
      statsSection.style.display = 'none';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', patchHomepageUI);
  } else {
    patchHomepageUI();
  }
})();
// Hide YouTube section until channel is ready
(function(){var yt=document.querySelector('.bhhp-yt-section');if(yt)yt.style.display='none';})();