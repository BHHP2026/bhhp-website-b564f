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
    // ─── CONTEXT-AWARE REPLACEMENT MAP ───
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
      ["Golf · Deep-Water Access · Equestrian · Lowcountry Elegance", "Golf · Deep-Water Access · Equestrian · Coastal Elegance"],
      ["GOLF · DEEP-WATER ACCESS · EQUESTRIAN · LOWCOUNTRY ELEGANCE", "GOLF · DEEP-WATER ACCESS · EQUESTRIAN · COASTAL ELEGANCE"],

      // === BODY COPY — SPECIFIC PHRASES ===
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

    // ─── WALK ALL TEXT NODES ───
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

    // ─── PATCH SCHEMA.ORG JSON-LD ───
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

    // ─── PATCH META TAGS & TITLE ───
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

    // ─── PATCH IMAGE ALT TEXT ───
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
