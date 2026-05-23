import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Playbook de Adquisición High-Ticket para Entrenadores | Impulse Fitness",
  description:
    "Playbook estratégico B2B gratuito para entrenadores personales: imanes de leads, embudos VSL de Instagram y guiones estructurados de llamadas de ventas.",
};

export default function TrainerAcquisitionPlaybookPage() {
  return (
    <div className="flex flex-col space-y-12 animate-fadeIn max-w-5xl mx-auto w-full py-4">
      {/* Botón de regreso */}
      <div>
        <Link
          href="/entrenadores/marketing"
          className="inline-flex items-center space-x-2 text-sm font-bold text-[#2563EB] hover:text-blue-700 transition-colors mb-6 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Volver a Soluciones B2B</span>
        </Link>

        <header className="border-b border-gray-100 pb-6">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-wider mb-3 inline-block">
            Playbook B2B Gratuito
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
            Playbook de Adquisición High-Ticket para Asesorías
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Aprende a captar clientes de asesorías online premium (&gt;150€/mes) utilizando sistemas digitales probados. Este manual práctico detalla el paso a paso desde el contenido orgánico en redes sociales hasta el cierre de la venta telefónica.
          </p>
        </header>
      </div>

      {/* Sección 1: El Embudo de Dos Pasos (Chat Funnel) */}
      <section className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 space-y-4 shadow-sm">
        <h2 className="text-2xl font-black text-[#111827]">1. El Embudo de Conversión por Mensaje Privado (DM)</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          El error común es enviar al seguidor directamente a un enlace de pago o una web compleja. El sistema de mayor conversión es el <strong>Chat Funnel</strong>:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h4 className="font-bold text-sm text-[#2563EB] uppercase">Fase A: Generar Demanda</h4>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              Publica un Reel o Carrousel resolviendo una frustración (ej. <em>"Rutina de pecho sin dolor de hombro"</em>). Pide comentar una palabra clave (ej. "HOMBRO") para recibir el PDF técnico completo.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h4 className="font-bold text-sm text-[#2563EB] uppercase">Fase B: Diagnóstico en Chat</h4>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              Envías la guía y preguntas: <em>"¡Aquí tienes, [Nombre]! Por curiosidad, ¿estás lidiando con dolor de hombro al hacer press de banca ahora mismo?"</em>. Mapeas sus dolores sin vender nada aún.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h4 className="font-bold text-sm text-[#2563EB] uppercase">Fase C: Agendar la Llamada</h4>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              Si el cliente cumple el perfil: <em>"Oye [Nombre], veo que tu caso requiere ajustar algunos ángulos biomecánicos. Esta semana tengo 3 huecos para hacer llamadas de diagnóstico gratuitas de 15 min. ¿Quieres que agendemos una?"</em>.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 2: El Guión de Ventas Telefónico Estructurado */}
      <section className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 space-y-6 shadow-sm">
        <h2 className="text-2xl font-black text-[#111827]">2. Guión Científico de Cierre de Ventas (15-20 Minutos)</h2>
        <p className="text-sm text-gray-600">
          Utiliza esta estructura de llamada telefónica para cerrar clientes online a precios premium sin sentirte como un vendedor agresivo:
        </p>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h4 className="text-sm font-black text-[#2563EB] uppercase">Paso 1: El Diagnóstico y Dolor Actual (Minutos 1 - 7)</h4>
            <div className="mt-3 text-sm text-gray-700 font-mono bg-white p-4 rounded-xl border border-gray-200">
              <p className="font-bold text-[#111827]">Tus Preguntas Clave:</p>
              <p className="mt-2">"Cuéntame, [Nombre], ¿cuál es tu objetivo principal con tu físico en los próximos 6 meses?"</p>
              <p className="mt-1">"¿Qué has intentado en el pasado para conseguirlo y por qué crees que no te ha funcionado?"</p>
              <p className="mt-1">"¿Cómo te hace sentir estar en este punto actualmente?" (Crucial para destapar la motivación emocional real).</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h4 className="text-sm font-black text-[#2563EB] uppercase">Paso 2: Presentar la Solución como Puente (Minutos 8 - 12)</h4>
            <div className="mt-3 text-sm text-gray-700 font-mono bg-white p-4 rounded-xl border border-gray-200">
              <p className="font-bold text-[#111827]">Tu Discurso:</p>
              <p className="mt-2">"Entiendo perfectamente, [Nombre]. Basándome en tu historial de dolores corporales, lo que necesitas no es entrenar más duro, sino una planificación biomecánica inteligente con frecuencia 2 y un ajuste milimétrico de proteínas."</p>
              <p className="mt-1">"Mi programa de Asesoría Élite hace exactamente eso: yo me encargo de diseñar tu rutina en vídeo, revisar tus ejecuciones por chat y ajustar tus calorías semanalmente para que tú solo tengas que ejecutar. ¿Tiene sentido para ti?"</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h4 className="text-sm font-black text-[#2563EB] uppercase">Paso 3: Precio e Inscripción (Minutos 13 - 15)</h4>
            <div className="mt-3 text-sm text-gray-700 font-mono bg-white p-4 rounded-xl border border-gray-200">
              <p className="font-bold text-[#111827]">Tu Cierre:</p>
              <p className="mt-2">"La inversión en mi programa de acompañamiento completo es de 149€ al mes, sin matrículas ni permanencias. Si estás decidido a empezar y te encaja la metodología, te envío ahora mismo el enlace de Stripe por WhatsApp y rellenamos tu onboarding hoy mismo. ¿Empezamos?"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resumen de Objetivos y Buenas Prácticas */}
      <section className="bg-blue-50/50 rounded-3xl border border-blue-100 p-8 sm:p-10 space-y-4 text-sm text-gray-700 leading-relaxed">
        <h3 className="text-lg font-bold text-[#111827]">Directrices Científicas para Vender Alto Ticket</h3>
        <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
          <li><strong>No vendas características, vende resultados:</strong> Al cliente no le importan los PDFs o las hojas de cálculo, le importa verse bien en el espejo y entrenar sin dolores en las articulaciones.</li>
          <li><strong>Escucha el 80% del tiempo:</strong> Una buena llamada de ventas consiste en hacer las preguntas correctas y dejar que el cliente explique detalladamente su frustración.</li>
          <li><strong>Garantía libre de riesgos:</strong> Elimina el miedo a equivocarse cobrando a través de Stripe de forma recurrente y transparente, permitiendo la baja en un solo clic.</li>
        </ul>
      </section>
    </div>
  );
}
