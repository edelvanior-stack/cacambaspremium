import { WHATSAPP_DF } from "./config";

const digits = WHATSAPP_DF.replace(/\D/g, "");

/** true quando o WhatsApp do DF foi configurado em config.ts */
export const isWhatsAppDFConfigured = digits.length >= 12;

/**
 * Monta o link do WhatsApp usando EXCLUSIVAMENTE o número do DF.
 * Sem número configurado, abre o WhatsApp com a mensagem pronta
 * para o visitante escolher o contato (nunca usa o número da home).
 */
export function dfWhatsAppLink(message: string): string {
  const text = encodeURIComponent(message);
  return isWhatsAppDFConfigured
    ? `https://wa.me/${digits}?text=${text}`
    : `https://wa.me/?text=${text}`;
}

if (!isWhatsAppDFConfigured && typeof window !== "undefined" && window.location.hostname === "localhost") {
  console.warn("[Caçambas Premium DF] WHATSAPP_DF ainda não foi configurado em src/df/config.ts");
}
