import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import QuoteForm from "./QuoteForm";
import { trackWhatsAppClick } from "../lib/analytics";

const WA_LINK = "https://wa.me/5547992579095";

const CONTACT_INFO = [
  { icon: Phone, label: "WhatsApp", value: "(47) 99257-9095", href: "https://wa.me/5547992579095" },
  { icon: MapPin, label: "Localização", value: "Itajaí, Santa Catarina", href: null },
  { icon: Clock, label: "Horário", value: "Seg a Sáb • 7h às 18h", href: null },
];

export default function ContactSection() {
  return (
    <section id="contato" className="py-16 sm:py-20 md:py-28 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-block text-orange-600 font-semibold text-sm tracking-wider uppercase mb-3">
            Contato
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-slate-900 mb-4">
            Solicite seu{" "}
            <span className="gradient-text">Orçamento</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
            Preencha o formulário abaixo e envie diretamente para nosso WhatsApp. Respondemos em poucos minutos!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 max-w-5xl mx-auto">
          <div className="lg:col-span-3 reveal">
            <QuoteForm />
          </div>

          <div className="lg:col-span-2 reveal space-y-4 sm:space-y-5">
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="bg-white rounded-2xl border border-slate-100 p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
                {/* FIX: Smaller icon container on mobile */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium">{label}</p>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('contact_section_list')} className="font-semibold text-sm sm:text-base text-slate-800 hover:text-orange-600 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="font-semibold text-sm sm:text-base text-slate-800">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('contact_section_direct')}
              className="block bg-orange-600 rounded-2xl p-5 sm:p-6 text-center hover:bg-orange-700 transition-all hover:shadow-lg hover:shadow-orange-600/20 group"
            >
              <p className="text-orange-100 text-xs sm:text-sm mb-1">Prefere falar diretamente?</p>
              <p className="text-white font-bold text-base sm:text-lg flex items-center justify-center gap-2">
                Chamar no WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
