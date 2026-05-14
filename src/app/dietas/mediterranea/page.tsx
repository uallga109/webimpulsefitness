import React from "react";
import type { Metadata } from "next";
import DietDetailLayout from "@/components/dietas/DietDetailLayout";

export const metadata: Metadata = {
  title: "Dieta Mediterránea | Impulse Fitness",
  description: "El patrón alimenticio más respaldado por la ciencia para la salud, la longevidad y el mantenimiento físico.",
};

export default function MediterraneaPage() {
  return (
    <DietDetailLayout 
      title="Dieta Mediterránea"
      subtitle="El patrón alimenticio más respaldado por la ciencia para la salud, la longevidad y el mantenimiento físico."
      image="/images/dietas/mediterranea.png"
      tags={["🟢 Salud", "🔵 Mantenimiento"]}
      benefits={[
        "Protección cardiovascular comprobada.",
        "Alta ingesta de antioxidantes y fibra.",
        "Altísima adherencia (es muy fácil de seguir a largo plazo porque permite mucha variedad)."
      ]}
      starFoods={["Aceite de Oliva Virgen Extra (AOVE)", "Legumbres", "Pescado azul", "Frutas de temporada", "Verduras", "Cereales integrales", "Vino con moderación"]}
      curiosities="Es tan importante a nivel cultural y de salud que la UNESCO la declaró Patrimonio Cultural Inmaterial de la Humanidad en 2010."
      keyAdvice="Aunque es muy saludable, los alimentos que la componen (como el AOVE o los frutos secos) son muy calóricos. Si tu objetivo es perder peso, deberás seguir controlando las cantidades."
      category="Salud"
    />
  );
}
