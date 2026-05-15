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
            Calculadora de VO2 Máx
          </h1>
          <div className="mt-4 space-y-4 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            <p className="font-bold text-[#2563EB]">
              Descubre el estándar de oro de la condición física cardiovascular: la cantidad máxima de oxígeno que tu cuerpo puede procesar durante un esfuerzo intenso.
            </p>
            <p>
              El Volumen Máximo de Oxígeno (VO2 Máx) no solo es el mejor predictor de rendimiento en deportes de resistencia (Endurance), sino que la medicina moderna 
              lo considera uno de los biomarcadores más fiables para predecir la longevidad y la salud metabólica a largo plazo.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-50 border border-blue-100 p-5 rounded-2xl flex flex-col">
                <h3 className="font-bold text-[#111827] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  Fórmulas Validadas
                </h3>
                <p className="text-sm">Estima tu VO2 Máx mediante pruebas de campo como el Test de Cooper (12 min) o Rockport.</p>
              </div>
              <div className="bg-blue-50 border border-blue-100 p-5 rounded-2xl flex flex-col">
                <h3 className="font-bold text-[#111827] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  Zonas de Entreno
                </h3>
                <p className="text-sm">Establece tus zonas de frecuencia cardíaca óptimas (desde Zona 2 hasta Zona 5 de potencia).</p>
              </div>
              <div className="bg-blue-50 border border-blue-100 p-5 rounded-2xl flex flex-col">
                <h3 className="font-bold text-[#111827] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  Comparativa
                </h3>
                <p className="text-sm">Evalúa tu condición comparando tus resultados con las tablas percentiles internacionales.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-64 lg:w-96 h-64 rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2 sticky top-4">
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
