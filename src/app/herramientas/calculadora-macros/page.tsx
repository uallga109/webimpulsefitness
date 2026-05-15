import React from "react";
import type { Metadata } from "next";
import CalcMacrosClient from "@/components/herramientas/CalcMacrosClient";

export const metadata: Metadata = {
  title: "Calculadora de Macronutrientes | Impulse Fitness",
  description: "Distribuye tus proteínas, grasas y carbohidratos de forma óptima según tus calorías diarias y tus objetivos de composición corporal.",
};

export default function CalcMacrosPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      <header className="border-b border-gray-200 pb-8 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="flex-1 order-2 md:order-1">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
            <span>Herramientas</span>
            <span>•</span>
            <span>Nutrición</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
            Calculadora de Macros
          </h1>
          <div className="mt-4 space-y-4 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            <p className="font-bold text-[#2563EB]">
              Una vez conocidas tus calorías totales, el siguiente paso es repartirlas en los tres macronutrientes esenciales para maximizar tus resultados.
            </p>
            <p>
              Saber cuántas calorías debes comer es solo la mitad del trabajo. La Dieta Flexible (IIFYM) se basa en cuadrar los macronutrientes correctos para garantizar 
              que tu cuerpo tenga bloques de construcción (proteínas), energía explosiva (carbohidratos) y un entorno hormonal óptimo (grasas).
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-3">01</span>
                <h3 className="font-bold text-[#111827] mb-1">Ratios Personalizados</h3>
                <p className="text-sm">Ajusta los porcentajes de carbos y grasas según tu sensibilidad a la insulina y deporte.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                <span className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold mb-3">02</span>
                <h3 className="font-bold text-[#111827] mb-1">Salud Hormonal</h3>
                <p className="text-sm">Garantiza un umbral mínimo de grasas para no comprometer la síntesis de testosterona.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                <span className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold mb-3">03</span>
                <h3 className="font-bold text-[#111827] mb-1">Exportación a Apps</h3>
                <p className="text-sm">Obtén los gramos exactos para introducirlos fácilmente en MyFitnessPal o FatSecret.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-64 lg:w-96 h-64 rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2 sticky top-4">
          <img 
            src="/images/herramientas/calculadora_macros_pie.png" 
            alt="Calculadora de Macros" 
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <div className="py-8">
        <CalcMacrosClient />
      </div>
    </div>
  );
}
