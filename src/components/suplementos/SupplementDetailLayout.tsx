import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SupplementDetailProps {
  title: string;
  subtitle: string;
  image: string;
  evidence: string;
  objective: string;
  whatIs: string;
  benefits: string[];
  protocol: {
    dosing: string;
    timing: string;
    notes?: string;
  };
  myths: string[];
  category: string;
}

export default function SupplementDetailLayout({
  title,
  subtitle,
  image,
  evidence,
  objective,
  whatIs,
  benefits,
  protocol,
  myths,
  category
}: SupplementDetailProps) {
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold shadow-lg">
              {evidence}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/30">
              {objective}
            </span>
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
          {/* ¿Qué es? */}
          <section>
            <h2 className="text-2xl font-black text-[#111827] mb-6 flex items-center space-x-3">
              <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center text-sm">?</span>
              <span>¿Qué es y cómo funciona?</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {whatIs}
            </p>
          </section>

          {/* Beneficios */}
          <section>
            <h2 className="text-2xl font-black text-[#111827] mb-6 flex items-center space-x-3">
              <span className="w-8 h-8 rounded-lg bg-green-50 text-[#22C55E] flex items-center justify-center text-sm">✓</span>
              <span>Beneficios Demostrados</span>
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-start space-x-4">
                   <div className="w-2 h-2 rounded-full bg-[#2563EB] mt-2.5 shrink-0" />
                   <p className="text-gray-700 font-medium leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Protocolo de Uso */}
          <section className="p-8 rounded-3xl bg-gray-900 text-white shadow-xl">
            <h2 className="text-2xl font-black mb-8 flex items-center space-x-3">
              <span className="text-blue-400">⚡</span>
              <span>Protocolo de Uso</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Dosis</p>
                <p className="text-lg font-medium text-gray-200">{protocol.dosing}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Cuándo</p>
                <p className="text-lg font-medium text-gray-200">{protocol.timing}</p>
              </div>
              {protocol.notes && (
                <div className="sm:col-span-2 pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-400 italic">{protocol.notes}</p>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Sidebar / Myths Section */}
        <aside className="space-y-8">
          <div className="p-8 rounded-3xl bg-red-50 border border-red-100 shadow-sm">
            <h3 className="text-xl font-black text-red-900 mb-6 flex items-center space-x-2">
              <span>🚫</span>
              <span>Mitos y Realidades</span>
            </h3>
            <div className="space-y-6">
              {myths.map((myth, idx) => (
                <div key={idx} className="flex flex-col">
                  <p className="text-gray-700 leading-relaxed text-sm font-medium">
                    {myth}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl border border-gray-200 bg-white shadow-sm">
            <h3 className="text-lg font-bold text-[#111827] mb-4">Ciencia Aplicada</h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Recuerda que los suplementos son el 5% del resultado. Prioriza tu entrenamiento y nutrición.
            </p>
            <Link 
              href="/herramientas" 
              className="flex items-center justify-center w-full py-3 rounded-xl bg-[#2563EB] text-white font-bold text-sm hover:bg-blue-700 transition-all"
            >
              Calculadoras Fitness
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
