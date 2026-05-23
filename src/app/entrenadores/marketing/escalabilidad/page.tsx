import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Escalabilidad de Asesorías y Retos de 21 Días | Impulse Fitness",
  description:
    "Estrategia B2B avanzada de escalabilidad para entrenadores personales: programas híbridos, retos grupales, embudos recurrentes y membresías digitales.",
};

export default function EscalabilidadMarketingPage() {
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
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            <span>Pilar 4 • Modelos de Escalabilidad</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-tight">
            Escalabilidad Financiera: Rompe tu Techo de Horas
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            Vender horas presenciales en el gimnasio tiene un límite físico insuperable: el día solo tiene 24 horas y tú necesitas descansar. Diseñamos e implementamos ecosistemas de escalabilidad que te permiten empaquetar tu conocimiento en modelos grupales e híbridos de alta rentabilidad.
          </p>
        </header>
      </div>

      {/* Sección 1: La Escalera de Valor del Entrenador Personal */}
      <section className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-2xl font-black text-[#111827]">La Escalera de Productos e Ingresos Recurrentes</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          Para construir un negocio fitness sólido, debes diversificar tus servicios en diferentes niveles de precio y dedicación de tiempo. Esta es la estructura que sugerimos para maximizar tus ingresos mensuales:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm sm:text-base text-left">
            <thead className="bg-gray-50 text-xs font-black uppercase text-gray-500 tracking-wider">
              <tr>
                <th className="px-6 py-4">Nivel de Servicio</th>
                <th className="px-6 py-4">Tarifa de Mercado Recomendada</th>
                <th className="px-6 py-4">Dedicación de Tiempo</th>
                <th className="px-6 py-4">Límite de Clientes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-y-gray-200 bg-white">
              <tr>
                <td className="px-6 py-4 font-bold text-[#111827]">1. Reto Grupal 21 Días</td>
                <td className="px-6 py-4">29€ - 49€ (Pago único)</td>
                <td className="px-6 py-4">Muy baja (Soporte en grupo de Telegram)</td>
                <td className="px-6 py-4">Ilimitado</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-[#111827]">2. Asesoría Online Estándar</td>
                <td className="px-6 py-4">79€ - 99€ / mes (Recurrente)</td>
                <td className="px-6 py-4">Baja (Revisión quincenal en formulario)</td>
                <td className="px-6 py-4">80 - 100 clientes</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-[#111827]">3. Coaching Híbrido Premium</td>
                <td className="px-6 py-4">149€ - 249€ / mes (Recurrente)</td>
                <td className="px-6 py-4">Media (Asesoría online + 2 sesiones presenciales)</td>
                <td className="px-6 py-4">15 - 20 clientes</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-[#111827]">4. Consultoría 1-on-1 VIP</td>
                <td className="px-6 py-4">300€ - 500€ / mes (Recurrente)</td>
                <td className="px-6 py-4">Alta (Llamada de soporte semanal y chat diario)</td>
                <td className="px-6 py-4">5 - 8 clientes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Sección 2: El Plan de Lanzamiento del Reto 21 Días */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl font-black mb-6">
              01
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Definición de Meta Aguda
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              El reto debe prometer una victoria rápida y medible en un plazo ajustado. Ejemplos de éxito: <em>"Aprende a dominar la sentadilla profunda en 21 días"</em> o <em>"Reto de tonificación abdominal exprés"</em>.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl font-black mb-6">
              02
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Comunidad y Soporte Grupal
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Utilizamos grupos privados en Telegram o WhatsApp para fomentar el apoyo mutuo, compartir vídeos de biomecánica de los participantes y resolver dudas en directo de forma colectiva.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl font-black mb-6">
              03
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Embudo de Continuidad
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              En el día 18 del reto, lanzas una oferta exclusiva de transición hacia tu asesoría online estándar. Logras capitalizar la confianza generada y convertir el 20-30% de los alumnos en suscripciones recurrentes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Dedicado */}
      <section className="bg-[#111827] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto w-full shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          ¿Preparado para escalar tus asesorías?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-lg mx-auto">
          Utiliza nuestra calculadora interactiva de tarifas para modelar tu facturación ideal y lee el playbook estratégico de adquisición.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/entrenadores/marketing/calculadora-tarifas"
            className="px-6 py-3 rounded-xl bg-white text-[#111827] font-bold text-sm transition-all hover:bg-gray-100"
          >
            Calcular mi Plan de Tarifas
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
