import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketing para Gimnasios y Captación de Socios | Impulse Fitness",
  description:
    "Estrategias B2B de crecimiento para centros deportivos. Aumenta tus leads, optimiza la retención de clientes y automatiza la gestión de tu gimnasio.",
};

export default function MarketingGimnasiosPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      {/* Migas de pan y Cabecera */}
      <div>
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-2">
          <Link href="/gimnasios" className="hover:text-[#2563EB] transition-colors">
            Gimnasios
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Soluciones B2B</span>
        </nav>

        <header className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight">
            Marketing para Gimnasios
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-600 max-w-2xl">
            Sistemas automatizados de captación y fidelización diseñados específicamente
            para rentabilizar metros cuadrados e instalaciones deportivas.
          </p>
        </header>
      </div>

      {/* Grid de Soluciones en Tarjetas (Cards) con sombra suave, hover ligero y esquinas de 16px a 24px */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Captación de Leads Automatizada",
            desc: "Embudos de conversión con pases de prueba gratuitos de 1 día integrados directamente con tu software de control de accesos.",
            tag: "Adquisición",
            tagBg: "bg-blue-50 text-[#2563EB]",
          },
          {
            title: "Sistemas de Retención Predictiva",
            desc: "Análisis de asistencia mediante inteligencia artificial para detectar patrones de abandono y enviar ofertas automáticas antes de la baja.",
            tag: "Fidelización",
            tagBg: "bg-green-50 text-[#22C55E]",
          },
          {
            title: "Posicionamiento SEO Local",
            desc: "Domina las intenciones de búsqueda en Google Maps para aparecer siempre como la primera opción en tu código postal o barrio.",
            tag: "Visibilidad",
            tagBg: "bg-purple-50 text-purple-600",
          },
        ].map((sol, idx) => (
          <article
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between"
          >
            <div>
              <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${sol.tagBg}`}>
                {sol.tag}
              </span>
              <h3 className="text-lg font-bold text-[#111827] mt-3">
                {sol.title}
              </h3>
              {/* Texto normal (Body): ideal de 16px a 18px */}
              <p className="mt-2 text-base text-gray-600 leading-relaxed">
                {sol.desc}
              </p>
            </div>

            {/* Color primario: Azul eléctrico moderado (#2563EB) */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <button className="text-sm font-bold text-[#2563EB] hover:underline flex items-center space-x-1">
                <span>Solicitar demo B2B</span>
                <span>→</span>
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* Tarjeta de CTA de Cierre */}
      <section className="bg-white rounded-3xl border border-gray-200 p-8 text-center max-w-3xl mx-auto w-full shadow-sm">
        <h2 className="text-2xl font-black text-[#111827]">
          ¿Gestionas una cadena o un centro independiente?
        </h2>
        <p className="mt-2 text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
          Hablemos sobre cómo integrar tu inventario de pases en nuestro directorio
          B2C para recibir visitas recurrentes sin coste fijo por alta.
        </p>
        <button className="mt-6 px-8 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-base transition-colors shadow-sm">
          Agendar consultoría gratuita
        </button>
      </section>
    </div>
  );
}
