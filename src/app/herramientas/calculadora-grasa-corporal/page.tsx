import React from "react";
import type { Metadata } from "next";
import CalcGrasaCorporalClient from "@/components/herramientas/CalcGrasaCorporalClient";

export const metadata: Metadata = {
  title: "Calculadora de Grasa Corporal (US Navy) | Impulse Fitness",
  description: "Estima tu porcentaje de grasa corporal utilizando el método de la Marina de EE.UU. Una forma sencilla y científica de medir tu composición corporal.",
};

export default function CalcGrasaCorporalPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      <header className="border-b border-gray-200 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Herramientas</span>
          <span>•</span>
          <span>Salud</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Calculadora de Grasa Corporal
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
          Determina tu porcentaje de tejido adiposo mediante perímetros corporales para llevar
          un control preciso de tu recomposición corporal.
        </p>
      </header>

      <div className="py-8">
        <CalcGrasaCorporalClient />
      </div>
    </div>
  );
}
