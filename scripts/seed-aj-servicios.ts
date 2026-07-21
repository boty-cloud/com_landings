import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const PROPOSAL_ID = "aj-servicios-2026";

const app = initializeApp({
  credential: applicationDefault(),
  projectId: process.env.NEXT_PUBLIC_FIRESTORE_PROJECT_ID || "boty-app",
});

const db = getFirestore(app);

const ajProposal = {
  status: "draft",
  createdAt: new Date().toISOString(),

  // Branding
  clientName: "AJ Servicios",
  clientLogo: "/logos/AJServicios/AJServicios.jpg",
  botyLogo: "/logos/Boty/Version negativo.png",
  botyLogoFooter: "/logos/Boty/Iso positivo.png",

  // Hero
  hero: {
    tag: "Propuesta de Automatización Comercial · 2026",
    titlePre: "AJ Servicios, automatización inteligente de la ",
    titleHighlight: "prospección y gestión comercial",
    titlePost: " con IA",
    subtitle:
      'Evolución del proceso de prospección y gestión de leads mediante <strong>automatización con inteligencia artificial</strong>, integrando LinkedIn, mail y WhatsApp en un flujo continuo que acompaña al prospecto desde el contacto en frío hasta el <strong>cierre del negocio</strong>.',
    ctaText: "Ver la solución",
    ctaHref: "#modulos",
  },

  // Intro — entendimiento de la necesidad
  intro: {
    title: "El desafío: escalar la prospección sin perder el toque humano",
    paragraphs: [
      "AJ Servicios centraliza hoy su prospección en el <strong>contacto en frío por LinkedIn</strong>, para luego avanzar hacia canales directos como mail (Gmail) y WhatsApp, donde se intercambian propuestas y se cierra el negocio.",
      "El proceso ya cuenta con una <strong>primera etapa de automatización</strong>: la prospección y el armado de listas se realiza con Sales Navigator, el primer mensaje se envía automáticamente y, ante una respuesta con interés, la IA prepara una respuesta a la consulta. Sin embargo, presenta puntos débiles a corregir —como no contemplar múltiples mensajes del prospecto sobre un mismo tema— y toda la interacción posterior sigue siendo <strong>manual</strong>.",
      "El objetivo de esta propuesta es <strong>continuar y profundizar la automatización</strong>, liberando tiempo del equipo comercial, mejorando la calidad de las respuestas y asegurando el seguimiento de cada oportunidad hasta convertirla en un lead calificado.",
    ],
  },

  // Modules — Fase 1 solution components
  modules: {
    sectionTitle: "La Solución · Fase 1",
    sectionSubtitle:
      "Automatización del ciclo de conversación en LinkedIn, con la IA como copiloto del responsable comercial y el humano siempre en control de la aprobación final.",
    items: [
      {
        number: "01",
        title: "Respuesta con contexto completo",
        body: 'La IA arma la respuesta <strong>contemplando todos los mensajes recibidos</strong> del prospecto, corrigiendo el punto débil actual de analizar solo el primer mensaje. Entiende la conversación completa, incluso cuando el prospecto envía varios mensajes sobre el mismo tema.',
        features: [
          "Análisis de la conversación completa, no solo del primer mensaje",
          "Detección de múltiples consultas sobre un mismo tema",
          "Respuestas contextualizadas y coherentes con el historial",
          "Corrección del punto débil del proceso actual",
        ],
      },
      {
        number: "02",
        title: "Aprobación humana (Human-in-the-Loop)",
        body: 'El responsable de AJ Servicios <strong>modifica o aprueba</strong> la respuesta elaborada por la IA antes de enviarla. El control comercial y la voz de la empresa quedan siempre en manos del equipo.',
        features: [
          "Revisión y edición de cada respuesta antes del envío",
          "Aprobación con un clic",
          "Control total del tono y la voz comercial",
          "Cero riesgo de mensajes fuera de lugar",
        ],
      },
      {
        number: "03",
        title: "Impacto automático en LinkedIn",
        body: 'Una vez aprobada, el sistema <strong>impacta la respuesta de forma automática en LinkedIn</strong>, eliminando el proceso manual de copiar y pegar mensajes en cada conversación.',
        features: [
          "Envío automático del mensaje aprobado a LinkedIn",
          "Eliminación del copiar/pegar manual",
          "Ahorro de tiempo operativo del responsable",
          "Consistencia en todas las conversaciones",
        ],
      },
      {
        number: "04",
        title: "Monitoreo y seguimiento de oportunidades",
        body: 'El sistema <strong>monitorea los tiempos de respuesta</strong> del prospecto para hacer seguimiento activo de cada conversación y oportunidad, asegurando que ningún lead se enfríe por falta de contacto.',
        features: [
          "Monitoreo del tiempo de respuesta del prospecto",
          "Alertas y recordatorios de seguimiento",
          "Gestión activa de cada oportunidad",
          "Reducción de leads perdidos por inactividad",
        ],
      },
      {
        number: "05",
        title: "Calificación y derivación de leads",
        body: 'La conversación continúa hasta transformar al prospecto en un <strong>lead calificado</strong> que pasa al canal directo de comunicación (mail o WhatsApp), listo para avanzar a la instancia comercial.',
        features: [
          "Continuidad del proceso de conversación",
          "Identificación de leads calificados con interés real",
          "Derivación al canal directo (mail / WhatsApp)",
          "Transición ordenada hacia la negociación",
        ],
        isHighlighted: true,
        badge: "Corazón de la Fase 1",
      },
      {
        number: "06",
        title: "Retroalimentación y aprendizaje",
        body: 'Proceso continuo de <strong>retroalimentación y aprendizaje</strong> de la herramienta sobre los mensajes enviados y las respuestas recibidas, mejorando la comunicación con el tiempo.',
        features: [
          "Aprendizaje sobre mensajes enviados y respuestas",
          "Mejora continua de la calidad de la comunicación",
          "Optimización basada en resultados reales",
          "La herramienta se vuelve más efectiva con el uso",
        ],
      },
    ],
  },

  // IA Highlight — el flujo de la Fase 1
  iaHighlight: {
    title: "El flujo automatizado de la Fase 1",
    description:
      "Un ciclo continuo donde la IA propone, el humano decide y el sistema ejecuta y monitorea.",
    cards: [
      {
        icon: "",
        title: "1. Interés del prospecto",
        text: "El prospecto muestra interés en el servicio y la IA arma una respuesta contemplando todos los mensajes recibidos.",
      },
      {
        icon: "",
        title: "2. Aprobación",
        text: "El responsable modifica o aprueba la respuesta elaborada por la IA.",
      },
      {
        icon: "",
        title: "3. Envío y monitoreo",
        text: "El sistema impacta la respuesta en LinkedIn y monitorea los tiempos de respuesta para el seguimiento.",
      },
      {
        icon: "",
        title: "4. Calificación",
        text: "La conversación avanza hasta convertirse en un lead calificado que pasa al canal directo (mail / WhatsApp).",
      },
    ],
  },

  // Pricing
  pricing: {
    sectionTitle: "Inversión",
    sectionSubtitle:
      "Propuesta económica cerrada para el desarrollo e implementación de la Fase 1.",
    plans: [
      {
        name: "Fase 1 · Automatización LinkedIn",
        amount: "USD 25.000",
        amountSuffix: "+ IVA",
        description: "Desarrollo e implementación completa del flujo automatizado de conversación y calificación de leads en LinkedIn.",
        details: [
          "30% contra aceptación de la propuesta",
          "2 cuotas mensuales de USD 5.500 (meses 1 y 2)",
          "1 cuota de USD 6.500 (mes 3)",
          "Incluye desarrollo, implementación y puesta en marcha",
        ],
        isFeatured: true,
        badge: "Propuesta Fase 1",
      },
    ],
  },

  // Implementation — roadmap de fases
  implementation: {
    sectionTitle: "Roadmap de crecimiento por fases",
    cards: [
      {
        icon: "🤝",
        title: "Fase 1 · Automatización en LinkedIn",
        text: "Automatización del ciclo de conversación en LinkedIn: la IA arma respuestas con contexto completo, el responsable aprueba, el sistema impacta y monitorea, y el prospecto se convierte en lead calificado derivado a mail o WhatsApp. Incluye retroalimentación y aprendizaje continuo.",
      },
      {
        icon: "📧",
        title: "Fase 2 · Automatización mail y WhatsApp",
        text: "Continuación de la automatización del proceso de venta sobre los canales directos (Gmail y WhatsApp): captura de datos del cliente, gestión de reuniones comerciales, elaboración de propuestas de servicio y seguimiento automático del análisis de la propuesta hasta el cierre del negocio.",
      },
      {
        icon: "📈",
        title: "Fase 3 · Integración con Google Ads",
        text: "Incorporación de la gestión de prospectos provenientes de campañas de Google Ads: identificación y calificación del lead con un primer contacto automatizado, análisis de la respuesta, derivación al canal correspondiente e integración con el flujo de la Fase 2. Análisis de mejoras en los mensajes de campaña.",
      },
    ],
  },

  // CTA
  cta: {
    title: "Automatizemos juntos la prospección de AJ Servicios",
    text: "Estamos listos para comenzar por la Fase 1 y construir un motor comercial que escala, aprende y no deja pasar ninguna oportunidad.",
    buttonText: "Coordinar reunión",
    buttonHref: "mailto:info@boty.cloud",
  },

  // Footer
  footer: {
    copyText: "© 2026 Boty · Propuesta confidencial para AJ Servicios",
  },
};

async function seed() {
  console.log(`Seeding proposal: ${PROPOSAL_ID}`);
  await db.collection("proposals").doc(PROPOSAL_ID).set(ajProposal);
  console.log(`Done! View at: /proposals/${PROPOSAL_ID}`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
