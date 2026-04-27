import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const PROPOSAL_ID = "oca-logistica-2026";

const app = initializeApp({
  credential: applicationDefault(),
  projectId: process.env.NEXT_PUBLIC_FIRESTORE_PROJECT_ID || "boty-app",
});

const db = getFirestore(app);

const ocaProposal = {
  status: "draft",
  createdAt: new Date().toISOString(),

  // Branding
  clientName: "OCA LOG S.A.",
  clientLogo: "/logos/OCA/OCA_Boty.png",
  botyLogo: "/logos/Boty/Version negativo.png",
  botyLogoFooter: "/logos/Boty/Iso positivo.png",

  // Hero
  hero: {
    tag: "Propuesta Estratégica · Abril 2026",
    titlePre: "OCA, el camino hacia una ",
    titleHighlight: "empresa modelo",
    titlePost: " en la industria logística",
    subtitle:
      'Iniciativa de implementación de soluciones de <strong>IA Empresarial</strong>, con el objetivo de modernizar los procesos internos de la compañía, buscando reducir las cargas operativas manuales y mejorar los beneficios de la compañía, basándonos en <strong>eficiencia</strong>.',
    ctaText: "Ver la solución",
    ctaHref: "#modulos",
  },

  // Intro
  intro: {
    title: "El contexto exige una respuesta tecnológica",
    paragraphs: [
      "La siguiente propuesta tiene como principal objetivo presentar diversas soluciones de implementación de <strong>inteligencia artificial y automatización de procesos</strong>, de modo que la empresa pueda mejorar la eficiencia de sus tareas operativas.",
      "Dentro de las soluciones que se plantean como potenciales implementaciones, encontraremos eficiencia en procesos ligados directamente a los <strong>servicios core de la empresa</strong>. Poniendo foco en generar mejores resultados desde lo económico y desde el valor percibido, tanto del cliente, como del equipo de OCA, en todas sus verticales de negocios.",
      "Es importante destacar que aquellos procesos operativos ligados a la correcta administración del negocio, también son sujetos de modernización mediante la implementación de <strong>soluciones de gestión eficientes</strong>, buscando acompañar a un crecimiento tecnológico general de la compañía.",
      "El proyecto busca acompañar a OCA en un <strong>proceso continuo de modernización</strong>, entendiendo las metodologías y procesos actuales, para luego establecer un plan de trabajo por etapas que permita transitar un camino de tecnologización, con resultados concretos y medibles, sobre los distintos proyectos en curso.",
    ],
  },

  // Modules
  modules: {
    sectionTitle: "Marco de Implementación Tecnológica",
    sectionSubtitle:
      "Soluciones que se pueden implementar y desarrollar de manera independiente con el objetivo de comenzar el proceso de modernización tecnológica de OCA.",
    items: [
      {
        number: "01",
        title: "Gestión de Remitos y Documentación Inteligente",
        body: 'Reemplazar los remitos físicos por un ecosistema de <strong>remitos y documentación digital</strong>. Con el principal objetivo de mejorar los tiempos de conciliación de la documentación y por consiguiente el <strong>ciclo de cobro del servicio</strong>.',
        features: [
          "Remitos digitales con validación automática",
          "Conciliación documental acelerada",
          "Reducción del ciclo de cobro",
          "Eliminación de errores manuales",
        ],
      },
      {
        number: "02",
        title: "Integración Total con Clientes",
        body: 'Ecosistema digital de <strong>integración con clientes en tiempo real</strong>, teniendo acceso a información relevante de pedidos y stock, junto con <strong>dashboards predictivos</strong> con inteligencia de negocios para la mejora del servicio.',
        features: [
          "Integración en tiempo real con clientes",
          "Acceso a información de pedidos y stock",
          "Dashboards predictivos con BI",
          "Mejora continua del servicio",
        ],
      },
      {
        number: "03",
        title: "Seguimiento Inteligente",
        body: 'Sistema de gestión de <strong>trazabilidad de punta a punta</strong> en el proceso de entrega de mercadería, con sistemas de alertas inteligentes para clientes finales con tiempos de entrega, demoras e incidentes. Internamente, la consolidación del cumplimiento de las entregas, buscando <strong>mejorar la comunicación con el receptor</strong> y reduciendo los casos de falla en la entrega.',
        features: [
          "Trazabilidad de punta a punta",
          "Alertas inteligentes para clientes finales",
          "Notificaciones de tiempos, demoras e incidentes",
          "Reducción de fallas en la entrega",
        ],
      },
      {
        number: "04",
        title: "Trazabilidad Inteligente",
        body: 'Visibilidad de <strong>extremo a extremo</strong> para toda la cadena logística. Incluye <strong>trazabilidad biológica para OCA Salud</strong>, garantizando el cumplimiento de los estándares de la cadena de frío y transporte especializado.',
        features: [
          "Visibilidad extremo a extremo",
          "Trazabilidad biológica para OCA Salud",
          "Cadena de frío monitoreada",
          "Estándares de transporte especializado",
        ],
      },
      {
        number: "05",
        title: "Hojas de Ruta Inteligente",
        body: 'Sistema de armado y desarrollo de las <strong>hojas de ruta de cada transportista</strong>, siguiendo parámetros de eficiencia de kilómetros recorridos, recorrido del transporte y orden de entrega. Cada domicilio se identifica como un <strong>evento de entrega</strong> que alimenta al sistema de alertas y permite medir la eficiencia de tiempos.',
        features: [
          "Hojas de ruta optimizadas por transportista",
          "Eficiencia de kilómetros recorridos",
          "Cada domicilio como evento de entrega",
          "Medición de eficiencia de tiempos",
        ],
        isHighlighted: true,
        badge: "Eficiencia Operativa",
      },
      {
        number: "06",
        title: "Gestión Documental Inteligente",
        body: 'Sistemas de gestión de <strong>documentación administrativa inteligente</strong> que abarca contratos comerciales con clientes, contratos con transportistas tercerizados, gestión de RRHH (legajo digital, licencias, vacaciones, ausentismo, sanciones y accidentes) y <strong>gestión automatizada de cuentas a pagar</strong> con autorización de pagos de proveedores.',
        features: [
          "Contratos comerciales: confección, alertas de vencimiento y renovación",
          "Contratos con transportistas tercerizados",
          "RRHH: legajo digital, licencias, vacaciones, ausentismo",
          "Cuentas a pagar: autorización automatizada de facturas",
        ],
      },
    ],
  },

  // IA Highlight
  iaHighlight: {
    title: "Plan de modernización tecnológica en etapas",
    description:
      "Un proceso estructurado para acompañar a OCA en su <strong>camino de tecnologización</strong>, con resultados concretos y medibles en cada fase:",
    cards: [
      {
        icon: "🔎",
        title: "1. Identificación de procesos",
        text: "Identificar los procesos internos claves, que requieren de la implementación tecnológica.",
      },
      {
        icon: "✏️",
        title: "2. Diseño de soluciones",
        text: "Diseñar soluciones específicas de implementación tecnológica con el objetivo de mejora y generar impacto interno inmediato.",
      },
      {
        icon: "🧪",
        title: "3. Implementación piloto",
        text: "Seleccionar un grupo piloto para desarrollar la implementación y realizar las primeras pruebas de la solución.",
      },
      {
        icon: "🌐",
        title: "4. Incorporación global",
        text: "Extender el uso del nuevo proceso tecnológico a nivel general en la empresa, buscando generar el impacto global de la solución.",
      },
    ],
  },

  // Implementation
  implementation: {
    sectionTitle: "Hoja de Ruta de Implementación",
    cards: [
      {
        icon: "🔍",
        title: "Fase 1 · Diagnóstico (4-6 semanas)",
        text: "Auditoría tecnológica integral de la infraestructura actual de OCA. Relevamiento de APIs, sistemas de trazabilidad, flujos de remitos y protocolos de seguridad. Entrega de un informe ejecutivo con la arquitectura de IA propuesta.",
      },
      {
        icon: "🚀",
        title: "Fase 2 · Piloto en OCA RED (12-16 semanas)",
        text: "Implementación del motor de rutas dinámicas y dashboards predictivos en una red de sucursales seleccionada. Integración con e-Pak para trazabilidad de última milla. Validación de métricas de ROI antes de escalar.",
      },
      {
        icon: "🇦🇷",
        title: "Fase 3 · Escalamiento Nacional (24-36 semanas)",
        text: "Despliegue progresivo por regiones de los cuatro pilares de IA. Digitalización completa de remitos con visión artificial. Activación de sensores IoT para OCA Salud. Capacitación masiva del personal operativo.",
      },
    ],
  },

  // CTA
  cta: {
    title: "OCA IA, la ruta hacia una empresa modelo en tecnología e IA de la industria logística",
    text: "Estamos preparados para acompañar a OCA LOG S.A. en un proceso continuo de modernización, con resultados concretos y medibles en cada etapa del camino.",
    buttonText: "Coordinar reunión",
    buttonHref: "mailto:info@boty.cloud",
  },

  // Footer
  footer: {
    copyText:
      "© 2026 Boty · Propuesta confidencial para OCA LOG S.A.",
  },
};

async function seed() {
  console.log(`Seeding proposal: ${PROPOSAL_ID}`);
  await db.collection("proposals").doc(PROPOSAL_ID).set(ocaProposal);
  console.log(`Done! View at: /proposals/${PROPOSAL_ID}`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
