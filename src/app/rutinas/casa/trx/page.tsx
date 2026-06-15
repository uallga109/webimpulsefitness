import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Entrenamiento en Suspensión (TRX): Guía en Casa | Impulse Fitness",
  description: "Aprende a dominar el TRX en casa. Tensión estabilizadora, remo invertido y cómo ajustar la intensidad con tu peso corporal.",
};

export default function TRXPage() {
  const biomechanics = {
    explanation: "El entrenamiento en suspensión modifica el vector de fuerza de gravedad a través de un único punto de anclaje flotante, forzando una inestabilidad multidireccional constante. Al no contar con una base de sustentación rígida, el core (especialmente el transverso del abdomen y los oblicuos) debe actuar de forma isométrica para mantener la neutralidad de la pelvis y prevenir las fuerzas de cizallamiento en la columna lumbar. Además, la carga de trabajo se autorregula instantáneamente modificando el ángulo de inclinación corporal con respecto al suelo.",
    mechanisms: [
      "Alteración del vector de gravedad para generar resistencia en planos diagonales de movimiento.",
      "Reclutamiento sinérgico de estabilizadores del manguito rotador y cinturón escapular.",
      "Regulación instantánea de la carga biomecánica variando la base de sustentación y el centro de masas."
    ]
  };

  const topExercises = [
    {
      name: "Remo Invertido en TRX",
      target: "Dorsal Ancho y Deltoides Posterior",
      desc: "Excelente movimiento de tracción horizontal que fortalece toda la cadena posterior escapular y la estabilidad del core.",
      tip: "Mantén el cuerpo rígido como un bloque y tira de las asas llevando los codos pegados a las costillas, no al cuello."
    },
    {
      name: "Flexiones de Pecho en TRX",
      target: "Pectoral Mayor y Tríceps Braquial",
      desc: "Variación de lagartijas que introduce una inestabilidad severa para los hombros, aumentando la demanda propioceptiva.",
      tip: "No dejes que los cables rocen contra tus brazos. Estabiliza el recorrido abriendo ligeramente la trayectoria de los codos."
    },
    {
      name: "Zancada Búlgara en Suspensión",
      target: "Cuádriceps y Glúteo Mayor",
      desc: "Un pie anclado en el estribo del TRX para un estímulo unilateral profundo que mejora el equilibrio y la fuerza de cadera.",
      tip: "Baja la cadera de forma vertical y asegúrate de que la rodilla delantera no colapse hacia adentro (valgo de rodilla)."
    }
  ];

  const faqs = [
    {
      question: "¿Cómo puedo regular la intensidad de los ejercicios en TRX?",
      answer: "La resistencia en TRX se regula de tres maneras biomecánicas:\n1. Ángulo Corporal: Cuanto más paralelo al suelo esté tu cuerpo, mayor porcentaje de tu peso corporal deberás levantar.\n2. Base de Apoyo: Reducir los apoyos (por ejemplo, realizar el ejercicio a una sola pierna o juntar los pies) incrementa drásticamente la demanda de equilibrio.\n3. Posición de los Pies: Colocar tus pies más cerca del punto de anclaje (dentro del péndulo) aumenta la resistencia concéntrica."
    },
    {
      question: "¿Es seguro el anclaje de puerta del TRX para entrenar pesado?",
      answer: "Sí, es completamente seguro siempre que sigas las normas físicas de anclaje. El tope acolchado del TRX debe colocarse en el lado de la puerta que se cierra hacia ti (de modo que tu peso tire de la puerta cerrándola contra el marco). Si entrenas en el lado contrario, asegúrate de echar la llave para evitar que la puerta se abra accidentalmente por la tracción."
    },
    {
      question: "¿Qué ventajas tiene el TRX frente a las mancuernas tradicionales?",
      answer: "El TRX destaca por desarrollar una gran fuerza funcional tridimensional y estabilidad articular. A diferencia de las mancuernas, que trabajan principalmente vectores verticales de gravedad, el TRX permite tracciones diagonales y horizontales constantes, activando de forma muy intensa los músculos profundos del core y los estabilizadores escapulares."
    }
  ];

  return (
    <ExerciseDetailLayout 
      slug="trx"
      title="Entrenamiento en Suspensión (TRX)"
      subtitle="Tensión estabilizadora para un cuerpo funcional usando la gravedad y tu propio peso."
      image="/images/ejercicios/trx.png"
      category="Con Accesorios"
      muscles={{
        primary: "Core (Estabilización completa)",
        secondary: "Dorsales, pectorales, bíceps, tríceps y cuádriceps."
      }}
      material={[
        "Cintas de suspensión (tipo TRX)",
        "Anclaje para puerta o soporte de techo"
      ]}
      keyExercise={{
        name: "Remo Invertido",
        steps: [
          "Fija el TRX a la puerta y agarra las asas.",
          "Camina hacia adelante hasta que tu cuerpo quede inclinado hacia atrás.",
          "Mantén el cuerpo en línea recta como una tabla.",
          "Tira de tu cuerpo hacia las asas juntando las escápulas.",
          "Baja de forma controlada hasta estirar los brazos."
        ]
      }}
      benefits={[
        "Cero impacto articular: Ideal para recuperación de lesiones.",
        "Progresión infinita: Un paso atrás o adelante cambia la carga.",
        "Portabilidad: Entrena en cualquier lugar con una puerta."
      ]}
      commonErrors={[
        "Dejar caer la cadera rompiendo la línea recta del cuerpo.",
        "Desactivar el core durante el movimiento.",
        "Sobrecargar la zona lumbar por mala postura."
      ]}
      biomechanics={biomechanics}
      topExercises={topExercises}
      faqs={faqs}
    />
  );
}
