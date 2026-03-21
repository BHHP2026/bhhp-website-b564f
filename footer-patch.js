/**
 * BHHP Footer Compliance Patch
 * Adds legally required real estate disclaimers:
 * - Fair Housing Act / Equal Housing Opportunity
 * - SC Real Estate License info
 * - MLS Disclaimer
 * - Privacy Policy link
 *
 * Also fixes "Carolina Sea Islands's" grammar → "Carolina Sea Islands'"
 */
(function () {
  'use strict';

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', patchFooter);
  } else {
    patchFooter();
  }

  function patchFooter() {
    var footer = document.querySelector('footer');
    if (!footer) return;

    // ─── FIX POSSESSIVE GRAMMAR ───
    // "Carolina Sea Islands's" → "Carolina Sea Islands'"
    var walker = document.createTreeWalker(footer, NodeFilter.SHOW_TEXT);
    var node;
    while (node = walker.nextNode()) {
      if (node.textContent.indexOf("Islands's") !== -1) {
        node.textContent = node.textContent.replace(/Islands's/g, "Islands'");
      }
    }

    // ─── ADD COMPLIANCE BAR ───
    var complianceBar = document.createElement('div');
    complianceBar.className = 'bhhp-footer-compliance';

    // Style the compliance bar
    var style = document.createElement('style');
    style.textContent = [
      '.bhhp-footer-compliance {',
      '  border-top: 1px solid rgba(255,255,255,0.1);',
      '  margin-top: 32px;',
      '  padding: 24px 60px;',
      '  display: flex;',
      '  align-items: flex-start;',
      '  gap: 24px;',
      '  flex-wrap: wrap;',
      '}',
      '.bhhp-footer-compliance .eho-icon {',
      '  flex-shrink: 0;',
      '  width: 48px;',
      '  height: 48px;',
      '}',
      '.bhhp-footer-compliance .eho-icon svg {',
      '  width: 48px;',
      '  height: 48px;',
      '}',
      '.bhhp-footer-compliance .compliance-text {',
      '  flex: 1;',
      '  min-width: 280px;',
      '}',
      '.bhhp-footer-compliance .compliance-text p {',
      '  font-family: "Montserrat", sans-serif;',
      '  font-size: 11px;',
      '  line-height: 1.6;',
      '  color: rgba(255,255,255,0.45);',
      '  margin: 0 0 8px 0;',
      '  letter-spacing: 0.3px;',
      '}',
      '.bhhp-footer-compliance .compliance-text a {',
      '  color: rgba(111,191,176,0.7);',
      '  text-decoration: none;',
      '}',
      '.bhhp-footer-compliance .compliance-text a:hover {',
      '  color: #6FBFB0;',
      '  text-decoration: underline;',
      '}',
      '@media (max-width: 768px) {',
      '  .bhhp-footer-compliance {',
      '    padding: 20px 24px;',
      '    flex-direction: column;',
      '    align-items: center;',
      '    text-align: center;',
      '  }',
      '}'
    ].join('\n');

    complianceBar.innerHTML = [
      '<div class="eho-icon">',
      '  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">',
      '    <rect width="48" height="48" rx="4" fill="white"/>',
      '    <text x="24" y="16" text-anchor="middle" font-family="Arial,sans-serif" font-size="7" font-weight="bold" fill="#333">EQUAL</text>',
      '    <text x="24" y="24" text-anchor="middle" font-family="Arial,sans-serif" font-size="7" font-weight="bold" fill="#333">HOUSING</text>',
      '    <text x="24" y="32" text-anchor="middle" font-family="Arial,sans-serif" font-size="6" fill="#333">OPPORTUNITY</text>',
      '    <path d="M14 38 L24 34 L34 38" stroke="#333" stroke-width="1.5" fill="none"/>',
      '  </svg>',
      '</div>',
      '<div class="compliance-text">',
      '  <p>Best Hilton Head Properties is committed to compliance with the Fair Housing Act. We do not discriminate on the basis of race, color, religion, sex, handicap, familial status, national origin, sexual orientation, or gender identity. Equal Housing Opportunity.</p>',
      '  <p>Best Hilton Head Properties | Licensed in South Carolina | Brokered by SERHANT. | 71 Lighthouse Rd, Ste 300, Hilton Head Island, SC 29928</p>',
      '  <p>The information provided on this website is for general informational purposes only. All property data is believed to be accurate but is not guaranteed. Listing information may have changed since last update. Buyers should independently verify all information before making purchase decisions.</p>',
      '  <p><a href="/privacy-policy">Privacy Policy</a> · <a href="/terms">Terms of Service</a> · <a href="/accessibility">Accessibility</a></p>',
      '</div>'
    ].join('\n');

    // Insert before the last child of footer (or at end)
    footer.appendChild(style);
    footer.appendChild(complianceBar);

    // ─── REMOVE POST-FOOTER CONTENT ───
    // Remove "Blog Post Page Preview" divider and everything after footer
    // that isn't a script tag (preserve dynamically loaded scripts)
    var sib = footer.nextElementSibling;
    while (sib) {
      var next = sib.nextElementSibling;
      if (sib.tagName !== 'SCRIPT') {
        sib.remove();
      }
      sib = next;
    }
  }
})();
