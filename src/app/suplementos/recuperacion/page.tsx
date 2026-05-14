import React from "react";
import type { Metadata } from "next";
import SupplementDetailLayout from "@/components/suplementos/SupplementDetailLayout";

export const metadata: Metadata = {
  title: "Melatonina y Magnesio: Optimiza tu Descanso | Impulse Fitness",
  description: "La supercompensación ocurre mientras duermes. Aprende a usar la melatonina y el magnesio para un sueño profundo y reparador.",
};

export default function RecuperacionPage() {
  return (
    <SupplementDetailLayout 
      title="Melatonina & Magnesio"
      subtitle="El combo esencial para regular tu reloj biológico y relajar el sistema nervioso."
      image="/images/suplementos/recuperacion.png"
      evidence="Evidencia: Grado A"
      objective="Objetivo: Descanso y Recuperación"
      whatIs="La melatonina regula nuestro ciclo de sueño. El magnesio (especialmente el bisglicinato) actúa como relajante muscular y del sistema nervioso central."
      benefits={[
        "Reduce el tiempo necesario para conciliar el sueño.",
        "Mejora la arquitectura del sueño (fase REM y sueño profundo).",
        "Evita calambres musculares nocturnos."
      ]}
      protocol={{
        dosing: "1-3mg Melatonina + 200-400mg Magnesio (Bisglicinato).",
        timing: "30 minutos antes de dormir.",
        notes: "Asegúrate de estar en una habitación completamente a oscuras para maximizar el efecto."
      }}
      myths={[
        "Evitar el óxido de magnesio (baja absorción). Priorizar bisglicinato o citrato.",
        "La melatonina no es un sedante, es un regulador del ritmo circadiano."
      ]}
      category="Salud"
    />
  );
}
