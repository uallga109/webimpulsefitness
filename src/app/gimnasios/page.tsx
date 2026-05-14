import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gimnasios y Centros Deportivos | Impulse Fitness Marketing",
  description:
    "Directorio premium de gimnasios en España. Encuentra instalaciones de musculación, CrossFit, pilates y artes marciales cerca de ti.",
};

export default function GimnasiosPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      {/* Cabecera grande y limpia */}
      <header className="border-b border-gray-200 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Área Principal</span>
          <span>•</span>
          <span>Directorio de Instalaciones</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Gimnasios y Centros Deportivos
        </h1>
        {/* Texto normal (Body): ideal de 16px a 18px */}
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
          Explora los centros con mejores valoraciones, equipamiento de vanguardia
          y entrenadores cualificados para llevar tu entrenamiento al siguiente nivel.
        </p>
      </header>

      {/* Grid de Subsecciones en formato Cards limpias con bordes redondeados de 16px a 24px */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Imagen superior representativa limpia */}
            <div className="h-40 w-full rounded-2xl bg-blue-50 flex items-center justify-center mb-6 border border-blue-100">
              <span className="text-4xl">🔍</span>
            </div>
            <h2 className="text-2xl font-black text-[#111827]">
              Buscador de Gimnasios
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
              Filtra por ciudad, especialidad (Musculación, CrossFit, Boutique,
              Artes Marciales) y compara tarifas de forma transparente.
            </p>
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-100">
            {/* Color primario: Azul eléctrico moderado (#2563EB) para botones y enlaces */}
            <Link
              href="/gimnasios/buscador"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-base transition-colors shadow-sm"
            >
              Ir al buscador B2C
            </Link>
          </div>
        </article>

        <article className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Imagen superior representativa limpia */}
            <div className="h-40 w-full rounded-2xl bg-green-50 flex items-center justify-center mb-6 border border-green-100">
              <span className="text-4xl">📈</span>
            </div>
            <h2 className="text-2xl font-black text-[#111827]">
              Marketing para Gimnasios
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
              Soluciones B2B para propietarios de centros: estrategias de captación
              de leads, retención de socios y digitalización de servicios.
            </p>
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-100">
            <Link
              href="/gimnasios/marketing"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-[#2563EB] font-bold text-base border border-gray-200 transition-colors"
            >
              Descubrir soluciones B2B
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
