/**
 * Shared, reusable content blocks for Auren-branded proposals.
 *
 * Import these in any `seed-*-auren.ts` script so every Auren proposal stays
 * consistent. Update here once and re-seed to propagate to all proposals.
 */

import { Proposal } from "../types/proposal";

/**
 * Standard "¿Por qué Auren?" section — mirrors Auren's own services deck
 * (institutional intro + Consultoría 360° pillars + propuesta de valor).
 * This block is fixed and should be identical across all Auren proposals.
 */
export const AUREN_ABOUT_US: NonNullable<Proposal["aboutUs"]> = {
  title: "¿Por qué Auren?",
  logo: "/logos/Auren/Auren.jpeg",
  paragraphs: [
    "Auren impulsa la transformación y competitividad de las organizaciones mediante un enfoque integral que combina consultoría de negocio, tecnología e innovación. Acompañamos a empresas en la optimización de procesos, la adopción de inteligencia artificial, la evolución de sus plataformas tecnológicas y la gestión del cambio, transformando la tecnología en resultados concretos de negocio. Basamos nuestro trabajo en la integración de personas, procesos y tecnología para generar crecimiento sostenible y escalable.",
  ],
  cardsTitle: "Consultoría 360°",
  cardsSubtitle: "Una propuesta integral, no diagnósticos aislados",
  cardsSubtitleText:
    "Hoy las organizaciones no necesitan diagnósticos aislados. Necesitan soluciones integrales, accionables y sostenibles en el tiempo.",
  cards: [
    {
      title: "Verticales y especialización",
      text: "Esto se traduce en propuestas más relevantes, con conocimiento técnico, regulatorio y operativo real.",
    },
    {
      title: "Alianzas y red de especialistas",
      text: "Se integran según las necesidades de cada proyecto. Armamos el mejor equipo para cada cliente.",
    },
    {
      title: "Diferencial en consultoría tradicional",
      text: "Trabajamos codo a codo con las organizaciones, convirtiendo el diagnóstico en acción.",
    },
  ],
  valueProposition: {
    title: "Propuesta de valor",
    text: "Comprendemos la complejidad de los negocios y ayudamos a transformarlos combinando estrategia, personas, procesos, tecnología e inteligencia artificial, aplicada con criterio y foco en resultados, para potenciar la toma de decisiones y crear valor concreto y medible.",
  },
};

/**
 * Standard Auren delivery team — roles only, no personal names.
 * Cards render a role icon/initials placeholder (no photos).
 */
export const AUREN_TEAM: NonNullable<Proposal["team"]> = {
  title: "Equipo de Trabajo",
  subtitle: "Un equipo que combina consultoría de negocio con capacidad técnica de implementación.",
  members: [
    {
      name: "Líder de Proyecto",
      role: "Coordinación, planificación y seguimiento del proyecto",
    },
    {
      name: "Desarrollador Backend",
      role: "Arquitectura, integraciones y lógica de negocio",
    },
    {
      name: "Desarrollador Frontend",
      role: "Interfaz y experiencia de usuario",
    },
  ],
};
