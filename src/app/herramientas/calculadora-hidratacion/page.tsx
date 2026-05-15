import React from "react";
import type { Metadata } from "next";
import CalcHidratacionClient from "@/components/herramientas/CalcHidratacionClient";

export const metadata: Metadata = {
  title: "Calculadora de Hidratación | Impulse Fitness",
  description: "Calcula cuánta agua debes beber al día según tu peso y nivel de actividad física. Evita la deshidratación y optimiza tu rendimiento deportivo.",
};

export default function CalcHidratacionPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      <header className="border-b border-gray-200 pb-8 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="flex-1 order-2 md:order-1">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
            <span>Herramientas</span>
            <span>•</span>
            <span>Salud</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
            Calculadora de Hidratación
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
            El agua es esencial para el transporte de nutrientes y la termorregulación.
            Asegúrate de beber lo suficiente para mantener tus niveles de energía y recuperación.
          </p>
        </div>
        <div className="w-full md:w-64 lg:w-80 h-48 rounded-2xl overflow-hidden shadow-lg order-1 md:order-2">
          <img 
            src="/images/herramientas/calculadora_hidratacion_agua.png" 
            alt="Calculadora de Hidratación" 
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <div className="py-8">
        <CalcHidratacionClient />
      </div>
    </div>
  );
}
