import React from "react";
import type { Metadata } from "next";
import CalcMasaMuscularClient from "@/components/herramientas/CalcMasaMuscularClient";

export const metadata: Metadata = {
  title: "Calculadora de Masa Muscular y FFMI | Impulse Fitness",
  description: "Descubre tu masa magra y tu índice FFMI. Una herramienta esencial para culturistas y atletas de fuerza que buscan medir su progreso real.",
};

export default function CalcMasaMuscularPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      <header className="border-b border-gray-200 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Herramientas</span>
          <span>•</span>
          <span>Entrenamiento</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Calculadora de Masa Muscular
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
          Analiza tu composición corporal actual y conoce tu Índice de Masa Libre de Grasa (FFMI)
          para evaluar tu potencial genético natural.
        </p>
      </header>

      <div className="py-8">
        <CalcMasaMuscularClient />
      </div>
    </div>
  );
}
