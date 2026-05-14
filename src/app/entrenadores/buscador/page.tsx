import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buscador de Entrenadores Personales | Impulse Fitness Marketing",
  description:
    "Directorio de entrenadores personales presenciales y online. Compara tarifas, lee opiniones verificadas y contrata planes de entrenamiento personalizados.",
};

export default function BuscadorEntrenadoresPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      {/* Migas de pan y Cabecera */}
      <div>
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-2">
          <Link href="/entrenadores" className="hover:text-[#2563EB] transition-colors">
            Entrenadores
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Buscador B2C</span>
        </nav>

        <header className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight">
            Directorio de Entrenadores Personales
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-600 max-w-2xl">
            Encuentra al profesional idóneo para guiar tu proceso con metodologías
            basadas en la última literatura científica.
          </p>
        </header>
      </div>

      {/* Barra Rápida de Filtros */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex flex-wrap items-center gap-2">
        <span className="text-sm font-bold text-gray-500 mr-2">Modalidad:</span>
        {["Ambas", "Asesoría Online", "Presencial (Gimnasio/Domicilio)"].map((tag, idx) => (
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

      {/* Listado de Tarjetas (Cards) con sombra suave, hover ligero y esquinas de 16px a 24px */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            name: "Carlos Fisio & Trainer",
            specialty: "Hipertrofia & Readaptación",
            rating: "5.0",
            reviews: "94",
            modality: "Presencial / Online",
            desc: "Fisioterapeuta y graduado en CAFYD. Planificación con control exhaustivo de fatiga y selección de ejercicios sin dolor.",
            price: "Desde 55€ / sesión",
          },
          {
            name: "Marta Silva Strength",
            specialty: "Powerlifting & Fuerza",
            rating: "4.9",
            reviews: "76",
            modality: "Asesoría Online",
            desc: "Especialista en sobrecarga progresiva y biomecánica femenina. Seguimiento semanal en vídeo y ajuste diario de RIR/RPE.",
            price: "Desde 80€ / mes",
          },
          {
            name: "David Antón Performance",
            specialty: "Pérdida de Grasa",
            rating: "4.8",
            reviews: "112",
            modality: "Presencial (Madrid)",
            desc: "Enfoque en adherencia a largo plazo, aumento del NEAT y entrenamientos dinámicos orientados a la salud metabólica.",
            price: "Desde 45€ / sesión",
          },
          {
            name: "Elena Rostova Academy",
            specialty: "Calistenia & Movilidad",
            rating: "4.9",
            reviews: "53",
            modality: "Presencial / Online",
            desc: "Atleta internacional. Progresiones adaptadas para conseguir tus primeras dominadas, muscle-ups y ganar flexibilidad real.",
            price: "Desde 50€ / sesión",
          },
          {
            name: "Javier Méndez Elite",
            specialty: "Oposiciones & Rendimiento",
            rating: "4.7",
            reviews: "89",
            modality: "Presencial (Sevilla)",
            desc: "Preparación física específica para pruebas de Policía y Bomberos. Planificación milimétrica de picos de forma.",
            price: "Desde 60€ / sesión",
          },
          {
            name: "David G. Nutrition & Prep",
            specialty: "Estética & Culturismo Natural",
            rating: "5.0",
            reviews: "134",
            modality: "Asesoría Online",
            desc: "Preparador de atletas WNBF. Enfoque 100% natural basado en el conteo de macros flexible y volumen de entrenamiento óptimo.",
            price: "Desde 90€ / mes",
          },
        ].map((trainer, idx) => (
          <article
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
          >
            {/* Estructura de la Card: Imagen arriba */}
            <div className="h-44 bg-gray-50 border-b border-gray-100 p-4 flex flex-col justify-between relative">
              <div className="flex items-center justify-between z-10">
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-white text-[#111827] shadow-sm">
                  {trainer.modality}
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 text-[#2563EB] border border-blue-100">
                  {trainer.specialty}
                </span>
              </div>

              {/* Decoración gráfica limpia */}
              <div className="absolute inset-0 flex items-center justify-center opacity-40">
                <span className="text-6xl">🏃‍♂️</span>
              </div>

              {/* Color secundario: Verde fitness suave (#22C55E) */}
              <div className="z-10 self-end bg-green-50 px-2 py-1 rounded-lg border border-green-100 flex items-center space-x-1">
                <span className="text-xs text-[#22C55E]">★</span>
                <span className="text-xs font-black text-[#22C55E]">{trainer.rating}</span>
                <span className="text-[10px] text-gray-500">({trainer.reviews})</span>
              </div>
            </div>

            {/* Información clara abajo con texto normal amplio de 16px a 18px */}
            <div className="p-5 flex-1 flex flex-col justify-between bg-white">
              <div>
                <h3 className="text-lg font-bold text-[#111827] line-clamp-1">
                  {trainer.name}
                </h3>
                <p className="mt-2 text-base text-gray-600 leading-relaxed line-clamp-3">
                  {trainer.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-gray-400 block font-medium uppercase">Tarifa de referencia</span>
                  <span className="text-base font-black text-[#111827]">{trainer.price}</span>
                </div>

                {/* Color primario: Azul eléctrico moderado (#2563EB) */}
                <button className="text-sm font-bold text-[#2563EB] hover:underline">
                  Ver perfil →
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
