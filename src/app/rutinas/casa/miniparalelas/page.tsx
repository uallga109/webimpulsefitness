import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Miniparalelas (Parallettes): Calistenia de Alto Nivel | Impulse Fitness",
  description: "Eleva tu entrenamiento de empuje con miniparalelas. Domina la L-sit y protege tus muñecas mientras ganas fuerza masiva.",
};

export default function MiniparalelasPage() {
  return (
    <ExerciseDetailLayout 
      title="Miniparalelas (Parallettes)"
      subtitle="Empuje avanzado y calistenia de alto nivel para un dominio total del peso corporal."
      category="Con Accesorios"
      muscles={{
        primary: "Pectoral mayor, deltoides anterior, tríceps braquial.",
        secondary: "Core completo (especialmente en isométricos)."
      }}
      material={[
        "Miniparalelas (madera, PVC o acero)",
        "Superficie estable"
      ]}
      keyExercise={{
        name: "L-Sit (Escuadra isométrica)",
        steps: [
          "Siéntate entre las miniparalelas colocando las manos en los agarres.",
          "Empuja fuertemente hacia abajo, bloqueando codos.",
          "Deprime los hombros (aléjalos de las orejas).",
          "Eleva la cadera y levanta las piernas estiradas a 90 grados.",
          "Mantén la posición apretando abdomen y cuádriceps."
        ]
      }}
      benefits={[
        "Salud articular: Mantienen las muñecas en posición neutra.",
        "Fuerza de hombro masiva: Base para progresiones hacia el pino.",
        "Aumento del rango: Permite fondos más profundos que el suelo."
      ]}
      commonErrors={[
        "Encoger los hombros hacia las orejas.",
        "No bloquear los codos por completo.",
        "Doblar las rodillas en la posición de L-Sit por falta de flexibilidad."
      ]}
    />
  );
}
