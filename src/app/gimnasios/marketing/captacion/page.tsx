import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Captación de Leads Automatizada para Gimnasios | Impulse Fitness",
  description:
    "Estrategia avanzada de captación digital para gimnasios: Meta Ads, TikTok Ads, embudos de conversión local, automatización de WhatsApp y métricas CPL/CPA.",
};

export default function CaptacionMarketingPage() {
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
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            <span>Pilar 1 • Captación Automatizada</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-tight">
            Máquina de Adquisición Digital de Socios
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            Olvídate de depender exclusivamente del boca a boca o de repartir folletos físicos. Diseñamos e implementamos embudos de adquisición digital de alto rendimiento que capturan la demanda activa de tu área geográfica y conducen a los clientes directamente a la recepción de tu gimnasio en piloto automático.
          </p>
        </header>
      </div>

      {/* Sección 1: El Embudo Omnicanal */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-[#111827]">El Embudo de Conversión Local de 4 Etapas</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          Para que una campaña local sea rentable, no basta con acumular clics o "likes" en redes sociales. Estructuramos un sistema de nutrición y conversión de leads en cuatro fases diseñadas específicamente para optimizar el retorno de inversión publicitaria (ROAS):
        </p>

        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm sm:text-base text-left">
            <thead className="bg-gray-50 text-xs font-black uppercase text-gray-500 tracking-wider">
              <tr>
                <th className="px-6 py-4">Fase</th>
                <th className="px-6 py-4">Canal / Herramienta</th>
                <th className="px-6 py-4">Acción Estratégica</th>
                <th className="px-6 py-4">Métrica Clave</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-y-gray-200 bg-white">
              <tr>
                <td className="px-6 py-4 font-bold text-[#111827]">1. Atracción Local</td>
                <td className="px-6 py-4">Meta Ads & TikTok Ads</td>
                <td className="px-6 py-4">Anuncios hiper-segmentados a 3-5 km a la redonda del centro deportivo.</td>
                <td className="px-6 py-4">CTR &gt; 1.8% / CPL bajo</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-[#111827]">2. Captura (Lead Gen)</td>
                <td className="px-6 py-4">Landing Page Exclusiva</td>
                <td className="px-6 py-4">Pase gratuito de 1 día a cambio de nombre, email y teléfono validado.</td>
                <td className="px-6 py-4">Tasa de conversión &gt; 25%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-[#111827]">3. Nutrición Express</td>
                <td className="px-6 py-4">WhatsApp Business API</td>
                <td className="px-6 py-4">Recordatorio automatizado e incentivo extra (estudio corporal) si acude en 48h.</td>
                <td className="px-6 py-4">Tasa de apertura &gt; 90%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-[#111827]">4. Cierre y Venta</td>
                <td className="px-6 py-4">Software CRM & Recepción</td>
                <td className="px-6 py-4">Tour de instalaciones estructurado y oferta de alta inmediata (sin matrícula).</td>
                <td className="px-6 py-4">Conversión Lead a Socio &gt; 35%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Sección 2: Los Pilares Técnicos del Éxito */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center text-xl font-black mb-6">
              01
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Anuncios de Generación Directa
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Diseñamos creatividades dinámicas y copys con gancho local (ej. <em>"¡Atención Almería! Consigue tu pase gratis..."</em>) que reducen el coste por lead (CPL) a una fracción del promedio nacional.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center text-xl font-black mb-6">
              02
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Secuencias Automatizadas
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Conectamos automatizaciones de WhatsApp para enviar el pase de prueba al instante. Cuanto menor es el tiempo de respuesta (lead response time), mayor es la probabilidad de conversión física.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center text-xl font-black mb-6">
              03
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Integración Nativa CRM
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Conectamos tus campañas de Meta Ads directamente con plataformas como Resasports, Trainingym, Mindbody o Virtuagym para que tus asesores dispongan de toda la información en tiempo real.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 3: Guión de Seguimiento Exclusivo por WhatsApp */}
      <section className="bg-blue-50/50 rounded-3xl border border-blue-100 p-8 sm:p-10 space-y-6">
        <h2 className="text-2xl font-black text-[#111827]">Workflow Táctico de WhatsApp Autoresponder</h2>
        <p className="text-base text-gray-600">
          Este es el flujo exacto de mensajes automatizados que configuramos en la API de WhatsApp Business para asegurar que los leads agenden su primera visita:
        </p>

        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs">
            <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 text-[#2563EB] uppercase tracking-wide">
              Mensaje 1: Instantáneo (Al registrarse)
            </span>
            <p className="mt-3 text-sm text-gray-700 font-mono bg-gray-50 p-4 rounded-xl">
              "Hola [Nombre]! 👋 Qué ilusión que quieras probar [Nombre de tu Gimnasio]. Aquí tienes tu pase de 1 día gratis: [Enlace]. ¿Cuándo te viene mejor venir a activarlo, hoy por la tarde o mañana por la mañana? Escríbeme y te reservo tu taquilla digital. 🏋️‍♂️"
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs">
            <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-amber-50 text-amber-600 uppercase tracking-wide">
              Mensaje 2: Seguimiento (A las 24 horas si no contesta)
            </span>
            <p className="mt-3 text-sm text-gray-700 font-mono bg-gray-50 p-4 rounded-xl">
              "Hola [Nombre]! Te escribo rápido porque solo nos quedan 5 pases VIP para esta semana y no quiero que pierdas el tuyo. Si vienes a activarlo hoy, nuestro asesor te regalará un análisis biomecánico corporal básico en báscula de bioimpedancia completamente gratis. ¿Te apetece? 💪"
            </p>
          </div>
        </div>
      </section>

      {/* CTA Dedicado */}
      <section className="bg-[#111827] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto w-full shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          ¿Quieres multiplicar tus altas mensuales?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-lg mx-auto">
          Utiliza nuestras calculadoras interactivas para simular tu coste de adquisición ideal o solicita una consultoría gratuita para poner en marcha tu embudo.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/gimnasios/marketing/calculadora-roi"
            className="px-6 py-3 rounded-xl bg-white text-[#111827] font-bold text-sm transition-all hover:bg-gray-100"
          >
            Calcular mi ROI / CAC
          </Link>
          <Link
            href="/gimnasios/marketing#consultoria"
            className="px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-sm transition-all"
          >
            Quiero automatizar mis ventas →
          </Link>
        </div>
      </section>
    </div>
  );
}
