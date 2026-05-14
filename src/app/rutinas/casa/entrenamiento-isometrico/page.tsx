import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Entrenamiento Isométrico: Fuerza sin Impacto | Impulse Fitness",
  description: "Construye tendones de acero y fuerza máxima sostenida con isometría. Guía de wall sits, planchas y beneficios para la rehabilitación.",
};

export default function IsometricoPage() {
  return (
    <ExerciseDetailLayout 
      title="Entrenamiento Isométrico"
      subtitle="Fuerza máxima sostenida con cero impacto articular y alta demanda neuronal."
      category="Sin Material / Fuerza"
      muscles={{
        primary: "Cuádriceps, Core y Hombros (según ejercicio).",
        secondary: "Sistema nervioso central y tendones."
      }}
      material={[
        "Pared firme para apoyos",
        "Suelo estable"
      ]}
      keyExercise={{
        name: "Sentadilla contra la pared (Wall Sit)",
        steps: [
          "Apoya la espalda plana contra una pared sólida.",
          "Deslízate hasta que rodillas y caderas formen 90 grados.",
          "Rodillas alineadas sobre los tobillos.",
          "Aprieta el core y presiona talones contra el suelo.",
          "Aguanta la posición respirando profundamente."
        ]
      }}
      benefits={[
        "Rehabilitación ideal: Fortalece sin estrés mecánico por movimiento.",
        "TUT elevado: Maximiza el tiempo bajo tensión para hipertrofia.",
        "Superación de puntos muertos en levantamientos pesados."
      ]}
      commonErrors={[
        "Aguantar la respiración (Maniobra de Valsalva).",
        "Apoyar las manos en los muslos para ayudarse.",
        "No mantener los 90 grados de ángulo en las piernas."
      ]}
    />
  );
}
