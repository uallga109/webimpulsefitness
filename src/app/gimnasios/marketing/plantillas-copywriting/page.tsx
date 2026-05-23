import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plantillas de Copywriting Directo para Anuncios de Gimnasios | Impulse Fitness",
  description:
    "Accede a nuestro playbook completo de copywriting B2B para gimnasios: copys de Meta Ads, TikTok, plantillas de mensajes de WhatsApp y secuencias de email.",
};

export default function GymCopywritingTemplatesPage() {
  return (
    <div className="flex flex-col space-y-12 animate-fadeIn max-w-5xl mx-auto w-full py-4">
      {/* Botón de regreso */}
      <div>
        <Link
          href="/gimnasios/marketing"
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
            Plantillas de Copywriting para Anuncios y WhatsApp
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Elimina la barrera de la hoja en blanco. Ponemos a tu disposición plantillas de copywriting de respuesta directa y alta conversión optimizadas específicamente para gimnasios, boxes de CrossFit y estudios boutique.
          </p>
        </header>
      </div>

      {/* Recurso 1: Copys de Meta Ads */}
      <section className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 space-y-6 shadow-sm">
        <h2 className="text-2xl font-black text-[#111827]">1. Plantillas para Meta Ads (Facebook & Instagram)</h2>
        <p className="text-sm text-gray-600">
          Usa estas estructuras probadas en tus campañas de captación local orientadas a conseguir pases de prueba gratuitos:
        </p>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h4 className="text-sm font-black text-[#2563EB] uppercase">Estructura A: El Gancho Local (Ideal para barrios)</h4>
            <div className="mt-3 text-sm text-gray-700 font-mono bg-white p-4 rounded-xl border border-gray-200">
              <p><strong>Texto Principal:</strong> ¡Atención vecinos de [Nombre de tu Barrio/Zona]! 📢</p>
              <p className="mt-2">¿Estás buscando un gimnasio limpio, sin aglomeraciones y con entrenadores que sí te ayuden a conseguir tus objetivos? 🏋️‍♂️</p>
              <p className="mt-2">En [Nombre de tu Gimnasio] queremos demostrarte que entrenar con material de primer nivel y un gran ambiente es posible. Por eso, esta semana regalamos <strong>15 pases de 1 día completo VIP</strong> con acceso a sala de fuerza y clases dirigidas.</p>
              <p className="mt-2">👉 Haz clic abajo, completa tus datos y descarga tu pase al instante por WhatsApp.</p>
              <p className="mt-4"><strong>Título del Anuncio:</strong> ¡Consigue tu Pase de 1 Día VIP Gratis! 🎟️</p>
              <p><strong>Descripción:</strong> Oferta exclusiva para residentes locales.</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h4 className="text-sm font-black text-[#2563EB] uppercase">Estructura B: Derribar la Objeción del Tiempo</h4>
            <div className="mt-3 text-sm text-gray-700 font-mono bg-white p-4 rounded-xl border border-gray-200">
              <p><strong>Texto Principal:</strong> "Es que no tengo tiempo para entrenar..." ⏳</p>
              <p className="mt-2">¿Te suena? Todos tenemos vidas ocupadas, pero tu salud no debería ser el precio a pagar.</p>
              <p className="mt-2">En [Nombre del Gimnasio] hemos diseñado circuitos de fuerza rápidos y altamente eficientes de 45 minutos basados en evidencia científica para que entrenes, sudes y regreses a tu rutina sin perder el día.</p>
              <p className="mt-2">Ven a conocernos gratis hoy mismo con un pase VIP de 1 día completo.</p>
              <p className="mt-2">👉 Toca en "Más información" y regístrate en menos de 30 segundos.</p>
              <p className="mt-4"><strong>Título del Anuncio:</strong> ¿Entrenar en 45 minutos? Es Posible. ⏱️</p>
              <p><strong>Descripción:</strong> Descarga tu pase VIP gratis y compruébalo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recurso 2: Secuencias por WhatsApp Business API */}
      <section className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 space-y-6 shadow-sm">
        <h2 className="text-2xl font-black text-[#111827]">2. Mensajes para la API de WhatsApp (Autoresponders)</h2>
        <p className="text-sm text-gray-600">
          Usa estas plantillas automáticas integradas en tu CRM de captación para agendar visitas:
        </p>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h4 className="text-sm font-black text-[#22C55E] uppercase">Recordatorio de Cita No Presentada</h4>
            <div className="mt-3 text-sm text-gray-700 font-mono bg-white p-4 rounded-xl border border-gray-200">
              "Hola [Nombre]! Te echamos de menos ayer en tu visita a [Nombre de tu Gimnasio]. 😔 Entendemos perfectamente que surgen imprevistos de última hora. ¿Qué te parece si reagendamos tu pase de prueba gratuito para hoy por la tarde o mañana? Escríbeme tu horario y te dejo el pase reservado en recepción."
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h4 className="text-sm font-black text-[#22C55E] uppercase">Mensaje de Onboarding (Día 3 de inscripción)</h4>
            <div className="mt-3 text-sm text-gray-700 font-mono bg-white p-4 rounded-xl border border-gray-200">
              "¡Hola [Nombre]! Qué alegría tenerte a bordo en [Nombre de tu Gimnasio]. 🚀 Queremos asegurarnos de que tu primera semana sea perfecta. Recuerda que tienes una sesión biomecánica inicial con nuestro entrenador para ajustar tu rutina básica. ¿Ya la has reservado? Si no, responde con la palabra 'CITA' y la agendamos en un clic."
            </div>
          </div>
        </div>
      </section>

      {/* Explicación Técnica y Beneficios */}
      <section className="bg-blue-50/50 rounded-3xl border border-blue-100 p-8 sm:p-10 space-y-4 text-sm text-gray-700 leading-relaxed">
        <h3 className="text-lg font-bold text-[#111827]">La Anatomía del Copywriting de Respuesta Directa</h3>
        <p>
          Para que la publicidad local en el sector fitness funcione, los anuncios deben poseer una estructura estructurada conocida como el modelo **AIDA (Atención, Interés, Deseo, Acción)**:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
          <li><strong>Atención:</strong> Un gancho inicial potente (como alusiones geográficas directas al barrio o código postal).</li>
          <li><strong>Interés:</strong> Identificación del problema real (aglomeraciones, falta de ayuda del equipo de sala, falta de tiempo).</li>
          <li><strong>Deseo:</strong> Presentación de tu gimnasio como la solución ideal libre de riesgos (pase de prueba gratuito sin tarjeta de crédito).</li>
          <li><strong>Acción:</strong> Un llamado claro a la acción y limitación en el número de pases disponibles (escasez activa).</li>
        </ul>
      </section>
    </div>
  );
}
