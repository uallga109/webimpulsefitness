import React from "react";
import type { Metadata } from "next";
import Calc1RMClient from "@/components/herramientas/Calc1RMClient";

export const metadata: Metadata = {
  title: "Calculadora de 1RM (Una Repetición Máxima) | Impulse Fitness",
  description: "Calcula tu fuerza máxima teórica sin riesgo de lesión. Obtén tus porcentajes de carga para programar tus mesociclos de fuerza e hipertrofia.",
};

export default function Calc1RMPage() {
  return (
    <div className="flex flex-col space-y-12 animate-fadeIn max-w-4xl mx-auto py-8">
      {/* 1. Encabezado Hero Simple y Limpio (Excelente UX) */}
      <header className="border-b border-gray-200 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Herramientas</span>
          <span>•</span>
          <span>Entrenamiento</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Calculadora de 1RM (Fuerza Máxima)
        </h1>
        <p className="text-gray-500 mt-2 text-base sm:text-lg font-medium">
          Estima tu repetición máxima sin arriesgar tu sistema nervioso central.
        </p>
      </header>

      {/* 2. La Herramienta Interactiva en primer plano */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
        <Calc1RMClient />
      </section>

      {/* 3. Bloque de Texto SEO Profundo (E-E-A-T para Google) */}
      <article className="prose prose-blue max-w-none text-gray-600 space-y-8 leading-relaxed border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-black text-[#111827]">¿Qué es exactamente la Repetición Máxima o 1RM?</h2>
        <p>
          En la ciencia del deporte y la fisiología del ejercicio, la **Repetición Máxima (1RM)** se define como la mayor cantidad de peso que un individuo puede levantar en un ejercicio dinámico específico a través de un rango de movimiento completo, una sola vez y con una técnica biomecánica impecable.
        </p>
        <p>
          Conocer tu 1RM es el pilar fundamental para la **dosificación de la intensidad** en el entrenamiento de fuerza. En lugar de elegir cargas al azar o basándote puramente en tus sensaciones, el 1RM te proporciona una métrica de fuerza real a partir de la cual estructurar con precisión matemática tu programación.
        </p>

        <h2 className="text-2xl font-black text-[#111827]">¿Por qué deberías estimar tu 1RM? Beneficios Clave</h2>
        <p>
          Realizar un test de fuerza máxima directa (levantar una barra al límite absoluto en press de banca, sentadilla o peso muerto) es una práctica de altísimo riesgo que suele estar desaconsejada para atletas intermedios o recreativos. A continuación, te explicamos los beneficios de utilizar nuestra calculadora de estimación científica:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Prevención de lesiones ortopédicas:</strong> Evita someter a tus articulaciones, ligamentos y tendones a tensiones mecánicas extremas que puedan comprometer tu continuidad en el entrenamiento.
          </li>
          <li>
            <strong>Protección del Sistema Nervioso Central (SNC):</strong> Los levantamientos máximos reales generan una fatiga neuronal severa que puede tardar hasta 7-10 días en disiparse, afectando negativamente al resto de tus sesiones.
          </li>
          <li>
            <strong>Planificación metodológica precisa:</strong> Te permite estructurar de forma profesional tus mesociclos empleando porcentajes específicos para hipertrofia (65%-80% 1RM), fuerza submáxima (80%-90% 1RM) o potencia (50%-70% 1RM).
          </li>
          <li>
            <strong>Monitoreo del progreso sin fatiga:</strong> Puedes estimar periódicamente si tu fuerza máxima ha mejorado simplemente haciendo series estándar de entre 3 y 8 repeticiones al fallo técnico.
          </li>
        </ul>

        <h2 className="text-2xl font-black text-[#111827]">Las Fórmulas Científicas para estimar el 1RM</h2>
        <p>
          Nuestra calculadora de 1RM procesa tus datos aplicando ecuaciones predictivas de alta fiabilidad avaladas por estudios de fisiología del esfuerzo:
        </p>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-4">
          <p>
            <strong>1. Fórmula de Brzycki:</strong> Ideada por Matt Brzycki, es una de las ecuaciones más exactas para estimaciones basadas en series cortas (menos de 10 repeticiones).
            <br />
            <span className="font-mono bg-white px-2 py-1 rounded text-[#2563EB] border border-gray-200 inline-block mt-1 text-sm">
              1RM = Peso / (1.0278 - (0.0278 × Repeticiones))
            </span>
          </p>
          <p>
            <strong>2. Fórmula de Epley:</strong> Formulada por Boyd Epley, es sumamente popular por su sencillez y fiabilidad en levantamientos pesados de tren inferior y press de banca.
            <br />
            <span className="font-mono bg-white px-2 py-1 rounded text-[#2563EB] border border-gray-200 inline-block mt-1 text-sm">
              1RM = Peso × (1 + (0.0333 × Repeticiones))
            </span>
          </p>
        </div>

        <h2 className="text-2xl font-black text-[#111827]">Cómo aplicar tu 1RM para programar tus Entrenamientos</h2>
        <p>
          Una vez que obtengas tu estimación, el sistema te desglosará una tabla detallada de porcentajes. Estos porcentajes son vitales para adaptar tu rutina a tus metas específicas:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100 text-sm">
            <h4 className="font-bold text-[#2563EB] mb-1">Hipertrofia Muscular</h4>
            <p className="text-gray-600">Trabaja habitualmente en rangos del 65% al 80% de tu 1RM, equivalentes a realizar entre 8 y 12 repeticiones controladas con alto nivel de esfuerzo.</p>
          </div>
          <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100 text-sm">
            <h4 className="font-bold text-emerald-700 mb-1">Fuerza Máxima</h4>
            <p className="text-gray-600">Estructura mesociclos entrenando entre el 80% y el 95% de tu 1RM, realizando series cortas de 1 a 5 repeticiones con amplios tiempos de descanso.</p>
          </div>
          <div className="bg-purple-50/50 p-5 rounded-2xl border border-purple-100 text-sm">
            <h4 className="font-bold text-purple-700 mb-1">Resistencia de Fuerza</h4>
            <p className="text-gray-600">Trabaja a intensidades más bajas, inferiores al 60% de tu 1RM, realizando series con volúmenes superiores a las 15 repeticiones.</p>
          </div>
        </div>
      </article>
    </div>
  );
}
