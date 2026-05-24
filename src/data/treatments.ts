export type TreatmentCategory =
  | "Dermatología"
  | "Facial"
  | "Corporal"
  | "Aparatología"
  | "Capilar";

export type Treatment = {
  title: string;
  category: TreatmentCategory;
  summary: string;
  detail: string;
};

export const categories: Array<"Todos" | TreatmentCategory> = [
  "Todos",
  "Dermatología",
  "Facial",
  "Corporal",
  "Aparatología",
  "Capilar"
];

export const treatments: Treatment[] = [
  {
    title: "Acne y rosacea",
    category: "Dermatología",
    summary: "Diagnóstico y seguimiento para pieles sensibles, brotes e inflamación.",
    detail: "Planes personalizados con indicaciones médicas, hábitos de cuidado y controles progresivos."
  },
  {
    title: "Control de lunares",
    category: "Dermatología",
    summary: "Evaluación dermatológica preventiva de lunares, manchas y lesiones de piel.",
    detail: "Chequeos orientados a detección temprana, educación y seguimiento según criterio profesional."
  },
  {
    title: "Manchas y melasma",
    category: "Dermatología",
    summary: "Abordaje gradual para unificar el tono y mejorar la calidad de piel.",
    detail: "Combinación de rutina domiciliaria, protección solar y procedimientos indicados para cada caso."
  },
  {
    title: "Limpieza facial profunda",
    category: "Facial",
    summary: "Higiene, extracciones cuidadas e hidratación para una piel más luminosa.",
    detail: "Ideal como mantenimiento o preparación para otros tratamientos faciales."
  },
  {
    title: "Peelings",
    category: "Facial",
    summary: "Renovación controlada para textura, poros, manchas superficiales y luminosidad.",
    detail: "Selección del activo e intensidad según fototipo, sensibilidad y objetivo de la consulta."
  },
  {
    title: "Toxina botulínica",
    category: "Facial",
    summary: "Tratamiento médico para suavizar líneas de expresión con acabado natural.",
    detail: "Evaluación de gestualidad facial y dosificación conservadora para preservar armonía."
  },
  {
    title: "Ácido hialurónico",
    category: "Facial",
    summary: "Hidratación profunda, perfilado o reposición de volumen según indicación.",
    detail: "Enfoque sutil para acompañar rasgos y mantener una expresión fresca."
  },
  {
    title: "Bioestimulación",
    category: "Facial",
    summary: "Estimulo progresivo de firmeza, elasticidad y calidad global de la piel.",
    detail: "Alternativa para quienes buscan mejoras graduales sin cambios bruscos."
  },
  {
    title: "Dermapen",
    category: "Aparatología",
    summary: "Microestimulación para textura, cicatrices superficiales y glow saludable.",
    detail: "Puede combinarse con activos específicos según necesidad y tolerancia."
  },
  {
    title: "Láser y aparatología",
    category: "Aparatología",
    summary: "Tecnologías orientadas a manchas, textura, rejuvenecimiento y confort de piel.",
    detail: "La indicación depende de evaluación previa, tipo de piel y objetivo clínico-estético."
  },
  {
    title: "Tratamientos corporales",
    category: "Corporal",
    summary: "Protocolos para mejorar textura, firmeza y bienestar corporal.",
    detail: "Combinan evaluación, constancia y tecnología según el plan indicado."
  },
  {
    title: "Capilar y PRP",
    category: "Capilar",
    summary: "Evaluación de caída del cabello y opciones de estímulo capilar.",
    detail: "Seguimiento médico para identificar causas y acompañar la recuperación."
  }
];
