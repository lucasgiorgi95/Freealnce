export type Plan = {
  name: string;
  price: string;
  tagline: string;
  description: string;
  features: string[];
  cta: string;
  /** Visually highlighted as the recommended option */
  highlight: boolean;
};

export const plans: Plan[] = [
  {
    name: "START",
    price: "€149",
    tagline: "Landing page profesional",
    description:
      "Para profesionales o negocios que necesitan una presencia online sencilla y efectiva.",
    features: [
      "1 página (landing page)",
      "Diseño personalizado",
      "Adaptada a móviles",
      "Formulario de contacto",
      "Integración con redes sociales",
      "Optimización SEO básica",
      "1 ronda de revisiones",
      "Entrega en ~1 semana",
    ],
    cta: "Empezar con START",
    highlight: false,
  },
  {
    name: "BUSINESS",
    price: "€249",
    tagline: "Web para negocio",
    description:
      "Para empresas, comercios y profesionales que necesitan una web completa de varias páginas.",
    features: [
      "Hasta 5 páginas",
      "Diseño coherente y profesional",
      "Adaptada a todos los dispositivos",
      "Formulario de contacto",
      "Integración con Google Maps",
      "SEO on-page optimizado",
      "Integración con redes sociales",
      "2 rondas de revisiones",
      "Entrega en 1–2 semanas",
    ],
    cta: "Empezar con BUSINESS",
    highlight: true,
  },
  {
    name: "PRO",
    price: "€399",
    tagline: "Web más completa",
    description:
      "Para proyectos más ambiciosos que necesitan CMS, blog, integraciones o funcionalidades adicionales.",
    features: [
      "Todo lo del plan BUSINESS",
      "CMS para gestionar contenido",
      "Blog o sección de noticias",
      "Integraciones de terceros",
      "Funcionalidades personalizadas",
      "Optimización avanzada",
      "3 rondas de revisiones",
      "Soporte post-lanzamiento 30 días",
    ],
    cta: "Empezar con PRO",
    highlight: false,
  },
];
