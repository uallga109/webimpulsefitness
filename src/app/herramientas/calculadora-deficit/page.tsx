import React from "react";
import type { Metadata } from "next";
import CalcDeficitClient from "@/components/herramientas/CalcDeficitClient";

export const metadata: Metadata = {
  title: "Calculadora de Déficit Calórico | Impulse Fitness",
  description: "Calcula el déficit calórico necesario para perder grasa de forma eficiente y sostenible sin comprometer tu masa muscular.",
};

export default function CalcDeficitPage() {
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
            Calculadora de Déficit Calórico
          </h1>
          <div className="mt-4 space-y-4 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            <p className="font-bold text-[#2563EB]">
              Ajusta tu ingesta energética para promover la pérdida de grasa corporal manteniendo el máximo rendimiento y masa muscular posible.
            </p>
            <p>
              Perder grasa es matemática termodinámica, pero hacerlo demasiado rápido destruirá tu masa muscular, hundirá tu testosterona y ralentizará tu metabolismo. 
              La clave de una fase de definición exitosa no es comer lo mínimo posible, sino encontrar el déficit calórico óptimo y sostenible.
            </p>
            
            <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100 mt-6">
              <h3 className="font-black text-[#111827] text-xl mb-4">Diseña tu plan con precisión quirúrgica</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></div>
                  <p className="text-sm"><span className="font-bold">Pérdida Agresiva vs Conservadora:</span> Configura el déficit según tu porcentaje de grasa inicial y la urgencia de tus objetivos.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></div>
                  <p className="text-sm"><span className="font-bold">Proyección de Resultados:</span> Estima cuántas semanas tardarás en alcanzar tu peso objetivo perdiendo entre un 0.5% y un 1% de peso semanal.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></div>
                  <p className="text-sm"><span className="font-bold">Protección Metabólica:</span> Evita la adaptación metabólica severa asegurándote de no cruzar nunca el umbral mínimo de energía de disponibilidad (LEA).</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full md:w-64 lg:w-96 h-64 rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2 sticky top-4">
          <img 
            src="/images/herramientas/calculadora_deficit.png" 
            alt="Calculadora de Déficit Calórico" 
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <div className="py-8">
        <CalcDeficitClient />
      </div>
    </div>
  );
}
