import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const PROPOSAL_ID = "boty-ia-proyectos-2026";

const app = initializeApp({
  credential: applicationDefault(),
  projectId: process.env.NEXT_PUBLIC_FIRESTORE_PROJECT_ID || "boty-app",
});

const db = getFirestore(app);

const genericIAProposal = {
  status: "draft",
  createdAt: new Date().toISOString(),

  // Branding
  clientName: "Tu Empresa",
  clientLogo: "",
  botyLogo: "/logos/Boty/Version negativo.png",
  botyLogoFooter: "/logos/Boty/Iso positivo.png",

  // Hero
  hero: {
    tag: "Propuesta de Servicios · 2026",
    titlePre: "Implementación de ",
    titleHighlight: "Inteligencia Artificial",
    titlePost: " para tu empresa",
    subtitle:
      'Framework <strong>"End-to-End"</strong> de implementación de IA y automatización de procesos. Un camino estructurado desde el descubrimiento hasta la optimización continua, con <strong>resultados concretos y medibles</strong> en cada etapa.',
    ctaText: "Conocé nuestra metodología",
    ctaHref: "#modulos",
  },

  // Intro
  intro: {
    title: "No todo se resuelve con IA — pero lo que sí, cambia todo",
    paragraphs: [
      "Cada empresa tiene procesos que pueden beneficiarse de la inteligencia artificial y la automatización. Pero no todos los problemas requieren un modelo de lenguaje; a veces un script tradicional o un RPA es la mejor solución.",
      'Nuestro enfoque es <strong>pragmático y orientado a resultados</strong>: separamos el "ruido de la IA" de lo que realmente genera valor en tu operación. Identificamos los <em>Quick Wins</em> — ganancias rápidas de alto impacto y baja complejidad — y construimos desde ahí.',
      "Te proponemos un proceso de implementación en <strong>5 fases claras</strong>, donde cada etapa tiene entregables concretos, métricas definidas y un enfoque constante en el retorno de la inversión.",
    ],
  },

  // Modules (5 phases of the End-to-End framework)
  modules: {
    sectionTitle: "Framework End-to-End",
    sectionSubtitle:
      "Nuestra metodología de implementación en 5 fases, diseñada para minimizar riesgos y maximizar el impacto desde el primer día.",
    items: [
      {
        number: "01",
        title: "Descubrimiento y Viabilidad",
        body: 'Entendemos tu negocio a fondo para separar las oportunidades reales de las modas tecnológicas. Mapeamos tu situación actual, evaluamos la calidad de tus datos y clasificamos cada idea en una <strong>Matriz de Viabilidad vs. Impacto</strong> para identificar dónde arrancar.',
        features: [
          "Levantamiento de procesos — mapeo As-Is de la operación",
          "Evaluación de datos: ubicación, calidad y disponibilidad",
          "Matriz de Viabilidad vs. Impacto — identificación de Quick Wins",
          "Entregable: Business Case y Roadmap de Implementación",
        ],
      },
      {
        number: "02",
        title: "Diseño y Arquitectura de la Solución",
        body: 'Antes de tocar una línea de código, definimos la estructura completa. En IA, el diseño de la arquitectura y la estrategia de modelos es clave. Definimos cómo se integra con tus sistemas existentes y cómo va a interactuar tu equipo con la nueva tecnología.',
        features: [
          "Arquitectura de integración con CRMs, ERPs y bases de datos",
          "Selección del stack tecnológico — modelos comerciales vs. open source",
          "Diseño de la experiencia de usuario (UX/UI) de la solución",
          "Entregable: Documento de Arquitectura y Especificaciones Técnicas",
        ],
      },
      {
        number: "03",
        title: "Desarrollo del MVP e Iteración",
        body: 'En IA es fundamental <strong>prototipar rápido</strong> para validar que el modelo responde y procesa la información como se espera. Construimos un Mínimo Producto Viable funcional, lo probamos en un entorno controlado y lo iteramos hasta que cumpla con las reglas de negocio.',
        features: [
          "Configuración del entorno y pipeline de datos",
          "Desarrollo core: agentes de IA, prompts y flujos automatizados",
          "Pruebas de precisión — validación contra alucinaciones",
          "Entregable: MVP funcional probado en Sandbox",
        ],
        isHighlighted: true,
        badge: "Fase Clave",
      },
      {
        number: "04",
        title: "Despliegue y Gestión del Cambio",
        body: 'El mayor enemigo de la automatización <strong>no es la tecnología, es la resistencia humana</strong>. Desplegamos de forma gradual — primero con usuarios Beta, luego a toda la empresa — y capacitamos a tu equipo para trabajar <em>con</em> la IA, no contra ella.',
        features: [
          "Paso a producción gradual — grupo Beta → empresa completa",
          "Capacitación y enablement para todos los usuarios",
          "Human-in-the-Loop (HITL): aprobaciones humanas en etapas críticas",
          "Entregable: Solución en producción y manuales de adopción",
        ],
      },
      {
        number: "05",
        title: "Optimización Continua y Soporte",
        body: 'Los procesos cambian y los modelos de IA sufren de <strong>degradación (drift)</strong> con el tiempo. El proyecto no termina cuando se entrega. Te acompañamos con soporte intensivo, monitoreo de métricas reales y ajustes continuos basados en el feedback de tus usuarios.',
        features: [
          "Soporte de estabilización — Hypercare las primeras semanas",
          "Monitoreo de métricas de negocio: horas ahorradas, reducción de errores",
          "Re-entrenamiento y ajuste de prompts según feedback real",
          "Entregable: Reporte de ROI y propuesta de mantenimiento evolutivo",
        ],
      },
    ],
  },

  // IA Highlight
  iaHighlight: {
    title: "¿Por qué Boty?",
    description:
      'No somos una consultora tradicional que entrega un PDF y se va. Somos un equipo técnico que <strong>implementa, acompaña y optimiza</strong> soluciones de IA en el mundo real.',
    cards: [
      {
        icon: "🎯",
        title: "Pragmatismo > Hype",
        text: "Separamos lo que realmente genera valor de las modas tecnológicas. Si un RPA resuelve mejor que un LLM, te lo decimos.",
      },
      {
        icon: "⚡",
        title: "Quick Wins primero",
        text: "Arrancamos por las ganancias rápidas de alto impacto. Resultados visibles desde las primeras semanas, no en 18 meses.",
      },
      {
        icon: "🔄",
        title: "Mejora continua",
        text: "No entregamos y nos vamos. Monitoreamos, ajustamos y optimizamos para que la IA mejore con el uso real del equipo.",
      },
      {
        icon: "🔐",
        title: "Human-in-the-Loop",
        text: "Siempre un humano supervisa lo que la IA hace antes de que impacte al cliente final. Seguridad y control en cada etapa.",
      },
    ],
  },

  // Pricing
  pricing: {
    sectionTitle: "Modelo de Inversión",
    sectionSubtitle:
      "La inversión se adapta al alcance de tu proyecto. Estos son nuestros modelos de trabajo más frecuentes.",
    plans: [
      {
        name: "Diagnóstico Inicial",
        amount: "A definir",
        description: "Fase 1: Descubrimiento y Viabilidad",
        details: [
          "Levantamiento completo de procesos",
          "Evaluación de datos y sistemas existentes",
          "Matriz de Viabilidad vs. Impacto",
          "Business Case con ROI estimado",
          "Roadmap de implementación por fases",
        ],
        addon:
          "Ideal para empresas que quieren <strong>entender el potencial de la IA</strong> antes de comprometerse con una implementación completa.",
      },
      {
        name: "Implementación End-to-End",
        amount: "A definir",
        description: "Fases 1 a 5 completas",
        details: [
          "Descubrimiento, diseño, MVP, despliegue y optimización",
          "Stack tecnológico a medida del proyecto",
          "Capacitación completa del equipo",
          "Soporte Hypercare post-despliegue",
          "Reporte de ROI y mantenimiento evolutivo",
        ],
        addon:
          "Incluye <strong>acompañamiento continuo</strong> durante todo el proceso de transformación.",
        isFeatured: true,
        badge: "Recomendado",
      },
      {
        name: "Soporte y Evolución",
        amount: "Mensual",
        description: "Mantenimiento post-implementación",
        details: [
          "Monitoreo continuo de métricas de negocio",
          "Ajuste de modelos y prompts",
          "Soporte técnico dedicado",
          "Iteraciones y nuevas funcionalidades",
        ],
        addon:
          "Tu <strong>recurso recurrente</strong> de IA — evolución continua basada en datos reales.",
      },
    ],
  },

  // Implementation
  implementation: {
    sectionTitle: "¿Cómo arrancamos?",
    cards: [
      {
        icon: "📞",
        title: "1. Conversación inicial",
        text: "Una reunión sin compromiso para entender tus desafíos, tus procesos actuales y dónde creemos que la IA puede generar el mayor impacto en tu operación.",
      },
      {
        icon: "📋",
        title: "2. Propuesta a medida",
        text: "En base al diagnóstico inicial, te presentamos una propuesta personalizada con alcance, tiempos, inversión y los Quick Wins que podemos lograr juntos.",
      },
      {
        icon: "🚀",
        title: "3. Arranque del proyecto",
        text: "Comenzamos con el Discovery, iteramos rápido hacia el MVP y desplegamos de forma gradual. Resultados medibles desde el primer mes de trabajo.",
      },
    ],
  },

  // CTA
  cta: {
    title: "La IA no espera — tu competencia tampoco",
    text: "Cada día sin automatizar es un día de margen perdido, errores evitables y oportunidades desperdiciadas. Hagamos el diagnóstico juntos y descubrí dónde la IA puede transformar tu operación.",
    buttonText: "Agendar una reunión",
    buttonHref: "mailto:info@boty.cloud",
  },

  // Footer
  footer: {
    copyText:
      "© 2026 Boty · Servicios de Implementación de Inteligencia Artificial",
  },
};

async function seed() {
  console.log(`Seeding proposal: ${PROPOSAL_ID}`);
  await db.collection("proposals").doc(PROPOSAL_ID).set(genericIAProposal);
  console.log(`Done! View at: /proposals/${PROPOSAL_ID}`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
