import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketing para Gimnasios y Centros Deportivos | Impulse Fitness",
  description:
    "Sistemas automatizados de captación, retención predictiva, posicionamiento SEO local y maximización del ticket medio para rentabilizar tu centro deportivo.",
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

        {/* 1. Upgrade de la Cabecera (Hero Section a dos columnas con Imagen) */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-gray-100 pb-10">
          {/* Izquierda (Texto ampliado) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-3">
              <span>B2B Growth Ecosystem</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-tight">
              Marketing para Gimnasios y Centros Deportivos
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              Sistemas automatizados de captación y fidelización diseñados específicamente para rentabilizar metros cuadrados e instalaciones deportivas. Deja de competir por precio y empieza a dominar tu zona de influencia con datos reales.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#consultoria"
                className="px-6 py-3 rounded-xl bg-[#2563EB] text-white text-sm font-bold hover:bg-blue-700 transition-all shadow-sm"
              >
                Agendar consultoría
              </Link>
              <Link
                href="#soluciones"
                className="px-6 py-3 rounded-xl bg-gray-50 text-gray-700 text-sm font-bold hover:bg-gray-100 transition-all border border-gray-200"
              >
                Ver los 4 pilares
              </Link>
            </div>
          </div>

          {/* Derecha (Imagen que transmite tecnología y fitness) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-xl shadow-blue-900/5 aspect-[4/3] w-full group bg-gray-50">
              <img
                src="/images/gimnasios/hero-gym-marketing.jpg"
                alt="Dashboard de analíticas y marketing para dueños de gimnasios"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
              />
              {/* Overlay sutil para garantizar un acabado ultra premium */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#111827]/10 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-sm flex items-center space-x-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse shrink-0" />
                <p className="text-xs font-bold text-[#111827] truncate">
                  Control en tiempo real de CPA y LTV
                </p>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* 2. Los 4 Pilares de Soluciones en Tarjetas (Cards) */}
      <section id="soluciones" className="space-y-6 pt-2">
        <div>
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Metodología Integral
          </h2>
          <p className="text-xl sm:text-2xl font-black text-[#111827] mt-1 tracking-tight">
            Los 4 pilares del crecimiento B2B
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Captación de Leads Automatizada",
              desc: "Embudos de conversión con pases de prueba gratuitos de 1 día integrados directamente con tu software de control de accesos.",
              tag: "Adquisición",
              tagBg: "bg-blue-50 text-[#2563EB]",
              href: "/gimnasios/marketing/captacion",
            },
            {
              title: "Sistemas de Retención Predictiva",
              desc: "Análisis de asistencia mediante inteligencia artificial para detectar patrones de abandono y enviar ofertas automáticas antes de la baja.",
              tag: "Fidelización",
              tagBg: "bg-green-50 text-[#22C55E]",
              href: "/gimnasios/marketing/fidelizacion",
            },
            {
              title: "Posicionamiento SEO Local",
              desc: "Domina las intenciones de búsqueda en Google Maps para aparecer siempre como la primera opción en tu código postal o barrio.",
              tag: "Visibilidad",
              tagBg: "bg-purple-50 text-purple-600",
              href: "/gimnasios/marketing/seo-local",
            },
            {
              title: "Maximización del Ticket Medio",
              desc: "Embudos de upselling automatizados dentro de tu app o email para vender sesiones de entrenamiento personal, suplementación y upgrades.",
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
                  <span>Ver en detalle</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Nueva Sección: Banda de Autoridad (Social Proof) */}
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
              Optimización del presupuesto en canales de captación digital.
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
              Fidelización temprana en el periodo más crítico del socio.
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
              Desde el clic inicial del anuncio hasta el torno de acceso físico.
            </p>
          </div>
        </div>
      </section>

      {/* 4. El Call to Action Final (Bloque gris oscuro premium) */}
      <section id="consultoria" className="bg-[#111827] text-white rounded-3xl p-8 sm:p-10 text-center max-w-4xl mx-auto w-full shadow-xl relative overflow-hidden">
        {/* Elemento de diseño de fondo sutil */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <span className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-xs font-bold uppercase tracking-wider">
            Impulse B2B Partnership
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-4 tracking-tight">
            ¿Gestionas una cadena o un centro independiente?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Hablemos sobre cómo integrar tu inventario de pases en nuestro directorio B2C para recibir visitas recurrentes sin coste fijo por alta.
          </p>
          <div className="mt-8">
            <button className="px-8 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-blue-500/20 active:scale-95">
              Agendar consultoría gratuita
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
