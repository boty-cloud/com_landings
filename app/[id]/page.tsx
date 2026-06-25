import { notFound } from "next/navigation";
import { getProposal } from "@/lib/firestore";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ModuleCards from "@/components/ModuleCards";
import IAHighlight from "@/components/IAHighlight";
import Pricing from "@/components/Pricing";
import Implementation from "@/components/Implementation";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

// Auren-specific components
import CompanyUnderstanding from "@/components/auren/CompanyUnderstanding";
import NeedUnderstanding from "@/components/auren/NeedUnderstanding";
import Solution from "@/components/auren/Solution";
import AboutUs from "@/components/auren/AboutUs";
import Team from "@/components/auren/Team";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const proposal = await getProposal(id);
  if (!proposal) return { title: "Propuesta no encontrada" };

  return {
    title: `Propuesta — ${proposal.clientName}`,
    description: proposal.hero.subtitle.replace(/<[^>]*>/g, ""),
    robots: { index: false, follow: false },
  };
}

export default async function ProposalPage({ params }: Props) {
  const { id } = await params;
  const proposal = await getProposal(id);
  if (!proposal) notFound();

  const brand = proposal.brand || "boty";

  // Auren proposal structure
  if (brand === "auren") {
    return (
      <div data-brand="auren">
        <Header
          botyLogo={proposal.aurenLogo || proposal.botyLogo}
          clientLogo={proposal.clientLogo}
          clientLogoSecondary={proposal.clientLogoSecondary}
          clientName={proposal.clientName}
        />
        <Hero {...proposal.hero} />
        {proposal.companyUnderstanding && <CompanyUnderstanding {...proposal.companyUnderstanding} />}
        {proposal.needUnderstanding && <NeedUnderstanding {...proposal.needUnderstanding} />}
        {proposal.solution && <Solution {...proposal.solution} />}
        {proposal.aboutUs && <AboutUs {...proposal.aboutUs} />}
        {proposal.pricing && <Pricing {...proposal.pricing} />}
        {proposal.team && <Team {...proposal.team} />}
        <Implementation {...proposal.implementation} />
        <Footer
          botyLogoFooter={proposal.aurenLogo || proposal.botyLogoFooter}
          copyText={proposal.footer.copyText}
        />
      </div>
    );
  }

  // Boty proposal structure (default)
  return (
    <>
      <Header
        botyLogo={proposal.botyLogo}
        clientLogo={proposal.clientLogo}
        clientLogoSecondary={proposal.clientLogoSecondary}
        clientName={proposal.clientName}
      />
      <Hero {...proposal.hero} />
      <Intro {...proposal.intro} />
      <ModuleCards {...proposal.modules} />
      {proposal.iaHighlight && <IAHighlight {...proposal.iaHighlight} />}
      {proposal.pricing && <Pricing {...proposal.pricing} />}
      <Implementation {...proposal.implementation} />
      <Footer
        botyLogoFooter={proposal.botyLogoFooter}
        copyText={proposal.footer.copyText}
      />
    </>
  );
}
