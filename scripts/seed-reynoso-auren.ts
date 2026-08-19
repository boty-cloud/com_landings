/**
 * Auren Proposal Seed — Reynoso Inmobiliaria
 * Automatización e IA para inmobiliaria y desarrollos urbanísticos (loteos)
 * Based on: .claude/rules/Reynoso_Inmobiliaria_Contexto_Propuesta.md + Auren template
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
  id: "reynoso-inmobiliaria-2026",
  status: "draft",
  createdAt: new Date().toISOString(),
  brand: "auren",

  // ═══════════════════════════════════════════════
  // BRANDING
  // ═══════════════════════════════════════════════
  clientName: "Reynoso Inmobiliaria",
  clientLogo: "/logos/Reynoso/reynoso.webp",
  aurenLogo: "/logos/Auren/Auren.jpeg",
  aurenClaim: "Auren Consultoría",

  // ═══════════════════════════════════════════════
  // HERO
  // ═══════════════════════════════════════════════
  hero: {
    tag: "Propuesta de Servicios · 2026",
    titlePre: "Automatización e inteligencia artificial para ",
    titleHighlight: "Reynoso Inmobiliaria",
    titlePost: "",
    subtitle:
      "Una solución integral que centraliza la captación de leads, automatiza la asignación comercial y las cotizaciones, y activa la nutrición y el seguimiento post-venta, acelerando el ciclo de cierre y recuperando la base de datos de contactos.",
    ctaText: "Descargá la propuesta en PDF",
    ctaHref: "#print",
  },

  // ═══════════════════════════════════════════════
  // 1. ENTENDIMIENTO DE LA EMPRESA
  // ═══════════════════════════════════════════════
  companyUnderstanding: {
    title: "Entendimiento de la Empresa",
    paragraphs: [
      "<strong>Reynoso Inmobiliaria</strong> es una empresa con <strong>25 años de trayectoria</strong> originaria de Salta, referente en el mercado inmobiliario del NOA.",
      "<strong>Dos unidades de negocio principales:</strong>",
      "<ul>" +
        "<li><strong>Inmobiliaria tradicional:</strong> compra, venta y alquiler de propiedades.</li>" +
        "<li><strong>Desarrollos urbanísticos (loteos):</strong> fuerte crecimiento en la región del NOA, orientado a clase media/media-baja, incorporando proyectos premium en Cafayate y Cachi.</li>" +
      "</ul>",
      "<strong>Expansión internacional:</strong> operaciones en Paraguay con la construcción de departamentos premium en pozo, en alianza con Mediterránea PI, apuntando fuertemente a inversores argentinos.",
      "<strong>Stack tecnológico actual:</strong> la operación se apoya en <strong>Odoo</strong> como CRM (gestión del pipeline con estados Ganado/Perdido), un <strong>chatbot</strong> desarrollado por un proveedor externo sobre N8n y Gemini Pro, <strong>Mailjet</strong> para email marketing integrado con Odoo, <strong>ExploreMe</strong> para disponibilidad de lotes en tiempo real, <strong>LEBANE</strong> para administración y cobros de loteos, y una <strong>página web en WordPress</strong> dividida en dos dominios (Institucional y Propiedades).",
    ],
  },

  // ═══════════════════════════════════════════════
  // 2. ENTENDIMIENTO DE LA NECESIDAD
  // ═══════════════════════════════════════════════
  needUnderstanding: {
    title: "Entendimiento de la Necesidad",
    paragraphs: [
      "A partir del discovery comercial realizado junto al equipo de Reynoso, identificamos una empresa con <strong>capital, decisión y ganas de invertir en automatización</strong>, cuyo crecimiento hoy está limitado por procesos manuales y sistemas desconectados que generan pérdida de trazabilidad y oportunidades.",
      "<strong>Puntos de dolor actuales:</strong>",
      "<ul>" +
        "<li><strong>Asignación de leads manual:</strong> el chatbot ingresa leads de pauta (Meta/Google Ads) a Odoo, pero la asignación a los 5 comerciales se hace a mano con un Excel (\"El FORCAS\") gestionado por un asistente, con pérdida de trazabilidad.</li>" +
        "<li><strong>Cuello de botella en cotizaciones:</strong> emitir un presupuesto oficial requiere solicitarlo a Contaduría y puede demorar hasta una semana (ej. proyecto premium Malcauce).</li>" +
        "<li><strong>Canales desconectados:</strong> los leads de WhatsApp orgánico, formularios web y mails no pasan por el chatbot ni entran a Odoo automáticamente, quedando perdidos en planillas Excel.</li>" +
        "<li><strong>Falta de nutrición (nurturing):</strong> los leads descartados o \"fríos\" quedan en el limbo, sin campañas de reactivación automatizadas.</li>" +
        "<li><strong>Post-venta y retención sin seguimiento:</strong> los compradores de lotes no reciben actualizaciones de avance de obra y los propietarios no reciben reportes de rendimiento de sus inmuebles (visitas en web, ZonaProp, MercadoLibre).</li>" +
        "<li><strong>Doble carga de trabajo:</strong> los comerciales cargan datos en Odoo, pero esto no se refleja en la web, obligando a mantener planillas para portales como ZonaProp.</li>" +
      "</ul>",
      "<strong>Objetivo:</strong> evitar un \"Frankenstein\" de sistemas y construir una solución integral, nativa o fuertemente alineada a Odoo, que centralice la información, acelere el ciclo de cierre y recupere la base de datos de contactos, con una implementación por fases que genere valor visible desde el primer incremento.",
    ],
  },

  // ═══════════════════════════════════════════════
  // 3. SOLUCIÓN
  // ═══════════════════════════════════════════════
  solution: {
    title: "Propuesta de Trabajo",
    subtitle:
      "Objetivo: centralizar la captación y gestión de leads en Odoo, automatizar cotizaciones y activar la nutrición y el post-venta, escalando hacia la integración web/portales y el ecosistema de inversores en Paraguay.",
    description:
      "Proponemos una implementación por fases que arranca resolviendo los cuellos de botella de mayor impacto —captación omnicanal, asignación automática y generación de presupuestos— para generar resultados concretos en el corto plazo (velocidad de cierre y trazabilidad), y luego escala hacia la reactivación de la base de datos, el post-venta automatizado y la expansión a Paraguay.",
    methodology: {
      title: "Metodología de Implementación",
      description:
        "Seguimos un enfoque estructurado con nuestro Framework End-to-End, priorizando <strong>Quick Wins</strong> de alto impacto y baja complejidad. Trabajamos sobre Odoo como fuente única de verdad, con foco en no depender de múltiples proveedores desconectados (N8n, WordPress dividido, Excel), garantizando la adopción del equipo comercial en cada etapa.",
    },
    phases: [
      {
        title: "Fase 1: Centralización omnicanal, asignación y cotizador",
        description:
          "Evolucionamos el chatbot actual hacia un agente de IA que centraliza todos los canales de ingreso de leads directamente en Odoo, automatizamos el enrutamiento a los comerciales sin depender de asistentes ni Excel, y construimos un generador de presupuestos que emite cotizaciones en tiempo real según las reglas de negocio, eliminando la demora de Contaduría.",
        deliverables: [
          "Agente de IA omnicanal: WhatsApp de pauta, WhatsApp orgánico, formularios web y mails hacia Odoo",
          "Asignación inteligente y automática de leads a los 5 comerciales dentro de Odoo",
          "Cotizador automático: PDFs de presupuestos en tiempo real por proyecto, tamaño, cantidad y descuentos de contado",
          "Trazabilidad completa del lead desde el ingreso hasta el estado en el pipeline",
        ],
        duration: "4 meses de trabajo",
      },
      {
        title: "Fase 2: Reactivación de leads y post-venta automatizado",
        description:
          "Activamos campañas proactivas para revivir los leads \"Perdidos\" o fríos cuando ingresan proyectos que se ajustan a su presupuesto, y automatizamos la comunicación post-venta y de retención para compradores de lotes y propietarios de inmuebles.",
        deliverables: [
          "Flujos de nurturing y reactivación de leads fríos según nuevos proyectos y presupuesto",
          "Reportes automáticos de avance de obra para compradores de lotes",
          "Analíticas mensuales automatizadas de vistas/interés para propietarios (web, ZonaProp, MercadoLibre)",
          "Segmentación de la base de datos para ofertas cruzadas (ej. lotes accesibles a quienes no calificaron para premium)",
        ],
        duration: "Fase posterior",
      },
      {
        title: "Fase 3: Sincronización web/portales y ecosistema Paraguay",
        description:
          "Integramos la carga de propiedades en Odoo con la actualización automática de la web y la exportación a portales, y preparamos un entorno/funnel específico para procesar inversores en los proyectos de pozo de Paraguay.",
        deliverables: [
          "Sincronización Odoo ↔ web: la carga de propiedades actualiza automáticamente el sitio",
          "Exportación asistida a portales inmobiliarios (ZonaProp y otros)",
          "Funnel dedicado para inversores de los proyectos de pozo en Paraguay",
          "Ecosistema escalable preparado para nuevos proyectos y mercados",
        ],
        duration: "Fase posterior",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // 4. QUIÉNES SOMOS (fijo Auren — bloque compartido)
  // ═══════════════════════════════════════════════
  aboutUs: AUREN_ABOUT_US,

  // ═══════════════════════════════════════════════
  // 5. PROPUESTA ECONÓMICA
  // Sin monto total: estructura de pago + plazo. Sitio web unificado como adicional.
  // ═══════════════════════════════════════════════
  pricing: {
    sectionTitle: "Propuesta Económica",
    sectionSubtitle: "Esquema de pago y plazo para el desarrollo e implementación de la Fase 1.",
    plans: [
      {
        name: "Fase 1 · Implementación",
        description:
          "Desarrollo e implementación completa de la centralización omnicanal de leads, la asignación inteligente en Odoo y el cotizador automático.",
        details: [
          "30% al inicio del proyecto: U$D 10.500",
          "3 cuotas mensuales de U$D 8.166",
          "Incluye desarrollo, implementación y puesta en marcha",
        ],
        duration: "4 meses de trabajo",
        addon:
          "Adicional opcional — Sitio web unificado (Institucional + Propiedades en un solo sitio): +U$D 5.000",
        isFeatured: true,
        badge: "Propuesta Fase 1",
      },
    ],
  },

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
        text: "Análisis de los flujos de leads, Odoo, canales y reglas de cotización actuales.",
      },
      {
        icon: "⚙️",
        title: "Implementación",
        text: "Desarrollo de la centralización omnicanal, la asignación automática y el cotizador, con seguimiento semanal.",
      },
      {
        icon: "✅",
        title: "Estabilización",
        text: "Soporte post-implementación, adopción del equipo comercial y optimización continua.",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // CTA & FOOTER
  // ═══════════════════════════════════════════════
  cta: {
    title: "¿Listo para acelerar el ciclo de cierre de Reynoso Inmobiliaria?",
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
