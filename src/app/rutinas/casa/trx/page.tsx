import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Entrenamiento en Suspensión (TRX): Guía en Casa | Impulse Fitness",
  description: "Aprende a dominar el TRX en casa. Tensión estabilizadora, remo invertido y cómo ajustar la intensidad con tu peso corporal.",
};

export default function TRXPage() {
  return (
    <ExerciseDetailLayout 
      title="Entrenamiento en Suspensión (TRX)"
      subtitle="Tensión estabilizadora para un cuerpo funcional usando la gravedad y tu propio peso."
      image="/images/ejercicios/trx.png"
      category="Con Accesorios"
      muscles={{
        primary: "Core (Estabilización completa)",
        secondary: "Dorsales, pectorales, bíceps, tríceps y cuádriceps."
      }}
      material={[
        "Cintas de suspensión (tipo TRX)",
        "Anclaje para puerta o soporte de techo"
      ]}
      keyExercise={{
        name: "Remo Invertido",
        steps: [
          "Fija el TRX a la puerta y agarra las asas.",
          "Camina hacia adelante hasta que tu cuerpo quede inclinado hacia atrás.",
          "Mantén el cuerpo en línea recta como una tabla.",
          "Tira de tu cuerpo hacia las asas juntando las escápulas.",
          "Baja de forma controlada hasta estirar los brazos."
        ]
      }}
      benefits={[
        "Cero impacto articular: Ideal para recuperación de lesiones.",
        "Progresión infinita: Un paso atrás o adelante cambia la carga.",
        "Portabilidad: Entrena en cualquier lugar con una puerta."
      ]}
      commonErrors={[
        "Dejar caer la cadera rompiendo la línea recta del cuerpo.",
        "Desactivar el core durante el movimiento.",
        "Sobrecargar la zona lumbar por mala postura."
      ]}
    />
  );
}
