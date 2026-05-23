import React from "react";
import type { Metadata } from "next";
import CalcVO2Client from "@/components/herramientas/CalcVO2Client";

export const metadata: Metadata = {
  title: "Calculadora de VO2 Max (Test de Cooper) | Impulse Fitness",
  description: "Mide tu capacidad aeróbica y resistencia cardiovascular con el Test de Cooper. Una métrica esencial para corredores, ciclistas y atletas de resistencia.",
};

export default function CalcVO2Page() {
  return (
    <div className="flex flex-col space-y-12 animate-fadeIn max-w-4xl mx-auto py-8">
      {/* 1. Encabezado Hero Simple y Limpio (Excelente UX) */}
      <header className="border-b border-gray-200 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Herramientas</span>
          <span>•</span>
          <span>Deportes</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Calculadora de VO2 Máx
        </h1>
        <p className="text-gray-500 mt-2 text-base sm:text-lg font-medium">
          Estima tu Volumen Máximo de Oxígeno y evalúa tu condición física cardiovascular real.
        </p>
      </header>

      {/* 2. La Herramienta Interactiva en primer plano */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
        <CalcVO2Client />
      </section>

      {/* 3. Bloque de Texto SEO Profundo (E-E-A-T para Google) */}
      <article className="prose prose-blue max-w-none text-gray-600 space-y-8 leading-relaxed border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-black text-[#111827]">¿Qué es exactamente el VO2 Máx y por qué es el indicador definitivo de longevidad?</h2>
        <p>
          El **VO2 Máx** (Volumen Máximo de Oxígeno) es la cantidad máxima de oxígeno que el cuerpo humano puede captar de la atmósfera, transportar mediante el sistema cardiorrespiratorio y metabolizar a nivel celular (mitocondrial) en los músculos activos durante un esfuerzo físico incremental extremo, por unidad de tiempo. Se expresa habitualmente en valores relativos al peso corporal: **mililitros de oxígeno por kilogramo de peso por minuto (ml/kg/min)**.
        </p>
        <p>
          En la medicina del deporte y de longevidad moderna, el VO2 Máx no solo se considera el mejor predictor del rendimiento aeróbico de élite, sino que los estudios médicos demuestran que es uno de los **biomarcadores más sólidos de esperanza de vida saludable** y menor mortalidad por cualquier causa, superando a otros factores clásicos de riesgo metabólico.
        </p>

        <h2 className="text-2xl font-black text-[#111827]">El Test de Cooper: Fundamento Científico Indirecto</h2>
        <p>
          Si bien la medición directa del VO2 Máx requiere un costoso análisis de gases metabólicos en cinta rodante o cicloergómetro en condiciones de laboratorio clínico, el Dr. Kenneth H. Cooper diseñó en 1968 un sistema predictivo de campo altamente preciso para las Fuerzas Armadas de EE. UU.
        </p>
        <p>
          El **Test de Cooper** evalúa la máxima distancia horizontal recorrida en un tiempo cerrado de **12 minutos**, correlacionando de manera logarítmica la velocidad aeróbica máxima sostenida con la capacidad máxima de procesamiento de oxígeno.
        </p>

        <h2 className="text-2xl font-black text-[#111827]">¿Cómo se calcula el VO2 Máx? La Fórmula del Test de Cooper</h2>
        <p>
          El cálculo matemático procesa la distancia recorrida (en metros) aplicando la clásica ecuación predictiva de Cooper:
        </p>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center">
          <span className="font-mono text-base sm:text-lg bg-white px-4 py-2 rounded-2xl text-[#2563EB] border border-gray-200 inline-block">
            VO2 Máx = (Distancia (m) - 504.9) / 44.73
          </span>
          <p className="text-xs text-gray-400 mt-3">Ejemplo: Si un corredor recorre 2.800 metros en los 12 minutos del test, la estimación será: (2800 - 504.9) / 44.73 = 51.31 ml/kg/min</p>
        </div>

        <h2 className="text-2xl font-black text-[#111827]">Interpretación y Percentiles de Condición Física</h2>
        <p>
          Un VO2 Máx considerado óptimo varía sustancialmente según factores genéticos irremplazables, el sexo y la edad del deportista:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Rango Bajo (&lt; 35 ml/kg/min en hombres; &lt; 30 en mujeres):</strong> Sugiere una condición física cardiovascular deficiente que requiere atención inmediata para reducir el riesgo cardiovascular.
          </li>
          <li>
            <strong>Rango Aceptable / Moderado (35 - 45 en hombres; 30 - 38 en mujeres):</strong> Nivel saludable promedio para adultos recreativos moderadamente activos.
          </li>
          <li>
            <strong>Rango Excelente / Élite (46 - 55 en hombres; 39 - 48 en mujeres):</strong> Condición excepcional indicativa de un corazón altamente eficiente y adaptaciones mitocondriales notables.
          </li>
          <li>
            <strong>Atletas de Resistencia Profesionales:</strong> En corredores de maratón y ciclistas profesionales de élite, se registran valores extremos que superan habitualmente los **75 - 85 ml/kg/min**.
          </li>
        </ul>

        <h2 className="text-2xl font-black text-[#111827]">Estrategias Eficaces para Aumentar tu VO2 Máx</h2>
        <p>
          La evidencia científica deportiva demuestra que los protocolos más eficientes para elevar el VO2 Máx combinan:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Entrenamiento por Intervalos de Alta Intensidad (HIIT):</strong> Series de 3-4 minutos en torno al 90-95% de la frecuencia cardíaca máxima con periodos de descanso equivalentes.</li>
          <li><strong>Base de Volumen Aeróbico (Zona 2):</strong> Sesiones prolongadas constantes a ritmos submáximos cómodos para incentivar la capilarización y biogénesis de las mitocondrias.</li>
        </ol>
      </article>
    </div>
  );
}
