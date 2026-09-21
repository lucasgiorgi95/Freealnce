import { FileText, Building2, Cpu } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  name: string;
  price: string;
  tagline: string;
  description: string;
  includes: string[];
  highlight: boolean;
};

export const services: Service[] = [
  {
    icon: FileText,
    name: "Landing Page",
    price: "Desde €149",
    tagline: "Presenta tu negocio y capta clientes",
    description:
      "Ideal para profesionales, emprendedores y pequeños negocios que necesitan una presencia online efectiva y directa.",
    includes: [
      "Diseño personalizado y moderno",
      "Adaptada a móviles y tablets",
      "Formulario de contacto",
      "Optimización básica SEO",
      "Carga rápida",
      "Entrega en ~1 semana",
    ],
    highlight: false,
  },
  {
    icon: Building2,
    name: "Web para negocio",
    price: "Desde €249",
    tagline: "Tu negocio merece más que una sola página",
    description:
      "Web completa de varias páginas para empresas, comercios y profesionales que necesitan mostrar más información.",
    includes: [
      "Hasta 5 páginas (inicio, servicios, sobre mí…)",
      "Diseño coherente y profesional",
      "Adaptada a todos los dispositivos",
      "Integración con Google Maps",
      "SEO on-page optimizado",
      "Entrega en 1–2 semanas",
    ],
    highlight: true,
  },
  {
    icon: Cpu,
    name: "Web personalizada",
    price: "Desde €399",
    tagline: "Funcionalidades a medida para tu proyecto",
    description:
      "Para proyectos que necesitan algo más: blog, panel de administración, reservas online, integraciones externas u otras funcionalidades.",
    includes: [
      "Todo lo del paquete Business",
      "CMS para gestionar contenido",
      "Blog o sección de noticias",
      "Integraciones personalizadas",
      "Funcionalidades a medida",
      "Soporte post-lanzamiento",
    ],
    highlight: false,
  },
];
