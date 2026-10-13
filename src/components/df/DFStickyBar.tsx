import { DF_MESSAGES } from "@/df/config";
import { dfWhatsAppLink } from "@/df/whatsapp";
import { trackDF } from "@/df/analytics";
import { WhatsAppIcon } from "./DFPrimitives";

export default function DFStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-ink/10 bg-white/95 p-3 backdrop-blur shadow-[0_-4px_20px_rgba(12,13,15,0.08)] pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:hidden">
      <a
        href={dfWhatsAppLink(DF_MESSAGES.hero)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackDF("whatsapp_hero", "mobile_sticky_bar")}
        className="flex h-12 w-full items-center justify-center gap-2.5 rounded-[3px] bg-signal px-4 font-display text-sm font-bold uppercase tracking-[0.06em] text-ink shadow-sm active:bg-signal-strong [font-stretch:92%]"
        aria-label="Pedir caçamba pelo WhatsApp"
      >
        <WhatsAppIcon className="h-5 w-5 shrink-0" />
        <span>Pedir Caçamba</span>
      </a>
    </div>
  );
}
