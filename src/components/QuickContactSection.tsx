import { useState, FormEvent } from "react";
import { Send, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/config/business";
import { trackWhatsAppClick } from "@/lib/analytics";

const MATERIAL_OPTIONS = [
  "Entulho de Construção",
  "Reforma",
  "Demolição",
  "Madeira",
  "Outro / Consultar",
] as const;

export default function QuickContactSection() {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [cidadeBairro, setCidadeBairro] = useState("");
  const [material, setMaterial] = useState<string>(MATERIAL_OPTIONS[0]);
  const [data, setData] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!nome.trim() || !whatsapp.trim()) {
      return;
    }

    const dataFormatada = data.trim()
      ? data.includes("-")
        ? data.split("-").reverse().join("/")
        : data
      : "A combinar";

    const msg = `Olá! Vim pelo Google e preciso de uma caçamba.\n\nNome: ${nome.trim()}\nWhatsApp: ${whatsapp.trim()}\nCidade/Bairro: ${cidadeBairro.trim()}\nMaterial: ${material}\nData preferida: ${dataFormatada}`;

    const encodedMsg = encodeURIComponent(msg);
    const waUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodedMsg}`;

    trackWhatsAppClick("quick_form_submit");
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const handleReset = () => {
    setNome("");
    setWhatsapp("");
    setCidadeBairro("");
    setMaterial(MATERIAL_OPTIONS[0]);
    setData("");
    setSubmitted(false);
  };

  return (
    <section id="contato" className="py-16 sm:py-20 md:py-28 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="inline-block text-orange-600 font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3">
            Atendimento Rápido
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-slate-900 mb-3 sm:mb-4">
            Solicite seu <span className="gradient-text">Orçamento</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Preencha os dados e envie direto pelo WhatsApp.
          </p>
        </div>

        <div className="max-w-4xl mx-auto reveal">
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Form Card */}
            <div className="lg:col-span-7 p-5 sm:p-7 md:p-8 flex flex-col justify-center w-full">
              {submitted ? (
                <div className="text-center py-8 sm:py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                    Solicitação enviada!
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto">
                    Você foi redirecionado para o WhatsApp com os dados preenchidos.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 bg-white hover:bg-slate-50 font-medium text-sm transition-colors cursor-pointer"
                  >
                    Enviar nova solicitação
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div>
                    <label
                      htmlFor="quick-nome"
                      className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1"
                    >
                      Nome <span className="text-orange-500">*</span>
                    </label>
                    <input
                      id="quick-nome"
                      type="text"
                      required
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Seu nome completo"
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quick-whatsapp"
                      className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1"
                    >
                      WhatsApp <span className="text-orange-500">*</span>
                    </label>
                    <input
                      id="quick-whatsapp"
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="(41) 99999-9999"
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quick-cidade"
                      className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1"
                    >
                      Cidade/Bairro <span className="text-orange-500">*</span>
                    </label>
                    <input
                      id="quick-cidade"
                      type="text"
                      required
                      value={cidadeBairro}
                      onChange={(e) => setCidadeBairro(e.target.value)}
                      placeholder="Ex: Curitiba - Centro"
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                    <div>
                      <label
                        htmlFor="quick-material"
                        className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1"
                      >
                        Tipo de Material
                      </label>
                      <select
                        id="quick-material"
                        value={material}
                        onChange={(e) => setMaterial(e.target.value)}
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm"
                      >
                        {MATERIAL_OPTIONS.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="quick-data"
                        className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1"
                      >
                        Data Preferida{" "}
                        <span className="text-xs font-normal text-slate-400">
                          (opcional)
                        </span>
                      </label>
                      <input
                        id="quick-data"
                        type="date"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="pt-1.5">
                    <button
                      type="submit"
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-orange-600/20 hover:shadow-lg hover:shadow-orange-600/30 cursor-pointer text-sm sm:text-base"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar pelo WhatsApp</span>
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 mt-2.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Seus dados estão seguros</span>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Right WhatsApp direct CTA */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 sm:p-8 text-white flex flex-col justify-center items-center text-center relative overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-700/60 w-full">
              <div className="relative z-10 w-full max-w-xs flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-[#25D366]">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>

                <div>
                  <p className="text-orange-300 text-xs sm:text-sm font-medium mb-1">
                    Prefere falar diretamente?
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {BUSINESS.whatsappDisplay}
                  </p>
                </div>

                <a
                  href={BUSINESS.whatsappLinkWithMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("contact_section_direct")}
                  className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white py-3.5 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base group"
                >
                  <span>Chamar no WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <p className="text-white/50 text-xs font-light">
                  Resposta rápida pelo WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
