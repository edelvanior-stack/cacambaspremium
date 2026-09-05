import { MapPin, Globe, Package, MessageCircle } from "lucide-react";

const STATS = [
  { icon: MapPin, textValue: "Curitiba", label: "Atendimento Local" },
  { icon: Globe, textValue: "RMC", label: "Região Metropolitana" },
  { icon: Package, textValue: "Caçambas", label: "Tamanhos — Consulte no WhatsApp" },
  { icon: MessageCircle, textValue: "WhatsApp", label: "Atendimento Direto" },
];

export default function TrustIndicators() {
  return (
    <section className="relative -mt-8 sm:-mt-12 md:-mt-16 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {STATS.map(({ icon: Icon, textValue, label }) => (
          <div
            key={label}
            className="reveal glass-light rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:shadow-xl hover:shadow-orange-600/5 transition-all duration-300 hover:-translate-y-1 group min-w-0 flex flex-col justify-center items-center"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange-50 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-orange-100 transition-colors">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
            </div>
            <span className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900">
              {textValue}
            </span>
            <p className="text-slate-500 text-xs sm:text-sm font-medium mt-1.5 sm:mt-2">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
