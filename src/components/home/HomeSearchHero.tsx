"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomeSearchHero() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    // Redirección con cambio de URL para SEO programático
    router.push(`/gimnasios/buscador?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8 sm:my-12 text-center">
      <span className="inline-block px-3 py-1 rounded-full bg-green-50 text-[#22C55E] text-xs sm:text-sm font-semibold tracking-wide mb-4 border border-green-100">
        Plataforma Inteligente de Bienestar
      </span>
      
      {/* Header grande y limpio (equivalente a 48px en pantallas grandes) */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-tight">
        Encuentra tu espacio de entrenamiento ideal
      </h1>
      
      {/* Texto normal (Body): ideal de 16px a 18px para garantizar mejor lectura y retención */}
      <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
        Compara centros deportivos, conecta con entrenadores certificados y accede
        a progresiones de entrenamiento con máxima evidencia científica.
      </p>

      {/* Buscador Gigante Central */}
      <form onSubmit={handleSearch} className="mt-8 sm:mt-10 relative max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row items-stretch bg-white rounded-2xl sm:rounded-3xl shadow-md border border-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-[#2563EB] transition-all">
          <div className="flex-1 flex items-center pl-5 pr-3 py-3 sm:py-4">
            <svg
              className="w-6 h-6 text-gray-400 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar gimnasios, rutinas, ejercicios..."
              className="w-full pl-3 pr-2 text-base sm:text-lg text-[#111827] placeholder-gray-400 focus:outline-none bg-transparent"
            />
          </div>
          
          {/* Color primario: Azul eléctrico moderado (#2563EB) para botones */}
          <button
            type="submit"
            className="bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-base sm:text-lg px-8 py-4 sm:py-auto transition-colors flex items-center justify-center"
          >
            Buscar
          </button>
        </div>

        {/* Sugerencias de búsqueda rápidas */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-gray-500">
          <span>Búsquedas comunes:</span>
          {["CrossFit", "Hipertrofia", "Entrenador Personal", "Pilates"].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSearchQuery(tag)}
              className="underline hover:text-[#2563EB] transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
}
