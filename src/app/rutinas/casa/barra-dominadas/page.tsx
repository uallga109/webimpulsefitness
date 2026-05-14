import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Barra de Dominadas en Casa: Espalda en V | Impulse Fitness",
  description: "Construye una espalda ancha y fuerte desde casa. Guía de dominadas estrictas, técnica y beneficios para la salud espinal.",
};

export default function BarraDominadasPage() {
  return (
    <ExerciseDetailLayout 
      title="Barra de Dominadas"
      subtitle="Tracción vertical y fuerza pura para construir una espalda en forma de V y bíceps fuertes."
      category="Con Accesorios"
      muscles={{
        primary: "Dorsal ancho y bíceps braquial.",
        secondary: "Trapecio, romboides y antebrazos (agarre)."
      }}
      material={[
        "Barra de dominadas (puerta o pared)",
        "Bandas de resistencia (opcional para asistencia)"
      ]}
      keyExercise={{
        name: "Dominada Estricta",
        steps: [
          "Cuélgate con manos ligeramente más anchas que los hombros.",
          "Palmas mirando hacia adelante (pronación).",
          "Activa el core y retrae las escápulas hacia abajo y atrás.",
          "Tira de tu cuerpo llevando los codos hacia tus costillas.",
          "Sube hasta que la barbilla pase la barra y baja controlado."
        ]
      }}
      benefits={[
        "Indicador de salud: Métrica clave de fuerza relativa.",
        "Descompresión espinal: Colgarse ayuda a aliviar tensiones.",
        "Desarrollo estético: La mejor forma de ensanchar la espalda."
      ]}
      commonErrors={[
        "Utilizar impulso con las piernas (kipping).",
        "No realizar el rango de movimiento completo.",
        "Encoger los hombros hacia las orejas al subir."
      ]}
    />
  );
}
