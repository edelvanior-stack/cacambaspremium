// ============================================================
// ANALYTICS & TRACKING - Caçambas Premium (Brasília, DF e Entorno)
// Usado em: /df, /valor/orcamento e /entorno/cacamba
// ============================================================

import { GOOGLE_ADS_CONVERSION_DF, type DFEvent } from "./config";

/**
 * Deduplication session key for DF operation:
 * Only the first WhatsApp click per visitor session fires the Google Ads conversion.
 * Every click still pushes to dataLayer & GA4 for full-funnel visibility.
 */
const DF_WHATSAPP_CONVERSION_SESSION_KEY = "cp_df_wa_conversion_sent";

/** Evita disparo duplo no mesmo clique físico (debounce) */
let lastClickTimestamp = 0;

/** Trava em memória complementar ao sessionStorage para garantir 1 conversão por sessão */
let conversionSentInMemory = false;

function currentPagePath(): string {
  if (typeof window === "undefined") return "/df";
  return window.location.pathname || "/df";
}

function ensureGtagLoaded(): void {
  try {
    (window as unknown as { __loadGtagNow?: () => void }).__loadGtagNow?.();
  } catch {
    /* ignore */
  }
}

/**
 * Track WhatsApp CTA click for DF operation (/df, /valor/orcamento, /entorno/cacamba):
 * - Fires Google Ads conversion AW-18502471060/JGSnCNK2o64dEJSb1fZE ONCE per session.
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

  ensureGtagLoaded();

  const pagePath = currentPagePath();
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
      page_path: pagePath,
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
    page_path: pagePath,
    counted_as_conversion: !alreadyConverted,
  });
};

/**
 * Track Phone click (tel: link) for DF operation:
 * - Fires 'phone_click' event ONLY.
 * - DOES NOT fire the WhatsApp Google Ads conversion.
 */
export const trackDFPhoneClick = (source: string) => {
  if (typeof window === "undefined") return;

  ensureGtagLoaded();
  const pagePath = currentPagePath();

  if (window.gtag) {
    window.gtag("event", "phone_click", {
      event_category: "contact",
      event_label: source,
      page_path: pagePath,
      transport_type: "beacon",
    });
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "phone_click",
    category: "contact",
    action: "click",
    label: source,
    page_path: pagePath,
  });
};

/**
 * Track quote form interaction/submission in GA4 & dataLayer ONLY.
 * DOES NOT fire a duplicate Google Ads conversion (the conversion is fired
 * exclusively via trackDFWhatsAppClick when opening WhatsApp).
 */
export const trackDFQuoteFormEvent = (
  eventName: "quote_form_start" | "quote_form_submit",
  source: string,
  extraParams?: Record<string, unknown>
) => {
  if (typeof window === "undefined") return;

  ensureGtagLoaded();
  const pagePath = currentPagePath();
  const payload: Record<string, unknown> = {
    event_category: "quote_form",
    event_label: source,
    page_path: pagePath,
    transport_type: "beacon",
    ...(extraParams || {}),
  };

  if (window.gtag) {
    window.gtag("event", eventName, payload);
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...payload,
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
 * Rastreia uma interação na operação DF (compatibilidade retroativa).
 */
export function trackDF(
  event: DFEvent | string,
  location: string,
  extraParams?: Record<string, unknown>
): void {
  if (typeof window === "undefined") return;

  ensureGtagLoaded();

  const isWhatsApp = WHATSAPP_OPEN_EVENTS.has(event);
  if (isWhatsApp) {
    trackDFWhatsAppClick(location);
    return;
  }

  const payload: Record<string, unknown> = {
    cta_location: location,
    page_path: currentPagePath(),
    ...(extraParams || {}),
  };

  window.gtag?.("event", event, payload);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...payload,
  });
}
