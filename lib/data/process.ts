export type Step = {
  number: string;
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Me cuentas qué necesitas",
    description:
      "Rellenas el formulario o me escribes explicando tu negocio y lo que buscas. Sin compromisos, es gratis.",
  },
  {
    number: "02",
    title: "Preparo una propuesta",
    description:
      "En 24–48 horas te envío un presupuesto detallado con el alcance, precio y plazos. Sin letra pequeña.",
  },
  {
    number: "03",
    title: "Diseño y desarrollo tu web",
    description:
      "Trabajo en tu web y te voy mostrando el avance. Tú decides el estilo y yo lo construyo.",
  },
  {
    number: "04",
    title: "Revisamos los cambios",
    description:
      "Una vez lista la primera versión, tienes rondas de revisión incluidas para ajustar lo que necesites.",
  },
  {
    number: "05",
    title: "Publicamos",
    description:
      "Subimos tu web al servidor, configuramos el dominio y queda lista para recibir visitantes.",
  },
];
