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
            <div className="mt-4 space-y-4 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
              <p className="font-bold text-[#2563EB]">
                Conoce tus necesidades energéticas exactas para respaldar tus metas de entrenamiento de forma completamente estructurada.
              </p>
              <p>
                El Gasto Energético Total Diario (TDEE, por sus siglas en inglés) es la métrica más importante de tu nutrición deportiva. 
                Representa el número exacto de kilocalorías que tu cuerpo quema en 24 horas, teniendo en cuenta tu Tasa Metabólica Basal (BMR), 
                el efecto termogénico de los alimentos (TEF), tu actividad física no planificada (NEAT) y tus entrenamientos.
              </p>
              <p>
                Nuestra calculadora utiliza ecuaciones clínicas contrastadas para eliminar las conjeturas de tu dieta:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <li className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                  <span className="font-bold text-[#111827] block mb-1">Fase de Volumen</span>
                  Añade un ligero superávit a tu TDEE para construir masa muscular sin acumular grasa innecesaria.
                </li>
                <li className="bg-red-50/50 p-4 rounded-xl border border-red-100">
                  <span className="font-bold text-[#111827] block mb-1">Fase de Definición</span>
                  Conoce tu punto de partida exacto para programar un déficit calórico milimétrico.
                </li>
                <li className="bg-green-50/50 p-4 rounded-xl border border-green-100">
                  <span className="font-bold text-[#111827] block mb-1">Mantenimiento</span>
                  Encuentra tu equilibrio metabólico para recomposiciones corporales a largo plazo o periodos de descanso.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-64 lg:w-96 h-64 rounded-2xl overflow-hidden shadow-2xl sticky top-4">
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
