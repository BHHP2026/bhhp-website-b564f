/**
 * Our Story — SERHANT Video Patch
 * Replaces the static SERHANT badge with a YouTube video embed.
 * Video: https://www.youtube.com/watch?v=IZr3U5FAf54
 */
(function () {
  'use strict';
  function patchSerhantBadge() {
    var badge = document.querySelector('.story-serhant-badge');
    if (!badge) return;
    var wrapper = badge.parentElement;
    var container = document.createElement('div');
    container.className = 'story-serhant-video-wrapper';
    container.style.cssText = 'position:relative;width:100%;max-width:480px;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:4px;box-shadow:0 4px 24px rgba(0,0,0,0.18)';
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/IZr3U5FAf54?rel=0&modestbranding=1';
    iframe.title = 'Why SERHANT. Changes Everything';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;border:none';
    container.appendChild(iframe);
    wrapper.innerHTML = '';
    wrapper.appendChild(container);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', patchSerhantBadge);
  } else {
    patchSerhantBadge();
  }
})();
