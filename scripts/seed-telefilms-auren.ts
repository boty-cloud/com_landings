/**
 * Auren Proposal Seed — Telefilms
 * Gestión de información y documentos comerciales + Data Lake corporativo
 * Based on: .claude/rules/telefilms_new.docx.md (revisión 2 fases)
 *           merged with .claude/rules/Telefilms_data_lake.md (detalle original)
 */

import admin from "firebase-admin";
import { Proposal } from "../types/proposal";
import { AUREN_ABOUT_US, AUREN_TEAM } from "./auren-shared";

// Initialize Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId: "boty-app",
  });
}

const db = admin.firestore();

const proposal: Proposal = {
  id: "telefilms-data-lake-2026",
  status: "draft",
  createdAt: new Date().toISOString(),
  brand: "auren",

  // ═══════════════════════════════════════════════
  // BRANDING
  // ═══════════════════════════════════════════════
  clientName: "Telefilms",
  clientLogo: "/logos/Telefilms/Telefilms.webp",
  aurenLogo: "/logos/Auren/Auren.jpeg",
  aurenClaim: "Auren Consultoría",

  // ═══════════════════════════════════════════════
  // HERO
  // ═══════════════════════════════════════════════
  hero: {
    tag: "Propuesta de Servicios · 2026",
    titlePre: "Gestión de información y documentos comerciales para ",
    titleHighlight: "Telefilms",
    titlePost: "",
    subtitle:
      "Automatización del flujo de información comercial con distribuidores y productores, reduciendo las cargas operativas manuales y sentando las bases de una capa corporativa de datos escalable para la toma de decisiones.",
    ctaText: "Descargá la propuesta en PDF",
    ctaHref: "#print",
  },

  // ═══════════════════════════════════════════════
  // 1. ENTENDIMIENTO DE LA EMPRESA
  // ═══════════════════════════════════════════════
  companyUnderstanding: {
    title: "Entendimiento de la Empresa",
    paragraphs: [
      "El <strong>departamento comercial de Telefilms</strong> mantiene un flujo de información continuo entre <strong>productores de contenido</strong>, las <strong>áreas comerciales de Telefilms</strong> y los distintos <strong>distribuidores de contenido</strong>.",
      "<strong>Proceso actual:</strong> hasta el momento ese flujo se realiza de forma manual, quedando en manos de los distintos responsables comerciales de cada canal la correcta recepción de la información por parte de los distribuidores.",
      "<strong>Múltiples orígenes de información:</strong> parte de los datos se extraen directamente de reportes de los sistemas de los distribuidores y otros suelen ser archivos de Excel. Una vez recibida, la información se procesa de forma manual, adaptándola a los formatos necesarios y volcándola al sistema de gestión para su <strong>liquidación</strong>.",
      "<strong>Impacto en la gestión:</strong> tener la información distribuida y procesarla manualmente dificulta contar con reportería e indicadores de gestión y performance útiles para la dirección y el área comercial, en la toma de decisiones de venta y distribución de contenido orientadas a maximizar los resultados.",
    ],
  },

  // ═══════════════════════════════════════════════
  // 2. ENTENDIMIENTO DE LA NECESIDAD
  // ═══════════════════════════════════════════════
  needUnderstanding: {
    title: "Entendimiento de la Necesidad",
    paragraphs: [
      "A partir de las conversaciones mantenidas con el equipo de Telefilms y del análisis preliminar realizado, identificamos la necesidad de <strong>ordenar y automatizar la gestión de la información y los documentos comerciales</strong>, mejorando su calidad y disponibilidad para la toma de decisiones.",
      "<strong>Resumen de la problemática actual:</strong>",
      "<ul>" +
        "<li><strong>Información distribuida</strong> en distintos sistemas.</li>" +
        "<li><strong>Falta de orden</strong> en la recepción y en los formatos de la documentación.</li>" +
        "<li><strong>Procesamiento manual</strong> de los reportes para la liquidación.</li>" +
        "<li><strong>Conciliación</strong> de la información recibida por los distribuidores.</li>" +
        "<li><strong>Falta de reportes e indicadores actualizados</strong>, relevantes para la toma de decisiones.</li>" +
      "</ul>",
      "El <strong>principal objetivo</strong> de la solución propuesta es la <strong>automatización y la reducción de las cargas operativas manuales</strong>, construyendo al mismo tiempo los cimientos de datos necesarios para una gestión basada en información confiable y escalable.",
    ],
  },

  // ═══════════════════════════════════════════════
  // 3. SOLUCIÓN
  // ═══════════════════════════════════════════════
  solution: {
    title: "Propuesta de Trabajo",
    subtitle:
      "En base a lo relevado en las reuniones con Telefilms, proponemos una solución de dos fases de implementación cuyo principal objetivo es la automatización y la reducción de las cargas operativas manuales.",
    description:
      "La primera fase pone foco en la <strong>explotación de la información</strong> —tableros y reportes de gestión para el área comercial— para generar valor visible en el corto plazo. La segunda fase construye la <strong>capa de datos</strong> que sostiene y escala esa explotación: la ingesta de datos y la estructura del Data Lake corporativo, preparada para incorporar nuevos procesos, compañías y áreas en el futuro.",
    methodology: {
      title: "Enfoque diferencial",
      description:
        "A diferencia de proyectos tradicionales de datos que buscan abordar toda la organización simultáneamente, proponemos un <strong>enfoque iterativo y orientado al valor</strong>, priorizando aquellas áreas donde la disponibilidad de información genera beneficios concretos en menor plazo. El objetivo es que Telefilms obtenga resultados desde los primeros incrementos del proyecto, mientras construye una plataforma de datos robusta, escalable y alineada con la futura arquitectura tecnológica del grupo.",
    },
    phases: [
      {
        title: "Fase 1: Tableros y reportes de gestión",
        description:
          "Trabajar junto a Telefilms en el armado y diseño de los informes que se buscan obtener dentro del área comercial y en el flujo de información con distribuidores y productores. Identificamos la información relevante y los principales indicadores que se van a requerir consultar, relevando las fuentes y los flujos actuales para dejar disponibles reportes ejecutivos y operativos confiables.",
        deliverables: [
          "Diseño de tableros y reportes de gestión para el área comercial",
          "Catálogo de indicadores clave (KPIs) de negocio, ventas y distribución",
          "Mapa de fuentes de información y flujos con distribuidores y productores",
          "Inventario de datos y sistemas actuales",
          "Matriz de priorización de dominios de datos y quick wins",
          "Dashboards piloto validados con usuarios finales",
        ],
        duration: "Fase inicial",
      },
      {
        title: "Fase 2: Ingesta de datos — Data Lake corporativo",
        description:
          "Armado de la estructura del Data Lake de Telefilms junto con la definición del proceso de ingesta de los datos que lo alimentan. La información proviene de distintas fuentes y sistemas que requieren la definición de integraciones y de políticas de recepción de información y reportes. Se diseña la estructura base preparada para ser escalada a medida que se incorporan nuevos procesos, compañías, países y áreas a proyectos de automatización, incorporando el gobierno y la trazabilidad sobre el ciclo de vida de los datos.",
        deliverables: [
          "Diseño de la estructura base del Data Lake corporativo (preparada para escalar)",
          "Definición del proceso de ingesta e integraciones con los sistemas fuente",
          "Políticas de recepción de información y reportes (formatos y estándares)",
          "Modelo de Gobierno de Datos: roles y responsabilidades (Data Owners, Data Stewards, accesos)",
          "Controles de calidad, gestión de metadatos y datos maestros",
          "Matriz de roles y accesos, con trazabilidad sobre el ciclo de vida de la información",
          "Catálogo de dominios de datos y roadmap de escalamiento (nuevas compañías y países)",
        ],
        duration: "Fase de construcción",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // 4. QUIÉNES SOMOS (fijo Auren — bloque compartido)
  // ═══════════════════════════════════════════════
  aboutUs: AUREN_ABOUT_US,

  // ═══════════════════════════════════════════════
  // 6. EQUIPO DE TRABAJO (bloque compartido)
  // ═══════════════════════════════════════════════
  team: AUREN_TEAM,

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
        text: "Identificación de fuentes, flujos con distribuidores y productores, e indicadores clave del área comercial.",
      },
      {
        icon: "📊",
        title: "Tableros y reportes",
        text: "Diseño e implementación de los tableros y reportes de gestión, validados con los usuarios finales.",
      },
      {
        icon: "🏗️",
        title: "Ingesta y Data Lake",
        text: "Definición de integraciones y políticas de ingesta, y construcción de la estructura base del Data Lake corporativo.",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // CTA & FOOTER
  // ═══════════════════════════════════════════════
  cta: {
    title: "¿Listo para ordenar y automatizar la información comercial de Telefilms?",
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
