import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Discos Deslizadores (Sliders): Core de Acero | Impulse Fitness",
  description: "Maximiza la tensión en abdominales e isquios con sliders. Guía de ejercicios deslizantes para un core ultra fuerte.",
};

export default function SlidersPage() {
  return (
    <ExerciseDetailLayout 
      title="Discos Deslizadores (Sliders)"
      subtitle="Fricción y tensión continua para un core de acero y piernas potentes."
      category="Con Accesorios"
      muscles={{
        primary: "Abdomen transverso, oblicuos e isquiotibiales.",
        secondary: "Glúteos y flexores de la cadera."
      }}
      material={[
        "Discos deslizadores (Sliders)",
        "Alternativa: Trapos de cocina o platos de cartón"
      ]}
      keyExercise={{
        name: "Curl Femoral Deslizante",
        steps: [
          "Túmbate boca arriba con rodillas flexionadas y talones en sliders.",
          "Eleva la cadera hacia el techo (puente de glúteo).",
          "Desliza los pies alejándolos hasta casi estirar piernas.",
          "Mantén la cadera en el aire durante todo el recorrido.",
          "Tira de los talones hacia los glúteos con fuerza."
        ]
      }}
      benefits={[
        "Tensión constante: Sin puntos de descanso durante el movimiento.",
        "Simulación de máquinas: Imita el curl femoral de gimnasio.",
        "Compacto: No ocupa espacio y se puede usar en cualquier suelo."
      ]}
      commonErrors={[
        "Arquear la zona lumbar excesivamente.",
        "Dejar que la cadera caiga al suelo al estirar las piernas.",
        "No controlar la velocidad del deslizamiento."
      ]}
    />
  );
}
