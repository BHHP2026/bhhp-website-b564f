/**
 * BHHP Discover Bluffton Widget
 * Cinematic video widget with editorial typography
 * Placed between blog-section (Articles Preview) and articles-section (Your Bluffton Home Search)
 *
 * Design: contained 1280px layout (not full-width), matching advsearch-section style
 * Video: bluffton-hero.mp4 from discover-bluffton.html hero
 * Typography: Resort Editorial style (Bodoni Moda italic + uppercase)
 */
(function () {
  'use strict';

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // Find insertion point: before articles-section
    var articlesSection = document.querySelector('.articles-section');
    if (!articlesSection) return;
    // Don't double-inject
    if (document.querySelector('.discover-bluffton-widget')) return;

    // Inject styles
    var style = document.createElement('style');
    style.textContent = '\
/* ─── Discover Bluffton Video Widget ─── */\n\
.discover-bluffton-widget {\n\
  padding: 80px 0;\n\
  background: #F5F0E8;\n\
}\n\
.discover-bluffton-container {\n\
  max-width: 1280px;\n\
  margin: 0 auto;\n\
  padding: 0 60px;\n\
}\n\
.discover-bluffton-card {\n\
  position: relative;\n\
  border-radius: 8px;\n\
  overflow: hidden;\n\
  min-height: 520px;\n\
  display: flex;\n\
  align-items: center;\n\
  justify-content: center;\n\
}\n\
\n\
/* ─── Video Background ─── */\n\
.discover-bluffton-video {\n\
  position: absolute;\n\
  inset: 0;\n\
  width: 100%;\n\
  height: 100%;\n\
  object-fit: cover;\n\
  z-index: 1;\n\
}\n\
.discover-bluffton-card::after {\n\
  content: "";\n\
  position: absolute;\n\
  inset: 0;\n\
  background: linear-gradient(\n\
    rgba(0, 0, 0, 0.1) 0%,\n\
    rgba(0, 0, 0, 0.25) 30%,\n\
    rgba(0, 0, 0, 0.5) 100%\n\
  );\n\
  z-index: 2;\n\
}\n\
\n\
/* ─── Content Overlay ─── */\n\
.discover-bluffton-content {\n\
  position: relative;\n\
  z-index: 3;\n\
  text-align: center;\n\
  padding: 60px 40px;\n\
}\n\
.dbw-eyebrow {\n\
  font-family: "Montserrat", sans-serif;\n\
  font-size: 11px;\n\
  letter-spacing: 3.5px;\n\
  text-transform: uppercase;\n\
  color: #6FBFB0;\n\
  margin-bottom: 24px;\n\
}\n\
.dbw-title-discover {\n\
  font-family: "Bodoni Moda", "Didot", serif;\n\
  font-style: italic;\n\
  font-weight: 400;\n\
  font-size: 36px;\n\
  color: rgba(255, 255, 255, 0.8);\n\
  margin: 0;\n\
  line-height: 1;\n\
}\n\
.dbw-title-bluffton {\n\
  font-family: "Bodoni Moda", "Didot", serif;\n\
  font-style: italic;\n\
  font-weight: 400;\n\
  font-size: 100px;\n\
  color: #FFFFFF;\n\
  margin: -8px 0 0 0;\n\
  line-height: 1;\n\
  letter-spacing: -2px;\n\
}\n\
.dbw-title-sc {\n\
  font-family: "Bodoni Moda", "Didot", serif;\n\
  font-weight: 400;\n\
  font-size: 48px;\n\
  color: #FFFFFF;\n\
  margin: 8px 0 0 0;\n\
  line-height: 1;\n\
  letter-spacing: 14px;\n\
  text-transform: uppercase;\n\
}\n\
.dbw-tagline {\n\
  font-family: "Montserrat", sans-serif;\n\
  font-size: 11px;\n\
  letter-spacing: 3px;\n\
  text-transform: uppercase;\n\
  color: rgba(255, 255, 255, 0.5);\n\
  margin-top: 32px;\n\
}\n\
.dbw-desc {\n\
  font-family: "Bodoni Moda", "Didot", serif;\n\
  font-style: italic;\n\
  font-size: 17px;\n\
  line-height: 1.7;\n\
  color: rgba(255, 255, 255, 0.7);\n\
  margin: 16px auto 0;\n\
  max-width: 540px;\n\
}\n\
.dbw-cta {\n\
  display: inline-block;\n\
  margin-top: 36px;\n\
  padding: 15px 44px;\n\
  border: 1px solid rgba(255, 255, 255, 0.35);\n\
  color: #FFFFFF;\n\
  font-family: "Montserrat", sans-serif;\n\
  font-size: 12px;\n\
  letter-spacing: 2.5px;\n\
  text-transform: uppercase;\n\
  text-decoration: none;\n\
  transition: all 0.3s ease;\n\
}\n\
.dbw-cta:hover {\n\
  background: #FFFFFF;\n\
  color: #0A0F1C;\n\
  border-color: #FFFFFF;\n\
}\n\
\n\
/* ─── Mobile Responsive ─── */\n\
@media (max-width: 900px) {\n\
  .discover-bluffton-container {\n\
    padding: 0 24px;\n\
  }\n\
  .discover-bluffton-card {\n\
    min-height: 420px;\n\
  }\n\
  .dbw-title-bluffton {\n\
    font-size: 64px;\n\
  }\n\
  .dbw-title-sc {\n\
    font-size: 32px;\n\
    letter-spacing: 8px;\n\
  }\n\
  .dbw-desc {\n\
    font-size: 15px;\n\
    max-width: 100%;\n\
  }\n\
}\n\
';

    // Build the widget
    var widget = document.createElement('section');
    widget.className = 'discover-bluffton-widget';
    widget.innerHTML = '\
<div class="discover-bluffton-container">\
  <div class="discover-bluffton-card">\
    <video class="discover-bluffton-video" autoplay muted loop playsinline>\
      <source src="bluffton-hero.mp4" type="video/mp4">\
    </video>\
    <div class="discover-bluffton-content">\
      <div class="dbw-eyebrow">Expand Your Search</div>\
      <p class="dbw-title-discover">discover</p>\
      <h2 class="dbw-title-bluffton">Bluffton</h2>\
      <p class="dbw-title-sc">South Carolina</p>\
      <div class="dbw-tagline">The Heart of the Carolina Sea Islands &middot; Best Hilton Head Properties</div>\
      <p class="dbw-desc">Art, history, world-class communities, and the May River &mdash; Bluffton is where the Carolina Sea Islands come alive.</p>\
      <a href="/discover-bluffton.html" class="dbw-cta">Discover Bluffton &rarr;</a>\
    </div>\
  </div>\
</div>';

    // Insert before articles-section
    articlesSection.parentNode.insertBefore(style, articlesSection);
    articlesSection.parentNode.insertBefore(widget, articlesSection);
  }
})();
