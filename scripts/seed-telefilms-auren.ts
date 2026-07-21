/**
 * Auren Proposal Seed — Telefilms
 * Gobierno y Explotación de Datos (Data Warehouse / Data Lake corporativo)
 * Based on: .claude/rules/Telefilms_data_lake.md + Auren template
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
    titlePre: "Gobierno y Explotación de Datos para",
    titleHighlight: "Telefilms",
    titlePost: "",
    subtitle:
      "Diseño e implementación de una capa corporativa de datos que consolide información de múltiples sistemas, compañías y países, mejorando su calidad y disponibilidad para la toma de decisiones, con un enfoque incremental orientado al valor.",
    ctaText: "Conocé la propuesta",
    ctaHref: "#intro",
  },

  // ═══════════════════════════════════════════════
  // 1. ENTENDIMIENTO DE LA EMPRESA
  // ═══════════════════════════════════════════════
  companyUnderstanding: {
    title: "Entendimiento de la Empresa",
    paragraphs: [
      "<strong>Telefilms</strong> es un grupo con operaciones distribuidas entre <strong>múltiples compañías y países</strong>, cuya gestión de negocio requiere consolidar información comercial y operativa proveniente de diversas fuentes.",
      "<strong>Ecosistema de información actual:</strong> la información relevante para la gestión se encuentra distribuida entre <strong>múltiples sistemas, compañías, países y planillas complementarias</strong>, lo que dificulta construir una visión integral de la operación.",
      "<strong>Contexto de evolución:</strong> el grupo cuenta con un roadmap integral de evolución de sus sistemas de gestión, que definirá la arquitectura tecnológica futura. En paralelo, surge la necesidad prioritaria de generar beneficios tangibles en el corto plazo.",
      "<strong>Oportunidad:</strong> una capa corporativa de datos permitiría centralizar información, mejorar su calidad y ponerla a disposición de los distintos niveles de decisión, sin esperar la implementación completa de la arquitectura objetivo.",
    ],
  },

  // ═══════════════════════════════════════════════
  // 2. ENTENDIMIENTO DE LA NECESIDAD
  // ═══════════════════════════════════════════════
  needUnderstanding: {
    title: "Entendimiento de la Necesidad",
    paragraphs: [
      "A partir de las conversaciones mantenidas con el equipo de Telefilms y del análisis preliminar realizado, observamos que la organización enfrenta un <strong>desafío creciente para acceder a información consolidada, confiable y oportuna</strong> para la toma de decisiones.",
      "Telefilms manifestó la necesidad de contar con una <strong>visión consolidada de la información comercial y operativa</strong>, integrando datos que hoy se encuentran atomizados entre distintas plataformas y procesos, de manera de facilitar el seguimiento del negocio, la trazabilidad de la información y la generación de reportes ejecutivos.",
      "<strong>Puntos de dolor actuales:</strong>",
      "<ul>" +
        "<li><strong>Información atomizada:</strong> datos distribuidos entre múltiples sistemas, compañías, países y planillas complementarias.</li>" +
        "<li><strong>Falta de visión integral:</strong> dificultad para construir una mirada única de la operación del grupo.</li>" +
        "<li><strong>Calidad y trazabilidad:</strong> necesidad de mejorar la confiabilidad de los datos y el seguimiento de su ciclo de vida.</li>" +
        "<li><strong>Reporting ejecutivo:</strong> complejidad para generar reportes consolidados e intercompañía de forma oportuna.</li>" +
      "</ul>",
      "Se propone una <strong>iniciativa complementaria al roadmap tecnológico</strong>, orientada a diseñar e implementar las capacidades de Gobierno y Explotación de Datos del grupo, con un enfoque incremental que priorice dominios, compañías o áreas de negocio específicas y entregue resultados visibles desde las primeras etapas.",
    ],
  },

  // ═══════════════════════════════════════════════
  // 3. SOLUCIÓN
  // ═══════════════════════════════════════════════
  solution: {
    title: "Propuesta de Trabajo",
    subtitle:
      "Objetivo: diseñar e implementar un modelo corporativo de gobierno y explotación de datos que consolide información de múltiples fuentes y siente las bases para la analítica avanzada y la IA.",
    description:
      "La solución deberá garantizar <strong>escalabilidad</strong> para incorporar nuevas compañías, países y fuentes de información; una <strong>definición clara de roles y perfiles de acceso</strong>; <strong>gobierno y trazabilidad</strong> sobre el ciclo de vida de los datos; <strong>flexibilidad</strong> para evolucionar junto con la arquitectura tecnológica futura; <strong>disponibilidad de información consolidada</strong> para la toma de decisiones; y la <strong>capacidad futura de consulta mediante asistentes inteligentes y agentes de IA</strong>.",
    methodology: {
      title: "Enfoque diferencial",
      description:
        "A diferencia de proyectos tradicionales de datos que buscan abordar toda la organización simultáneamente, proponemos un <strong>enfoque iterativo y orientado al valor</strong>, priorizando aquellas áreas donde la disponibilidad de información puede generar beneficios concretos en menor plazo. El objetivo es que Telefilms comience a obtener resultados desde los primeros incrementos del proyecto, mientras construye una plataforma de datos robusta, escalable y alineada con la futura arquitectura tecnológica.",
    },
    phases: [
      {
        title: "Fase 1: Identificación de fuentes y validación del mapa de procesos",
        description:
          "Comprender cómo se genera, transforma y consume la información dentro de Telefilms, identificando las fuentes de datos prioritarias y los procesos que las originan. Incluye la revisión del mapa de procesos, el relevamiento de flujos de información, la identificación de usuarios consumidores e indicadores críticos, la evaluación inicial de calidad y disponibilidad, y la priorización de dominios para una implementación incremental.",
        deliverables: [
          "Mapa de fuentes de información",
          "Inventario de datos y sistemas",
          "Mapa de flujos de información",
          "Catálogo preliminar de indicadores",
          "Matriz de priorización de dominios de datos",
          "Roadmap de quick wins y casos de uso iniciales",
        ],
        duration: "Fase inicial",
      },
      {
        title: "Fase 2: Diseño del Data Warehouse / Data Lake corporativo",
        description:
          "Definir la arquitectura funcional y de gobierno que soportará la consolidación y explotación de datos del grupo. Abarca el gobierno de datos (roles, Data Owners, Data Stewards, políticas de acceso y seguridad), el modelo de gestión de datos (incorporación de fuentes, controles de calidad, metadatos y datos maestros), la arquitectura de información (diseño conceptual, capas, criterios de integración y escalabilidad) y el modelo de explotación (reporting, analítica y segmentación por perfil).",
        deliverables: [
          "Modelo de Gobierno de Datos",
          "Arquitectura objetivo del Data Warehouse / Data Lake",
          "Modelo conceptual de información",
          "Matriz de roles y accesos",
          "Catálogo de dominios de datos",
          "Roadmap de implementación",
        ],
        duration: "Fase de diseño",
      },
      {
        title: "Fase 3: Prueba de Concepto (PoC)",
        description:
          "Validar técnicamente el modelo propuesto mediante la implementación de un caso de uso prioritario, definido en la Fase 1 (por ejemplo: información comercial consolidada, rentabilidad por película, seguimiento de derechos y explotación, liquidaciones, consolidación regional o indicadores ejecutivos). Incluye la construcción del modelo de datos, dashboards piloto, validación de calidad con usuarios finales y evaluación de capacidades de consulta mediante IA sobre la información consolidada.",
        deliverables: [
          "Ambiente piloto funcional",
          "Dashboards iniciales",
          "Modelo de datos validado",
          "Informe de resultados y recomendaciones para escalamiento",
        ],
        duration: "Fase de validación",
      },
      {
        title: "Fase 4: Implementación y adopción",
        description:
          "Desplegar progresivamente la solución corporativa de gobierno y explotación de datos: incorporación gradual de nuevas fuentes, desarrollo de tableros ejecutivos y operativos, implementación de los procesos de gobierno definidos, capacitación de usuarios, gestión de perfiles y permisos, incorporación progresiva de nuevas compañías y países, y evolución hacia capacidades avanzadas de analítica e inteligencia artificial.",
        deliverables: [
          "Repositorio centralizado de información corporativa",
          "Dashboards gerenciales y operativos",
          "Indicadores consolidados intercompañía",
          "Gestión de accesos por perfil y gobierno de la información",
          "Base preparada para asistentes inteligentes y agentes de IA",
        ],
        duration: "Fase de despliegue",
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
  // 5. PROPUESTA ECONÓMICA (placeholder — completar)
  // ═══════════════════════════════════════════════
  pricing: {
    sectionTitle: "Propuesta Económica",
    sectionSubtitle: "Inversión ajustada al alcance y valor generado.",
    plans: [
      {
        name: "Gobierno y Explotación de Datos",
        amount: "USD [MONTO]",
        amountSuffix: "+ IVA",
        description:
          "Diseño e implementación del modelo corporativo de gobierno y explotación de datos, con enfoque incremental por fases.",
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
        text: "Identificación de fuentes de información y validación del mapa de procesos.",
      },
      {
        icon: "⚙️",
        title: "Diseño y PoC",
        text: "Diseño de la arquitectura de datos y validación con una prueba de concepto sobre un caso prioritario.",
      },
      {
        icon: "✅",
        title: "Implementación y adopción",
        text: "Despliegue incremental, capacitación de usuarios y evolución hacia analítica avanzada e IA.",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // CTA & FOOTER
  // ═══════════════════════════════════════════════
  cta: {
    title: "¿Listo para construir la capa de datos de Telefilms?",
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
