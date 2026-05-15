import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CalcCaloriasClient from "@/components/dietas/CalcCaloriasClient";

export const metadata: Metadata = {
  title: "Calculadora de Calorías y TDEE | Impulse Fitness",
  description:
    "Calcula con precisión tus calorías diarias para déficit, mantenimiento o superávit calórico. Algoritmo profesional de estimación de gasto.",
};

export default function CalculadoraCaloriasPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      {/* Migas de pan y Cabecera */}
      <div>
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-2">
          <Link href="/dietas" className="hover:text-[#2563EB] transition-colors">
            Dietas
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Calculadora de Calorías</span>
        </nav>

        <header className="border-b border-gray-200 pb-8 flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight">
              Calculadora de Calorías (TDEE)
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
              Conoce tus necesidades energéticas exactas para respaldar tus metas
              de entrenamiento de forma completamente estructurada.
            </p>
          </div>
          <div className="w-full md:w-64 lg:w-80 h-48 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/images/herramientas/calculadora_calorias_macros.png" 
              alt="Calculadora de Calorías" 
              className="w-full h-full object-cover"
            />
          </div>
        </header>
      </div>

      {/* Interfaz Cliente */}
      <CalcCaloriasClient />
    </div>
  );
}
