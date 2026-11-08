import type { ReactNode } from "react";
import { SC_HERO_MESSAGE } from "@/sc/config";
import { scWhatsAppLink } from "@/sc/whatsapp";
import { trackSCWhatsAppClick, type SCContextEvent } from "@/sc/analytics";

export const WA_PATH =
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

type Variant = "green" | "outlineLight" | "outlineDark" | "dark";

const VARIANTS: Record<Variant, string> = {
  green:
    "bg-[#25D366] hover:bg-[#20BD5A] text-white active:bg-[#1DA851] focus-visible:outline-[#25D366] shadow-[0_4px_16px_rgba(37,211,102,0.3)]",
  dark: "bg-ink text-white hover:bg-steel focus-visible:outline-ink",
  outlineLight:
    "border border-white/35 bg-white/10 text-white hover:border-white hover:bg-white/15 focus-visible:outline-white",
  outlineDark:
    "border border-ink/25 bg-white text-ink hover:border-[#25D366] hover:bg-[#25D366] hover:text-white focus-visible:outline-[#25D366]",
};

const BASE =
  "group inline-flex items-center justify-center gap-2 sm:gap-2.5 rounded-xl sm:rounded-2xl font-display font-extrabold uppercase tracking-wide transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 select-none cursor-pointer text-center";

const SIZES = {
  md: "h-12 min-h-[48px] px-4 sm:px-5 text-xs sm:text-sm",
  lg: "h-14 min-h-[56px] px-5 sm:px-8 text-xs sm:text-base",
} as const;

interface SCWhatsAppButtonProps {
  message?: string;
  contextEvent?: SCContextEvent;
  label: string;
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof SIZES;
  icon?: boolean;
  className?: string;
  extra?: Record<string, string>;
}

export function SCWhatsAppButton({
  message = SC_HERO_MESSAGE,
  contextEvent = "sc_quote_click",
  label,
  children,
  variant = "green",
  size = "lg",
  icon = true,
  className = "",
  extra,
}: SCWhatsAppButtonProps) {
  return (
    <a
      href={scWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackSCWhatsAppClick(contextEvent, label, extra)}
      className={`${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`}
    >
      {icon && <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 fill-current" />}
      <span>{children}</span>
    </a>
  );
}

export function SCAnchorButton({
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
      <p
        className={`eyebrow flex items-center gap-2.5 ${
          align === "center" ? "justify-center" : ""
        } ${dark ? "text-signal" : "text-iron"}`}
      >
        <span className="inline-block h-px w-7 bg-current" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`display mt-3 text-[1.75rem] leading-[1.08] sm:text-[2.5rem] lg:text-[3rem] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-4 text-sm leading-relaxed sm:text-base lg:text-lg ${dark ? "text-white/75" : "text-iron"}`}>
          {lead}
        </p>
      )}
    </header>
  );
}
