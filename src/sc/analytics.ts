// ============================================================
// ANALYTICS & TRACKING — Caçambas Premium Santa Catarina (/sc)
// Preserva Google Ads, GTM, Consent Mode, dataLayer, gclid e UTMs.
// Eventos específicos:
// - sc_whatsapp_click
// - sc_hero_whatsapp
// - sc_city_click
// - sc_material_click
// - sc_quote_click
// Sem disparo de conversão duplicada na mesma sessão.
// ============================================================

export type SCContextEvent =
  | "sc_hero_whatsapp"
  | "sc_city_click"
  | "sc_material_click"
  | "sc_quote_click";

const SC_CONVERSION_SESSION_KEY = "cp_sc_wa_conversion_sent";
const SC_ATTRIBUTION_SESSION_KEY = "cp_sc_attribution";

const TRACKED_PARAMS = [
  "gclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export interface SCAttribution {
  gclid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

/**
 * Captura e preserva gclid e UTMs da URL na sessão para envio no dataLayer e gtag.
 */
export function captureSCAttribution(): SCAttribution {
  if (typeof window === "undefined") return {};

  let stored: SCAttribution = {};
  try {
    const raw = window.sessionStorage?.getItem(SC_ATTRIBUTION_SESSION_KEY);
    if (raw) stored = JSON.parse(raw) as SCAttribution;
  } catch {
    /* ignore */
  }

  try {
    const params = new URLSearchParams(window.location.search);
    let updated = false;
    for (const key of TRACKED_PARAMS) {
      const val = params.get(key);
      if (val) {
        stored[key] = val;
        updated = true;
      }
    }
    if (updated) {
      window.sessionStorage?.setItem(SC_ATTRIBUTION_SESSION_KEY, JSON.stringify(stored));
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "sc_attribution_captured",
        page_path: "/sc",
        ...stored,
      });
    }
  } catch {
    /* ignore */
  }

  return stored;
}

/**
 * Registra clique em qualquer CTA de WhatsApp da rota /sc:
 * - Dispara 'sc_whatsapp_click' e o evento específico de contexto ('sc_hero_whatsapp', 'sc_city_click', 'sc_material_click' ou 'sc_quote_click')
 * - Garante deduplicação por sessão (counted_as_conversion = true apenas no 1º clique da sessão)
 * - Inclui gclid e UTMs preservados
 */
export function trackSCWhatsAppClick(
  contextEvent: SCContextEvent,
  label: string,
  extra?: Record<string, string>
): void {
  if (typeof window === "undefined") return;

  try {
    (window as unknown as { __loadGtagNow?: () => void }).__loadGtagNow?.();
  } catch {
    /* ignore */
  }

  const attribution = captureSCAttribution();

  let alreadyConverted = false;
  try {
    alreadyConverted = Boolean(window.sessionStorage?.getItem(SC_CONVERSION_SESSION_KEY));
    if (!alreadyConverted) {
      window.sessionStorage?.setItem(SC_CONVERSION_SESSION_KEY, "1");
    }
  } catch {
    /* ignore */
  }

  const basePayload: Record<string, unknown> = {
    event_category: "contact",
    event_label: label,
    page_path: "/sc",
    region: "SC",
    counted_as_conversion: !alreadyConverted,
    transport_type: "beacon",
    ...attribution,
    ...(extra || {}),
  };

  window.dataLayer = window.dataLayer || [];

  // 1. Evento geral de clique no WhatsApp SC (deduplicado via counted_as_conversion)
  window.gtag?.("event", "sc_whatsapp_click", basePayload);
  window.dataLayer.push({
    event: "sc_whatsapp_click",
    ...basePayload,
  });

  // 2. Evento específico de contexto (sc_hero_whatsapp, sc_city_click, sc_material_click, sc_quote_click)
  window.gtag?.("event", contextEvent, basePayload);
  window.dataLayer.push({
    event: contextEvent,
    ...basePayload,
  });
}
