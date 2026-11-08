// ============================================================
// ANALYTICS & TRACKING — Caçambas Premium Santa Catarina (/sc)
// Handler central único para todos os CTAs de WhatsApp da rota /sc.
// Fluxo em cada clique real de WhatsApp:
// 1. usuário clica no CTA
// 2. dispara eventos internos sc_whatsapp_click + sc_*
// 3. dispara UMA conversão Google Ads (AW-18493696857/p5MFCPz4wbQdENnWvfJE)
// 4. abre o WhatsApp normalmente (sem callback bloqueante)
// Preserva gclid, utm_source, utm_medium, utm_campaign, utm_term, utm_content.
// ============================================================

import { GOOGLE_ADS_CONVERSION_SC } from "./config";

export type SCContextEvent =
  | "sc_hero_whatsapp"
  | "sc_city_click"
  | "sc_material_click"
  | "sc_quote_click";

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

/** Evita disparo duplo no mesmo clique físico */
let lastClickTimestamp = 0;

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
    }
  } catch {
    /* ignore */
  }

  return stored;
}

/**
 * Handler central único para TODOS os CTAs reais de WhatsApp da rota /sc:
 * 1. Garante que a tag AW-18493696857 esteja carregada (uma única vez)
 * 2. Dispara os eventos internos sc_whatsapp_click e sc_* (hero, city, material, quote)
 * 3. Dispara UMA conversão do Google Ads:
 *    gtag('event', 'conversion', { 'send_to': 'AW-18493696857/p5MFCPz4wbQdENnWvfJE' })
 * 4. Não bloqueia a abertura do WhatsApp
 */
export function trackSCWhatsAppClick(
  contextEvent: SCContextEvent,
  label: string,
  extra?: Record<string, string>
): void {
  if (typeof window === "undefined") return;

  // Proteção contra duplo disparo no mesmo clique
  const now = Date.now();
  if (now - lastClickTimestamp < 150) {
    return;
  }
  lastClickTimestamp = now;

  try {
    (window as unknown as { __loadGtagNow?: () => void }).__loadGtagNow?.();
  } catch {
    /* ignore */
  }

  const attribution = captureSCAttribution();

  const basePayload: Record<string, unknown> = {
    event_category: "contact",
    event_label: label,
    page_path: "/sc",
    region: "SC",
    transport_type: "beacon",
    ...attribution,
    ...(extra || {}),
  };

  window.dataLayer = window.dataLayer || [];

  // 1. Eventos internos sc_* (preservados)
  window.gtag?.("event", "sc_whatsapp_click", basePayload);
  window.dataLayer.push({
    event: "sc_whatsapp_click",
    ...basePayload,
  });

  window.gtag?.("event", contextEvent, basePayload);
  window.dataLayer.push({
    event: contextEvent,
    ...basePayload,
  });

  // 2. Conversão Google Ads — exatamente UMA chamada por clique real de WhatsApp
  window.gtag?.("event", "conversion", {
    send_to: GOOGLE_ADS_CONVERSION_SC,
    transport_type: "beacon",
  });
}
