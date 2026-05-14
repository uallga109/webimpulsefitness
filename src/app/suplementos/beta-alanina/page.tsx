import React from "react";
import type { Metadata } from "next";
import SupplementDetailLayout from "@/components/suplementos/SupplementDetailLayout";

export const metadata: Metadata = {
  title: "Beta-Alanina: Retrasa la Fatiga Muscular | Impulse Fitness",
  description: "Adiós a la quemazón muscular. Todo sobre la beta-alanina, la carnosina y cómo mejorar en series de alta intensidad.",
};

export default function BetaAlaninaPage() {
  return (
    <SupplementDetailLayout 
      title="Beta-Alanina"
      subtitle="El aminoácido que actúa como tampón contra el ácido láctico en esfuerzos de alta intensidad."
      image="/images/suplementos/beta-alanina.png"
      evidence="Evidencia: Grado A"
      objective="Objetivo: Resistencia Muscular"
      whatIs="Es un aminoácido no esencial que, al unirse a la histidina en el cuerpo, forma Carnosina. La carnosina neutraliza el ácido láctico en los músculos."
      benefits={[
        "Retrasa la sensación de quemazón muscular.",
        "Ideal para series de alta repetición o deportes explosivos (CrossFit, remo).",
        "Mejora el rendimiento en esfuerzos de 1 a 4 minutos."
      ]}
      protocol={{
        dosing: "3.2 a 6.4 gramos diarios.",
        timing: "A diario (funciona por acumulación, no importa la hora).",
        notes: "Puede producir parestesia (picor inofensivo). Si te ocurre, divide la dosis."
      }}
      myths={[
        "El picor o cosquilleo es un efecto secundario totalmente inofensivo.",
        "No es necesario tomarla antes de entrenar, aunque muchos pre-entrenos la incluyan."
      ]}
      category="Resistencia"
    />
  );
}
