import { DF_DEFAULT_MESSAGE, WHATSAPP_DF } from "@/df/config";
import { trackDFPhoneClick } from "@/df/analytics";
import { DFAnchorButton, DFWhatsAppButton, PhoneIcon } from "./DFPrimitives";

const TRUST = [
  "A partir de R$ 199,99",
  "Caçambas de 3m³ a 10m³",
  "Obras, reformas e construções",
  "Brasília, DF e Entorno",
  "Retirada e destinação adequada",
  "Permanência conforme regras locais",
];

export default function DFHero() {
  return (
    <section id="topo" aria-labelledby="df-h1" className="relative isolate overflow-hidden bg-ink text-white">
      {/* Background picture optimized with mobile & desktop WebP */}
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet="/images/df/df-hero-mobile.webp"
          width={460}
          height={640}
          type="image/webp"
        />
        <img
          src="/images/df/df-hero.webp"
          alt="Aluguel de caçamba de entulho em Brasília e DF para obras e reformas - Caçambas Premium"
          width={1376}
          height={768}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_35%] sm:object-center"
        />
      </picture>

      {/* Dark overlay for contrast */}
      <div
        className="absolute inset-0 -z-10 bg-slate-950/80 sm:bg-slate-950/75"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-8 sm:pt-14 sm:pb-16 md:pt-18 md:pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 mb-2.5 sm:mb-4 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
              Disk Entulho DF · Orçamento rápido pelo WhatsApp
            </span>
          </div>

          {/* H1 Oficial */}
          <h1
            id="df-h1"
            className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.12] mb-2 sm:mb-3 tracking-tight"
          >
            Aluguel de{" "}
            <span className="text-signal">Caçamba de Entulho</span>{" "}
            em Brasília e DF
          </h1>

          {/* Linha de apoio logo abaixo do H1 */}
          <p className="text-signal font-display font-bold text-sm sm:text-lg md:text-xl mb-2.5 sm:mb-4 tracking-tight">
            Disk Entulho e locação de caçamba no DF para obras, reformas e construções.
          </p>

          {/* Linha com oferta, medidas, destinação e cobertura DF + Entorno */}
          <p className="text-white/95 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 font-medium bg-black/45 p-3 sm:p-4 rounded-xl border border-white/10">
            Caçamba de 3m³ a 10m³ a partir de R$ 199,99 | Retirada e destinação adequada de entulho | Permanência conforme legislação do DF | Atendemos Brasília, Plano Piloto, Águas Claras, Taguatinga, Ceilândia, Samambaia, Guará e região, incluindo o Entorno do DF
          </p>

          {/* CTAs principais */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-4 mb-5 sm:mb-7">
            <DFWhatsAppButton
              message={DF_DEFAULT_MESSAGE}
              location="hero_primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Pedir orçamento no WhatsApp
            </DFWhatsAppButton>
            <div className="grid grid-cols-2 gap-2 sm:contents">
              <a
                href={`tel:+${WHATSAPP_DF}`}
                onClick={() => trackDFPhoneClick("hero_phone")}
                className="group inline-flex h-12 sm:h-14 min-h-[48px] sm:min-h-[56px] w-full sm:w-auto items-center justify-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl border border-white/35 bg-white/10 hover:border-white hover:bg-white/15 px-2 min-[360px]:px-3 sm:px-6 font-display text-[11px] min-[360px]:text-xs sm:text-base font-extrabold uppercase tracking-wide text-white transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white select-none cursor-pointer text-center"
              >
                <PhoneIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
                <span>Ligar agora</span>
              </a>
              <DFAnchorButton
                href="#valores"
                size="lg"
                className="w-full sm:w-auto !h-12 sm:!h-14 !min-h-[48px] sm:!min-h-[56px] !px-2 min-[360px]:!px-3 sm:!px-6 !text-[11px] min-[360px]:!text-xs sm:!text-base"
              >
                Ver Valores
              </DFAnchorButton>
            </div>
          </div>

          {/* Destaques rápidos */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2.5 mb-4">
            {TRUST.map((item) => (
              <div
                key={item}
                className="flex items-center gap-1.5 sm:gap-2 bg-white/10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/5 text-white/90 text-[11px] sm:text-xs font-medium"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Atalhos diretos para páginas dedicadas do Hub DF */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/80">
            <a href="/valor/orcamento" className="underline decoration-signal/70 underline-offset-4 hover:text-signal transition-colors">
              Guia de valores e orçamento →
            </a>
            <a href="/entorno/cacamba" className="underline decoration-signal/70 underline-offset-4 hover:text-signal transition-colors">
              Atendimento no Entorno do DF →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
