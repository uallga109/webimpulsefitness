import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maximización del Ticket Medio en Gimnasios | Impulse Fitness",
  description:
    "Estrategias automatizadas para aumentar el LTV de socios: upselling de entrenamientos personales, embudos de nutrición y suplementación, y upgrades de cuotas.",
};

export default function RentabilidadMarketingPage() {
  return (
    <div className="flex flex-col space-y-12 animate-fadeIn max-w-5xl mx-auto w-full py-4">
      {/* Botón de regreso y navegación */}
      <div>
        <Link
          href="/gimnasios/marketing"
          className="inline-flex items-center space-x-2 text-sm font-bold text-[#2563EB] hover:text-blue-700 transition-colors mb-6 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Volver al resumen B2B</span>
        </Link>

        {/* Cabecera limpia y espaciosa */}
        <header className="border-b border-gray-100 pb-8">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            <span>Pilar 4 • Rentabilidad & LTV</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-tight">
            Más Ingresos sin Añadir Más Socios
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            Aumenta el LTV (Life Time Value) de tu base de datos actual vendiendo servicios premium de forma automatizada y sin presionar a tus clientes.
          </p>
        </header>
      </div>

      {/* Bloque de Características (3 columnas con mucho espacio en blanco) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl font-black mb-6">
              01
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Upselling de Entrenamientos
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Embudos que ofrecen bonos de Entrenamiento Personal (PT) a socios que llevan más de 6 meses estancados.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl font-black mb-6">
              02
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Embudos de Nutrición y Suplementos
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Venta cruzada automática de planes nutricionales o suplementos tras la primera semana de alta.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl font-black mb-6">
              03
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Upgrades de Cuota
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Campañas estacionales para pasar a clientes de cuotas valle/básicas a cuotas VIP o multipase.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Dedicado */}
      <section className="bg-gray-50 rounded-3xl border border-gray-100 p-8 sm:p-12 text-center max-w-3xl mx-auto w-full mt-6">
        <h2 className="text-xl sm:text-2xl font-black text-[#111827]">
          ¿Listo para destapar el valor real de tus socios?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-lg mx-auto">
          Aplica flujos de venta automatizados y aumenta el ticket medio de tus instalaciones desde el primer mes.
        </p>
        <div className="mt-8">
          <Link
            href="/gimnasios/marketing#consultoria"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm sm:text-base transition-all shadow-md shadow-blue-100 active:scale-95"
          >
            <span>Quiero aumentar mi ticket medio</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
