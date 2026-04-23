import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const PROPOSAL_ID = "auren-latam-2026";

const app = initializeApp({
  credential: applicationDefault(),
  projectId: process.env.NEXT_PUBLIC_FIRESTORE_PROJECT_ID || "boty-app",
});

const db = getFirestore(app);

const aurenProposal = {
  status: "draft",
  createdAt: new Date().toISOString(),

  // Branding
  clientName: "Auren Latin America",
  clientLogo: "/logos/Auren/Auren_Boty.webp",
  botyLogo: "/logos/Boty/Version negativo.png",
  botyLogoFooter: "/logos/Boty/Iso positivo.png",

  // Hero
  hero: {
    tag: "Propuesta Estratégica · Fase 1 · Abril 2026",
    titlePre: "IA para ",
    titleHighlight: "liderar",
    titlePost: " los servicios profesionales en LatAm",
    subtitle:
      'Propuesta de <strong>Implementación y Comercialización de IA</strong> para el Directorio Ejecutivo de <strong>Auren Latin&nbsp;America</strong>. El momento de dar el salto es ahora.',
    ctaText: "Ver la estrategia",
    ctaHref: "#modulos",
  },

  // Intro
  intro: {
    title: "La oportunidad de leapfrogging está abierta",
    paragraphs: [
      "El sector de servicios profesionales basados en conocimiento representa una oportunidad de <strong>USD 100.000 millones en América Latina</strong>. Con una facturación global de <strong>USD 190M</strong>, una tasa de expansión internacional del 15% y el respaldo estratégico de <strong>Waterland Private Equity</strong> para crecimiento en IA y ciberseguridad, Auren tiene la posición ideal para capturar ese mercado.",
      "Pero la ventana se cierra. El modelo tradicional de la pirámide de servicios profesionales — horas facturables, revisión manual, conocimiento fragmentado entre oficinas — está colapsando frente a firmas que ya operan con IA nativa. La pregunta no es si adoptar IA, sino quién la adopta primero y define las reglas del juego.",
      'Esta propuesta presenta un <strong>Mandato Dual</strong>: transformar Auren internamente en una firma <em>AI-First</em> (productividad) y simultáneamente crear <strong>nuevas verticales de revenue</strong> comercializando capacidades de IA hacia el mercado (crecimiento). Un enfoque que protege los márgenes actuales mientras construye los del futuro.',
    ],
  },

  // Modules
  modules: {
    sectionTitle: "El Mandato Dual: Optimizar + Comercializar",
    sectionSubtitle:
      "Cinco pilares que transforman a Auren por dentro y generan nuevos ingresos por fuera.",
    items: [
      {
        number: "01",
        title: "Auditoría 2.0",
        body: 'Transición del muestreo estadístico a <strong>cobertura del 100% de los datos</strong> mediante detección algorítmica de anomalías. El auditor deja de buscar la aguja en el pajar — la IA le presenta las agujas clasificadas por criticidad y probabilidad de materialidad.',
        features: [
          "Cobertura total de transacciones (no muestreo)",
          "Detección algorítmica de anomalías",
          "Clasificación por criticidad y materialidad",
          "Reducción drástica del tiempo de fieldwork",
        ],
      },
      {
        number: "02",
        title: "Defensa Fiscal Predictiva",
        body: 'Desarrollo de sistemas <strong>"Mirror AI"</strong> que replican la lógica de los organismos fiscales (AFIP/SIPER en Argentina, SAT en México, SII en Chile) para anticipar triggers de auditoría <em>antes</em> de que ocurran. El cliente recibe una defensa proactiva, no reactiva.',
        features: [
          "Modelos Mirror AI por jurisdicción",
          "Anticipación de triggers AFIP/SIPER",
          "Cobertura multi-país: AR, MX, CL, BR, PE",
          "De defensa reactiva a asesoría predictiva",
        ],
      },
      {
        number: "03",
        title: "Legal Velocity & Knowledge Graph",
        body: 'Búsqueda semántica potenciada por IA para <strong>due diligence de M&A</strong>, reduciendo horas de revisión manual en un orden de magnitud. Complementado con un <strong>Knowledge Graph</strong> interno con RAG (Retrieval-Augmented Generation) que unifica el capital intelectual de Auren a través de 60 países.',
        features: [
          "Búsqueda semántica para due diligence",
          "RAG seguro sobre base documental interna",
          "Capital intelectual unificado (60 países)",
          "Reducción de horas de revisión legal",
        ],
      },
      {
        number: "04",
        title: "Nuevas Verticales de Revenue",
        body: 'Tres líneas de negocio nuevas para comercializar hacia el mercado: <strong>AI Readiness Assessments</strong> con un framework propietario para empresas LatAm, <strong>Algorithmic Due Diligence</strong> para auditar modelos de IA y data provenance en operaciones de M&A, y <strong>práctica de Regulación & Ética de IA</strong> (LGPD Brasil, Fintech Chile, Ley de IA Perú).',
        features: [
          "AI Readiness Assessments (framework propietario)",
          "Algorithmic Due Diligence para M&A",
          "Advisory regulatorio: LGPD, Fintech, IA",
          "Revenue externo desde capacidades internas",
        ],
        isHighlighted: true,
        badge: "Nuevo Revenue",
      },
      {
        number: "05",
        title: "Ecosistema Estratégico & Gobernanza",
        body: 'Arquitectura basada en integraciones con <strong>Microsoft, OpenAI (Stargate Project) y SAP</strong>, con despliegues en nube privada soberana para cumplir con requisitos de data residency. Modelo <strong>Human-in-the-Loop (HITL)</strong> obligatorio para prevenir alucinaciones en filings legales y de auditoría.',
        features: [
          "Integraciones Microsoft + OpenAI + SAP",
          "Sovereign AI y nube privada",
          "Human-in-the-Loop obligatorio",
          "De horas facturables a outcomes de valor",
        ],
      },
    ],
  },

  // IA Highlight
  iaHighlight: {
    title: "Proteger los márgenes del futuro",
    description:
      'La pirámide tradicional de servicios profesionales está bajo presión estructural. La IA permite a Auren <strong>defender su posición competitiva</strong> en tres frentes simultáneos:',
    cards: [
      {
        icon: "⚡",
        title: "Productividad interna",
        text: "Auditoría 2.0, defensa fiscal predictiva y due diligence acelerada multiplican el output por profesional sin aumentar headcount. Más valor por hora facturada.",
      },
      {
        icon: "💰",
        title: "Revenue nuevo",
        text: "AI Readiness, Algorithmic Due Diligence y advisory regulatorio crean líneas de negocio que no existían hace 18 meses. Primero al mercado gana.",
      },
      {
        icon: "🌎",
        title: "Escala regional",
        text: "El Knowledge Graph unifica el expertise de 60 países. Un consultor en Chile accede al mismo capital intelectual que uno en Argentina. La firma opera como una sola mente.",
      },
    ],
  },

  // Implementation
  implementation: {
    sectionTitle: "Hoja de Ruta de Implementación",
    cards: [
      {
        icon: "🔍",
        title: "Fase 1 · Diagnóstico (6 semanas)",
        text: "Assessment de infraestructura tecnológica, flujos de trabajo y data readiness en cada hub regional. Entrega de un informe ejecutivo al Directorio con la arquitectura de IA propuesta y el roadmap de implementación por país.",
      },
      {
        icon: "🚀",
        title: "Fase 2 · Piloto Dual (14-18 semanas)",
        text: "Implementación simultánea de un piloto interno (Auditoría 2.0 en una línea de servicio) y un piloto comercial (AI Readiness Assessment con un cliente real). Validación de métricas de productividad y revenue antes de escalar.",
      },
      {
        icon: "🌎",
        title: "Fase 3 · Rollout Regional (24-36 semanas)",
        text: "Despliegue progresivo por hub: Argentina, Colombia, México, Chile y Uruguay. Activación del Knowledge Graph con RAG corporativo. Implementación de Mirror AI fiscal por jurisdicción. Transición de KPIs de horas facturables a outcomes de valor.",
      },
    ],
  },

  // CTA
  cta: {
    title: "El primero en moverse define las reglas",
    text: "En servicios profesionales, la IA no es una ventaja temporal — es una brecha permanente. Cada trimestre sin IA es un trimestre donde la pirámide tradicional se erosiona y los competidores AI-native capturan market share. Auren tiene la escala, el respaldo de Waterland y la presencia regional para liderar. Solo falta ejecutar.",
    buttonText: "Coordinar reunión con el Directorio",
    buttonHref: "mailto:info@boty.cloud",
  },

  // Footer
  footer: {
    copyText:
      "© 2026 Boty · Propuesta confidencial para Auren Latin America",
  },
};

async function seed() {
  console.log(`Seeding proposal: ${PROPOSAL_ID}`);
  await db.collection("proposals").doc(PROPOSAL_ID).set(aurenProposal);
  console.log(`Done! View at: /proposals/${PROPOSAL_ID}`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
