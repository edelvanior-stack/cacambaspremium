import { SC_HERO_MESSAGE, WHATSAPP_SC_DISPLAY } from "@/sc/config";
import { scWhatsAppLink } from "@/sc/whatsapp";
import { trackSCWhatsAppClick } from "@/sc/analytics";
import { SCWhatsAppButton, WhatsAppIcon } from "./SCPrimitives";

const NAV = [
  { label: "Serviços", href: "#servicos" },
  { label: "Tamanhos", href: "#tamanhos" },
  { label: "Materiais", href: "#materiais" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Cidades", href: "#cidades" },
  { label: "Dúvidas", href: "#duvidas" },
];

export function SCLogo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const text = tone === "light" ? "text-white" : "text-ink";
  return (
    <span className={`inline-flex items-center gap-2 sm:gap-2.5 ${text}`} aria-label="Caçambas Premium SC">
      <svg viewBox="0 0 32 32" className="h-6 w-6 sm:h-7 sm:w-7 shrink-0" aria-hidden="true">
        <rect width="32" height="32" rx="3" fill="#FFC400" />
        <path d="M6 11h20l-3 12H9L6 11z" fill="#0c0d0f" />
        <path d="M9.5 15h13" stroke="#FFC400" strokeWidth="1.6" />
      </svg>
      <span className="flex items-baseline gap-1.5 sm:gap-2 leading-none">
        <span className="font-display text-[0.78rem] sm:text-[0.95rem] font-extrabold uppercase tracking-[0.03em] sm:tracking-[0.04em]">
          Caçambas Premium
        </span>
        <span className="font-display text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-signal">
          SC
        </span>
      </span>
    </span>
  );
}

export default function SCHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-ink">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 sm:gap-4 px-3.5 sm:px-6 lg:h-16 lg:px-8">
        <a
          href="#topo"
          className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
        >
          <SCLogo />
        </a>

        <nav aria-label="Seções da página" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-white/70 transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={scWhatsAppLink(SC_HERO_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackSCWhatsAppClick("sc_quote_click", "header_whatsapp_number")}
            className="hidden text-sm font-medium text-white/75 hover:text-white transition-colors xl:inline"
          >
            {WHATSAPP_SC_DISPLAY}
          </a>
          <span className="hidden sm:inline-flex">
            <SCWhatsAppButton
              message={SC_HERO_MESSAGE}
              contextEvent="sc_quote_click"
              label="header_cta"
              size="md"
            >
              Consultar no WhatsApp
            </SCWhatsAppButton>
          </span>
          <a
            href={scWhatsAppLink(SC_HERO_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackSCWhatsAppClick("sc_quote_click", "header_mobile_cta")}
            className="inline-flex h-9 items-center gap-1.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white px-2.5 font-display text-[11px] font-extrabold uppercase tracking-wide sm:hidden shadow-sm shrink-0"
            aria-label="Consultar Disponibilidade no WhatsApp"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 fill-current shrink-0" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
