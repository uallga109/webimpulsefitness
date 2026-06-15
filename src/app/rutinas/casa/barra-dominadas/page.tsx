import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Barra de Dominadas en Casa: Espalda en V | Impulse Fitness",
  description: "Construye una espalda ancha y fuerte desde casa. Guía de dominadas estrictas, técnica y beneficios para la salud espinal.",
};

export default function BarraDominadasPage() {
  const biomechanics = {
    explanation: "La dominada estricta (pull-up) es el patrón biomecánico por excelencia de tracción vertical de la cadena superior en bucle cerrado. Exige una aducción del hombro y una flexión del codo que retan principalmente a la porción media e inferior del dorsal ancho, el redondo mayor y el braquial anterior. La clave para maximizar la tensión en el dorsal y proteger la articulación glenohumeral es la retracción y depresión escapular inicial, la cual transfiere el esfuerzo de los brazos hacia la musculatura de la espalda alta.",
    mechanisms: [
      "Tracción vertical de cadena cinética cerrada que reta la relación peso-potencia.",
      "Aducción del húmero en el plano frontal estimulando la amplitud del dorsal ancho.",
      "Depresión y retracción escapular activa para prevenir el pinzamiento subacromial."
    ]
  };

  const topExercises = [
    {
      name: "Dominada Prona Estricta",
      target: "Dorsal Ancho, Redondo Mayor y Romboides",
      desc: "El ejercicio de tracción vertical definitivo con palmas hacia el frente, fundamental para conseguir una espalda en 'V'.",
      tip: "Piensa en empujar los codos hacia abajo y atrás para tocar tus costillas, en lugar de tirar de tu cuerpo con la fuerza de tus bíceps."
    },
    {
      name: "Dominada Supina (Chin-up)",
      target: "Bíceps Braquial y Dorsal Ancho Interior",
      desc: "Variación con palmas mirando hacia ti. Coloca el hombro en rotación externa, facilitando la flexión del codo y aumentando el reclutamiento del bíceps.",
      tip: "Mantén el pecho bien arqueado hacia arriba al subir y toca la barra con la parte superior de tu pecho."
    },
    {
      name: "Dominadas Asistidas con Banda",
      target: "Ajuste Técnico y Aprendizaje Motor",
      desc: "Excelente regresión para acumular volumen de series de calidad técnica o aprender el movimiento si aún no levantas tu peso corporal.",
      tip: "Pasa la banda elástica por debajo de una de tus rodillas o pies. Controla la fase excéntrica lenta (bajada) resistiendo el retroceso."
    }
  ];

  const faqs = [
    {
      question: "¿Cómo puedo conseguir hacer mi primera dominada estricta?",
      answer: "Para lograr tu primera dominada, debes enfocar tu entrenamiento en tres regresiones clave:\n1. Colgados activos: Cuélgate de la barra y practica únicamente la depresión y retracción escapular sin flexionar los codos.\n2. Dominadas excéntricas: Sube a la barra con ayuda de un salto o banco y desciende de forma extremadamente lenta (tardando 5-8 segundos en bajar).\n3. Dominadas asistidas: Utiliza bandas elásticas de resistencia para reducir la carga de forma progresiva."
    },
    {
      question: "¿Es seguro instalar una barra de dominadas en el marco de la puerta?",
      answer: "Sí, las barras de dominadas telescópicas o de palanca son seguras siempre que el marco sea de madera sólida o metal y esté bien anclado. Evita instalarlas en marcos de yeso, pladur o maderas finas y desgastadas. Revisa siempre la presión y firmeza de la barra antes de colgar tu peso completo."
    },
    {
      question: "¿Cuál es la diferencia entre el agarre prono y el agarre supino?",
      answer: "El agarre prono (palmas hacia adelante) es más ancho y aísla mejor el dorsal ancho y la espalda alta al forzar la aducción pura. El agarre supino (palmas hacia ti) es ligeramente más estrecho y coloca al bíceps braquial en una posición anatómica de máxima ventaja mecánica, lo que generalmente te permite levantar más peso o hacer más repeticiones."
    }
  ];

  return (
    <ExerciseDetailLayout 
      slug="barra-dominadas"
      title="Barra de Dominadas"
      subtitle="Tracción vertical y fuerza pura para construir una espalda en forma de V y bíceps fuertes."
      image="/images/ejercicios/barra_dominadas.png"
      category="Con Accesorios"
      muscles={{
        primary: "Dorsal ancho y bíceps braquial.",
        secondary: "Trapecio, romboides y antebrazos (agarre)."
      }}
      material={[
        "Barra de dominadas (puerta o pared)",
        "Bandas de resistencia (opcional para asistencia)"
      ]}
      keyExercise={{
        name: "Dominada Estricta",
        steps: [
          "Cuélgate con manos ligeramente más anchas que los hombros.",
          "Palmas mirando hacia adelante (pronación).",
          "Activa el core y retrae las escápulas hacia abajo y atrás.",
          "Tira de tu cuerpo llevando los codos hacia tus costillas.",
          "Sube hasta que la barbilla pase la barra y baja controlado."
        ]
      }}
      benefits={[
        "Indicador de salud: Métrica clave de fuerza relativa.",
        "Descompresión espinal: Colgarse ayuda a aliviar tensiones.",
        "Desarrollo estético: La mejor forma de ensanchar la espalda."
      ]}
      commonErrors={[
        "Utilizar impulso con las piernas (kipping).",
        "No realizar el rango de movimiento completo.",
        "Encoger los hombros hacia las orejas al subir."
      ]}
      biomechanics={biomechanics}
      topExercises={topExercises}
      faqs={faqs}
    />
  );
}
