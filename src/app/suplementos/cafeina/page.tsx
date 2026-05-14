import React from "react";
import type { Metadata } from "next";
import SupplementDetailLayout from "@/components/suplementos/SupplementDetailLayout";

export const metadata: Metadata = {
  title: "Cafeína Anhidra: Energía y Rendimiento Extremo | Impulse Fitness",
  description: "Mejora tu foco y fuerza con cafeína anhidra. Aprende la dosis exacta por kilo de peso y cómo evitar la tolerancia.",
};

export default function CafeinaPage() {
  return (
    <SupplementDetailLayout 
      title="Cafeína Anhidra"
      subtitle="Potencia tu enfoque mental y reduce la percepción de fatiga en tus entrenamientos más duros."
      image="/images/suplementos/cafeina.png"
      evidence="Evidencia: Grado A"
      objective="Objetivo: Energía y Rendimiento"
      whatIs="Es la forma pura y deshidratada de la cafeína. Funciona bloqueando los receptores de adenosina en el cerebro, lo que engaña a tu cuerpo para que no sienta fatiga, aumentando el estado de alerta y la liberación de adrenalina."
      benefits={[
        "Aumento drástico de la fuerza y resistencia.",
        "Reducción de la percepción del esfuerzo (los pesos se sienten más ligeros).",
        "Ligero efecto termogénico que ayuda a la movilización de grasas."
      ]}
      protocol={{
        dosing: "3 a 6 mg por kilo de peso corporal.",
        timing: "45 a 60 minutos antes del entrenamiento."
      }}
      myths={[
        "Precaución: El cuerpo genera tolerancia rápidamente.",
        "Se recomienda hacer descargas (ciclarla) dejando de tomarla 1 semana cada mes."
      ]}
      category="Energía"
    />
  );
}
