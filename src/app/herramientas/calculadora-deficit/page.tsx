import React from "react";
import type { Metadata } from "next";
import CalcDeficitClient from "@/components/herramientas/CalcDeficitClient";

export const metadata: Metadata = {
  title: "Calculadora de Déficit Calórico | Impulse Fitness",
  description: "Calcula el déficit calórico necesario para perder grasa de forma eficiente y sostenible sin comprometer tu masa muscular.",
};

export default function CalcDeficitPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      <header className="border-b border-gray-200 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Herramientas</span>
          <span>•</span>
          <span>Nutrición</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Calculadora de Déficit Calórico
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
          Ajusta tu ingesta energética para promover la pérdida de grasa corporal manteniendo
          el máximo rendimiento posible.
        </p>
      </header>

      <div className="py-8">
        <CalcDeficitClient />
      </div>
    </div>
  );
}
