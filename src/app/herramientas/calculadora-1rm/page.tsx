import React from "react";
import type { Metadata } from "next";
import Calc1RMClient from "@/components/herramientas/Calc1RMClient";

export const metadata: Metadata = {
  title: "Calculadora de 1RM (Una Repetición Máxima) | Impulse Fitness",
  description: "Calcula tu fuerza máxima teórica sin riesgo de lesión. Obtén tus porcentajes de carga para programar tus mesociclos de fuerza e hipertrofia.",
};

export default function Calc1RMPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      <header className="border-b border-gray-200 pb-8 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="flex-1 order-2 md:order-1">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
            <span>Herramientas</span>
            <span>•</span>
            <span>Entrenamiento</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
            Calculadora de 1RM
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
            Estima la máxima carga que podrías levantar para una sola repetición y utiliza los
            porcentajes resultantes para planificar tus intensidades de entrenamiento.
          </p>
        </div>
        <div className="w-full md:w-64 lg:w-80 h-48 rounded-2xl overflow-hidden shadow-lg order-1 md:order-2">
          <img 
            src="/images/herramientas/calculadora_1rm_fuerza.png" 
            alt="Calculadora de 1RM" 
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <div className="py-8">
        <Calc1RMClient />
      </div>
    </div>
  );
}
