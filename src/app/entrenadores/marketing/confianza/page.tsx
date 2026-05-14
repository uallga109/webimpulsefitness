import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Casos de Éxito y Reseñas para Entrenadores | Impulse Fitness",
  description:
    "Automatiza la recolección de testimonios, muestra galerías de Antes y Después con privacidad y obtén el sello de Entrenador Verificado.",
};

export default function ConfianzaEntrenadoresPage() {
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
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            <span>Pilar 3 • Reputación & Prueba Social</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-tight">
            Casos de Éxito que Venden por Ti
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            La prueba social es el gatillo mental más fuerte en el fitness. Automatizamos la recolección de testimonios para que tu trabajo hable por sí solo.
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
              Solicitud de Reseñas Automática
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              El sistema envía un email a tus clientes en su día 30, 60 y 90 pidiendo que valoren su progreso de forma sencilla.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl font-black mb-6">
              02
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Portafolio "Antes y Después"
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Una galería privada y segura donde puedes mostrar los cambios físicos de tus clientes con su total consentimiento.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl font-black mb-6">
              03
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Sello de "Entrenador Verificado"
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Genera confianza instantánea con nuestro distintivo de validación de titulaciones, experiencia y certificaciones.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Dedicado */}
      <section className="bg-gray-50 rounded-3xl border border-gray-100 p-8 sm:p-12 text-center max-w-3xl mx-auto w-full mt-6">
        <h2 className="text-xl sm:text-2xl font-black text-[#111827]">
          ¿Listo para proyectar máxima autoridad?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-lg mx-auto">
          Consolida tu reputación digital con casos de éxito verificados y atrae clientes decididos a conseguir resultados.
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
