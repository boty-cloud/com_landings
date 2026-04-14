import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const PROPOSAL_ID = "lidherma-belgrano-2026";

// Requires GOOGLE_APPLICATION_CREDENTIALS env var pointing to service account JSON
// In Cloud Run, applicationDefault() works automatically
const app = initializeApp({
  credential: applicationDefault(),
  projectId: process.env.NEXT_PUBLIC_FIRESTORE_PROJECT_ID || "boty-app",
});

const db = getFirestore(app);

const lidhermaProposal = {
  status: "draft",
  createdAt: new Date().toISOString(),

  // Branding
  clientName: "Distribuidora Belgrano Lidherma",
  clientLogo: "/logos/Lidherma/278158737_352455676898490_8766479924252159530_n.jpg",
  botyLogo: "/logos/Boty/Version negativo.png",
  botyLogoFooter: "/logos/Boty/Iso positivo.png",

  // Hero
  hero: {
    tag: "Propuesta Comercial \u00b7 Abril 2026",
    titlePre: "Tecnolog\u00eda que ",
    titleHighlight: "potencia",
    titlePost: " tu red de profesionales",
    subtitle:
      'Soluci\u00f3n integral <strong>CRM + Inteligencia Artificial</strong> dise\u00f1ada para Distribuidora Belgrano&nbsp;Lidherma.',
    ctaText: "Conoc\u00e9 la soluci\u00f3n",
    ctaHref: "#modulos",
  },

  // Intro
  intro: {
    title: "\u00bfPor qu\u00e9 esta propuesta?",
    paragraphs: [
      "Lidherma es sin\u00f3nimo de innovaci\u00f3n cosm\u00e9tica en Argentina. Gestionar una red amplia de cosmiatras, centros de est\u00e9tica y spas exige herramientas que est\u00e9n a la altura de esa reputaci\u00f3n.",
      'Te proponemos una plataforma tecnol\u00f3gica que <strong>automatiza la captaci\u00f3n de nuevos profesionales</strong>, <strong>inteligentiza la gesti\u00f3n comercial</strong> y <strong>potencia cada punto de contacto</strong> con tu red \u2014 desde el primer mail hasta el pedido por WhatsApp.',
      'Con nuestra IA, incluso un vendedor nuevo puede asesorar como un experto en cosm\u00e9tica: el sistema <em>conoce las especificaciones t\u00e9cnicas de cada producto Lidherma</em> y recomienda activos, combos y tratamientos de forma precisa.',
    ],
  },

  // Modules
  modules: {
    sectionTitle: "Los 5 pilares de la soluci\u00f3n",
    sectionSubtitle:
      "Cada m\u00f3dulo se integra con los dem\u00e1s para crear un ecosistema comercial sin fricciones.",
    items: [
      {
        number: "01",
        title: "Web Scraping de Alta Precisi\u00f3n",
        body: 'Identificaci\u00f3n autom\u00e1tica de nuevos centros de est\u00e9tica y profesionales en zonas clave. Generaci\u00f3n de <strong>leads enriquecidos</strong> con datos verificados para que tu equipo comercial arranque cada d\u00eda con oportunidades concretas.',
        features: [
          "Rastreo geolocalizado por zona",
          "Enriquecimiento autom\u00e1tico de datos",
          "Detecci\u00f3n de nuevos profesionales",
        ],
      },
      {
        number: "02",
        title: "CRM con Inteligencia Artificial",
        body: 'Gesti\u00f3n completa de historial de clientes y cat\u00e1logo inteligente. La IA recomienda productos basados en especificaciones t\u00e9cnicas \u2014 por ejemplo, sugiere el activo ideal para un tratamiento de hidrataci\u00f3n \u2014 y detecta oportunidades de <strong>cross-selling</strong> y combos.',
        features: [
          "Recomendaciones de productos por IA",
          "Detecci\u00f3n de combos y cross-selling",
          "Validaci\u00f3n autom\u00e1tica de matr\u00edcula",
          "Historial completo por profesional",
        ],
      },
      {
        number: "03",
        title: "Campa\u00f1a de Mailing Masivo",
        body: "Campa\u00f1as automatizadas con bases segmentadas directamente desde el CRM. Reglas inteligentes para env\u00edos autom\u00e1ticos: bienvenida, recompra, lanzamientos y promociones personalizadas.",
        features: [
          "Segmentaci\u00f3n desde el CRM",
          "Reglas de env\u00edo autom\u00e1ticas",
          "Templates personalizados",
        ],
      },
      {
        number: "04",
        title: "E-commerce B2B Hipersegmentado",
        body: 'Plataforma exclusiva para profesionales, integrada con el inventario del CRM. Posicionamiento <strong>SEO org\u00e1nico tradicional + posicionamiento AI</strong>. Integraci\u00f3n con ERP y log\u00edsticas para una operaci\u00f3n sin roces.',
        features: [
          "Acceso exclusivo para profesionales",
          "Integraci\u00f3n ERP + Log\u00edstica",
          "SEO org\u00e1nico & posicionamiento AI",
          "Sincronizaci\u00f3n de inventario en tiempo real",
        ],
      },
      {
        number: "05",
        title: "Bot de WhatsApp con IA",
        body: 'Comunicaci\u00f3n 24/7 con tus profesionales. Capacidad de <strong>tomar pedidos de forma aut\u00f3noma</strong> y generar links de pago. Incluye <strong>Conciliaci\u00f3n Bancaria Autom\u00e1tica</strong> para transferencias, eliminando la carga administrativa de revisar tickets de CBU.',
        features: [
          "Atenci\u00f3n 24/7 por WhatsApp",
          "Toma de pedidos aut\u00f3noma",
          "Generaci\u00f3n de links de pago",
          "Conciliaci\u00f3n bancaria autom\u00e1tica",
        ],
        isHighlighted: true,
        badge: "M\u00f3dulo Opcional",
      },
    ],
  },

  // IA Highlight
  iaHighlight: {
    title: "La IA que conoce cada producto Lidherma",
    description:
      'Nuestro motor de inteligencia artificial est\u00e1 entrenado con las <strong>especificaciones t\u00e9cnicas completas</strong> del cat\u00e1logo Lidherma. Esto significa que:',
    cards: [
      {
        icon: "\ud83e\uddea",
        title: "Recomendaci\u00f3n por activo",
        text: "Sugiere el producto exacto seg\u00fan el tratamiento: hidrataci\u00f3n, anti-age, despigmentaci\u00f3n, etc.",
      },
      {
        icon: "\ud83c\udfaf",
        title: "Cross-selling inteligente",
        text: "Detecta oportunidades de productos complementarios y arma combos que aumentan el ticket promedio.",
      },
      {
        icon: "\ud83e\uddd1\u200d\ud83d\udcbc",
        title: "Vendedor experto desde el d\u00eda 1",
        text: "Incluso un vendedor nuevo puede asesorar como un profesional con a\u00f1os de experiencia en cosmiatr\u00eda.",
      },
    ],
  },

  // Pricing
  pricing: {
    sectionTitle: "Inversi\u00f3n",
    sectionSubtitle:
      "Dos opciones de pago para que elijas la que mejor se adapte a tu operaci\u00f3n.",
    plans: [
      {
        name: "Pago \u00danico",
        amount: "USD 15.000",
        description: "M\u00f3dulos 1 al 4 incluidos",
        details: [
          "Web Scraping de Alta Precisi\u00f3n",
          "CRM con Inteligencia Artificial",
          "Campa\u00f1a de Mailing Masivo",
          "E-commerce B2B Hipersegmentado",
        ],
        addon:
          "<strong>+ M\u00f3dulo 5 (WhatsApp Bot):</strong> USD 4.500",
      },
      {
        name: "Plan Financiado",
        amount: "USD 3.000",
        amountSuffix: "inicial",
        description: "+ 9 cuotas de USD 1.500",
        details: [
          "M\u00f3dulos 1 al 4 incluidos",
          "Total financiado: USD 16.500",
        ],
        addon:
          "<strong>+ M\u00f3dulo 5:</strong> 3 cuotas adicionales de USD 1.500",
        isFeatured: true,
        badge: "Recomendado",
      },
    ],
  },

  // Implementation
  implementation: {
    sectionTitle: "Implementaci\u00f3n, Soporte y Capacitaci\u00f3n",
    cards: [
      {
        icon: "\ud83d\udccb",
        title: "Implementaci\u00f3n",
        text: "Proceso estructurado en etapas con entregas parciales. Configuraci\u00f3n completa del CRM, integraci\u00f3n con ERP y puesta en marcha de cada m\u00f3dulo de forma progresiva.",
      },
      {
        icon: "\ud83d\udee0\ufe0f",
        title: "Soporte Post-venta",
        text: "Acompa\u00f1amiento t\u00e9cnico continuo. Canal de soporte dedicado para resolver consultas y optimizar el uso de la plataforma en el d\u00eda a d\u00eda.",
      },
      {
        icon: "\ud83c\udf93",
        title: "Capacitaci\u00f3n",
        text: "Sesiones de formaci\u00f3n para el equipo comercial y administrativo. Materiales de referencia y acceso a documentaci\u00f3n actualizada de cada m\u00f3dulo.",
      },
    ],
  },

  // CTA
  cta: {
    title: "\u00bfAvanzamos juntos?",
    text: "Estamos listos para potenciar la operaci\u00f3n comercial de Distribuidora Belgrano Lidherma con la tecnolog\u00eda que tu red de profesionales merece.",
    buttonText: "Contactanos",
    buttonHref: "mailto:info@boty.cloud",
  },

  // Footer
  footer: {
    copyText:
      "\u00a9 2026 Boty \u00b7 Propuesta confidencial para Distribuidora Belgrano Lidherma",
  },
};

async function seed() {
  console.log(`Seeding proposal: ${PROPOSAL_ID}`);
  await db.collection("proposals").doc(PROPOSAL_ID).set(lidhermaProposal);
  console.log(`Done! View at: /proposals/${PROPOSAL_ID}`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
