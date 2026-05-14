import React from "react";
import type { Metadata } from "next";
import SupplementDetailLayout from "@/components/suplementos/SupplementDetailLayout";

export const metadata: Metadata = {
  title: "Citrulina Malato: Máximo Bombeo y Flujo Sanguíneo | Impulse Fitness",
  description: "Eleva tus niveles de óxido nítrico y mejora el transporte de nutrientes. Guía sobre la citrulina y su efecto pre-entreno.",
};

export default function CitrulinaPage() {
  return (
    <SupplementDetailLayout 
      title="Citrulina Malato"
      subtitle="Mejora la vasodilatación y el transporte de oxígeno para un bombeo muscular extremo."
      image="/images/suplementos/citrulina.png"
      evidence="Evidencia: Grado B"
      objective="Objetivo: Vasodilatación y Pump"
      whatIs="Es un aminoácido que los riñones transforman en arginina, siendo mucho más eficiente para elevar los niveles de óxido nítrico en sangre que la suplementación directa con arginina."
      benefits={[
        "Mejora masiva del flujo sanguíneo y bombeo muscular.",
        "Facilita el transporte de nutrientes y oxígeno al músculo.",
        "Disminuye las agujetas (DOMS) post-entrenamiento."
      ]}
      protocol={{
        dosing: "6 a 8 gramos.",
        timing: "40-60 minutos antes de entrenar."
      }}
      myths={[
        "Es la base de casi cualquier suplemento pre-entreno sin estimulantes de calidad.",
        "Mucho más efectiva que la arginina clásica debido a su farmacocinética."
      ]}
      category="Rendimiento"
    />
  );
}
