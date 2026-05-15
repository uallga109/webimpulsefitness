import React from "react";
import type { Metadata } from "next";
import CalcCiclismoClient from "@/components/herramientas/CalcCiclismoClient";

export const metadata: Metadata = {
  title: "Calculadora de Gasto Calórico en Ciclismo | Impulse Fitness",
  description: "Estima cuántas calorías quemas en tus rutas de bicicleta según tu peso, la velocidad media y el tiempo de pedaleo.",
};

export default function CalcCiclismoPage() {
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
            Gasto Calórico en Ciclismo
          </h1>
          <div className="mt-4 space-y-4 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            <p className="font-bold text-[#2563EB]">
              Estima con precisión científica las calorías consumidas sobre la bicicleta para planificar tus recargas de glucógeno y nutrición intra-entreno.
            </p>
            <p>
              El ciclismo genera un gasto energético masivo que puede superar las 1.000 kcal por hora. Sin embargo, calcularlo es complejo, 
              ya que la resistencia aerodinámica y los desniveles alteran la termodinámica del esfuerzo en comparación con correr o caminar.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                <h3 className="font-black text-emerald-800 text-xs uppercase tracking-widest mb-2">Evita la Pájara (Bonking)</h3>
                <p className="text-sm">Conoce tu gasto por hora para calcular cuántos gramos de carbos (geles o isotónico) debes ingerir para no vaciar tus depósitos.</p>
              </div>
              <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                <h3 className="font-black text-emerald-800 text-xs uppercase tracking-widest mb-2">Déficit Calórico Preciso</h3>
                <p className="text-sm">Si buscas perder peso, esta herramienta evita que sobrestimes tu entrenamiento y comas en exceso al llegar a casa.</p>
              </div>
            </div>

            <p className="text-sm bg-gray-900 text-gray-300 p-5 rounded-2xl shadow-inner">
              <span className="font-bold text-white block mb-2">Métricas Cruzadas:</span> Calculamos el gasto metabólico cruzando variables como tu peso corporal, el tiempo de pedaleo efectivo y la velocidad promedio de tu salida.
            </p>
          </div>
        </div>
        <div className="w-full md:w-64 lg:w-96 h-64 rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2 sticky top-4">
          <img 
            src="/images/herramientas/calculadora_ciclismo_vatios.png" 
            alt="Calculadora de Ciclismo" 
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <div className="py-8">
        <CalcCiclismoClient />
      </div>
    </div>
  );
}
