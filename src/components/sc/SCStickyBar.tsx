import { SC_HERO_MESSAGE } from "@/sc/config";
import { scWhatsAppLink } from "@/sc/whatsapp";
import { trackSCWhatsAppClick } from "@/sc/analytics";
import { WhatsAppIcon } from "./SCPrimitives";

export default function SCStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-[#25D366] shadow-[0_-4px_20px_rgba(0,0,0,0.28)] pb-[env(safe-area-inset-bottom,0px)]">
      <a
        href={scWhatsAppLink(SC_HERO_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackSCWhatsAppClick("sc_quote_click", "mobile_sticky_bar")}
        className="w-full min-h-[56px] h-14 flex items-center justify-center gap-2 bg-[#25D366] active:bg-[#20BD5A] text-white font-display font-extrabold text-xs sm:text-sm uppercase tracking-wide px-3"
        aria-label="Pedir Orçamento no WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5 text-white shrink-0 fill-current" />
        <span className="truncate">Pedir Orçamento no WhatsApp</span>
      </a>
    </div>
  );
}
