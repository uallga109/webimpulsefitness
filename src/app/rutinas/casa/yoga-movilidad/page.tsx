import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Yoga y Movilidad: Longevidad Articular | Impulse Fitness",
  description: "Recupera tu rango de movimiento y elimina dolores de espalda. Rutinas de yoga y movilidad para atletas y teletrabajadores.",
};

export default function YogaMovilidadPage() {
  return (
    <ExerciseDetailLayout 
      title="Yoga y Movilidad"
      subtitle="Flexibilidad, rango y longevidad articular para revertir los efectos del sedentarismo."
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
    />
  );
}
