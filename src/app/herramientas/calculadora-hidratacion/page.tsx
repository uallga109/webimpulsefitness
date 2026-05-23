import React from "react";
import type { Metadata } from "next";
import CalcHidratacionClient from "@/components/herramientas/CalcHidratacionClient";

export const metadata: Metadata = {
  title: "Calculadora de Hidratación | Impulse Fitness",
  description: "Calcula cuánta agua debes beber al día según tu peso y nivel de actividad física. Evita la deshidratación y optimiza tu rendimiento deportivo.",
};

export default function CalcHidratacionPage() {
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
          Calculadora de Hidratación Deportiva
        </h1>
        <p className="text-gray-500 mt-2 text-base sm:text-lg font-medium">
          Estima tu requerimiento hídrico diario personalizado según tu peso y volumen de entrenamiento.
        </p>
      </header>

      {/* 2. La Herramienta Interactiva en primer plano */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
        <CalcHidratacionClient />
      </section>

      {/* 3. Bloque de Texto SEO Profundo (E-E-A-T para Google) */}
      <article className="prose prose-blue max-w-none text-gray-600 space-y-8 leading-relaxed border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-black text-[#111827]">¿Por qué es crítica la Hidratación para el Rendimiento Físico?</h2>
        <p>
          El agua es el disolvente biológico de nuestro organismo y representa aproximadamente el **60%-70% de la masa muscular magra**. Juega un papel crucial en el transporte de nutrientes (glucosa, aminoácidos y electrolitos), la homeostasis térmica a través de la sudoración y la lubricación de las articulaciones.
        </p>
        <p>
          La literatura científica deportiva indica que esperar a sentir sensación de sed es un mecanismo tardío: la sed se manifiesta cuando ya existe una deshidratación equivalente al **1%-2% del peso corporal**, umbral a partir del cual el rendimiento neuromuscular se deteriora de manera drástica.
        </p>

        <h2 className="text-2xl font-black text-[#111827]">El Impacto de la Deshidratación en la Fuerza y Resistencia</h2>
        <p>
          No estar adecuadamente hidratado reduce notablemente el volumen de plasma sanguíneo, obligando al corazón a latir más rápido para suministrar oxígeno a las células (aumento del gasto cardiovascular). Esto desencadena los siguientes efectos adversos:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Disminución de Potencia y Fuerza:</strong> La falta de agua intra y extracelular deteriora la bomba de sodio-potasio de las membranas musculares, reduciendo la velocidad de contracción.
          </li>
          <li>
            <strong>Pérdida de la Capacidad Aeróbica:</strong> Disminuye drásticamente la disipación del calor corporal, disparando la fatiga por estrés térmico.
          </li>
          <li>
            <strong>Riesgo elevado de calambres musculares:</strong> El desequilibrio en los niveles de agua y electrolitos (como sodio, potasio y magnesio) altera la excitabilidad de las fibras de los músculos.
          </li>
        </ul>

        <h2 className="text-2xl font-black text-[#111827]">Cómo calcular tus Necesidades Hídricas Totales</h2>
        <p>
          Nuestra herramienta sigue las pautas fisiológicas dictadas por el Colegio Americano de Medicina Deportiva (ACSM):
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>1. Hidratación Basal:</strong> Tu cuerpo consume líquidos de forma continua mediante la respiración, sudoración imperceptible y excreción. Se calcula un mínimo biológico de **35 mililitros de agua por cada kilogramo de peso corporal**.
          </li>
          <li>
            <strong>2. Adición por Actividad Física:</strong> Por cada hora de entrenamiento de fuerza o cardiovascular intenso, se deben sumar entre **500 ml y 1000 ml** adicionales para compensar la deshidratación inducida por la sudoración.
          </li>
          <li>
            <strong>3. Protocolo de Reposición Intra-Entrenamiento:</strong> Es vital pautar ingestas breves de aproximadamente 150ml-200ml de agua o bebida isotónica cada 15-20 minutos durante el ejercicio dinámico.
          </li>
        </ul>

        <h2 className="text-2xl font-black text-[#111827]">¿Qué es la Hiponatremia y cómo Evitarla?</h2>
        <p>
          Consumir agua en volúmenes masivos y descontrolados sin el aporte adecuado de electrolitos puede provocar **hiponatremia** (dilución crítica del sodio en sangre por debajo de 135 mmol/L). Esto ocurre a menudo en atletas de resistencia extrema. Para evitarlo en sesiones prolongadas (superiores a los 60-90 minutos), recuerda enriquecer el agua con sales minerales o consumir bebidas isotónicas formuladas científicamente.
        </p>
      </article>
    </div>
  );
}
