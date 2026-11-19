import {
  DF_PRIMARY_REGIONS,
  DF_SECONDARY_REGIONS,
  DF_ENTORNO_CITIES,
  DF_DEFAULT_MESSAGE,
  cityWhatsAppMessage,
} from "@/df/config";
import { dfWhatsAppLink } from "@/df/whatsapp";
import { trackDFWhatsAppClick } from "@/df/analytics";
import { DFWhatsAppButton, SectionHeader, WhatsAppIcon } from "./DFPrimitives";

export default function DFAreas() {
  return (
    <section id="regioes" className="border-b border-line bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Cobertura Geográfica"
          title="Aluguel de caçamba em Brasília, DF e Entorno"
          lead="Atendemos obras residenciais, reformas e construções nas Regiões Administrativas do Distrito Federal e cidades do Entorno. A confirmação de entrega depende da rota e das condições de acesso do endereço."
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
              Outras Regiões Atendidas no DF
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

        {/* 3. Bloco dedicado ao Entorno do DF com links diretos */}
        <div className="mt-10 rounded-2xl border border-line bg-concrete/70 p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end border-b border-line pb-4">
            <div>
              <span className="eyebrow text-iron">Entorno do DF · Sob Consulta de Endereço</span>
              <h3 className="display mt-2 text-xl font-extrabold uppercase tracking-tight text-ink sm:text-2xl">
                Disk Entulho e Caçamba no Entorno do DF
              </h3>
            </div>
            <a
              href="/entorno/cacamba"
              className="shrink-0 font-display text-xs sm:text-sm font-extrabold uppercase tracking-wide text-ink underline decoration-signal decoration-2 underline-offset-4 hover:text-black"
            >
              Ver página do Entorno do DF →
            </a>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {DF_ENTORNO_CITIES.map((city) => (
              <a
                key={city.slug}
                href={dfWhatsAppLink(cityWhatsAppMessage(city.name))}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackDFWhatsAppClick(`df_areas_entorno_${city.slug}`)}
                className="group flex items-center justify-between rounded-xl border border-line bg-white px-4 py-3.5 transition-all hover:border-[#25D366] hover:shadow-sm"
                aria-label={`Solicitar orçamento de caçamba em ${city.name} pelo WhatsApp`}
              >
                <div>
                  <span className="block font-display text-sm font-bold uppercase tracking-tight text-ink">
                    {city.name}
                  </span>
                  <span className="text-[11px] text-iron">{city.keywordTitle}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-iron group-hover:text-[#25D366] shrink-0">
                  <WhatsAppIcon className="h-3.5 w-3.5 fill-current" />
                  <span>Cotar</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-6 rounded-2xl border border-line bg-concrete p-6 sm:flex-row sm:p-8">
          <div>
            <p className="font-display text-lg font-bold uppercase tracking-tight text-ink sm:text-xl">
              Não encontrou sua região?
            </p>
            <p className="mt-1 text-sm text-iron">
              Atendemos condomínios, áreas residenciais e comerciais do Distrito Federal e Entorno sob consulta prévia de endereço.
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
