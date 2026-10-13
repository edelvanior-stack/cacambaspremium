import { DF_MATERIALS } from "@/df/config";
import { SectionHeader } from "./DFPrimitives";

export default function DFMaterials() {
  return (
    <section id="materiais" className="border-b border-line bg-concrete py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Materiais Aceitos"
          title="O que você precisa retirar?"
          lead="Confira os resíduos comuns de construção civil e reforma recebidos em nossas caçambas no Distrito Federal."
        />

        <div className="mt-12 grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 sm:gap-4">
          {DF_MATERIALS.map((material, idx) => (
            <div
              key={material}
              className="flex flex-col justify-between rounded-[3px] border border-line bg-white p-5 transition-colors hover:border-iron"
            >
              <span className="font-mono text-xs font-semibold text-mist">
                #{String(idx + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 font-display text-base font-bold uppercase tracking-tight text-ink">
                {material}
              </p>
            </div>
          ))}
        </div>

        {/* Aviso de conformidade / resíduos perigosos */}
        <div className="mt-10 rounded-[4px] border-l-4 border-signal bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-signal text-xs font-black text-ink" aria-hidden="true">
              !
            </span>
            <div className="text-sm leading-relaxed text-iron">
              <strong className="font-semibold text-ink">Aviso sobre triagem e destinação:</strong>{" "}
              Alguns resíduos possuem regras específicas de acondicionamento e destinação. Consulte nossa equipe antes da contratação.{" "}
              <span className="block mt-1 text-xs text-mist">
                Não é permitido o descarte de resíduos químicos, baterias, óleos, tintas automotivas, lixo hospitalar ou quaisquer materiais classificados como perigosos.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
