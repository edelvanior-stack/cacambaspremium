import { DF_DEFAULT_MESSAGE, WHATSAPP_DF_DISPLAY, WHATSAPP_DF } from "@/df/config";
import { DFWhatsAppButton, WhatsAppIcon } from "./DFPrimitives";
import { dfWhatsAppLink } from "@/df/whatsapp";
import { trackDFWhatsAppClick, trackDFPhoneClick } from "@/df/analytics";

const NAV = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Regiões", href: "#regioes" },
  { label: "Materiais", href: "#materiais" },
  { label: "Dúvidas", href: "#duvidas" },
];

export function DFLogo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const text = tone === "light" ? "text-white" : "text-ink";
  return (
    <span className={`inline-flex items-center gap-2.5 ${text}`} aria-label="Caçambas Premium DF">
      <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0" aria-hidden="true">
        <rect width="32" height="32" rx="3" fill="#FFC400" />
        <path d="M6 11h20l-3 12H9L6 11z" fill="#0c0d0f" />
        <path d="M9.5 15h13" stroke="#FFC400" strokeWidth="1.6" />
      </svg>
      <span className="flex items-baseline gap-2 leading-none">
        <span className="font-display text-[0.95rem] font-extrabold uppercase tracking-[0.04em] [font-stretch:86%]">
          Caçambas Premium
        </span>
        <span className="font-display text-[0.7rem] font-bold uppercase tracking-[0.18em] text-signal">DF</span>
      </span>
    </span>
  );
}

export default function DFHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/85">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-16 lg:px-8">
        <a href="#topo" className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal">
          <DFLogo />
        </a>

        <nav aria-label="Seções da página" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-white/65 transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {WHATSAPP_DF_DISPLAY && (
            <a
              href={`tel:+${WHATSAPP_DF}`}
              onClick={() => trackDFPhoneClick("header_phone")}
              className="hidden text-sm font-medium text-white/70 hover:text-white transition-colors xl:inline"
            >
              {WHATSAPP_DF_DISPLAY}
            </a>
          )}
          <DFWhatsAppButton
            message={DF_DEFAULT_MESSAGE}
            location="header"
            size="md"
            className="hidden sm:inline-flex"
          >
            Pedir orçamento
          </DFWhatsAppButton>
          <a
            href={dfWhatsAppLink(DF_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackDFWhatsAppClick("header_mobile")}
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white px-3.5 font-display text-xs font-extrabold uppercase tracking-wide sm:hidden shadow-sm"
            aria-label="Pedir orçamento no WhatsApp"
          >
            <WhatsAppIcon className="h-4 w-4 fill-current" />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
