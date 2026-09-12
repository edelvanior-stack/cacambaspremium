import { Truck, MessageCircle, Ruler, Shield, MapPin, Recycle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BENEFITS: Benefit[] = [
  {
    icon: Truck,
    title: "Entrega e Retirada",
    description: "No endereço da sua obra em Curitiba e região",
  },
  {
    icon: MessageCircle,
    title: "Atendimento WhatsApp",
    description: "Fale direto com a equipe, sem burocracia",
  },
  {
    icon: Ruler,
    title: "Vários Tamanhos",
    description: "Caçambas de 3m³ a 7m³ conforme sua necessidade",
  },
  {
    icon: Shield,
    title: "Atendimento Direto",
    description: "Fale diretamente com a equipe para consultar tamanho, valor e disponibilidade.",
  },
  {
    icon: MapPin,
    title: "Curitiba e RMC",
    description: "7 cidades atendidas na Região Metropolitana",
  },
  {
    icon: Recycle,
    title: "Descarte Responsável",
    description: "Orientação sobre os materiais aceitos",
  },
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-16 sm:py-20 md:py-28 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-block text-orange-600 font-semibold text-sm tracking-wider uppercase mb-3">
            Por Que Escolher a Caçambas Premium
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-slate-900">
            Confiança que sua <span className="gradient-text">Obra Merece</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="reveal group bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:shadow-orange-600/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                <Icon className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-display font-semibold text-slate-900 text-lg mb-2">
                {title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
