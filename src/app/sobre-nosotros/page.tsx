import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description: "Descubre la ciencia, el rigor empírico y la estrategia de negocio que definen el ecosistema premium de Impulse Fitness.",
};

export default function SobreNosotros() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Cabecera de Autoridad (E-E-A-T) */}
      <header className="mb-12 border-b border-gray-200 pb-8 text-left">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#2563EB] mb-4 border border-blue-100 uppercase tracking-wider">
          ¿Quiénes Somos?
        </span>
        <h1 className="text-4xl font-extrabold text-[#111827] tracking-tight sm:text-5xl">
          Sobre Nosotros
        </h1>
        <p className="text-gray-500 mt-3 font-semibold text-lg leading-relaxed max-w-2xl">
          La Ciencia y el Marketing detrás de Impulse Fitness.
        </p>
      </header>

      {/* Introducción Destacada */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-blue-50/50 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
        <h2 className="text-2xl font-bold text-[#111827] mb-4 flex items-center gap-2">
          Ecosistema Fitness Científico y de Negocios
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
          Bienvenido a <strong>Impulse Fitness Marketing</strong>. Más que una simple plataforma de entrenamiento, somos el ecosistema integral donde el rigor científico se encuentra con el crecimiento empresarial en la industria de la salud y el fitness.
        </p>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Fundada en <strong>2024</strong> por <strong>Luis García</strong>, esta plataforma nació con un propósito sumamente claro: erradicar la desinformación en el sector de la salud y proporcionar herramientas analíticas de grado clínico tanto a atletas como a profesionales del sector B2B.
        </p>
      </section>

      {/* Pilares Fundacionales (Nuestra Misión) */}
      <section className="mb-12">
        <div className="text-left mb-8">
          <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest block mb-1">Nuestra Misión</span>
          <h2 className="text-3xl font-bold text-[#111827]">Evidence-Based Fitness</h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base leading-relaxed">
            Durante décadas, la industria del fitness ha estado dominada por el marketing engañoso, los mitos de vestuario (<em>bro-science</em>) y las promesas vacías. Nuestra misión es cambiar las reglas del juego mediante datos reales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pilar 1 */}
          <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 flex flex-col group">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-4 font-black transition-colors group-hover:bg-blue-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-[#111827] mb-2">Herramientas de Precisión</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Calculadoras biomecánicas y metabólicas basadas en ecuaciones clínicas validadas, como las fórmulas de Harris-Benedict, Epley o el cálculo de Masa Libre de Grasa.
            </p>
          </div>

          {/* Pilar 2 */}
          <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 flex flex-col group">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 font-black transition-colors group-hover:bg-emerald-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-[#111827] mb-2">Ciencia y Rigor</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Transformamos meta-análisis complejos y ensayos clínicos indexados en PubMed en guías prácticas, estructuradas y listas para aplicar en tus entrenamientos.
            </p>
          </div>

          {/* Pilar 3 */}
          <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 flex flex-col group">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 font-black transition-colors group-hover:bg-purple-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-[#111827] mb-2">Crecimiento B2B</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Ayudamos a dueños de gimnasios, centros boutique y entrenadores personales a escalar mediante estrategias de SEO local, neuromarketing y digitalización.
            </p>
          </div>
        </div>
      </section>

      {/* Compromiso E-E-A-T (Autoridad y Calidad) */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-6 sm:p-8 mb-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/40 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
        <h2 className="text-2xl font-bold text-[#111827] mb-4 flex items-center gap-2">
          <svg className="w-6 h-6 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Nuestro Compromiso con la Verdad (E-E-A-T)
        </h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
          La salud de nuestros lectores es nuestra máxima prioridad. Por ello, operamos bajo los más estrictos estándares de <strong>Experiencia, Conocimiento, Autoridad y Confianza (E-E-A-T)</strong> exigidos en los sectores de salud y bienestar digital (YMYL - Your Money or Your Life).
        </p>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Todo el contenido publicado en nuestro Hub de Noticias y nuestras guías científicas está redactado y auditado basándose en la literatura de fisiología del ejercicio y nutrición deportiva más actual. No promovemos dietas milagro ni metodologías sin respaldo empírico. Si la ciencia biomecánica o nutricional cambia, nuestro contenido se actualiza rigurosamente con ella.
        </p>
      </section>

      {/* Perfil del Autor */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm mb-10">
        <h2 className="text-2xl font-bold text-[#111827] mb-6 flex items-center gap-2">
          ¿Quiénes Somos?
        </h2>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold flex items-center justify-center text-2xl shadow-md shrink-0">
            CP
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#111827] mb-1">Luis García</h3>
            <p className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-3">Fundador y Especialista Principal</p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
              Soy especialista en marketing de rendimiento digital y un apasionado de la fisiología deportiva y el entrenamiento de fuerza. Mi objetivo prioritario es combinar la excelencia en marketing B2B con las metodologías y datos validados por la comunidad científica deportiva.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Junto a colaboradores especializados de Impulse Fitness, trabajamos día a día para que entrenadores, atletas y empresarios del sector fitness dejen de adivinar y empiecen a ejecutar con datos 100% fiables.
            </p>
          </div>
        </div>
      </section>

      {/* Tarjeta de Contacto Elegante */}
      <section className="bg-gray-50 border border-gray-100 rounded-3xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-[#111827] mb-4">Contacto y Soporte</h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
          Estamos a tu entera disposición para ayudarte a impulsar tu rendimiento físico o la rentabilidad de tu negocio deportivo. Si tienes alguna duda sobre nuestras herramientas, artículos o servicios de marketing B2B, escríbenos:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="p-4 bg-white rounded-2xl border border-gray-200 flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-bold text-gray-400 block uppercase">Email Corporativo</span>
              <a href="mailto:impulsefitnessmarketing1@gmail.com" className="font-bold text-[#2563EB] hover:underline">
                impulsefitnessmarketing1@gmail.com
              </a>
            </div>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-gray-200 flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-bold text-gray-400 block uppercase">Ubicación</span>
              <span className="font-bold text-[#111827]">Almería, España</span>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 italic text-center mt-8">
          &ldquo;El ecosistema fitness definitivo, respaldado por la ciencia y diseñado para la excelencia.&rdquo;
        </p>
      </section>
    </div>
  );
}
