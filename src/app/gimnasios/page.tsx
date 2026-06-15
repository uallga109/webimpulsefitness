import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gym Marketing: Soluciones de Crecimiento para Gimnasios | Impulse Fitness",
  description:
    "Portal B2B definitivo de crecimiento para centros deportivos. Descubre estrategias de captación, retención predictiva, SEO local, calculadora de ROI y plantillas de copywriting.",
};

export default function GimnasiosPage() {
  return (
    <div className="flex flex-col space-y-12 animate-fadeIn mb-12">
      {/* Cabecera grande y premium */}
      <header className="relative w-full rounded-3xl overflow-hidden shadow-lg bg-white border border-slate-200 p-8 sm:p-12 md:p-14 flex flex-col justify-center min-h-[300px]">
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[250px] h-[250px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-black uppercase tracking-wider border border-blue-200/60 shadow-sm">
            <span>🏢 Área B2B Corporativa</span>
            <span>•</span>
            <span>Ecosistema de Crecimiento</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Gym Marketing <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Sistemas de Crecimiento
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-medium">
            Diseñamos soluciones tecnológicas y de marketing estratégico específicamente para propietarios de centros deportivos, boxes de CrossFit y estudios boutique. Domina tu zona local, optimiza tus métricas de adquisición y escala tu facturación con metodologías probadas.
          </p>
        </div>
      </header>

      {/* Grid de Pilares de Negocio */}
      <section className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
            Los 4 Pilares del Marketing B2B
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Metodologías estructuradas para escalar tu centro deportivo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Captación de Leads",
              desc: "Embudos de Meta/TikTok Ads y secuencias de WhatsApp para maximizar visitas.",
              tag: "Pilar 1",
              bgColor: "bg-blue-50 text-blue-600 border border-blue-200",
              href: "/gimnasios/marketing/captacion",
            },
            {
              title: "Retención Predictiva",
              desc: "Modelos de control para re-activar socios ausentes antes de solicitar su baja.",
              tag: "Pilar 2",
              bgColor: "bg-green-50 text-green-600 border border-green-200",
              href: "/gimnasios/marketing/fidelizacion",
            },
            {
              title: "SEO Local & Google Maps",
              desc: "Dominancia del local pack en tu código postal para captar búsquedas de proximidad.",
              tag: "Pilar 3",
              bgColor: "bg-purple-50 text-purple-600 border border-purple-200",
              href: "/gimnasios/marketing/seo-local",
            },
            {
              title: "Ticket Medio (LTV)",
              desc: "Embudos de upselling aplicados a nutrición, retos y asesorías personalizadas.",
              tag: "Pilar 4",
              bgColor: "bg-amber-50 text-amber-600 border border-amber-200",
              href: "/gimnasios/marketing/rentabilidad",
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

      {/* Grid de Herramientas Interactivas y Copywriting */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Calculadora de ROI */}
        <article className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 sm:p-8 flex flex-col justify-between group">
          <div>
            <div className="h-40 w-full rounded-2xl bg-green-50 flex items-center justify-center mb-6 border border-green-100">
              <span className="text-5xl transform group-hover:scale-110 transition-transform duration-300">📊</span>
            </div>
            <h2 className="text-2xl font-black text-[#111827]">
              Calculadora de ROI y Métricas
            </h2>
            <p className="mt-3 text-base text-gray-600 leading-relaxed font-medium">
              Audita tus presupuestos de marketing y campañas digitales. Introduce tus costes por lead (CPL), ratios de cierre de ventas, costes de adquisición por socio (CAC) y Lifetime Value (LTV) para estimar tu retorno neto.
            </p>
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-100">
            <Link
              href="/gimnasios/marketing/calculadora-roi"
              className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-base transition-colors shadow-sm"
            >
              Iniciar Calculadora de ROI →
            </Link>
          </div>
        </article>

        {/* Plantillas de Copywriting */}
        <article className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 sm:p-8 flex flex-col justify-between group">
          <div>
            <div className="h-40 w-full rounded-2xl bg-amber-50 flex items-center justify-center mb-6 border border-amber-100">
              <span className="text-5xl transform group-hover:scale-110 transition-transform duration-300">✍️</span>
            </div>
            <h2 className="text-2xl font-black text-[#111827]">
              Plantillas de Copywriting para Anuncios
            </h2>
            <p className="mt-3 text-base text-gray-600 leading-relaxed font-medium">
              Ahorra tiempo de redacción y aumenta tu conversión. Accede a copys y scripts de anuncios optimizados y listos para usar en Instagram Ads, TikTok Ads, secuencias de correo y guiones de mensajería de WhatsApp.
            </p>
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-100">
            <Link
              href="/gimnasios/marketing/plantillas-copywriting"
              className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-[#2563EB] font-bold text-base border border-gray-200 transition-colors"
            >
              Descargar Plantillas Gratuitas →
            </Link>
          </div>
        </article>
      </section>

      {/* Franja de Estadísticas del Sector */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-8">
          <p className="text-xs font-black text-blue-400 uppercase tracking-widest">
            Estadísticas Clave del Mercado Fitness
          </p>
          <h3 className="text-2xl font-black text-white mt-1">
            Métricas B2B de Centros Deportivos
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
          <div className="pt-4 md:pt-0 px-4 space-y-2">
            <span className="text-3xl sm:text-4xl font-black text-[#2563EB] tracking-tight block">
              3.5x
            </span>
            <span className="text-xs font-bold text-gray-200 uppercase tracking-wider block">
              LTV a CAC Ratio
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              El valor de vida de un socio debe superar por lo menos tres veces el coste de adquisición para asegurar la viabilidad comercial.
            </p>
          </div>

          <div className="pt-4 md:pt-0 px-4 space-y-2">
            <span className="text-3xl sm:text-4xl font-black text-[#22C55E] tracking-tight block">
              &lt; 4%
            </span>
            <span className="text-xs font-bold text-gray-200 uppercase tracking-wider block">
              Tasa de Abandono (Churn)
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Mantener la tasa de deserción mensual por debajo del 4% estabiliza el flujo de caja e incrementa el beneficio neto.
            </p>
          </div>

          <div className="pt-4 md:pt-0 px-4 space-y-2">
            <span className="text-3xl sm:text-4xl font-black text-purple-400 tracking-tight block">
              +40%
            </span>
            <span className="text-xs font-bold text-gray-200 uppercase tracking-wider block">
              Retorno SEO Local
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Estar en los primeros puestos del Local Pack de Google Maps aumenta un 40% las conversiones a llamada y solicitudes de ruta.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
