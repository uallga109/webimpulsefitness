import React from "react";
import type { Metadata } from "next";
import SupplementDetailLayout from "@/components/suplementos/SupplementDetailLayout";

export const metadata: Metadata = {
  title: "Proteína de Suero (Whey Protein): Guía de Uso | Impulse Fitness",
  description: "Acelera tu recuperación con la proteína de mayor valor biológico. Aprende cuándo tomarla y cómo encaja en tus macros.",
};

export default function WheyPage() {
  return (
    <SupplementDetailLayout 
      title="Proteína de Suero (Whey)"
      subtitle="La fuente de proteína más rápida y eficiente para la reparación muscular post-entrenamiento."
      image="/images/suplementos/whey.png"
      evidence="Evidencia: Grado A"
      objective="Objetivo: Recuperación e Hipertrofia"
      whatIs="Es la proteína extraída del suero de la leche durante la producción del queso. Destaca por su altísimo Valor Biológico (VB) y su increíble velocidad de absorción, lo que la hace ideal para disparar la síntesis proteica muscular."
      benefits={[
        "Aporta todos los aminoácidos esenciales, con una alta concentración de Leucina.",
        "Facilita llegar a los requerimientos diarios de proteína de forma cómoda.",
        "Rápida asimilación para frenar el catabolismo."
      ]}
      protocol={{
        dosing: "20-40g por toma, dependiendo de tu peso.",
        timing: "Ideal post-entrenamiento o como snack cómodo."
      }}
      myths={[
        "'Es un polvo mágico para ponerse fuerte': No, es simplemente comida en polvo de alta calidad.",
        "Si ya llegas a tus requerimientos con comida real, la whey no te dará beneficios extra."
      ]}
      category="Masa Muscular"
    />
  );
}
