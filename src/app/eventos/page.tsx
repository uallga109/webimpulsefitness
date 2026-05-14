import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventos Fitness, Competiciones y Ferias | Impulse Fitness",
  description:
    "Calendario actualizado de competiciones de powerlifting, culturismo natural, CrossFit y ferias del sector fitness en España y Europa.",
};

export default function EventosPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      {/* Cabecera grande y limpia */}
      <header className="border-b border-gray-200 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Área Principal</span>
          <span>•</span>
          <span>Calendario Oficial</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Eventos y Competiciones
        </h1>
        {/* Texto normal (Body): ideal de 16px a 18px */}
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
          Planifica tus picos de rendimiento o asiste como espectador a las citas
          más importantes del circuito competitivo y comercial del año.
        </p>
      </header>

      {/* Grid de Eventos en formato Tarjetas (Cards) con sombra suave, hover ligero y esquinas de 16px a 24px */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Arnold Sports Festival Europe",
            date: "11-13 Octubre 2024",
            location: "Madrid",
            tag: "Feria & Multideporte",
            tagClass: "bg-blue-50 text-[#2563EB]",
            desc: "La mayor convención europea de culturismo, deportes de fuerza y exhibición de las marcas líderes del sector.",
          },
          {
            title: "Campeonato de España AEP",
            date: "Noviembre 2024",
            location: "Valencia",
            tag: "Powerlifting Oficial",
            tagClass: "bg-purple-50 text-purple-600",
            desc: "Competición nacional de sentadilla, press banca y peso muerto bajo reglamento estricto e inspección antidopaje.",
          },
          {
            title: "WNBF Spain Nationals",
            date: "19 Octubre 2024",
            location: "Barcelona",
            tag: "Culturismo Natural",
            tagClass: "bg-green-50 text-[#22C55E]",
            desc: "El certamen de culturismo con mayor prestigio libre de sustancias con polígrafo obligatorio y control WADA.",
          },
          {
            title: "Madrid CrossFit Championship",
            date: "Septiembre 2024",
            location: "Madrid",
            tag: "CrossFit Licensed",
            tagClass: "bg-amber-50 text-amber-600",
            desc: "Atletas de élite internacionales compitiendo durante 3 días consecutivos en pruebas extremas de capacidad aeróbica y fuerza.",
          },
          {
            title: "FIBO Global Fitness",
            date: "10-13 Abril 2025",
            location: "Colonia (Alemania)",
            tag: "Feria Internacional",
            tagClass: "bg-gray-50 text-[#111827]",
            desc: "El punto de encuentro B2B mundial para propietarios de gimnasios, innovaciones tecnológicas y equipamiento.",
          },
          {
            title: "Hyrox Spain Tour",
            date: "12 Abril 2025",
            location: "Málaga",
            tag: "Fitness Racing",
            tagClass: "bg-red-50 text-red-600",
            desc: "La carrera de fitness masiva que combina 8 kilómetros de running intercalados con 8 estaciones funcionales pesadas.",
          },
        ].map((ev, idx) => (
          <article
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${ev.tagClass}`}>
                  {ev.tag}
                </span>
                <span className="text-xs font-bold text-gray-400">
                  📍 {ev.location}
                </span>
              </div>
              <h2 className="text-lg font-bold text-[#111827] mt-3">{ev.title}</h2>
              {/* Texto normal (Body): ideal de 16px a 18px */}
              <p className="mt-2 text-base text-gray-600 leading-relaxed">{ev.desc}</p>
            </div>

            {/* Color primario: Azul eléctrico moderado (#2563EB) */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-[#2563EB] bg-blue-50/50 px-2 py-1 rounded">
                📅 {ev.date}
              </span>
              <button className="text-xs font-bold text-[#2563EB] hover:underline">
                Inscripciones →
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
