import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const PROPOSAL_ID = "auren-boty-alliance-2026";

const app = initializeApp({
  credential: applicationDefault(),
  projectId: process.env.NEXT_PUBLIC_FIRESTORE_PROJECT_ID || "boty-app",
});

const db = getFirestore(app);

const aurenBotyProposal = {
  status: "draft",
  createdAt: new Date().toISOString(),

  // Branding
  clientName: "Auren Latin America",
  clientLogo: "/logos/Auren/Auren_Boty.webp",
  botyLogo: "/logos/Boty/Version negativo.png",
  botyLogoFooter: "/logos/Boty/Iso positivo.png",

  // Hero
  hero: {
    tag: "Alianza Estratégica · Propuesta Comercial · Abril 2026",
    titlePre: "Consultoría + IA: ",
    titleHighlight: "implementación real",
    titlePost: " para cada cliente de Auren",
    subtitle:
      'Auren identifica la oportunidad. Boty construye la solución. Una <strong>alianza de go-to-market</strong> que transforma cada engagement de consultoría en un <strong>proyecto de implementación de IA</strong> — en cualquier industria, para cualquier cliente.',
    ctaText: "Explorar el modelo",
    ctaHref: "#modulos",
  },

  // Intro
  intro: {
    title: "De la recomendación al resultado",
    paragraphs: [
      "Hoy las consultoras entregan informes. Los clientes reciben 200 páginas de diagnóstico, un roadmap de transformación digital… y después quedan solos para ejecutar. El <strong>gap entre la estrategia y la implementación</strong> es donde mueren el 70% de los proyectos de IA en América Latina.",
      "Esta propuesta plantea un modelo diferente: <strong>Auren + Boty como alianza integrada</strong>. Auren aporta la relación con el cliente, el conocimiento de la industria y el rigor consultivo. Boty aporta la ingeniería, la infraestructura y la capacidad de llevar modelos de IA a producción. El cliente recibe una solución completa — no un informe, sino un sistema funcionando.",
      "El alcance es enorme: cada cliente de Auren en auditoría, impuestos, legal o consultoría es un candidato potencial para un proyecto de IA. Logística, retail, agro, salud, servicios financieros, manufactura — <strong>no hay industria que quede afuera</strong>. La pregunta no es si hay demanda, sino cuántos proyectos podemos absorber en el primer año.",
    ],
  },

  // Modules
  modules: {
    sectionTitle: "El Modelo de Alianza",
    sectionSubtitle:
      "Auren consulta, diagnostica y vende. Boty diseña, construye y opera. El cliente recibe una solución completa.",
    items: [
      {
        number: "01",
        title: "Discovery & Diagnóstico de IA",
        body: '<strong>Auren lidera.</strong> En cada engagement existente — auditoría, tax, legal, consultoría — el equipo de Auren incorpora un <strong>AI Opportunity Assessment</strong> como capa adicional del servicio. Identifica procesos del cliente que pueden automatizarse, predecirse u optimizarse con IA. El diagnóstico se convierte en un nuevo entregable de alto valor y en la puerta de entrada al proyecto de implementación.',
        features: [
          "Framework propietario de AI Readiness por industria",
          "Mapeo de procesos con potencial de automatización",
          "Business case con ROI estimado por caso de uso",
          "Entregable ejecutivo listo para aprobación de directorio",
        ],
      },
      {
        number: "02",
        title: "Arquitectura & Implementación",
        body: '<strong>Boty lidera.</strong> Con el diagnóstico aprobado, Boty toma el proyecto y ejecuta: diseño de arquitectura, desarrollo de modelos, integración con sistemas del cliente y despliegue en producción. Desde <strong>chatbots con IA hasta motores de predicción de demanda</strong>, la ejecución es end-to-end y con entrega medible.',
        features: [
          "Diseño de solución a medida del cliente",
          "Desarrollo e integración con ERP/CRM existentes",
          "Despliegue en cloud (GCP, Azure, AWS)",
          "Testing, validación y puesta en producción",
        ],
      },
      {
        number: "03",
        title: "Verticales de Industria",
        body: 'Cada industria donde Auren opera es un mercado para la alianza. Las soluciones de IA se adaptan al contexto sectorial: <strong>trazabilidad inteligente en logística</strong>, <strong>predicción de demanda en retail</strong>, <strong>scoring crediticio en fintech</strong>, <strong>auditoría algorítmica en servicios profesionales</strong>, <strong>visión artificial en manufactura</strong>. Un catálogo que crece con cada proyecto.',
        features: [
          "Logística: optimización de rutas y trazabilidad 360°",
          "Retail & CPG: predicción de demanda y pricing dinámico",
          "Servicios financieros: scoring, AML y detección de fraude",
          "Agro & industria: visión artificial y mantenimiento predictivo",
          "Salud: procesamiento de historias clínicas y triaje IA",
        ],
        isHighlighted: true,
        badge: "Multi-Industria",
      },
      {
        number: "04",
        title: "Modelo Comercial Compartido",
        body: 'Un <strong>revenue share</strong> transparente donde ambas partes ganan con cada proyecto. Auren monetiza su base de clientes con un servicio nuevo de alto margen. Boty accede a un canal de venta consultivo con relaciones de confianza preexistentes. El cliente paga un único proyecto integrado — sin fricción entre consultoría e implementación.',
        features: [
          "Revenue share por proyecto implementado",
          "Auren: fee de consultoría + porcentaje de implementación",
          "Boty: fee de implementación + soporte recurrente",
          "Pipeline compartido y reporting unificado",
        ],
      },
      {
        number: "05",
        title: "Soporte Continuo & Evolución",
        body: 'Post-implementación, Boty opera y evoluciona la solución. <strong>Contratos de soporte recurrente</strong> que generan revenue mensual para ambas partes. Monitoreo de modelos, reentrenamiento periódico, nuevas features. Cada cliente se convierte en una relación de largo plazo, no en un proyecto puntual.',
        features: [
          "SLA de soporte y monitoreo 24/7",
          "Reentrenamiento de modelos con datos nuevos",
          "Evolución funcional: nuevas features y casos de uso",
          "Revenue recurrente mensual para la alianza",
        ],
      },
    ],
  },

  // IA Highlight
  iaHighlight: {
    title: "Por qué esta alianza funciona",
    description:
      'Dos capacidades complementarias que separadas son buenas, pero juntas son <strong>imbatibles en el mercado LatAm</strong>:',
    cards: [
      {
        icon: "🤝",
        title: "Acceso a mercado",
        text: "Auren tiene presencia en 60 países, más de 4.000 profesionales y relaciones de confianza con CFOs y directorios. Cada engagement es una puerta de entrada a un proyecto de IA. No hay que salir a buscar clientes — ya están.",
      },
      {
        icon: "⚙️",
        title: "Capacidad de ejecución",
        text: "Boty tiene la ingeniería, la infraestructura cloud y la experiencia en producción para llevar soluciones de IA del prototipo al deploy. No se queda en el PowerPoint — entrega sistemas funcionando.",
      },
      {
        icon: "📈",
        title: "Escalabilidad infinita",
        text: "El modelo escala con cada nuevo cliente y cada nueva industria. Los frameworks se reutilizan, los costos marginales bajan y el pipeline crece orgánicamente. Más clientes de Auren = más proyectos de Boty.",
      },
    ],
  },

  // Implementation
  implementation: {
    sectionTitle: "Cómo Arrancamos",
    cards: [
      {
        icon: "🎯",
        title: "Mes 1 · Alineación estratégica",
        text: "Workshop conjunto entre los equipos comerciales de Auren y Boty. Definición del framework de AI Readiness, selección de las primeras 3 verticales de industria prioritarias y armado del pitch conjunto para clientes.",
      },
      {
        icon: "🚀",
        title: "Meses 2-3 · Primeros proyectos piloto",
        text: "Identificación de 3-5 clientes de Auren con alta propensión a IA. Ejecución del Discovery & Business Case. Cierre del primer proyecto de implementación como caso de éxito para escalar la alianza.",
      },
      {
        icon: "📊",
        title: "Meses 4-6 · Escala y pipeline",
        text: "Con el primer caso de éxito validado, se activa el go-to-market en las verticales prioritarias. Training a consultores de Auren para detectar oportunidades de IA en cada engagement. Meta: 10+ proyectos en pipeline al cierre del semestre.",
      },
    ],
  },

  // CTA
  cta: {
    title: "La consultoría del futuro no solo recomienda — implementa",
    text: "Cada cliente de Auren que hoy recibe un informe podría recibir una solución de IA funcionando. Cada engagement de auditoría, tax o legal es una oportunidad de venta cruzada. El mercado de IA en LatAm crece al 30% anual y las consultoras que llegan primero con capacidad de ejecución capturan la relación a largo plazo. Auren tiene los clientes. Boty tiene la tecnología. Solo falta sentarse a armar el plan.",
    buttonText: "Agendar reunión de kick-off",
    buttonHref: "mailto:info@boty.cloud",
  },

  // Footer
  footer: {
    copyText:
      "© 2026 Boty · Propuesta confidencial para Auren Latin America · Alianza Estratégica",
  },
};

async function seed() {
  console.log(`Seeding proposal: ${PROPOSAL_ID}`);
  await db.collection("proposals").doc(PROPOSAL_ID).set(aurenBotyProposal);
  console.log(`Done! View at: /proposals/${PROPOSAL_ID}`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
