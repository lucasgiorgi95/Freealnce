import { Smartphone, Zap, Euro, HeadphonesIcon, Search, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const benefits: Benefit[] = [
  {
    icon: Smartphone,
    title: "Adaptada a móviles",
    description:
      "Más del 70% de las visitas vienen del móvil. Tu web funciona perfectamente en cualquier dispositivo.",
  },
  {
    icon: Zap,
    title: "Rápida y optimizada",
    description:
      "Webs que cargan en segundos. Una web lenta pierde clientes. La tuya no.",
  },
  {
    icon: Euro,
    title: "Precio accesible",
    description:
      "Sin agencias grandes ni costes inflados. Un desarrollador directo, sin intermediarios.",
  },
  {
    icon: Search,
    title: "Lista para Google",
    description:
      "Configurada con buenas prácticas de SEO para que te encuentren en Google desde el primer día.",
  },
  {
    icon: Shield,
    title: "Sin letra pequeña",
    description:
      "Presupuesto claro antes de empezar. Sabes exactamente qué incluye y qué cuesta.",
  },
  {
    icon: HeadphonesIcon,
    title: "Trato directo",
    description:
      "Hablas siempre conmigo. Sin gestores, sin intermediarios, sin esperas.",
  },
];
