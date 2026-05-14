import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cobros y Facturación Automática para Entrenadores | Impulse Fitness",
  description:
    "Suscripciones recurrentes por SEPA o tarjeta, gestión inteligente de impagos y facturación automatizada en PDF para entrenadores personales.",
};

export default function AutomatizacionEntrenadoresPage() {
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
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            <span>Pilar 2 • Automatización Financiera</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-tight">
            Cobros y Facturación Sin Fricción
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            Cobrar no debería ser incómodo. Elimina el "pásame el Bizum" de final de mes y profesionaliza tus finanzas con cobros 100% automáticos.
          </p>
        </header>
      </div>

      {/* Bloque de Características (3 columnas con mucho espacio en blanco) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-green-50 text-[#22C55E] flex items-center justify-center text-xl font-black mb-6">
              01
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Suscripciones Automáticas
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              El cliente mete su tarjeta el primer día y el sistema le cobra la cuota mensual automáticamente mediante SEPA o pasarela segura.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-green-50 text-[#22C55E] flex items-center justify-center text-xl font-black mb-6">
              02
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Gestión de Impagos Inteligente
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Si una tarjeta falla, el sistema envía recordatorios de pago automáticos sin que tú tengas que intervenir ni perseguir a nadie.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-green-50 text-[#22C55E] flex items-center justify-center text-xl font-black mb-6">
              03
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Facturación Legal y Clara
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Generación de facturas en PDF para tus clientes y exportación sencilla para tu gestor en un solo clic.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Dedicado */}
      <section className="bg-gray-50 rounded-3xl border border-gray-100 p-8 sm:p-12 text-center max-w-3xl mx-auto w-full mt-6">
        <h2 className="text-xl sm:text-2xl font-black text-[#111827]">
          ¿Quieres asegurar tus ingresos a primero de mes?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-lg mx-auto">
          Integra cobros recurrentes y elimina el tiempo perdido en tareas administrativas o perseguir recibos.
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
