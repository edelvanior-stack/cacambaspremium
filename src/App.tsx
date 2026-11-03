import { lazy, Suspense, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import MobileWhatsAppBar from "./components/MobileWhatsAppBar";
import ScrollReveal from "./components/ScrollReveal";

const SizesSection = lazy(() => import("./components/SizesSection"));
const PricingCTA = lazy(() => import("./components/PricingCTA"));
const HowItWorks = lazy(() => import("./components/HowItWorks"));
const BenefitsSection = lazy(() => import("./components/BenefitsSection"));
const GallerySection = lazy(() => import("./components/GallerySection"));
const AreasSection = lazy(() => import("./components/AreasSection"));
const FAQSection = lazy(() => import("./components/FAQSection"));
const QuickContactSection = lazy(() => import("./components/QuickContactSection"));
const FinalCTA = lazy(() => import("./components/FinalCTA"));
const Footer = lazy(() => import("./components/Footer"));

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
  const [loadRest, setLoadRest] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      setLoadRest(true);
      return;
    }

    const trigger = () => {
      setLoadRest(true);
      ["scroll", "pointerdown", "touchstart", "mousemove", "keydown"].forEach((e) => {
        window.removeEventListener(e, trigger);
      });
    };

    ["scroll", "pointerdown", "touchstart", "mousemove", "keydown"].forEach((e) => {
      window.addEventListener(e, trigger, { passive: true, once: true });
    });

    return () => {
      ["scroll", "pointerdown", "touchstart", "mousemove", "keydown"].forEach((e) => {
        window.removeEventListener(e, trigger);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground pb-14 md:pb-0">
      <ScrollReveal />
      <Navbar />
      <HeroSection heroImage={HERO_IMG} />
      {loadRest ? (
        <Suspense fallback={null}>
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
        </Suspense>
      ) : (
        <div className="h-64" />
      )}
      <FloatingWhatsApp />
      <MobileWhatsAppBar />
    </div>
  );
}
