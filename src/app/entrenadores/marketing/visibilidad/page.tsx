import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Funnels de Captación y Marca Personal para Entrenadores | Impulse Fitness",
  description:
    "Estrategia B2B avanzada de visibilidad digital para entrenadores personales: marca personal, embudos en Instagram, imanes de leads y copywriting directivo.",
};

export default function VisibilidadMarketingPage() {
  return (
    <div className="flex flex-col space-y-12 animate-fadeIn max-w-5xl mx-auto w-full py-4">
      {/* Botón de regreso y navegación */}
      <div>
        <Link
          href="/entrenadores/marketing"
          className="inline-flex items-center space-x-2 text-sm font-bold text-[#2563EB] hover:text-blue-700 transition-colors mb-6 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Volver al resumen B2B</span>
        </Link>

        {/* Cabecera limpia y espaciosa */}
        <header className="border-b border-gray-100 pb-8">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            <span>Pilar 1 • Marca Personal & Visibilidad</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-tight">
            Funnels de Marca Personal e Instagram
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            En el negocio del entrenamiento personal, las personas le compran a personas. Construir una marca personal fuerte respaldada por ciencia y estructurada mediante embudos de atracción es la clave para dejar de competir por precio y empezar a atraer clientes de alto ticket que respeten tu criterio profesional.
          </p>
        </header>
      </div>

      {/* Sección 1: El Embudo de Contenido en Instagram */}
      <section className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-2xl font-black text-[#111827]">El Embudo Orgánico de Instagram de 3 Pasos</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          No necesitas millones de seguidores. Necesitas los seguidores correctos. Diseñamos sistemas de atracción orgánica en redes sociales basados en el concepto de "imán de leads" (Lead Magnet) de alta utilidad:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <span className="font-bold text-sm text-[#2563EB] uppercase block">1. Atracción (Reels)</span>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              Videos cortos educativos que destruyen mitos (ej. <em>"Por qué no estás perdiendo grasa aunque comas ensalada"</em>). CTA dirigido a comentar una palabra clave.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <span className="font-bold text-sm text-[#2563EB] uppercase block">2. Nutrición (Lead Magnet)</span>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              Al comentar la palabra clave, enviamos de forma automática por mensaje directo (DM) una guía científica en PDF (ej. <em>"Guía de Recomposición Corporal"</em>).
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <span className="font-bold text-sm text-[#2563EB] uppercase block">3. Conversión (Llamada)</span>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              Iniciamos conversación personalizada en los mensajes privados para evaluar su caso y agendar una sesión estratégica telefónica o videollamada.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 2: La Estructura de tu Perfil de Instagram de Alta Conversión */}
      <section className="space-y-4">
        <h2 className="text-2xl font-black text-[#111827]">Optimización Biomecánica del Perfil (Bio)</h2>
        <p className="text-base text-gray-600">
          Tu biografía debe actuar como una página de ventas instantánea. Esta es la fórmula de redacción científica de alta conversión que sugerimos:
        </p>

        <div className="bg-blue-50/50 rounded-3xl border border-blue-100 p-8 space-y-3 font-mono text-sm text-gray-700">
          <div><strong>Línea 1 (Propuesta de Valor):</strong> Ayudo a [Tu Avatar: ej. mujeres profesionales] a [Objetivo: ej. perder 10kg] sin [Dolor: ej. hacer dietas extremas].</div>
          <div><strong>Línea 2 (Autoridad):</strong> Acreditado por [Tu Universidad / Certificación premium] • Basado en Ciencia.</div>
          <div><strong>Línea 3 (Llamado a la Acción):</strong> Escríbeme "FUEGO" para recibir mi playbook gratuito de macros. 👇</div>
        </div>
      </section>

      {/* CTA Dedicado */}
      <section className="bg-[#111827] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto w-full shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          ¿Quieres multiplicar tus solicitudes de clientes?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-lg mx-auto">
          Descubre cuánta tarifa cobrar con nuestra calculadora o accede al playbook de ventas para cerrar asesorías online premium hoy mismo.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/entrenadores/marketing/calculadora-tarifas"
            className="px-6 py-3 rounded-xl bg-white text-[#111827] font-bold text-sm transition-all hover:bg-gray-100"
          >
            Calcular mis Precios / Tarifas
          </Link>
          <Link
            href="/entrenadores/marketing/playbook-adquisicion"
            className="px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-sm transition-all"
          >
            Ver Playbook de Alto Ticket →
          </Link>
        </div>
      </section>
    </div>
  );
}
