import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Entrenamiento Isométrico: Fuerza Científica sin Impacto | Impulse Fitness",
  description: "Descubre el entrenamiento isométrico en casa. Maximiza el reclutamiento de unidades motoras y la salud de tus tendones con tensión estática profunda.",
};

export default function IsometricoPage() {
  const biomechanics = {
    explanation: "El entrenamiento isométrico se caracteriza por la producción de fuerza muscular sin cambios visibles en la longitud del sarcómero ni en el ángulo de la articulación asociada. Biomecánicamente, genera una elevada tensión intramuscular que supera la presión arterial sistólica, provocando una oclusión vascular temporal y un ambiente de hipoxia local severa. Esto promueve un estrés metabólico extraordinario y un reclutamiento preferencial de las unidades motoras de alto umbral (fibras tipo IIb) debido a la fatiga rápida de las fibras tipo I. Además, estimula la síntesis de colágeno en los tendones, mejorando su rigidez elástica y aliviando dolores crónicos (efecto analgésico isométrico).",
    mechanisms: [
      "Oclusión vascular intramuscular que optimiza la acumulación de metabolitos inductores de hipertrofia.",
      "Reclutamiento temporal masivo de unidades motoras rápidas de alto umbral excitatorio.",
      "Alineación y fortalecimiento de fibras de colágeno del tendón mediante carga estática sostenida."
    ]
  };

  const topExercises = [
    {
      name: "Sentadilla contra la Pared (Wall Sit)",
      target: "Cuádriceps (Recto Femoral, Vastos Medial y Lateral) y Glúteo Mayor",
      desc: "Excelente ejercicio estático que ejerce un torque constante sobre los flexores de rodilla sin fricción patelofemoral nociva.",
      tip: "Presiona los talones fuertemente contra el suelo e intenta empujar la pared con tu espalda para forzar una co-contracción del core profundo."
    },
    {
      name: "Plancha Abdominal Activa (RKC Plank)",
      target: "Abdomen Transverso, Recto Abdominal, Glúteos y Cinturón Escapular",
      desc: "Una variación avanzada de la plancha tradicional diseñada para maximizar la tensión neuromuscular total mediante co-contracción voluntaria.",
      tip: "Tira activamente de tus codos hacia tus pies y aprieta tus glúteos al máximo. Esto forzará una contracción isométrica del core infinitamente superior."
    },
    {
      name: "Puente de Glúteos Isométrico con Retención",
      target: "Glúteo Mayor, Isquiotibiales y Erectores Espinales",
      desc: "Retención en el punto máximo de extensión de cadera que optimiza el reclutamiento del glúteo reduciendo la fatiga de la rodilla.",
      tip: "Asegúrate de realizar una retroversión pélvica activa en la cima para anular la intervención compensatoria de la zona lumbar baja."
    }
  ];

  const faqs = [
    {
      question: "¿Los ejercicios isométricos sirven para ganar masa muscular (hipertrofia)?",
      answer: "Sí, aunque tradicionalmente se creía lo contrario. Estudios modernos demuestran que las contracciones isométricas a longitudes musculares largas (por ejemplo, realizar el Wall Sit en un ángulo profundo de rodilla) inducen hipertrofia comparable a las contracciones dinámicas. Esto ocurre gracias al elevado tiempo bajo tensión mecánica (TUT) y al brutal estrés metabólico generado por la oclusión y la hipoxia intramuscular."
    },
    {
      question: "¿Por qué el entrenamiento isométrico es tan recomendado para tratar tendinitis?",
      answer: "La carga isométrica sostenida y pesada (del 60-70% de la fuerza máxima voluntaria) tiene un potente efecto analgésico inmediato en el tendón (inhibición cortical). Reduce la actividad nociceptiva y estimula a los tenocitos a producir colágeno tipo I para reparar la estructura interna desorganizada del tendón lesionado, superando en fase aguda al entrenamiento excéntrico tradicional por no presentar dolor durante su ejecución."
    },
    {
      question: "¿Es peligroso el entrenamiento isométrico para personas con hipertensión?",
      answer: "Sí, requiere precaución extrema. Debido a la oclusión vascular masiva, el corazón debe bombear contra una gran resistencia, lo que eleva temporalmente la presión arterial sistólica y diastólica. Para mitigar esto, es de vital importancia evitar la maniobra de Valsalva (aguantar la respiración acumulando presión interna). Respira de forma continua, controlada y fluida durante toda la contracción."
    }
  ];

  return (
    <ExerciseDetailLayout 
      slug="entrenamiento-isometrico"
      title="Entrenamiento Isométrico"
      subtitle="Fuerza máxima sostenida con cero impacto articular y alta demanda neuronal."
      image="/images/ejercicios/isometrico.png"
      category="Sin Material"
      muscles={{
        primary: "Cuádriceps, recto abdominal, transverso del abdomen y glúteo mayor.",
        secondary: "Erectores de la columna, deltoides anterior y tendón rotuliano y de Aquiles."
      }}
      material={[
        "Pared lisa y despejada para apoyos estables.",
        "Esterilla o superficie antideslizante para evitar que los pies resbalen."
      ]}
      keyExercise={{
        name: "Sentadilla contra la Pared (Wall Sit)",
        steps: [
          "Apoya completamente la espalda plana contra una pared sólida y firme.",
          "Desliza el cuerpo hacia abajo mientras adelantas los pies hasta que las rodillas y caderas formen un ángulo exacto de 90 grados.",
          "Mantén los tobillos situados directamente bajo la vertical de las rodillas.",
          "Cruza los brazos sobre el pecho o colócalos a los lados del cuerpo (nunca apoyados sobre tus muslos).",
          "Mantén la posición respirando de manera fluida y rítmica, empujando activamente el suelo con los talones."
        ]
      }}
      benefits={[
        "Rehabilitación articular óptima: Permite fortalecer los tejidos alrededor de una articulación lesionada sin generar desgaste por fricción.",
        "Superación de puntos muertos: Aumenta la fuerza en rangos de movimiento específicos donde mecánicamente fallamos en levantamientos con pesas.",
        "Estímulo neuromuscular profundo: Despierta y recluta unidades motoras dormidas gracias a la fatiga progresiva de fibras lentas."
      ]}
      commonErrors={[
        "Bloquear la respiración acumulando presión torácica peligrosa (maniobra de Valsalva inapropiada).",
        "Colocar los pies demasiado cerca de la pared, forzando un ángulo agudo de rodilla que sobrecarga la rótula.",
        "Descansar las manos en los muslos, lo que deriva gran parte de la carga de trabajo fuera de los cuádriceps."
      ]}
      biomechanics={biomechanics}
      topExercises={topExercises}
      faqs={faqs}
    />
  );
}
