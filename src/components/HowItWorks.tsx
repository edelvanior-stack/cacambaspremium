import { MessageCircle, Truck, CheckCircle2 } from "lucide-react";
import type { ComponentType } from "react";

type Step = {
  icon: ComponentType<{ className?: string }>;
  step: string;
  title: string;
  desc: string;
};

const STEPS: Step[] = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Fale pelo WhatsApp",
    desc: "Envie uma mensagem com o endereço da obra e o tipo de material que precisa descartar.",
  },
  {
    icon: Truck,
    step: "02",
    title: "Receba a Caçamba",
    desc: "Combinamos a entrega da caçamba diretamente no local da sua obra ou reforma.",
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "Retirada",
    desc: "Quando finalizar, avise pelo WhatsApp e retiramos a caçamba do local.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-14 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="inline-block text-orange-600 font-semibold text-sm tracking-wider uppercase mb-3">
            Como Funciona
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-slate-900 mb-4">
            Simples e{" "}
            <span className="gradient-text">Sem Burocracia</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
            Em 3 passos você resolve o descarte de entulho da sua obra.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {STEPS.map(({ icon: Icon, step, title, desc }, i) => (
            <div key={step} className="reveal relative">
              {i < 2 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-orange-300 to-orange-100" />
              )}
              <div className="relative text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-orange-50 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-orange-100 transition-colors relative">
                  <Icon className="w-7 h-7 sm:w-9 sm:h-9 text-orange-600" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-600 text-white text-xs font-bold flex items-center justify-center">
                    {step}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-2 sm:mb-3">{title}</h3>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
