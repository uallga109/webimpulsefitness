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
          <div className="mt-4 space-y-4 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            <p className="font-bold text-[#2563EB]">
              Conoce tu ritmo exacto por kilómetro (Pace) para cualquier distancia y tiempo, optimizando tu estrategia de carrera para 5k, 10k, media maratón o maratón.
            </p>
            <p>
              Correr guiándote únicamente por sensaciones es el error número uno el día de la competición. El Pacing (estrategia de ritmo) es una ciencia matemática 
              que separa a los corredores populares de los atletas eficientes. Nuestra calculadora procesa tus tiempos para darte una hoja de ruta milimétrica:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-r-2xl shadow-sm">
                <h3 className="font-black text-[#111827] mb-2 uppercase text-sm tracking-widest">Estrategia de Carrera</h3>
                <p className="text-sm">Descubre el ritmo exacto (ej. 4:30 min/km) que debes clavar para bajar de las 3 horas en maratón o 40 min en 10k.</p>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-r-2xl shadow-sm">
                <h3 className="font-black text-[#111827] mb-2 uppercase text-sm tracking-widest">Tiempos de Paso (Splits)</h3>
                <p className="text-sm">Genera parciales kilométricos para saber exactamente en qué tiempo debes cruzar cada punto de control.</p>
              </div>
            </div>

            <p className="text-sm bg-gray-50 p-4 rounded-xl border border-gray-200">
              <span className="font-bold">Series y Pistas:</span> Traduce tus ritmos de carrera a tiempos de paso para series de 400m o 1000m en pista, asegurando que tu entrenamiento de umbral láctico sea efectivo.
            </p>
          </div>
        </div>
        <div className="w-full md:w-64 lg:w-96 h-64 rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2 sticky top-4">
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
