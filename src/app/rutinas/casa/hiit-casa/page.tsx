import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Cardio HIIT Sin Impacto: Quema Grasa en Casa | Impulse Fitness",
  description: "Entrenamiento metabólico silencioso. Quema calorías sin saltos ni ruidos. Ideal para entrenar en pisos y proteger articulaciones.",
};

export default function HIITCasaPage() {
  return (
    <ExerciseDetailLayout 
      title="Cardio HIIT (Sin Impacto)"
      subtitle="Acondicionamiento metabólico silencioso para quemar grasa protegiendo tus articulaciones."
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
    />
  );
}
