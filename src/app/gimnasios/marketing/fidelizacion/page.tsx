import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sistemas de Retención y Fidelización para Gimnasios | Impulse Fitness",
  description:
    "Estrategia B2B avanzada de retención de socios para centros deportivos: fórmulas de Churn Rate, algoritmos predictivos, campañas NPS y planes de fidelización.",
};

export default function FidelizacionMarketingPage() {
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
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            <span>Pilar 2 • Fidelización & Retención</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-tight">
            Sistemas de Retención Predictiva de Socios
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            Adquirir un nuevo socio cuesta hasta 5 veces más que retener a uno existente. Implementamos modelos matemáticos y flujos automatizados de feedback que identifican patrones de comportamiento de baja antes de que se produzcan, protegiendo tus ingresos mensuales recurrentes (MRR).
          </p>
        </header>
      </div>

      {/* Sección 1: La Fórmula Matemática de la Salud de tu Gimnasio */}
      <section className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-2xl font-black text-[#111827]">Entendiendo el Churn Rate (Tasa de Abandono)</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          Para estabilizar un negocio de suscripción física, el Churn Rate es la métrica clave. Si captas 100 socios nuevos al mes pero pierdes 95 existentes, estás corriendo sobre una cinta a toda velocidad sin moverte del sitio.
        </p>

        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase text-gray-400">La Ecuación del Churn Rate</span>
            <div className="text-xl sm:text-2xl font-mono text-[#111827] font-black">
              Churn = (Bajas del Mes / Socios al Inicio) × 100
            </div>
            <p className="text-xs text-gray-500 max-w-lg">
              Un gimnasio saludable debe aspirar a un Churn mensual inferior al 4%. Superar el 6% indica fugas críticas en la experiencia de cliente o falta de onboarding temprano.
            </p>
          </div>
          <div className="shrink-0 bg-green-50 text-green-700 font-bold px-6 py-4 rounded-xl border border-green-100 text-center">
            <span className="block text-3xl font-black">&lt; 4%</span>
            <span className="text-xs">Meta Óptima</span>
          </div>
        </div>
      </section>

      {/* Sección 2: La Metodología de Retención en 3 Fases */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-green-50 text-[#22C55E] flex items-center justify-center text-xl font-black mb-6">
              01
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Onboarding los Primeros 90 Días
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              El 60% de las bajas ocurren en el primer trimestre. Diseñamos un flujo de bienvenida automatizado por email y WhatsApp que asegura que el socio acuda al menos 8 veces el primer mes, blindando la adherencia.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-green-50 text-[#22C55E] flex items-center justify-center text-xl font-black mb-6">
              02
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Alertas de Ausencia Predictiva
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Si el torno de acceso detecta que un socio no asiste durante 14 días consecutivos, nuestro sistema dispara automáticamente un WhatsApp personalizado con una videoguía rápida o invitándole a reajustar su plan.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-green-50 text-[#22C55E] flex items-center justify-center text-xl font-black mb-6">
              03
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Campañas de NPS Automatizadas
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Enviamos encuestas de Net Promoter Score de forma automática en los días 30, 90 y 180. Si un socio califica como detractor (&lt;7), alertamos de inmediato al director de sala para resolver su queja de forma privada.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 3: Algoritmo Predictivo de Control de Bajas */}
      <section className="bg-gray-50 rounded-3xl border border-gray-200 p-8 sm:p-10 space-y-6">
        <h2 className="text-2xl font-black text-[#111827]">El Algoritmo de Alerta Temprana</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          Mediante integraciones con tu software de control de accesos, mapeamos el nivel de "riesgo de abandono" de cada socio. Esto permite a tu equipo de sala intervenir proactivamente:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-green-50 text-green-700">Riesgo Bajo</span>
            <h4 className="text-base font-bold text-[#111827] mt-3">Asistencia Sostenida</h4>
            <p className="text-xs text-gray-500 mt-1">Socio acude 2 o más veces por semana. Puntuación NPS = 9-10. Recibe secuencias de fidelización estándar.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-amber-50 text-amber-700">Riesgo Medio</span>
            <h4 className="text-base font-bold text-[#111827] mt-3">Asistencia Decreciente</h4>
            <p className="text-xs text-gray-500 mt-1">Socio baja su frecuencia a &lt;1 vez a la semana o hace 10 días que no acude. Se envía WhatsApp de soporte express.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-red-50 text-red-700">Riesgo Crítico</span>
            <h4 className="text-base font-bold text-[#111827] mt-3">Inactividad Crónica</h4>
            <p className="text-xs text-gray-500 mt-1">Más de 20 días sin accesos o NPS &lt; 6. Tarea en el CRM para que el entrenador le llame personalmente hoy.</p>
          </div>
        </div>
      </section>

      {/* CTA Dedicado */}
      <section className="bg-[#111827] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto w-full shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          ¿Quieres auditar tu tasa de retención predictiva?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-lg mx-auto">
          Prueba nuestra calculadora de ROI para ver cómo influye la reducción del 1% de Churn en el beneficio neto anual de tu centro deportivo.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/gimnasios/marketing/calculadora-roi"
            className="px-6 py-3 rounded-xl bg-white text-[#111827] font-bold text-sm transition-all hover:bg-gray-100"
          >
            Calcular mi ROI y Churn Rate
          </Link>
          <Link
            href="/gimnasios/marketing#consultoria"
            className="px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-sm transition-all"
          >
            Solicitar Auditoría de Churn →
          </Link>
        </div>
      </section>
    </div>
  );
}
