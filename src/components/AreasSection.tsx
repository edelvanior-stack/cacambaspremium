import { MapPin, CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/config/business";
import { trackWhatsAppClick } from "@/lib/analytics";

const CITIES = [
  { name: "Curitiba", highlight: true },
  { name: "São José dos Pinhais", highlight: true },
  { name: "Pinhais", highlight: false },
  { name: "Araucária", highlight: false },
  { name: "Colombo", highlight: false },
  { name: "Fazenda Rio Grande", highlight: false },
  { name: "Campo Largo", highlight: false },
];

export default function AreasSection() {
  const addressQuery = encodeURIComponent(
    `${BUSINESS.address.street}, ${BUSINESS.address.number}, ${BUSINESS.address.neighborhood}, ${BUSINESS.address.city} - ${BUSINESS.address.state}`
  );

  return (
    <section id="regioes" className="py-14 sm:py-20 md:py-24 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="inline-block text-orange-600 font-semibold text-sm tracking-wider uppercase mb-3">
            Áreas Atendidas
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-slate-900 mb-4">
            Onde{" "}
            <span className="gradient-text">Atuamos</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
            Atendemos Curitiba e Região Metropolitana. Consulte a disponibilidade para o seu endereço.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto mb-8 sm:mb-10">
          {CITIES.map(({ name, highlight }) => (
            <div
              key={name}
              className={`reveal flex items-center gap-2 sm:gap-3 rounded-2xl p-3 sm:p-4 md:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg min-w-0 ${
                highlight
                  ? "bg-orange-600 text-white shadow-lg shadow-orange-600/20"
                  : "bg-white border border-slate-100 hover:shadow-orange-600/5"
              }`}
            >
              <MapPin className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${highlight ? "text-orange-200" : "text-orange-500"}`} />
              <span className={`font-semibold text-xs sm:text-sm md:text-base leading-tight ${highlight ? "" : "text-slate-700"}`}>
                {name}
              </span>
            </div>
          ))}
        </div>

        <div className="reveal max-w-4xl mx-auto rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          <iframe
            title="Localização Caçambas Premium - Curitiba PR"
            src={`https://www.google.com/maps?q=${addressQuery}&output=embed`}
            className="w-full h-48 sm:h-64 md:h-80"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-10 reveal flex flex-col items-center">
          <a
            href={BUSINESS.whatsappLinkWithMessage}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('areas_section')}
            className="w-full sm:w-auto min-h-[56px] inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-2xl text-base sm:text-lg font-bold shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg
              className="w-6 h-6 text-white fill-current flex-shrink-0"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Pedir orçamento no WhatsApp</span>
          </a>
          <div className="mt-3 inline-flex items-center gap-2 text-slate-500 text-xs sm:text-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Não encontrou sua cidade? Consulte pelo WhatsApp.
          </div>
        </div>
      </div>
    </section>
  );
}
