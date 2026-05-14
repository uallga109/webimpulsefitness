import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buscador y Comparador de Gimnasios | Impulse Fitness Marketing",
  description:
    "Encuentra gimnasios filtrando por precio, cercanía y equipamiento. Opiniones reales, horarios y pases de prueba gratuitos en centros deportivos.",
};

export default function BuscadorGimnasiosPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      {/* Migas de pan y Cabecera */}
      <div>
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-2">
          <Link href="/gimnasios" className="hover:text-[#2563EB] transition-colors">
            Gimnasios
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Buscador B2C</span>
        </nav>

        <header className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight">
            Directorio de Gimnasios
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-600 max-w-2xl">
            Compara instalaciones certificadas, reserva pases de día y encuentra
            la mejor tarifa garantizada.
          </p>
        </header>
      </div>

      {/* Barra de Filtros Rápida y Limpia */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex flex-wrap items-center gap-2">
        <span className="text-sm font-bold text-gray-500 mr-2">Especialidad:</span>
        {["Todos", "Musculación pesada", "CrossFit", "Boutique", "Artes Marciales"].map((tag, idx) => (
          <button
            key={idx}
            className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-colors ${
              idx === 0
                ? "bg-blue-50 text-[#2563EB] font-bold border border-blue-100"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Listado en formato Tarjetas (Cards) estrictas: Imagen arriba, información clara abajo */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            name: "Iron Base Gym & Barbell Club",
            city: "Madrid",
            rating: "4.9",
            reviews: "142",
            type: "Musculación Pesada",
            desc: "Equipado con racks de competición, barras Eleiko y zona de peso libre sin restricciones de caída.",
            price: "Desde 45€/mes",
          },
          {
            name: "Box Pro CrossFit Antigravity",
            city: "Barcelona",
            rating: "4.8",
            reviews: "98",
            type: "CrossFit Oficial",
            desc: "Instalaciones amplias con material Rogue, clases reducidas y entrenadores nivel L2 y L3.",
            price: "Desde 75€/mes",
          },
          {
            name: "Aqua & Pilates Premium Center",
            city: "Valencia",
            rating: "4.7",
            reviews: "64",
            type: "Boutique / Salud",
            desc: "Piscina climatizada, máquinas Reformer de última generación y ambiente enfocado en el bienestar integral.",
            price: "Desde 60€/mes",
          },
          {
            name: "Titanium Strength Hub",
            city: "Sevilla",
            rating: "4.9",
            reviews: "210",
            type: "Powerlifting & SBD",
            desc: "Discos calibrados, bancos profesionales de powerlifting e instructores con récords nacionales.",
            price: "Desde 50€/mes",
          },
          {
            name: "Urban Fit Express 24/7",
            city: "Madrid",
            rating: "4.5",
            reviews: "320",
            type: "Comercial / Cadena",
            desc: "Acceso ininterrumpido mediante huella dactilar, maquinaria guiada de alta gama y zona cardiovascular.",
            price: "Desde 29.90€/mes",
          },
          {
            name: "Zenith MMA & Striking Academy",
            city: "Barcelona",
            rating: "4.9",
            reviews: "88",
            type: "Artes Marciales",
            desc: "Jaula oficial de medidas reglamentarias, tatami premium y clases de Brazilian Jiu-Jitsu y Muay Thai.",
            price: "Desde 65€/mes",
          },
        ].map((gym, idx) => (
          <article
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
          >
            {/* Imagen superior representativa limpia */}
            <div className="h-44 bg-gray-50 border-b border-gray-100 p-4 flex flex-col justify-between relative">
              <div className="flex items-center justify-between z-10">
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-white text-[#111827] shadow-sm">
                  {gym.city}
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 text-[#2563EB] border border-blue-100">
                  {gym.type}
                </span>
              </div>
              
              {/* Representación vectorial decorativa en el centro */}
              <div className="absolute inset-0 flex items-center justify-center opacity-40">
                <span className="text-6xl">🏋️‍♂️</span>
              </div>

              {/* Color secundario: Verde fitness suave (#22C55E) para indicar éxito/puntuación */}
              <div className="z-10 self-end bg-green-50 px-2 py-1 rounded-lg border border-green-100 flex items-center space-x-1">
                <span className="text-xs text-[#22C55E]">★</span>
                <span className="text-xs font-black text-[#22C55E]">{gym.rating}</span>
                <span className="text-[10px] text-gray-500">({gym.reviews})</span>
              </div>
            </div>

            {/* Información clara abajo con texto normal amplio de 16px a 18px */}
            <div className="p-5 flex-1 flex flex-col justify-between bg-white">
              <div>
                <h3 className="text-lg font-bold text-[#111827] line-clamp-1">
                  {gym.name}
                </h3>
                <p className="mt-2 text-base text-gray-600 leading-relaxed line-clamp-3">
                  {gym.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-gray-400 block font-medium uppercase">Tarifa base</span>
                  <span className="text-base font-black text-[#111827]">{gym.price}</span>
                </div>

                {/* Color primario: Azul eléctrico moderado (#2563EB) para botones y enlaces */}
                <button className="text-sm font-bold text-[#2563EB] hover:underline">
                  Ver detalle →
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
