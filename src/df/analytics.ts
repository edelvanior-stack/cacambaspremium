// ============================================================
// ANALYTICS & TRACKING - Caçambas Premium (Brasília e DF - /df)
// ============================================================

import { GOOGLE_ADS_CONVERSION_DF, type DFEvent } from "./config";

/**
 * Deduplication session key for DF:
 * Only the first WhatsApp click per visitor session fires the Google Ads conversion.
 * Every click still pushes to dataLayer & GA4 for full-funnel visibility.
 */
const DF_WHATSAPP_CONVERSION_SESSION_KEY = "cp_df_wa_conversion_sent";

/** Evita disparo duplo no mesmo clique físico (debounce) */
let lastClickTimestamp = 0;

/** Trava em memória complementar ao sessionStorage para garantir 1 conversão por sessão */
let conversionSentInMemory = false;

/**
 * Track WhatsApp CTA click for /df:
 * - Fires Google Ads conversion AW-18502471060/JGSnCNK2o64dEJSb1fZE with session deduplication.
 * - Pushes 'whatsapp_click' to GA4 / gtag and dataLayer on EVERY click.
 * - Uses transport_type: "beacon" so navigation does not cancel the hit.
 * - Dispatches immediately on click.
 */
export const trackDFWhatsAppClick = (source: string) => {
  if (typeof window === "undefined") return;

  // Proteção contra clique duplo físico (debounce)
  const now = Date.now();
  if (now - lastClickTimestamp < 500) {
    return;
  }
  lastClickTimestamp = now;

  try {
    (window as unknown as { __loadGtagNow?: () => void }).__loadGtagNow?.();
  } catch {
    /* ignore */
  }

  let alreadyConverted = conversionSentInMemory;
  try {
    if (window.sessionStorage?.getItem(DF_WHATSAPP_CONVERSION_SESSION_KEY) === "1") {
      alreadyConverted = true;
    }
  } catch {
    /* ignore storage issues */
  }

  // 1. Google Ads conversion event — deduplicated per session with transport_type: 'beacon'
  if (window.gtag && !alreadyConverted && GOOGLE_ADS_CONVERSION_DF) {
    conversionSentInMemory = true;
    try {
      window.sessionStorage?.setItem(DF_WHATSAPP_CONVERSION_SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    window.gtag("event", "conversion", {
      send_to: GOOGLE_ADS_CONVERSION_DF,
      transport_type: "beacon",
    });
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
 * Track Phone click (tel: link) for /df:
 * - Fires 'phone_click' event ONLY.
 * - DOES NOT fire the WhatsApp Google Ads conversion.
 */
export const trackDFPhoneClick = (source: string) => {
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

/**
 * Eventos que correspondem a um clique que ABRE o WhatsApp no DF.
 */
const WHATSAPP_OPEN_EVENTS: ReadonlySet<string> = new Set<string>([
  "whatsapp_hero",
  "whatsapp_region",
  "whatsapp_size_help",
  "whatsapp_final",
  "material_click",
  "whatsapp_click",
]);

/**
 * Rastreia uma interação na página /df (compatibilidade retroativa).
 */
export function trackDF(
  event: DFEvent | string,
  location: string,
  extraParams?: Record<string, unknown>
): void {
  if (typeof window === "undefined") return;

  try {
    (window as unknown as { __loadGtagNow?: () => void }).__loadGtagNow?.();
  } catch {
    /* ignore */
  }

  const isWhatsApp = WHATSAPP_OPEN_EVENTS.has(event);
  if (isWhatsApp) {
    trackDFWhatsAppClick(location);
    return;
  }

  const payload: Record<string, unknown> = {
    cta_location: location,
    page_path: "/df",
    ...(extraParams || {}),
  };

  window.gtag?.("event", event, payload);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...payload,
  });
}
