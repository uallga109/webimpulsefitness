import React from "react";
import Link from "next/link";
import HomeSearchHero from "@/components/home/HomeSearchHero";

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-16 animate-fadeIn">
      {/* SECCIÓN HERO CON BUSCADOR GIGANTE */}
      <HomeSearchHero />

      {/* SECCIÓN 1: CATEGORÍAS GRANDES */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-gray-200 pb-4">
          {/* Header secundario limpio (equivalente a 28px/36px) */}
          <h2 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
            Explora por Categorías
          </h2>
          <p className="text-sm text-gray-500 mt-1 sm:mt-0">
            Acceso directo a los pilares de tu bienestar
          </p>
        </div>

        {/* TODO en formato cards con bordes redondeados ideales de 16px a 24px */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Gimnasios y Centros",
              desc: "Encuentra instalaciones de musculación, CrossFit, boutique y artes marciales.",
              href: "/gimnasios/buscador",
              linkText: "Buscar gimnasios",
              bgColor: "bg-blue-50",
              textColor: "text-[#2563EB]",
            },
            {
              title: "Entrenadores Personales",
              desc: "Profesionales cualificados para guiar tu recomposición corporal o rendimiento.",
              href: "/entrenadores/buscador",
              linkText: "Ver entrenadores",
              bgColor: "bg-green-50",
              textColor: "text-[#22C55E]",
            },
            {
              title: "Rutinas y Ejercicios",
              desc: "Técnica biomecánica y esquemas de hipertrofia o fuerza científicamente probados.",
              href: "/rutinas",
              linkText: "Explorar planes",
              bgColor: "bg-purple-50",
              textColor: "text-purple-600",
            },
            {
              title: "Nutrición y Dietas",
              desc: "Ajusta tu balance calórico y requerimientos de macronutrientes al milímetro.",
              href: "/dietas",
              linkText: "Calcular macros",
              bgColor: "bg-amber-50",
              textColor: "text-amber-600",
            },
          ].map((cat, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl ${cat.bgColor} ${cat.textColor} flex items-center justify-center font-bold text-lg mb-4`}>
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-[#111827]">{cat.title}</h3>
                {/* Texto normal (Body): ideal de 16px a 18px */}
                <p className="text-base text-gray-600 mt-2 leading-relaxed">
                  {cat.desc}
                </p>
              </div>
              
              {/* Color primario: Azul eléctrico moderado (#2563EB) para enlaces */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  href={cat.href}
                  className="text-base font-bold text-[#2563EB] hover:underline inline-flex items-center space-x-1"
                >
                  <span>{cat.linkText}</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECCIÓN 2: CIUDADES POPULARES (Respuesta rotunda SÍ: Cuadrícula perfecta con contadores) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-gray-200 pb-4">
          <h2 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
            Ciudades Populares
          </h2>
          <p className="text-sm text-gray-500 mt-1 sm:mt-0">
            Los mayores núcleos de entrenamiento en España
          </p>
        </div>

        {/* Estructura de la Card: Imagen arriba, información clara abajo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              city: "Madrid",
              count: "1.204 gimnasios",
              trainers: "840 entrenadores",
              hue: "from-blue-500/20 to-blue-600/40",
              svgBg: "#2563EB",
            },
            {
              city: "Barcelona",
              count: "980 gimnasios",
              trainers: "650 entrenadores",
              hue: "from-green-500/20 to-green-600/40",
              svgBg: "#22C55E",
            },
            {
              city: "Valencia",
              count: "450 gimnasios",
              trainers: "320 entrenadores",
              hue: "from-amber-500/20 to-amber-600/40",
              svgBg: "#F59E0B",
            },
            {
              city: "Sevilla",
              count: "390 gimnasios",
              trainers: "280 entrenadores",
              hue: "from-purple-500/20 to-purple-600/40",
              svgBg: "#8B5CF6",
            },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={`/gimnasios/buscador?q=${item.city.toLowerCase()}`}
              className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col block"
            >
              {/* Imagen arriba (Representación gráfica vectorial limpia para máxima fiabilidad y carga instantánea) */}
              <div className="h-36 w-full bg-gray-50 relative overflow-hidden flex items-center justify-center border-b border-gray-100">
                {/* Elementos geométricos representando el skyline o dinamismo de la ciudad */}
                <div className="absolute inset-0 opacity-10 bg-grid-pattern" />
                <div
                  className="absolute bottom-0 w-full h-16 opacity-20"
                  style={{ backgroundColor: item.svgBg }}
                />
                <div className="relative z-10 flex flex-col items-center">
                  <span className="text-3xl">🏛️</span>
                  <span className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-widest">
                    ESPAÑA
                  </span>
                </div>
                {/* Overlay hover suave */}
                <div className="absolute inset-0 bg-[#2563EB]/0 group-hover:bg-[#2563EB]/5 transition-colors" />
              </div>

              {/* Información clara abajo */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-xl font-black text-[#111827] group-hover:text-[#2563EB] transition-colors">
                    {item.city}
                  </h3>
                  <div className="mt-2 space-y-1">
                    <p className="text-base text-gray-600 font-medium flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                      <span>{item.count}</span>
                    </p>
                    <p className="text-sm text-gray-500 flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                      <span>{item.trainers}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400">Directorio B2C</span>
                  <span className="text-xs font-bold text-[#2563EB] group-hover:translate-x-1 transition-transform">
                    Ver centros →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECCIÓN 3: HERRAMIENTAS DESTACADAS */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-gray-200 pb-4">
          <h2 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
            Herramientas y Calculadoras
          </h2>
          <p className="text-sm text-gray-500 mt-1 sm:mt-0">
            Tecnología aplicada a tus métricas personales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 text-[#2563EB]">
                Rutinas Inteligentes
              </span>
              <h3 className="text-xl font-bold text-[#111827] mt-3">
                Generador Automático
              </h3>
              <p className="text-base text-gray-600 mt-2 leading-relaxed">
                Configura tu nivel, frecuencia semanal y objetivos para obtener
                al instante la distribución ideal de grupos musculares.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/rutinas/generador"
                className="block text-center bg-gray-50 hover:bg-[#2563EB] text-[#111827] hover:text-white text-base font-bold py-3 rounded-xl transition-all border border-gray-200 hover:border-[#2563EB]"
              >
                Iniciar Generador
              </Link>
            </div>
          </article>

          <article className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Color secundario: Verde fitness suave (#22C55E) para indicar calorías/salud */}
              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-green-50 text-[#22C55E]">
                Nutrición y Balance
              </span>
              <h3 className="text-xl font-bold text-[#111827] mt-3">
                Calculadora de Calorías (TDEE)
              </h3>
              <p className="text-base text-gray-600 mt-2 leading-relaxed">
                Estima tu Gasto Energético Diario Total y averigua tu objetivo
                exacto para definición o ganancia muscular limpia.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/dietas/calculadora-calorias"
                className="block text-center bg-gray-50 hover:bg-[#2563EB] text-[#111827] hover:text-white text-base font-bold py-3 rounded-xl transition-all border border-gray-200 hover:border-[#2563EB]"
              >
                Calcular Calorías
              </Link>
            </div>
          </article>

          <article className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-purple-50 text-purple-600">
                Síntesis Magra
              </span>
              <h3 className="text-xl font-bold text-[#111827] mt-3">
                Calculadora de Proteínas
              </h3>
              <p className="text-base text-gray-600 mt-2 leading-relaxed">
                Descubre los gramos de proteína diarios óptimos según tu disciplina
                deportiva y masa magra para blindar tu musculatura.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/dietas/calculadora-proteinas"
                className="block text-center bg-gray-50 hover:bg-[#2563EB] text-[#111827] hover:text-white text-base font-bold py-3 rounded-xl transition-all border border-gray-200 hover:border-[#2563EB]"
              >
                Calcular Proteínas
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* SECCIÓN 4: TENDENCIAS E INSIGHTS */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-gray-200 pb-4">
          <h2 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
            Tendencias y Ciencia
          </h2>
          <p className="text-sm text-gray-500 mt-1 sm:mt-0">
            Artículos destacados para potenciar tu criterio
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <article className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#2563EB]">CIENCIA DEL DEPORTE</span>
              <h3 className="text-xl font-bold text-[#111827] mt-2">
                Rango de repeticiones y proximidad al fallo en hipertrofia
              </h3>
              <p className="text-base text-gray-600 mt-2 leading-relaxed">
                Análisis de las últimas publicaciones sobre estímulo mecánico.
                ¿Es igual de efectivo entrenar con cargas ligeras si se iguala el esfuerzo?
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 text-right">
              <Link href="/noticias" className="text-sm font-bold text-[#2563EB] hover:underline">
                Leer artículo completo →
              </Link>
            </div>
          </article>

          <article className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#22C55E]">MERCADO FITNESS</span>
              <h3 className="text-xl font-bold text-[#111827] mt-2">
                La especialización y los centros boutique lideran la retención
              </h3>
              <p className="text-base text-gray-600 mt-2 leading-relaxed">
                Descubre cómo los modelos de negocio B2B se están transformando para
                ofrecer experiencias de entrenamiento en grupos reducidos.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 text-right">
              <Link href="/noticias" className="text-sm font-bold text-[#2563EB] hover:underline">
                Leer artículo completo →
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
