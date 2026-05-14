import React from "react";
import type { Metadata } from "next";
import CalcMacrosClient from "@/components/herramientas/CalcMacrosClient";

export const metadata: Metadata = {
  title: "Calculadora de Macronutrientes | Impulse Fitness",
  description: "Distribuye tus proteínas, grasas y carbohidratos de forma óptima según tus calorías diarias y tus objetivos de composición corporal.",
};

export default function CalcMacrosPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      <header className="border-b border-gray-200 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Herramientas</span>
          <span>•</span>
          <span>Nutrición</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Calculadora de Macros
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
          Una vez conocidas tus calorías totales, el siguiente paso es repartirlas en los tres
          macronutrientes esenciales para maximizar tus resultados.
        </p>
      </header>

      <div className="py-8">
        <CalcMacrosClient />
      </div>
    </div>
  );
}
