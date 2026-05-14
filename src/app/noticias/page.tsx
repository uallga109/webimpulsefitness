import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Noticias, Literatura Científica y Tendencias | Impulse Fitness",
  description:
    "Análisis de las últimas investigaciones publicadas sobre hipertrofia, nutrición deportiva, mercado B2B y tendencias globales de entrenamiento.",
};

export default function NoticiasPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      {/* Cabecera grande y limpia */}
      <header className="border-b border-gray-200 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Área Principal</span>
          <span>•</span>
          <span>Actualidad y Divulgación</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Noticias y Evidencia Científica
        </h1>
        {/* Texto normal (Body): ideal de 16px a 18px */}
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
          Desglosamos papers recientes y analizamos el impacto económico de los
          nuevos modelos de negocio en la industria del fitness internacional.
        </p>
      </header>

      {/* Grid de Noticias en formato Tarjetas (Cards) con sombra suave, hover ligero y esquinas de 16px a 24px */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "Volumen vs Intensidad: Meta-análisis reciente sobre hipertrofia",
            cat: "Ciencia del Deporte",
            catClass: "bg-blue-50 text-[#2563EB]",
            date: "12 Mayo 2026",
            readTime: "6 min de lectura",
            desc: "Una revisión exhaustiva de 24 estudios confirma que el volumen semanal de series extremas (+20 por grupo) no ofrece ventajas significativas frente a un volumen moderado (10-15 series) llevado cerca del fallo muscular real.",
          },
          {
            title: "El auge del modelo Híbrido en Entrenadores Personales",
            cat: "Mercado B2B",
            catClass: "bg-green-50 text-[#22C55E]",
            date: "8 Mayo 2026",
            readTime: "4 min de lectura",
            desc: "Estadísticas del último trimestre muestran que los profesionales que combinan 1 sesión presencial técnica al mes con seguimiento semanal 100% online han duplicado sus ingresos y maximizado la adherencia de sus clientes.",
          },
          {
            title: "Crononutrición: ¿Importa la ventana anabólica post-entreno?",
            cat: "Nutrición",
            catClass: "bg-purple-50 text-purple-600",
            date: "3 Mayo 2026",
            readTime: "5 min de lectura",
            desc: "Desmitificamos la necesidad imperiosa de tomar el batido de proteínas inmediatamente al soltar las pesas. La ingesta total diaria de macronutrientes sigue siendo el factor de primer orden en la recomposición corporal.",
          },
          {
            title: "La Inteligencia Artificial aplicada al control de fatiga (VBT)",
            cat: "Tecnología",
            catClass: "bg-amber-50 text-amber-600",
            date: "28 Abril 2026",
            readTime: "7 min de lectura",
            desc: "Cómo los acelerómetros de los smartphones y las cámaras con visión artificial están reemplazando las estimaciones subjetivas de RIR/RPE midiendo la pérdida de velocidad concéntrica en tiempo real.",
          },
        ].map((news, idx) => (
          <article
            key={idx}
            className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${news.catClass}`}>
                  {news.cat}
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  {news.date}
                </span>
              </div>
              <h2 className="text-xl font-bold text-[#111827] mt-4 hover:text-[#2563EB] transition-colors cursor-pointer">
                {news.title}
              </h2>
              {/* Texto normal (Body): ideal de 16px a 18px */}
              <p className="mt-3 text-base text-gray-600 leading-relaxed">
                {news.desc}
              </p>
            </div>

            {/* Color primario: Azul eléctrico moderado (#2563EB) */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-400 font-medium">{news.readTime}</span>
              <button className="text-sm font-bold text-[#2563EB] hover:underline">
                Leer análisis completo →
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
