import React from "react";
import type { Metadata } from "next";
import CalcRitmoClient from "@/components/herramientas/CalcRitmoClient";

export const metadata: Metadata = {
  title: "Calculadora de Ritmo Running | Impulse Fitness",
  description: "Calcula tu ritmo de carrera (min/km) y tu velocidad media. Planifica tus entrenamientos de series y competiciones con precisión.",
};

export default function CalcRitmoPage() {
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
            Calculadora de Ritmo Running
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
            Conoce tu ritmo por kilómetro para cualquier distancia y tiempo. Ideal para corredores
            que buscan mejorar sus marcas en 5k, 10k, media maratón o maratón.
          </p>
        </div>
        <div className="w-full md:w-64 lg:w-80 h-48 rounded-2xl overflow-hidden shadow-lg order-1 md:order-2">
          <img 
            src="/images/herramientas/calculadora_running_vo2.png" 
            alt="Calculadora de Running" 
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <div className="py-8">
        <CalcRitmoClient />
      </div>
    </div>
  );
}
