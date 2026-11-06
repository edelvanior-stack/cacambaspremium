import { DF_PRIMARY_REGIONS, DF_SECONDARY_REGIONS, DF_DEFAULT_MESSAGE } from "@/df/config";
import { DFWhatsAppButton, SectionHeader } from "./DFPrimitives";

export default function DFAreas() {
  return (
    <section id="regioes" className="border-b border-line bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Cobertura Geográfica"
          title="Atendimento em Brasília e diversas regiões do DF"
          lead="Disponibilizamos caçambas para obras residenciais e comerciais no Distrito Federal. A confirmação de entrega depende da rota e das condições de acesso do local."
        />

        {/* 1. Regiões Principais (Maior Volume de Obras) */}
        <div className="mt-12">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-iron">
              Regiões Principais · Alta Demanda
            </h3>
            <span className="text-[11px] font-medium text-mist">
              {DF_PRIMARY_REGIONS.length} regiões em destaque
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
            {DF_PRIMARY_REGIONS.map((region) => (
              <div
                key={region.name}
                className="group relative flex flex-col justify-between rounded-xl border border-line bg-concrete p-4 transition-all duration-150 hover:border-ink hover:bg-white hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-[11px] font-extrabold uppercase tracking-wider text-signal-strong">
                    DF
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                </div>
                <span className="mt-4 font-display text-sm font-bold uppercase tracking-tight text-ink group-hover:text-black sm:text-base">
                  {region.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Demais Regiões Atendidas */}
        <div className="mt-10">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-iron">
              Outras Regiões Atendidas
            </h3>
            <span className="text-[11px] font-medium text-mist">
              {DF_SECONDARY_REGIONS.length} regiões adicionais
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5">
            {DF_SECONDARY_REGIONS.map((region) => (
              <div
                key={region.name}
                className="group flex items-center justify-between rounded-lg border border-line/70 bg-white px-3.5 py-3 transition-colors hover:border-iron"
              >
                <span className="text-xs font-semibold text-iron group-hover:text-ink">
                  {region.name}
                </span>
                <span className="font-mono text-[10px] text-mist">DF</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bloco: Entorno do DF e Demais Regiões com botão verde ao final da seção */}
        <div className="mt-10 rounded-xl border border-line/80 bg-concrete/60 p-5 sm:p-6">
          <p className="text-sm font-medium leading-relaxed text-ink">
            Também atendemos o Entorno do DF, como Valparaíso de Goiás, Cidade Ocidental, Novo Gama, Águas Lindas de Goiás, Luziânia e Santo Antônio do Descoberto, sob consulta de endereço.
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-6 rounded-2xl border border-line bg-concrete p-6 sm:flex-row sm:p-8">
          <div>
            <p className="font-display text-lg font-bold uppercase tracking-tight text-ink sm:text-xl">
              Não encontrou sua região?
            </p>
            <p className="mt-1 text-sm text-iron">
              Atendemos condomínios e outras áreas do Distrito Federal sob consulta prévia de endereço.
            </p>
          </div>
          <DFWhatsAppButton
            message={DF_DEFAULT_MESSAGE}
            location="areas_bottom"
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
