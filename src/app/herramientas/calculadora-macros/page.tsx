import React from "react";
import type { Metadata } from "next";
import CalcMacrosClient from "@/components/herramientas/CalcMacrosClient";

export const metadata: Metadata = {
  title: "Calculadora de Macronutrientes | Impulse Fitness",
  description: "Distribuye tus proteínas, grasas y carbohidratos de forma óptima según tus calorías diarias y tus objetivos de composición corporal.",
};

export default function CalcMacrosPage() {
  return (
    <div className="flex flex-col space-y-12 animate-fadeIn max-w-4xl mx-auto py-8">
      {/* 1. Encabezado Hero Simple y Limpio (Excelente UX) */}
      <header className="border-b border-gray-200 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Herramientas</span>
          <span>•</span>
          <span>Nutrición</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Calculadora de Macros
        </h1>
        <p className="text-gray-500 mt-2 text-base sm:text-lg font-medium">
          Distribuye tus proteínas, grasas y carbohidratos de forma óptima según tus objetivos.
        </p>
      </header>

      {/* 2. La Herramienta Interactiva en primer plano */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
        <CalcMacrosClient />
      </section>

      {/* 3. Bloque de Texto SEO Profundo (E-E-A-T para Google) */}
      <article className="prose prose-blue max-w-none text-gray-600 space-y-8 leading-relaxed border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-black text-[#111827]">¿Qué son los Macronutrientes y qué papel juegan en tu cuerpo?</h2>
        <p>
          Los **macronutrientes** son aquellas sustancias químicas e ingredientes energéticos que el cuerpo humano necesita consumir en cantidades relativamente grandes para obtener energía (ATP), realizar funciones fisiológicas y reparar tejidos corporales. Se dividen en tres grandes grupos: **Proteínas**, **Grasas** y **Carbohidratos**.
        </p>
        <p>
          Si bien el control de calorías determina si ganas o pierdes peso total (termodinámica), la **distribución de tus macronutrientes** determina la *calidad* de dicho peso: si la ganancia es masa muscular magra o si la pérdida procede puramente de grasa oxidada.
        </p>

        <h2 className="text-2xl font-black text-[#111827]">Proteínas: Los Bloques de Construcción Celular</h2>
        <p>
          Las proteínas aportan 4 calorías por gramo y son el sustrato esencial para la reparación y regeneración tisular. Desde el punto de vista del fitness, son el factor crítico para la **síntesis de proteínas musculares (MPS)** tras el estímulo mecánico del entrenamiento con cargas. 
        </p>
        <p>
          Un aporte adecuado (entre 1.8 y 2.5 gramos por kilogramo de peso corporal al día) estimula la hipertrofia muscular y previene la degradación proteica en periodos de restricción calórica.
        </p>

        <h2 className="text-2xl font-black text-[#111827]">Grasas: El Soporte Vital y Hormonal</h2>
        <p>
          Las grasas son densas en energía, aportando 9 calorías por gramo. Juegan un rol fisiológico irremplazable como reguladores de la **síntesis hormonal de andrógenos** (como la testosterona), absorción de vitaminas liposolubles (A, D, E, K) y el mantenimiento de las membranas celulares saludables. 
        </p>
        <p>
          La literatura de nutrición aconseja que la ingesta de grasas no descienda nunca del **20%-25% de tus calorías diarias totales** (aproximadamente 0.8g a 1.2g por kg), previniendo desequilibrios y fatiga crónica.
        </p>

        <h2 className="text-2xl font-black text-[#111827]">Carbohidratos: La Gasolina del Entrenamiento de Intensidad</h2>
        <p>
          Los carbohidratos aportan 4 calorías por gramo y son convertidos rápidamente por el organismo en glucosa y glucógeno muscular y hepático. El glucógeno es la **fuente de combustible anaeróbica preferida por las fibras musculares rápidas** durante las contracciones intensas características del levantamiento de pesas o sprints.
        </p>
        <p>
          Mantener los depósitos de glucógeno saturados reduce el daño muscular inducido por el ejercicio y acelera los procesos de recuperación entre entrenamientos.
        </p>

        <h2 className="text-2xl font-black text-[#111827]">Cómo calcular tu Distribución de Macros paso a paso</h2>
        <p>
          El algoritmo matemático que ejecuta nuestra calculadora de macronutrientes sigue las directrices clínicas más consolidadas de la nutrición deportiva:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>1. Calcular las Proteínas:</strong> Se fijan en primer lugar en función de tu nivel de entrenamiento diario y masa magra. Habitualmente se aconseja entre **2.0g y 2.2g por kg de peso** para atletas dinámicos.
          </li>
          <li>
            <strong>2. Fijar las Grasas Saludables:</strong> Se establece un rango seguro y funcional, situándolo generalmente entre el **20% y el 30% del presupuesto de calorías totales** (aproximadamente 1g por kg de peso).
          </li>
          <li>
            <strong>3. Rellenar el resto con Carbohidratos:</strong> Las calorías sobrantes tras restar el valor energético de las proteínas y grasas se destinan en su totalidad a los carbohidratos para potenciar tu energía y rendimiento deportivo.
          </li>
        </ul>
      </article>
    </div>
  );
}
