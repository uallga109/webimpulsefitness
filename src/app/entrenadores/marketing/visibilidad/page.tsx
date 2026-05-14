import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Perfil Profesional y SEO Local para Entrenadores | Impulse Fitness",
  description:
    "Landing page de alta conversión, posicionamiento SEO local y lead magnet integrado para captar clientes dispuestos a pagar por tus asesorías de entrenamiento.",
};

export default function VisibilidadEntrenadoresPage() {
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
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            <span>Pilar 1 • Captación Optimizada</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-tight">
            Tu Perfil Profesional en Piloto Automático
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            Deja de depender del algoritmo de Instagram. Te posicionamos exactamente donde los clientes reales buscan entrenadores dispuestos a pagar.
          </p>
        </header>
      </div>

      {/* Bloque de Características (3 columnas con mucho espacio en blanco) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center text-xl font-black mb-6">
              01
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Landing Page de Alta Conversión
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Un perfil limpio, sin distracciones, diseñado exclusivamente para que el cliente haga clic en "Empezar a entrenar".
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center text-xl font-black mb-6">
              02
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              SEO y Posicionamiento Local
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Aparece en las primeras posiciones cuando alguien busque "Entrenador personal en [Tu Ciudad]".
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center text-xl font-black mb-6">
              03
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Lead Magnet Integrado
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Ofrece una guía o rutina gratuita a cambio del email o WhatsApp del cliente para nutrirlo y venderle después.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Dedicado */}
      <section className="bg-gray-50 rounded-3xl border border-gray-100 p-8 sm:p-12 text-center max-w-3xl mx-auto w-full mt-6">
        <h2 className="text-xl sm:text-2xl font-black text-[#111827]">
          ¿Listo para destacar ante tus futuros clientes?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-lg mx-auto">
          Crea tu perfil en el directorio de Impulse Fitness y empieza a recibir tráfico de alta intención de compra.
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
