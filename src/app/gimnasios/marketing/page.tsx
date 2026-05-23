import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketing Estratégico y Captación para Gimnasios | Impulse Fitness B2B",
  description:
    "Sistemas automatizados de captación local, retención predictiva de socios, posicionamiento SEO local y optimización del LTV para rentabilizar tu centro deportivo.",
};

export default function MarketingGimnasiosPage() {
  return (
    <div className="flex flex-col space-y-12 animate-fadeIn">
      {/* Migas de pan */}
      <div>
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-4">
          <Link href="/gimnasios" className="hover:text-[#2563EB] transition-colors font-medium">
            Gimnasios
          </Link>
          <span>/</span>
          <span className="text-[#111827] font-bold">Soluciones B2B</span>
        </nav>

        {/* 1. Cabecera Hero Section */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-gray-100 pb-10">
          {/* Izquierda (Texto ampliado) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-3">
              <span>B2B Growth Ecosystem</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-tight">
              Sistemas de Marketing de Alto Impacto para Gimnasios
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              Deja de competir por precio o depender de la estacionalidad de septiembre y enero. Implementamos ecosistemas automatizados de captación local y retención predictiva diseñados específicamente para optimizar la rentabilidad de cada metro cuadrado de tu instalación.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/gimnasios/marketing/calculadora-roi"
                className="px-6 py-3 rounded-xl bg-[#2563EB] text-white text-sm font-bold hover:bg-blue-700 transition-all shadow-sm"
              >
                Probar Calculadora de ROI
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
              <div className="absolute inset-0 bg-[#2563EB]/10 flex items-center justify-center text-6xl">
                📊
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-sm flex items-center space-x-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse shrink-0" />
                <p className="text-xs font-bold text-[#111827] truncate">
                  Análisis y Modelado de CAC & LTV en tiempo real
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
            Metodología de Crecimiento
          </h2>
          <p className="text-xl sm:text-2xl font-black text-[#111827] mt-1 tracking-tight">
            Los 4 Pilares Estratégicos del Éxito Fitness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Captación de Leads Automatizada",
              desc: "Embudos digitales con Meta Ads y TikTok Ads segmentados localmente y secuencias automatizadas de WhatsApp/Email para multiplicar visitas.",
              tag: "Adquisición",
              tagBg: "bg-blue-50 text-[#2563EB]",
              href: "/gimnasios/marketing/captacion",
            },
            {
              title: "Sistemas de Retención Predictiva",
              desc: "Modelos de control de abandono para identificar patrones de inasistencia antes de que se formalice la baja, reactivando socios a tiempo.",
              tag: "Fidelización",
              tagBg: "bg-green-50 text-[#22C55E]",
              href: "/gimnasios/marketing/fidelizacion",
            },
            {
              title: "Posicionamiento SEO Local",
              desc: "Optimización On-Page y SEO Off-Page en Google Maps para dominar de forma absoluta las búsquedas de tu código postal y zona de influencia.",
              tag: "Visibilidad",
              tagBg: "bg-purple-50 text-purple-600",
              href: "/gimnasios/marketing/seo-local",
            },
            {
              title: "Maximización del Ticket Medio",
              desc: "Embudos de upselling y venta cruzada de entrenamiento personal, retos corporativos, nutrición y suplementos integrados.",
              tag: "Rentabilidad",
              tagBg: "bg-amber-50 text-amber-600",
              href: "/gimnasios/marketing/rentabilidad",
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
            Recursos Premium Gratuitos
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#111827] mt-3">
            Herramientas Interactivas y Playbooks de Negocio
          </h2>
          <p className="text-base text-gray-600 mt-2">
            Ponemos a tu disposición tecnología interactiva y guías tácticas redactadas por expertos en crecimiento fitness para ayudarte a auditar tus propias campañas de marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#111827]">Calculadora de ROI y CAC/LTV</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Nuestra calculadora interactiva B2B te permite conocer la relación exacta entre el coste de adquisición (CAC) y el valor de vida (LTV) de tus socios para auditar la rentabilidad real de tus campañas.
              </p>
            </div>
            <div className="mt-6">
              <Link href="/gimnasios/marketing/calculadora-roi" className="text-sm font-black text-[#2563EB] hover:underline">
                Acceder a la calculadora →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#111827]">Plantillas Copywriting para Anuncios</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Playbook completo con guiones y copys directos optimizados para campañas locales de gimnasios en Instagram y TikTok, secuencias de recordatorio por WhatsApp y emails de retención.
              </p>
            </div>
            <div className="mt-6">
              <Link href="/gimnasios/marketing/plantillas-copywriting" className="text-sm font-black text-[#2563EB] hover:underline">
                Descargar plantillas →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Banda de Autoridad (Social Proof) */}
      <section className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-6">
          <p className="text-xs font-bold text-[#2563EB] uppercase tracking-widest">
            Métricas de Impacto
          </p>
          <h3 className="text-base sm:text-lg font-bold text-[#111827] mt-1">
            Resultados promedio en nuestros centros asociados
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0 px-4">
            <span className="text-3xl sm:text-4xl font-black text-[#2563EB] tracking-tight">
              -35%
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#111827] mt-2">
              Coste de Adquisición (CPA)
            </span>
            <p className="text-xs text-gray-500 mt-1 max-w-xs">
              Optimización del presupuesto en canales de captación digital y menor dependencia de promociones agresivas.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center pt-4 md:pt-0 px-4">
            <span className="text-3xl sm:text-4xl font-black text-[#22C55E] tracking-tight">
              +22%
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#111827] mt-2">
              Retención primeros 90 días
            </span>
            <p className="text-xs text-gray-500 mt-1 max-w-xs">
              Fidelización temprana en el periodo más crítico mediante flujos de onboarding dinámicos y análisis de uso.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center pt-4 md:pt-0 px-4">
            <span className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight">
              100%
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#111827] mt-2">
              Trazabilidad total
            </span>
            <p className="text-xs text-gray-500 mt-1 max-w-xs">
              Integración nativa con tu software CRM para seguir cada euro invertido en anuncios hasta su conversión física.
            </p>
          </div>
        </div>
      </section>

      {/* 5. El Call to Action Final */}
      <section id="consultoria" className="bg-[#111827] text-white rounded-3xl p-8 sm:p-10 text-center max-w-4xl mx-auto w-full shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <span className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-xs font-bold uppercase tracking-wider">
            Impulse Growth Partnership
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-4 tracking-tight">
            ¿Gestionas una cadena o un centro deportivo independiente?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Analicemos juntos tu embudo actual de ventas y tus campañas locales. Te ayudaremos a diseñar un flujo de trabajo digital personalizado sin compromisos.
          </p>
          <div className="mt-8">
            <button className="px-8 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-blue-500/20 active:scale-95">
              Solicitar Auditoría de Marketing Gratuita
            </button>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Sesión estratégica de 30 minutos por videollamada sin compromiso.
          </p>
        </div>
      </section>
    </div>
  );
}
