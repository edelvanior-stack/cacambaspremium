import { useState, type FormEvent } from "react";
import { DF_ACTIVE_REGIONS, DF_MATERIALS, quickQuoteMessage } from "@/df/config";
import { dfWhatsAppLink } from "@/df/whatsapp";
import { trackDF } from "@/df/analytics";
import { SectionHeader, WhatsAppIcon } from "./DFPrimitives";

export default function DFQuickQuote() {
  const [regiao, setRegiao] = useState(DF_ACTIVE_REGIONS[0]?.name || "");
  const [bairro, setBairro] = useState("");
  const [material, setMaterial] = useState(DF_MATERIALS[0] || "");
  const [data, setData] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let dataFormatada = "A combinar";
    if (data) {
      const parts = data.split("-");
      if (parts.length === 3) {
        dataFormatada = `${parts[2]}/${parts[1]}/${parts[0]}`;
      } else {
        dataFormatada = data;
      }
    }

    const message = quickQuoteMessage({
      regiao: regiao.trim() || "A informar",
      bairro: bairro.trim() || "A informar",
      material: material.trim() || "A informar",
      data: dataFormatada,
    });

    trackDF("whatsapp_region", "quick_quote_form");
    window.open(dfWhatsAppLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="consulta" className="relative border-b border-line bg-concrete py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Consulta Rápida"
            title="Veja se atendemos sua região"
            lead="Informe sua localização e os detalhes da obra para receber disponibilidade e orçamento direto no WhatsApp."
            align="center"
          />

          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-[4px] border border-line bg-white p-6 shadow-[0_4px_24px_rgba(12,13,15,0.04)] sm:p-8 lg:p-10"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              {/* Região Administrativa */}
              <div>
                <label htmlFor="df-regiao" className="block text-xs font-bold uppercase tracking-wider text-iron">
                  Região administrativa
                </label>
                <div className="relative mt-2">
                  <select
                    id="df-regiao"
                    value={regiao}
                    onChange={(e) => setRegiao(e.target.value)}
                    required
                    className="w-full appearance-none rounded-[3px] border border-line bg-concrete px-4 py-3.5 text-sm font-medium text-ink transition-colors focus:border-ink focus:bg-white focus:outline-none"
                  >
                    {DF_ACTIVE_REGIONS.map((r) => (
                      <option key={r.name} value={r.name}>
                        {r.name}
                      </option>
                    ))}
                    <option value="Outra região do DF">Outra região do DF</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-iron" aria-hidden="true">
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bairro / Quadra */}
              <div>
                <label htmlFor="df-bairro" className="block text-xs font-bold uppercase tracking-wider text-iron">
                  Bairro ou quadra
                </label>
                <input
                  id="df-bairro"
                  type="text"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                  placeholder="Ex: SQN 308, QNA, Av. Castanheiras"
                  required
                  className="mt-2 w-full rounded-[3px] border border-line bg-concrete px-4 py-3.5 text-sm font-medium text-ink transition-colors placeholder:text-mist focus:border-ink focus:bg-white focus:outline-none"
                />
              </div>

              {/* Tipo de Material */}
              <div>
                <label htmlFor="df-material" className="block text-xs font-bold uppercase tracking-wider text-iron">
                  Tipo de material
                </label>
                <div className="relative mt-2">
                  <select
                    id="df-material"
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    required
                    className="w-full appearance-none rounded-[3px] border border-line bg-concrete px-4 py-3.5 text-sm font-medium text-ink transition-colors focus:border-ink focus:bg-white focus:outline-none"
                  >
                    {DF_MATERIALS.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-iron" aria-hidden="true">
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Data Desejada */}
              <div>
                <label htmlFor="df-data" className="block text-xs font-bold uppercase tracking-wider text-iron">
                  Data desejada <span className="font-normal lowercase text-mist">(opcional)</span>
                </label>
                <input
                  id="df-data"
                  type="date"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  className="mt-2 w-full rounded-[3px] border border-line bg-concrete px-4 py-3.5 text-sm font-medium text-ink transition-colors focus:border-ink focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
              <span className="text-xs text-mist text-center sm:text-left">
                Sem cadastro longo. Resposta direta com orçamento no WhatsApp.
              </span>
              <button
                type="submit"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-[3px] bg-signal px-7 py-4 font-display text-sm font-bold uppercase tracking-[0.06em] text-ink transition-colors hover:bg-signal-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal select-none [font-stretch:92%]"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                <span>Consultar disponibilidade</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
