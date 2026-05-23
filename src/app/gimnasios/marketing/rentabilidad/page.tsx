import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maximización del Ticket Medio y ARPU para Gimnasios | Impulse Fitness",
  description:
    "Estrategia B2B avanzada de maximización de la rentabilidad del socio: fórmulas de ARPU/LTV, planes de upselling, retail y venta cruzada de entrenamiento.",
};

export default function RentabilidadMarketingPage() {
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
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            <span>Pilar 4 • Maximización de Rentabilidad</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-tight">
            Maximización del Ticket Medio y ARPU
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            No limites tus ingresos únicamente a la cuota mensual recurrente de tus socios. Estructuramos embudos de upselling (venta adicional) y cross-selling (venta cruzada) automatizados dentro de tu aplicación o secuencias de correo electrónico, multiplicando tu rentabilidad por metro cuadrado.
          </p>
        </header>
      </div>

      {/* Sección 1: El Concepto de ARPU (Average Revenue Per User) */}
      <section className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-2xl font-black text-[#111827]">¿Cómo se calcula el ARPU en Centros Deportivos?</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          El ARPU representa los ingresos promedio generados por cada socio activo al mes. Multiplicar esta métrica a través de ingresos complementarios (vending, suplementación, sesiones de entrenamiento personal premium) es la forma más rápida de crecer sin depender únicamente de captar más volumen de socios.
        </p>

        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase text-gray-400">La Ecuación del ARPU</span>
            <div className="text-xl sm:text-2xl font-mono text-[#111827] font-black">
              ARPU = (Cuota Recurrente + Ingresos Complementarios) / Total de Socios
            </div>
            <p className="text-xs text-gray-500 max-w-lg">
              Un gimnasio comercial de precio medio (cuota de 39€) que logre vender suplementación o upgrades de forma automática a solo el 15% de sus socios incrementa su ARPU promedio de forma inmediata en más de un 12%.
            </p>
          </div>
          <div className="shrink-0 bg-amber-50 text-amber-700 font-bold px-6 py-4 rounded-xl border border-amber-100 text-center">
            <span className="block text-3xl font-black">+15% - 25%</span>
            <span className="text-xs">Incremento Típico</span>
          </div>
        </div>
      </section>

      {/* Sección 2: Los 3 Canales de Venta Cruzada (Cross-Selling) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl font-black mb-6">
              01
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Membresías Híbridas Premium
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Diseñamos planes escalonados (Upgrades) que añaden de forma opcional acceso a planificaciones nutricionales personalizadas, revisiones de grasa corporal por bioimpedancia o pases VIP para familiares.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl font-black mb-6">
              02
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Retail y Suplementación Integrada
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Sistematizamos la venta de suplementos deportivos mediante la instalación de córners interactivos o vending de alta gama con pasarela de pago móvil, optimizando el margen operativo del gimnasio.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl font-black mb-6">
              03
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Funnels de Entrenamiento Personal
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Estructuramos secuencias dinámicas en la app de entrenamiento para ofrecer packs promocionales de 3 sesiones de iniciación al entrenamiento personal a los nuevos socios, logrando la máxima conversión.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 3: Análisis de Rentabilidad de Productos y Upgrades */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-[#111827]">Márgenes de Venta y Canales Complementarios</h2>
        <p className="text-base text-gray-600">
          La siguiente tabla desglosa el margen de beneficio promedio y la tasa de conversión típica de los upgrades y canales de retail que implementamos en centros de fitness:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm sm:text-base text-left">
            <thead className="bg-gray-50 text-xs font-black uppercase text-gray-500 tracking-wider">
              <tr>
                <th className="px-6 py-4">Servicio / Upgrade</th>
                <th className="px-6 py-4">Tasa Conversión Promedio</th>
                <th className="px-6 py-4">Margen de Beneficio Neto</th>
                <th className="px-6 py-4">Impacto Financiero por Socio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-y-gray-200 bg-white">
              <tr>
                <td className="px-6 py-4 font-bold text-[#111827]">Pack Inicio Entrenamiento Personal</td>
                <td className="px-6 py-4">12% - 18% (Nuevos socios)</td>
                <td className="px-6 py-4">40% - 50% (Sueldo de Entrenador)</td>
                <td className="px-6 py-4">Pago único de +99€</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-[#111827]">Plan Nutricional en App del Centro</td>
                <td className="px-6 py-4">15% - 22% (Socios activos)</td>
                <td className="px-6 py-4">85% (Digital / Software)</td>
                <td className="px-6 py-4">Suscripción recurrente de +15€/mes</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-[#111827]">Retail Vending (Bebidas, Barritas)</td>
                <td className="px-6 py-4">35% (Socios recurrentes)</td>
                <td className="px-6 py-4">45% - 55% (Stock de Vendedor)</td>
                <td className="px-6 py-4">Gasto promedio de +8.50€/mes</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-[#111827]">Programas Corporativos (B2B Empresas)</td>
                <td className="px-6 py-4">2.5% (Empresas locales)</td>
                <td className="px-6 py-4">75% (Uso de horas valle del centro)</td>
                <td className="px-6 py-4">Contratos fijos anuales VIP</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Dedicado */}
      <section className="bg-[#111827] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto w-full shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          ¿Quieres multiplicar tu ticket medio?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-lg mx-auto">
          Ponemos a tu disposición tecnología interactiva y guías tácticas redactadas por expertos en crecimiento fitness.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/gimnasios/marketing/calculadora-roi"
            className="px-6 py-3 rounded-xl bg-white text-[#111827] font-bold text-sm transition-all hover:bg-gray-100"
          >
            Probar Calculadora de ROI
          </Link>
          <Link
            href="/gimnasios/marketing#consultoria"
            className="px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-sm transition-all"
          >
            Quiero optimizar mis ingresos →
          </Link>
        </div>
      </section>
    </div>
  );
}
