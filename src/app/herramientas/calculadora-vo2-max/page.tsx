import React from "react";
import type { Metadata } from "next";
import CalcVO2Client from "@/components/herramientas/CalcVO2Client";

export const metadata: Metadata = {
  title: "Calculadora de VO2 Max (Test de Cooper) | Impulse Fitness",
  description: "Mide tu capacidad aeróbica y resistencia cardiovascular con el Test de Cooper. Una métrica esencial para corredores, ciclistas y atletas de resistencia.",
};

export default function CalcVO2Page() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      <header className="border-b border-gray-200 pb-8 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="flex-1 order-2 md:order-1">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
            <span>Herramientas</span>
            <span>•</span>
            <span>Deportes</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
            Calculadora de VO2 Max
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
            El VO2 máx es la cantidad máxima de oxígeno que tu cuerpo puede procesar durante un esfuerzo intenso.
            Es el estándar de oro para medir la condición física cardiovascular.
          </p>
        </div>
        <div className="w-full md:w-64 lg:w-80 h-48 rounded-2xl overflow-hidden shadow-lg order-1 md:order-2">
          <img 
            src="/images/herramientas/calculadora_vo2_scientific.png" 
            alt="Calculadora de VO2 Max" 
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <div className="py-8">
        <CalcVO2Client />
      </div>
    </div>
  );
}
