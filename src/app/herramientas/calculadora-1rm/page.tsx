import React from "react";
import type { Metadata } from "next";
import Calc1RMClient from "@/components/herramientas/Calc1RMClient";

export const metadata: Metadata = {
  title: "Calculadora de 1RM (Una Repetición Máxima) | Impulse Fitness",
  description: "Calcula tu fuerza máxima teórica sin riesgo de lesión. Obtén tus porcentajes de carga para programar tus mesociclos de fuerza e hipertrofia.",
};

export default function Calc1RMPage() {
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
            Calculadora de 1RM (Fuerza Máxima)
          </h1>
          <div className="mt-4 space-y-4 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            <p className="font-bold text-[#2563EB]">
              Estima la máxima carga que podrías levantar para una sola repetición y utiliza los porcentajes resultantes para planificar tus mesociclos.
            </p>
            <p>
              Levantar el 100% de tu capacidad real conlleva un riesgo altísimo de lesión ortopédica y una fatiga extrema del Sistema Nervioso Central (SNC). 
              Nuestra calculadora de 1RM utiliza ecuaciones predictivas (como las fórmulas de Brzycki o Epley) para darte tu máximo teórico basado en una serie al fallo de entre 3 y 10 repeticiones.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-gray-900 text-white p-5 rounded-2xl shadow-xl">
                <h3 className="font-bold text-blue-400 mb-2">Entrenamiento Seguro</h3>
                <p className="text-sm text-gray-300">Descubre tu límite absoluto sin necesidad de jugarte una lesión bajo una barra pesada.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-2">Programación de Fuerza</h3>
                <p className="text-sm">Genera porcentajes de trabajo (75%, 85%, 90%) para rutinas como Powerlifting (5x5, Wendler o Smolov).</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-2">Autorregulación</h3>
                <p className="text-sm">Ajusta los pesos de tu sesión si aplicas Entrenamiento Basado en la Velocidad (VBT) o RPE.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-64 lg:w-96 h-64 rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2 sticky top-4">
          <img 
            src="/images/herramientas/calculadora_1rm_fuerza.png" 
            alt="Calculadora de 1RM" 
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <div className="py-8">
        <Calc1RMClient />
      </div>
    </div>
  );
}
