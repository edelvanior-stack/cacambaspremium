import { ArrowRight } from "lucide-react";
import { BUSINESS } from "@/config/business";
import { trackWhatsAppClick } from "@/lib/analytics";

const WA_ICON_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

export interface GalleryImage {
  src: string;
  alt: string;
}

export default function GallerySection({ images }: { images: GalleryImage[] }) {
  return (
    <section id="galeria" className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-block text-orange-600 font-semibold text-sm tracking-wider uppercase mb-3">
            Nosso Trabalho
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-slate-900">
            Conheça Nosso <span className="gradient-text">Serviço</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10 sm:mb-12">
          {images.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="reveal group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={800}
                height={537}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Repetir botão WhatsApp ao final da seção */}
        <div className="text-center reveal">
          <a
            href={BUSINESS.whatsappLinkWithMessage}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("gallery_cta")}
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white w-full sm:w-auto px-6 sm:px-8 py-4 min-h-[56px] rounded-xl sm:rounded-2xl text-base sm:text-lg font-extrabold transition-all hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5 cursor-pointer text-center"
          >
            <svg className="w-6 h-6 flex-shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d={WA_ICON_PATH} />
            </svg>
            <span>Pedir caçamba pelo WhatsApp</span>
            <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
