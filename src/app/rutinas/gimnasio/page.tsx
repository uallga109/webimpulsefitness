import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ejercicios para Gimnasio y Musculación | Impulse Fitness",
  description:
    "Técnica y biomecánica de los mejores ejercicios de hipertrofia y fuerza en gimnasio. Sentadillas, press banca, peso muerto y rutinas divididas.",
};

export default function EjerciciosGimnasioPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      {/* Migas de pan y Cabecera */}
      <div>
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-2">
          <Link href="/rutinas" className="hover:text-[#2563EB] transition-colors">
            Rutinas
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Gimnasio</span>
        </nav>

        <header className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight">
            Ejercicios para Gimnasio
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-600 max-w-2xl">
            Aprende la correcta ejecución biomecánica para estimular el músculo al
            máximo y evitar molestias articulares.
          </p>
        </header>
      </div>

      {/* Grid de Grupos Musculares en formato Tarjetas (Cards) con sombra suave, hover ligero y esquinas de 16px a 24px */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Pectoral", desc: "Presses y aperturas en todos los ángulos", tag: "Empuje" },
          { name: "Dorsal & Espalda", desc: "Jalones, remos libres y dominadas", tag: "Tracción" },
          { name: "Pierna (Cuádriceps/Isquios)", desc: "Sentadilla, prensa y peso muerto rumano", tag: "Tren Inferior" },
          { name: "Hombro", desc: "Press militar y elevaciones laterales", tag: "Empuje" },
          { name: "Brazos (Bíceps/Tríceps)", desc: "Curls concentrados y extensiones en polea", tag: "Aislado" },
          { name: "Core & Abdomen", desc: "Estabilidad isométrica y trabajo pesado", tag: "Estabilidad" },
        ].map((item, idx) => (
          <article
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between"
          >
            <div>
              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 text-[#2563EB]">
                {item.tag}
              </span>
              <h3 className="text-lg font-bold text-[#111827] mt-3">{item.name}</h3>
              {/* Texto normal (Body): ideal de 16px a 18px */}
              <p className="mt-2 text-base text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
            
            {/* Color primario: Azul eléctrico moderado (#2563EB) */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <button className="text-sm font-bold text-[#2563EB] hover:underline flex items-center space-x-1">
                <span>Ver biblioteca de ejercicios</span>
                <span>→</span>
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
