import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Escalabilidad y Venta de Infoproductos para Entrenadores | Impulse Fitness",
  description:
    "Rompe tu techo de facturación vendiendo retos grupales, membresías low-cost de rutinas en vídeo y eBooks o guías en PDF en piloto automático 24/7.",
};

export default function EscalabilidadEntrenadoresPage() {
  return (
    <div className="flex flex-col space-y-12 animate-fadeIn max-w-5xl mx-auto w-full py-4">
      {/* Botón de regreso y navegación */}
      <div>
        <Link
          href="/entrenadores/marketing"
          className="inline-flex items-center space-x-2 text-sm font-bold text-[#2563EB] hover:text-blue-700 transition-colors mb-6 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Volver al resumen de planes</span>
        </Link>

        {/* Cabecera limpia y espaciosa */}
        <header className="border-b border-gray-100 pb-8">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            <span>Pilar 4 • Escalabilidad & Infoproductos</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-tight">
            Multiplica tus Ingresos, No tus Horas
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            El límite de un entrenador 1-a-1 son las horas del día. Rompe tu techo de facturación vendiendo programas y rutinas de forma masiva sin depender de tu presencia en directo.
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
              Venta de Retos Grupales
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Crea un "Reto de Definición de 8 Semanas" y véndeselo a 50 personas a la vez con un sistema de gestión centralizada.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl font-black mb-6">
              02
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Membresías Low-Cost
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Ofrece acceso a una biblioteca de rutinas en vídeo por una cuota mensual accesible para aquellos que no pueden pagar tu 1-a-1.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl font-black mb-6">
              03
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Venta de eBooks y Guías
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Monetiza tu conocimiento subiendo PDFs de nutrición o entrenamiento con entrega inmediata y cobro automático 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Dedicado */}
      <section className="bg-gray-50 rounded-3xl border border-gray-100 p-8 sm:p-12 text-center max-w-3xl mx-auto w-full mt-6">
        <h2 className="text-xl sm:text-2xl font-black text-[#111827]">
          ¿Listo para digitalizar y empaquetar tu conocimiento?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-lg mx-auto">
          Comienza a generar ingresos pasivos y recurrentes ofreciendo soluciones escalables a tu audiencia global.
        </p>
        <div className="mt-8">
          <Link
            href="/entrenadores/marketing#registro"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm sm:text-base transition-all shadow-md shadow-blue-100 active:scale-95"
          >
            <span>Crear mi perfil profesional</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
