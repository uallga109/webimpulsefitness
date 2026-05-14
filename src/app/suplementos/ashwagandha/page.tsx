import React from "react";
import type { Metadata } from "next";
import SupplementDetailLayout from "@/components/suplementos/SupplementDetailLayout";

export const metadata: Metadata = {
  title: "Ashwagandha (KSM-66): Reduce el Cortisol y Estrés | Impulse Fitness",
  description: "El adaptógeno por excelencia para deportistas estresados. Mejora tu recuperación del sistema nervioso y balance hormonal.",
};

export default function AshwagandhaPage() {
  return (
    <SupplementDetailLayout 
      title="Ashwagandha (KSM-66)"
      subtitle="Hierba adaptógena que ayuda a tu cuerpo a gestionar el estrés físico y mental."
      image="/images/suplementos/ashwagandha.png"
      evidence="Evidencia: Grado B"
      objective="Objetivo: Control del Estrés"
      whatIs="Es una hierba de la medicina ayurvédica que modula los niveles de cortisol, la hormona del estrés, permitiendo una mejor adaptación al entrenamiento intenso."
      benefits={[
        "Reduce drásticamente el cortisol y la ansiedad.",
        "Puede aumentar la testosterona libre en hombres bajo estrés crónico.",
        "Mejora la recuperación del sistema nervioso central."
      ]}
      protocol={{
        dosing: "300 a 600 mg al día (extracto KSM-66).",
        timing: "Repartido en dos tomas (mañana y noche).",
        notes: "Es conveniente ciclarla: 8-12 semanas de uso por 4 de descanso."
      }}
      myths={[
        "El extracto KSM-66 es el que cuenta con mayor respaldo científico y pureza.",
        "Ideal para periodos de alta carga de trabajo o competiciones."
      ]}
      category="Recuperación"
    />
  );
}
