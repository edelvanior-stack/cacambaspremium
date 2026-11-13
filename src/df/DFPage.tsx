import DFHeader from "@/components/df/DFHeader";
import DFHero from "@/components/df/DFHero";
import DFQuickQuote from "@/components/df/DFQuickQuote";
import DFNeeds from "@/components/df/DFNeeds";
import DFPricing from "@/components/df/DFPricing";
import DFHowItWorks from "@/components/df/DFHowItWorks";
import DFAreas from "@/components/df/DFAreas";
import DFMaterials from "@/components/df/DFMaterials";
import DFCompliance from "@/components/df/DFCompliance";
import DFFAQ from "@/components/df/DFFAQ";
import DFFinalCTA from "@/components/df/DFFinalCTA";
import DFFooter from "@/components/df/DFFooter";
import DFStickyBar from "@/components/df/DFStickyBar";

export default function DFPage() {
  return (
    <div className="min-h-screen bg-white text-ink selection:bg-signal selection:text-ink pb-20 sm:pb-0 font-sans antialiased overflow-x-hidden">
      <DFHeader />
      <main id="conteudo">
        <DFHero />
        <DFQuickQuote />
        <DFNeeds />
        <DFPricing />
        <DFHowItWorks />
        <DFAreas />
        <DFMaterials />
        <DFCompliance />
        <DFFAQ />
        <DFFinalCTA />
      </main>
      <DFFooter />
      <DFStickyBar />
    </div>
  );
}
