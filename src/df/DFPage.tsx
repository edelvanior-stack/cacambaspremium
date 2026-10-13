import { useEffect } from "react";
import DFHeader from "@/components/df/DFHeader";
import DFHero from "@/components/df/DFHero";
import DFQuickQuote from "@/components/df/DFQuickQuote";
import DFNeeds from "@/components/df/DFNeeds";
import DFHowItWorks from "@/components/df/DFHowItWorks";
import DFAreas from "@/components/df/DFAreas";
import DFMaterials from "@/components/df/DFMaterials";
import DFCompliance from "@/components/df/DFCompliance";
import DFFAQ from "@/components/df/DFFAQ";
import DFFinalCTA from "@/components/df/DFFinalCTA";
import DFFooter from "@/components/df/DFFooter";
import DFStickyBar from "@/components/df/DFStickyBar";

export default function DFPage() {
  useEffect(() => {
    // Dynamic head tags update for SPA routing
    document.title = "Aluguel de Caçamba em Brasília DF | Caçambas Premium";

    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    updateMeta(
      "description",
      "Aluguel de caçambas para obras e reformas em Brasília e regiões do Distrito Federal. Consulte disponibilidade e orçamento."
    );
    updateMeta("og:title", "Aluguel de Caçamba em Brasília DF | Caçambas Premium", true);
    updateMeta(
      "og:description",
      "Aluguel de caçambas para obras e reformas em Brasília e regiões do Distrito Federal. Consulte disponibilidade e orçamento.",
      true
    );
    updateMeta("og:url", "https://cacambaspremium.com.br/df", true);
    updateMeta("og:image", "https://cacambaspremium.com.br/images/df/og-df.jpg", true);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://cacambaspremium.com.br/df";

    // Track pageview on GA / gtag
    window.gtag?.("event", "page_view", {
      page_title: document.title,
      page_path: "/df",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-ink selection:bg-signal selection:text-ink pb-20 sm:pb-0 font-sans antialiased">
      <DFHeader />
      <main id="conteudo">
        <DFHero />
        <DFQuickQuote />
        <DFNeeds />
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
