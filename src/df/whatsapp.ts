import { WHATSAPP_DF, DF_DEFAULT_MESSAGE } from "./config";

const digits = WHATSAPP_DF.replace(/\D/g, "");

/** true quando o WhatsApp do DF foi configurado em config.ts */
export const isWhatsAppDFConfigured = digits.length >= 12;

/**
 * Monta o link do WhatsApp usando EXCLUSIVAMENTE o número do DF.
 * Codifica a mensagem com encodeURIComponent.
 */
export function dfWhatsAppLink(message: string = DF_DEFAULT_MESSAGE): string {
  const text = encodeURIComponent(message);
  return isWhatsAppDFConfigured
    ? `https://wa.me/${digits}?text=${text}`
    : `https://wa.me/?text=${text}`;
}

export const DF_WHATSAPP_LINK = dfWhatsAppLink(DF_DEFAULT_MESSAGE);

if (!isWhatsAppDFConfigured && typeof window !== "undefined" && window.location.hostname === "localhost") {
  console.warn("[Caçambas Premium DF] WHATSAPP_DF ainda não foi configurado em src/df/config.ts");
}
