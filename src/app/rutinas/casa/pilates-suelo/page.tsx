import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Pilates de Suelo (Mat Pilates): Fuerza Interna | Impulse Fitness",
  description: "Control postural, respiración y fuerza del core profundo. Descubre los beneficios del mat pilates para tu columna y salud pélvica.",
};

export default function PilatesSueloPage() {
  return (
    <ExerciseDetailLayout 
      title="Pilates de Suelo (Mat Pilates)"
      subtitle="Control postural, respiración y fuerza interna para un core irrompible."
      category="Movilidad / Fuerza"
      muscles={{
        primary: "Transverso del abdomen, suelo pélvico, multífidos.",
        secondary: "Glúteo medio, aductores y flexores del cuello."
      }}
      material={[
        "Esterilla gruesa (Mat de Pilates)",
        "Ropa cómoda que permita libertad de movimiento"
      ]}
      keyExercise={{
        name: "El Cien (The Hundred)",
        steps: [
          "Túmbate boca arriba y eleva las piernas a 45 grados.",
          "Levanta cabeza, cuello y hombros mirando hacia tu ombligo.",
          "Estira los brazos a los lados, a pocos cm del suelo.",
          "Bate los brazos rítmicamente mientras inhalas en 5 tiempos y exhalas en 5.",
          "Repite hasta completar 100 bombeos totales."
        ]
      }}
      benefits={[
        "Rehabilitación de core: Excelente para diástasis o dolores lumbares.",
        "Conexión mente-músculo: Exige concentración total en la precisión.",
        "Mejora de la postura: Realinea la columna y estabiliza la pelvis."
      ]}
      commonErrors={[
        "Hacer la fuerza con el cuello en lugar del abdomen.",
        "No acompañar el movimiento con el patrón respiratorio adecuado.",
        "Arquear la espalda lumbar perdiendo el contacto con el mat."
      ]}
    />
  );
}
