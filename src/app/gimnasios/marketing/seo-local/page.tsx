import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Posicionamiento SEO Local y Google Maps para Gimnasios | Impulse Fitness",
  description:
    "Estrategia B2B avanzada de SEO Local para centros deportivos: posicionamiento en Google Maps, optimización de fichas de Google Business, NAP y reseñas automáticas.",
};

export default function SeoLocalMarketingPage() {
  return (
    <div className="flex flex-col space-y-12 animate-fadeIn max-w-5xl mx-auto w-full py-4">
      {/* Botón de regreso y navegación */}
      <div>
        <Link
          href="/gimnasios/marketing"
          className="inline-flex items-center space-x-2 text-sm font-bold text-[#2563EB] hover:text-blue-700 transition-colors mb-6 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Volver al resumen B2B</span>
        </Link>

        {/* Cabecera limpia y espaciosa */}
        <header className="border-b border-gray-100 pb-8">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            <span>Pilar 3 • Visibilidad & SEO Local</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-tight">
            Dominio Absoluto en Google Maps
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            El 80% de los usuarios eligen su gimnasio buscando "gimnasio cerca de mí" en su teléfono móvil. Si tu centro deportivo no aparece entre los 3 primeros resultados (el Google Local Pack), estás entregando clientes potenciales a tu competencia directa a diario.
          </p>
        </header>
      </div>

      {/* Sección 1: Factores de Ranking de SEO Local */}
      <section className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-2xl font-black text-[#111827]">¿Cómo decide Google el posicionamiento local?</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          Google Maps utiliza tres factores principales para decidir qué gimnasios clasificar en las primeras posiciones: **Relevancia** (coincidencia con la intención de búsqueda), **Distancia** (cercanía física al usuario) y **Prominencia** (autoridad online, enlaces, reseñas y consistencia de datos).
        </p>

        <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-gray-50 p-6">
          <h3 className="text-lg font-bold text-[#111827] mb-4">Checklist Técnico de Optimización SEO Local</h3>
          <ul className="space-y-3 text-sm sm:text-base text-gray-600">
            <li className="flex items-start space-x-2.5">
              <span className="text-[#2563EB] font-bold">✔</span>
              <span><strong>Consistencia NAP:</strong> Asegurar que el Nombre, Dirección y Teléfono (Name, Address, Phone) sean exactamente idénticos en tu web, Google Maps, Facebook y directorios locales.</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <span className="text-[#2563EB] font-bold">✔</span>
              <span><strong>Categorización Precisa:</strong> Elegir como categoría principal "Gimnasio", "Centro de fitness" o "Estudio de pilates" e incorporar categorías secundarias correctas.</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <span className="text-[#2563EB] font-bold">✔</span>
              <span><strong>Geo-etiquetado de Imágenes:</strong> Subir fotografías semanales de alta calidad de tu sala de musculación, equipamiento premium y clases dirigidas, etiquetadas geográficamente.</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <span className="text-[#2563EB] font-bold">✔</span>
              <span><strong>Reseñas Frecuentes:</strong> Mantener un flujo de reseñas continuas con palabras clave semánticas del deporte (ej. <em>"entrenador personal", "CrossFit", "rutina de empuje"</em>).</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Sección 2: La Metodología SEO en 3 Pasos */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl font-black mb-6">
              01
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Optimización Técnica Ficha
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Auditoría y reestructuración completa de tu perfil en Google Business Profile. Optimizamos títulos, descripciones y respuestas a preguntas frecuentes (FAQ) para maximizar la relevancia en búsquedas transaccionales.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl font-black mb-6">
              02
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              Máquina de Reseñas de 5 Estrellas
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Instalamos sistemas interactivos (código QR en recepción y automatizaciones de WhatsApp) que solicitan opiniones de 5 estrellas exclusivamente a tus socios más leales y satisfechos.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl font-black mb-6">
              03
            </div>
            <h3 className="text-lg font-black text-[#111827]">
              SEO On-Page Localizado
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Creamos landing pages locales súper optimizadas con etiquetas de geolocalización y datos estructurados Schema.org. Logramos que aparezcas tanto en Google Maps como en los resultados orgánicos del buscador.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 3: Ejemplo Práctico de Estructura de Landing Page Local */}
      <section className="bg-purple-50/50 rounded-3xl border border-purple-100 p-8 sm:p-10 space-y-4">
        <h2 className="text-2xl font-black text-[#111827]">Estructura On-Page de Alta Conversión para Centros</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          Tener una buena landing local con marcado semántico ayuda a que el robot de Google entienda que tu negocio físico posee relevancia geográfica real:
        </p>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs space-y-3 text-sm font-mono text-gray-700">
          <div><strong>Tag H1:</strong> Gimnasio en [Nombre de tu Barrio/Ciudad] | [Nombre de tu Centro]</div>
          <div><strong>Tag H2:</strong> Entrenamientos de Fuerza y Clases Dirigidas en [Zona/Barrio]</div>
          <div><strong>Integración Schema:</strong> LocalBusiness JSON-LD estructurado (Dirección, Teléfono, Latitud, Longitud).</div>
          <div><strong>Embed Google Map:</strong> Mapa oficial incrustado para validar la ubicación real frente a Googlebot.</div>
        </div>
      </section>

      {/* CTA Dedicado */}
      <section className="bg-[#111827] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto w-full shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          ¿Quieres dominar las búsquedas de tu zona?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-lg mx-auto">
          Prueba nuestras calculadoras interactivas de ROI para estimar las visitas orgánicas o agenda una auditoría SEO gratuita.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/gimnasios/marketing/calculadora-roi"
            className="px-6 py-3 rounded-xl bg-white text-[#111827] font-bold text-sm transition-all hover:bg-gray-100"
          >
            Calcular Retorno de Visitas
          </Link>
          <Link
            href="/gimnasios/marketing#consultoria"
            className="px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-sm transition-all"
          >
            Quiero dominar mi zona local →
          </Link>
        </div>
      </section>
    </div>
  );
}
