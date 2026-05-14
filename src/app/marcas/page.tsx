import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marcas Fitness y Equipamiento Deportivo | Impulse Fitness",
  description:
    "Directorio de marcas líderes en nutrición deportiva, ropa de entrenamiento y equipamiento profesional para gimnasios e instalaciones en casa.",
};

export default function MarcasPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      {/* Cabecera grande y limpia */}
      <header className="border-b border-gray-200 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Área Principal</span>
          <span>•</span>
          <span>Directorio Comercial</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Marcas Destacadas
        </h1>
        {/* Texto normal (Body): ideal de 16px a 18px */}
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
          Explora los fabricantes líderes en suplementación de grado farmacéutico,
          maquinaria biomecánica y accesorios certificados para competición.
        </p>
      </header>

      {/* Grid de Marcas en formato Tarjetas (Cards) con sombra suave, hover ligero y esquinas de 16px a 24px */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            name: "Eleiko Sport",
            cat: "Equipamiento Pesado",
            catClass: "bg-blue-50 text-[#2563EB]",
            desc: "Barras y discos con certificación IWF e IPF. El estándar de oro mundial en halterofilia y powerlifting profesional.",
          },
          {
            name: "Rogue Fitness",
            cat: "CrossFit & Fuerza",
            catClass: "bg-purple-50 text-purple-600",
            desc: "Estructuras modulares, racks de máxima resistencia y equipamiento oficial para competiciones de alto rendimiento.",
          },
          {
            name: "HSN Labs",
            cat: "Nutrición Deportiva",
            catClass: "bg-green-50 text-[#22C55E]",
            desc: "Fabricación propia con sello IFS Food y materia prima patentada (Creapure®, Lacprodan®) con insuperable relación calidad-precio.",
          },
          {
            name: "Technogym",
            cat: "Cardio & Biomecánica",
            catClass: "bg-amber-50 text-amber-600",
            desc: "Diseño italiano premium y conectividad inteligente orientada a centros boutique e instalaciones de salud exclusivas.",
          },
          {
            name: "SBD Apparel",
            cat: "Protección & Soportes",
            catClass: "bg-red-50 text-red-600",
            desc: "Rodilleras, coderas y cinturones de palanca aprobados para competición oficial de powerlifting internacional.",
          },
          {
            name: "Gymshark",
            cat: "Indumentaria",
            catClass: "bg-gray-50 text-[#111827]",
            desc: "Ropa técnica sin costuras (seamless) diseñada para optimizar la movilidad y realzar la estética del físico trabajado.",
          },
        ].map((brand, idx) => (
          <article
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between"
          >
            <div>
              <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${brand.catClass}`}>
                {brand.cat}
              </span>
              <h2 className="text-lg font-bold text-[#111827] mt-3">{brand.name}</h2>
              {/* Texto normal (Body): ideal de 16px a 18px */}
              <p className="mt-2 text-base text-gray-600 leading-relaxed">{brand.desc}</p>
            </div>

            {/* Color primario: Azul eléctrico moderado (#2563EB) */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-400 font-medium">Distribuidor oficial</span>
              <button className="text-xs font-bold text-[#2563EB] hover:underline">
                Ver catálogo →
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
