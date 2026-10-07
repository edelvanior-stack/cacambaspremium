import { ArrowRight, MapPin, Clock, MessageCircle, CheckCircle2 } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { BUSINESS } from "@/config/business";

export default function HeroSection({ heroImage }: { heroImage: string }) {
  return (
    <section id="inicio" className="relative min-h-[100dvh] min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="/images/hero-mobile.webp"
            width={600}
            height={800}
            type="image/webp"
          />
          <img
            src={heroImage}
            alt="Aluguel de caçamba de entulho em Curitiba - Caçambas Premium"
            width={1376}
            height={768}
            className="w-full h-full object-cover object-[center_35%] sm:object-center"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Decorative blur shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 pb-8 sm:pt-20 sm:pb-12 md:pt-28 md:pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-2.5 sm:mb-3">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/90 text-xs sm:text-sm font-medium">Atendimento pelo WhatsApp</span>
          </div>

          {/* H1 — Termo comercial em até 2 linhas equilibradas */}
          <h1 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.12] mb-2.5 sm:mb-3.5 tracking-tight">
            Aluguel de{" "}
            <span className="gradient-text">Caçamba</span>
            <br />
            em Curitiba e Região
          </h1>

          {/* Preço real visível com localidade acima da dobra */}
          <div className="inline-flex flex-wrap items-baseline gap-1.5 sm:gap-2 bg-gradient-to-r from-orange-500/30 to-amber-500/20 border border-orange-400/50 rounded-xl sm:rounded-2xl px-3.5 py-1.5 sm:px-4 sm:py-2 mb-3 sm:mb-4 backdrop-blur-md shadow-lg shadow-black/15">
            <span className="text-white/95 font-medium text-xs sm:text-base">3m³ a partir de</span>
            <span className="text-amber-300 font-extrabold text-xl sm:text-3xl tracking-tight">R$ 199,99</span>
            <span className="text-orange-200 font-semibold text-xs sm:text-sm">em Curitiba</span>
          </div>

          {/* Subtexto: Benefícios inclusos */}
          <ul className="space-y-1 sm:space-y-1.5 text-xs sm:text-base text-white/95 max-w-xl mb-4 sm:mb-6 font-medium">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
              <span>Entrega + retirada inclusas</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
              <span>Permanência de até 7 dias</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
              <span>Consulte disponibilidade para seu bairro agora</span>
            </li>
          </ul>

          {/* CTA Principal */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 mb-4 sm:mb-6">
            <a
              href={BUSINESS.whatsappLinkWithMessage}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('hero_primary')}
              className="group flex items-center justify-center gap-2 sm:gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-extrabold transition-all hover:shadow-2xl hover:shadow-emerald-500/30 hover:-translate-y-0.5 cursor-pointer text-center tracking-wide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>ALUGAR CAÇAMBA AGORA</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#tamanhos"
              className="flex items-center justify-center gap-2 glass text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:bg-white/15 transition-all text-center"
            >
              Ver Outros Tamanhos
            </a>
          </div>

          {/* Trust Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              { icon: MapPin, text: "Curitiba e Região Metropolitana" },
              { icon: Clock, text: "Entrega e Retirada" },
              { icon: MessageCircle, text: "Atendimento pelo WhatsApp" },
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