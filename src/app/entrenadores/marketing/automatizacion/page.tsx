import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automatización de Cobros y Onboarding para Entrenadores | Impulse Fitness",
  description:
    "Estrategia B2B avanzada de facturación y onboarding para entrenadores personales: pasarelas Stripe, automatización de formularios de salud y cobros recurrentes.",
};

export default function AutomatizacionMarketingPage() {
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
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            <span>Pilar 2 • Cobros & Automatización</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-tight">
            Saneamiento Financiero y Onboarding Autónomo
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            Perseguir transferencias a final de mes o enviar PDFs de 40 páginas para dar de alta a un cliente consume tu energía operativa. Implementamos sistemas de cobro recurrente por tarjeta y flujos de bienvenida automáticos que le brindan a tus clientes una experiencia de élite desde el minuto uno.
          </p>
        </header>
      </div>

      {/* Sección 1: El Sistema de Cobro Recurrente (Stripe) */}
      <section className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-2xl font-black text-[#111827]">¿Por qué los cobros recurrentes automáticos son vitales?</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          En lugar de cobrar por transferencias manuales que siempre se retrasan, configuramos pasarelas de pago automatizadas como Stripe. El cliente ingresa su tarjeta una sola vez al contratar y el cobro se realiza automáticamente cada 30 días, tal como Netflix o Spotify.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-gray-50 p-6">
          <h3 className="text-lg font-bold text-[#111827] mb-4">Protocolo de Recuperación de Pagos Fallidos (Dunning)</h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Si la tarjeta de un cliente es rechazada por falta de fondos o caducidad, Stripe y nuestro sistema aplican un protocolo de recuperación automática:
          </p>
          <ul className="space-y-3 text-sm sm:text-base text-gray-600">
            <li className="flex items-start space-x-2.5">
              <span className="text-[#22C55E] font-bold">✔</span>
              <span><strong>Re-intento inteligente:</strong> Intentar el cargo en días estratégicos de nómina (ej. día 1 y 5 del mes).</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <span className="text-[#22C55E] font-bold">✔</span>
              <span><strong>Aviso Automático:</strong> Envío de un correo de soporte templado e impersonal invitando a actualizar el método de pago antes de suspender el acceso a la app.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Sección 2: El Embudo de Bienvenida (Onboarding Workflow) */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-[#111827]">Workflow de Onboarding en 3 Pasos</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          Una vez completado el pago en Stripe, el cliente es guiado automáticamente a través de este sistema de recopilación de datos:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h4 className="text-base font-bold text-[#111827]">Paso 1: Formulario Técnico</h4>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              El cliente recibe por email un formulario interactivo (Typeform / Google Forms) donde completa su historial de lesiones, objetivos y cuestionario de salud básica.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h4 className="text-base font-bold text-[#111827]">Paso 2: Acceso a App de Rutinas</h4>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              El sistema genera de inmediato sus credenciales de acceso a tu aplicación de entrenamiento favorita y le notifica los pasos de instalación.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h4 className="text-base font-bold text-[#111827]">Paso 3: Videollamada Inicial</h4>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              Enlace de Calendly para agendar la sesión de arranque de 20 minutos donde explicáis la biomecánica y ajustáis las metas iniciales de peso.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Dedicado */}
      <section className="bg-[#111827] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto w-full shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          ¿Listo para automatizar tus finanzas administrativas?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-lg mx-auto">
          Ponemos a tu disposición tecnología financiera e instructivos paso a paso diseñados para que puedas optimizar el cobro recurrente.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/entrenadores/marketing/calculadora-tarifas"
            className="px-6 py-3 rounded-xl bg-white text-[#111827] font-bold text-sm transition-all hover:bg-gray-100"
          >
            Calcular mi tarifa ideal
          </Link>
          <Link
            href="/entrenadores/marketing#registro"
            className="px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-sm transition-all"
          >
            Comenzar automatización →
          </Link>
        </div>
      </section>
    </div>
  );
}
