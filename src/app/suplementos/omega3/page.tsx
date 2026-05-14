import React from "react";
import type { Metadata } from "next";
import SupplementDetailLayout from "@/components/suplementos/SupplementDetailLayout";

export const metadata: Metadata = {
  title: "Omega 3 (EPA y DHA): Salud y Antiinflamatorio | Impulse Fitness",
  description: "Mejora tu salud cardiovascular y reduce la inflamación articular con Omega 3. Todo sobre el EPA, DHA y dosis óptimas.",
};

export default function Omega3Page() {
  return (
    <SupplementDetailLayout 
      title="Omega 3 (EPA y DHA)"
      subtitle="Ácidos grasos esenciales con potentes beneficios antiinflamatorios y cardiovasculares."
      image="/images/suplementos/omega3.png"
      evidence="Evidencia: Grado A"
      objective="Objetivo: Salud General"
      whatIs="Son grasas esenciales extraídas del pescado o algas que el cuerpo no puede producir. Son fundamentales para la estructura de las células y el control de la inflamación."
      benefits={[
        "Potente efecto antiinflamatorio sistémico (protege articulaciones).",
        "Mejora la salud cardiovascular y perfiles de colesterol.",
        "Aumenta la sensibilidad a la insulina."
      ]}
      protocol={{
        dosing: "1 a 3 gramos combinados de EPA + DHA reales.",
        timing: "Junto a una comida que contenga grasas.",
        notes: "Comprueba siempre la etiqueta para ver la cantidad real de EPA/DHA, no solo el peso total del aceite."
      }}
      myths={[
        "Fundamental para atletas de fuerza que someten sus articulaciones a cargas pesadas.",
        "La suplementación es más eficiente que el consumo de pescado si este no es frecuente."
      ]}
      category="Salud"
    />
  );
}
