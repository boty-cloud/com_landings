/**
 * Auren Proposal Seed — AJ Servicios
 * Automatización de prospección y gestión comercial con IA
 * Based on: .claude/rules/aj_servicios.md + Auren template
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
  id: "aj-servicios-auren-2026",
  status: "draft",
  createdAt: new Date().toISOString(),
  brand: "auren",

  // ═══════════════════════════════════════════════
  // BRANDING
  // ═══════════════════════════════════════════════
  clientName: "AJ Servicios",
  clientLogo: "/logos/AJServicios/AJServicios.jpg",
  aurenLogo: "/logos/Auren/Auren.jpeg",
  aurenClaim: "Auren Consultoría",

  // ═══════════════════════════════════════════════
  // HERO
  // ═══════════════════════════════════════════════
  hero: {
    tag: "Propuesta de Servicios · 2026",
    titlePre: "Automatización inteligente de la prospección para",
    titleHighlight: "AJ Servicios",
    titlePost: "",
    subtitle:
      "Solución de automatización con inteligencia artificial para el proceso de prospección y gestión de leads, integrando LinkedIn, mail y WhatsApp en un flujo continuo hasta el cierre del negocio.",
    ctaText: "Conocé la propuesta",
    ctaHref: "#intro",
  },

  // ═══════════════════════════════════════════════
  // 1. ENTENDIMIENTO DE LA EMPRESA
  // ═══════════════════════════════════════════════
  companyUnderstanding: {
    title: "Entendimiento de la Empresa",
    paragraphs: [
      "<strong>AJ Servicios</strong> es una empresa orientada a la venta de servicios profesionales en el mercado B2B, con un proceso comercial centrado en la generación y gestión de nuevos contactos y potenciales clientes.",
      "<strong>Canal principal de prospección:</strong> el contacto en frío se realiza a través de <strong>LinkedIn</strong>, plataforma desde la cual se gestiona el intercambio de información hasta avanzar hacia instancias de contacto más directas por mail (Gmail) y WhatsApp.",
      "<strong>Situación operativa actual:</strong> el proceso ya cuenta con una primera etapa de automatización. La prospección y el armado de listas se realiza con <strong>Sales Navigator</strong>, el primer mensaje se envía automáticamente y, ante una respuesta con interés, la inteligencia artificial prepara una respuesta a la consulta del prospecto.",
      "<strong>Cierre del negocio:</strong> una vez calificado el lead, el intercambio de propuestas, la negociación y el cierre se llevan adelante por los canales directos de comunicación.",
    ],
  },

  // ═══════════════════════════════════════════════
  // 2. ENTENDIMIENTO DE LA NECESIDAD
  // ═══════════════════════════════════════════════
  needUnderstanding: {
    title: "Entendimiento de la Necesidad",
    paragraphs: [
      "AJ Servicios necesita <strong>profundizar la automatización</strong> de su proceso de prospección y gestión comercial con inteligencia artificial, corrigiendo las limitaciones del flujo actual y reduciendo la carga manual del equipo.",
      "<strong>Puntos de dolor actuales:</strong>",
      "<ul>" +
        "<li><strong>Análisis de respuestas incompleto:</strong> la herramienta actual no identifica cuando el prospecto envía dos mensajes distintos sobre el mismo tema y solo actúa sobre el primero.</li>" +
        "<li><strong>Interacción manual:</strong> una vez que la IA elabora la respuesta, el responsable debe copiar el mensaje y pegarlo manualmente en la conversación de LinkedIn, gestionando toda la interacción a mano.</li>" +
        "<li><strong>Seguimiento sin sistematizar:</strong> no existe un monitoreo automático de los tiempos de respuesta para dar seguimiento a cada oportunidad.</li>" +
        "<li><strong>Escalabilidad limitada:</strong> el proceso manual pone un techo a la cantidad de conversaciones y oportunidades que el equipo puede gestionar.</li>" +
      "</ul>",
      "<strong>Objetivo:</strong> construir un flujo automatizado que acompañe al prospecto desde que muestra interés hasta que se convierte en un lead calificado derivado al canal directo, manteniendo siempre la aprobación humana sobre cada respuesta.",
    ],
  },

  // ═══════════════════════════════════════════════
  // 3. SOLUCIÓN
  // ═══════════════════════════════════════════════
  solution: {
    title: "Propuesta de Trabajo",
    subtitle:
      "Objetivo: automatizar el ciclo de prospección y gestión comercial con IA, escalando la generación de leads calificados sin perder el control humano.",
    description:
      "La solución se desarrolla en tres fases incrementales que parten de la automatización de la conversación en LinkedIn y avanzan hacia la gestión sobre canales directos y la integración de campañas de Google Ads.",
    methodology: {
      title: "Metodología de Implementación",
      description:
        "Seguimos un enfoque estructurado con Human-in-the-Loop: la IA propone, el responsable comercial aprueba y el sistema ejecuta y monitorea. Cada fase incorpora retroalimentación y aprendizaje continuo sobre los mensajes enviados y las respuestas recibidas.",
    },
    phases: [
      {
        title: "Fase 1: Automatización en LinkedIn",
        description:
          "Automatización del ciclo de conversación en LinkedIn. Ante el interés del prospecto, la IA arma una respuesta contemplando todos los mensajes recibidos; el responsable modifica o aprueba; el sistema impacta la respuesta automáticamente y monitorea los tiempos de respuesta para el seguimiento de la oportunidad, hasta transformar al prospecto en un lead calificado derivado al canal directo.",
        deliverables: [
          "Respuestas de IA con contexto completo de la conversación",
          "Flujo de aprobación humana (editar / aprobar)",
          "Envío automático de mensajes en LinkedIn",
          "Monitoreo de tiempos de respuesta y seguimiento de oportunidades",
          "Derivación de leads calificados a mail / WhatsApp",
          "Retroalimentación y aprendizaje continuo",
        ],
        duration: "Meses 1 a 3",
      },
      {
        title: "Fase 2: Automatización en mail y WhatsApp",
        description:
          "Extensión de la automatización del proceso de venta sobre los canales directos (Gmail y WhatsApp): captura de datos del cliente provenientes de LinkedIn, gestión de reuniones comerciales, elaboración de propuestas de servicio en base a los alcances de la solución y seguimiento automático del análisis de la propuesta hasta el cierre del negocio.",
        deliverables: [
          "Captura de datos del prospecto para la negociación",
          "Gestión y coordinación de reuniones comerciales",
          "Elaboración asistida de propuestas de servicio",
          "Seguimiento automático hasta el cierre del negocio",
        ],
        duration: "Fase posterior",
      },
      {
        title: "Fase 3: Integración con Google Ads",
        description:
          "Incorporación de la gestión de prospectos provenientes de campañas de Google Ads: identificación y calificación del lead mediante un primer contacto automatizado, análisis de la respuesta, derivación al canal correspondiente e integración con el flujo de la Fase 2, más el análisis de mejoras en los mensajes de campaña.",
        deliverables: [
          "Identificación de prospectos que ingresan por campañas",
          "Calificación del lead con primer contacto automatizado",
          "Derivación al canal correspondiente e integración con Fase 2",
          "Análisis de mejoras en los mensajes de las campañas",
        ],
        duration: "Fase posterior",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // 4. QUIÉNES SOMOS (fijo Auren)
  // ═══════════════════════════════════════════════
  aboutUs: {
    title: "¿Por qué elegir Auren?",
    logo: "/logos/Auren/Auren.jpeg",
    paragraphs: [
      "Auren es una firma internacional de consultoría con presencia en más de 90 países y más de 30.000 profesionales especializados.",
      "<strong>Enfoque boutique y cercano</strong>, con respaldo metodológico de estándares internacionales.",
      "<strong>Visión integrada</strong> entre consultoría estratégica, BPO, tecnología y recursos humanos.",
      "<strong>Compromiso con la Responsabilidad Social Corporativa</strong> alineado con los Objetivos de Desarrollo Sostenible (ODS) de la ONU.",
      "Auren Latin America combina la excelencia global con el conocimiento profundo del mercado local, ofreciendo soluciones adaptadas a las necesidades específicas de cada cliente.",
    ],
  },

  // ═══════════════════════════════════════════════
  // 5. PROPUESTA ECONÓMICA
  // ═══════════════════════════════════════════════
  pricing: {
    sectionTitle: "Propuesta Económica",
    sectionSubtitle: "Inversión para el desarrollo e implementación de la Fase 1.",
    plans: [
      {
        name: "Fase 1 · Automatización LinkedIn",
        amount: "USD 25.000",
        amountSuffix: "+ IVA",
        description:
          "Desarrollo e implementación completa del flujo automatizado de conversación y calificación de leads en LinkedIn.",
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

  // ═══════════════════════════════════════════════
  // 6. EQUIPO DE TRABAJO
  // ═══════════════════════════════════════════════
  team: {
    title: "Equipo de Trabajo",
    members: [
      {
        name: "Micaela Puebla",
        role: "Líder de Consultoría Auren",
        photo: "/logos/Auren/team/micaela.jpg",
      },
      {
        name: "Ayelén Capalbo",
        role: "Consultora Senior Auren",
        photo: "/logos/Auren/team/ayelen.jpg",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // IMPLEMENTACIÓN (Pasos generales)
  // ═══════════════════════════════════════════════
  implementation: {
    sectionTitle: "Cómo Arrancamos",
    cards: [
      {
        icon: "📋",
        title: "Kickoff",
        text: "Reunión inicial para alinear expectativas, definir alcances y presentar al equipo.",
      },
      {
        icon: "🔍",
        title: "Relevamiento",
        text: "Análisis del proceso actual de prospección, herramientas y flujos en LinkedIn.",
      },
      {
        icon: "⚙️",
        title: "Implementación",
        text: "Desarrollo del flujo automatizado de la Fase 1 con seguimiento semanal.",
      },
      {
        icon: "✅",
        title: "Estabilización",
        text: "Soporte post-implementación, retroalimentación y optimización continua.",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // CTA & FOOTER
  // ═══════════════════════════════════════════════
  cta: {
    title: "¿Listo para escalar la prospección de AJ Servicios?",
    text: "Coordiná una reunión con nuestro equipo para comenzar por la Fase 1 y definir los próximos pasos.",
    buttonText: "Agendar reunión",
    buttonHref: "mailto:contacto@auren.com",
  },

  footer: {
    copyText: "© 2026 Auren Latin America. Todos los derechos reservados.",
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
    console.log("🌱 Seeding Auren proposal:", proposal.id);
    await db.collection("proposals").doc(proposal.id).set(proposal);
    console.log("✅ Proposal seeded successfully!");
    console.log(`🔗 URL: https://boty-landings-814191904626.us-central1.run.app/${proposal.id}`);
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding proposal:", error);
    process.exit(1);
  }
}

seed();
