import { Clock, DollarSign, Shield, Leaf, Headphones, Truck } from "lucide-react";
import type { ComponentType } from "react";

type Reason = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
};

const REASONS: Reason[] = [
  { icon: Clock, title: "Entrega e Retirada", desc: "Posicionamento e retirada da caçamba alinhados com o cronograma da sua obra." },
  { icon: DollarSign, title: "Orçamento Sob Medida", desc: "Consulte valores e condições para o seu endereço diretamente pelo WhatsApp." },
  { icon: Shield, title: "Empresa Confiável", desc: "Equipe especializada e compromisso com a satisfação do cliente na locação." },
  { icon: Leaf, title: "Materiais e Orientações", desc: "Orientamos o cliente sobre os materiais aceitos antes da locação." },
  { icon: Headphones, title: "Suporte Dedicado", desc: "Atendimento direto e personalizado via WhatsApp." },
  { icon: Truck, title: "Equipamentos Adequados", desc: "Caçambas e veículos apropriados para transporte seguro de entulhos de obras." },
];

export default function WhyChooseUs({ serviceImage }: { serviceImage: string }) {
  return (
    <section id="porque" className="py-16 sm:py-20 md:py-28 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-16 items-center">
          <div className="lg:w-5/12 reveal w-full">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-500/10 rounded-3xl blur-2xl" />
              <img
                src={serviceImage}
                alt="Profissional ao lado de caçamba de entulho"
                width={1536}
                height={1024}
                className="relative rounded-3xl shadow-2xl shadow-slate-900/10 w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
              <div className="flex absolute -bottom-4 right-3 sm:-bottom-6 sm:-right-6 glass-light rounded-2xl p-3 sm:p-5 shadow-xl animate-float">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-slate-900 text-xs sm:text-base leading-tight">Atendimento Direto</p>
                    <p className="text-slate-500 text-[10px] sm:text-xs font-medium">Via WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12 w-full">
            <div className="reveal">
              <span className="inline-block text-orange-600 font-semibold text-sm tracking-wider uppercase mb-3">
                Por Que Nos Escolher
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 mb-4">
                A Confiança que sua{" "}
                <span className="gradient-text">Obra Merece</span>
              </h2>
              <p className="text-slate-500 text-base sm:text-lg mb-8 sm:mb-10">
                Locação de caçambas para obras e reformas em Curitiba e Região Metropolitana, com atendimento direto pelo WhatsApp.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              {REASONS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="reveal flex items-start gap-3 sm:gap-4 group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-slate-900 text-sm sm:text-base mb-1">{title}</h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
