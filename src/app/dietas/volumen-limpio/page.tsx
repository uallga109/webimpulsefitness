import React from "react";
import type { Metadata } from "next";
import DietDetailLayout from "@/components/dietas/DietDetailLayout";

export const metadata: Metadata = {
  title: "Dieta de Volumen Limpio (Clean Bulking) | Impulse Fitness",
  description: "Maximiza tu ganancia de masa muscular controlando el superávit calórico para acumular la mínima grasa posible.",
};

export default function VolumenLimpioPage() {
  return (
    <DietDetailLayout 
      title="Volumen Limpio"
      subtitle="Maximiza tu ganancia de masa muscular controlando el superávit calórico para acumular la mínima grasa posible."
      image="/images/dietas/volumen-limpio.png"
      tags={["🟢 Ganancia Muscular", "🔵 Hipertrofia"]}
      benefits={[
        "Aumento constante de fuerza en el gimnasio.",
        "Creación de nuevo tejido muscular real (no solo retención de líquidos o grasa).",
        "Altos niveles de energía durante todo el día."
      ]}
      starFoods={["Avena", "Arroz basmati", "Pasta integral", "Pechuga de pollo", "Ternera magra", "Huevos enteros", "Aceite de oliva", "Frutos secos", "Crema de cacahuete"]}
      curiosities="Muchos creen que para crecer hay que comer 'de todo' (Dirty Bulking). La ciencia demuestra que un superávit de apenas 300-500 calorías por encima de tu mantenimiento es suficiente para maximizar el crecimiento muscular natural."
      keyAdvice="Pésate a diario y saca la media semanal. Si subes más de un 1% de tu peso corporal al mes, probablemente estés ganando demasiada grasa."
      category="Volumen"
    />
  );
}
