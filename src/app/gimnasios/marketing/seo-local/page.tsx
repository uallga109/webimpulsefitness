import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Posicionamiento SEO Local para Gimnasios | Impulse Fitness",
  description:
    "Auditoría y optimización de perfiles en Google Business, captación de reseñas de 5 estrellas automatizada y SEO On-Page local para centros deportivos.",
};

export default function SeoLocalMarketingPage() {
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
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            <span>Pilar 3 • Visibilidad & SEO Local</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-tight">
            Dominio Absoluto en Google Maps
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            El 80% de los usuarios eligen su gimnasio buscando "gimnasio cerca de mí" en su móvil. Si no estás entre los 3 primeros resultados, estás perdiendo dinero todos los días.
          </p>
        </header>
      </div>

      {/* Bloque de Características (3 columnas con mucho espacio en blanco) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl font-black mb-6">
              01
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Optimización de Ficha de Google
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Auditoría y mejora técnica de tu perfil de Google Business para superar a tu competencia directa.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl font-black mb-6">
              02
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Máquina de Reseñas 5 Estrellas
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Sistema automático que pide valoraciones positivas a tus socios más fieles y filtra las quejas hacia un buzón privado.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl font-black mb-6">
              03
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              SEO On-Page para Centros
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Creación de páginas de aterrizaje locales optimizadas para las disciplinas que ofreces (CrossFit, Pilates, Musculación).
            </p>
          </div>
        </div>
      </section>

      {/* CTA Dedicado */}
      <section className="bg-gray-50 rounded-3xl border border-gray-100 p-8 sm:p-12 text-center max-w-3xl mx-auto w-full mt-6">
        <h2 className="text-xl sm:text-2xl font-black text-[#111827]">
          ¿Quieres multiplicar tus visitas sin pagar por clics?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-lg mx-auto">
          Posiciona tu centro en el codiciado Local Pack de Google y captura toda la demanda activa de tu área geográfica.
        </p>
        <div className="mt-8">
          <Link
            href="/gimnasios/marketing#consultoria"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm sm:text-base transition-all shadow-md shadow-blue-100 active:scale-95"
          >
            <span>Quiero dominar mi zona</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
