import React from "react";
import type { Metadata } from "next";
import CalcGrasaCorporalClient from "@/components/herramientas/CalcGrasaCorporalClient";

export const metadata: Metadata = {
  title: "Calculadora de Grasa Corporal (US Navy) | Impulse Fitness",
  description: "Estima tu porcentaje de grasa corporal utilizando el método de la Marina de EE.UU. Una forma sencilla y científica de medir tu composición corporal.",
};

export default function CalcGrasaCorporalPage() {
  return (
    <div className="flex flex-col space-y-12 animate-fadeIn max-w-4xl mx-auto py-8">
      {/* 1. Encabezado Hero Simple y Limpio (Excelente UX) */}
      <header className="border-b border-gray-200 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Herramientas</span>
          <span>•</span>
          <span>Salud</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Calculadora de Grasa Corporal
        </h1>
        <p className="text-gray-500 mt-2 text-base sm:text-lg font-medium">
          Estima tu porcentaje de grasa corporal de forma fiable mediante mediciones antropométricas.
        </p>
      </header>

      {/* 2. La Herramienta Interactiva en primer plano */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
        <CalcGrasaCorporalClient />
      </section>

      {/* 3. Bloque de Texto SEO Profundo (E-E-A-T para Google) */}
      <article className="prose prose-blue max-w-none text-gray-600 space-y-8 leading-relaxed border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-black text-[#111827]">¿Qué es el Porcentaje de Grasa Corporal y por qué es vital medirlo?</h2>
        <p>
          El **porcentaje de grasa corporal** representa la fracción de tu peso total constituida única y exclusivamente por tejido adiposo (grasa), distinguiéndola de la masa magra (músculos, huesos, órganos, agua y glucógeno). 
        </p>
        <p>
          A diferencia del peso de la báscula o el IMC, medir la grasa corporal te indica la verdadera **calidad de tu composición física**. Es el indicador maestro para evaluar tus fases de definición (pérdida de grasa reteniendo músculo) o volumen (ganancia de músculo minimizando acumulación de tejido graso).
        </p>

        <h2 className="text-2xl font-black text-[#111827]">El Método de la Marina de EE. UU. (US Navy Body Fat Formula)</h2>
        <p>
          Nuestra calculadora utiliza el **método antropométrico de la Marina de EE. UU.**, uno de los sistemas indirectos más precisos y validados científicamente en comparación con el estándar de oro médico (DEXA scan). 
        </p>
        <p>
          Este algoritmo matemático utiliza ecuaciones logarítmicas basadas en perímetros específicos del cuerpo según el sexo biológico:
        </p>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-3 text-sm">
          <p>
            <strong>Fórmula para Hombres:</strong> Requiere medir el perímetro del cuello y el perímetro abdominal (a la altura del ombligo).
          </p>
          <p>
            <strong>Fórmula para Mujeres:</strong> Requiere medir el cuello, la cintura (en su parte más estrecha) y la cadera (en la zona de máxima circunferencia glútea), debido a los patrones de distribución adiposa ginoides.
          </p>
        </div>

        <h2 className="text-2xl font-black text-[#111827]">Rangos Clínicos y Estéticos de Grasa Corporal</h2>
        <p>
          El porcentaje saludable e ideal de grasa varía significativamente en función del sexo del individuo, debido a las demandas fisiológicas reproductivas del cuerpo femenino:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 text-sm">
          <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
            <h4 className="font-bold text-[#2563EB] mb-2">Clasificación en Hombres</h4>
            <ul className="space-y-1.5">
              <li><strong>Competencia / Extremo:</strong> 4% - 6%</li>
              <li><strong>Atleta / Fitness de Élite:</strong> 7% - 13%</li>
              <li><strong>Saludable / Moderado:</strong> 14% - 17%</li>
              <li><strong>Sobrepeso / Alerta:</strong> 18% - 24%</li>
              <li><strong>Obesidad:</strong> &ge; 25%</li>
            </ul>
          </div>
          <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100">
            <h4 className="font-bold text-emerald-700 mb-2">Clasificación en Mujeres</h4>
            <ul className="space-y-1.5">
              <li><strong>Competencia / Extremo:</strong> 10% - 12%</li>
              <li><strong>Atleta / Fitness de Élite:</strong> 13% - 20%</li>
              <li><strong>Saludable / Moderado:</strong> 21% - 25%</li>
              <li><strong>Sobrepeso / Alerta:</strong> 26% - 31%</li>
              <li><strong>Obesidad:</strong> &ge; 32%</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-black text-[#111827]">¿Por qué las básculas de bioimpedancia fallan y este método es mejor?</h2>
        <p>
          Las básculas de bioimpedancia eléctrica convencionales estiman la composición corporal haciendo pasar una microcorriente por las piernas. Sin embargo, factores como el nivel de hidratación, el consumo previo de sal o cafeína, el vaciado de glucógeno y la temperatura de la piel alteran severamente la resistencia eléctrica, arrojando oscilaciones de hasta un **4% de grasa corporal de un día para otro**.
        </p>
        <p>
          Por el contrario, las mediciones con cinta métrica de los perímetros anatómicos son estables y no fluctúan por factores hídricos, ofreciéndote una tendencia de cambio real y consistente a lo largo del tiempo.
        </p>
      </article>
    </div>
  );
}
