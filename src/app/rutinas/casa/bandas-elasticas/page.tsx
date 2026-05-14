import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Entrenamiento con Bandas Elásticas: Tu Gimnasio Portátil | Impulse Fitness",
  description: "Simula poleas y mantén tensión continua con bandas de resistencia. Todo sobre remo sentado, tipos de bandas y beneficios articulares.",
};

export default function BandasElasticasPage() {
  return (
    <ExerciseDetailLayout 
      title="Bandas Elásticas"
      subtitle="Simulación de poleas y estímulo continuo con resistencia variable en cualquier plano."
      category="Con Accesorios"
      muscles={{
        primary: "Glúteo medio, Deltoides lateral, Dorsales y Bíceps.",
        secondary: "Musculatura del manguito rotador y estabilidad articular."
      }}
      material={[
        "Set de bandas tubulares (con asas) o cerradas (loops)",
        "Anclaje de puerta"
      ]}
      keyExercise={{
        name: "Remo Sentado con Banda",
        steps: [
          "Siéntate en el suelo con piernas estiradas.",
          "Pasa la banda por detrás de la planta de tus pies.",
          "Mantén espalda recta y pecho alto.",
          "Tira de la banda hacia tu abdomen juntando escápulas.",
          "Controla el retorno lentamente resistiendo la banda."
        ]
      }}
      benefits={[
        "Resistencia ascendente: Tensión máxima donde eres más fuerte.",
        "Amigables con articulaciones: Ideales para calentar o rehabilitar.",
        "Versatilidad de planos: Resistencia vertical, horizontal o diagonal."
      ]}
      commonErrors={[
        "Dejar que la banda 'gane' en la vuelta (perder tensión).",
        "No mantener la espalda erguida durante el tirón.",
        "Usar una banda con demasiada tensión perdiendo técnica."
      ]}
    />
  );
}
