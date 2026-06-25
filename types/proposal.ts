export interface Proposal {
  id: string;
  status: "draft" | "sent" | "viewed" | "accepted" | "rejected";
  createdAt: string;

  // Branding
  brand?: "boty" | "auren"; // defaults to "boty" if not specified
  clientName: string;
  clientLogo: string;
  clientLogoSecondary?: string;
  botyLogo?: string;
  botyLogoFooter?: string;

  // Auren-specific branding (only used when brand === "auren")
  aurenLogo?: string;
  aurenClaim?: string; // e.g., "Auren Consultoría"

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

  // Auren-specific sections (only used when brand === "auren")
  // 1. Entendimiento de la empresa (replaces intro when brand === "auren")
  companyUnderstanding?: {
    title: string;
    paragraphs: string[];
  };

  // 2. Entendimiento de la necesidad
  needUnderstanding?: {
    title: string;
    paragraphs: string[];
  };

  // 3. Solución (replaces modules when brand === "auren")
  solution?: {
    title: string;
    subtitle?: string;
    description?: string;
    phases?: {
      title: string;
      description: string;
      deliverables?: string[];
      duration?: string;
    }[];
    methodology?: {
      title: string;
      description: string;
    };
  };

  // 4. Quiénes somos (fixed Auren company description)
  aboutUs?: {
    title: string;
    paragraphs: string[];
    logo?: string;
  };

  // 6. Equipo de trabajo (team members with photos)
  team?: {
    title: string;
    members: {
      name: string;
      role: string;
      photo?: string;
    }[];
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
  pricing?: {
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
  price?: string;
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
