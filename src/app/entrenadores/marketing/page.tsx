import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Estrategias de Marketing y Marca Personal para Entrenadores | Impulse Fitness B2B",
  description:
    "Ecosistema de desarrollo de negocio para entrenadores personales. Aprende a digitalizar tus asesorías online, automatizar cobros recurrentes, calcular tarifas y vender alto ticket.",
};

export default function MarketingEntrenadoresPage() {
  return (
    <div className="flex flex-col space-y-12 animate-fadeIn">
      {/* Migas de pan */}
      <div>
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-4">
          <Link href="/entrenadores" className="hover:text-[#2563EB] transition-colors font-medium">
            Entrenadores
          </Link>
          <span>/</span>
          <span className="text-[#111827] font-bold">Soluciones B2B</span>
        </nav>

        {/* 1. Cabecera Hero Section */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-gray-100 pb-10">
          {/* Izquierda (Texto ampliado) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-3">
              <span>Trainer Growth System</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-tight">
              Sistemas de Escalabilidad y Marketing para Entrenadores
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              Deja de cambiar horas físicas por dinero en la sala del gimnasio. Implementamos metodologías y herramientas digitales de primer nivel para que puedas empaquetar tu conocimiento, automatizar cobros recurrentes y captar clientes online de alto ticket.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/entrenadores/marketing/calculadora-tarifas"
                className="px-6 py-3 rounded-xl bg-[#2563EB] text-white text-sm font-bold hover:bg-blue-700 transition-all shadow-sm"
              >
                Probar Calculadora de Tarifas
              </Link>
              <Link
                href="#soluciones"
                className="px-6 py-3 rounded-xl bg-gray-50 text-gray-700 text-sm font-bold hover:bg-gray-100 transition-all border border-gray-200"
              >
                Ver los 4 pilares
              </Link>
            </div>
          </div>

          {/* Derecha (Imagen) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-xl shadow-blue-900/5 aspect-[4/3] w-full group bg-gray-50">
              <div className="absolute inset-0 bg-[#22C55E]/10 flex items-center justify-center text-6xl">
                🚀
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-sm flex items-center space-x-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB] animate-pulse shrink-0" />
                <p className="text-xs font-bold text-[#111827] truncate">
                  Sistemas recurrentes de facturación automatizada 24/7
                </p>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* 2. Los 4 Pilares de Soluciones */}
      <section id="soluciones" className="space-y-6 pt-2">
        <div>
          <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest">
            Ecosistema Profesional
          </h2>
          <p className="text-xl sm:text-2xl font-black text-[#111827] mt-1 tracking-tight">
            Los 4 Pilares para Escalar tu Negocio de Asesorías
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Página de Captación y Funnels",
              desc: "Diseño y estructura de landing pages libres de distracciones, con embudos de captación de leads en redes sociales de máxima efectividad.",
              tag: "Visibilidad",
              tagBg: "bg-blue-50 text-[#2563EB]",
              href: "/entrenadores/marketing/visibilidad",
            },
            {
              title: "Gestión de Pagos Recurrentes",
              desc: "Implementación de Stripe y cobros por suscripción recurrente en tarjeta para automatizar cobros mensuales y estabilizar flujos de caja.",
              tag: "Automatización",
              tagBg: "bg-green-50 text-[#22C55E]",
              href: "/entrenadores/marketing/automatizacion",
            },
            {
              title: "Casos de Éxito Científicos",
              desc: "Sistemas para recopilar testimonios de transformación física que generen máxima credibilidad y cumplan rigurosamente las normativas.",
              tag: "Confianza",
              tagBg: "bg-purple-50 text-purple-600",
              href: "/entrenadores/marketing/confianza",
            },
            {
              title: "Programas Híbridos y Membresías",
              desc: "Empaqueta tus servicios en retos grupales de 21 días, programas híbridos (presencial + online) y membresías recurrentes de alto valor.",
              tag: "Escalabilidad",
              tagBg: "bg-amber-50 text-amber-600",
              href: "/entrenadores/marketing/escalabilidad",
            },
          ].map((sol, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col justify-between group"
            >
              <div>
                <span className={`px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider ${sol.tagBg}`}>
                  {sol.tag}
                </span>
                <h3 className="text-lg font-black text-[#111827] mt-4 group-hover:text-[#2563EB] transition-colors leading-snug">
                  {sol.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {sol.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-50">
                <Link
                  href={sol.href}
                  className="text-xs sm:text-sm font-bold text-[#2563EB] hover:text-blue-700 flex items-center space-x-1 transition-colors"
                >
                  <span>Ver estrategia completa</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Recursos y Herramientas Destacadas */}
      <section className="bg-gray-50 rounded-3xl border border-gray-200 p-8 sm:p-10 space-y-6">
        <div>
          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-wider">
            Recursos y Playbooks Pro
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#111827] mt-3">
            Herramientas Interactivas de Pricing y Venta Directa
          </h2>
          <p className="text-base text-gray-600 mt-2">
            Ponemos a tu disposición tecnología financiera e instructivos paso a paso diseñados para que puedas optimizar el ticket medio de tus asesorías y estructurar tus tarifas sin cometer errores comunes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#111827]">Calculadora de Tarifas y Precios</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Calculadora interactiva avanzada para entrenadores personales. Determina cuánto debes cobrar mensualmente por cliente según tu estructura de costes, impuestos de autónomos y metas de beneficio neto.
              </p>
            </div>
            <div className="mt-6">
              <Link href="/entrenadores/marketing/calculadora-tarifas" className="text-sm font-black text-[#2563EB] hover:underline">
                Acceder a la calculadora →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#111827]">Playbook de Captación High-Ticket</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Una guía táctica exhaustiva para captar y vender asesorías online a tarifas premium (&gt;150€/mes). Incluye la estructura de llamadas de ventas, embudos VSL de Instagram y guiones de cierre.
              </p>
            </div>
            <div className="mt-6">
              <Link href="/entrenadores/marketing/playbook-adquisicion" className="text-sm font-black text-[#2563EB] hover:underline">
                Leer playbook estratégico →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Franja de Autoridad (Social Proof) */}
      <section className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-6">
          <p className="text-xs font-bold text-[#2563EB] uppercase tracking-widest">
            Métricas Comprobadas
          </p>
          <h3 className="text-base sm:text-lg font-bold text-[#111827] mt-1">
            Resultados promedio en nuestra comunidad de entrenadores
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0 px-4">
            <span className="text-3xl sm:text-4xl font-black text-[#2563EB] tracking-tight">
              -12h/mes
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#111827] mt-2">
              en tareas administrativas
            </span>
            <p className="text-xs text-gray-500 mt-1 max-w-xs">
              Altas, cobros automatizados por tarjeta, recordatorios automáticos de renovación y control de cobros atrasados.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center pt-4 md:pt-0 px-4">
            <span className="text-3xl sm:text-4xl font-black text-[#22C55E] tracking-tight">
              +45%
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#111827] mt-2">
              conversión lead a cliente
            </span>
            <p className="text-xs text-gray-500 mt-1 max-w-xs">
              Estructurando llamadas y landing pages enfocadas a resolver puntos de dolor reales con total credibilidad.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center pt-4 md:pt-0 px-4">
            <span className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight">
              0€
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#111827] mt-2">
              en cobros atrasados o impagos
            </span>
            <p className="text-xs text-gray-500 mt-1 max-w-xs">
              Gracias al cobro automatizado mediante pasarelas Stripe/SEPA recurrentes en el momento de onboarding.
            </p>
          </div>
        </div>
      </section>

      {/* 5. El Call to Action Final */}
      <section id="registro" className="bg-[#111827] text-white rounded-3xl p-8 sm:p-10 text-center max-w-4xl mx-auto w-full shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <span className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-xs font-bold uppercase tracking-wider">
            Impulse Pro Network
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-4 tracking-tight">
            ¿Quieres profesionalizar y escalar tus asesorías online?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Consigue acceso a toda nuestra suite de herramientas, playbooks estratégicos y soluciones de pasarela de pago para acelerar tu facturación mensual de inmediato.
          </p>
          <div className="mt-8">
            <button className="px-8 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-blue-500/20 active:scale-95">
              Agendar Consultoría de Crecimiento
            </button>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Sesión gratuita de 30 minutos sin compromiso. Evaluamos tu viabilidad de facturación.
          </p>
        </div>
      </section>
    </div>
  );
}
