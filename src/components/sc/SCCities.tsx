import { SC_CITIES, scCityMessage } from "@/sc/config";
import { scWhatsAppLink } from "@/sc/whatsapp";
import { trackSCWhatsAppClick } from "@/sc/analytics";
import { SectionHeader, WhatsAppIcon } from "./SCPrimitives";

export default function SCCities() {
  return (
    <section id="cidades" className="border-b border-line bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Cobertura em Santa Catarina"
          title="Cidades e regiões com atendimento"
          lead="Atendemos Camboriú, Balneário Camboriú, Itajaí e municípios vizinhos. Clique na sua cidade para consultar disponibilidade direto no WhatsApp."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SC_CITIES.map((city) => (
            <div
              key={city.name}
              className="flex flex-col justify-between rounded-2xl border border-line bg-concrete p-6 transition-all duration-150 hover:border-ink hover:bg-white hover:shadow-[0_6px_24px_rgba(12,13,15,0.06)]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <span className="eyebrow text-iron">{city.tag}</span>
                  <span className="rounded bg-signal/25 px-2 py-0.5 font-mono text-[10px] font-bold text-ink">
                    SC
                  </span>
                </div>

                <h3 className="display mt-4 text-xl font-extrabold uppercase tracking-tight text-ink">
                  {city.name}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-iron">
                  {city.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-line/60">
                <a
                  href={scWhatsAppLink(scCityMessage(city.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackSCWhatsAppClick("sc_city_click", `city_${city.name}`, {
                      city_name: city.name,
                    })
                  }
                  className="inline-flex w-full min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] active:bg-[#1DA851] px-4 py-3 font-display text-xs sm:text-sm font-extrabold uppercase tracking-wide text-white transition-colors shadow-sm"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 fill-current" />
                  <span>Consultar em {city.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
