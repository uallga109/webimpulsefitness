import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Entrenamiento con Fitball: Inestabilidad Controlada | Impulse Fitness",
  description: "Despierta tus músculos estabilizadores con la pelota suiza. Guía de ejercicios para core, suelo pélvico y postura ergonómica.",
};

export default function FitballPage() {
  return (
    <ExerciseDetailLayout 
      title="Fitball (Pelota Suiza)"
      subtitle="Inestabilidad controlada y propiocepción pélvica para un cuerpo equilibrado."
      category="Con Accesorios"
      muscles={{
        primary: "Core completo, erectores espinales, lumbares y glúteos.",
        secondary: "Sistema propioceptivo (equilibrio global)."
      }}
      material={[
        "Fitball (Talla correcta: 55cm, 65cm o 75cm)",
        "Bomba de aire"
      ]}
      keyExercise={{
        name: "Plancha sobre Fitball (Stir the Pot)",
        steps: [
          "Apoya los antebrazos sobre la parte superior del Fitball.",
          "Estira las piernas hasta posición de plancha perfecta.",
          "Sin mover cadera, haz pequeños círculos con los brazos.",
          "Imita el movimiento de remover una olla enorme.",
          "Cambia de sentido después de 30 segundos."
        ]
      }}
      benefits={[
        "Suelo pélvico: Ideal para salud pélvica y post-parto.",
        "Sustituto ergonómico: Mejora la postura si se usa como silla.",
        "Reclutamiento de fibras dormidas por la inestabilidad."
      ]}
      commonErrors={[
        "Usar una pelota desinflada (anula la inestabilidad).",
        "Perder la alineación lumbar (arquear la espalda).",
        "Intentar usar pesos pesados sin dominar el equilibrio."
      ]}
    />
  );
}
