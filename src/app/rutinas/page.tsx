import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rutinas de Entrenamiento y Generador Automático | Impulse Fitness",
  description:
    "Planes de entrenamiento estructurados para hipertrofia, fuerza y tonificación en gimnasio o casa. Utiliza nuestro generador de rutinas inteligente.",
};

export default function RutinasPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      {/* Cabecera grande y limpia */}
      <header className="border-b border-gray-200 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Área Principal</span>
          <span>•</span>
          <span>Planes y Ejercicios</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Rutinas de Entrenamiento
        </h1>
        {/* Texto normal (Body): ideal de 16px a 18px */}
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
          Encuentra progresiones basadas en evidencia científica para maximizar tus
          ganancias musculares o crea tu plan a medida en segundos.
        </p>
      </header>

      {/* Tarjeta principal destacada: Generador */}
      <section className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-xl">
          {/* Color secundario: Verde fitness suave (#22C55E) para indicar éxito/rutina destacada */}
          <span className="text-xs font-bold text-[#22C55E] bg-green-50 px-2.5 py-1 rounded-md border border-green-100">
            Herramienta Destacada
          </span>
          <h2 className="text-2xl font-black text-[#111827] mt-3 mb-2">
            Generador Automático de Rutinas
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
            Selecciona tu nivel, los días que deseas entrenar por semana y tus
            objetivos. Nuestro sistema configurará la división perfecta (Push-Pull-Legs,
            Torso-Pierna, FullBody) al instante.
          </p>
          
          {/* Color primario: Azul eléctrico moderado (#2563EB) */}
          <Link
            href="/rutinas/generador"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-base transition-colors shadow-sm"
          >
            Iniciar Generador →
          </Link>
        </div>
      </section>

      {/* Grid de divisiones en formato Cards con sombra suave y radios de 16px a 24px */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-[#111827]">Ejercicios para Gimnasios</h3>
            <p className="mt-2 text-base text-gray-600 leading-relaxed">
              Guías detalladas de técnica para ejercicios con barras libres, mancuernas,
              poleas y máquinas guiadas. Prevención de lesiones y biomecánica.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100">
            <Link
              href="/rutinas/gimnasio"
              className="text-base font-bold text-[#2563EB] hover:underline"
            >
              Ver rutinas de gimnasio →
            </Link>
          </div>
        </article>

        <article className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-[#111827]">Ejercicios para Casa</h3>
            <p className="mt-2 text-base text-gray-600 leading-relaxed">
              Rutinas con peso corporal (calistenia), bandas elásticas y equipamiento
              mínimo. Adaptables a cualquier espacio y nivel de condición física.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100">
            <Link
              href="/rutinas/casa"
              className="text-base font-bold text-[#2563EB] hover:underline"
            >
              Ver rutinas caseras →
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
