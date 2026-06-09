import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const PROPOSAL_ID = "boty-ia-assessment-2026";

const app = initializeApp({
  credential: applicationDefault(),
  projectId: process.env.NEXT_PUBLIC_FIRESTORE_PROJECT_ID || "boty-app",
});

const db = getFirestore(app);

const relevamientoProposal = {
  status: "draft",
  createdAt: new Date().toISOString(),

  // Branding
  clientName: "Tu Empresa",
  clientLogo: "",
  botyLogo: "/logos/Boty/Version negativo.png",
  botyLogoFooter: "/logos/Boty/Iso positivo.png",

  // Hero
  hero: {
    tag: "IA Assessment & Roadmap · 2026",
    titlePre: "Descubrí dónde la IA genera ",
    titleHighlight: "retorno real",
    titlePost: " en tu empresa",
    subtitle:
      'No implementamos IA porque esté de moda. En <strong>3 semanas</strong> te mostramos exactamente qué se puede automatizar, cuánto vas a ahorrar y qué datos necesitás ordenar primero — <strong>antes de que gastes un solo dólar en desarrollo</strong>.',
    ctaText: "Ver el proceso",
    ctaHref: "#modulos",
  },

  // Intro
  intro: {
    title: "¿Por qué un Assessment antes de implementar?",
    paragraphs: [
      "Implementar IA a ciegas es la forma más rápida de quemar presupuesto. Muchas empresas invierten en tecnología sin saber si sus datos están listos, si sus procesos lo justifican o si existe una solución más simple que un modelo de inteligencia artificial.",
      'Nuestro <strong>IA Assessment & Roadmap</strong> es un proceso de diagnóstico de 3 semanas que te da claridad total: un mapa de calor de tus procesos, las 3 mejores oportunidades de automatización con su ROI estimado, y un roadmap técnico para los próximos 6 meses.',
      "Si al terminar decidís no avanzar con la implementación, <strong>te quedás con el Roadmap técnico completo</strong> para usarlo cuando quieras. El conocimiento es tuyo.",
    ],
  },

  // Modules (4 steps of the assessment)
  modules: {
    sectionTitle: "El proceso en 3 semanas",
    sectionSubtitle:
      "Un diagnóstico estructurado que transforma la incertidumbre en un plan de acción concreto.",
    items: [
      {
        number: "01",
        title: "Talleres de Inmersión",
        body: 'Reuniones breves de 1 a 2 horas con los <strong>líderes de cada área clave</strong> — Operaciones, Ventas, Finanzas, Atención al Cliente — para mapear los puntos de dolor y las tareas repetitivas que consumen tiempo y recursos.',
        features: [
          "Workshops con líderes de área (1-2 horas cada uno)",
          "Mapeo de puntos de dolor y tareas repetitivas",
          "Identificación de procesos candidatos a automatización",
          "Relevamiento de expectativas y objetivos por área",
        ],
        badge: "Semana 1",
      },
      {
        number: "02",
        title: "Auditoría de Datos y Sistemas",
        body: 'Análisis técnico de tu infraestructura actual. ¿Dónde están tus datos? ¿En Excel, en un CRM, en PDFs escaneados? ¿Tenés APIs disponibles? Evaluamos si tu base tecnológica <strong>soporta una automatización con IA</strong> o si hay pasos previos que resolver.',
        features: [
          "Relevamiento de fuentes de datos y su calidad",
          "Evaluación de sistemas existentes (CRM, ERP, bases de datos)",
          "Análisis de disponibilidad de APIs e integraciones",
          "Diagnóstico de madurez tecnológica",
        ],
        badge: "Semana 2",
      },
      {
        number: "03",
        title: "Matriz de Priorización e Impacto",
        body: 'Cruzamos el <strong>impacto financiero y operativo</strong> de cada oportunidad contra su complejidad técnica. El resultado: un ranking claro de <em>Quick Wins</em> — automatizaciones fáciles y de alto impacto — y proyectos estratégicos de mayor envergadura.',
        features: [
          "Matriz de Viabilidad vs. Impacto para cada oportunidad",
          "Identificación de Quick Wins (alto impacto, baja complejidad)",
          "Clasificación de proyectos por horizonte temporal",
          "Estimación preliminar de ROI por caso de uso",
        ],
        isHighlighted: true,
        badge: "Semana 2-3",
      },
      {
        number: "04",
        title: "Presentación del Business Case",
        body: 'Reunión ejecutiva para entregar el <strong>reporte final completo</strong> y la propuesta económica estimada para las siguientes fases de implementación. Tu equipo directivo sale con un plan de acción claro y fundamentado.',
        features: [
          "Presentación ejecutiva ante el equipo directivo",
          "Entrega del reporte final en formato PDF ejecutivo",
          "Propuesta económica para las fases de implementación",
          "Sesión de preguntas y definición de próximos pasos",
        ],
        badge: "Fin Semana 3",
      },
    ],
  },

  // IA Highlight — Deliverables
  iaHighlight: {
    title: "Entregables tangibles",
    description:
      'Al finalizar el Assessment recibís un <strong>documento ejecutivo profesional</strong> con todo lo que necesitás para tomar decisiones informadas sobre la adopción de IA en tu empresa.',
    cards: [
      {
        icon: "🗺️",
        title: "Mapa de Calor de Procesos",
        text: "Un gráfico visual que muestra qué áreas de tu empresa están listas para la IA y cuáles necesitan madurar antes de automatizar.",
      },
      {
        icon: "📑",
        title: "Fichas de Caso de Uso",
        text: 'Para las 3 mejores oportunidades: problema actual → solución propuesta → tecnología sugerida → estimación de ROI (ej. "ahorro de 15 horas semanales").',
      },
      {
        icon: "📅",
        title: "Roadmap de Adopción",
        text: "Cronograma sugerido de transformación para los próximos 6 meses: qué implementar primero, qué datos ordenar y qué capacidades construir.",
      },
    ],
  },

  // Pricing
  pricing: {
    sectionTitle: "Inversión",
    sectionSubtitle:
      "Por una fracción del costo de un desarrollo, sabés exactamente dónde invertir y cuánto vas a recuperar.",
    plans: [
      {
        name: "IA Assessment & Roadmap",
        amount: "A definir",
        description: "Diagnóstico completo en 3 semanas",
        details: [
          "Talleres de inmersión con líderes de área",
          "Auditoría de datos y sistemas existentes",
          "Matriz de Priorización e Impacto",
          "Presentación ejecutiva del Business Case",
          "Mapa de Calor de Procesos (PDF ejecutivo)",
          "3 Fichas de Caso de Uso con ROI estimado",
          "Roadmap de Adopción a 6 meses",
        ],
        isFeatured: true,
        badge: "3 semanas",
      },
      {
        name: "Assessment + Implementación",
        amount: "A definir",
        description: "Diagnóstico + desarrollo del primer Quick Win",
        details: [
          "Todo lo incluido en el Assessment",
          "Diseño y arquitectura de la solución prioritaria",
          "Desarrollo del MVP del primer Quick Win",
          "Despliegue gradual con grupo Beta",
          "Capacitación del equipo involucrado",
          "Soporte Hypercare post-despliegue",
        ],
        addon:
          "Ideal para empresas que ya saben que quieren <strong>avanzar rápido</strong> con resultados concretos.",
      },
    ],
  },

  // Implementation
  implementation: {
    sectionTitle: "¿Cómo arrancamos?",
    cards: [
      {
        icon: "📞",
        title: "1. Reunión de alcance",
        text: "Una conversación de 30 minutos para entender tu empresa, definir qué áreas participan del Assessment y coordinar la agenda de workshops de la Semana 1.",
      },
      {
        icon: "🔍",
        title: "2. Diagnóstico en marcha",
        text: "Durante 3 semanas trabajamos con tu equipo: workshops, auditoría técnica y análisis de oportunidades. Vos seguís operando con normalidad — nosotros nos adaptamos a tus tiempos.",
      },
      {
        icon: "📊",
        title: "3. Entrega y decisión",
        text: "Presentamos el Business Case completo. Con los datos sobre la mesa, decidís si avanzar con la implementación, postergarla o explorar alternativas. Sin presión, con claridad.",
      },
    ],
  },

  // CTA
  cta: {
    title: "La claridad es el primer paso",
    text: "En 3 semanas vas a saber exactamente qué automatizar, cuánto ahorrar y por dónde empezar. Sin compromisos de implementación, sin sorpresas técnicas. Solo datos, análisis y un plan de acción concreto.",
    buttonText: "Agendar reunión de alcance",
    buttonHref: "mailto:info@boty.cloud",
  },

  // Footer
  footer: {
    copyText:
      "© 2026 Boty · IA Assessment & Roadmap — Propuesta de Servicios",
  },
};

async function seed() {
  console.log(`Seeding proposal: ${PROPOSAL_ID}`);
  await db.collection("proposals").doc(PROPOSAL_ID).set(relevamientoProposal);
  console.log(`Done! View at: /proposals/${PROPOSAL_ID}`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
