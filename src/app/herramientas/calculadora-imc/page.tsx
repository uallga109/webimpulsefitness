import React from "react";
import type { Metadata } from "next";
import CalcIMCClient from "@/components/herramientas/CalcIMCClient";

export const metadata: Metadata = {
  title: "Calculadora de IMC (Índice de Masa Corporal) | Impulse Fitness",
  description: "Calcula tu IMC de forma rápida y gratuita. Conoce si estás en tu peso saludable basándote en tu altura y peso corporal.",
};

export default function CalcIMCPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      <header className="border-b border-gray-200 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Herramientas</span>
          <span>•</span>
          <span>Salud</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Calculadora de IMC
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
          El Índice de Masa Corporal es un estándar internacional para determinar si una persona
          se encuentra en un rango de peso saludable.
        </p>
      </header>

      <div className="py-8">
        <CalcIMCClient />
      </div>
    </div>
  );
}
