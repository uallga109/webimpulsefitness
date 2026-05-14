import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import EjerciciosCasaClient from "@/components/rutinas/EjerciciosCasaClient";

export const metadata: Metadata = {
  title: "Ejercicios para Casa y Calistenia | Impulse Fitness",
  description:
    "Rutinas de entrenamiento caseras efectivas. Trabaja con peso corporal, bandas elásticas y mancuernas para conseguir un físico tonificado.",
};

export default function EjerciciosCasaPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      {/* Migas de pan y Cabecera */}
      <div>
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-2">
          <Link href="/rutinas" className="hover:text-[#2563EB] transition-colors">
            Rutinas
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Casa</span>
        </nav>

        <header className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight">
            Ejercicios para Casa
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-600 max-w-2xl">
            Transforma cualquier habitación en tu zona de entrenamiento con estas 12 modalidades 
            diseñadas para maximizar resultados con el mínimo material.
          </p>
        </header>
      </div>

      {/* Componente Cliente con Filtros y Grid */}
      <EjerciciosCasaClient />
    </div>
  );
}
