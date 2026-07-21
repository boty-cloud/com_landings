/**
 * Boty Proposal Seed — Telefilms
 * Gobierno y Explotación de Datos (Data Warehouse / Data Lake corporativo)
 * Based on: .claude/rules/Telefilms_data_lake.md
 */

import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const PROPOSAL_ID = "telefilms-data-lake-boty-2026";

const app = initializeApp({
  credential: applicationDefault(),
  projectId: process.env.NEXT_PUBLIC_FIRESTORE_PROJECT_ID || "boty-app",
});

const db = getFirestore(app);

const telefilmsProposal = {
  status: "draft",
  createdAt: new Date().toISOString(),

  // Branding
  clientName: "Telefilms",
  clientLogo: "/logos/Telefilms/Telefilms.webp",
  botyLogo: "/logos/Boty/Version negativo.png",
  botyLogoFooter: "/logos/Boty/Iso positivo.png",

  // Hero
  hero: {
    tag: "Propuesta de Gobierno y Explotación de Datos · 2026",
    titlePre: "Telefilms, una capa corporativa de datos para ",
    titleHighlight: "decisiones basadas en información confiable",
    titlePost: "",
    subtitle:
      "Diseño e implementación de un modelo corporativo de <strong>gobierno y explotación de datos</strong> que consolide información distribuida entre múltiples sistemas, compañías y países, con un enfoque <strong>incremental y orientado al valor</strong> que entrega resultados desde las primeras etapas.",
    ctaText: "Ver la propuesta",
    ctaHref: "#modulos",
  },

  // Intro — entendimiento de la necesidad
  intro: {
    title: "El desafío: información atomizada, decisiones sin una visión integral",
    paragraphs: [
      "A partir de las conversaciones con el equipo de Telefilms y del análisis preliminar realizado, observamos un <strong>desafío creciente para acceder a información consolidada, confiable y oportuna</strong> para la toma de decisiones. Hoy la información relevante se encuentra distribuida entre <strong>múltiples sistemas, compañías, países y planillas complementarias</strong>.",
      "Telefilms manifestó la necesidad de contar con una <strong>visión consolidada de la información comercial y operativa</strong>, integrando datos hoy atomizados, para facilitar el seguimiento del negocio, la trazabilidad de la información y la generación de reportes ejecutivos.",
      "Proponemos una iniciativa complementaria al roadmap tecnológico del grupo, orientada a diseñar e implementar las <strong>capacidades de Gobierno y Explotación de Datos</strong>, con un enfoque incremental que prioriza dominios y áreas específicas para generar beneficios tangibles en el corto plazo.",
    ],
  },

  // Modules — las 4 fases del proyecto
  modules: {
    sectionTitle: "La Solución · Modelo de Gobierno y Explotación de Datos",
    sectionSubtitle:
      "Un enfoque por fases que consolida la información del grupo y sienta las bases para la analítica avanzada y la inteligencia artificial, garantizando escalabilidad, gobierno, trazabilidad y disponibilidad de la información.",
    items: [
      {
        number: "01",
        title: "Identificación de fuentes y mapa de procesos",
        body: 'Comprender cómo se genera, transforma y consume la información dentro de Telefilms, identificando las <strong>fuentes de datos prioritarias</strong> y los procesos que las originan.',
        features: [
          "Mapa de fuentes de información",
          "Inventario de datos y sistemas",
          "Mapa de flujos de información",
          "Catálogo preliminar de indicadores",
          "Matriz de priorización de dominios de datos",
          "Roadmap de quick wins y casos de uso iniciales",
        ],
      },
      {
        number: "02",
        title: "Diseño del Data Warehouse / Data Lake corporativo",
        body: 'Definir la <strong>arquitectura funcional y de gobierno</strong> que soportará la consolidación y explotación de datos del grupo: gobierno de datos, modelo de gestión, arquitectura de información y modelo de explotación.',
        features: [
          "Modelo de Gobierno de Datos (Data Owners, Data Stewards, accesos)",
          "Arquitectura objetivo del Data Warehouse / Data Lake",
          "Modelo conceptual de información y capas de datos",
          "Controles de calidad, metadatos y datos maestros",
          "Matriz de roles y accesos",
          "Catálogo de dominios de datos y roadmap de implementación",
        ],
      },
      {
        number: "03",
        title: "Prueba de Concepto (PoC)",
        body: 'Validar técnicamente el modelo propuesto mediante la implementación de un <strong>caso de uso prioritario</strong> definido en la Fase 1 (ej.: información comercial consolidada, rentabilidad por película, seguimiento de derechos, liquidaciones o consolidación regional).',
        features: [
          "Ambiente piloto funcional",
          "Construcción del modelo de datos",
          "Dashboards piloto validados con usuarios finales",
          "Evaluación de consulta mediante IA sobre datos consolidados",
          "Informe de resultados y recomendaciones para escalamiento",
        ],
        isHighlighted: true,
        badge: "Valor visible temprano",
      },
      {
        number: "04",
        title: "Implementación y adopción",
        body: 'Desplegar progresivamente la solución corporativa: incorporación gradual de fuentes, tableros ejecutivos y operativos, procesos de gobierno, capacitación de usuarios y evolución hacia <strong>analítica avanzada e inteligencia artificial</strong>.',
        features: [
          "Repositorio centralizado de información corporativa",
          "Dashboards gerenciales y operativos",
          "Indicadores consolidados intercompañía",
          "Gestión de accesos por perfil y gobierno de la información",
          "Incorporación progresiva de nuevas compañías y países",
          "Base preparada para asistentes inteligentes y agentes de IA",
        ],
      },
    ],
  },

  // IA Highlight — enfoque diferencial y capacidades objetivo
  iaHighlight: {
    title: "Un enfoque diferencial, iterativo y orientado al valor",
    description:
      "A diferencia de los proyectos tradicionales de datos que buscan abordar toda la organización simultáneamente, priorizamos las áreas donde la disponibilidad de información genera beneficios concretos en menor plazo, mientras construimos una plataforma robusta y escalable.",
    cards: [
      {
        icon: "🎯",
        title: "Resultados tempranos",
        text: "Priorización de dominios y quick wins para obtener valor desde los primeros incrementos, sin esperar la arquitectura completa.",
      },
      {
        icon: "🧱",
        title: "Escalabilidad",
        text: "Incorporación flexible de nuevas compañías, países y fuentes de información a medida que evoluciona el negocio.",
      },
      {
        icon: "🛡️",
        title: "Gobierno y trazabilidad",
        text: "Roles y perfiles de acceso claros, controles de calidad y trazabilidad sobre todo el ciclo de vida de los datos.",
      },
      {
        icon: "🤖",
        title: "Listo para IA",
        text: "Base preparada para consultar la información en lenguaje natural mediante asistentes inteligentes y agentes de IA.",
      },
    ],
  },

  // Pricing (placeholder — completar)
  pricing: {
    sectionTitle: "Inversión",
    sectionSubtitle:
      "Propuesta económica para el diseño e implementación del modelo de gobierno y explotación de datos.",
    plans: [
      {
        name: "Gobierno y Explotación de Datos",
        amount: "USD [MONTO]",
        amountSuffix: "+ IVA",
        description:
          "Diseño e implementación del modelo corporativo de datos, con enfoque incremental por fases.",
        details: [
          "Fase 1 · Identificación de fuentes y mapa de procesos",
          "Fase 2 · Diseño del Data Warehouse / Data Lake",
          "Fase 3 · Prueba de Concepto (PoC)",
          "Fase 4 · Implementación y adopción",
          "[Definir esquema de pago y condiciones]",
        ],
        isFeatured: true,
        badge: "Propuesta",
      },
    ],
  },

  // Implementation — roadmap de fases
  implementation: {
    sectionTitle: "Roadmap del proyecto",
    cards: [
      {
        icon: "🔍",
        title: "Fase 1 · Identificación de fuentes",
        text: "Relevamiento del mapa de procesos, identificación de fuentes y sistemas, flujos de información, indicadores críticos y priorización de dominios para una implementación incremental.",
      },
      {
        icon: "🏗️",
        title: "Fase 2 · Diseño del Data Warehouse / Data Lake",
        text: "Definición de la arquitectura funcional y de gobierno: roles y accesos, modelo de gestión de datos, controles de calidad, metadatos, datos maestros y modelo de explotación.",
      },
      {
        icon: "🧪",
        title: "Fase 3 · Prueba de Concepto",
        text: "Implementación de un caso de uso prioritario con dashboards piloto, validación de calidad con usuarios finales y evaluación de consulta con IA sobre la información consolidada.",
      },
      {
        icon: "🚀",
        title: "Fase 4 · Implementación y adopción",
        text: "Despliegue progresivo, incorporación gradual de fuentes y compañías, capacitación de usuarios, gobierno de la información y evolución hacia analítica avanzada e IA.",
      },
    ],
  },

  // CTA
  cta: {
    title: "Construyamos juntos la capa de datos de Telefilms",
    text: "Estamos listos para comenzar por la Fase 1 y sentar las bases de una gestión basada en información confiable, escalable y lista para la IA.",
    buttonText: "Coordinar reunión",
    buttonHref: "mailto:info@boty.cloud",
  },

  // Footer
  footer: {
    copyText: "© 2026 Boty · Propuesta confidencial para Telefilms",
  },
};

async function seed() {
  console.log(`Seeding proposal: ${PROPOSAL_ID}`);
  await db.collection("proposals").doc(PROPOSAL_ID).set(telefilmsProposal);
  console.log(`Done! View at: /${PROPOSAL_ID}`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
