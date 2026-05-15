import React from "react";
import type { Metadata } from "next";
import CalcGrasaCorporalClient from "@/components/herramientas/CalcGrasaCorporalClient";

export const metadata: Metadata = {
  title: "Calculadora de Grasa Corporal (US Navy) | Impulse Fitness",
  description: "Estima tu porcentaje de grasa corporal utilizando el método de la Marina de EE.UU. Una forma sencilla y científica de medir tu composición corporal.",
};

export default function CalcGrasaCorporalPage() {
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
            Calculadora de Grasa Corporal
          </h1>
          <div className="mt-4 space-y-4 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            <p className="font-bold text-[#2563EB]">
              Determina tu porcentaje de tejido adiposo para llevar un control preciso de tu recomposición corporal sin depender de básculas inexactas.
            </p>
            <p>
              Las básculas de bioimpedancia comerciales suelen fallar estrepitosamente si tu nivel de hidratación varía. 
              La forma más accesible y científicamente validada de estimar tu porcentaje de grasa corporal en casa es mediante el uso de cintas métricas corporales 
              (Método de la Marina de EE. UU. o Fórmulas YMCA).
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <span className="font-bold text-[#2563EB] block text-lg mb-1">Precisión Anatómica</span>
                Introduce tus perímetros para obtener una estimación de tu adiposidad.
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <span className="font-bold text-[#2563EB] block text-lg mb-1">Categorización</span>
                Compara tus resultados con rangos de "Atleta" (6-13% en hombres) o "Saludable".
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <span className="font-bold text-[#2563EB] block text-lg mb-1">Monitorización</span>
                Combina datos con fotos para el control absoluto de tu definición estética.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-64 lg:w-96 h-64 rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2 sticky top-4">
          <img 
            src="/images/herramientas/calculadora_grasa_corporal_caliper.png" 
            alt="Calculadora de Grasa Corporal" 
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <div className="py-8">
        <CalcGrasaCorporalClient />
      </div>
    </div>
  );
}
