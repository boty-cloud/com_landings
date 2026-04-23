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
    titlePre: "Inteligencia Artificial para ",
    titleHighlight: "blindar",
    titlePost: " la logística del país",
    subtitle:
      'Iniciativa de <strong>Integración de IA Empresarial</strong> diseñada para proteger márgenes, combatir el ciberdelito y modernizar la infraestructura logística de <strong>OCA LOG&nbsp;S.A.</strong>',
    ctaText: "Ver la solución",
    ctaHref: "#modulos",
  },

  // Intro
  intro: {
    title: "El contexto exige una respuesta tecnológica",
    paragraphs: [
      "OCA opera la red logística más extensa de Argentina: más de <strong>1.400 sucursales</strong> y <strong>1.146 Agentes Oficiales</strong> que mueven la economía del país. Con ingresos proyectados superiores a los <strong>ARS 290.000 millones</strong>, la escala de la operación es un activo estratégico — pero también una superficie de riesgo que crece cada día.",
      "Los costos logísticos acumularon un incremento del <strong>19% en los primeros meses de 2025</strong>. Se registran <strong>4.490 robos de transporte anuales</strong>, con una evolución alarmante hacia el ciberdelito: spoofing de GPS, robo de identidad estratégica y vulneración de sistemas de trazabilidad. Competidores como Andreani ya lideran en ESG con biocombustibles y plásticos recuperados, presionando a OCA a modernizarse para retener contratos corporativos.",
      "Esta propuesta presenta un <strong>Marco de Integración de IA</strong> que no solo defiende los márgenes operativos frente a la inflación, sino que convierte la infraestructura física de OCA en una <strong>ventaja competitiva digital</strong> imposible de replicar.",
    ],
  },

  // Modules
  modules: {
    sectionTitle: "Marco de Implementación Tecnológica",
    sectionSubtitle:
      "Cuatro pilares de IA diseñados para la escala y complejidad operativa de OCA.",
    items: [
      {
        number: "01",
        title: "Integración Total con Clientes",
        body: 'Ecosistema digital que conecta a los clientes de e-commerce en tiempo real. <strong>IA en el Portal de Desarrolladores</strong> para automatizar la integración de APIs e inventarios, y <strong>Dashboards Predictivos B2B</strong> que generan informes ejecutivos con análisis de cuellos de botella y optimizaciones de stock para clientes de Outsourcing.',
        features: [
          "Integración automatizada de APIs con IA",
          "Dashboards predictivos B2B en tiempo real",
          "Conexión directa inventario-logística",
          "Informes ejecutivos automáticos",
        ],
      },
      {
        number: "02",
        title: "Gestión Inteligente de Remitos y Documentación",
        body: 'Reemplazo del remito físico por un ecosistema de <strong>remitos digitales</strong> validados mediante visión artificial y firmas biométricas, eliminando errores en carga y descarga. Procesamiento de lenguaje natural (NLP) para la gestión de <strong>Cartas Documento y Telegramas</strong>, asegurando trazabilidad jurídica total.',
        features: [
          "Remitos digitales con visión artificial",
          "Firmas biométricas de validación",
          "NLP para documentos legales",
          "Trazabilidad jurídica end-to-end",
        ],
      },
      {
        number: "03",
        title: "Trazabilidad 360° con IoT",
        body: 'Visibilidad de extremo a extremo para toda la cadena. <strong>Trazabilidad biológica para OCA Salud</strong> con sensores IoT y alertas predictivas que garantizan la cadena de frío. <strong>Trazabilidad de última milla</strong> a través de e-Pak con tiempos estimados de llegada (ETA) ultra-precisos para el cliente final.',
        features: [
          "Sensores IoT para cadena de frío",
          "Alertas predictivas ante fallos mecánicos",
          "ETA ultra-precisos vía e-Pak",
          "Monitoreo en tiempo real extremo a extremo",
        ],
      },
      {
        number: "04",
        title: "Hojas de Ruta Dinámicas",
        body: 'Motor de <strong>Vehicle Routing Problem (VRP)</strong> con Machine Learning que genera la hoja de ruta diaria de cada chofer, ajustándola en tiempo real según tráfico de CABA/GBA y <strong>zonas de riesgo delictivo</strong>. Incluye protocolos de inmovilización automática si el vehículo se desvía en "zonas calientes".',
        features: [
          "Algoritmos VRP con Machine Learning",
          "Ajuste en tiempo real por tráfico",
          "Mapeo de zonas de riesgo delictivo",
          "Inmovilización automática ante desvíos",
        ],
        isHighlighted: true,
        badge: "Anti-robo de Carga",
      },
    ],
  },

  // IA Highlight
  iaHighlight: {
    title: "IA que protege ARS 290.000 millones en ingresos",
    description:
      "Cada pilar de IA está diseñado para <strong>defender y expandir el flujo de caja</strong> de OCA frente a las tres amenazas principales del entorno 2025-2026:",
    cards: [
      {
        icon: "📉",
        title: "Contra la inflación",
        text: "La optimización dinámica de rutas y la digitalización de remitos reducen costos operativos directos, compensando el incremento del 19% en costos logísticos.",
      },
      {
        icon: "🛡️",
        title: "Contra el ciberdelito",
        text: "Protocolos de inmovilización, trazabilidad biométrica y monitoreo IoT en tiempo real blindan la operación contra los 4.490 robos anuales y el spoofing de GPS.",
      },
      {
        icon: "🌱",
        title: "Contra la presión ESG",
        text: "La optimización de rutas con IA reduce emisiones de CO₂ por kilómetro recorrido, y la eliminación del remito físico posiciona a OCA en sustentabilidad documental.",
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
    title: "La escala de OCA merece tecnología a su medida",
    text: "Estamos preparados para acompañar a OCA LOG S.A. en la transformación que el mercado exige. Cada mes sin IA es un mes donde la inflación erosiona márgenes, el ciberdelito avanza y la competencia se diferencia.",
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
