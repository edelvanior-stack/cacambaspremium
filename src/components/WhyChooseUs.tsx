import { Clock, DollarSign, Shield, Leaf, Headphones, Truck } from "lucide-react";
import type { ComponentType } from "react";

type Reason = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
};

const REASONS: Reason[] = [
  { icon: Clock, title: "Entrega Rápida", desc: "Caçamba na sua obra em até 2 horas após a confirmação do pedido." },
  { icon: DollarSign, title: "Preço Justo", desc: "Valores transparentes sem taxas escondidas. O melhor custo-benefício da região." },
  { icon: Shield, title: "Empresa Licenciada", desc: "Atuamos em conformidade com todas as normas ambientais e licenças necessárias." },
  { icon: Leaf, title: "Compromisso Ambiental", desc: "Destinação correta dos resíduos em aterros e usinas de reciclagem licenciadas." },
  { icon: Headphones, title: "Suporte Dedicado", desc: "Atendimento humanizado via WhatsApp, telefone ou presencial. Sempre disponíveis." },
  { icon: Truck, title: "Frota Própria", desc: "Veículos modernos e bem mantidos para garantir agilidade e segurança." },
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
                className="relative rounded-3xl shadow-2xl shadow-slate-900/10 w-full h-[260px] sm:h-auto sm:aspect-[4/5] object-cover object-center"
                loading="lazy"
              />
              {/* FIX: Responsivo para celular com tamanho e posicionamento adequados */}
              <div className="flex absolute -bottom-4 right-3 sm:-bottom-6 sm:-right-6 glass-light rounded-2xl p-3 sm:p-5 shadow-xl animate-float">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-slate-900 text-sm sm:text-lg leading-tight">98%</p>
                    <p className="text-slate-500 text-[11px] sm:text-xs">Satisfação dos Clientes</p>
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
                Mais de uma década entregando excelência em locação de caçambas no litoral catarinense.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              {REASONS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="reveal flex items-start gap-3 sm:gap-4 group">
                  {/* FIX: Smaller icon on mobile */}
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
