export type Project = {
  name: string;
  description: string;
  type: string;
  tags: string[];
  url?: string;
  isDemo?: boolean;
  placeholder: string;
  accentColor: string;
};

export const projects: Project[] = [
  {
    name: "E-Yerba",
    description:
      "Tienda online especializada en yerba mate y productos naturales. Catálogo completo, carrito de compras y pasarela de pagos integrada.",
    type: "E-commerce",
    tags: ["Next.js", "TypeScript", "Strapi", "PostgreSQL"],
    placeholder: "EY",
    accentColor: "bg-emerald-600",
  },
  {
    name: "Turismo Yerbatera",
    description:
      "Plataforma de turismo con información de destinos, rutas y experiencias relacionadas con la cultura yerbatera.",
    type: "Web corporativa",
    tags: ["Next.js", "React", "Tailwind CSS"],
    placeholder: "TY",
    accentColor: "bg-sky-600",
  },
  {
    name: "Consthera",
    description:
      "Web profesional para empresa de consultoría con secciones de servicios, equipo y formulario de contacto.",
    type: "Web corporativa",
    tags: ["React", "TypeScript", "Node.js"],
    placeholder: "CO",
    accentColor: "bg-violet-600",
  },
];

export const demoProjects: Project[] = [
  {
    name: "Barbería Moderna",
    description:
      "Demo conceptual para peluquerías y barberías. Reservas online, galería de trabajos, horarios y ubicación.",
    type: "Demo — Peluquería / Barbería",
    tags: ["Landing Page", "Reservas", "Galería"],
    isDemo: true,
    placeholder: "BR",
    accentColor: "bg-amber-600",
  },
  {
    name: "Restaurante Casa Paco",
    description:
      "Demo conceptual para restaurantes y cafeterías. Carta digital, reservas de mesa, horarios y redes sociales.",
    type: "Demo — Restaurante",
    tags: ["Carta digital", "Reservas", "Localización"],
    isDemo: true,
    placeholder: "CP",
    accentColor: "bg-rose-600",
  },
  {
    name: "Fisioterapia Martínez",
    description:
      "Demo conceptual para profesionales de la salud y servicios. Servicios, equipo, citas online y opiniones.",
    type: "Demo — Servicios profesionales",
    tags: ["Citas online", "Servicios", "Blog"],
    isDemo: true,
    placeholder: "FM",
    accentColor: "bg-teal-600",
  },
];
