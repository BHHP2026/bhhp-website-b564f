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
// Move contact strip to immediately after testimonials
(function(){var tst=document.querySelector('.tst2-section'),strip=document.querySelector('.bhhp-contact-strip');if(tst&&strip)tst.after(strip);})();
// Set fishing card background image
(function(){var c=Array.from(document.querySelectorAll('.ils-card')).find(function(x){return x.querySelector('.ils-card-name')&&x.querySelector('.ils-card-name').textContent.trim()==='Fishing';});if(c){var d=c.querySelector('.ils-card-img');if(d)d.style.backgroundImage="url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIWFhUXFx0aGBgYGR0YGxgYGh4aGxcaGxsgICggHR4lHRoYITEiJikrLi4vFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS0tLS8rLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xABEEAACAQIEAwYDBQYFAgUFAAABAhEDIQAEEjEFQVEGEyJhcYEykaEHQlKxwRQjYtHh8DNygpLxFaIWQ3OywhckNFNj/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAAF/8QAKxEAAgICAgIBAwMEAwAAAAAAAAECEQMhEjEEQRMiUWEycZGhweHxBSNC/9oADAMBAAIRAxEAPwBfpcHWP8Qk7zJP/wApxr/0+mLh6isNiA1/cTjRM4w3leuoaR9TjxuI/wAQMdBq/IgY3mc2GZrrENWgf/z/AFIvi6nE6uzU/QmFJ+uKtDO1D8KufZQP798SvmsxA8APKGZf0BOOCa1eLnVDUwZ3iZI/0scSjNKV8NOI2nVfyO/zxpVzGYJ0lbAQNIgbWgtES36741ztN9YFY01KiG1ODpiOQ+I6SByM2OAEtU80ijxFFJ3ga49xHnitnOKBFtVnkAFA/r/xgetWnqgmkIi6ox38woH/ABi7WIRZlVgyCNImRte55fLDUCynU4iYBKm8x4gTaxBvI5EYqVKtSr4RKjnE3HmJjlP/ABgsmdGmdKm1mD6TI5zBsOlvXGuSz7PUWl3ksxgKiEydtzvsd+Una+BdHUCXylQQFBgSZiDvz+QPv649/wCnVTMm3TVb5YZ63Dq7uyUlXWph4BcLYETcAEggx588Q5vgVYSrCpI/BSc/pHMXnHc0HiABlKuk+Ow5TjSll6jTNQgddTMPpbBjLcN0ETQryzBddSnEFttwSYF7Ttgx/wCFs4dI7lfEJMuoKb/Hc9PuBsD5EdxFKtS0izt66SAffF7gqmoRT1O5JAAA1EGesyBjo3A+w9GmD+0aKhN4HhUbGZm53Hp9GbJZehl0PdIoXeEEzhXmDwOQ1ODZinWgZdyKqnQHLQXQHWLbysmOlOcW+FcAzFSoF7mnTHLWpn0gjfzPrfHRO0zmtQJpA97SYVaM2/eJcDqA6lkPk5xG3aPLCkM0pCLUVWk/EJHTebxiXN9DUhfHZHu5OYqtVEkhdOkqDaVaTMALaL6dtsL/AGwzdDK06dXL929SjWDnWRUZ6bBkdDA06TqA6iJ3vhn4vxjWs0zIewLSC0zyHiA87TyxRy3ZN8zTYOzojIaZBIbcQCNS7jruYHOSefR3sa+EVKlaitZO67uoodQsrZhKk2369CMRf9bhu4anqbnEmAdi1oA8/LCb9j/FXpUsxk6k97lqpsWkBSdJCgmAA4YmI+MY6flVaGdkgk7WFhzwiY1HNu1fEVWsiuhUZim+Vb7olv8ABYHmQTvy1eWLPaXi9Z+G0atNFBoBKwGxpmmASOm2pSOkjBT7U+D08xka0Ga1NRVSOtO5sLyU1AHzwK+zrjlHOZN6NSmdbmoD+E6wrOLmQC1VgBBsI5YF7OoL8L4hnamTR0qoQ9PWGCQII1bdRtytgtV7PacpTOedKrIwfToVlBUAU1UEDpeRzPIYWvsjdu5q5Kq3jyeZ0EG0oWLHfl4KvyGGDtFxXv6kD/DUwvn/ABfywrkNFbBGr+xywI4vUZMzlHB8LM9Jv9a6k/7k+uGLhfCKleSkQOpj0wL7Y8MenkzXK3omnWHorKWg/wCUtifE1fIqo9qAE+IwvMjpgvRpaUAiN7dBy59MCeN8cyuVehqDOtVdSusACY0m8yviHiG0nzwM4LmK9d6jUqiGkjaNLEsGcXJQiIWCDN5n5Ys13+D1vF4uN+wzxAExBHnPMdMVhUetV11BPdqEEXn7xa3MAQR7HoMa5mqVj4amfWWHkNWI7Y1VGKhLAbqbebCL7np8sA6mfqVWOimBHPrE8vJR6fy6YGy2R7yqxam2g79OpkC9iN7e3ODhRyFXMuwFRdIuGNoJIuDa3TDLw/hFAuaZXXIWCG3B5bXtfGjcLLmUqDXygCzBWBgwI6E36Yj7SUioFSgWXWBJAgm9j5c8K3HYNFXiXH6LLTenXWiwJIKsuqSYEG/mNwfzwx0Oy/dVEOiohpFiGRlAQEmLDSCJsPhJBBuRGKfC6tKpUWiW71KjwuoaSwDEzb4oEXuDPITOL1PhNBVZAZJ06SGuJFpk7WO/vg1NIEZRf0dJoZrK0VK0yqBVAVFCqAB0AGwxJkeNqg1BlFrWnfFbK8UqBQ5IY9GRgp67gG3XpgB21qPVCmpSpvFtMGbgNJVRN9oibcoxONPRSt2LHaTiGZqFae6IUsWbvGt4pU+HoMqekzgxWoJV/hMiPODHW4w0r2tzJ0go8YUqxDX8J1X5g8/LGnDOIV6mY1NTIW3QAqY9SB7TvjKoiqeisrOxljsLSxH+0T54Bcd4nnVr1qdJRCppqswJVhoJjQfhUEAz6kjywf4dmKNQoVdQI3+Gxm3L+nIzgFPh9JqzHU7i5LQSJgf4Qb+S4Fq2Ao2X+z/ABWjXLJnKaVQzErUiNQPwFCJMGJ6iwPOOsU8xn6mYzFWmukCNJMICTqUSFbUfEALXJj4Y2x0PhXCWqkEPSuLH95IPMmBcEm1j54q5Pi+VqAtqhFuLHVMj7wB5g/MHBFWtGbJKKtlniVfNVqhpOoFMDUpQqN/vHUXJ39PXBrJdlF0E0qrLzKsYnfkBEeWHLh3CXqJ3lSqI3Y3M2G2kCbx6YJ1suyKFR9MEkkjUR+GOahFMOVtGNn+G1qbMCCZ2AO4/MfXbFLJoFqFfEfmL3/ADx0HiVIuqhEv0J2E7A9RgjkuE0ihKvTEiN7W9r7YlyUGaRy1EqJSQDSNKiSTEanOwN4E88BFAB8Rb8wfT+WFHO0CglXqEEAbA+nPzxOzV6bVPCBqJtDHa/mLe3ti0eU0+jLqNvE1h7p3EiD+u/zxFWTSp1CBYNIJ5iY9D+fpirm6rFZYTIOkNFm9MU83mdQk30eW/PFkISSMuV2xdybVCJfUdNifITPLpgLxrjKoWSmAzNa5JsBN4O/ygfPniLMZkXMD5z7bD2OFw5UMp1HWzfEZJ28t/rhfK3J0LFKitFWvmH1vM2C/ePpiwm0b8+n88SZnIlalxzEdOV+X+cHuEdlqlfcFBzIFz/IYmtOzDl5YqV7NW8PmP8APCrm+4QanZhA5CJ/LD5w/wCzW6KezF59B8sOlH7PkX4gT7CfzGGoYJrs5ZThY3yE1qNRFBDBzBAJIiRJgwCL9Y6Y3TJsguCp5g8vnh6qcIy7GD3aAnp4Rj1OCZd/8MR5aMQfgByY/Bw7OI4l2OqpkGk+OeJDHSPFE9Ii+2LuaoBKahQy1KYFJVpBgJEi3MHoSOm2CiZZf4l26a4+pGInzVQJI8sKMYT0w3Q3JH3RZfhmWJi0gdZ1t7Y1bJFqjsrMp1SEYi7bgcyOYvHXFnI1Kqf4VRS1piQJmBytsbdfbHmU4LRRtVVVBO0kKDHPnPn7Yq17iXEqe6GHJ8JJLOrSqSFi5aNyBa3L1jBHhVCqYaqxGohAFuINQbEqAdO3OwBxQznZrwuqMxBaWkAjSLEDUfQfWcKlNM2mFBIkXItN4te3ywOKHt6OSqcXzFGQhRXAkq0Kbgz4jIFyZ2A54B5rPVKuq5IuJECbdACd/PE3F6tWoZekiJ1LFTJMQQQeYFhji3A+B1sjlqtZ6oJpIXWmpMa2LLJuBCkgnlP05Y0jBSdLuZZZuN7IccPW2RqahAkiDG8k+VgRjOrXqvUqxqYlm0rHxSb7fDB2lxJGy1Lv2GhlJYBYaZt9w/y6YD8JzVB8yFzDMQkLpV7spcqonYGBB3i8HEJxtmiXj5HcqdAFlE8tM+mwjHJePVMw7JuqtCkSQhBBJIULqvpEiAT8xjgWbyOZr06lPM99T+8dSFWJGqJgBhMDlzvfEdYFKtVFMxHiJOmIvBN+n+fXEME5XJG0rqivX4bVRdTqQvMnb5m0/KMV6oV2ABIJ+XOce5SpVAJRiuoaShIuPcf5Y8WkoF2N/JR/LBWO90LKaTpnS9P4bgN+U2/K+N8oqgkjqRYdZ3P0xJkqQKaQ06ybxBiduhP8AjgnkaCBflfe02A3xOK1Y7ZFV4dmVEPqBsF94AmZ88V+0DKFBMkqwJBN9JI/R7fsY6dXaflBkdB/LCjxrKNOmFBJjqP19cbcUqiiqj2hQpMjQHVyHBFoJE7g8umBObqEKZKxI2CgqfqPmMWK1MrKhvCwJHQg7EY9zubVaLjxXEEAA7HoNhzw3HsQx1sHOzzMEajPYqCbDl/Pk38sBuE8VWs1V1MFVKrqncEr/AHMb+sTh0FRamklRtcRtF+sTB5cuWFPgfA+9q1KrGApAUk7kSxA6XKz6emOMk+hrxybJtWp0bqBPXzH0xvQ43mMuAFqMY+6fjTrYg/lhZXMBa5pjaCQfIiTv7j88bqxpWFWYPXzMflv88VZyJ4dIeaXbxNfxHV/uf1wQ4P8AaHVpJoZiNBIEqLSDqFtu9sL+Z4fXpm06DaRHpYiT9MOHAOzOVqUVVqbEkSRqIEHmNj+WMriil7hNqq2YpVq5hj3mpaoNmUxNhJBM2E/IjG/FuLLXP7uFVD92PMwbi4tzbDIezrJhlPdN4W0wSCLGQR4hb12tGF/O9gqVJ9WVKofxACGBJnkYi20b8z0jCX1RflxNPaA3e9r6VLaYCyQwi0GBHrihmO0GoijlJIBW0C+oEAHYRz5XxRz3YCtAqUG7wuBqm0E2IE779N8e5bsFlqQT9nqIPiYK3iO3K99sem0N85xtJq+5yW0h4qzwzm2M0kdI3kixaVvvvsPs9bAtxNxJUXQEOlCbhQI2iJMGQJmMO1PglNbBT9QB+WFuvwSiZBX2n9McebLc6OuGGEdpBluK1lFgSR1NjYk72F9th0GCmX4rXXxAk7gjf0gzI8scLGRdL6WIIHRSY/L9cc+qNXI+7P1H88J41rsSySlbZ0zJ9rGSBqPQgXI6enpzwfy/a1CNL3UqAP8AxlhzuLDyOFihlFqiQJBI5f39t8VeIcAqKSQqfQwJH0wbnj7I0sUH2KW0c74dxVKmhmEyrRpA5EcwVIiJkzpMc7kiFKoxoqASSqQWIIGqTFttsL2W4hBIpzPqRiXi3Ds3VqkVEUDqumdo52n+WMN1OyxYpFXPdq6VEhKqhwOYQEMPMEbbdb+YwPXiRcXfUOrAFSeuvbpYHCVR4EWqgtVkLDkwBUdRF4PzwQznZOsVJJBPpGJTxT3KU5S0BPZ3tg2XrE6fCbjSR5DlPSekYA9pM3WPetSFwBpKieRHlfkPfEPY7hbVqtepVKFQgEW3PXke/S+LrZLJq5LSN4C1Z68p29MRxSurZTLJJaRb7J8ZQV0YFfFB0k3FpFge/M3j5XwP4p2ueqCGRQCBBFz+8G1jE9DjDshlFpOKaLAYBbCOfqfOSL9ZGLXG6vhJttPTHPjCTSTO2cUovbKPZniZNQoxEE/Mv9P+d8OeS4xRWfEdx1i1sIfH6VJwAoJEyRfUSdwBO/qcbs1MHxAGByPPnPTGTJjcuxeGakiOvxKlQ/BIkkSR63MWF9+mLy5kDxBjJ/L9ZwE4bxPLz4qrKBMHxL8+m+DRylB5dkLWmQJBG5EW+mOeUFJFx5E3RY/ai2nWx9CdPhHQn3sJn0nD/AFCVblm3vEgN8jEjzHkMB+JZJqNWVGrWPqZt+k8jirneIt3oRdMReR4rQB0uT5DyGFwwNb7LxypJUylWbW0Cx6gbGI5yLXxe4FnrFKi6tJIBjqbgWuPIHFKhWqRpqFmVlvqUMrAg7ggj+/lgVxnNMlUKo0m0mNRAi+97HkPW2HPHb0RjKUXZbbiZemqfCBuqx8vn1HvgRVynhLiRyDWHpsPXl1wy8G45TqqqtMLCiGMRAtMHkN8L/GajsMwIBXkL+/LnjJKMotS7NoNxirbKhbJ6hNMSdOxPzBmw/l+2N6lhPpInn0vbHTqxVwVpMTYajcj5+3LC/ncqpllm+ky49JHO3mbDr64VxVFJrci+JJNHPOPZ5VKFuoYk+qqQPqMCKuXRCIJJPRVgD3tOH/jFKFgbgGwAm36csPHZXhNJqJqupJJOlbkLBsJO8mR7nrjZyRWKGr2Za4JxFqFUlSCTpJHLpYX6R6gY28VodXOCPFM8J0kMbHUfYQsHlPnjzjqVWChW1MLmT8PqenrihlKbObAm17A39T+uHSVJAlJq8gBxOpVi4KDa8+xJv7gDEWY4DRqgCpRRxMQyTbqCbj5YJ5OmpJIJIBBmOY6Hz9MbUsqhiWJE7k7D0+mHjKKVEJ45NupA/E+xeUcl8tC0VJnSoVQbxAkC/7Mb8c4FSWoKNMaNK6RItEbHa9sIGfzJTw0mI67c/nhuoVqjqEk7CAbSBaTbkPIe+LQyPWiLyT2hP4rwYu2hlYn+rn7wfXGnAcpNJiJ8SMp9iPP3t74Z62SVLRB9DtfFfKVWpuzKJUnqd7euIShFdIvGUmuTsLVaahjTLJqCsTBK6iCJ3n7uJSntFv3jDqrKRHmNNNfeBi1xzheZqMxUKFnwnWZEC9x9Tggch3RRu8oHJiRAvbSCdh5k42UbMryRlsYcjSAVLCb8z064aOB5DI0lVhRXWCpOsBrX5dR19scvr5nJsoaOYk7C5EmDaIjzHyOJqucrkMr1gNJDIAdJBiZJBg9Y+fliFjjNWi8ZSdWx2L9oy6VqhLahpNSwuABEXHMgXHmOfS8vDVzFMrT1qfFqBmZNiJQExfbFUVmCM7MfE5JBuBFhGq3oNxHLBvh/FKNNkqMgLgEJMkxqUGCJFwACfXFm6VGTw3eiLiuXKkpR8ahjIFhMi2wmLeYxJkqSiWKgXuQRb/MHb6Y9zeY76q1SFmq7M1ySSTudyfLfAjNUVDEiRO4i3P9NsEoJCcpPcqnivxIa3lM6TuJIBm3v5Y95wfYBnmqqhWVRcsJuJnzIg3iMV+MZPumAExMx+vmcVMiCMxXQHVpJjqTAJkQdwBItbmMJko9FoSlopJJUCRPKTba/p+WG3sFkv+i0FaSBUA8RiYUkXO0C2FvheRpZvM06SaUlqqoVBMLoiVt9wYHzNjhr7P0xTpBFAVVFgB09bm5k3JJJuThYuiLyNWxHxLhNGqpFSmrg7htx0MgzHlBwE4j9n+UqAn9nAP3QdP+UstuWGxHIjF2onr/k4HcXpk2kkDqPn54pF7ByxRl7K+S7C5emg7liTZfFIAPzM298V8r2Pnxhh5f6fjAviWZqRZGk+kY3oUmYjR84/PB8fE7MXNmhEzwpCUcBhF9uQvEflzP6Yq8Q7PVEIVkMg8x4T+S3GOl5nJVosoHqPXGmXyhIBZb+o3HqQcWeFbJMkZfhHLk91VFxbWAGgjqB4rjnz8z54P8OwcO1KipJBYCZE3U74f3ywpNOBwj38gP9Q/rhJ7T8MZUMiJmTfkCMGlkiukVjhmujsOa4mxpVHp+GRJSb6e7MeoNthuMV6OecKQrFlG1tJHvO+KmT4OilA8JZQ7ySB8OkiWI6k8sP3B+zVb9iq1dSuVBKsCwBIBHiUiJHO+wjfCyaVBRi3ZiN8OaoBMioPQ8sf0Ec+7OlYCCCARIjlb8IiSY9D0k3uV6VCiqIiqiiAFUAAeQAxOpAMSsE7gbA+8b4W+LhHptGlyPYbHn1jANSbTMGRSjuLMJ5L2yos4r1AMiGq0+NNypbWIgkxv5bGGD7I8oTxJq9OqJWPK27CxBIBttbpGE7gGZqPW1ub6SoI6bknAaql+W1ze3LfGWTNrqS0HgxKKs6s7U1VCQSV1ACBbzjcW/TC1mWrGqUqUwGUiNIgqLcySSQZkweWMuGtXY6lCj0LRH++N6bswJuYHLyx6kiknG5Hhke2P1k4ky+SiIkfOTiUsSNsAKVmW6qQfcQT+WNG1jYjb3GMp0QC3TpjnlKiswJEjkpnYknx5XxZqPtjOjxYbwAeVuWKWfDnwIJ2iPl7/ywr5nOLqBYiJMzuSNp+c4y4vmKiAE6W6iR8JO+18Vo8wPJGVE9GbI5Ij9wJ5giBb0O0Y9bJVagOlBzIFxJ+UT6Yqftas8EG0+Qn8wRiOlxB5BEaTsJt9B+ePWMYo0fI6s2ytVqY6kWi3wjTa3K2Erinb2ilP90oBVuWkfCBe1orNiWkGwIjY7T9Ma5TN6mUMQ0DYSAfp0+ccsaXMWC7sT7m/wCeDjcdiHJbYn4D9sVWrVW0FLr4Rbc6Z0gTftlPh/hn7SVy4pbUmOk9LG3La+LWZ4lCDwiR8R2E8p8hjqWVFNTqMiYJJLRvtsPX0OOGVJPYGLG0JqdmoClTbWbhiNLahyJPhHLofbliDPV6NMF7KSGM6bM2pxIG/OepwJzPEaQfWrq5sV1KQdyQN4MRbHuWzbrJGsXuBqQkc5ubcMrxb3GxGJMkLfPU9qUBJMz4gdpB/L/AIxTrZVTJIEW5TqJnywRqvJAgkE7m0WA5WxuWKxFh05D17XwvKHYN0tguujQCpudyR8zHWcUqPB6MHuUkm4AYbRykXgj8uWBucqVFCkuXMWBJ+VsfZiqzn4mHobT+ZnHNKKNFGXZRq8Lj7p9CDbFTL8JZtJKjTewicMw1giJm/LfrG2La0yCdJBHWNr/AEuMFKNFlIYk+p5E+mMXNsq445IOcOqq2mSNtxbCxi3w3hgcqWEWgRtznlhp4F2ZOYJpqpRVBJ1MsqO5G3PlGOnbLfJpFpLKcJoMVYqBAPiJBtysbeVgDzxMuXVQGAJJnqbncn9cDavEqFKTUdQOkSb+Yj6c8fZXLNOkFQAJIE/TyjpicZ72JyWqRQ4g1JSdJ1TqkCw3O2/LBLJHLCmpFOSYgH4bEWkEhpGp7TqEb228sL2exqtXGgKugHlBBPoCI+ZOGjKIXKxGsCzgMIuJJE9R8seMY7K9k+g+UQFHTf/ADvOJupbGxg1dFC0EVaJRWCh9RUqGiLqJIm2w+YxQ7UZWslVkS+kgkNAkbW1EQIMgQdgAZvfCrnKeqkKseoMC3oDzxHmsm8M7xMspk8ySDa5+/a0g2wyST0GhJxdmVxauKh0kAC/jKkQRJi5kiJ/X1w2cI4M5p6X+OLEQOYEiBHURa1jyxR4hwzMpP7wXFiDIIgH4QSDE8hjT9jqnWEPMlhuOZnc+98P8AHZHIrqjq+YyVFnqPTqAMiMW0gxqWf/kzuJsBHUYCZnMN+0UCoA7x7i0GRHmMOmUoFQLMgALcF43IHiA8iCfXGnEK1H97LFZQiQSoAMm2w6C25Nt8S57Y2pcqkz0M1mzSoSFkMOhiTJsLEWHriGhXUuDEX3Ii4j0v1xJQqI2swLciDqHy9MXcxlaKoZpgsBcKxDe+1/cDFrjdoS5dGG3IpIgkbgiDv5+YxQzOZ0m0FZ3gDnjrGSZQpYXMEnWLeq22gkA+0/XAzMZsEanNucSCdjAuetpHywKb7IyStbKdRiCB3ZAkEj+VvljHN8UetUMCOkkm3la8bn8uuBO8NMtYbCQLG/W31x7TqVVA0tA3EqLz75c8GPHN8Cbdl+q5PiibHe8jfGj5Vabj7swSD7GCR7ifLGGrRVqB8TGbHQJEx+XLpiOtUWAJv1B82nHnVNKzWMk7NqNGBIkzJi8+mNRmkBpXpHiGgE3MxHSRjatR9YZtwDE/O/K/vgRxDMVqSqKKlwZUxYlbz0uR6HBjHYHCUpIsHjDJ4VPibxt5HlhjyjU3QCpTJIiRpIJ6DciDP8AJVB1XA8VQSK8t10iOXhBM9MXqHEqNV/28JJ0gAjUCJnnFp5HENBjBGqvXgctFPNZXi1MVKeaCKpJjUbkIekG15I5Aesct4jlcqzMtSm5gBirxJOkiRsRIsRFz5Y6VxPie7SBICsJ6GFPM9Rz3wpcVrUXBRmPiHxDRpaBF9vr88PGaV0Kycl7Gvifar90YqJRVjqIJiApIPi3mAJJHOcJOf4LUzLlmqoJBk+E3HpMb+mGLg/YyvnFZqCVGVJBqU4ZBItqidJ5+E49w2f4rSR2pcLk1FiNSnfqR/TFvJlj8fYJqK2xH2f4EKRHePrA3tF5j4haPLGHbbiVZchXp01FRzTNOoXuwkjSGJaSAAQeYABtG2HS/xemPvf+VH6kYozxpWXUCuBuLYqksrsb4r3XY94h2TzQzHiVlsGJZg1wDEAxxfMUqAqAD94t7gESD9cfZihhGtxupANrC03PL8RxajxehVuqkjqpAB9p2OBtBUx07GHT4M9oqvHqbE2VgORAiQLH8h+WAHEswHDxBuLcouNv7xWfCajsroBrtJG3TlfrygC+CPfVKTMCqGCJHiMcoy7RBu1UqFHp07AkACSYxs1GULJiQJAmQY6/s2/LEshkiAUaRFiADtaTI3Fw3PDE9ClUBN2FxEj3+7E+XbF3OsVVy6iXVFZbypUieTCxPkYHkMBM9w0MQ46H4gPA35i8HBCtxOqJBJIIF/Q7C8WIEHpiSOW7M0oe2Bme4bTNPW1RKlMsFDE8gWEXIEibbfLEOW4VTkaqFCbgW2HWCOn+8Luc4mhVdcnbwCSZBO/IxPLbH3G89SpJUQlZOkuJFiI1E7G0g7WF8PFQSuQ+Rz9g72q4a2TzrU6zGbkhCCCLaqfMTYCLSCJ2OA+a4pUW2okyJBIi0RHPf9cCOMcaqZhiXbdyCxAHPkP5e+MxeOC7skFZPbJuI8c7vSrEFCbE8pHpMSR7jDFkO3aglazlQdxAMdLAjfp6TgoOGuQQTsduf6z+WNq1OmO8ZrDy0k3A5E88Mnh1IsssujQtWq16mhXLV4t0Gi4v8pgeswMLvEqHhNVCA3M7bxNsDK1GKVIHiqSFBMJBIuR4vN7W2twxHxCqwBYNNpMczG2L+N2hJ3tM2N7/AB0BqM5DGwIgXEeZgY0ytYBRJtuZjl5m3LHOqVfWbkCTe8n3j/fAi3EKCL4GBB5E3n5HHlySo0eNqhb4vxqmHKU3B82Un/cBiMcVzSVOUGDH+oWt1/Xb1xPxbNUiZCoqr+7pIG/hPiPtjzJcUB0hpAA0jmJkTaBe/thoua6JfDRj4dxtWqotStpPILqIE7STtfnznFb7S8w+YQl6UJpbS5JIuPCpAIAI3ITEZ3IpSoIp9NTQCBF/Xtf1wPzXFaaatKBCLagJsCIk352gbzHnjPPLKMaRWGCcnYg4rXWqQVkiAD8/5YEsAOYPry/wAzgbXzrBbvKnuJJkRc+VpxbXMIEYqSeRkn3OMc81OzSMFHoQVBUgSLzH1F/lH0xJSyoYFiPl1/QcscY4pxqJUgGbX5cxAk/rgRmu0VNYMyCTYSSepNr4sMXJxoZTaOz5riNGivf1yNKksJ31sAI6mBFvbBHs5nMnSqvRrJOuNJdWkRBEgiZFxb13xRzPZsVFRlYuuoawbiRuR174y7OdnFoUalZXLkPIEALY77z8rz/NjmpJW9F/iyKNHQeG8GFasXegHYMoIZYUAAwJtymJ+eLtHIFXWqWACkKCBJHhsLkzHpFz5YGdmM6o0VF1AqSd5KyJGk3InmY5bY6Lm2Wm7U9VgxiOXI7f5ydaWzm1cpbGrKFBpjSDyvzifcnCHmuHllmGMchM9LGPlgpxTiipqJIkc7bj3tOEdczC3A2Fr8vM4rLJKW2TjjjHsPvZrsypzTByQCzFSJ0kGJAK8jBGmeRJtfHLMvQXTCIxK8iNUnrJLXtiXjVRahKqwN9uRsTHyjATM5gtbv5c7zF5jqMd3jjNNGOUnY15DHSA6TqkGYWQI9SR7T0xFWqs8EBQfLr5D8vW2KVXLyS6ncRqHj5WPSQehwNq52YETfkCPl/mca4YkjJKSVMn1l30KwFhJuNj/rB5R1wGp1FRWLAkm86m38/bGuZzeqPE14nmD8R6/wCYxjTruq6pJsL+fw/r8seGUpJ6C4kVtFnJ8a1i5Mki9hHvgpmOMuiBCCW6g84O/kcAMxmJkxEevM+ZxQzOYCmLmQLfp5/3OPaONs1nJp2OgcB4tVNXSbpbdWBMqQN9Ppt5Y6VTrq6BgQV5z/nx0jHFsrxmlDIYFlE3+WCmX4vScC0gnnnGBnkx2zXHNPqZadSoAo6aSItcjnnF/zBx7wzN0nUGmSRyJFj5Yp1K0MSTcedpxQbN6SZH93GixxfQfJxeiROqj9MXMrn66ggtIB3A/TFdqiC0xt7YzTNNxqHPzxWcItBoyeTMr9os1TB1Kgne3K++KFPj1ShQKqBaLlgT6kgjFKlnmpiVAc9BjWrXd2lj8gMVhlS7I/JK+y7xHtg7gpERcGT0G4I/M4CZzjlV4JqEmQeUSBt19sUEiD5nHhEcv5YthijHoHLLJ9mnh3EVqhVEgCZuORPIdSR7Yf+H8SRENOnrfY6VsNuY5eu+FrJthfQf8AiBH0xHwXiDUq+pNLKZFwIJkyJvPl7c8PHJ0ZyxqiXjvaCpXzGXpVCAlJKgRlIm7XBmZkDbbqMR5jO12bXEFjJII23MkkmfQn1OC3FOJd/XzFSP3lLWDYhWQ2PQ6Z+uM+AVK7VKlRbEnSNQIsAZH+o+gxPJFvVmkMK2h/4dxA0SRJDqD8IFjt1Mj2mZx42bA3WQAOY+/+v54rcCUNmq7W5nb0kH+vywV4i5kAE7n8hj0oSdROSeNWdH4fxVcrRKHw64sIkMQBMH32OHXhmbppuY15giCOuFWlXpUqCMxIFxAibiZ2v8AIcjgj2e4kqaWAkHoRyHPp0+mBoUorZHVbdEXGck67BQJBU3g8rfz9MMq5pGFiNQ89r7Y5/2oYfvFdF0grExsJ2jY7HngF3hpuyFrMYg2BYkTELMzyIMc7mceQ8PBOLlGz0e1dMeSuT1kegO/0HPDJkq5IqKNIi43AE7Hz5G/rOKPBa5oVlb8QIPtH1gflhnzK6kMbq3iXmD97DcD/SYxoXQk07O+9jFbMZMJV0k6dSx4ZAiCJBMzaxHXzwb4zxV0EqBpUiCDpB25gTvHPHG+w/FgrVHqMFBUBSRvBmeZ8/7w3cS7RGpJETa5nqTPxDyrfEbJKMbmqEXKS0dQ4NxijmNlMkxqAG4E35c8A+L5t6UaVVm5k7CGAP15YVcsGpBqoJMrIaSNzqMA/SPSZ3w0ce40pRB/fppqD4ZHKbknrb4bG3PEZ4Y2NS6LxzSSVmVnuKVJJCsJMExJMCSSJN/bAYdqmUNKmX07E1DAnSSI9Y5C3yxz3jWelyzsoGkwLiJAveN5+WAtPMsxM62AOxOI4cMYlHkk2dlzOdRk0s5DaY1SLJPOT9TjRK9QaqbsIaIiR5HkfMR09cJmXz7uygg6oHQ3uZHInGIzKbkWk7wNJJHO/MxitcMXZM1Bqtg0+0sCRbWOv0GJqlRdBLBkAjfTe3I3nHns8NeWqk+oFjAG3Pn5eVuWNczxBmYqrAe0m5968bE4V4Xdg5EF9r+A6IqkNrqEi5MWIO5mCLekHrhO7RdpqdIuiVtOhiAAHAadJ/Cw0i+03mLDAvKdoK1SoBTqFVItGm0kHbpJPO98TcJ7P1a2ZSmzMwJJYaQoC7ySSJNhpvM3OEmm9dGnHFRWzMnEuMVq7aq7knoL/ACi+2ITWfQxMjqJPM+mBrZl2NLQV0nwlWgN5cjbmdueMsBcEkmT8P5/PHRxpbMWyOTOMBajktEk3mRuRfE5qKCDqJPlqifS+KCVmjZSRI3G/ToemI61VmESeQv1H0k/TAHcKJGpxqzDxFoXrEEGbkbA+/KcUM9UksqRJJA5C3yO+C1ShUWJBkC4I6bCPfCz2jqvRVH7sHXpFwbbxb4htGJJ+iXY3IOXT7k4DdpqWb0/u1cHmGvpZf5g/QffC7kcqlVWKyxG0kzfzJ3gD5e+D2fqrVQBL6pHiCm4gDnfz53wnTsLJ1OLO/8AZHiqgFCNIBBO4FpBkTyJPQXHLHQaHEwqgpqkQDqECOhHkPTHl+4fxNaKCqNJDzKkyBM3NiZ3gReRsBiWHOuTpSmoMJAVonz1aTPlG+K/Cjq3qPr5p0sSCPWRtv1kxjTM1EIF7fA3lHO++CX2iyFRFLhR3rJp1wQpaCCAQbmb/IfPC1X4YRUK1UapCiRuBsAeu98JkxRVPcB4/myjsQAWGmGiRBIE/F8yMLGVqaFJLa7ATqEdPO/oBgVxFqMhFVWE7/EOhB6emMqlYiRMkbjc7C8deUTqOYhkVdG2p1UbkECJO0R5HGivxJc0YuCCNJtG3MgkQD7x7YV8/xpQRIYNsCbA+vl5R1G8csMnBOA1+IVCqWQAAsxPxHbSBuSbdBbrikckJdMxyyShtozQzFApBbSTKhSp5k3m3r/AOML3FcxVqgqzHUbFjYX6fKBgZXdxTetT1CJsJU9b8+nrjoGT7P0qTKXVijBxqlCTEAR9TE32nFnqhR5RFzRmDyJRKSo2lIECFmSJgAHfzn0w29lcoziqwB7x4RbAoNjcEaROw3t54nyXAg5pjSVSQCxWZBMRG8T+vLBjLUzRUJRRQQPCTJJMmBqJIsR+eKT6JOLkFtXm7gCBEkC/obnp+eOecW4mQxWqpFxqFxa3Py9/YHHWMy4UljZBCmLTYgWjf5fTFqmpJmMTfmLkfT88VUooOUpO2csp8WQ+Bz4hs2nrA8P5YW+I8VVJvFovHOb252xb7RZbU5ICzEiCBoF9wfl+XPCs+QJIWL8h8R9PbHThhSjqY554tkWdqMhiTBBvYwBPnf8sV6Wfzba2VQdIOwi0EjHmbqkMFbQ6jcGRqjkY8r4B1c3TVNKuxiDpUEDkfvIHkNpkYtKmQ+Nvo6HlMypC65MkgxcxExsNvni5mc6keBVBJMhRv1wqZD9pBi9jIi0f6Y6e4FT0wiXPqY9RjJk2KJqN7NUe19dRHiFrEgn0IFv5YBZXigI1lQZ53ucU8vVhyZYlTyMT1P7P5YKZSmoMkwSNjsfl+uMuSTNVjjGPQxcaqIK1MVasb1OXLbeoxVq8Sp1BpgBT1uL+87/AC22wT4zmCgL7mD1vc2A+oxQ4pUrVD3VJoABBuJIOx+fLGKbbsiMVFWyhxfirPIpI6+h+noMV8nWS5BOlpMzuCCBt75YrUctXbVY6wGmANMGNwJIk7RuAPfF7hOUWlJqMu5kk9f89sHPIkqJQxNuzpmQAXQCWABBIBEXG/ocHsr2OKq5bOuqvqMEhCQSxFyAZ2BuBbYcFOzGXNQMUKpqnoN4M/Xri5la7KiCtQuDoJMmJmTtEG3XEMsJLRrHJF7oE9rOD1FqU6rQxZCB4bW+6ARf2kXPpi52T7Y0+7Cqqo3eBFqE62JEBgb6REEEiCbqBiHtNkquYpV2koxQsFVbCFkAeJiTAtMn0OAHBexdIV9OZdqiuqlwIHeSxG0MxEjfmQNsFl3VCK5HY6nYijqmR9J5WiJtfHnFstTEiDFxuOXuORwBrU8xSpBqVenR0ghFAcADUTJYBrfC9/fB7h2fpNkO8dFLGQlN0PxXBG8kA+VgD8wOcUhOMnYso24tL/AJl/Vvw4xdpVIhRLHSBIiR16b4Bca4iq5gBSGVfvLAGkbMJJnbkD6Y84ZxOmqqqUxBsGUmINhdep564vKnWgfDKKp2JnWrK2oMCb3M9dxjdaihRJkgGDIiTGrpe9hNsdJ4bk8uFBdT/ALW1G/O/T3jCtQ4fShXECzfEQSb7zyv/ADxNxTVk1Fpv6jFkuHrEEqCZMEaQNgYB9sEO0dfONQABBSp4hIhSIEBYMxqM257bYIMr3rBqig3MfD5dPffBKtxIAaExLDnB56j/AHwKSb6ZRyXqirmuHuKtJtJ+7MAiCRKmZ8otixi1wjIU6VB6lMEIBqADEG+kHSCLkXmPQ4M1stUrU1C1CgSdULBkRJIHpfAoP4AAAJAg8rXGJRmqRXJBSSZi4Xxiil6mYkAsq2B6gjckbj5c8CcvxFqhMqyhgSYMgSb8rGRhJpIiM7W1VVHiT4fIzJ9AfzGB1DiTGo0lSCIHi5KSbk2FxqF42/7TijCTfgBknOO5HiPFK6sWAsGlYJ1JEiBJJ6EER1xHku2iqAhQbkgNBiQRpudvCY5XGBXDc11mOh6ypHv1HlgTxd0KM1RdQJncJqiSBME+YFsHCL3s0jkjdOTOg8L7V0XBDMQV0+EyQJ5m+xt0g+uHXLcbR1DaibkSNv746f9nXDWrZcM9LvoVtJDHSsTtfSTGkHc/QjHX/+HPByrqxpliNNOCRE8jYCeVj1xHLH7uykIPZy3sJ2uzWUqMjMWQ7o5BtuN7giOZi8Y6dke1NDNirRzQD0XDArqpupAh0YeYBB2MDFLtD9m2Tpq/cVaijlUqMpbUOegAjUYsTjnXFux9fLEhiXRZlHDeGnTxLM2VTfyjaOMFGheSNyT0MH2bieWO0c9hVh1Oqe95iNiZBMGBcifLCzxniFGsVFJmU+IM7SANiCB0OxuLDb5HNVEkMRG/Tnt7bHF2hRJiWkHpA6egH5YpGA5dkDMUEqJpK38N5AkDaOgvPWdhjKpWqUqWhXJUQQCSog7XPnIuOe8WNqGlaKlge7Aj4J59emLeXzlMoKTxpOqYMknkkEcr9MY5RaaKxlG1RcoUm1akLAkm0AkmdQ6i/wB6Db8/TGeYBUkmQPCZjrI2B3OIBnqTVBSSmqdKiTpJkzIJ8hEYE/aOzCqCqWAAGkdQOVpG8Xw/x32NsoxaaZR4rVLVoVlIDrJLCJueoFz0v7RgT2fyDGqFYEsAZlpAJO5nqPa2KXEeIVFdkU6gCVHi2bUCsibXuIEzFzhtocWrQIr029AVUwD5jSSD5Y0gjJxjaNY8N4xmKCJSpVLCzMVVwgFr2UG2kSDqP6tjntTj+dpnVRiQ9IgQQ1gCJNtzI9RiKrjbFXHFaKdRuJiO7jbzJEDYmefLGNJvEpgasQIAm46G4/TGWGMZU9e/w0b8SXJV/n9BNxHiznP1MxqHhQECoZClwGGoWEGIPLlMHAet2xphiqlZMCIXWDOqwPNh54V0q0VJqOSDJlWgAfn9MasxIMxJFuv5n8sV+OKWjLkyqTpn3vDl0TlNQJJKSNQ3B3B6b9RfEmVdWRoAIn4lC2AI8vlylb4E8T44K4ChSSfCGIibXvAJbz2xFls+lR9C6rN92JiSDaI8gRyMHniy+GWLMSjNkqlRNWwJECOu5PPywO4nxEKULPpEm5mxPMknYA+oxJnOJh2RVEAG1u43IE9QMVO0bJMldQ0+G6jpzF72nkRB5YEYxS0TSU7e2L1biJcyCQQbQRH/Ge+E2uxGoyTck2J5/wC4nBXiLk6RDAiw1c7dQMKGRqkEAmJkHwk2uZ3PrhPF2YTlFaRRzFYXHi8WxjyjfYCNxj3N12HxFpBAj+E+3IY2q5VGPiDEHpMzHQfPA2vXIPiMDneTEbbfjilGK+SilyNqfE38ICsLAciRE9P7xVPFHJJiYEjff0j87YjzOUkTp1BYBBHxAbxIHW3ni3k+Hq/3r/p8sXjCKpGc5yd2zfhmaqHxHQoKhSRsNieZ6Y6FkaxIBXSPM7A/j/LDPW4OA4Foa3mT+RxLVy+kLpI8sZ5RfQUeUFsF3oMSTvb2wyn5k7/AFxx/iqhawbU0L4iLgLM2B0yYJsRbrifjHaekFKBiCp0kBSxPlykfPCbmfEH0gtLMxkWBJHK8G9r8h7YEseS0S+aFuyW/Bsn3tB6K+LTqiSTuCdiNJH5YEZrKupVlcFbLYmY3E8rW3j3x5w7NK9IlSNLCY6hhYgizKQD8P5Hb8xwCtUqhDYFT5HpJ5j8sXjCxJ+5yHNFpjBqZIJh9NjsQLCeo/T3xa4fxuuulkqEifCRqiNoJ5RbcjCpTzJJgk25dI+XvgnlM27EFiMXkl0ZxSk7ZL2g7bJSKpWRarMzM9WSQhFoABBU6ZABO43g+Aqt2kqLTQNUgaWgWMhTFiQdunM4H9tqz5ZEoJUq1Kcy4Q+FWB1FQZgG+3K9xgLS4nJIJMC5mRcH1nfbFoYlZdjLLNyXpfj/gGvxyoGOqpYmZBJMeosT6e2L3YvNVc3nBWb4U0SfhBm3tBn8sJWUzdMmCJAvIhgZ2E8/LnGG7hOcFIVqzFkbxEKSZJgggi5gW5Hmce64ZPDQWOeqKvdFHtHxf8Ae6dkiFaZ2Fze8Dz+Uk9cLfBMxWC1ahIUjwqdRVmjwsT1F9omwjfDFT4Mci2ZekGorpCSWmSDJJMC4I357bYscLySUwylV0yQRpkAGCPiAuLf54I6GsVpMxjVeooYikyoymSpABBMyenrfGPiAVTJA2BPKG1jHl+mFPiHBFuXQaWubkgajuCOYN99sVquXNOoCHkj4v5YnjlohRi3oFO0+bquqEyCVHh0wRHIsYHXyxFwPjipVfxFSwIVRYAi3M/Px5FhGFjitJaJYzqG8wAST++OIVMyFSXYLJkX3P/AHfLHWMXGNmeeaUm/wBzrXZwn9odIj7oIjY22Hn0jHozdRS0FSAT8R8/TrgJ9nqaKp0eSEAoB1I0m/L72GfP8Z8QJdgTMgm3L164vGkC5sSgqzLJXJpuqiMDy5Xy2jA7jDhgFqEnS11B/wBQ2t/I4G8d4wBJQCTqudoGxkbgW3wA4xxoVVVNS2bwsQbzI5bfr0w3xx0oguUugjLxqq9FkRtIQfhBNxyiCR64q5JyQRF9RFhETEf5tjzLZNlMn0Pw3HoeWH7gXCqS0FedZe4JBuNjbpG9sHKai7I44PuXiVIfK1gSVRkWRqMkEaR14HrpNJoGSCuokiTFi1vLpjHPZVVUhSSZI2BvBkef64mplwVjmNhI574qkiMmtlriZLkgAEaVkyLkTe03I/L88VvEagCCPiPh8vLz6Y9zXEwpMKYmbKb+Uk+Xx+QgYT++W+wA+FiRfnO/wCp1e2IS5HthKWrMLtJk2HiggkxsJFp8+oxoiHUWJbSegsI8pHI++MhmaqlQdQtLBgTBNuvriWnxl1UADba97fln++OecJdkqDvbHWcriqXUDdtWkE6Rt5/mBgXTzDqxVSqjUJdCRAmdrgwZMW93OKWf4hqiNEGQ0R0J6CRfywOq1AyCATyJAgbzH8vfGfxxirZScntji3bStU1h11CxFr2HoJiN8aZJA0VQYkiARePi2H7w0cI4V+z0QGcF58QW9xpN7g+Wk4B9peKOlMRpUifFPPcj9N8TlCMIqWhMcsk3pHNM9nw9QoFJI5LqkaSPMN0NvXng5kcmiCEqFfGIHiEk7X3wt5Pg7VWCsSuokmNjJPw2v05bc9sEMhxRqDEaQ2ozynnF/hP1vjrh7OccrhvYXOM5BSAVBm5j3M9PP++A2fX97FjEeWIeKVBUISfCBBA5+G8nn1/WcAqua1GIUSB6bXxeEXFtnPKSaN8zTKgSBfYnqJHbGtKLFqfMLvfn08sak2ItM7/wAv7GNqYXS4bSTqMg73I6b4lNs0R7kCl5IA9MQVlMaI1b/e+Nmqwf3ZH+3K+N6VQHxOQy+VifbEbkrMoo84LxdaiOdKvJDaTvaBEiSfUYocQ4gzMEErbqrXKgbdbdSYweqZVXFiqgbEi/mOvqL4E8eqCmJW4k3MWjpffFkna9ijilJpM6dwDiTVkJZCqggG/OJnre3phz4f2my6ghyC23+9h5bVhh4Zm6bFtYY6j9k7jne8dRitxSiqOWKlbfhG8e+A8stlJwtI6fx/jVGkJAL9DM2IPpHrivlOMCqJDPBvECfLnhNr8Og/etqPOSfp/WMOD5VKZJEuQJvI38rT54njlkZTxpGrm+N1UfQrFi2x39byfpjwcYqF9bSQZtcc7nbHuYq04ZnJN+UAwT0H5YqJSI+6Se5Ek/1Y0fXBNk4xS7RqKzgkkH4tXxNHjIAHgHQC3niMNqiB4QQPETM+flg5wpjBjfkMBQNUEFfDMtEi9/qLnFl8u7akJIPKT/E8j0g3g9cQnF7KRkk+yinMI2hZMjlA29PlOOl8OoBFVIgwBMcx/P8AWcKfCcs/7SpT+8KqIE4ealBHl69Mf/Z')";}})();
// Replace fishing card with Sports fishing 2
(function(){var c=Array.from(document.querySelectorAll('.ils-card')).find(function(x){return x.querySelector('.ils-card-name')&&x.querySelector('.ils-card-name').textContent.trim()==='Fishing';});if(c){var d=c.querySelector('.ils-card-img');if(d)d.style.backgroundImage="url('data:image/jpeg;base64,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')";}})();
// Link Contact nav item to contact page
(function(){var c=document.querySelector('.nav-link--contact');if(c)c.href='//contact.html';})();
