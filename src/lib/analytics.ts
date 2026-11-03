// ============================================================
// ANALYTICS & TRACKING - Caçambas Premium (Curitiba/PR)
// ============================================================

// Google Ads Base ID (Paraná)
export const GADS_ID = "AW-17696330213";

// Google Ads WhatsApp Conversion ID
export const GADS_CONVERSION_WHATSAPP = "AW-17696330213/bNhvCPSvh-UcEOWjovZB";

/**
 * Deduplication session key:
 * Only the first WhatsApp click per visitor session fires the Google Ads conversion.
 * Every click still pushes to dataLayer & GA4 for full-funnel visibility.
 */
const WHATSAPP_CONVERSION_SESSION_KEY = "cp_wa_conversion_sent";

/**
 * Track WhatsApp CTA click:
 * - Fires Google Ads conversion AW-17696330213/bNhvCPSvh-UcEOWjovZB with session deduplication.
 * - Pushes 'whatsapp_click' to GA4 / gtag and dataLayer on EVERY click.
 * - Dispatched immediately on click without blocking navigation.
 */
export const trackWhatsAppClick = (source: string) => {
  if (typeof window === "undefined") return;

  try {
    (window as unknown as { __loadGtagNow?: () => void }).__loadGtagNow?.();
  } catch {
    /* ignore */
  }

  let alreadyConverted = false;
  try {
    alreadyConverted = Boolean(window.sessionStorage?.getItem(WHATSAPP_CONVERSION_SESSION_KEY));
  } catch {
    /* ignore storage access issues */
  }

  // 1. Google Ads conversion event — deduplicated per session
  if (window.gtag && !alreadyConverted) {
    window.gtag("event", "conversion", {
      send_to: GADS_CONVERSION_WHATSAPP,
    });
    try {
      window.sessionStorage?.setItem(WHATSAPP_CONVERSION_SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  // 2. GA4 event: whatsapp_click (fires on every click)
  if (window.gtag) {
    window.gtag("event", "whatsapp_click", {
      event_category: "contact",
      event_label: source,
      transport_type: "beacon",
    });
  }

  // 3. dataLayer push (for GTM compatibility)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "whatsapp_click",
    category: "conversion",
    action: "click",
    label: source,
    counted_as_conversion: !alreadyConverted,
  });
};

/**
 * Track Phone click (tel: link)
 * - Fires 'phone_click' event ONLY.
 * - DOES NOT fire the WhatsApp Google Ads conversion.
 */
export const trackPhoneClick = (source: string) => {
  if (typeof window === "undefined") return;

  try {
    (window as unknown as { __loadGtagNow?: () => void }).__loadGtagNow?.();
  } catch {
    /* ignore */
  }

  if (window.gtag) {
    window.gtag("event", "phone_click", {
      event_category: "contact",
      event_label: source,
      transport_type: "beacon",
    });
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "phone_click",
    category: "contact",
    action: "click",
    label: source,
  });
};
