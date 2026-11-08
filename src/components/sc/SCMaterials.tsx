import { SC_MATERIALS, scMaterialMessage } from "@/sc/config";
import { scWhatsAppLink } from "@/sc/whatsapp";
import { trackSCWhatsAppClick } from "@/sc/analytics";
import { SCWhatsAppButton, SectionHeader, WhatsAppIcon } from "./SCPrimitives";

export default function SCMaterials() {
  return (
    <section id="materiais" className="border-b border-line bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tipos de Resíduos"
          title="Materiais atendidos e sob consulta"
          lead="Verifique o tipo de resíduo gerado na sua obra ou reforma. Materiais específicos passam por confirmação prévia antes do envio da caçamba."
        />

        <div className="mt-10 grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {SC_MATERIALS.map((item, idx) => {
            const isConsulta = item.status === "consulta";
            return (
              <a
                key={item.name}
                href={scWhatsAppLink(scMaterialMessage(item.name))}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackSCWhatsAppClick("sc_material_click", `material_${idx + 1}`, {
                    material_name: item.name,
                  })
                }
                className="group flex flex-col justify-between rounded-xl border border-line bg-concrete p-4 sm:p-5 transition-all duration-150 hover:border-[#25D366] hover:bg-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        isConsulta
                          ? "bg-signal/25 text-ink"
                          : "bg-emerald-500/15 text-emerald-900"
                      }`}
                    >
                      {isConsulta ? "Sob consulta" : "Obra / Reforma"}
                    </span>
                    <WhatsAppIcon className="h-4 w-4 text-iron group-hover:text-[#25D366] fill-current shrink-0" />
                  </div>

                  <h3 className="display mt-3.5 text-base sm:text-lg font-extrabold uppercase tracking-tight text-ink">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-iron">
                    {item.note}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-ink group-hover:text-[#25D366]">
                  <span>Consultar Material</span>
                  <span aria-hidden="true">→</span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-8 rounded-xl border border-line bg-concrete p-4 sm:p-5 text-xs sm:text-sm text-iron">
          <strong className="font-bold text-ink">Importante:</strong> Não realizamos aceitação automática de resíduos especiais, químicos, hospitalares, inflamáveis ou contaminantes. Em caso de dúvida sobre misturas de materiais, consulte antes pelo WhatsApp.
        </div>

        <div className="mt-8 flex justify-center">
          <SCWhatsAppButton
            message={scMaterialMessage("resíduos da minha obra")}
            contextEvent="sc_material_click"
            label="materials_section_cta"
            size="lg"
            className="w-full sm:w-auto"
          >
            Consultar Material
          </SCWhatsAppButton>
        </div>
      </div>
    </section>
  );
}
