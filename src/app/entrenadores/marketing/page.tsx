import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketing para Entrenadores y Marca Personal | Impulse Fitness",
  description:
    "Escala tus asesorías online y servicios presenciales. Consigue leads cualificados, automatiza tus seguimientos y potencia tu presencia digital.",
};

export default function MarketingEntrenadoresPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      {/* Migas de pan y Cabecera */}
      <div>
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-2">
          <Link href="/entrenadores" className="hover:text-[#2563EB] transition-colors">
            Entrenadores
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Marca Personal</span>
        </nav>

        <header className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight">
            Marketing para Entrenadores
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-600 max-w-2xl">
            Soluciones avanzadas para automatizar el alta de clientes, gestionar
            pagos recurrentes y proyectar autoridad profesional en el entorno digital.
          </p>
        </header>
      </div>

      {/* Grid de Soluciones en Tarjetas (Cards) con sombra suave, hover ligero y esquinas de 16px a 24px */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Página de Captación Optimizada",
            desc: "Un perfil profesional verificado dentro de nuestro directorio que actúa como landing page de alta conversión para tus servicios.",
            tag: "Visibilidad",
            tagBg: "bg-blue-50 text-[#2563EB]",
          },
          {
            title: "Gestión de Pagos Recurrentes",
            desc: "Olvídate de perseguir transferencias a final de mes. Cobros automáticos por tarjeta integrados de forma transparente y segura.",
            tag: "Automatización",
            tagBg: "bg-green-50 text-[#22C55E]",
          },
          {
            title: "Autoridad y Reseñas Reales",
            desc: "Sistema automatizado de recopilación de testimonios tras los primeros 30 días de asesoría para blindar tu reputación online.",
            tag: "Confianza",
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
                <span>Ver planes para entrenadores</span>
                <span>→</span>
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* Tarjeta de CTA Final */}
      <section className="bg-white rounded-3xl border border-gray-200 p-8 text-center max-w-3xl mx-auto w-full shadow-sm">
        <h2 className="text-2xl font-black text-[#111827]">
          Empieza a recibir solicitudes de clientes hoy mismo
        </h2>
        <p className="mt-2 text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
          Crea tu perfil profesional gratuito en menos de 5 minutos y únete a
          la red de entrenadores de mayor crecimiento.
        </p>
        <button className="mt-6 px-8 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-base transition-colors shadow-sm">
          Crear mi perfil profesional
        </button>
      </section>
    </div>
  );
}
