import { MessageCircle, Truck, CheckCircle2, ArrowRight } from "lucide-react";
import type { ComponentType } from "react";
import { trackWhatsAppClick } from "../lib/analytics";

const WA_LINK = "https://wa.me/5547992579095";

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
    title: "Solicite pelo WhatsApp",
    desc: "Envie uma mensagem com o endereço da obra e o tipo de resíduo. Respondemos em minutos!",
  },
  {
    icon: Truck,
    step: "02",
    title: "Receba a Caçamba",
    desc: "Entregamos a caçamba no local combinado em até 2 horas. Pontualidade garantida.",
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "Coletamos o Entulho",
    desc: "Quando estiver cheia, é só avisar. Retiramos e fazemos a destinação correta dos resíduos.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 sm:py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-block text-orange-600 font-semibold text-sm tracking-wider uppercase mb-3">
            Como Funciona
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-slate-900 mb-4">
            Simples, Rápido e{" "}
            <span className="gradient-text">Sem Burocracia</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
            Em apenas 3 passos você resolve o descarte de entulho da sua obra.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-14">
          {STEPS.map(({ icon: Icon, step, title, desc }, i) => (
            <div key={step} className="reveal relative">
              {i < 2 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-orange-300 to-orange-100" />
              )}
              <div className="relative text-center group">
                {/* FIX: Smaller step icon on mobile */}
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

        <div className="text-center reveal">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('how_it_works')}
            className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl text-base sm:text-lg font-bold transition-all hover:shadow-xl hover:shadow-orange-600/25 hover:-translate-y-0.5"
          >
            Começar Agora
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
