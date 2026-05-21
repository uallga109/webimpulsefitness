import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Entrenamiento con Bandas Elásticas: Resistencia Variable | Impulse Fitness",
  description: "Aprende a entrenar con bandas de resistencia en casa. Guía de biomecánica de polea casera, ley de Hooke, hipertrofia y cuidado articular.",
  keywords: [
    "entrenamiento bandas elasticas casa",
    "ejercicios bandas de resistencia",
    "remo con bandas elasticas",
    "resistencia variable bandas ley hooke",
    "bandas elasticas musculacion opiniones",
    "ejercicios polea en casa bandas",
    "gimnasio portatil bandas elasticas"
  ],
};

export default function BandasElasticasPage() {
  const biomechanics = {
    explanation: "El entrenamiento con bandas elásticas se rige por la física del material elastómero y la Ley de Hooke, la cual establece que la fuerza deformadora es directamente proporcional a la longitud de estiramiento. Biomecánicamente, esto produce un perfil de resistencia ascendente (sobrecarga progresiva dentro de la misma repetición), donde la carga máxima coincide con el punto de acortamiento máximo del músculo y su óptima ventaja mecánica. A diferencia del peso libre, que depende estrictamente de la gravedad vertical, las bandas permiten aplicar vectores de fuerza tridimensionales en planos transversales u horizontales, emulando la tensión continua de las poleas comerciales.",
    mechanisms: [
      "Perfil de resistencia ascendente y variable acoplado a la curva de fuerza muscular fisiológica.",
      "Tensión mecánica continua multidireccional sin depender de la fuerza de la gravedad.",
      "Atenuación del pico de fuerza en la posición de máximo estiramiento articular (protección del tendón)."
    ]
  };

  const topExercises = [
    {
      name: "Remo Horizontal Sentado con Banda",
      target: "Dorsal Ancho, Redondo Mayor, Trapecio Medio y Romboides",
      desc: "Excelente constructor de tracción horizontal que imita el remo en polea baja. La tensión máxima coincide con la máxima contracción escapular en la fase concéntrica.",
      tip: "Pisa firmemente la banda con ambos pies y concéntrate en guiar el movimiento llevando los codos hacia tus caderas, no hacia tus hombros."
    },
    {
      name: "Elevaciones Laterales con Banda de Resistencia",
      target: "Deltoides Lateral (Porción Media)",
      desc: "Aísla el deltoides lateral de forma superior al peso libre. En mancuernas, la gravedad ofrece cero resistencia en el inicio; la banda proporciona tensión constante.",
      tip: "Sujeta la banda pisándola con el pie opuesto al brazo de elevación para crear una trayectoria diagonal perfecta para la abducción de hombro."
    },
    {
      name: "Press de Pecho de Pie con Banda de Resistencia (Anclada)",
      target: "Pectoral Mayor, Deltoides Anterior y Tríceps Braquial",
      desc: "Ejercita el empuje horizontal de pie utilizando el anclaje de la puerta, obligando a tu core anterior a estabilizar contra la tracción trasera.",
      tip: "Adelanta un pie para formar una base estable de zancada y mantén el torso rígido y firme para aislar el empuje pectoral."
    }
  ];

  const faqs = [
    {
      question: "¿Pueden las bandas elásticas construir músculo real (hipertrofia)?",
      answer: "Sí, definitivamente. El músculo esquelético no distingue entre la gravedad de una mancuerna o la tensión de un elastómero; solo responde al estrés mecánico y a la fatiga de fibras. Las bandas son capaces de reclutar las fibras tipo II igual de eficientemente que el peso libre, especialmente si se realiza una fase concéntrica explosiva y se controla cuidadosamente la fase excéntrica resistiendo la tensión elástica."
    },
    {
      question: "¿Qué diferencia hay entre las bandas de tela (glute bands) y las de látex puro?",
      answer: "Las bandas de tela con filamentos elásticos internos son ideales para el tren inferior y ejercicios como pasos laterales o puentes de glúteo, ya que ofrecen una resistencia inicial muy alta y no se enrollan ni pellizcan la piel. Las bandas de látex puro (power bands cerradas o tubulares con asas) son mucho más elásticas, permitiendo rangos de estiramiento largos aptos para ejercicios de tren superior, tracciones y asistencia en dominadas."
    },
    {
      question: "¿Cómo puedo evitar que mis bandas se agrieten o se rompan bruscamente?",
      answer: "Para garantizar tu seguridad, nunca ancles las bandas sobre superficies cortantes o ásperas (como metal oxidado o bisagras). Limpia el látex con un paño húmedo después de sudar y evita dejarlas expuestas directamente al sol o a fuentes de calor intenso, ya que los rayos UV resecan el material provocando micro-fisuras. Revísalas visualmente siempre antes de entrenar en busca de rasgaduras o zonas descoloridas."
    }
  ];

  return (
    <ExerciseDetailLayout 
      slug="bandas-elasticas"
      title="Bandas Elásticas"
      subtitle="Simulación de poleas y estímulo continuo con resistencia variable en cualquier plano."
      image="/images/ejercicios/trx.png"
      category="Con Accesorios"
      muscles={{
        primary: "Dorsales, pectoral mayor, deltoides lateral, glúteo medio y bíceps.",
        secondary: "Manguito rotador, serrato anterior y estabilidad del core profundo."
      }}
      material={[
        "Set de bandas elásticas tubulares con mosquetón y asas.",
        "Anclaje especial acolchado para puerta.",
        "Set de mini-bandas de tela (loops) para tren inferior."
      ]}
      keyExercise={{
        name: "Remo Sentado con Banda",
        steps: [
          "Siéntate en el suelo con el torso erguido y las piernas completamente extendidas o ligeramente flexionadas.",
          "Cruza el centro de la banda plana alrededor de los metatarsos de tus pies para evitar que se deslice.",
          "Agarra cada extremo de la banda con las palmas mirándose entre sí (agarre neutro) y estira los brazos.",
          "Inicia el movimiento traccionando desde los codos hacia atrás, manteniendo los antebrazos paralelos al suelo.",
          "Lleva las manos hacia tu abdomen bajo apretando los omóplatos y aguanta la contracción 1 segundo antes de liberar el aire."
        ]
      }}
      benefits={[
        "Tensión continua absoluta: Sin puntos de descanso gravitatorios durante todo el arco del movimiento articular.",
        "Resistencia variable óptima: La tensión aumenta de forma ascendente coincidiendo con tu mayor ventaja de palanca mecánica.",
        "Seguridad articular garantizada: Reduce el estrés de cizallamiento en las inserciones musculares cuando están en estiramiento máximo."
      ]}
      commonErrors={[
        "Dejar que la banda retraiga tus brazos sin oponer resistencia (fase excéntrica pasiva nula).",
        "Encoger los hombros elevándolos hacia las orejas durante la fase concéntrica de tirón.",
        "Utilizar un nivel de resistencia elástica excesivo que limite el rango de recorrido óptimo."
      ]}
      biomechanics={biomechanics}
      topExercises={topExercises}
      faqs={faqs}
    />
  );
}
