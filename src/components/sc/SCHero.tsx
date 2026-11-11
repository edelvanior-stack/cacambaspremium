import { SC_HERO_MESSAGE, SC_HERO_CITIES_LINE, SC_PRICE_DISCLAIMER } from "@/sc/config";
import { SCWhatsAppButton } from "./SCPrimitives";

export default function SCHero() {
  return (
    <section id="topo" aria-labelledby="sc-h1" className="relative isolate overflow-hidden bg-ink text-white">
      {/* Background picture optimized with mobile & desktop WebP */}
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet="/images/sc/sc-hero-mobile.webp"
          width={460}
          height={640}
          type="image/webp"
        />
        <img
          src="/images/sc/sc-hero.webp"
          alt="Aluguel de Caçamba em Santa Catarina - Caçambas Premium"
          width={1376}
          height={768}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_35%] sm:object-center"
        />
      </picture>

      {/* Dark overlay for high contrast */}
      <div
        className="absolute inset-0 -z-10 bg-slate-950/80 sm:bg-slate-950/75"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8 pt-4 pb-6 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-18">
        <div className="max-w-3xl">
          {/* 1. H1 Obrigatório — Aluguel de Caçamba em Santa Catarina */}
          <h1
            id="sc-h1"
            className="font-display font-extrabold text-[1.45rem] min-[360px]:text-[1.65rem] sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase leading-[1.1] mb-2.5 sm:mb-4 tracking-tight"
          >
            Aluguel de Caçamba em <span className="text-signal">Santa Catarina</span>
          </h1>

          {/* 2. Destaque Principal — Caçambas a partir de R$199,99 */}
          <div className="mb-3 sm:mb-5 rounded-xl sm:rounded-2xl border-2 border-signal bg-black/70 px-3.5 py-2.5 sm:px-5 sm:py-4 shadow-[0_8px_24px_rgba(0,0,0,0.4)] inline-block w-full sm:w-auto">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <span className="font-display text-sm min-[360px]:text-base sm:text-2xl font-extrabold uppercase tracking-wide text-white">
                Caçambas a partir de
              </span>
              <span className="font-display text-2xl min-[360px]:text-[1.75rem] sm:text-4xl font-extrabold tracking-tight text-signal">
                R$199,99
              </span>
            </div>
            <p className="mt-1 text-white/95 text-xs sm:text-base font-medium leading-snug">
              Consulte disponibilidade e valor para sua região.
            </p>
            <p className="mt-1 text-[11px] sm:text-xs text-white/75 leading-snug">
              {SC_PRICE_DISCLAIMER}
            </p>
          </div>

          {/* 3. Regiões atendidas visíveis antes/junto ao CTA */}
          <p className="text-xs sm:text-sm font-semibold leading-snug text-white/95 bg-black/50 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-white/15 mb-3.5 sm:mb-5">
            {SC_HERO_CITIES_LINE}
          </p>

          {/* 4. CTA Principal — Pedir Orçamento no WhatsApp */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <SCWhatsAppButton
              message={SC_HERO_MESSAGE}
              contextEvent="sc_hero_whatsapp"
              label="hero_primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Pedir Orçamento no WhatsApp
            </SCWhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
