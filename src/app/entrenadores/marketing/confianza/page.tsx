import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sistemas de Testimonios y Confianza para Entrenadores | Impulse Fitness",
  description:
    "Estrategia B2B avanzada de autoridad y credibilidad para entrenadores personales: casos de éxito científicos, testimonios legales y retención.",
};

export default function ConfianzaMarketingPage() {
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
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            <span>Pilar 3 • Autoridad & Casos de Éxito</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-tight">
            Estructuración de Casos de Éxito Científicos
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            En un nicho digital saturado de promesas vacías, la confianza y la transparencia científica (el estándar E-E-A-T de Google) son tus activos más valiosos. No muestres simples fotos de "antes y después" sin contexto; diseña casos de éxito estructurados que demuestren rigor, constancia y método biomecánico.
          </p>
        </header>
      </div>

      {/* Sección 1: La Estructura de un Caso de Éxito Científico */}
      <section className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-2xl font-black text-[#111827]">¿Cómo estructurar testimonios de alta conversión?</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          Google AdSense y los usuarios buscan rigurosidad. Para tus testimonios de composición corporal, sugerimos la siguiente estructura de 4 fases que responde de forma robusta a las objeciones típicas:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-gray-50 p-6">
          <ul className="space-y-4 text-sm sm:text-base text-gray-600">
            <li className="flex items-start space-x-2.5">
              <span className="text-[#2563EB] font-bold">1. El Punto de Partida:</span>
              <span>Contexto real del cliente al iniciar (edad, profesión, lesiones previas, intentos fallidos en el pasado).</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <span className="text-[#2563EB] font-bold">2. El Plan Científico:</span>
              <span>Qué distribución de volumen biomecánico, frecuencia de entrenamiento y objetivos calóricos se plantearon para el caso concreto.</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <span className="text-[#2563EB] font-bold">3. La Superación del Obstáculo:</span>
              <span>Cómo se adaptó el plan en periodos críticos (ej. viajes de trabajo, vacaciones, estancamiento metabólico natural).</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <span className="text-[#2563EB] font-bold">4. Los Resultados Medibles:</span>
              <span>Datos concretos (kg de masa grasa reducida, incremento en cargas de fuerza en press/sentadilla y, sobre todo, mejora de hábitos).</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Sección 2: Cumplimiento Legal y Privacidad (RGPD) */}
      <section className="space-y-4">
        <h2 className="text-2xl font-black text-[#111827]">Privacidad de Datos e Consentimiento Explícito</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          Compartir datos de salud (peso, grasa corporal) y fotografías requiere cumplir estrictamente con las directrices de privacidad de la RGPD y las políticas de AdSense:
        </p>

        <div className="bg-red-50/50 rounded-3xl border border-red-100 p-8 space-y-3 font-mono text-sm text-gray-700">
          <div><strong>Firma Obligatoria:</strong> Obtener consentimiento por escrito y firmado digitalmente de cada cliente antes de publicar su imagen o métricas corporales.</div>
          <div><strong>Opción Anónima:</strong> Brindar la opción de pixelar el rostro del cliente si prefiere mantener su privacidad al compartir la evolución de su composición corporal.</div>
        </div>
      </section>

      {/* CTA Dedicado */}
      <section className="bg-[#111827] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto w-full shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          ¿Quieres estructurar tus testimonios científicamente?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-lg mx-auto">
          Accede al playbook de ventas para aprender a monetizar tu autoridad o calcula tus tarifas con nuestra calculadora interactiva.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/entrenadores/marketing/calculadora-tarifas"
            className="px-6 py-3 rounded-xl bg-white text-[#111827] font-bold text-sm transition-all hover:bg-gray-100"
          >
            Calcular mis Precios
          </Link>
          <Link
            href="/entrenadores/marketing/playbook-adquisicion"
            className="px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-sm transition-all"
          >
            Ver Playbook Estratégico →
          </Link>
        </div>
      </section>
    </div>
  );
}
