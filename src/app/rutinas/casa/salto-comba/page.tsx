import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Salto a la Comba: Cardio y Coordinación | Impulse Fitness",
  description: "El acondicionamiento de los boxeadores en tu casa. Aprende a saltar a la comba de forma eficiente para quemar calorías.",
};

export default function SaltoCombaPage() {
  return (
    <ExerciseDetailLayout 
      title="Salto a la Comba"
      subtitle="Resistencia cardiovascular y coordinación neurológica en sesiones cortas e intensas."
      category="Cardio"
      muscles={{
        primary: "Gemelos, sóleos y sistema cardiovascular.",
        secondary: "Antebrazos, hombros y core."
      }}
      material={[
        "Comba (velocidad, PVC o lastrada)",
        "Zapatillas con buena amortiguación"
      ]}
      keyExercise={{
        name: "Salto Básico (Basic Bounce)",
        steps: [
          "Codos pegados a las costillas, manos delante de caderas.",
          "Gira la cuerda únicamente usando las muñecas.",
          "Salta sobre las puntas de los pies (solo 1-2 cm del suelo).",
          "Aterriza suavemente sobre el metatarso.",
          "Absorbe el impacto con una ligera flexión de rodillas."
        ]
      }}
      benefits={[
        "Densidad ósea: Los impactos fortalecen las extremidades inferiores.",
        "Eficiencia calórica: 10 min equivalen a 30 min de trote.",
        "Agilidad: Mejora la coordinación ojo-mano-pie drásticamente."
      ]}
      commonErrors={[
        "Saltar demasiado alto (gasto de energía innecesario).",
        "Aterrizar con los talones (alto impacto articular).",
        "Girar la cuerda desde los hombros en lugar de las muñecas."
      ]}
    />
  );
}
