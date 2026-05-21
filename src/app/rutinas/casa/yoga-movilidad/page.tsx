import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Yoga y Movilidad: Longevidad Articular | Impulse Fitness",
  description: "Recupera tu rango de movimiento y elimina dolores de espalda. Rutinas de yoga y movilidad para atletas y teletrabajadores.",
  keywords: [
    "yoga y movilidad articular casa",
    "ejercicios flexibilidad teletrabajo dolor",
    "rango de movimiento articular rom",
    "estiramientos para descompresion lumbar",
    "posturas de yoga para principiantes",
    "salud espinal y movilidad de cadera",
    "relajacion sistema nervioso yoga",
  ],
};

export default function YogaMovilidadPage() {
  const biomechanics = {
    explanation: "La flexibilidad y la movilidad articular (ROM) son componentes críticos del rendimiento físico y la longevidad musculoesquelética. Los estiramientos de yoga combinan contracciones isométricas en rangos máximos de estiramiento (estiramiento activo) con el reflejo de inhibición recíproca (donde activar un músculo antagonista relaja el músculo diana). Esto ayuda a descontracturar los tejidos blandos, re-alinear las fibras de colágeno y relajar el huso neuromuscular, estimulando al sistema nervioso parasimpático para reducir el tono muscular patológico provocado por el sedentarismo.",
    mechanisms: [
      "Activación del reflejo miotático inverso a través de los órganos tendinosos de Golgi.",
      "Estimulación de la inhibición recíproca muscular en estiramientos de rango activo.",
      "Mejora de la hidratación de la fascia y la elasticidad de los tejidos conectivos colágenos."
    ]
  };

  const topExercises = [
    {
      name: "Perro Boca Abajo (Adho Mukha Svanasana)",
      target: "Cadena Posterior Completa (Isquiotibiales, Gemelos y Dorsal)",
      desc: "Postura de inversión en forma de 'V' invertida que estira profundamente la espalda y las piernas a la vez que descomprime la columna.",
      tip: "Prioriza mantener tu columna totalmente neutra y recta. Si sientes tensión en las lumbares, flexiona las rodillas y levanta los talones."
    },
    {
      name: "Apertura Torácica en Enhebrar la Aguja",
      target: "Columna Torácica y Estabilizadores Escapulares",
      desc: "Excelente torsión de columna torácica que alivia la rigidez en la parte alta de la espalda causada por la postura del ordenador.",
      tip: "Pasa un brazo por debajo del cuerpo apoyando el hombro en la esterilla y exhala rotando la mirada hacia el techo."
    },
    {
      name: "Movilidad de Cadera 90/90",
      target: "Rotadores Internos y Externos de Cadera",
      desc: "Ejercicio de movilidad dinámica sentado con piernas flexionadas a 90 grados para desbloquear la articulación coxofemoral.",
      tip: "Mantén el torso erguido sin arquear la espalda y rota la pelvis de un lado al otro buscando apoyar ambas rodillas en el suelo."
    }
  ];

  const faqs = [
    {
      question: "¿Cuál es la diferencia entre flexibilidad y movilidad?",
      answer: "La flexibilidad es una cualidad pasiva: la capacidad de un músculo de estirarse ante una fuerza externa (por ejemplo, tocar tus pies en el suelo relajadamente). La movilidad, en cambio, es una cualidad activa: tu capacidad biomecánica para controlar conscientemente un rango de movimiento utilizando la fuerza de tus propios músculos."
    },
    {
      question: "¿Cuánto tiempo debo sostener cada estiramiento de movilidad?",
      answer: "Para adaptaciones de relajación neuromuscular en casa:\n- Movilidad dinámica: Realiza 10-12 repeticiones fluidas controlando la respiración.\n- Estiramientos estáticos pasivos: Sostén la pose entre 30 y 60 segundos por lado. Esto permite que el sistema nervioso se relaje y los órganos tendinosos de Golgi inhiban la contracción refleja protectora."
    },
    {
      question: "¿El yoga y la movilidad pueden ayudarme a levantar más peso en el gimnasio?",
      answer: "Totalmente. Al expandir tus rangos articulares activos (ROM), mejoras tu patrón motor. Por ejemplo, una mejor movilidad de tobillos y caderas te permitirá descender con la columna más erguida en una sentadilla profunda, y una mayor movilidad torácica facilitará una trayectoria óptima en el press de hombros."
    }
  ];

  return (
    <ExerciseDetailLayout 
      slug="yoga-movilidad"
      title="Yoga y Movilidad"
      subtitle="Flexibilidad, rango y longevidad articular para revertir los efectos del sedentarismo."
      image="/images/ejercicios/yoga_movilidad.png"
      category="Movilidad"
      muscles={{
        primary: "Cadera, isquios, columna torácica y lumbares.",
        secondary: "Hombros, cuello y sistema nervioso."
      }}
      material={[
        "Esterilla antideslizante",
        "Bloques o cinturón (opcional)"
      ]}
      keyExercise={{
        name: "Perro Boca Abajo",
        steps: [
          "Comienza en posición de cuadrupedia (manos y rodillas).",
          "Empuja el suelo y eleva la cadera hacia el techo.",
          "Forma una 'V' invertida con tu cuerpo.",
          "Mantén la espalda recta (dobla rodillas si es necesario).",
          "Intenta acercar los talones al suelo con cada exhalación."
        ]
      }}
      benefits={[
        "Mejora postural: Revierte la posición de chepa del ordenador.",
        "Reducción de cortisol: Conexión mente-cuerpo y relajación.",
        "Prevención de lesiones: Articulaciones más resilientes."
      ]}
      commonErrors={[
        "Forzar el estiramiento hasta sentir dolor agudo.",
        "Bloquear los codos o curvar la espalda excesivamente.",
        "No sincronizar el movimiento con la respiración."
      ]}
      biomechanics={biomechanics}
      topExercises={topExercises}
      faqs={faqs}
    />
  );
}
