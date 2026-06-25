/**
 * Auren + Guayal IA Assessment Proposal
 * Co-branded proposal: Auren fronting, Guayal partner
 * Based on: .claude/rules/cambios_propuesta_guayal.md
 */

import admin from "firebase-admin";
import { Proposal } from "../types/proposal";

// Initialize Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId: "boty-app",
  });
}

const db = admin.firestore();

const proposal: Proposal = {
  id: "auren-guayal-assessment-2026",
  status: "draft",
  createdAt: new Date().toISOString(),
  brand: "auren", // ← Auren theme

  // ═══════════════════════════════════════════════
  // CO-BRANDING: Auren + Guayal
  // Per cambios_propuesta_guayal.md point 1
  // ═══════════════════════════════════════════════
  clientName: "Tu Empresa",
  clientLogo: "", // Client logo added later per client
  aurenLogo: "/logos/Auren/Auren.jpeg",
  clientLogoSecondary: "/logos/Guayal/Guayal.jpeg", // Guayal as secondary logo

  // ═══════════════════════════════════════════════
  // HERO
  // Per cambios_propuesta_guayal.md point 2
  // ═══════════════════════════════════════════════
  hero: {
    tag: "IA Assessment & Roadmap · 2026",
    titlePre: "Descubrí dónde la IA genera un ",
    titleHighlight: "impacto real",
    titlePost: " en tu empresa",
    subtitle:
      "Un proceso de diagnóstico de 4 semanas que te da claridad total sobre qué automatizar, qué impacto genera y qué datos ordenar primero.",
    ctaText: "Conocé el proceso",
    ctaHref: "#intro",
  },

  // ═══════════════════════════════════════════════
  // 1. INTRODUCCIÓN / CONTEXTO
  // Per cambios_propuesta_guayal.md points 3-4
  // ═══════════════════════════════════════════════
  companyUnderstanding: {
    title: "IA Assessment & Roadmap: Claridad antes de invertir",
    paragraphs: [
      "<strong>El Assessment de IA</strong> consiste en un plan de trabajo de <strong>4 semanas</strong>, con el objetivo de identificar, dentro de los procesos presentados por la empresa, cuáles se pueden automatizar, qué impacto generan en la organización y qué datos se necesitan ordenar primero.",
      "Implementar IA representa un desafío para las empresas. Muchas invierten en tecnología sin tener conocimiento si sus datos están listos, si sus procesos lo justifican o si existe una solución más simple que un modelo de inteligencia artificial.",
      'Nuestro <strong>IA Assessment & Roadmap</strong> es un proceso de diagnóstico de <strong>4 semanas</strong> que te da <strong>claridad total</strong>: un mapa de calor de tus procesos, las mejores oportunidades de automatización con su impacto en la organización, y un roadmap técnico para los próximos 4-6 meses.',
    ],
  },

  // ═══════════════════════════════════════════════
  // 2. EL PROCESO EN 4 SEMANAS
  // Per cambios_propuesta_guayal.md points 5-8
  // 2x2 grid layout requested in point 9
  // ═══════════════════════════════════════════════
  solution: {
    title: "El proceso en 4 semanas",
    subtitle: "Un diagnóstico estructurado que transforma la incertidumbre en un plan de acción concreto",
    phases: [
      {
        title: "Talleres de Inmersión",
        description:
          "Reuniones breves con los <strong>líderes de cada área clave</strong> — Operaciones, Ventas, Finanzas, Atención al Cliente — para mapear los puntos de dolor y las tareas repetitivas que consumen tiempo y recursos.",
        deliverables: [
          "Workshops con líderes de área",
          "Mapeo de puntos de dolor y tareas repetitivas",
          "Identificación de procesos candidatos a automatización",
          "Relevamiento de expectativas y objetivos por área",
        ],
        duration: "Semana 1",
      },
      {
        title: "Auditoría de Datos y Sistemas",
        description:
          "Análisis técnico de tu infraestructura actual. Evaluamos si tu base tecnológica <strong>soporta una automatización con IA</strong> o si hay pasos previos que resolver.",
        deliverables: [
          "Relevamiento de fuentes de datos y su calidad",
          "Evaluación de sistemas existentes (CRM, ERP, bases de datos)",
          "Análisis de disponibilidad de APIs e integraciones",
          "Diagnóstico de madurez tecnológica",
        ],
        duration: "Semana 2",
      },
      {
        title: "Matriz de Priorización e Impacto",
        description:
          "Cruzamos el <strong>impacto operativo</strong> de cada oportunidad contra su complejidad técnica. El resultado son automatizaciones fáciles, de alto impacto y proyectos estratégicos de mayor envergadura.",
        deliverables: [
          "Matriz de Viabilidad vs. Impacto para cada oportunidad",
          "Identificación de Quick Wins (alto impacto, baja complejidad)",
          "Clasificación de proyectos por horizonte temporal",
          "Estimación preliminar de ROI por caso de uso",
        ],
        duration: "Semana 3",
      },
      {
        title: "Presentación del Roadmap",
        description:
          "Reunión ejecutiva para entregar el <strong>reporte final completo</strong> con las oportunidades identificadas, el roadmap de adopción y los próximos pasos recomendados.",
        deliverables: [
          "Presentación ejecutiva ante el equipo directivo",
          "Entrega del reporte final en formato PDF ejecutivo",
          "Roadmap de adopción a 4-6 meses",
          "Sesión de preguntas y definición de próximos pasos",
        ],
        duration: "Semana 4",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // 3. ENTREGABLES (centered per point 10)
  // Using iaHighlight section for deliverables
  // ═══════════════════════════════════════════════
  iaHighlight: {
    title: "Entregables tangibles",
    description:
      "Al finalizar el Assessment recibís un <strong>documento ejecutivo profesional</strong> con todo lo que necesitás para tomar decisiones informadas sobre la adopción de IA en tu empresa.",
    cards: [
      {
        icon: "🗺️",
        title: "Mapa de Calor de Procesos",
        text: "Un gráfico visual que muestra qué áreas de tu empresa están listas para la IA y cuáles necesitan madurar antes de automatizar.",
      },
      {
        icon: "📑",
        title: "Fichas de Caso de Uso",
        text: 'Para las mejores oportunidades: problema actual → solución propuesta → tecnología sugerida → estimación de impacto (ej. "ahorro de 15 horas semanales").',
      },
      {
        icon: "📅",
        title: "Roadmap de Adopción",
        text: "Cronograma sugerido de transformación para los próximos 4-6 meses: qué implementar primero, qué datos ordenar y qué capacidades construir.",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // 4. QUIÉNES SOMOS
  // ═══════════════════════════════════════════════
  aboutUs: {
    title: "¿Por qué elegir Auren + Guayal?",
    logo: "/logos/Auren/Auren.jpeg",
    paragraphs: [
      "<strong>Auren</strong> es una firma internacional de consultoría con presencia en más de 90 países y más de 30.000 profesionales especializados en transformación digital y consultoría estratégica.",
      "<strong>Guayal</strong> es un partner tecnológico especializado en implementación de Inteligencia Artificial y automatización de procesos, con experiencia en proyectos de alto impacto en diversos sectores.",
      "Juntos combinamos la <strong>visión estratégica de Auren</strong> con la <strong>capacidad técnica de Guayal</strong> para ofrecer un diagnóstico completo que conecta las necesidades del negocio con soluciones tecnológicas viables.",
      "Este Assessment es el primer paso de un <strong>framework probado</strong> que garantiza que la inversión en IA genere valor real y medible para tu organización.",
    ],
  },

  // ═══════════════════════════════════════════════
  // NO PRICING SECTION
  // Per cambios_propuesta_guayal.md point 11
  // "Podemos eliminar la parte de la inversión?
  // Eso se va a hacer en propuesta auren"
  // ═══════════════════════════════════════════════
  // pricing: undefined, // No pricing in this proposal

  // ═══════════════════════════════════════════════
  // NO TEAM SECTION (optional, can be added later)
  // ═══════════════════════════════════════════════
  // team: undefined,

  // ═══════════════════════════════════════════════
  // NO "CÓMO ARRANCAMOS" SECTION
  // Per cambios_propuesta_guayal.md point 12
  // "Podemos eliminar la parte de como arrancamos?
  // me parece repetitivo versus las fases"
  // ═══════════════════════════════════════════════
  implementation: {
    sectionTitle: "Próximos pasos",
    cards: [
      {
        icon: "📞",
        title: "Reunión inicial",
        text: "Una conversación de 30 minutos para entender tu empresa y definir qué áreas participan del Assessment.",
      },
      {
        icon: "🔍",
        title: "Diagnóstico en marcha",
        text: "Durante 4 semanas trabajamos con tu equipo: workshops, auditoría técnica y análisis de oportunidades.",
      },
      {
        icon: "📊",
        title: "Entrega del Roadmap",
        text: "Presentamos el Business Case completo con las oportunidades identificadas y el plan de acción.",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // CTA & FOOTER
  // ═══════════════════════════════════════════════
  cta: {
    title: "¿Listo para descubrir el potencial de la IA en tu empresa?",
    text: "En 4 semanas vas a saber exactamente qué automatizar, cuánto impacto generar y por dónde empezar.",
    buttonText: "Agendar reunión inicial",
    buttonHref: "mailto:contacto@auren.com",
  },

  footer: {
    copyText: "© 2026 Auren + Guayal · IA Assessment & Roadmap",
  },

  // Placeholder sections for compatibility (unused in Auren brand)
  intro: { title: "", paragraphs: [] },
  modules: { sectionTitle: "", sectionSubtitle: "", items: [] },
};

// ═══════════════════════════════════════════════
// SEED TO FIRESTORE
// ═══════════════════════════════════════════════
async function seed() {
  try {
    console.log("🌱 Seeding Auren + Guayal IA Assessment proposal:", proposal.id);
    await db.collection("proposals").doc(proposal.id).set(proposal);
    console.log("✅ Proposal seeded successfully!");
    console.log(`🔗 URL: https://boty-landings-814191904626.us-central1.run.app/${proposal.id}`);
    console.log("\n📝 Notes:");
    console.log("  - Co-branded: Auren (primary) + Guayal (secondary)");
    console.log("  - 4-week process (4 phases)");
    console.log("  - No pricing section (handled separately)");
    console.log("  - No 'Cómo arrancamos' section (avoided redundancy)");
    console.log("  - Deliverables centered in iaHighlight section");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding proposal:", error);
    process.exit(1);
  }
}

seed();
