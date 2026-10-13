import { DF_MESSAGES } from "@/df/config";
import { DFAnchorButton, DFWhatsAppButton } from "./DFPrimitives";

const TRUST = ["Atendimento no DF", "Entrega e retirada", "Orçamento rápido", "Destinação responsável"];

export default function DFHero() {
  return (
    <section id="topo" aria-labelledby="df-h1" className="relative isolate overflow-hidden bg-ink text-white">
      <picture>
        <source media="(max-width: 767px)" srcSet="/images/df/df-hero-mobile.webp" width={640} height={800} type="image/webp" />
        <img
          src="/images/df/df-hero.webp"
          alt="Caçamba de entulho posicionada em rua residencial de Brasília"
          width={1376}
          height={768}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
      </picture>
      {/* Overlays para legibilidade: vertical no mobile, lateral no desktop */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(12,13,15,0.82)_0%,rgba(12,13,15,0.72)_45%,rgba(12,13,15,0.92)_100%)] md:bg-[linear-gradient(90deg,rgba(12,13,15,0.94)_0%,rgba(12,13,15,0.82)_38%,rgba(12,13,15,0.25)_75%,rgba(12,13,15,0.1)_100%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-5 pb-10 pt-10 sm:pt-14 md:pb-0 md:pt-24 lg:px-8 lg:pt-28">
        <div className="max-w-[42rem] lg:max-w-[46rem]">
          <p className="eyebrow flex items-center gap-3 text-signal">
            <span className="inline-block h-px w-8 bg-current" aria-hidden="true" />
            Aluguel de caçambas · Distrito Federal
          </p>

          <h1 id="df-h1" className="display mt-5 text-[2rem] leading-[1.04] sm:text-[3rem] lg:text-[3.75rem] xl:text-[4.125rem]">
            Caçamba de Entulho em Brasília e Todo o DF
          </h1>

          <p className="mt-5 max-w-[36rem] text-base leading-relaxed text-white/80 sm:text-lg">
            Entrega rápida para obras, reformas e limpezas.{" "}
            <span className="text-white">
              Informe seu endereço e receba disponibilidade e orçamento pelo WhatsApp.
            </span>
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <DFWhatsAppButton
              message={DF_MESSAGES.hero}
              event="whatsapp_hero"
              location="hero"
              size="lg"
              className="w-full sm:w-auto shadow-[0_4px_20px_rgba(255,196,0,0.25)]"
            >
              Pedir caçamba pelo WhatsApp
            </DFWhatsAppButton>
            <DFAnchorButton href="#consulta" size="lg" className="w-full sm:w-auto">
              Consultar minha região
            </DFAnchorButton>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="border-t border-white/10 md:mt-24 lg:mt-28">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
          {TRUST.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 bg-ink/90 px-5 py-4 text-[0.8125rem] font-medium text-white/85 sm:text-sm md:bg-ink/75 md:py-6 md:backdrop-blur-sm lg:px-8"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal" aria-hidden="true">
                <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 6.2l2.5 2.3L10 3.2" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
