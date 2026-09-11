import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SizesSection from "./components/SizesSection";
import PricingCTA from "./components/PricingCTA";
import HowItWorks from "./components/HowItWorks";
import BenefitsSection from "./components/BenefitsSection";
import GallerySection from "./components/GallerySection";
import AreasSection from "./components/AreasSection";
import FAQSection from "./components/FAQSection";
import QuickContactSection from "./components/QuickContactSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import MobileWhatsAppBar from "./components/MobileWhatsAppBar";
import ScrollReveal from "./components/ScrollReveal";

const HERO_IMG = "/images/hero.webp";

const GALLERY_IMAGES = [
  {
    src: "/images/gallery-1.webp",
    alt: "Caçamba de entulho estacionada em pátio limpo - Caçambas Premium",
  },
  {
    src: "/images/gallery-2.webp",
    alt: "Caminhão transportador de caçambas de entulho - Caçambas Premium",
  },
  {
    src: "/images/gallery-3.webp",
    alt: "Caminhão com caçamba posicionada para entrega - Caçambas Premium",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-14 md:pb-0">
      <ScrollReveal />
      <Navbar />
      <HeroSection heroImage={HERO_IMG} />
      <SizesSection />
      <PricingCTA />
      <HowItWorks />
      <BenefitsSection />
      <GallerySection images={GALLERY_IMAGES} />
      <AreasSection />
      <FAQSection />
      <QuickContactSection />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
      <MobileWhatsAppBar />
    </div>
  );
}
