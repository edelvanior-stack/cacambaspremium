import { DF_MESSAGES, WHATSAPP_DF_DISPLAY } from "@/df/config";
import { DFWhatsAppButton } from "./DFPrimitives";

export default function DFFinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-24 lg:py-28">
      {/* Detalhe sutil de grid industrial ao fundo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="eyebrow inline-flex items-center gap-3 text-signal">
          <span className="inline-block h-px w-8 bg-current" aria-hidden="true" />
          Atendimento Direto
          <span className="inline-block h-px w-8 bg-current" aria-hidden="true" />
        </p>

        <h2 className="display mt-5 text-3xl font-extrabold uppercase sm:text-5xl lg:text-6xl text-white">
          Precisa de uma caçamba no DF?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          Envie seu endereço e o tipo de material. Em poucos minutos você recebe disponibilidade e orçamento.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <DFWhatsAppButton
            message={DF_MESSAGES.final}
            event="whatsapp_final"
            location="final_cta"
            variant="signal"
            size="lg"
            className="w-full sm:w-auto"
          >
            Solicitar pelo WhatsApp
          </DFWhatsAppButton>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-2 text-xs font-medium uppercase tracking-wider text-mist sm:flex-row sm:gap-6">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
            Atendimento rápido · Brasília e região
          </span>
          {WHATSAPP_DF_DISPLAY && (
            <span className="text-white/60">
              Contato: {WHATSAPP_DF_DISPLAY}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
