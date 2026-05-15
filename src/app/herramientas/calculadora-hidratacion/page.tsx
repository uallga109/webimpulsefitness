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
            Calculadora de Hidratación Deportiva
          </h1>
          <div className="mt-4 space-y-4 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            <p className="font-bold text-[#2563EB]">
              El agua es el vehículo de tus nutrientes y tu sistema de refrigeración. Calcula tus requerimientos hídricos basales y activos para evitar caídas de rendimiento.
            </p>
            <p>
              El músculo humano es un 70% agua. La evidencia científica demuestra que una deshidratación de apenas el 2% de tu peso corporal reduce tu potencia aeróbica en un 20% 
              y dispara la percepción de fatiga. Beber "cuando tienes sed" llega tarde; la hidratación debe planificarse.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-cyan-50 p-5 rounded-2xl border border-cyan-100">
                <h3 className="font-bold text-[#111827] mb-2">Tasa de Sudoración</h3>
                <p className="text-sm">Estima la cantidad de líquido que pierdes por hora para crear un protocolo de reposición intra-entreno.</p>
              </div>
              <div className="bg-cyan-50 p-5 rounded-2xl border border-cyan-100">
                <h3 className="font-bold text-[#111827] mb-2">Adaptación al Entorno</h3>
                <p className="text-sm">Ajusta tus necesidades hídricas en función de la duración e intensidad, previniendo calambres.</p>
              </div>
            </div>

            <p className="text-sm border border-cyan-200 p-4 rounded-xl bg-white shadow-sm">
              <span className="font-bold text-cyan-600">Prevención de Hiponatremia:</span> Conoce tu volumen de agua ideal para mantener el plasma estable sin diluir peligrosamente tus niveles de sodio celular.
            </p>
          </div>
        </div>
        <div className="w-full md:w-64 lg:w-96 h-64 rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2 sticky top-4">
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
