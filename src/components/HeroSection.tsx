import { ArrowRight, Shield, Clock, Truck } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";

const WA_LINK = "https://wa.me/5547992579095";

export default function HeroSection({ heroImage }: { heroImage: string }) {
  return (
    <section id="inicio" className="relative min-h-[100dvh] min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Canteiro de obras profissional com caçambas de entulho - Caçambas Premium"
          className="w-full h-full object-cover object-[center_35%] sm:object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Decorative blur shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8">
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-white/90 text-xs sm:text-sm font-medium">Atendimento 24h • Entrega Rápida</span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] mb-5 sm:mb-6 tracking-tight">
            Locação de{" "}
            <span className="gradient-text">Caçambas</span>
            <br />
            de Entulho
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-white/75 max-w-xl mb-8 sm:mb-10 leading-relaxed font-light">
            Solução profissional para descarte de entulhos em Itajaí e região.
            Preço justo, entrega ágil e compromisso com o meio ambiente.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-16">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('hero_section')}
              className="group flex items-center justify-center gap-2 sm:gap-3 bg-orange-500 hover:bg-orange-400 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-base sm:text-lg font-bold transition-all hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15.1.04-.337.52-.149.174.198-.298.497-.174.198-.298.497-.099.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Solicitar Orçamento
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicos"
              className="flex items-center justify-center gap-2 glass text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold hover:bg-white/15 transition-all"
            >
              Nossos Serviços
            </a>
          </div>

          {/* Trust Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              { icon: Shield, text: "Empresa Licenciada" },
              { icon: Clock, text: "Entrega em até 2h" },
              { icon: Truck, text: "Frota Própria" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 sm:gap-2 glass rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
                <span className="text-white/85 text-xs sm:text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}