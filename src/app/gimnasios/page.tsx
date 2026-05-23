import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soluciones de Crecimiento y Marketing para Gimnasios | Impulse Fitness",
  description:
    "Portal B2B de crecimiento para centros deportivos. Descubre estrategias de captación, retención predictiva, calculadoras de ROI y plantillas de copywriting.",
};

export default function GimnasiosPage() {
  return (
    <div className="flex flex-col space-y-12 animate-fadeIn">
      {/* Cabecera grande y premium */}
      <header className="border-b border-gray-200 pb-8">
        <div className="inline-flex items-center space-x-2 text-xs font-black text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Área Corporativa B2B</span>
          <span>•</span>
          <span>Sistemas de Crecimiento</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Crecimiento y Marketing para Gimnasios
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
          Diseñamos soluciones tecnológicas y de marketing estratégico específicamente para propietarios de centros deportivos, boxes de CrossFit y estudios boutique. Domina tu zona local, optimiza tus métricas financieras y escala tu número de socios activos con base científica.
        </p>
      </header>

      {/* Grid de Soluciones e Instrumental B2B */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: 4 Pilares de Marketing */}
        <article className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="h-40 w-full rounded-2xl bg-blue-50 flex items-center justify-center mb-6 border border-blue-100">
              <span className="text-4xl">📈</span>
            </div>
            <h2 className="text-2xl font-black text-[#111827]">
              Los 4 Pilares del Crecimiento
            </h2>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              Descubre nuestra metodología completa que cubre la captación omnicanal de leads, sistemas de retención automatizados con inteligencia artificial, SEO local en Google Maps y optimización del ticket medio.
            </p>
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-100">
            <Link
              href="/gimnasios/marketing"
              className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-base transition-colors shadow-sm"
            >
              Explorar Metodología B2B →
            </Link>
          </div>
        </article>

        {/* Card 2: Calculadora Interactiva de ROI */}
        <article className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="h-40 w-full rounded-2xl bg-green-50 flex items-center justify-center mb-6 border border-green-100">
              <span className="text-4xl">📊</span>
            </div>
            <h2 className="text-2xl font-black text-[#111827]">
              Calculadora de ROI y Métricas
            </h2>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              Mide la salud financiera de tu centro. Introduce tus presupuestos publicitarios, coste de adquisición por socio (CAC), Lifetime Value (LTV) y tasa de abandono (Churn) para estimar tu retorno real de inversión.
            </p>
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-100">
            <Link
              href="/gimnasios/marketing/calculadora-roi"
              className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-[#2563EB] font-bold text-base border border-gray-200 transition-colors"
            >
              Calcular ROI de Marketing →
            </Link>
          </div>
        </article>

        {/* Card 3: Plantillas de Copywriting Directo */}
        <article className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="h-40 w-full rounded-2xl bg-amber-50 flex items-center justify-center mb-6 border border-amber-100">
              <span className="text-4xl">✍️</span>
            </div>
            <h2 className="text-2xl font-black text-[#111827]">
              Plantillas & Playbooks de Copy
            </h2>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              Ahorra decenas de horas de redacción. Accede a nuestros textos publicitarios de alto impacto listos para copiar y pegar en Meta Ads (Facebook/Instagram), TikTok Ads, y guiones de WhatsApp de alta conversión.
            </p>
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-100">
            <Link
              href="/gimnasios/marketing/plantillas-copywriting"
              className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-[#2563EB] font-bold text-base border border-gray-200 transition-colors"
            >
              Ver Plantillas Gratuitas →
            </Link>
          </div>
        </article>

        {/* Card 4: SEO Local y Dominancia de Mapas */}
        <article className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="h-40 w-full rounded-2xl bg-purple-50 flex items-center justify-center mb-6 border border-purple-100">
              <span className="text-4xl">📍</span>
            </div>
            <h2 className="text-2xl font-black text-[#111827]">
              Auditoría y Posicionamiento Local
            </h2>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              El 80% de los nuevos leads buscan "gimnasio cerca de mí". Descubre cómo optimizar al máximo la ficha técnica de Google Business Profile y conseguir cientos de reseñas de 5 estrellas en piloto automático.
            </p>
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-100">
            <Link
              href="/gimnasios/marketing/seo-local"
              className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-[#2563EB] font-bold text-base border border-gray-200 transition-colors"
            >
              Dominar mi Zona Local →
            </Link>
          </div>
        </article>
      </section>

      {/* Franja de Estadísticas del Sector */}
      <section className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-8">
          <p className="text-xs font-black text-[#2563EB] uppercase tracking-widest">
            Estadísticas Clave del Mercado
          </p>
          <h3 className="text-xl font-bold text-[#111827] mt-1">
            Métricas de Éxito en Negocios Fitness
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="pt-4 md:pt-0 px-4">
            <span className="text-3xl font-black text-[#2563EB] block">3.5x</span>
            <span className="text-xs font-bold text-[#111827] mt-2 block">
              LTV a CAC Ratio Óptimo
            </span>
            <p className="text-xs text-gray-500 mt-1">
              El valor de vida de un socio debe superar más de tres veces el coste de captarlo.
            </p>
          </div>

          <div className="pt-4 md:pt-0 px-4">
            <span className="text-3xl font-black text-[#22C55E] block">&lt; 4%</span>
            <span className="text-xs font-bold text-[#111827] mt-2 block">
              Churn Mensual Objetivo
            </span>
            <p className="text-xs text-gray-500 mt-1">
              Mantener la tasa de deserción por debajo del 4% es vital para el crecimiento sostenido.
            </p>
          </div>

          <div className="pt-4 md:pt-0 px-4">
            <span className="text-3xl font-black text-[#111827] block">+40%</span>
            <span className="text-xs font-bold text-[#111827] mt-2 block">
              Impacto del SEO Local
            </span>
            <p className="text-xs text-gray-500 mt-1">
              Aparición en el Local Pack 3 de Google Maps multiplica las visitas web y llamadas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
