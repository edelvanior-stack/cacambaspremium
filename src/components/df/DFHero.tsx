import { DF_DEFAULT_MESSAGE, WHATSAPP_DF } from "@/df/config";
import { trackDFPhoneClick } from "@/df/analytics";
import { DFAnchorButton, DFWhatsAppButton, PhoneIcon } from "./DFPrimitives";

const TRUST = [
  "A partir de R$ 199,99",
  "Caçamba de 3m³",
  "Brasília e DF",
  "Entorno do DF",
  "Permanência conforme regras locais",
  "Entrega e retirada pontuais",
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
          alt="Aluguel de Caçamba em Brasília e DF - Caçambas Premium"
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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-8 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 mb-2.5 sm:mb-4 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
              Atendimento pelo WhatsApp
            </span>
          </div>

          {/* H1 Oficial Obrigatório */}
          <h1
            id="df-h1"
            className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.12] mb-2 sm:mb-3 tracking-tight"
          >
            Aluguel de{" "}
            <span className="text-signal">Caçamba</span>{" "}
            em Brasília e DF
          </h1>

          {/* Linha de apoio logo abaixo do H1 */}
          <p className="text-signal font-display font-bold text-sm sm:text-lg md:text-xl mb-2.5 sm:mb-4 tracking-tight">
            Disk Entulho e aluguel de caçamba em Brasília e em todo o DF.
          </p>

          {/* Linha abaixo com medida, orçamento, permanência e regiões */}
          <p className="text-white/95 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 font-medium bg-black/45 p-3 sm:p-4 rounded-xl border border-white/10">
            Caçamba de 3m³ | Caçambas a partir de R$ 199,99 | Permanência conforme legislação do DF | Atendemos Brasília, Plano Piloto, Águas Claras, Taguatinga, Ceilândia, Samambaia, Guará e região, incluindo o Entorno do DF
          </p>

          {/* Botão verde do Hero - largura total no mobile e min-h-[56px], com botão secundário "Ligar agora" */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-4 mb-5 sm:mb-8">
            <DFWhatsAppButton
              message={DF_DEFAULT_MESSAGE}
              location="hero_primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Pedir orçamento no WhatsApp
            </DFWhatsAppButton>
            <div className="grid grid-cols-2 gap-2.5 sm:contents">
              <a
                href={`tel:+${WHATSAPP_DF}`}
                onClick={() => trackDFPhoneClick("hero_phone")}
                className="group inline-flex h-12 sm:h-14 min-h-[48px] sm:min-h-[56px] w-full sm:w-auto items-center justify-center gap-2 rounded-xl sm:rounded-2xl border border-white/35 bg-white/10 hover:border-white hover:bg-white/15 px-3 sm:px-6 font-display text-xs sm:text-base font-extrabold uppercase tracking-wide text-white transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white select-none cursor-pointer"
              >
                <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>Ligar agora</span>
              </a>
              <DFAnchorButton
                href="#regioes"
                size="lg"
                className="w-full sm:w-auto !h-12 sm:!h-14 !min-h-[48px] sm:!min-h-[56px] !px-3 sm:!px-6 !text-xs sm:!text-base"
              >
                Ver Regiões Atendidas
              </DFAnchorButton>
            </div>
          </div>

          {/* Destaques rápidos */}
          <div className="flex flex-wrap gap-1.5 sm:gap-3">
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
        </div>
      </div>
    </section>
  );
}
