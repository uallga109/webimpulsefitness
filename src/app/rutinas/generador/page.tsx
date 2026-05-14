import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import GeneradorClient from "@/components/rutinas/GeneradorClient";

export const metadata: Metadata = {
  title: "Generador Automático de Rutinas | Impulse Fitness",
  description:
    "Crea tu rutina de gimnasio o casa personalizada al instante. Elige tus días de entrenamiento, objetivo de hipertrofia o fuerza y obtén tu distribución óptima.",
};

export default function GeneradorRutinasPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      {/* Migas de pan y Cabecera */}
      <div>
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-2">
          <Link href="/rutinas" className="hover:text-[#2563EB] transition-colors">
            Rutinas
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Generador Automático</span>
        </nav>

        <header className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight">
            Generador Automático de Rutinas
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-600 max-w-2xl">
            Nuestra inteligencia de distribución configurará los mejores ejercicios
            y volumen por sesión adaptados a tu disponibilidad semanal.
          </p>
        </header>
      </div>

      {/* Componente Cliente Interactivo con la nueva estética clara y tarjetas de 16px-24px */}
      <GeneradorClient />
    </div>
  );
}
