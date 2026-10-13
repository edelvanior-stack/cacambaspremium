import { useState, useRef, type FormEvent } from "react";
import { DF_ACTIVE_REGIONS, DF_MATERIALS, quickQuoteMessage } from "@/df/config";
import { dfWhatsAppLink } from "@/df/whatsapp";
import { trackDF } from "@/df/analytics";
import { SectionHeader, WhatsAppIcon } from "./DFPrimitives";

export default function DFQuickQuote() {
  const [regiao, setRegiao] = useState(DF_ACTIVE_REGIONS[0]?.name || "");
  const [bairro, setBairro] = useState("");
  const [material, setMaterial] = useState(DF_MATERIALS[0] || "");
  const [data, setData] = useState("");
  const startedTrackingRef = useRef(false);

  const handleStart = () => {
    if (!startedTrackingRef.current) {
      startedTrackingRef.current = true;
      trackDF("region_check_start", "quick_quote_tool");
    }
  };

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

    const regiaoFinal = regiao.trim() || "A informar";
    const materialFinal = material.trim() || "A informar";

    const message = quickQuoteMessage({
      regiao: regiaoFinal,
      bairro: bairro.trim() || "A informar",
      material: materialFinal,
      data: dataFormatada,
    });

    trackDF("region_check_submit", "quick_quote_tool", {
      regiao: regiaoFinal,
      material: materialFinal,
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
            lead="Consulte sua região em poucos segundos. Informe sua localização e os detalhes da obra para receber disponibilidade e orçamento direto no WhatsApp."
            align="center"
          />

          {/* Ferramenta de Consulta */}
          <div className="mt-10 overflow-hidden rounded-[4px] border border-line bg-white shadow-[0_4px_24px_rgba(12,13,15,0.06)]">
            {/* Header da Ferramenta */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-ink px-6 py-3.5 text-white">
              <div className="flex items-center gap-2.5">
                <span className="flex h-2 w-2 rounded-full bg-signal animate-pulse" aria-hidden="true" />
                <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-signal">
                  Consulta de Disponibilidade DF
                </span>
              </div>
              <span className="text-xs font-medium text-white/70">
                Consulte sua região em poucos segundos.
              </span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                {/* 01 Região Administrativa */}
                <div>
                  <label htmlFor="df-regiao" className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-iron">
                    <span>Região administrativa</span>
                    <span className="font-mono text-[10px] text-mist">01</span>
                  </label>
                  <div className="relative mt-2">
                    <select
                      id="df-regiao"
                      value={regiao}
                      onFocus={handleStart}
                      onChange={(e) => {
                        handleStart();
                        setRegiao(e.target.value);
                      }}
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

                {/* 02 Bairro / Quadra */}
                <div>
                  <label htmlFor="df-bairro" className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-iron">
                    <span>Bairro ou quadra</span>
                    <span className="font-mono text-[10px] text-mist">02</span>
                  </label>
                  <input
                    id="df-bairro"
                    type="text"
                    value={bairro}
                    onFocus={handleStart}
                    onChange={(e) => setBairro(e.target.value)}
                    placeholder="Ex: SQN 308, QNA, Av. Castanheiras"
                    required
                    className="mt-2 w-full rounded-[3px] border border-line bg-concrete px-4 py-3.5 text-sm font-medium text-ink transition-colors placeholder:text-mist focus:border-ink focus:bg-white focus:outline-none"
                  />
                </div>

                {/* 03 Tipo de Material */}
                <div>
                  <label htmlFor="df-material" className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-iron">
                    <span>Tipo de material</span>
                    <span className="font-mono text-[10px] text-mist">03</span>
                  </label>
                  <div className="relative mt-2">
                    <select
                      id="df-material"
                      value={material}
                      onFocus={handleStart}
                      onChange={(e) => {
                        handleStart();
                        setMaterial(e.target.value);
                      }}
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

                {/* 04 Data Desejada */}
                <div>
                  <label htmlFor="df-data" className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-iron">
                    <span>
                      Data desejada <span className="font-normal lowercase text-mist">(opcional)</span>
                    </span>
                    <span className="font-mono text-[10px] text-mist">04</span>
                  </label>
                  <input
                    id="df-data"
                    type="date"
                    value={data}
                    onFocus={handleStart}
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
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-[3px] bg-signal px-7 py-4 font-display text-sm font-bold uppercase tracking-[0.06em] text-ink transition-colors hover:bg-signal-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal select-none [font-stretch:92%] shadow-sm"
                >
                  <WhatsAppIcon className="h-5 w-5 shrink-0" />
                  <span>CONSULTAR DISPONIBILIDADE</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
