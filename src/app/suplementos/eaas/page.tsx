import React from "react";
import type { Metadata } from "next";
import SupplementDetailLayout from "@/components/suplementos/SupplementDetailLayout";

export const metadata: Metadata = {
  title: "Aminoácidos Esenciales (EAAs): Bloques de Construcción | Impulse Fitness",
  description: "Superiores a los BCAAs. Todo sobre los 9 aminoácidos esenciales para entrenamientos en ayunas o dietas estrictas.",
};

export default function EAAsPage() {
  return (
    <SupplementDetailLayout 
      title="Aminoácidos Esenciales (EAAs)"
      subtitle="Los 9 bloques fundamentales que tu cuerpo no puede producir por sí mismo."
      image="/images/suplementos/eaas.png"
      evidence="Evidencia: Grado B"
      objective="Objetivo: Mantenimiento Muscular"
      whatIs="Son los 9 aminoácidos que el cuerpo no puede sintetizar. Han desplazado a los BCAAs (que solo tienen 3) porque ofrecen el perfil completo para crear tejido muscular."
      benefits={[
        "Previenen el catabolismo durante entrenamientos en ayunas.",
        "Estimulan la síntesis proteica sin carga digestiva.",
        "Perfil completo de aminoácidos para la recuperación."
      ]}
      protocol={{
        dosing: "10 a 15 gramos.",
        timing: "Durante el entrenamiento (intra-entreno).",
        notes: "Especialmente útiles si entrenas en ayunas o en fases severas de definición."
      }}
      myths={[
        "Si ya consumes suficiente proteína diaria, su beneficio es marginal, pero útil como 'seguro' intra-entreno.",
        "Superiores a los BCAAs en cualquier escenario."
      ]}
      category="Mantenimiento"
    />
  );
}
