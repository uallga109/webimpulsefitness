import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Cardio HIIT Sin Impacto: Quema Grasa en Casa | Impulse Fitness",
  description: "Entrenamiento metabólico silencioso. Quema calorías sin saltos ni ruidos. Ideal para entrenar en pisos y proteger articulaciones.",
};

export default function HIITCasaPage() {
  const biomechanics = {
    explanation: "El entrenamiento interválico de alta intensidad (HIIT) sin impacto se basa en mantener elevadas demandas cardiorrespiratorias evitando las fuerzas de reacción del suelo destructivas producidas por las caídas y saltos. Desde la perspectiva de la física, al eliminar las fases de vuelo (donde el cuerpo se despega del suelo), se reduce a cero el estrés compresivo axial en rodillas, tobillos y columna lumbar. La intensidad metabólica se genera mediante la movilización rápida y alternante de grandes grupos musculares (miembros inferiores y tronco) en planos de contracción recíproca continua.",
    mechanisms: [
      "Mitigación de fuerzas de impacto vertical y cizallamiento articular en rodillas.",
      "Estímulo glucolítico anaeróbico mediante contracciones rápidas alternas.",
      "Activación del consumo de oxígeno post-ejercicio (Efecto EPOC) por déficit de deuda de O2."
    ]
  };

  const topExercises = [
    {
      name: "Sentadilla Dinámica con Elevación de Talones",
      target: "Cuádriceps, Glúteos y Gemelos",
      desc: "Excelente ejercicio de fuerza-resistencia donde realizas una sentadilla explosiva y subes a puntas de pie sin saltar.",
      tip: "Baja la cadera de forma estable y empuja el suelo con fuerza extendiendo el cuerpo en un solo movimiento fluido."
    },
    {
      name: "Mountain Climbers Controlados",
      target: "Core Anterior, Flexores de Cadera y Cardiovascular",
      desc: "Plancha estática dinámica donde llevas las rodillas alternativamente al pecho a alta velocidad pero sin saltar.",
      tip: "Mantén tus manos exactamente debajo de tus hombros. La cadera debe estar en línea con la columna, sin levantarse."
    },
    {
      name: "Zancadas de Patinador (Skater Lunges)",
      target: "Glúteo Medio, Cuádriceps y Estabilizadores laterales",
      desc: "Desplazamientos laterales cruzados que estimulan el plano frontal y elevan las pulsaciones cardiorrespiratorias.",
      tip: "Cruza la pierna trasera por detrás sin apoyar el pie en el suelo si quieres añadir un reto adicional de estabilidad."
    }
  ];

  const faqs = [
    {
      question: "¿Cómo puedo aumentar la intensidad del HIIT si no puedo dar saltos?",
      answer: "Para elevar las pulsaciones metabólicas sin impacto, debes jugar con tres variables biomecánicas y de programación:\n1. Acelerar el Tempo: Realiza las repeticiones a la máxima velocidad posible manteniendo un control técnico impecable.\n2. Mayor Rango de Movimiento (ROM): Realiza movimientos más profundos (por ejemplo, sentadillas completas en lugar de medias sentadillas) para reclutar más fibras musculares.\n3. Acortar Descansos: Reduce los intervalos de descanso (por ejemplo, 20 segundos de trabajo por solo 10 de descanso al estilo Tabata)."
    },
    {
      question: "¿Qué es el Efecto EPOC y por qué es tan relevante en el HIIT?",
      answer: "El efecto EPOC (Exceso de Consumo de Oxígeno Post-ejercicio) es la deuda de oxígeno acumulada por tu cuerpo debido a la alta intensidad del esfuerzo. Para restablecer sus niveles hormonales, depósitos de glucógeno y temperatura corporal, tu metabolismo sigue consumiendo calorías a un ritmo elevado durante varias horas (incluso hasta 24-48 horas) después de haber terminado de entrenar."
    },
    {
      question: "¿Es el HIIT sin impacto apto para personas con sobrepeso o lesiones?",
      answer: "Sí, es la opción ideal. Al no existir caídas ni saltos, las articulaciones de rodilla y tobillo no sufren bajo el exceso de peso corporal. Permite a personas en procesos de readaptación articular o con sobrepeso entrenar a altas pulsaciones cardiovasculares y acelerar la quema calórica con un riesgo de lesión prácticamente nulo."
    }
  ];

  return (
    <ExerciseDetailLayout 
      slug="hiit-casa"
      title="Cardio HIIT (Sin Impacto)"
      subtitle="Acondicionamiento metabólico silencioso para quemar grasa protegiendo tus articulaciones."
      image="/images/ejercicios/hiit_casa.png"
      category="Cardio"
      muscles={{
        primary: "Sistema cardiovascular y resistencia muscular.",
        secondary: "Cuádriceps, glúteos y transverso abdominal."
      }}
      material={[
        "Esterilla de fitness",
        "Cronómetro o App de intervalos (Tabata)"
      ]}
      keyExercise={{
        name: "Mountain Climbers (Sin salto)",
        steps: [
          "Posición de plancha alta con manos bajo los hombros.",
          "Lleva la rodilla derecha hacia el pecho manteniendo cadera estable.",
          "Vuelve a la posición inicial y cambia de pierna rápidamente.",
          "Mantén siempre un pie en contacto firme con el suelo.",
          "Aumenta el ritmo sin llegar a dar saltitos."
        ]
      }}
      benefits={[
        "Efecto EPOC: Quema calorías horas después de entrenar.",
        "Ahorro de tiempo: Sesiones efectivas en 15-20 minutos.",
        "Silencioso: Ideal para no molestar a los vecinos."
      ]}
      commonErrors={[
        "No alcanzar la intensidad suficiente (debe ser agotador).",
        "Perder la alineación de la espalda al fatigarse.",
        "Confundir 'sin impacto' con 'baja intensidad'."
      ]}
      biomechanics={biomechanics}
      topExercises={topExercises}
      faqs={faqs}
    />
  );
}
