import React from "react";
import type { Metadata } from "next";
import CalcMasaMuscularClient from "@/components/herramientas/CalcMasaMuscularClient";

export const metadata: Metadata = {
  title: "Calculadora de Masa Muscular y FFMI | Impulse Fitness",
  description: "Descubre tu masa magra y tu índice FFMI. Una herramienta esencial para culturistas y atletas de fuerza que buscan medir su progreso real.",
};

export default function CalcMasaMuscularPage() {
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
            Calculadora de Masa Muscular (FFMI)
          </h1>
          <div className="mt-4 space-y-4 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            <p className="font-bold text-[#2563EB]">
              Analiza tu composición corporal actual y conoce tu Índice de Masa Libre de Grasa para evaluar tu potencial genético natural.
            </p>
            <p>
              El Fat-Free Mass Index (FFMI) es la métrica de oro en el culturismo natural y el fitness avanzado. Mientras que la báscula solo te dice cuánto pesas, 
              el FFMI aísla todo tu tejido magro (músculo, huesos, órganos) y lo ajusta a tu altura. Es la única forma real de saber cuánto músculo has construido.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="border border-indigo-100 bg-indigo-50/30 p-5 rounded-2xl">
                <h3 className="font-bold text-[#111827] mb-2">Descubre tu Límite Genético</h3>
                <p className="text-sm">La ciencia establece que el límite biológico de un atleta natural ronda un FFMI de 25. Comprueba a qué distancia estás de tu máximo potencial.</p>
              </div>
              <div className="border border-blue-100 bg-blue-50/30 p-5 rounded-2xl">
                <h3 className="font-bold text-[#111827] mb-2">Métricas Normalizadas</h3>
                <p className="text-sm">Utilizamos la ecuación de FFMI normalizada para evitar que los atletas excepcionalmente altos obtengan lecturas distorsionadas.</p>
              </div>
            </div>

            <p className="bg-gray-50 p-4 rounded-xl text-sm italic border border-gray-200">
              <span className="font-bold text-[#111827] not-italic">Seguimiento Real:</span> Úsala mes a mes para confirmar que ese kilo extra que has ganado en la báscula es músculo puro y no simple retención de líquidos o grasa.
            </p>
          </div>
        </div>
        <div className="w-full md:w-64 lg:w-96 h-64 rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2 sticky top-4">
          <img 
            src="/images/herramientas/calculadora_masa_muscular_dexa.png" 
            alt="Calculadora de Masa Muscular" 
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <div className="py-8">
        <CalcMasaMuscularClient />
      </div>
    </div>
  );
}
