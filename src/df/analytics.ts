import { GOOGLE_ADS_CONVERSION_DF, type DFEvent } from "./config";

/**
 * Eventos que correspondem a um clique que ABRE o WhatsApp.
 * Somente estes podem disparar a conversão do Google Ads.
 * (region_check_start / region_check_submit NÃO abrem o WhatsApp por si só.)
 */
const WHATSAPP_OPEN_EVENTS: ReadonlySet<DFEvent> = new Set<DFEvent>([
  "whatsapp_hero",
  "whatsapp_region",
  "whatsapp_size_help",
  "whatsapp_final",
  "material_click",
]);

/**
 * Rastreia uma interação na página /df.
 * - Evento nomeado (whatsapp_hero, whatsapp_region, ...) via gtag e dataLayer, em todo clique.
 * - Conversão do Google Ads somente quando:
 *   1) o evento é de abertura do WhatsApp, e
 *   2) GOOGLE_ADS_CONVERSION_LABEL_DF estiver preenchido em config.ts.
 *   É chamada no onClick, imediatamente antes da abertura do WhatsApp, sem bloquear o link.
 * Independente de src/lib/analytics.ts (usado pela home).
 */
export function trackDF(
  event: DFEvent,
  location: string,
  extraParams?: Record<string, unknown>
): void {
  if (typeof window === "undefined") return;

  const payload: Record<string, unknown> = {
    cta_location: location,
    page_path: "/df",
    ...(extraParams || {}),
  };

  window.gtag?.("event", event, payload);

  const sendConversion =
    WHATSAPP_OPEN_EVENTS.has(event) && Boolean(GOOGLE_ADS_CONVERSION_DF) && Boolean(window.gtag);
  if (sendConversion) {
    window.gtag!("event", "conversion", {
      send_to: GOOGLE_ADS_CONVERSION_DF,
    });
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...payload,
    counted_as_conversion: sendConversion,
  });
}
