import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dietas y Planificación Nutricional | Impulse Fitness",
  description:
    "Estrategias nutricionales para recomposición corporal. Calculadoras de calorías y proteínas para ajustar tus macronutrientes de forma científica.",
};

export default function DietasPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      {/* Cabecera grande y limpia */}
      <header className="border-b border-gray-200 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Área Principal</span>
          <span>•</span>
          <span>Nutrición Deportiva</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Dietas y Planificación Nutricional
        </h1>
        {/* Texto normal (Body): ideal de 16px a 18px */}
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
          El entrenamiento estimula, pero la nutrición construye. Descubre cómo
          calcular tu balance energético para perder grasa o ganar masa limpia de
          manera predecible.
        </p>
      </header>

      {/* Tarjetas de Calculadoras con sombra suave, hover ligero y esquinas de 16px a 24px */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Color secundario: Verde fitness suave (#22C55E) para indicar calorías/salud */}
            <div className="h-40 w-full rounded-2xl bg-green-50 flex items-center justify-center mb-6 border border-green-100">
              <span className="text-4xl">🥑</span>
            </div>
            <h2 className="text-2xl font-black text-[#111827]">
              Calculadora de Calorías (TDEE)
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
              Calcula tu metabolismo basal (TMB) y el gasto energético total diario
              en función de tu actividad laboral y frecuencia de entrenamiento.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-100">
            {/* Color primario: Azul eléctrico moderado (#2563EB) */}
            <Link
              href="/dietas/calculadora-calorias"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-base transition-colors shadow-sm"
            >
              Calcular mis calorías →
            </Link>
          </div>
        </article>

        <article className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="h-40 w-full rounded-2xl bg-blue-50 flex items-center justify-center mb-6 border border-blue-100">
              <span className="text-4xl">🥩</span>
            </div>
            <h2 className="text-2xl font-black text-[#111827]">
              Calculadora de Proteínas
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
              Encuentra los gramos exactos de proteína que debes ingerir al día para
              proteger tu masa muscular en definición o acelerar la hipertrofia.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-100">
            <Link
              href="/dietas/calculadora-proteinas"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-[#2563EB] font-bold text-base border border-gray-200 transition-colors"
            >
              Calcular mis proteínas →
            </Link>
          </div>
        </article>
      </section>

      {/* Catálogo de Dietas */}
      <section className="pt-12">
        <div className="flex flex-col mb-8">
          <h2 className="text-3xl font-black text-[#111827] tracking-tight">
            Planes Nutricionales Populares
          </h2>
          <p className="mt-2 text-gray-500 text-base">
            Selecciona el enfoque que mejor se adapte a tus objetivos actuales. Cada dieta incluye alimentos estrella, consejos y base científica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dieta 1: Volumen Limpio */}
          <article className="group bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="h-48 bg-orange-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 relative">
              <img src="/images/dietas/volumen-limpio.png" alt="Volumen Limpio" className="w-full h-full object-cover opacity-80" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/90 text-green-600 shadow-sm">🟢 Ganancia Muscular</span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/90 text-blue-600 shadow-sm">🔵 Hipertrofia</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#2563EB] transition-colors">Volumen Limpio</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">
                Maximiza tu ganancia de masa muscular controlando el superávit calórico para acumular la mínima grasa posible.
              </p>
              <Link 
                href="/dietas/volumen-limpio" 
                className="mt-6 w-full py-3 rounded-xl bg-gray-50 group-hover:bg-[#2563EB] text-gray-700 group-hover:text-white text-sm font-bold text-center transition-all"
              >
                Ver Plan Completo
              </Link>
            </div>
          </article>

          {/* Dieta 2: Definición */}
          <article className="group bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="h-48 bg-red-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 relative">
              <img src="/images/dietas/definicion.png" alt="Dieta de Definición" className="w-full h-full object-cover opacity-80" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/90 text-red-600 shadow-sm">🔴 Pérdida de Grasa</span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/90 text-blue-600 shadow-sm">🔵 Estética</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#2563EB] transition-colors">Dieta de Definición</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">
                El enfoque científico y estructurado para perder grasa corporal manteniendo toda la masa muscular que has ganado.
              </p>
              <Link 
                href="/dietas/definicion-estricta" 
                className="mt-6 w-full py-3 rounded-xl bg-gray-50 group-hover:bg-[#2563EB] text-gray-700 group-hover:text-white text-sm font-bold text-center transition-all"
              >
                Ver Plan Completo
              </Link>
            </div>
          </article>

          {/* Dieta 3: Keto */}
          <article className="group bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="h-48 bg-yellow-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 relative">
              <img src="/images/dietas/keto.png" alt="Dieta Keto" className="w-full h-full object-cover opacity-80" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/90 text-red-600 shadow-sm">🔴 Pérdida de Grasa</span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/90 text-yellow-600 shadow-sm">🟡 Rendimiento</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#2563EB] transition-colors">Dieta Cetogénica (Keto)</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">
                Transforma tu cuerpo para que utilice la grasa como fuente principal de energía reduciendo los carbohidratos al mínimo.
              </p>
              <Link 
                href="/dietas/keto" 
                className="mt-6 w-full py-3 rounded-xl bg-gray-50 group-hover:bg-[#2563EB] text-gray-700 group-hover:text-white text-sm font-bold text-center transition-all"
              >
                Ver Plan Completo
              </Link>
            </div>
          </article>

          {/* Dieta 4: Mediterránea */}
          <article className="group bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="h-48 bg-green-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 relative">
              <img src="/images/dietas/mediterranea.png" alt="Dieta Mediterránea" className="w-full h-full object-cover opacity-80" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/90 text-green-600 shadow-sm">🟢 Salud</span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/90 text-blue-600 shadow-sm">🔵 Mantenimiento</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#2563EB] transition-colors">Dieta Mediterránea</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">
                El patrón alimenticio más respaldado por la ciencia para la salud, la longevidad y el mantenimiento físico.
              </p>
              <Link 
                href="/dietas/mediterranea" 
                className="mt-6 w-full py-3 rounded-xl bg-gray-50 group-hover:bg-[#2563EB] text-gray-700 group-hover:text-white text-sm font-bold text-center transition-all"
              >
                Ver Plan Completo
              </Link>
            </div>
          </article>

          {/* Dieta 5: Ayuno */}
          <article className="group bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="h-48 bg-purple-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 relative">
              <img src="/images/dietas/ayuno.png" alt="Ayuno Intermitente" className="w-full h-full object-cover opacity-80" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/90 text-red-600 shadow-sm">🔴 Pérdida de Grasa</span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/90 text-yellow-600 shadow-sm">🟡 Estilo de Vida</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#2563EB] transition-colors">Ayuno Intermitente</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">
                Una herramienta estratégica de distribución de comidas. Concentra tus calorías en una ventana de 8 horas para facilitar el déficit.
              </p>
              <Link 
                href="/dietas/ayuno-intermitente" 
                className="mt-6 w-full py-3 rounded-xl bg-gray-50 group-hover:bg-[#2563EB] text-gray-700 group-hover:text-white text-sm font-bold text-center transition-all"
              >
                Ver Plan Completo
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
