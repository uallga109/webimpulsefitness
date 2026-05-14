import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Mancuernas Ajustables: Hipertrofia Real en Casa | Impulse Fitness",
  description: "El estándar de oro para ganar músculo en casa. Aprende el floor press, sobrecarga progresiva y cómo ahorrar espacio con pesas ajustables.",
};

export default function MancuernasAjustablesPage() {
  return (
    <ExerciseDetailLayout 
      title="Mancuernas Ajustables"
      subtitle="El estándar de oro para la hipertrofia en casa mediante sobrecarga progresiva."
      category="Con Accesorios"
      muscles={{
        primary: "Todo el cuerpo (Pectoral, Dorsal, Hombros, Piernas).",
        secondary: "Antebrazos (agarre) y core estabilizador."
      }}
      material={[
        "Par de mancuernas ajustables",
        "Opcional: Banco reclinable"
      ]}
      keyExercise={{
        name: "Press de Pecho en Suelo (Floor Press)",
        steps: [
          "Túmbate boca arriba con rodillas flexionadas.",
          "Codos apoyados en suelo a 45 grados del torso.",
          "Empuja mancuernas hacia el techo contrayendo pecho.",
          "Baja de forma controlada hasta tocar suelo suavemente.",
          "Pausa un segundo abajo y repite."
        ]
      }}
      benefits={[
        "Máximo estímulo de hipertrofia: Sobrecarga real y medible.",
        "Ahorro de espacio: Sustituye a 15 pares de pesas fijas.",
        "Versatilidad total: Permite trabajar todos los grupos musculares."
      ]}
      commonErrors={[
        "Ego lifting: Levantar más peso del controlable técnicamente.",
        "Utilizar inercia (balanceo) en lugar de fuerza controlada.",
        "No realizar el rango de movimiento completo."
      ]}
    />
  );
}
