import React from "react";
import type { Metadata } from "next";
import CalcRitmoClient from "@/components/herramientas/CalcRitmoClient";

export const metadata: Metadata = {
  title: "Calculadora de Ritmo Running | Impulse Fitness",
  description: "Calcula tu ritmo de carrera (min/km) y tu velocidad media. Planifica tus entrenamientos de series y competiciones con precisión.",
};

export default function CalcRitmoPage() {
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
          Calculadora de Ritmo Running
        </h1>
        <p className="text-gray-500 mt-2 text-base sm:text-lg font-medium">
          Calcula tu ritmo de carrera exacto por kilómetro (Pace) y define tu estrategia competitiva óptima.
        </p>
      </header>

      {/* 2. La Herramienta Interactiva en primer plano */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
        <CalcRitmoClient />
      </section>

      {/* 3. Bloque de Texto SEO Profundo (E-E-A-T para Google) */}
      <article className="prose prose-blue max-w-none text-gray-600 space-y-8 leading-relaxed border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-black text-[#111827]">¿Qué es el Ritmo de Carrera (Pace) y por qué es clave en el running?</h2>
        <p>
          En el atletismo y running, el **ritmo de carrera (Pace)** es la métrica de velocidad estándar que expresa el tiempo que tarda un corredor en completar un kilómetro (expresado en **minutos por kilómetro: min/km**). A diferencia de los km/h empleados en el ciclismo, el Pace es la unidad preferida por los corredores populares y profesionales por facilitar el control del esfuerzo en entrenamientos y competiciones.
        </p>
        <p>
          Saber modular y clavar tu ritmo te permite optimizar la **economía de carrera**, retrasando el agotamiento del glucógeno y la acumulación de lactato muscular en tus recorridos.
        </p>

        <h2 className="text-2xl font-black text-[#111827]">Cómo calcular tu Ritmo de Carrera: Ecuación Matemática</h2>
        <p>
          La fórmula para obtener tu ritmo de carrera requiere cruzar el tiempo total invertido (convertido a minutos) y la distancia total del recorrido (expresada en kilómetros):
        </p>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center">
          <span className="font-mono text-base sm:text-lg bg-white px-4 py-2 rounded-2xl text-[#2563EB] border border-gray-200 inline-block">
            Ritmo (min/km) = Tiempo Total (min) / Distancia (km)
          </span>
          <p className="text-xs text-gray-400 mt-3">Ejemplo: Si corres una distancia de 10 kilómetros en un tiempo de 50 minutos exactos, tu cálculo será: 50 / 10 = 5:00 min/km.</p>
        </div>

        <h2 className="text-2xl font-black text-[#111827]">La Importancia Estratégica del Ritmo Constante (Pacing)</h2>
        <p>
          La evidencia científica biomecánica y fisiológica demuestra que correr guiándose únicamente por las sensaciones al inicio de la carrera boicotea el rendimiento final. Estructurar una estrategia de ritmo planificada ofrece ventajas decisivas:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Ritmo Constante:</strong> Correr al mismo ritmo durante todo el trazado. Es el método fisiológicamente más eficiente en terrenos llanos y sin viento para mantener estable el consumo de oxígeno (VO2).
          </li>
          <li>
            <strong>Estrategia de Ritmo Negativo:</strong> Consiste en completar la segunda mitad de la distancia de la carrera más rápido que la primera mitad. Es el patrón empleado por los corredores de élite en maratones para evitar el colapso energético de los depósitos musculares.
          </li>
          <li>
            <strong>Prevención del "Muro" en Maratón:</strong> Planificar el Pace exacto evita salir a una velocidad superior al umbral aeróbico, protegiendo tus depósitos de combustible de una degradación drástica y prematura.
          </li>
        </ul>

        <h2 className="text-2xl font-black text-[#111827]">Planificación de Entrenamientos en Pista: Series y Umbrales</h2>
        <p>
          Conocer tu ritmo de carrera objetivo te permite calcular con precisión matemática los parciales y tiempos de paso requeridos en tus sesiones de series y pista de atletismo. Por ejemplo, si tu meta en 10k es correr a 4:00 min/km, tus series de 1000 metros deben rodar a ese ritmo exacto, y tus series cortas de 400 metros de umbral láctico deben completarse en pasos exactos de 1 minuto y 36 segundos (ritmo de 4:00 por cada 400m).
        </p>
      </article>
    </div>
  );
}
