import React from "react";
import type { Metadata } from "next";
import DietDetailLayout from "@/components/dietas/DietDetailLayout";

export const metadata: Metadata = {
  title: "Dieta de Definición Estricta (Cutting) | Impulse Fitness",
  description: "El enfoque científico y estructurado para perder grasa corporal manteniendo toda la masa muscular que has ganado.",
};

export default function DefinicionPage() {
  return (
    <DietDetailLayout 
      title="Dieta de Definición"
      subtitle="El enfoque científico y estructurado para perder grasa corporal manteniendo toda la masa muscular que has ganado."
      image="/images/dietas/definicion.png"
      tags={["🔴 Pérdida de Grasa", "🔵 Estética"]}
      benefits={[
        "Reducción drástica del porcentaje de grasa corporal.",
        "Mayor visibilidad muscular (vascularización y abdominales).",
        "Mejora en la sensibilidad a la insulina."
      ]}
      starFoods={["Verduras de hoja verde (brócoli, espinacas)", "Claras de huevo", "Pescado blanco", "Pechuga de pavo/pollo", "Patata cocida", "Sandía", "Melón", "Queso batido 0%"]}
      curiosities="La grasa no se puede perder de forma localizada. Por muchos abdominales que hagas, tu genética decidirá de dónde se quema la grasa primero cuando entras en déficit calórico."
      keyAdvice="Mantén la proteína alta (entre 2g y 2.5g por kilo de peso) para evitar el catabolismo muscular y entrena igual de pesado que en volumen."
      category="Definición"
    />
  );
}
