import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Entrenamiento con Peso Corporal (Calistenia): La Base | Impulse Fitness",
  description: "Domina tu cuerpo en el espacio. De básico a experto, aprende las mejores progresiones de calistenia para entrenar en casa sin equipo.",
};

export default function PesoCorporalPage() {
  return (
    <ExerciseDetailLayout 
      title="Peso Corporal (Calistenia Básica)"
      subtitle="Dominio absoluto de tu cuerpo de nivel básico a experto sin necesidad de material externo."
      category="Sin Material"
      muscles={{
        primary: "Pectorales, Tríceps, Cuádriceps y Glúteos.",
        secondary: "Core completo como estabilizador primario."
      }}
      material={[
        "Tu propio cuerpo",
        "Opcional: Silla o sofá para apoyos"
      ]}
      keyExercise={{
        name: "Sentadilla Búlgara",
        steps: [
          "Eleva una pierna hacia atrás y apoya el empeine en una silla.",
          "Mantén el torso ligeramente inclinado hacia adelante.",
          "Flexiona la rodilla delantera hasta que el muslo esté paralelo.",
          "Empuja con el talón delantero para volver arriba.",
          "Evita que la rodilla colapse hacia adentro."
        ]
      }}
      benefits={[
        "Accesibilidad universal: Cero coste y entrena en cualquier sitio.",
        "Corrección de asimetrías: Trabajo unilateral muy efectivo.",
        "Funcionalidad real: Mejora el control del cuerpo en el espacio."
      ]}
      commonErrors={[
        "Hacer series infinitas de baja calidad en lugar de progresar.",
        "Mala alineación de las articulaciones en ejercicios unilaterales.",
        "No realizar el rango de movimiento completo."
      ]}
    />
  );
}
