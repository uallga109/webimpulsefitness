import React from "react";
import type { Metadata } from "next";
import CalcIMCClient from "@/components/herramientas/CalcIMCClient";

export const metadata: Metadata = {
  title: "Calculadora de IMC (Índice de Masa Corporal) | Impulse Fitness",
  description: "Calcula tu IMC de forma rápida y gratuita. Conoce si estás en tu peso saludable basándote en tu altura y peso corporal.",
};

export default function CalcIMCPage() {
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
          Calculadora de IMC
        </h1>
        <p className="text-gray-500 mt-2 text-base sm:text-lg font-medium">
          Estima tu Índice de Masa Corporal y conoce tu rango de peso saludable oficial.
        </p>
      </header>

      {/* 2. La Herramienta Interactiva en primer plano */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
        <CalcIMCClient />
      </section>

      {/* 3. Bloque de Texto SEO Profundo (E-E-A-T para Google) */}
      <article className="prose prose-blue max-w-none text-gray-600 space-y-8 leading-relaxed border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-black text-[#111827]">¿Qué es exactamente el Índice de Masa Corporal (IMC)?</h2>
        <p>
          El **Índice de Masa Corporal (IMC)**, conocido internacionalmente como BMI (*Body Mass Index*), es un indicador biométrico diseñado por el matemático y estadístico Adolphe Quetelet en el siglo XIX. Se trata de un estándar adoptado oficialmente por la **Organización Mundial de la Salud (OMS)** para clasificar de manera rápida el estado ponderal (peso) de un individuo en relación con su estatura.
        </p>
        <p>
          Aunque no mide de forma directa la composición tisular (es decir, el porcentaje de grasa y músculo), sirve como un método epidemiológico de cribado inicial sumamente eficaz para detectar problemas de infrapeso, sobrepeso y obesidad.
        </p>

        <h2 className="text-2xl font-black text-[#111827]">¿Cómo se calcula el IMC? La Ecuación Matemática</h2>
        <p>
          La fórmula para obtener el IMC es idéntica para hombres y mujeres adultos de todas las edades. Consiste en dividir la masa corporal (expresada en kilogramos) entre el cuadrado de la estatura (expresada en metros):
        </p>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center">
          <span className="font-mono text-lg bg-white px-4 py-2 rounded-2xl text-[#2563EB] border border-gray-200 inline-block">
            IMC = Peso (kg) / Altura² (m)
          </span>
          <p className="text-xs text-gray-400 mt-3">Ejemplo: Una persona de 75 kg con una estatura de 1.80 m tendrá un cálculo de: 75 / (1.80 × 1.80) = 23.15 kg/m²</p>
        </div>

        <h2 className="text-2xl font-black text-[#111827]">Clasificación y Rangos Oficiales del IMC (Según la OMS)</h2>
        <p>
          El resultado obtenido de tu IMC se clasifica dentro de los siguientes rangos clínicos establecidos de forma estandarizada:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Bajo peso (IMC &lt; 18.5):</strong> Indica un peso inferior a lo recomendado para mantener una correcta salud endocrina y ósea.
          </li>
          <li>
            <strong>Normopeso / Rango Saludable (IMC 18.5 - 24.9):</strong> El intervalo óptimo de menor riesgo para enfermedades cardiovasculares y metabólicas crónicas.
          </li>
          <li>
            <strong>Sobrepeso (IMC 25.0 - 29.9):</strong> Un estado de alerta que sugiere un exceso moderado de peso acumulado.
          </li>
          <li>
            <strong>Obesidad Tipo I (IMC 30.0 - 34.9):</strong> Exceso de masa corporal que incrementa notablemente el riesgo de hipertensión y diabetes tipo 2.
          </li>
          <li>
            <strong>Obesidad Tipo II (IMC 35.0 - 39.9) y Tipo III o Mórbida (IMC &ge; 40.0):</strong> Rangos críticos con un impacto severo directo en la longevidad y calidad de vida.
          </li>
        </ul>

        <h2 className="text-2xl font-black text-[#111827] text-amber-800">Las Limitaciones Clínicas del IMC en Atletas y Fitness</h2>
        <p>
          Es fundamental destacar que el IMC presenta una **limitación severa en el contexto deportivo**. Al no discriminar entre el peso procedente de la masa muscular magra y el peso procedente del tejido graso subcutáneo y visceral, un culturista o atleta de fuerza con un gran desarrollo de hipertrofia y un porcentaje de grasa corporal bajísimo (por ejemplo, del 9%) puede ser catalogado erróneamente bajo el rango de &ldquo;sobrepeso&rdquo; u &ldquo;obesidad&rdquo;.
        </p>
        <p>
          Por ello, si entrenas con cargas regularmente, te aconsejamos complementar esta métrica evaluando tu **Porcentaje de Grasa Corporal (fórmula de Marina o de calipers)** y tu **Índice de Masa Libre de Grasa (FFMI)** para obtener una imagen nítida e inequívoca de tu verdadero estado metabólico y de salud.
        </p>
      </article>
    </div>
  );
}
