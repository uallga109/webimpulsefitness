import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deportes de Fuerza y Disciplinas Fitness | Impulse Fitness",
  description:
    "Catálogo de disciplinas y deportes asociados. Powerlifting, Halterofilia, CrossFit, Culturismo Natural, Calistenia y Strongman.",
};

export default function DeportesPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      {/* Cabecera grande y limpia */}
      <header className="border-b border-gray-200 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Área Principal</span>
          <span>•</span>
          <span>Disciplinas y Reglamentos</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Deportes y Especialidades
        </h1>
        {/* Texto normal (Body): ideal de 16px a 18px */}
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
          Conoce los orígenes, reglamentaciones oficiales y exigencias biomecánicas
          de los principales deportes de fuerza y acondicionamiento físico.
        </p>
      </header>

      {/* Grid de Deportes en formato Tarjetas (Cards) con sombra suave, hover ligero y esquinas de 16px a 24px */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            name: "Powerlifting",
            focus: "Fuerza Máxima (1RM)",
            focusClass: "bg-blue-50 text-[#2563EB]",
            desc: "Deporte centrado en levantar el máximo peso posible en tres movimientos estrictos: Sentadilla, Press de Banca y Peso Muerto.",
          },
          {
            name: "Halterofilia",
            focus: "Potencia & Explosividad",
            focusClass: "bg-purple-50 text-purple-600",
            desc: "Deporte olímpico que exige una técnica depurada y velocidad suprema para ejecutar la Arrancada (Snatch) y el Dos Tiempos (Clean & Jerk).",
          },
          {
            name: "CrossFit",
            focus: "Acondicionamiento Mixto",
            focusClass: "bg-amber-50 text-amber-600",
            desc: "Movimientos funcionales constantemente variados ejecutados a alta intensidad. Engloba gimnasia, levantamientos y resistencia cardiovascular.",
          },
          {
            name: "Culturismo Natural",
            focus: "Estética & Simetría",
            focusClass: "bg-green-50 text-[#22C55E]",
            desc: "Búsqueda del máximo desarrollo muscular y bajo porcentaje graso de forma estrictamente libre de sustancias dopantes bajo controles antidopaje.",
          },
          {
            name: "Calistenia & Street Workout",
            focus: "Control Corporal",
            focusClass: "bg-red-50 text-red-600",
            desc: "Dominio de la gravedad utilizando el propio peso en barras estáticas y anillas. Destacan elementos estáticos como el Front Lever o la Planche.",
          },
          {
            name: "Strongman",
            focus: "Fuerza Bruta & Movilidad",
            focusClass: "bg-gray-50 text-[#111827]",
            desc: "Pruebas extremas no estandarizadas que implican arrastrar camiones, cargar piedras del Atlas, y realizar paseos del granjero con pesos máximos.",
          },
        ].map((sport, idx) => (
          <article
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between"
          >
            <div>
              <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${sport.focusClass}`}>
                {sport.focus}
              </span>
              <h2 className="text-lg font-bold text-[#111827] mt-3">{sport.name}</h2>
              {/* Texto normal (Body): ideal de 16px a 18px */}
              <p className="mt-2 text-base text-gray-600 leading-relaxed">{sport.desc}</p>
            </div>

            {/* Color primario: Azul eléctrico moderado (#2563EB) */}
            <div className="mt-6 pt-4 border-t border-gray-100 text-right">
              <button className="text-xs font-bold text-[#2563EB] hover:underline">
                Ver manual técnico →
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
