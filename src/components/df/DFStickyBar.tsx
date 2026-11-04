import { DF_DEFAULT_MESSAGE } from "@/df/config";
import { dfWhatsAppLink } from "@/df/whatsapp";
import { trackDFWhatsAppClick } from "@/df/analytics";
import { WhatsAppIcon } from "./DFPrimitives";

export default function DFStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-[#25D366] active:bg-[#20BD5A] shadow-[0_-4px_20px_rgba(0,0,0,0.25)]">
      <a
        href={dfWhatsAppLink(DF_DEFAULT_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackDFWhatsAppClick("mobile_bottom_bar")}
        className="w-full min-h-[56px] h-14 flex items-center justify-center gap-2.5 text-white font-extrabold text-sm sm:text-base tracking-wide px-4 pb-[env(safe-area-inset-bottom,0px)]"
        aria-label="Pedir orçamento no WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 text-white flex-shrink-0 fill-current" />
        <span>Pedir orçamento no WhatsApp</span>
      </a>
    </div>
  );
}
