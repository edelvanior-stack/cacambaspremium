import { WHATSAPP_SC, SC_HERO_MESSAGE } from "./config";

const digits = WHATSAPP_SC.replace(/\D/g, "");

/**
 * Monta o link do WhatsApp usando EXCLUSIVAMENTE https://wa.me/5547992089548
 * com a mensagem codificada via encodeURIComponent.
 */
export function scWhatsAppLink(message: string = SC_HERO_MESSAGE): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${digits}?text=${text}`;
}
