import { ArrowRight, HelpCircle } from "lucide-react";
import { BUSINESS } from "@/config/business";
import { trackWhatsAppClick } from "@/lib/analytics";

const getSizeWhatsAppLink = (volume: string) => {
  const text = `Olá! Vim pelo Google e gostaria de consultar o valor da caçamba de ${volume}.\n\nCidade/Bairro:\nMaterial:\nPara quando preciso:`;
  return `${BUSINESS.whatsappLink}?text=${encodeURIComponent(text)}`;
};

export default function SizesSection() {
  const helpWhatsAppLink = `${BUSINESS.whatsappLink}?text=${encodeURIComponent(
    "Olá, preciso de ajuda para escolher o tamanho da caçamba."
  )}`;

  return (
    <section id="tamanhos" className="py-16 sm:py-20 md:py-28 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-block text-orange-600 font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3">
            Dimensões e Capacidade
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-slate-900 mb-4 tracking-tight">
            Tamanhos de <span className="gradient-text">Caçambas</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Escolha o tamanho ideal para a sua obra. Consulte valores pelo WhatsApp.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 sm:mb-14">
          {BUSINESS.sizes.map((size) => (
            <div
              key={size.volume}
              className="reveal bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between hover:shadow-xl hover:border-orange-300/60 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                {/* Volume & Title Header */}
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <span className="text-3xl font-extrabold gradient-text font-display">
                    {size.volume}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-orange-600">
                    {size.title}
                  </span>
                </div>

                {/* Subtitle */}
                <p className="text-sm font-medium text-slate-500 mb-3">
                  {size.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {size.description}
                </p>

                {/* Examples as small pills/tags */}
                <div className="mb-6">
                  <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Indicações de uso:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {size.examples.map((example) => (
                      <span
                        key={example}
                        className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600 group-hover:bg-orange-50 group-hover:text-orange-700 transition-colors"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card CTA button */}
              <a
                href={getSizeWhatsAppLink(size.volume)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(`sizes_${size.volume}`)}
                className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-xl text-sm font-bold transition-all shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Consultar Preço</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Full-width CTA Banner */}
        <div className="reveal relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 sm:p-8 md:p-10 border border-slate-700/50 shadow-xl">
          <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="hidden md:flex w-12 h-12 rounded-2xl bg-orange-500/20 items-center justify-center flex-shrink-0 text-orange-400">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl text-white mb-1.5">
                  Não sabe qual tamanho escolher?
                </h3>
                <p className="text-white/70 text-sm sm:text-base">
                  Nossa equipe orienta você pelo WhatsApp
                </p>
              </div>
            </div>

            <a
              href={helpWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("sizes_help")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-400 text-white px-6 sm:px-8 py-3.5 rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold transition-all hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5 cursor-pointer flex-shrink-0"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>AJUDA PARA ESCOLHER</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
