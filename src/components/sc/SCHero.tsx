import { SC_HERO_MESSAGE, SC_HERO_CITIES_LINE } from "@/sc/config";
import { SCAnchorButton, SCWhatsAppButton } from "./SCPrimitives";

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
          alt="Aluguel de Caçamba em Camboriú e Região - Caçambas Premium"
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
        className="absolute inset-0 -z-10 bg-slate-950/82 sm:bg-slate-950/76"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-8 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 border border-white/10">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
              Atendimento em Camboriú e Região • WhatsApp
            </span>
          </div>

          {/* 1. H1 Obrigatório */}
          <h1
            id="sc-h1"
            className="font-display font-extrabold text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.12] mb-3 sm:mb-4 tracking-tight"
          >
            Aluguel de <span className="text-signal">Caçamba</span> em Camboriú e Região
          </h1>

          {/* Subtítulo Obrigatório */}
          <p className="text-white/95 text-sm sm:text-lg md:text-xl leading-relaxed mb-5 sm:mb-7 font-medium max-w-2xl">
            Caçambas para obras, reformas e retirada de entulho com atendimento em Camboriú, Balneário Camboriú, Itajaí e região.
          </p>

          {/* CTAs Principal e Secundário */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-7">
            <SCWhatsAppButton
              message={SC_HERO_MESSAGE}
              contextEvent="sc_hero_whatsapp"
              label="hero_primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Consultar Disponibilidade no WhatsApp
            </SCWhatsAppButton>

            <SCAnchorButton
              href="#servicos"
              size="lg"
              className="w-full sm:w-auto !h-12 sm:!h-14 !min-h-[48px] sm:!min-h-[56px]"
            >
              Ver Serviços
            </SCAnchorButton>
          </div>

          {/* Linha de cidades abaixo do CTA */}
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-signal/95 bg-black/45 px-3.5 py-2.5 rounded-xl border border-white/10 inline-block">
            {SC_HERO_CITIES_LINE}
          </p>
        </div>
      </div>
    </section>
  );
}
