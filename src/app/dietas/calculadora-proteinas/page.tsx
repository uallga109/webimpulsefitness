import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CalcProteinasClient from "@/components/dietas/CalcProteinasClient";

export const metadata: Metadata = {
  title: "Calculadora de Proteínas Diarias | Impulse Fitness",
  description:
    "Descubre los gramos de proteína exactos que necesitas consumir para optimizar la hipertrofia muscular o la retención de masa magra.",
};

export default function CalculadoraProteinasPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      {/* Migas de pan y Cabecera */}
      <div>
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-2">
          <Link href="/dietas" className="hover:text-[#2563EB] transition-colors">
            Dietas
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Calculadora de Proteínas</span>
        </nav>

        <header className="border-b border-gray-200 pb-8 flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight">
              Calculadora de Proteínas
            </h1>
            <div className="mt-4 space-y-4 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
              <p className="font-bold text-[#2563EB]">
                Ajusta tu síntesis proteica diaria en función de tu peso corporal y las exigencias específicas de tu disciplina de entrenamiento.
              </p>
              <p>
                No todo el mundo necesita comer la misma cantidad de proteína. El requerimiento de aminoácidos varía drásticamente dependiendo de si eres un corredor de maratón, 
                un culturista en fase de volumen o alguien buscando perder grasa. Consumir menos proteína de la necesaria frena tu progreso; consumir demasiada solo encarece tu dieta.
              </p>
              <p>
                Nuestra herramienta aplica la evidencia científica más reciente para calcular tus gramos diarios ideales:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="border border-purple-100 bg-purple-50/30 p-4 rounded-xl">
                  <span className="font-bold text-[#111827] block mb-1">Preservación Muscular</span>
                  Cantidades óptimas para evitar el catabolismo durante periodos de restricción calórica severa.
                </div>
                <div className="border border-indigo-100 bg-indigo-50/30 p-4 rounded-xl">
                  <span className="font-bold text-[#111827] block mb-1">Hipertrofia Máxima</span>
                  El "punto dulce" (1.6g - 2.2g/kg) para maximizar la Vía mTOR y la síntesis de proteína.
                </div>
                <div className="border border-blue-100 bg-blue-50/30 p-4 rounded-xl">
                  <span className="font-bold text-[#111827] block mb-1">Rendimiento Aeróbico</span>
                  Ajustes específicos para atletas de resistencia que necesitan reparar el daño tisular tras sesiones largas.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-64 lg:w-96 h-64 rounded-2xl overflow-hidden shadow-2xl sticky top-4">
            <img 
              src="/images/noticias/batido_post_entreno.png" 
              alt="Calculadora de Proteínas" 
              className="w-full h-full object-cover"
            />
          </div>
        </header>
      </div>

      {/* Interfaz de Cliente */}
      <CalcProteinasClient />
    </div>
  );
}
