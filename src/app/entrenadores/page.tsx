import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marca Personal y Escalabilidad para Entrenadores | Impulse Fitness",
  description:
    "Portal B2B de crecimiento profesional para entrenadores personales. Aprende sobre automatización, calculadoras financieras de tarifas y playbooks de venta de alto ticket.",
};

export default function EntrenadoresPage() {
  return (
    <div className="flex flex-col space-y-12 animate-fadeIn">
      {/* Cabecera grande y premium */}
      <header className="border-b border-gray-200 pb-8">
        <div className="inline-flex items-center space-x-2 text-xs font-black text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Área Profesional B2B</span>
          <span>•</span>
          <span>Escalabilidad de Asesorías</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Marca Personal y Negocio para Entrenadores
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
          Te ayudamos a dar el salto de autoempleado a empresario del fitness. Deja de cambiar horas de entrenamiento por dinero y empieza a comercializar asesorías online de alto ticket, automatizar cobros recurrentes y construir una marca personal inquebrantable.
        </p>
      </header>

      {/* Grid de Soluciones e Instrumental B2B */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: 4 Pilares de Marca */}
        <article className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="h-40 w-full rounded-2xl bg-blue-50 flex items-center justify-center mb-6 border border-blue-100">
              <span className="text-4xl">🚀</span>
            </div>
            <h2 className="text-2xl font-black text-[#111827]">
              Los 4 Pilares de la Marca Personal
            </h2>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              Explora nuestra guía integral para digitalizar tus servicios, sistematizar cobros con tarjetas, conseguir testimonios y reseñas de transformación física y crear membresías dinámicas.
            </p>
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-100">
            <Link
              href="/entrenadores/marketing"
              className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-base transition-colors shadow-sm"
            >
              Explorar Ecosistema B2B →
            </Link>
          </div>
        </article>

        {/* Card 2: Calculadora Interactiva de Tarifas */}
        <article className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="h-40 w-full rounded-2xl bg-green-50 flex items-center justify-center mb-6 border border-green-100">
              <span className="text-4xl">🧮</span>
            </div>
            <h2 className="text-2xl font-black text-[#111827]">
              Calculadora de Tarifas Ideales
            </h2>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              ¿Sabes cuánto debes cobrar por tus asesorías online para alcanzar tus metas financieras? Introduce tus gastos mensuales, impuestos y horas de trabajo deseadas para calcular tus precios óptimos de cobro.
            </p>
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-100">
            <Link
              href="/entrenadores/marketing/calculadora-tarifas"
              className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-[#2563EB] font-bold text-base border border-gray-200 transition-colors"
            >
              Calcular mis Tarifas →
            </Link>
          </div>
        </article>

        {/* Card 3: Playbook de Adquisición High-Ticket */}
        <article className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="h-40 w-full rounded-2xl bg-amber-50 flex items-center justify-center mb-6 border border-amber-100">
              <span className="text-4xl">📖</span>
            </div>
            <h2 className="text-2xl font-black text-[#111827]">
              Playbook de Asesorías High-Ticket
            </h2>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              Accede a nuestro playbook estratégico completo para captar clientes de alto valor. Aprende a diseñar una VSL (Video Sales Letter), embudos de Instagram orgánicos y guiones probados de llamada de ventas.
            </p>
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-100">
            <Link
              href="/entrenadores/marketing/playbook-adquisicion"
              className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-[#2563EB] font-bold text-base border border-gray-200 transition-colors"
            >
              Ver Playbook de Ventas →
            </Link>
          </div>
        </article>

        {/* Card 4: Automatización de Cobros y Clientes */}
        <article className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="h-40 w-full rounded-2xl bg-purple-50 flex items-center justify-center mb-6 border border-purple-100">
              <span className="text-4xl">💳</span>
            </div>
            <h2 className="text-2xl font-black text-[#111827]">
              Automatización y Onboarding
            </h2>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              Sanea tus finanzas y ahorra tiempo administrativo. Elimina los cobros manuales implementando pasarelas de cobro recurrente integradas de forma 100% segura con tus sistemas de seguimiento.
            </p>
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-100">
            <Link
              href="/entrenadores/marketing/automatizacion"
              className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-[#2563EB] font-bold text-base border border-gray-200 transition-colors"
            >
              Automatizar mi Onboarding →
            </Link>
          </div>
        </article>
      </section>

      {/* Franja de Estadísticas del Sector */}
      <section className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-8">
          <p className="text-xs font-black text-[#2563EB] uppercase tracking-widest">
            Métricas de la Industria del Coaching
          </p>
          <h3 className="text-xl font-bold text-[#111827] mt-1">
            Datos de Crecimiento Profesional
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="pt-4 md:pt-0 px-4">
            <span className="text-3xl font-black text-[#2563EB] block">150€+</span>
            <span className="text-xs font-bold text-[#111827] mt-2 block">
              Tarifa Mensual High-Ticket Mínima
            </span>
            <p className="text-xs text-gray-500 mt-1">
              Las asesorías online de alto valor deben posicionarse por encima de este umbral para garantizar rentabilidad.
            </p>
          </div>

          <div className="pt-4 md:pt-0 px-4">
            <span className="text-3xl font-black text-[#22C55E] block">-10h/sem</span>
            <span className="text-xs font-bold text-[#111827] mt-2 block">
              Tiempo Administrativo Ahorrado
            </span>
            <p className="text-xs text-gray-500 mt-1">
              Automatizando el cobro y las fichas de seguimiento iniciales recuperas más de un día laboral completo.
            </p>
          </div>

          <div className="pt-4 md:pt-0 px-4">
            <span className="text-3xl font-black text-[#111827] block">+45%</span>
            <span className="text-xs font-bold text-[#111827] mt-2 block">
              Conversión de Llamadas
            </span>
            <p className="text-xs text-gray-500 mt-1">
              La utilización de guiones estructurados científicos multiplica de inmediato el cierre de clientes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
