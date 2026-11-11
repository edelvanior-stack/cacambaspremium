import { useEffect } from "react";
import SCHeader from "@/components/sc/SCHeader";
import SCHero from "@/components/sc/SCHero";
import SCCommercialOffer from "@/components/sc/SCCommercialOffer";
import SCCities from "@/components/sc/SCCities";
import SCNeeds from "@/components/sc/SCNeeds";
import SCSizes from "@/components/sc/SCSizes";
import SCMaterials from "@/components/sc/SCMaterials";
import SCHowItWorks from "@/components/sc/SCHowItWorks";
import SCTrustAndCompany from "@/components/sc/SCTrustAndCompany";
import SCFAQ from "@/components/sc/SCFAQ";
import SCFooter from "@/components/sc/SCFooter";
import SCStickyBar from "@/components/sc/SCStickyBar";
import { captureSCAttribution } from "./analytics";

export default function SCPage() {
  useEffect(() => {
    captureSCAttribution();
  }, []);

  return (
    <div className="min-h-screen bg-white text-ink selection:bg-signal selection:text-ink pb-14 sm:pb-0 font-sans antialiased overflow-x-hidden">
      <SCHeader />
      <main id="conteudo">
        <SCHero />
        <SCCommercialOffer />
        <SCCities />
        <SCNeeds />
        <SCSizes />
        <SCMaterials />
        <SCHowItWorks />
        <SCTrustAndCompany />
        <SCFAQ />
      </main>
      <SCFooter />
      <SCStickyBar />
    </div>
  );
}
