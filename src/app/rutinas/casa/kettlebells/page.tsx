import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Entrenamiento con Pesas Rusas (Kettlebells) | Impulse Fitness",
  description: "Potencia funcional y cardio extremo con Kettlebells. Domina el swing y construye una cadena posterior irrompible.",
};

export default function KettlebellsPage() {
  return (
    <ExerciseDetailLayout 
      title="Pesas Rusas (Kettlebells)"
      subtitle="Potencia funcional y acondicionamiento extremo combinando fuerza balística y cardio."
      image="/images/ejercicios/kettlebells.png"
      category="Cardio / Fuerza"
      muscles={{
        primary: "Cadena posterior (Glúteos, Isquios, Erectores)",
        secondary: "Hombros, antebrazos y core oblicuo."
      }}
      material={[
        "1 o 2 pesas rusas (Kettlebells)",
        "8-12kg (mujeres) / 16-20kg (hombres) recomendado"
      ]}
      keyExercise={{
        name: "Kettlebell Swing",
        steps: [
          "Pies a la anchura de hombros, pesa en el suelo delante de ti.",
          "Flexiona rodillas ligeramente, cadera atrás y agarra el asa.",
          "Tira de la pesa hacia atrás entre tus piernas de forma explosiva.",
          "Empuja la cadera hacia adelante con potencia contrayendo glúteos.",
          "La pesa debe subir por inercia hasta la altura del pecho."
        ]
      }}
      benefits={[
        "Quema calórica brutal: Gasto disparado por movimientos explosivos.",
        "Desarrollo de potencia: Mejora el salto y la fuerza de cadera.",
        "Fuerza de agarre: Mejora la resistencia de antebrazos."
      ]}
      commonErrors={[
        "Hacer una sentadilla en lugar de una bisagra de cadera.",
        "Elevar la pesa con los hombros en lugar del impulso del glúteo.",
        "Arquear la espalda en la parte baja del movimiento."
      ]}
    />
  );
}
