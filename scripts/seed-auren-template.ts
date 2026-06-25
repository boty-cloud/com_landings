/**
 * Auren Proposal Seed Template
 * Based on: .claude/rules/Propuestas_Auren.md + manual_marca_auren.md + example_propuesta_auren.md
 *
 * Structure:
 * 1. Entendimiento de la empresa
 * 2. Entendimiento de la necesidad
 * 3. Solución (con fases de implementación)
 * 4. Quiénes somos
 * 5. Propuesta económica
 * 6. Equipo de trabajo
 * 7. Descargable en PDF
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
  id: "auren-client-template-2026", // CHANGE THIS: Use format "auren-clientname-2026"
  status: "draft",
  createdAt: new Date().toISOString(),
  brand: "auren",

  // ═══════════════════════════════════════════════
  // BRANDING
  // ═══════════════════════════════════════════════
  clientName: "Nombre del Cliente", // CHANGE THIS
  clientLogo: "/logos/ClientName/logo.png", // CHANGE THIS: Add logo to public/logos/ClientName/
  aurenLogo: "/logos/Auren/Auren.jpeg",
  aurenClaim: "Auren Consultoría",

  // ═══════════════════════════════════════════════
  // HERO (Primera impresión)
  // ═══════════════════════════════════════════════
  hero: {
    tag: "Propuesta de Servicios",
    titlePre: "Transformación Digital para",
    titleHighlight: "Nombre del Cliente", // CHANGE THIS
    titlePost: "",
    subtitle: "Solución integral de implementación de IA y automatización de procesos",
    ctaText: "Conocé la propuesta",
    ctaHref: "#intro",
  },

  // ═══════════════════════════════════════════════
  // 1. ENTENDIMIENTO DE LA EMPRESA
  // Detalle del negocio del cliente.
  // Buscamos que el cliente sienta que entendemos a lo que se dedica.
  // ═══════════════════════════════════════════════
  companyUnderstanding: {
    title: "Descripción de la Empresa",
    paragraphs: [
      "[Nombre del Cliente] es una empresa [argentina/internacional] especializada en [sector principal], con [número] años de trayectoria en el mercado.",
      "<strong>Perfil:</strong> [Pyme/Gran empresa/Startup] [familiar/corporativa] con [características operativas distintivas].",
      "<strong>Administración:</strong> [Descripción de estructura administrativa, quién gestiona qué, sistemas actuales].",
      "<strong>Situación Operativa:</strong> [Descripción del estado actual de digitalización, dependencias, herramientas utilizadas].",
      "<strong>Volumen:</strong> [Datos cuantitativos relevantes: movimientos mensuales, transacciones, usuarios, etc.]",
    ],
  },

  // ═══════════════════════════════════════════════
  // 2. ENTENDIMIENTO DE LA NECESIDAD
  // Plasmar la problemática o proceso que necesita automatizar
  // usando terminología del cliente.
  // ═══════════════════════════════════════════════
  needUnderstanding: {
    title: "Entendimiento de las Necesidades",
    paragraphs: [
      "<strong>Puntos de dolor actuales:</strong>",
      "<ul>" +
        "<li><strong>Control:</strong> [Necesidad específica de control o visibilidad]</li>" +
        "<li><strong>Trazabilidad:</strong> [Problemas de seguimiento o registro]</li>" +
        "<li><strong>Eficiencia:</strong> [Tareas manuales, cuellos de botella]</li>" +
        "<li><strong>Sistemas:</strong> [Brechas tecnológicas, falta de integración]</li>" +
        "<li><strong>Reportes:</strong> [Falta de información confiable para decisiones]</li>" +
      "</ul>",
      "<strong>¿Por qué [la solución propuesta] es columna vertebral?</strong>",
      "Es la fuente única de verdad para:",
      "<ol>" +
        "<li>[Proceso 1]</li>" +
        "<li>[Proceso 2]</li>" +
        "<li>[Proceso 3]</li>" +
        "<li>[Proceso 4]</li>" +
      "</ol>",
      "<strong>Metodología de Implementación:</strong>",
      "La automatización/IA no sustituye procesos débiles; primero se requiere:",
      "<ul>" +
        "<li>Procesos definidos</li>" +
        "<li>Datos maestros ordenados</li>" +
        "<li>Reglas claras</li>" +
        "<li>Un sistema transaccional estable</li>" +
      "</ul>",
    ],
  },

  // ═══════════════════════════════════════════════
  // 3. SOLUCIÓN
  // Propuesta de trabajo con fases de implementación
  // ═══════════════════════════════════════════════
  solution: {
    title: "Propuesta de Trabajo",
    subtitle: "Objetivo: [Describir el objetivo principal de la implementación]",
    description: "Descripción general del alcance de la solución y qué se va a lograr.",
    methodology: {
      title: "Metodología de Implementación",
      description: "Seguimos un enfoque estructurado basado en nuestro Framework End-to-End, garantizando la viabilidad técnica antes de la implementación y la adopción efectiva post-despliegue.",
    },
    phases: [
      {
        title: "Mes 1: Diagnóstico y [Etapa 1]",
        description: "Descripción de las actividades principales del primer mes.",
        deliverables: [
          "Documento de brechas y análisis",
          "Diseño de procesos prioritarios",
          "Backlog de mejoras identificadas",
        ],
        duration: "4 semanas",
      },
      {
        title: "Mes 2: [Etapa 2] y Capacitación",
        description: "Descripción de las actividades del segundo mes.",
        deliverables: [
          "[Sistema/Solución] funcionando",
          "Manual operativo y checklist",
          "Usuarios entrenados",
        ],
        duration: "4 semanas",
      },
      {
        title: "Mes 3: Estabilización y Reporting",
        description: "Acompañamiento post-implementación y diseño de reportes de gestión.",
        deliverables: [
          "Pack de reportes de dirección",
          "Acta de estabilización",
          "Roadmap fase 2 (automatización/IA)",
        ],
        duration: "4 semanas",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // 4. QUIÉNES SOMOS
  // Componente fijo de Auren (no cambia por propuesta)
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
    sectionSubtitle: "Inversión ajustada al alcance y valor generado",
    plans: [
      {
        name: "Implementación Completa",
        amount: "ARS [MONTO]",
        amountSuffix: "+ IVA",
        description: "Paquete de [X] horas mensuales por [Y] meses",
        details: [
          "[X] horas mensuales de consultoría",
          "Acompañamiento durante [Y] meses",
          "Soporte técnico incluido",
          "Reportes de gestión personalizados",
          "Capacitación del equipo",
        ],
        addon: "Ajustable por IPC. Excluye: viáticos y horas de consultoría del proveedor externo (si aplica).",
        isFeatured: true,
        badge: "Recomendado",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // 6. EQUIPO DE TRABAJO
  // Incluir fotos del equipo involucrado
  // ═══════════════════════════════════════════════
  team: {
    title: "Equipo de Trabajo",
    members: [
      {
        name: "Micaela Puebla",
        role: "Líder de Consultoría Auren",
        photo: "/logos/Auren/team/micaela.jpg", // CHANGE THIS: Add team photos
      },
      {
        name: "Ayelén Capalbo",
        role: "Consultora Senior Auren",
        photo: "/logos/Auren/team/ayelen.jpg",
      },
      {
        name: "[Nombre]",
        role: "[Rol del Cliente]",
        photo: "/logos/ClientName/team/person.jpg",
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
        text: "Análisis profundo de procesos, datos y sistemas existentes.",
      },
      {
        icon: "⚙️",
        title: "Implementación",
        text: "Ejecución de las fases acordadas con seguimiento semanal.",
      },
      {
        icon: "✅",
        title: "Estabilización",
        text: "Soporte intensivo post-implementación y optimización continua.",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // CTA & FOOTER
  // ═══════════════════════════════════════════════
  cta: {
    title: "¿Listo para transformar tu operación?",
    text: "Coordiná una reunión con nuestro equipo para discutir los próximos pasos.",
    buttonText: "Agendar reunión",
    buttonHref: "mailto:contacto@auren.com", // CHANGE THIS
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
