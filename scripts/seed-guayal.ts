import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const PROPOSAL_ID = "guayal-ia-assessment-2026";

const app = initializeApp({
  credential: applicationDefault(),
  projectId: process.env.NEXT_PUBLIC_FIRESTORE_PROJECT_ID || "boty-app",
});

const db = getFirestore(app);

const guayalProposal = {
  status: "draft",
  createdAt: new Date().toISOString(),

  // Branding - Auren and Guayal logos
  clientName: "Guayal × Auren",
  clientLogo: "/logos/Guayal/Guayal.jpeg",
  clientLogoSecondary: "/logos/Auren/Auren.jpeg",
  botyLogoFooter: "/logos/Boty/Iso positivo.png",

  // Hero
  hero: {
    tag: "IA Assessment & Roadmap · 4 Semanas",
    titlePre: "",
    titleHighlight: "Descubrí dónde la IA genera un impacto real en tu empresa",
    titlePost: "",
    subtitle:
      'Implementar IA representa un desafío para las empresas. Muchas invierten en tecnología sin tener conocimiento si sus datos están listos, si sus procesos lo justifican o si existe una solución más simple que un modelo de inteligencia artificial.<br><br>Nuestro <strong>IA Assessment & Roadmap</strong> es un proceso de diagnóstico de 4 semanas que te da claridad total: un mapa de calor de tus procesos, las mejores oportunidades de automatización con su impacto en la organización, y un roadmap técnico para los próximos 4-6 meses.',
    ctaText: "Ver el proceso",
    ctaHref: "#proceso",
  },

  // Intro
  intro: {
    title: "El Assesment de IA: claridad antes de la inversión",
    paragraphs: [
      "El Assesment de IA consiste en un plan de trabajo de <strong>4 semanas</strong>, con el objetivo de identificar, dentro de los procesos presentados por la empresa, cuáles se pueden automatizar, qué impacto generan en la organización y qué datos se necesitan ordenar primero.",
      "Al finalizar el proceso, vas a recibir un <strong>mapa de calor de tus procesos</strong>, las oportunidades de automatización priorizadas por impacto y viabilidad, y un <strong>roadmap técnico</strong> concreto para los próximos 4-6 meses.",
      "No más inversiones a ciegas. Empezamos por entender tu realidad, no por vender tecnología.",
    ],
  },

  // Modules - The 4-week process
  modules: {
    sectionTitle: "El proceso en 4 semanas",
    sectionSubtitle:
      "Cuatro fases concretas para identificar las mejores oportunidades de automatización con IA en tu empresa.",
    items: [
      {
        number: "01",
        title: "Talleres de Inmersión",
        body: 'Reuniones breves con los <strong>líderes de cada área clave</strong> — Operaciones, Ventas, Finanzas, Atención al Cliente — para mapear los puntos de dolor y las tareas repetitivas que consumen tiempo y recursos.',
        features: [
          "Workshops con líderes de área",
          "Mapeo de puntos de dolor y tareas repetitivas",
          "Identificación de procesos candidatos a automatización",
          "Relevamiento de expectativas y objetivos por área",
        ],
      },
      {
        number: "02",
        title: "Auditoría de Datos y Sistemas",
        body: 'Análisis técnico de tu infraestructura actual. Evaluamos si tu base tecnológica <strong>soporta una automatización con IA</strong> o si hay pasos previos que resolver.',
        features: [
          "Relevamiento de fuentes de datos y su calidad",
          "Evaluación de sistemas existentes (CRM, ERP, bases de datos)",
          "Análisis de disponibilidad de APIs e integraciones",
          "Diagnóstico de madurez tecnológica",
        ],
      },
      {
        number: "03",
        title: "Matriz de Priorización e Impacto",
        body: 'Cruzamos el <strong>impacto operativo</strong> de cada oportunidad contra su complejidad técnica. El resultado son automatizaciones fáciles, de alto impacto y proyectos estratégicos de mayor envergadura.',
        features: [
          "Matriz de Viabilidad vs. Impacto para cada oportunidad",
          "Identificación de Quick Wins (alto impacto, baja complejidad)",
          "Clasificación de proyectos por horizonte temporal",
          "Estimación preliminar de ROI por caso de uso",
        ],
      },
      {
        number: "04",
        title: "Roadmap Técnico & Entregables",
        body: 'Al finalizar las 4 semanas, entregamos un <strong>documento ejecutivo</strong> con el roadmap técnico, las oportunidades priorizadas, recursos necesarios y próximos pasos concretos.',
        features: [
          "Documento ejecutivo con hallazgos clave",
          "Roadmap técnico para los próximos 4-6 meses",
          "Oportunidades priorizadas con estimación de ROI",
          "Plan de recursos y próximos pasos",
        ],
        isHighlighted: true,
        badge: "Entregables",
      },
    ],
  },

  // IA Highlight
  iaHighlight: {
    title: "¿Por qué un Assessment antes de implementar?",
    description:
      'La mayoría de los proyectos de IA fallan porque arrancan desde la tecnología en lugar de arrancar desde el problema. Un <strong>Assessment bien hecho</strong> te permite:',
    cards: [
      {
        icon: "🎯",
        title: "Invertir con certeza",
        text: "Sabés exactamente qué automatizar, con qué impacto esperado y qué necesitás ordenar antes. No hay sorpresas técnicas en el medio del proyecto.",
      },
      {
        icon: "⚡",
        title: "Empezar por Quick Wins",
        text: "Identificamos las automatizaciones de alto impacto y baja complejidad que podés implementar en semanas, no en meses. Resultados tempranos generan tracción interna.",
      },
      {
        icon: "📊",
        title: "Alinear expectativas",
        text: "El roadmap técnico alinea a stakeholders internos sobre qué es posible, en qué orden y con qué recursos. Evitás frustraciones y proyectos que nunca terminan.",
      },
    ],
  },

  // Implementation (deliverables)
  implementation: {
    sectionTitle: "¿Qué recibís al final del Assessment?",
    cards: [
      {
        icon: "📋",
        title: "Mapa de Calor de Procesos",
        text: "Una visualización clara de todos los procesos relevados, clasificados por impacto operativo y complejidad técnica. Sabés de un vistazo dónde está el mayor valor.",
      },
      {
        icon: "🗺️",
        title: "Roadmap Técnico 4-6 meses",
        text: "Un plan de implementación concreto: qué automatizar primero (Quick Wins), qué proyectos estratégicos vienen después, qué recursos necesitás y cuándo esperás resultados.",
      },
      {
        icon: "💡",
        title: "Oportunidades Priorizadas con ROI",
        text: "Cada oportunidad de automatización viene con una estimación preliminar de ROI, recursos necesarios y horizonte temporal. Decidís con datos, no con intuición.",
      },
    ],
  },

  // CTA
  cta: {
    title: "Empezá por entender, no por invertir",
    text: "La ventaja de un Assessment no es saber qué tecnología usar — es saber si tu empresa está lista, qué ordenar primero y dónde el impacto es real. Cuatro semanas de diagnóstico pueden ahorrarte meses de implementación sin rumbo.",
    buttonText: "Coordinar Assessment",
    buttonHref: "mailto:info@boty.cloud",
  },

  // Footer
  footer: {
    copyText:
      "© 2026 Boty · Propuesta confidencial en colaboración con Auren y Guayal",
  },
};

async function seed() {
  console.log(`Seeding proposal: ${PROPOSAL_ID}`);
  await db.collection("proposals").doc(PROPOSAL_ID).set(guayalProposal);
  console.log(`Done! View at: /proposals/${PROPOSAL_ID}`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
