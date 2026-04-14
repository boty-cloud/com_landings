export interface Proposal {
  id: string;
  status: "draft" | "sent" | "viewed" | "accepted" | "rejected";
  createdAt: string;

  // Branding
  clientName: string;
  clientLogo: string;
  botyLogo: string;
  botyLogoFooter: string;

  // Hero
  hero: {
    tag: string;
    titlePre: string;
    titleHighlight: string;
    titlePost: string;
    subtitle: string;
    ctaText: string;
    ctaHref: string;
  };

  // Intro
  intro: {
    title: string;
    paragraphs: string[];
  };

  // Modules
  modules: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: ModuleItem[];
  };

  // IA Highlight
  iaHighlight?: {
    title: string;
    description: string;
    cards: { icon: string; title: string; text: string }[];
  };

  // Pricing
  pricing: {
    sectionTitle: string;
    sectionSubtitle: string;
    plans: PricingPlan[];
  };

  // Implementation
  implementation: {
    sectionTitle: string;
    cards: { icon: string; title: string; text: string }[];
  };

  // CTA
  cta: {
    title: string;
    text: string;
    buttonText: string;
    buttonHref: string;
  };

  // Footer
  footer: {
    copyText: string;
  };
}

export interface ModuleItem {
  number: string;
  title: string;
  body: string;
  features: string[];
  isHighlighted?: boolean;
  badge?: string;
}

export interface PricingPlan {
  name: string;
  amount: string;
  amountSuffix?: string;
  description: string;
  details: string[];
  addon?: string;
  isFeatured?: boolean;
  badge?: string;
}
