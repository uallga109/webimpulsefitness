import React from "react";
import type { Metadata } from "next";
import CalcIMCClient from "@/components/herramientas/CalcIMCClient";

export const metadata: Metadata = {
  title: "Calculadora de IMC (Índice de Masa Corporal) | Impulse Fitness",
  description: "Calcula tu IMC de forma rápida y gratuita. Conoce si estás en tu peso saludable basándote en tu altura y peso corporal.",
};

export default function CalcIMCPage() {
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
            Calculadora de IMC
          </h1>
          <div className="mt-4 space-y-4 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            <p className="font-bold text-[#2563EB]">
              El estándar internacional para determinar tu rango de peso base y monitorizar tendencias de salud poblacional.
            </p>
            <p>
              El Índice de Masa Corporal (IMC) es la fórmula biométrica más utilizada por la Organización Mundial de la Salud 
              para clasificar el estado ponderal de una persona en función de la relación entre su peso y su altura. 
              Aunque en Impulse Fitness sabemos que el peso no lo es todo, el IMC sigue siendo una excelente herramienta clínica de triaje inicial.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Evaluación Rápida
                </h3>
                <p className="text-sm">Descubre en segundos si te encuentras en un rango de infrapeso, normopeso, sobrepeso u obesidad tipo I, II o III.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Punto de Partida
                </h3>
                <p className="text-sm">Ideal para personas principiantes que necesitan establecer objetivos de peso a medio plazo.</p>
              </div>
            </div>

            <p className="text-sm bg-amber-50 border-l-4 border-amber-400 p-4 text-amber-800 rounded-r-xl">
              <span className="font-bold">Nota clínica:</span> Si eres un atleta con gran desarrollo de masa muscular, te recomendamos complementar esta métrica con nuestra <strong>Calculadora de Grasa Corporal y FFMI</strong>, ya que el IMC no distingue entre tejido adiposo y músculo.
            </p>
          </div>
        </div>
        <div className="w-full md:w-64 lg:w-96 h-64 rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2 sticky top-4">
          <img 
            src="/images/herramientas/calculadora_imc_grasa.png" 
            alt="Calculadora de IMC" 
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <div className="py-8">
        <CalcIMCClient />
      </div>
    </div>
  );
}
