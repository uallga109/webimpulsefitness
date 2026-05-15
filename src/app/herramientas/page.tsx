import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Herramientas Fitness y Calculadoras Deportivas | Impulse Fitness",
  description:
    "Colección completa de herramientas SEO: calculadoras de calorías, IMC, macronutrientes, VO2 Max, 1RM y más para optimizar tu rendimiento.",
};

const fitnessTools = [
  {
    title: "Calculadora de Calorías",
    description: "Estima tu gasto energético diario total (TDEE) y fija tus objetivos.",
    href: "/dietas/calculadora-calorias",
    tag: "Nutrición",
    tagColor: "bg-blue-50 text-blue-600",
    image: "/images/herramientas/calculadora_calorias_macros.png"
  },
  {
    title: "Calculadora de IMC",
    description: "Calcula tu Índice de Masa Corporal para conocer tu estado de peso actual.",
    href: "/herramientas/calculadora-imc",
    tag: "Salud",
    tagColor: "bg-green-50 text-green-600",
    image: "/images/herramientas/calculadora_imc_grasa.png"
  },
  {
    title: "Calculadora de Proteína Diaria",
    description: "Asegura tu ingesta proteica óptima según tu peso y nivel de actividad.",
    href: "/dietas/calculadora-proteinas",
    tag: "Nutrición",
    tagColor: "bg-purple-50 text-purple-600",
    image: "/images/noticias/batido_post_entreno.png"
  },
  {
    title: "Calculadora de Déficit Calórico",
    description: "Define el recorte energético exacto para perder grasa de forma saludable.",
    href: "/herramientas/calculadora-deficit",
    tag: "Nutrición",
    tagColor: "bg-red-50 text-red-600",
    image: "/images/herramientas/calculadora_deficit.png"
  },
  {
    title: "Calculadora de Masa Muscular",
    description: "Estima tu porcentaje de masa magra y potencial genético.",
    href: "/herramientas/calculadora-masa-muscular",
    tag: "Fitness",
    tagColor: "bg-indigo-50 text-indigo-600",
    image: "/images/herramientas/calculadora_masa_muscular_dexa.png"
  },
  {
    title: "Calculadora de Grasa Corporal",
    description: "Mide tu porcentaje de grasa mediante pliegues o perímetros.",
    href: "/herramientas/calculadora-grasa-corporal",
    tag: "Fitness",
    tagColor: "bg-yellow-50 text-yellow-600",
    image: "/images/herramientas/calculadora_grasa_corporal_caliper.png"
  },
  {
    title: "Calculadora de 1RM",
    description: "Estima tu repetición máxima teórica para programar tus cargas.",
    href: "/herramientas/calculadora-1rm",
    tag: "Entrenamiento",
    tagColor: "bg-gray-100 text-gray-800",
    image: "/images/herramientas/calculadora_1rm_fuerza.png"
  },
  {
    title: "Calculadora de Macros",
    description: "Distribuye proteínas, grasas y carbohidratos según tu objetivo.",
    href: "/herramientas/calculadora-macros",
    tag: "Nutrición",
    tagColor: "bg-blue-50 text-blue-600",
    image: "/images/herramientas/calculadora_macros_pie.png"
  },
  {
    title: "Calculadora Ritmo Running",
    description: "Calcula tus tiempos por kilómetro y ritmos de carrera.",
    href: "/herramientas/calculadora-ritmo-running",
    tag: "Deportes",
    tagColor: "bg-orange-50 text-orange-600",
    image: "/images/herramientas/calculadora_running_vo2.png"
  },
  {
    title: "Calculadora VO2 Max",
    description: "Estima tu capacidad aeróbica máxima con tests indirectos.",
    href: "/herramientas/calculadora-vo2-max",
    tag: "Deportes",
    tagColor: "bg-cyan-50 text-cyan-600",
    image: "/images/herramientas/calculadora_vo2_scientific.png"
  },
  {
    title: "Calculadora Hidratación",
    description: "Determina la cantidad de agua necesaria según tu tasa de sudoración.",
    href: "/herramientas/calculadora-hidratacion",
    tag: "Salud",
    tagColor: "bg-blue-50 text-blue-500",
    image: "/images/herramientas/calculadora_hidratacion_agua.png"
  },
  {
    title: "Calculadora Gasto Ciclismo",
    description: "Calcula las calorías quemadas en tus rutas de bici por potencia.",
    href: "/herramientas/calculadora-gasto-ciclismo",
    tag: "Deportes",
    tagColor: "bg-emerald-50 text-emerald-600",
    image: "/images/herramientas/calculadora_ciclismo_vatios.png"
  },
];

const sportsTools = [
  {
    title: "Calculadora Ritmo Running",
    description: "Tiempos por kilómetro, parciales y predicción de marcas.",
    href: "/herramientas/calculadora-ritmo-running",
    tag: "Running",
    tagColor: "bg-orange-50 text-orange-600",
    image: "/images/herramientas/calculadora_running_vo2.png"
  },
  {
    title: "Calculadora VO2 Max",
    description: "Medición de potencia aeróbica y capacidad cardiovascular.",
    href: "/herramientas/calculadora-vo2-max",
    tag: "Rendimiento",
    tagColor: "bg-cyan-50 text-cyan-600",
    image: "/images/herramientas/calculadora_vo2_scientific.png"
  },
  {
    title: "Calculadora Hidratación",
    description: "Reposición de líquidos y electrolitos para entrenos largos.",
    href: "/herramientas/calculadora-hidratacion",
    tag: "Resistencia",
    tagColor: "bg-blue-50 text-blue-500",
    image: "/images/herramientas/calculadora_hidratacion_agua.png"
  },
  {
    title: "Calculadora Gasto Ciclismo",
    description: "Metabolismo y gasto energético en ciclismo de carretera/MTB.",
    href: "/herramientas/calculadora-gasto-ciclismo",
    tag: "Ciclismo",
    tagColor: "bg-emerald-50 text-emerald-600",
    image: "/images/herramientas/calculadora_ciclismo_vatios.png"
  },
];

export default function HerramientasPage() {
  return (
    <div className="flex flex-col space-y-12 animate-fadeIn mb-12">
      {/* Cabecera grande y limpia */}
      <header className="border-b border-gray-200 pb-8">
        <div className="inline-flex items-center space-x-2 text-sm font-bold text-[#2563EB] uppercase tracking-wider mb-3">
          <span>Herramientas SEO</span>
          <span>•</span>
          <span>Recursos de Rendimiento</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111827] tracking-tight">
          Calculadoras y Utilidades
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed">
          Optimiza cada detalle de tu preparación con nuestras herramientas especializadas para atletas,
          culturistas y entusiastas del deporte.
        </p>
      </header>

      {/* Sección FITNESS */}
      <section>
        <div className="flex items-center space-x-4 mb-8">
          <h2 className="text-3xl font-black text-[#111827]">Fitness</h2>
          <div className="h-px flex-1 bg-gray-100"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fitnessTools.map((tool, idx) => (
            <article key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col group overflow-hidden">
              {/* Imagen de la herramienta */}
              <div className="h-40 overflow-hidden relative">
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm ${tool.tagColor}`}>
                    {tool.tag}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#2563EB] transition-colors line-clamp-1">
                  {tool.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">
                  {tool.description}
                </p>
                
                <div className="mt-5 pt-4 border-t border-gray-50">
                  <Link href={tool.href} className="text-sm font-bold text-[#2563EB] hover:underline inline-flex items-center space-x-1">
                    <span>Acceder</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Sección DEPORTES */}
      <section>
        <div className="flex items-center space-x-4 mb-8">
          <h2 className="text-3xl font-black text-[#111827]">Deportes</h2>
          <div className="h-px flex-1 bg-gray-100"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sportsTools.map((tool, idx) => (
            <article key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col group overflow-hidden">
              {/* Imagen de la herramienta */}
              <div className="h-40 overflow-hidden relative">
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm ${tool.tagColor}`}>
                    {tool.tag}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#2563EB] transition-colors line-clamp-1">
                  {tool.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">
                  {tool.description}
                </p>
                
                <div className="mt-5 pt-4 border-t border-gray-50">
                  <Link href={tool.href} className="text-sm font-bold text-[#2563EB] hover:underline inline-flex items-center space-x-1">
                    <span>Acceder</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}


