import React from "react";
import Image from "next/image";
import Link from "next/link";

interface DietDetailProps {
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  benefits: string[];
  starFoods: string[];
  curiosities: string;
  keyAdvice: string;
  category: string;
}

export default function DietDetailLayout({
  title,
  subtitle,
  image,
  tags,
  benefits,
  starFoods,
  curiosities,
  keyAdvice,
  category
}: DietDetailProps) {
  return (
    <div className="flex flex-col space-y-12 animate-fadeIn mb-20">
      {/* Header Section */}
      <header className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <div className="flex gap-2 mb-4">
            {tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/30">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            {title}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-3xl leading-relaxed font-medium">
            {subtitle}
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Beneficios */}
          <section>
            <h2 className="text-2xl font-black text-[#111827] mb-6 flex items-center space-x-3">
              <span className="w-8 h-8 rounded-lg bg-green-50 text-[#22C55E] flex items-center justify-center text-sm">✓</span>
              <span>Beneficios Principales</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-[#2563EB]/30 transition-all flex items-start space-x-4">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                   <p className="text-gray-700 font-medium leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Alimentos Estrella */}
          <section>
            <h2 className="text-2xl font-black text-[#111827] mb-6 flex items-center space-x-3">
              <span className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center text-sm">⭐</span>
              <span>Alimentos Estrella</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {starFoods.map((food, idx) => (
                <span key={idx} className="px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 text-[#111827] text-sm font-bold shadow-sm">
                  {food}
                </span>
              ))}
            </div>
          </section>

          {/* Curiosidades Científicas */}
          <section className="p-8 rounded-3xl bg-gray-50 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <span className="text-9xl font-black">?</span>
            </div>
            <h2 className="text-xl font-black text-[#111827] mb-4">¿Sabías que...?</h2>
            <p className="text-gray-600 leading-relaxed italic relative z-10 text-lg">
              "{curiosities}"
            </p>
          </section>
        </div>

        {/* Sidebar / Advice Section */}
        <aside className="space-y-8">
          <div className="p-8 rounded-3xl bg-[#2563EB] text-white shadow-xl shadow-blue-200">
            <h3 className="text-xl font-black mb-4">Consejo Clave</h3>
            <p className="text-blue-50 leading-relaxed text-base">
              {keyAdvice}
            </p>
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-xs text-blue-100 font-medium uppercase tracking-widest">Recomendación Impulse</p>
            </div>
          </div>

          <div className="p-8 rounded-3xl border border-gray-200 bg-white shadow-sm">
            <h3 className="text-lg font-bold text-[#111827] mb-4">Cálculo Preciso</h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Para aplicar esta dieta con éxito, primero necesitas conocer tus requerimientos calóricos exactos.
            </p>
            <Link 
              href="/dietas/calculadora-calorias" 
              className="flex items-center justify-center w-full py-3 rounded-xl bg-gray-900 text-white font-bold text-sm hover:bg-black transition-all"
            >
              Ir a la Calculadora
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
