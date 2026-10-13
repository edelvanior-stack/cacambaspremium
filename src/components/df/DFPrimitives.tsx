import type { ReactNode } from "react";
import type { DFEvent } from "@/df/config";
import { dfWhatsAppLink } from "@/df/whatsapp";
import { trackDF } from "@/df/analytics";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

export function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d={WA_PATH} />
    </svg>
  );
}

export function ArrowIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

type Variant = "signal" | "light" | "dark" | "outlineLight" | "outlineDark";

const VARIANTS: Record<Variant, string> = {
  signal:
    "bg-signal text-ink hover:bg-signal-strong focus-visible:outline-signal shadow-[0_1px_0_rgba(0,0,0,0.08)]",
  light: "bg-white text-ink hover:bg-concrete focus-visible:outline-white",
  dark: "bg-ink text-white hover:bg-steel focus-visible:outline-ink",
  outlineLight:
    "border border-white/35 text-white hover:border-white hover:bg-white/[0.06] focus-visible:outline-white",
  outlineDark: "border border-ink/25 text-ink hover:border-ink hover:bg-ink/[0.03] focus-visible:outline-ink",
};

const BASE =
  "group inline-flex items-center justify-center gap-2.5 rounded-[3px] font-display font-bold uppercase tracking-[0.06em] [font-stretch:92%] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 select-none";

const SIZES = {
  md: "h-12 px-5 text-[0.8125rem]",
  lg: "h-14 px-6 sm:px-7 text-sm",
} as const;

interface WhatsAppButtonProps {
  message: string;
  event: DFEvent;
  location: string;
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof SIZES;
  icon?: boolean;
  className?: string;
  extraParams?: Record<string, unknown>;
}

/** Botão/link de WhatsApp do DF: usa somente WHATSAPP_DF e dispara 1 evento por clique. */
export function DFWhatsAppButton({
  message,
  event,
  location,
  children,
  variant = "signal",
  size = "lg",
  icon = true,
  className = "",
  extraParams,
}: WhatsAppButtonProps) {
  return (
    <a
      href={dfWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackDF(event, location, extraParams)}
      className={`${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`}
    >
      {icon && <WhatsAppIcon className="w-[18px] h-[18px] shrink-0" />}
      <span>{children}</span>
    </a>
  );
}

/** Link âncora interno com o mesmo visual dos botões. */
export function DFAnchorButton({
  href,
  children,
  variant = "outlineLight",
  size = "lg",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  return (
    <a href={href} className={`${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`}>
      <span>{children}</span>
      <ArrowIcon className="w-4 h-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5" />
    </a>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  tone = "light",
  align = "left",
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  id?: string;
}) {
  const dark = tone === "dark";
  return (
    <header className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow flex items-center gap-3 ${align === "center" ? "justify-center" : ""} ${dark ? "text-signal" : "text-iron"}`}>
        <span className="inline-block h-px w-8 bg-current" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`display mt-4 text-[2rem] leading-[1.02] sm:text-[2.75rem] lg:text-[3.25rem] ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? "text-white/65" : "text-iron"}`}>{lead}</p>
      )}
    </header>
  );
}
