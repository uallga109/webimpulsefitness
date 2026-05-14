import React from "react";
import Link from "next/link";

interface ExerciseDetailProps {
  title: string;
  subtitle: string;
  image?: string;
  muscles: {
    primary: string;
    secondary: string;
  };
  material: string[];
  keyExercise: {
    name: string;
    steps: string[];
  };
  benefits: string[];
  commonErrors: string[];
  category: string;
}

export default function ExerciseDetailLayout({
  title,
  subtitle,
  image,
  muscles,
  material,
  keyExercise,
  benefits,
  commonErrors,
  category
}: ExerciseDetailProps) {
  return (
    <div className="flex flex-col space-y-12 animate-fadeIn mb-20">
      {/* Header Section */}
      <header className="relative w-full h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover opacity-60" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-900">
             <span className="text-8xl opacity-20 font-black uppercase tracking-tighter">{category}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
            <span>Entrenamiento</span>
            <span>•</span>
            <span>{category}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            {title}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed font-medium">
            {subtitle}
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Músculos Implicados */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-blue-50 border border-blue-100">
              <h2 className="text-lg font-black text-[#111827] mb-3 uppercase tracking-wide">Músculos Principales</h2>
              <p className="text-[#2563EB] font-bold text-lg">{muscles.primary}</p>
            </div>
            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200">
              <h2 className="text-lg font-black text-[#111827] mb-3 uppercase tracking-wide">Secundarios</h2>
              <p className="text-gray-600 font-medium">{muscles.secondary}</p>
            </div>
          </section>

          {/* Guía Paso a Paso */}
          <section className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-sm">
            <h2 className="text-2xl font-black text-[#111827] mb-8 flex items-center space-x-3">
              <span className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center text-lg font-bold italic">!</span>
              <span>Ejercicio Clave: {keyExercise.name}</span>
            </h2>
            <div className="space-y-6">
              {keyExercise.steps.map((step, idx) => (
                <div key={idx} className="flex space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Errores Comunes */}
          <section className="p-8 rounded-3xl bg-red-50 border border-red-100">
            <h2 className="text-xl font-black text-red-900 mb-4 flex items-center space-x-2">
              <span className="text-2xl">⚠️</span>
              <span>Errores Comunes a Evitar</span>
            </h2>
            <ul className="space-y-3">
              {commonErrors.map((error, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-red-800 font-medium">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  <span>{error}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="p-8 rounded-3xl bg-[#111827] text-white shadow-xl">
            <h3 className="text-xl font-black mb-6">Material Necesario</h3>
            <ul className="space-y-4">
              {material.map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <span className="w-5 h-5 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold border border-blue-500/30">
                    +
                  </span>
                  <span className="text-gray-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-[#111827] mb-4">Beneficios SEO</h3>
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <span className="mt-1 text-[#22C55E]">✓</span>
                  <p className="text-sm text-gray-600 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <Link href="/rutinas/casa" className="flex items-center justify-center w-full py-4 rounded-2xl border border-gray-200 text-gray-500 font-bold hover:bg-gray-50 transition-all">
            ← Volver a Ejercicios
          </Link>
        </aside>
      </div>
    </div>
  );
}
