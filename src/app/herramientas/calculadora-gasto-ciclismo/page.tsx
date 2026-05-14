import React from "react";
import type { Metadata } from "next";
import CalcCiclismoClient from "@/components/herramientas/CalcCiclismoClient";

export const metadata: Metadata = {
  title: "Calculadora de Gasto Calórico en Ciclismo | Impulse Fitness",
  description: "Estima cuántas calorías quemas en tus rutas de bicicleta según tu peso, la velocidad media y el tiempo de pedaleo.",
};

export default function CalcCiclismoPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      <header className="border-b border-gray-200 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Herramientas</span>
          <span>•</span>
          <span>Deportes</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Calculadora de Gasto Ciclismo
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
          El ciclismo es una de las actividades con mayor gasto energético. Esta herramienta te
          ayuda a estimar las calorías consumidas para planificar tu nutrición post-entreno.
        </p>
      </header>

      <div className="py-8">
        <CalcCiclismoClient />
      </div>
    </div>
  );
}
