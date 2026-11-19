import {
  DF_DEFAULT_MESSAGE,
  DF_VALOR_DEFAULT_MESSAGE,
  DF_ENTORNO_DEFAULT_MESSAGE,
  WHATSAPP_DF_DISPLAY,
  WHATSAPP_DF,
} from "@/df/config";
import { DFWhatsAppButton, WhatsAppIcon } from "./DFPrimitives";
import { dfWhatsAppLink } from "@/df/whatsapp";
import { trackDFWhatsAppClick, trackDFPhoneClick } from "@/df/analytics";

export type DFPageKey = "df" | "orcamento" | "entorno";

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

function getNavItems(currentPage: DFPageKey): NavItem[] {
  if (currentPage === "orcamento") {
    return [
      { label: "Brasília e DF", href: "/df" },
      { label: "Valores e Orçamento", href: "#tabela-valores", active: true },
      { label: "Solicitar Orçamento", href: "#solicitar-orcamento" },
      { label: "Entorno do DF", href: "/entorno/cacamba" },
      { label: "Dúvidas", href: "#duvidas-orcamento" },
    ];
  }
  if (currentPage === "entorno") {
    return [
      { label: "Brasília e DF", href: "/df" },
      { label: "Cidades do Entorno", href: "#cidades-entorno", active: true },
      { label: "Valores e Orçamento", href: "/valor/orcamento" },
      { label: "Materiais", href: "#operacao-entorno" },
      { label: "Dúvidas", href: "#duvidas-entorno" },
    ];
  }
  return [
    { label: "Valores", href: "/valor/orcamento" },
    { label: "Entorno do DF", href: "/entorno/cacamba" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Regiões", href: "#regioes" },
    { label: "Materiais", href: "#materiais" },
    { label: "Dúvidas", href: "#duvidas" },
  ];
}

function getDefaultMessage(currentPage: DFPageKey): string {
  if (currentPage === "orcamento") return DF_VALOR_DEFAULT_MESSAGE;
  if (currentPage === "entorno") return DF_ENTORNO_DEFAULT_MESSAGE;
  return DF_DEFAULT_MESSAGE;
}

export function DFLogo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const text = tone === "light" ? "text-white" : "text-ink";
  return (
    <span className={`inline-flex items-center gap-2 sm:gap-2.5 ${text}`} aria-label="Caçambas Premium DF">
      <svg viewBox="0 0 32 32" className="h-6 w-6 sm:h-7 sm:w-7 shrink-0" aria-hidden="true">
        <rect width="32" height="32" rx="3" fill="#FFC400" />
        <path d="M6 11h20l-3 12H9L6 11z" fill="#0c0d0f" />
        <path d="M9.5 15h13" stroke="#FFC400" strokeWidth="1.6" />
      </svg>
      <span className="flex items-baseline gap-1.5 sm:gap-2 leading-none">
        <span className="font-display text-[0.8rem] sm:text-[0.95rem] font-extrabold uppercase tracking-[0.03em] sm:tracking-[0.04em]">
          Caçambas Premium
        </span>
        <span className="font-display text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-signal">
          DF
        </span>
      </span>
    </span>
  );
}

export default function DFHeader({ currentPage = "df" }: { currentPage?: DFPageKey }) {
  const navItems = getNavItems(currentPage);
  const message = getDefaultMessage(currentPage);
  const logoHref = currentPage === "df" ? "#topo" : "/df";

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-ink">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 sm:gap-4 px-3.5 sm:px-6 lg:h-16 lg:px-8">
        <a
          href={logoHref}
          className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
        >
          <DFLogo />
        </a>

        <nav aria-label="Navegação principal DF e Entorno" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={item.active ? "page" : undefined}
                  className={`text-sm transition-colors ${
                    item.active ? "font-semibold text-signal" : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 xl:gap-4">
          {WHATSAPP_DF_DISPLAY && (
            <a
              href={`tel:+${WHATSAPP_DF}`}
              onClick={() => trackDFPhoneClick(`header_phone_${currentPage}`)}
              className="hidden text-sm font-medium text-white/75 hover:text-white transition-colors xl:inline"
            >
              {WHATSAPP_DF_DISPLAY}
            </a>
          )}
          <span className="hidden sm:inline-flex">
            <DFWhatsAppButton
              message={message}
              location={`header_${currentPage}`}
              size="md"
            >
              Pedir orçamento
            </DFWhatsAppButton>
          </span>
          <a
            href={dfWhatsAppLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackDFWhatsAppClick(`header_mobile_${currentPage}`)}
            className="inline-flex h-9 items-center gap-1.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white px-2.5 font-display text-[11px] font-extrabold uppercase tracking-wide sm:hidden shadow-sm shrink-0"
            aria-label="Pedir orçamento no WhatsApp"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 fill-current shrink-0" />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
