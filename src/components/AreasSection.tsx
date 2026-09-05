import { MapPin, CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/config/business";

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
    <section id="regioes" className="py-16 sm:py-20 md:py-28 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 reveal">
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

        {/* FIX: 2-col on all sizes, but items allow text wrapping for long names */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto mb-10 sm:mb-12">
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
              {/* FIX: Allow text wrapping for long names like "São José dos Pinhais" */}
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

        <div className="text-center mt-6 sm:mt-8 reveal">
          <div className="inline-flex items-center gap-2 text-slate-500 text-xs sm:text-sm">
            <CheckCircle2 className="w-4 h-4 text-orange-500" />
            Não encontrou sua cidade? Entre em contato e verifique a disponibilidade.
          </div>
        </div>
      </div>
    </section>
  );
}
