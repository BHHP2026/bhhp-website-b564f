/**
 * BHHP Discover Bluffton Widget
 * Cinematic video widget with editorial typography
 * Video starts at 4s (skips intro title card) and loops back at 56s (skips outro title card)
 */
(function () {
  'use strict';
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    var articlesSection = document.querySelector('.articles-section');
    if (!articlesSection) return;
    if (document.querySelector('.discover-bluffton-widget')) return;

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
  background: linear-gradient(rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0.5) 100%);\n\
  z-index: 2;\n\
}\n\
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
  color: rgba(255,255,255,0.8);\n\
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
  color: rgba(255,255,255,0.5);\n\
  margin-top: 32px;\n\
}\n\
.dbw-desc {\n\
  font-family: "Bodoni Moda", "Didot", serif;\n\
  font-style: italic;\n\
  font-size: 17px;\n\
  line-height: 1.7;\n\
  color: rgba(255,255,255,0.7);\n\
  margin: 16px auto 0;\n\
  max-width: 540px;\n\
}\n\
.dbw-cta {\n\
  display: inline-block;\n\
  margin-top: 36px;\n\
  padding: 15px 44px;\n\
  border: 1px solid rgba(255,255,255,0.35);\n\
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
@media (max-width: 900px) {\n\
  .discover-bluffton-container { padding: 0 24px; }\n\
  .discover-bluffton-card { min-height: 420px; }\n\
  .dbw-title-bluffton { font-size: 64px; }\n\
  .dbw-title-sc { font-size: 32px; letter-spacing: 8px; }\n\
  .dbw-desc { font-size: 15px; max-width: 100%; }\n\
}\n\
';

    var widget = document.createElement('section');
    widget.className = 'discover-bluffton-widget';
    widget.innerHTML = '<div class="discover-bluffton-container"><div class="discover-bluffton-card"><video class="discover-bluffton-video" autoplay muted playsinline><source src="bluffton-hero.mp4" type="video/mp4"></video><div class="discover-bluffton-content"><div class="dbw-eyebrow">Expand Your Search</div><p class="dbw-title-discover">discover</p><h2 class="dbw-title-bluffton">Bluffton</h2><p class="dbw-title-sc">South Carolina</p><div class="dbw-tagline">The Heart of the Carolina Sea Islands &middot; Best Hilton Head Properties</div><p class="dbw-desc">Art, history, world-class communities, and the May River &mdash; Bluffton is where the Carolina Sea Islands come alive.</p><a href="/discover-bluffton.html" class="dbw-cta">Discover Bluffton &rarr;</a></div></div></div>';

    articlesSection.parentNode.insertBefore(style, articlesSection);
    articlesSection.parentNode.insertBefore(widget, articlesSection);

    // ── Video skip logic: start at 4s, loop back at 56s ──
    var vid = widget.querySelector('.discover-bluffton-video');
    var VID_START = 4;
    var VID_END   = 56;
    if (vid) {
      var jumping = false;
      function jumpTo(t) {
        if (jumping) return;
        jumping = true;
        vid.currentTime = t;
        setTimeout(function () { jumping = false; }, 400);
      }
      function checkTime() {
        if (vid.currentTime < VID_START) jumpTo(VID_START);
        else if (vid.currentTime >= VID_END) jumpTo(VID_START);
      }
      vid.addEventListener('timeupdate', checkTime);
      vid.addEventListener('ended', function () { jumpTo(VID_START); vid.play(); });
      if (vid.readyState >= 1) {
        jumpTo(VID_START);
      } else {
        vid.addEventListener('loadedmetadata', function () { jumpTo(VID_START); });
      }
    }
  }
})();