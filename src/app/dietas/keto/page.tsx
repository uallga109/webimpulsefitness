import React from "react";
import type { Metadata } from "next";
import DietDetailLayout from "@/components/dietas/DietDetailLayout";

export const metadata: Metadata = {
  title: "Dieta Cetogénica (Keto) | Impulse Fitness",
  description: "Transforma tu cuerpo para que utilice la grasa como fuente principal de energía reduciendo los carbohidratos al mínimo.",
};

export default function KetoPage() {
  return (
    <DietDetailLayout 
      title="Dieta Cetogénica (Keto)"
      subtitle="Transforma tu cuerpo para que utilice la grasa como fuente principal de energía reduciendo los carbohidratos al mínimo."
      image="/images/dietas/keto.png"
      tags={["🔴 Pérdida de Grasa", "🟡 Rendimiento"]}
      benefits={[
        "Reducción brutal del apetito (las grasas y proteínas son muy saciantes).",
        "Pérdida de peso inicial muy rápida (por la pérdida de glucógeno y agua).",
        "Niveles de energía muy estables sin picos de insulina."
      ]}
      starFoods={["Aguacate", "Aceite de coco", "Aceite de oliva", "Mantequilla", "Cortes grasos de carne", "Salmón", "Huevos", "Quesos curados", "Frutos secos"]}
      curiosities="La dieta Keto no se inventó para adelgazar. Fue creada en la década de 1920 por médicos para tratar a niños con epilepsia que no respondían a los medicamentos."
      keyAdvice="Al empezar, puedes sufrir la 'Keto-gripe' (dolores de cabeza y cansancio) debido a la falta de electrolitos. Asegúrate de consumir suficiente sal, potasio y magnesio."
      category="Keto"
    />
  );
}
