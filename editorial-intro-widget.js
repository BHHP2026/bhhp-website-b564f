/**
 * BHHP Editorial Intro Widget
 * Injects a "The Resort Editorial" hero section into the homepage
 * after the New Construction (newdev-section) and before blog-section.
 *
 * Design mirrors the advsearch-section (SERHANT video widget):
 * - Not full-width (max-width: 1280px, centered)
 * - Dark navy panel with text on left, hero image on right
 * - Same padding, typography, and visual language
 *
 * Image and copy sourced from /editorial/ page hero.
 */
(function () {
  'use strict';

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // Find insertion point: after newdev-section
    var newdev = document.querySelector('.newdev-section');
    if (!newdev) return;

    // Inject styles
    var style = document.createElement('style');
    style.textContent = '\
/* ─── Editorial Intro Widget ─── */\n\
.editorial-intro-section {\n\
  padding: 80px 0;\n\
  background: #F5F0E8;\n\
}\n\
.editorial-intro-inner {\n\
  max-width: 1280px;\n\
  margin: 0 auto;\n\
  padding: 0 60px;\n\
  display: flex;\n\
  border-radius: 8px;\n\
  overflow: hidden;\n\
  min-height: 560px;\n\
}\n\
\n\
/* ─── Left: Dark Panel with Text ─── */\n\
.editorial-intro-panel {\n\
  flex: 0 0 45%;\n\
  background: #0A0F1C;\n\
  padding: 72px 56px;\n\
  display: flex;\n\
  flex-direction: column;\n\
  justify-content: center;\n\
  position: relative;\n\
}\n\
.editorial-intro-panel::before {\n\
  content: "";\n\
  position: absolute;\n\
  top: 48px;\n\
  left: 56px;\n\
  width: 32px;\n\
  height: 2px;\n\
  background: #6FBFB0;\n\
}\n\
.editorial-intro-eyebrow {\n\
  font-family: "Montserrat", sans-serif;\n\
  font-size: 11px;\n\
  letter-spacing: 3px;\n\
  text-transform: uppercase;\n\
  color: #6FBFB0;\n\
  margin-bottom: 24px;\n\
  margin-top: 16px;\n\
}\n\
.editorial-intro-title-the {\n\
  font-family: "Bodoni Moda", "Didot", serif;\n\
  font-style: italic;\n\
  font-weight: 400;\n\
  font-size: 28px;\n\
  color: rgba(255,255,255,0.7);\n\
  margin: 0;\n\
  line-height: 1;\n\
}\n\
.editorial-intro-title-resort {\n\
  font-family: "Bodoni Moda", "Didot", serif;\n\
  font-style: italic;\n\
  font-weight: 400;\n\
  font-size: 72px;\n\
  color: #FFFFFF;\n\
  margin: -4px 0 0 0;\n\
  line-height: 1;\n\
  letter-spacing: -1px;\n\
}\n\
.editorial-intro-title-editorial {\n\
  font-family: "Bodoni Moda", "Didot", serif;\n\
  font-weight: 400;\n\
  font-size: 56px;\n\
  color: #FFFFFF;\n\
  margin: 4px 0 0 0;\n\
  line-height: 1;\n\
  letter-spacing: 8px;\n\
  text-transform: uppercase;\n\
}\n\
.editorial-intro-issue {\n\
  font-family: "Montserrat", sans-serif;\n\
  font-size: 11px;\n\
  letter-spacing: 3px;\n\
  text-transform: uppercase;\n\
  color: rgba(255,255,255,0.5);\n\
  margin-top: 28px;\n\
}\n\
.editorial-intro-desc {\n\
  font-family: "Bodoni Moda", "Didot", serif;\n\
  font-style: italic;\n\
  font-size: 16px;\n\
  line-height: 1.7;\n\
  color: rgba(255,255,255,0.65);\n\
  margin-top: 16px;\n\
  max-width: 360px;\n\
}\n\
.editorial-intro-cta {\n\
  display: inline-block;\n\
  margin-top: 32px;\n\
  padding: 14px 36px;\n\
  border: 1px solid rgba(255,255,255,0.3);\n\
  color: #FFFFFF;\n\
  font-family: "Montserrat", sans-serif;\n\
  font-size: 12px;\n\
  letter-spacing: 2.5px;\n\
  text-transform: uppercase;\n\
  text-decoration: none;\n\
  transition: all 0.3s ease;\n\
}\n\
.editorial-intro-cta:hover {\n\
  background: #FFFFFF;\n\
  color: #0A0F1C;\n\
  border-color: #FFFFFF;\n\
}\n\
\n\
/* ─── Right: Hero Image ─── */\n\
.editorial-intro-image {\n\
  flex: 1;\n\
  background: url("editorial/hero-editorial.webp") center center / cover no-repeat;\n\
  position: relative;\n\
  min-height: 560px;\n\
}\n\
.editorial-intro-image::after {\n\
  content: "";\n\
  position: absolute;\n\
  inset: 0;\n\
  background: linear-gradient(90deg, #0A0F1C 0%, transparent 15%);\n\
}\n\
\n\
/* ─── Mobile Responsive ─── */\n\
@media (max-width: 900px) {\n\
  .editorial-intro-inner {\n\
    flex-direction: column;\n\
    padding: 0 24px;\n\
  }\n\
  .editorial-intro-panel {\n\
    flex: none;\n\
    padding: 48px 32px;\n\
    text-align: center;\n\
    align-items: center;\n\
  }\n\
  .editorial-intro-panel::before {\n\
    left: 50%;\n\
    transform: translateX(-50%);\n\
  }\n\
  .editorial-intro-title-resort {\n\
    font-size: 52px;\n\
  }\n\
  .editorial-intro-title-editorial {\n\
    font-size: 38px;\n\
    letter-spacing: 5px;\n\
  }\n\
  .editorial-intro-desc {\n\
    max-width: 100%;\n\
  }\n\
  .editorial-intro-image {\n\
    min-height: 320px;\n\
  }\n\
  .editorial-intro-image::after {\n\
    background: linear-gradient(180deg, #0A0F1C 0%, transparent 20%);\n\
  }\n\
}\n\
';

    // Build the widget HTML
    var widget = document.createElement('section');
    widget.className = 'editorial-intro-section';
    widget.innerHTML = '\
<div class="editorial-intro-inner">\
  <div class="editorial-intro-panel">\
    <div class="editorial-intro-eyebrow">Now Publishing</div>\
    <p class="editorial-intro-title-the">the</p>\
    <h2 class="editorial-intro-title-resort">Resort</h2>\
    <p class="editorial-intro-title-editorial">Editorial</p>\
    <div class="editorial-intro-issue">Best Hilton Head Properties &middot; Spring 2026</div>\
    <p class="editorial-intro-desc">Elegant, inspired, and utterly captivating &mdash; the Carolina Sea Islands’ most coveted coastal living, curated by Best Hilton Head Properties.</p>\
    <a href="/editorial/" class="editorial-intro-cta">The Spring Edition &rarr;</a>\
  </div>\
  <div class="editorial-intro-image" role="img" aria-label="Luxury poolside lounge at a Hilton Head Island resort property"></div>\
</div>';

    // Insert after newdev-section
    newdev.parentNode.insertBefore(style, newdev.nextSibling);
    newdev.parentNode.insertBefore(widget, style.nextSibling);
  }
})();
