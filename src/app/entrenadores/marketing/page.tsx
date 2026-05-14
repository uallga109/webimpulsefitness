import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marca Personal y Escalabilidad para Entrenadores | Impulse Fitness",
  description:
    "Deja de cambiar tiempo por dinero. Soluciones avanzadas para automatizar la captación de clientes, gestionar cobros recurrentes y escalar tu negocio digital.",
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
          <span className="text-[#111827] font-bold">Marca Personal</span>
        </nav>

        {/* Mejora de la Cabecera (Hero Section a dos columnas con Imagen) */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-gray-100 pb-10">
          {/* Izquierda (Texto ampliado) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-3">
              <span>Trainer Growth System</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-tight">
              Marca Personal y Escalabilidad para Entrenadores
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              Deja de cambiar tiempo por dinero. Soluciones avanzadas para automatizar la captación, gestionar cobros recurrentes y escalar tu negocio digitalizando tus servicios.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#registro"
                className="px-6 py-3 rounded-xl bg-[#2563EB] text-white text-sm font-bold hover:bg-blue-700 transition-all shadow-sm"
              >
                Crear perfil profesional
              </Link>
              <Link
                href="#soluciones"
                className="px-6 py-3 rounded-xl bg-gray-50 text-gray-700 text-sm font-bold hover:bg-gray-100 transition-all border border-gray-200"
              >
                Explorar los 4 pilares
              </Link>
            </div>
          </div>

          {/* Derecha (Imagen: entrenador con tablet o portátil) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-xl shadow-blue-900/5 aspect-[4/3] w-full group bg-gray-50">
              <img
                src="/images/entrenadores/hero-trainer-marketing.jpg"
                alt="Entrenador personal gestionando clientes y rutinas desde una tablet"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
              />
              {/* Overlay sutil premium */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#111827]/10 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-sm flex items-center space-x-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB] animate-pulse shrink-0" />
                <p className="text-xs font-bold text-[#111827] truncate">
                  Gestión integral de clientes y pagos 24/7
                </p>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Grid de Soluciones en Tarjetas (Cards) con 4 pilares */}
      <section id="soluciones" className="space-y-6 pt-2">
        <div>
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Ecosistema Digital
          </h2>
          <p className="text-xl sm:text-2xl font-black text-[#111827] mt-1 tracking-tight">
            Los 4 pilares para escalar tus asesorías
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Página de Captación Optimizada",
              desc: "Un perfil profesional verificado dentro de nuestro directorio que actúa como landing page de alta conversión para tus servicios.",
              tag: "Visibilidad",
              tagBg: "bg-blue-50 text-[#2563EB]",
              href: "/entrenadores/marketing/visibilidad",
            },
            {
              title: "Gestión de Pagos Recurrentes",
              desc: "Olvídate de perseguir transferencias a final de mes. Cobros automáticos por tarjeta integrados de forma transparente y segura.",
              tag: "Automatización",
              tagBg: "bg-green-50 text-[#22C55E]",
              href: "/entrenadores/marketing/automatizacion",
            },
            {
              title: "Autoridad y Reseñas Reales",
              desc: "Sistema automatizado de recopilación de testimonios tras los primeros 30 días de asesoría para blindar tu reputación online.",
              tag: "Confianza",
              tagBg: "bg-purple-50 text-purple-600",
              href: "/entrenadores/marketing/confianza",
            },
            {
              title: "Creación de Retos y Membresías",
              desc: "Escala tus ingresos más allá de las horas del día. Lanza programas grupales, retos de 21 días y suscripciones recurrentes.",
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
                  <span>Ver en detalle</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Franja de Autoridad (Social Proof) */}
      <section className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-6">
          <p className="text-xs font-bold text-[#2563EB] uppercase tracking-widest">
            Métricas Comprobadas
          </p>
          <h3 className="text-base sm:text-lg font-bold text-[#111827] mt-1">
            Resultados en la red de entrenadores Impulse:
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
              Seguimientos, recordatorios y altas completamente automatizados.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center pt-4 md:pt-0 px-4">
            <span className="text-3xl sm:text-4xl font-black text-[#22C55E] tracking-tight">
              +45%
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#111827] mt-2">
              de conversión lead a cliente
            </span>
            <p className="text-xs text-gray-500 mt-1 max-w-xs">
              Gracias a landing pages libres de distracciones y alta credibilidad.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center pt-4 md:pt-0 px-4">
            <span className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight">
              0€
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#111827] mt-2">
              en pagos atrasados
            </span>
            <p className="text-xs text-gray-500 mt-1 max-w-xs">
              Finanzas saneadas mediante cobros automáticos SEPA y tarjeta.
            </p>
          </div>
        </div>
      </section>

      {/* Tarjeta de CTA Final (Cierre premium en gris oscuro) */}
      <section id="registro" className="bg-[#111827] text-white rounded-3xl p-8 sm:p-10 text-center max-w-4xl mx-auto w-full shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <span className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-xs font-bold uppercase tracking-wider">
            Impulse Pro Network
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-4 tracking-tight">
            Empieza a recibir solicitudes de clientes hoy mismo
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Crea tu perfil profesional gratuito en menos de 5 minutos y únete a la red de entrenadores de mayor crecimiento.
          </p>
          <div className="mt-8">
            <button className="px-8 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-blue-500/20 active:scale-95">
              Crear mi perfil profesional
            </button>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Sin costes ocultos. Configuración instantánea e integración de pasarela de pago.
          </p>
        </div>
      </section>
    </div>
  );
}
