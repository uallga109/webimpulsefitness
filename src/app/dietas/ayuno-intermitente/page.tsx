import React from "react";
import type { Metadata } from "next";
import DietDetailLayout from "@/components/dietas/DietDetailLayout";

export const metadata: Metadata = {
  title: "Ayuno Intermitente (Protocolo 16/8) | Impulse Fitness",
  description: "Una herramienta estratégica de distribución de comidas. Concentra tus calorías en una ventana de 8 horas para facilitar el déficit.",
};

export default function AyunoPage() {
  return (
    <DietDetailLayout 
      title="Ayuno Intermitente"
      subtitle="Una herramienta estratégica de distribución de comidas. Concentra tus calorías en una ventana de 8 horas para facilitar el déficit."
      image="/images/dietas/ayuno.png"
      tags={["🔴 Pérdida de Grasa", "🟡 Estilo de Vida"]}
      benefits={[
        "Facilita enormemente el déficit calórico.",
        "Flexibilidad horaria (ahorras tiempo por las mañanas).",
        "Fomenta la autofagia (reciclaje celular) a nivel clínico."
      ]}
      starFoods={["Agua", "Café negro sin azúcar", "Té verde", "Infusiones", "Agua con gas"]}
      curiosities="Romper el ayuno se llama literalmente 'des-ayunar'. Mucha gente cree que el ayuno quema más grasa mágicamente, pero la ciencia indica que funciona principalmente porque te ayuda a comer menos al final del día."
      keyAdvice="No uses el ayuno como excusa para comer comida basura en tu ventana de alimentación. La calidad de los alimentos sigue siendo lo más importante."
      category="Ayuno"
    />
  );
}
