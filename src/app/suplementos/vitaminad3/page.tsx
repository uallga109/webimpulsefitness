import React from "react";
import type { Metadata } from "next";
import SupplementDetailLayout from "@/components/suplementos/SupplementDetailLayout";

export const metadata: Metadata = {
  title: "Vitamina D3: La Pro-Hormona del Sol | Impulse Fitness",
  description: "Clave para la testosterona, la salud ósea y el sistema inmune. Descubre por qué casi todo el mundo tiene deficiencia.",
};

export default function VitaminaD3Page() {
  return (
    <SupplementDetailLayout 
      title="Vitamina D3"
      subtitle="Esencial para el soporte hormonal, óseo e inmunológico de cualquier atleta."
      image="/images/suplementos/vitaminad3.png"
      evidence="Evidencia: Grado A"
      objective="Objetivo: Soporte Hormonal"
      whatIs="Más que una vitamina, es una pro-hormona que el cuerpo sintetiza con el sol. Es crucial para cientos de procesos metabólicos y su deficiencia es sumamente común."
      benefits={[
        "Esencial para la absorción de calcio y densidad ósea.",
        "Apoya el funcionamiento óptimo del sistema inmunológico.",
        "Restaura niveles hormonales de testosterona si existe deficiencia."
      ]}
      protocol={{
        dosing: "2.000 a 5.000 UI diarias.",
        timing: "Junto con la comida más copiosa (es liposoluble).",
        notes: "Lo ideal es realizarse una analítica de sangre anual para ajustar la dosis."
      }}
      myths={[
        "La mayoría de la población urbana tiene niveles subóptimos incluso en países soleados.",
        "Su impacto en la salud mental y el ánimo es significativo."
      ]}
      category="Salud"
    />
  );
}
