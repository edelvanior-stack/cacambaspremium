import { GOOGLE_ADS_CONVERSION_DF, type DFEvent } from "./config";

const CONVERSION_SESSION_KEY = "cp_df_wa_conversion_sent";

/**
 * Rastreia um clique de WhatsApp na página /df.
 * - Evento nomeado (whatsapp_hero, whatsapp_region, ...) via gtag e dataLayer, em todo clique.
 * - Conversão do Google Ads somente se GOOGLE_ADS_CONVERSION_DF estiver configurada,
 *   no máximo 1 vez por sessão (evita contagem duplicada).
 * Independente de src/lib/analytics.ts (usado pela home).
 */
export function trackDF(event: DFEvent, location: string): void {
  if (typeof window === "undefined") return;

  let alreadyConverted = false;
  try {
    alreadyConverted = Boolean(window.sessionStorage.getItem(CONVERSION_SESSION_KEY));
  } catch {
    /* sessionStorage indisponível (modo privado antigo) */
  }

  window.gtag?.("event", event, { cta_location: location, page_path: "/df" });

  const sendConversion = Boolean(GOOGLE_ADS_CONVERSION_DF) && !alreadyConverted;
  if (sendConversion && window.gtag) {
    window.gtag("event", "conversion", { send_to: GOOGLE_ADS_CONVERSION_DF });
    try {
      window.sessionStorage.setItem(CONVERSION_SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    cta_location: location,
    page_path: "/df",
    counted_as_conversion: sendConversion,
  });
}
