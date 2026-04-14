import { notFound } from "next/navigation";
import { getProposal } from "@/lib/firestore";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ModuleCards from "@/components/ModuleCards";
import IAHighlight from "@/components/IAHighlight";
import Pricing from "@/components/Pricing";
import Implementation from "@/components/Implementation";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

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

  return (
    <>
      <Header
        botyLogo={proposal.botyLogo}
        clientLogo={proposal.clientLogo}
        clientName={proposal.clientName}
      />
      <Hero {...proposal.hero} />
      <Intro {...proposal.intro} />
      <ModuleCards {...proposal.modules} />
      {proposal.iaHighlight && <IAHighlight {...proposal.iaHighlight} />}
      <Pricing {...proposal.pricing} />
      <Implementation {...proposal.implementation} />
      <CTA {...proposal.cta} />
      <Footer
        botyLogoFooter={proposal.botyLogoFooter}
        copyText={proposal.footer.copyText}
      />
    </>
  );
}
