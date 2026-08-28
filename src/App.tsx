import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustIndicators from "./components/TrustIndicators";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import AreasSection from "./components/AreasSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollReveal from "./components/ScrollReveal";
import serviceImg from "./assets/service.jpg";

const HERO_IMG = "/images/hero.webp";
const SERVICE_IMG = serviceImg;

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollReveal />
      <Navbar />
      <HeroSection heroImage={HERO_IMG} />
      <TrustIndicators />
      <div className="section-divider max-w-xs mx-auto my-4" />
      <ServicesSection />
      <WhyChooseUs serviceImage={SERVICE_IMG} />
      <HowItWorks />
      <AreasSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
