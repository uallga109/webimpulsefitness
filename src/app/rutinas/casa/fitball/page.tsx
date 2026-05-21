import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Fitball (Pelota Suiza): Inestabilidad y Core | Impulse Fitness",
  description: "Entrena con Fitball en casa. Mejora la estabilidad lumbopélvica, propiocepción, dolor lumbar y fortalecimiento del core profundo con pelota suiza.",
  keywords: [
    "fitball ejercicios casa",
    "pelota suiza core entrenamiento",
    "stir the pot fitball tecnica",
    "estabilidad pélvica fitball",
    "fitball dolor de espalda",
    "ejercicios propiocepcion fitball",
    "silla ergonómica fitball"
  ],
};

export default function FitballPage() {
  const biomechanics = {
    explanation: "El entrenamiento con Fitball (pelota suiza) introduce un vector de inestabilidad esférica multidireccional que altera la base de sustentación rígida tradicional. Biomecánicamente, esto obliga al sistema nervioso central a coordinar una respuesta propioceptiva refleja inmediata, activando el 'feed-forward' del abdomen transverso y multífidos milisegundos antes del inicio del movimiento. Además, debido a la compresión elástica y amortiguada del aire de la pelota, se reduce la presión axial sobre los discos intervertebrales mientras se maximiza la co-contracción sinérgica de los estabilizadores globales del core, haciéndolo una herramienta de élite para rehabilitación lumbo-sacra.",
    mechanisms: [
      "Base de sustentación deformable y oscilante tridimensional para forzar adaptaciones propioceptivas.",
      "Activación neural 'feed-forward' anticipatoria de los estabilizadores profundos del core.",
      "Descompresión y amortiguación elástica de fuerzas compresivas lumbares."
    ]
  };

  const topExercises = [
    {
      name: "Plancha con Rotación de Antebrazos (Stir the Pot)",
      target: "Abdomen Transverso, Oblicuo Interno y Externo, y Estabilizadores del Hombro",
      desc: "Ideado por el Dr. Stuart McGill, es uno de los ejercicios de core más demandantes. Consiste en trazar círculos en una plancha sobre la pelota.",
      tip: "Mantén la pelvis completamente fija en el plano sagital y coronal. Solo deben moverse los hombros realizando el movimiento circular."
    },
    {
      name: "Curl de Isquiotibiales con Fitball",
      target: "Isquiotibiales (Bíceps Femoral, Semitendinoso) y Glúteo Mayor",
      desc: "Excelente movimiento de flexión de rodilla contra inestabilidad lateral que desafía el control y la coordinación excéntrica de la cadena posterior.",
      tip: "Eleva la cadera en puente y mantén una línea recta desde los hombros hasta las rodillas mientras flexionas las piernas."
    },
    {
      name: "Hiperextensiones Lumbo-Torácicas sobre Fitball",
      target: "Erectores de la Columna, Multífidos y Glúteos",
      desc: "Fortalece la cadena extensora de la espalda adaptándose a la curvatura natural de la pelota, previniendo la hiperextensión lumbar forzada.",
      tip: "Coloca tus pies firmemente contra la base de una pared para asegurar la estabilidad y concéntrate en abrir la región torácica."
    }
  ];

  const faqs = [
    {
      question: "¿Cómo elijo el diámetro correcto de mi Fitball según mi estatura?",
      answer: "La regla de oro biomecánica es que, al sentarte sobre el Fitball inflado, tus caderas y rodillas deben formar un ángulo exacto de 90 grados con los pies apoyados planos en el suelo. Como referencia:\n- Menos de 1.65 m de estatura: Fitball de 55 cm.\n- Entre 1.65 m y 1.85 m de estatura: Fitball de 65 cm.\n- Más de 1.85 m de estatura: Fitball de 75 cm."
    },
    {
      question: "¿Es realmente recomendable usar el Fitball como silla de oficina?",
      answer: "Sí, pero de manera intermitente. Sentarse en un Fitball elimina el soporte pasivo del respaldo, lo que obliga a tus músculos erectores y abdominales a realizar micro-contracciones continuas para mantener la postura erguida (sedestación activa). Esto previene el colapso postural lumbar. Sin embargo, no se recomienda exceder las 2 horas continuas, ya que la fatiga muscular acumulada podría inducir posturas compensatorias perjudiciales."
    },
    {
      question: "¿Qué nivel de inflado debe tener la pelota para entrenar de forma óptima?",
      answer: "Para maximizar la inestabilidad propioceptiva y asegurar la seguridad, el Fitball debe inflarse hasta que esté firme al tacto pero con un mínimo grado de deformación plástica (aproximadamente un 90-95% de su capacidad nominal). Si está excesivamente blanda o desinflada, aumentará la base de contacto con el suelo y disminuirá radicalmente el reto neuromuscular estabilizador."
    }
  ];

  return (
    <ExerciseDetailLayout 
      slug="fitball"
      title="Fitball (Pelota Suiza)"
      subtitle="Inestabilidad controlada y propiocepción pélvica para un cuerpo equilibrado."
      image="/images/ejercicios/fitball.png"
      category="Con Accesorios"
      muscles={{
        primary: "Transverso abdominal, oblicuos, multífidos y erectores espinales.",
        secondary: "Glúteos, isquiotibiales, suelo pélvico y estabilizadores del manguito rotador."
      }}
      material={[
        "Pelota Fitball de material anti-explosión (anti-burst) de la talla correspondiente.",
        "Bomba de inflado de doble acción."
      ]}
      keyExercise={{
        name: "Plancha Activa (Stir the Pot)",
        steps: [
          "Coloca los antebrazos sobre la parte superior del Fitball entrelazando las manos.",
          "Estiende las piernas hacia atrás apoyando las puntas de los pies en el suelo, separadas a la anchura de los hombros.",
          "Eleva el cuerpo hasta formar una línea recta perfecta desde la cabeza hasta los talones, contrayendo el core y los glúteos.",
          "Realiza giros circulares lentos y controlados con los antebrazos sobre la pelota, como si removieras una gran olla.",
          "Realiza 5 rotaciones en el sentido de las agujas del reloj y otras 5 en sentido inverso manteniendo el torso inmóvil."
        ]
      }}
      benefits={[
        "Propiocepción lumbopélvica profunda: Entrena las respuestas motoras de corrección refleja de la cadera ante desequilibrios.",
        "Descompresión discal activa: Reduce las fuerzas de cizallamiento y compresión lumbar gracias a la deformación esférica elástica.",
        "Reclutamiento de fibras cruzadas: Forzado a mantener el equilibrio constante, activas músculos profundos difíciles de aislar con máquinas."
      ]}
      commonErrors={[
        "Permitir que la pelvis caiga hacia el suelo (hiperlordosis de compensación) por debilidad del core anterior.",
        "Realizar círculos excesivamente amplios perdiendo el control escapular y sobrecargando los hombros.",
        "Utilizar un Fitball desinflado que se amolde al suelo anulando por completo las fuerzas oscilatorias."
      ]}
      biomechanics={biomechanics}
      topExercises={topExercises}
      faqs={faqs}
    />
  );
}
