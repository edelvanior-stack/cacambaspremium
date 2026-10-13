import { DF_ACTIVE_REGIONS, DF_MESSAGES } from "@/df/config";
import { DFWhatsAppButton, SectionHeader } from "./DFPrimitives";

export default function DFAreas() {
  return (
    <section id="regioes" className="border-b border-line bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Cobertura Geográfica"
          title="Atendimento em Brasília e diversas regiões do DF"
          lead="Disponibilizamos caçambas para obras residenciais e comerciais em várias regiões administrativas do Distrito Federal. A confirmação de entrega depende das condições do local e da logística do dia."
        />

        {/* Grade de regiões */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-3.5">
          {DF_ACTIVE_REGIONS.map((region) => (
            <div
              key={region.name}
              className="group flex flex-col justify-between rounded-[3px] border border-line bg-concrete p-4 transition-colors hover:border-iron hover:bg-white"
            >
              <span className="font-display text-xs font-bold uppercase tracking-wider text-mist">
                DF
              </span>
              <span className="mt-3 text-sm font-semibold text-ink group-hover:text-black">
                {region.name}
              </span>
            </div>
          ))}
        </div>

        {/* Não encontrou sua região? */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[4px] border border-line bg-concrete p-6 sm:flex-row sm:p-8">
          <div>
            <p className="font-display text-lg font-bold uppercase tracking-tight text-ink sm:text-xl">
              Não encontrou sua região na lista?
            </p>
            <p className="mt-1 text-sm text-iron">
              Atendemos condomínios e outras áreas do Distrito Federal sob consulta prévia de endereço.
            </p>
          </div>
          <DFWhatsAppButton
            message={DF_MESSAGES.region}
            event="whatsapp_region"
            location="areas_bottom"
            variant="dark"
            size="md"
            className="w-full shrink-0 sm:w-auto"
          >
            Consultar meu endereço
          </DFWhatsAppButton>
        </div>
      </div>
    </section>
  );
}
