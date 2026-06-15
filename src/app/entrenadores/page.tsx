import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketing para Entrenadores: Marca Personal y Escalabilidad | Impulse Fitness",
  description:
    "Portal B2B de crecimiento profesional para entrenadores personales. Optimiza tu negocio con herramientas de automatización, calculadoras de tarifas y playbooks high-ticket.",
};

export default function EntrenadoresPage() {
  return (
    <div className="flex flex-col space-y-12 animate-fadeIn mb-12">
      {/* Cabecera grande y premium */}
      <header className="relative w-full rounded-3xl overflow-hidden shadow-lg bg-white border border-slate-200 p-8 sm:p-12 md:p-14 flex flex-col justify-center min-h-[300px]">
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[250px] h-[250px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-black uppercase tracking-wider border border-blue-200/60 shadow-sm">
            <span>💪 Área B2B Profesional</span>
            <span>•</span>
            <span>Escalabilidad de Asesorías</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Marketing para Entrenadores <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Escala tu Negocio Fitness
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-medium">
            Deja de cambiar horas de entrenamiento por dinero en el gimnasio. Te proporcionamos las herramientas B2B estratégicas necesarias para digitalizar tus servicios, automatizar cobros recurrentes y consolidar un flujo constante de clientes bajo un modelo high-ticket.
          </p>
        </div>
      </header>

      {/* Grid de Pilares de Negocio */}
      <section className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
            Los 4 Pilares del Crecimiento
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Metodologías operativas para entrenadores que buscan digitalización y rentabilidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Automatización",
              desc: "Implementa pasarelas de pago seguro y flujos de onboarding automático sin fricciones.",
              tag: "Pilar 1",
              bgColor: "bg-blue-50 text-blue-600 border border-blue-200",
              href: "/entrenadores/marketing/automatizacion",
            },
            {
              title: "Escalabilidad",
              desc: "Estructura programas híbridos y asesorías grupales para atender a más clientes en menos tiempo.",
              tag: "Pilar 2",
              bgColor: "bg-green-50 text-green-600 border border-green-200",
              href: "/entrenadores/marketing/escalabilidad",
            },
            {
              title: "Atracción Orgánica",
              desc: "Estrategias de contenido optimizado en redes para captar leads calificados sin inversión publicitaria.",
              tag: "Pilar 3",
              bgColor: "bg-purple-50 text-purple-600 border border-purple-200",
              href: "/entrenadores/marketing/visibilidad",
            },
            {
              title: "Confianza & Conversión",
              desc: "Sistemas para documentar casos de éxito y construir autoridad en tu nicho de especialización.",
              tag: "Pilar 4",
              bgColor: "bg-amber-50 text-amber-600 border border-amber-200",
              href: "/entrenadores/marketing/confianza",
            },
          ].map((item, idx) => (
            <article key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${item.bgColor}`}>
                  {item.tag}
                </span>
                <h3 className="text-lg font-bold text-[#111827]">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link href={item.href} className="text-sm font-bold text-[#2563EB] hover:underline inline-flex items-center space-x-1">
                  <span>Ver Estrategia</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Grid de Herramientas e Instrumentos */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Calculadora de Tarifas */}
        <article className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 sm:p-8 flex flex-col justify-between group">
          <div>
            <div className="h-40 w-full rounded-2xl bg-green-50 flex items-center justify-center mb-6 border border-green-100">
              <span className="text-5xl transform group-hover:scale-110 transition-transform duration-300">🧮</span>
            </div>
            <h2 className="text-2xl font-black text-[#111827]">
              Calculadora de Tarifas Ideales
            </h2>
            <p className="mt-3 text-base text-gray-600 leading-relaxed font-medium">
              Calcula el precio óptimo de tus asesorías online. Ingresa tus gastos mensuales, impuestos, porcentaje de ahorro deseado y horas de trabajo para establecer un modelo de tarifas rentable que refleje tu verdadero valor.
            </p>
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-100">
            <Link
              href="/entrenadores/marketing/calculadora-tarifas"
              className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-base transition-colors shadow-sm"
            >
              Calcular mis Tarifas →
            </Link>
          </div>
        </article>

        {/* Playbook de Asesorías */}
        <article className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 sm:p-8 flex flex-col justify-between group">
          <div>
            <div className="h-40 w-full rounded-2xl bg-amber-50 flex items-center justify-center mb-6 border border-amber-100">
              <span className="text-5xl transform group-hover:scale-110 transition-transform duration-300">📖</span>
            </div>
            <h2 className="text-2xl font-black text-[#111827]">
              Playbook de Asesorías High-Ticket
            </h2>
            <p className="mt-3 text-base text-gray-600 leading-relaxed font-medium">
              Accede a la estrategia de ventas para entrenadores más efectiva. Aprende a crear ofertas irresistibles de alto valor (de 150€ a 500€/mes), estructurar guiones de venta telefónica y diseñar embudos de captación orgánica.
            </p>
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-100">
            <Link
              href="/entrenadores/marketing/playbook-adquisicion"
              className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-[#2563EB] font-bold text-base border border-gray-200 transition-colors"
            >
              Ver Playbook de Ventas →
            </Link>
          </div>
        </article>
      </section>

      {/* Franja de Estadísticas del Sector */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-8">
          <p className="text-xs font-black text-blue-400 uppercase tracking-widest">
            Estadísticas Clave del Coaching Online
          </p>
          <h3 className="text-2xl font-black text-white mt-1">
            Métricas de la Industria del Fitness
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
          <div className="pt-4 md:pt-0 px-4 space-y-2">
            <span className="text-3xl sm:text-4xl font-black text-[#2563EB] tracking-tight block">
              150€+
            </span>
            <span className="text-xs font-bold text-gray-200 uppercase tracking-wider block">
              Tarifa Mensual Mínima
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Las asesorías online de alto valor deben posicionarse por encima de este umbral para garantizar rentabilidad en el mercado hispanohablante.
            </p>
          </div>

          <div className="pt-4 md:pt-0 px-4 space-y-2">
            <span className="text-3xl sm:text-4xl font-black text-[#22C55E] tracking-tight block">
              -10h/sem
            </span>
            <span className="text-xs font-bold text-gray-200 uppercase tracking-wider block">
              Ahorro Administrativo
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Automatizando cobros recurrentes y los formularios iniciales de onboarding liberas más de un día completo de trabajo administrativo a la semana.
            </p>
          </div>

          <div className="pt-4 md:pt-0 px-4 space-y-2">
            <span className="text-3xl sm:text-4xl font-black text-purple-400 tracking-tight block">
              +45%
            </span>
            <span className="text-xs font-bold text-gray-200 uppercase tracking-wider block">
              Conversión de Llamadas
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              La utilización de guiones estructurados enfocados en problemas y metas específicas multiplica de inmediato el cierre de clientes en llamadas exploratorias.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
