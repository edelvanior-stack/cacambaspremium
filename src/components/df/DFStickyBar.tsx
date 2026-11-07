import { DF_DEFAULT_MESSAGE, WHATSAPP_DF } from "@/df/config";
import { dfWhatsAppLink } from "@/df/whatsapp";
import { trackDFWhatsAppClick, trackDFPhoneClick } from "@/df/analytics";
import { WhatsAppIcon, PhoneIcon } from "./DFPrimitives";

export default function DFStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-stretch sm:hidden bg-[#25D366] shadow-[0_-4px_20px_rgba(0,0,0,0.25)] pb-[env(safe-area-inset-bottom,0px)]">
      <a
        href={dfWhatsAppLink(DF_DEFAULT_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackDFWhatsAppClick("mobile_bottom_bar")}
        className="flex-1 min-w-0 min-h-[56px] h-14 flex items-center justify-center gap-1.5 bg-[#25D366] active:bg-[#20BD5A] text-white font-extrabold text-xs tracking-tight px-2.5"
        aria-label="Pedir orçamento no WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5 text-white shrink-0 fill-current" />
        <span className="truncate">Pedir orçamento no WhatsApp</span>
      </a>
      <a
        href={`tel:+${WHATSAPP_DF}`}
        onClick={() => trackDFPhoneClick("mobile_bottom_bar_phone")}
        className="shrink-0 min-h-[56px] h-14 flex items-center justify-center gap-1.5 bg-ink active:bg-steel text-white font-display font-extrabold text-xs uppercase tracking-wide px-3 border-l border-white/15"
        aria-label="Ligar agora"
      >
        <PhoneIcon className="w-4 h-4 text-signal shrink-0" />
        <span>Ligar agora</span>
      </a>
    </div>
  );
}
