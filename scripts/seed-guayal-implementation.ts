import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const PROPOSAL_ID = "guayal-implementation-2026";

const app = initializeApp({
  credential: applicationDefault(),
  projectId: process.env.NEXT_PUBLIC_FIRESTORE_PROJECT_ID || "boty-app",
});

const db = getFirestore(app);

const guayalImplementationProposal = {
  status: "draft",
  createdAt: new Date().toISOString(),

  // Branding - Auren and Guayal logos
  clientName: "Guayal × Auren",
  clientLogo: "/logos/Guayal/Guayal.jpeg",
  clientLogoSecondary: "/logos/Auren/Auren.jpeg",
  botyLogoFooter: "/logos/Boty/Iso positivo.png",

  // Hero
  hero: {
    tag: "Implementación IA · Framework End-to-End",
    titlePre: "De la estrategia a la ",
    titleHighlight: "ejecución",
    titlePost: ": implementá IA que funciona",
    subtitle:
      'Ya tenés el roadmap. Ahora toca construir. Nuestro <strong>Framework de Implementación End-to-End</strong> lleva tus oportunidades de IA desde el papel hasta producción en <strong>5 fases probadas</strong>, con foco en resultados tempranos, adopción real y mantenimiento sostenible.',
    ctaText: "Ver la metodología",
    ctaHref: "#fases",
  },

  // Intro
  intro: {
    title: "La brecha entre el plan y la realidad",
    paragraphs: [
      "El 70% de los proyectos de IA nunca llegan a producción. No por falta de tecnología, sino por <strong>falta de método</strong>. Los datos no están listos, los equipos no adoptan la solución, o el proyecto se estanca en una prueba de concepto que nunca escala.",
      "Nuestro Framework End-to-End resuelve exactamente eso: un proceso de <strong>5 fases</strong> que te lleva desde el diagnóstico técnico hasta la operación estable en producción, con checkpoints claros, Quick Wins tempranos y un modelo de soporte continuo.",
      "No vendemos tecnología. Entregamos <strong>automatizaciones funcionando</strong> en manos de tu equipo, con el conocimiento para mantenerlas y escalarlas.",
    ],
  },

  // Modules - The 5-phase framework
  modules: {
    sectionTitle: "Metodología de Implementación: Framework End-to-End",
    sectionSubtitle:
      "Cinco fases concretas para llevar tu proyecto de IA desde el concepto hasta producción estable.",
    items: [
      {
        number: "01",
        title: "Descubrimiento y Viabilidad",
        body: 'El objetivo es entender el negocio del cliente y separar el "ruido de la IA" de lo que realmente genera valor. <strong>No todo se resuelve con un LLM</strong>; a veces un script tradicional o un RPA es mejor.',
        features: [
          "Levantamiento de procesos: mapeo de la situación actual (As-Is)",
          "Evaluación de datos: disponibilidad, calidad y data readiness",
          "Matriz de Viabilidad vs. Impacto para identificar Quick Wins",
          "Entregable: Business Case y Roadmap de Implementación",
        ],
      },
      {
        number: "02",
        title: "Diseño y Arquitectura de la Solución",
        body: 'Antes de tocar una sola línea de código o configurar una API, se define la estructura. En IA, el diseño de la arquitectura y la <strong>estrategia de prompts/modelos</strong> es clave.',
        features: [
          "Arquitectura de integración con sistemas existentes (CRM, ERP, APIs)",
          "Selección del stack tecnológico (modelos, herramientas, plataforma)",
          "Diseño de la experiencia (UX/UI): bot, dashboard, email automation",
          "Entregable: Documento de Arquitectura y Especificaciones Técnicas",
        ],
      },
      {
        number: "03",
        title: "Desarrollo del MVP e Iteración",
        body: 'En IA es fundamental prototipar rápido para validar que el modelo responde y procesa la información como se espera. <strong>Un MVP controlado evita sorpresas en producción</strong>.',
        features: [
          "Configuración del entorno y pipeline de datos",
          "Desarrollo core: agentes de IA, prompts, chains, flujos automatizados",
          "Pruebas de precisión (Evaluation) para evitar alucinaciones",
          "Entregable: MVP funcional probado en entorno Sandbox",
        ],
        isHighlighted: true,
        badge: "Quick Wins",
      },
      {
        number: "04",
        title: "Despliegue y Gestión del Cambio",
        body: 'El mayor enemigo de la automatización no es la tecnología, es la <strong>resistencia humana</strong>. Esta fase es crítica para que el proyecto no muera en el olvido.',
        features: [
          "Paso a producción: despliegue gradual (Beta → Full Rollout)",
          "Capacitación y enablement: enseñar a los equipos a trabajar CON la IA",
          "Human-in-the-Loop (HITL): flujo de aprobaciones en etapas tempranas",
          "Entregable: Solución en producción y manuales de adopción",
        ],
      },
      {
        number: "05",
        title: "Optimización Continua y Soporte",
        body: 'Los procesos cambian y los modelos de IA sufren de "degradación" (drift) con el tiempo. <strong>El proyecto no termina cuando se entrega</strong>.',
        features: [
          "Soporte de estabilización (Hypercare) las primeras semanas",
          "Monitoreo de métricas de negocio: horas ahorradas, reducción de errores, ROI",
          "Re-entrenamiento / ajuste de prompts basado en feedback real",
          "Entregable: Reporte de ROI y propuesta de mantenimiento evolutivo",
        ],
        isHighlighted: true,
        badge: "Soporte Continuo",
      },
    ],
  },

  // IA Highlight
  iaHighlight: {
    title: "¿Por qué un framework estructurado?",
    description:
      'La mayoría de los proyectos de IA fallan porque saltan directamente a la tecnología sin validar datos, arquitectura o adopción. Un <strong>framework probado</strong> te da:',
    cards: [
      {
        icon: "🎯",
        title: "Quick Wins tempranos",
        text: "Empezamos por los casos de uso de alto impacto y baja complejidad identificados en el Assessment. Resultados en semanas, no en meses. Esto genera tracción interna y valida el enfoque.",
      },
      {
        icon: "🛡️",
        title: "Mitigación de riesgo técnico",
        text: "Cada fase tiene checkpoints claros. Si los datos no están listos, lo sabés en la Fase 1, no cuando ya invertiste 3 meses. El MVP en Sandbox evita sorpresas en producción.",
      },
      {
        icon: "📈",
        title: "Adopción real, no solo tecnología",
        text: "El mejor modelo de IA del mundo no sirve si nadie lo usa. La Fase 4 (Gestión del Cambio) y la Fase 5 (Optimización Continua) aseguran que la solución se adopta y se mantiene.",
      },
    ],
  },

  // Implementation (how we work)
  implementation: {
    sectionTitle: "¿Cómo trabajamos?",
    cards: [
      {
        icon: "🚀",
        title: "Entregas incrementales",
        text: "No esperamos 6 meses para mostrar resultados. Cada fase tiene entregables concretos y revisiones con stakeholders. Ajustamos el rumbo si hace falta, sin perder el momentum.",
      },
      {
        icon: "🤝",
        title: "Human-in-the-Loop obligatorio",
        text: "En etapas tempranas, todas las salidas de la IA pasan por revisión humana antes de llegar al cliente final. Esto previene errores costosos y genera confianza en el equipo interno.",
      },
      {
        icon: "📊",
        title: "Métricas de negocio, no solo técnicas",
        text: "No medimos solo la precisión del modelo. Medimos horas ahorradas, reducción de errores, velocidad de respuesta y ROI real. La IA es un medio, no un fin.",
      },
    ],
  },

  // CTA
  cta: {
    title: "Implementá con método, no con esperanza",
    text: "Ya tenés el Assessment. Ya sabés qué automatizar. El siguiente paso es ejecutar con un framework que garantiza resultados, no promesas. Cinco fases probadas, entregas incrementales, y un modelo de soporte continuo para que la IA no termine siendo un proyecto abandonado.",
    buttonText: "Coordinar kick-off de implementación",
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
  await db.collection("proposals").doc(PROPOSAL_ID).set(guayalImplementationProposal);
  console.log(`Done! View at: /proposals/${PROPOSAL_ID}`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
