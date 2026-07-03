import { ArrowRight, Hammer, Building2, TreePine, Paintbrush } from "lucide-react";
import type { ComponentType } from "react";
import { trackWhatsAppClick } from "../lib/analytics";

const WA_LINK = "https://wa.me/5547992579095";

type Service = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  items: string[];
};

const SERVICES: Service[] = [
  {
    icon: Hammer,
    title: "Entulho de Obra",
    description: "Remoção de resíduos de construção, reformas e demolições. Tijolos, concreto, argamassa, cerâmica e mais.",
    items: ["Concreto e Argamassa", "Tijolos e Blocos", "Cerâmica e Azulejos", "Madeira e Ferragens"],
  },
  {
    icon: Building2,
    title: "Resíduos Comerciais",
    description: "Soluções para empresas e comércios que precisam descartar grandes volumes de resíduos de forma legal.",
    items: ["Limpeza de Galpões", "Mudanças Comerciais", "Sobras Industriais", "Descarte Regular"],
  },
  {
    icon: TreePine,
    title: "Limpeza de Terreno",
    description: "Caçambas para limpeza de terrenos baldios, podas de árvores e remoção de vegetação.",
    items: ["Podas e Galhos", "Terra e Pedras", "Vegetação Seca", "Limpeza Geral"],
  },
  {
    icon: Paintbrush,
    title: "Reformas Residenciais",
    description: "Caçambas ideais para reformas domésticas de qualquer porte. Praticidade e agilidade na entrega.",
    items: ["Reformas de Cozinha", "Reformas de Banheiro", "Ampliações", "Demolições Parciais"],
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-16 sm:py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-block text-orange-600 font-semibold text-sm tracking-wider uppercase mb-3">
            Nossos Serviços
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-slate-900 mb-4">
            Soluções Completas em{" "}
            <span className="gradient-text">Caçambas</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
            Oferecemos caçambas para todos os tipos de resíduos, com entrega rápida e preço justo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {SERVICES.map(({ icon: Icon, title, description, items }) => (
            <div
              key={title}
              className="reveal group bg-white rounded-2xl border border-slate-100 p-5 sm:p-8 hover:shadow-2xl hover:shadow-orange-600/5 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                {/* FIX: Smaller icon on mobile */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{description}</p>
                  {/* FIX: Single column on very small, 2-col on sm+ */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                    {items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner — FIX: Remove whitespace-nowrap that causes horizontal scroll on mobile */}
        <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 sm:p-8 md:p-12">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
            <div className="flex-1">
              <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-white mb-3">
                Precisa de uma caçamba?
              </h3>
              <p className="text-white/65 text-base sm:text-lg">
                Solicite seu orçamento sem compromisso pelo WhatsApp. Respondemos em minutos!
              </p>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('services_section')}
              className="flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold text-base sm:text-lg transition-all hover:shadow-xl hover:shadow-orange-500/25 whitespace-nowrap"
            >
              Falar no WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
