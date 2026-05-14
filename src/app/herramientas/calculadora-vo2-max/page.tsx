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
      <header className="border-b border-gray-200 pb-6">
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
      </header>

      <div className="py-8">
        <CalcVO2Client />
      </div>
    </div>
  );
}
