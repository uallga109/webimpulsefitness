"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { noticiasData, getNewsImage, categoryStyles } from "@/data/noticiasData";


export default function NoticiasClient() {
  // Categorías únicas extraídas de los datos
  const categories = useMemo(() => {
    const unique = Array.from(new Set(noticiasData.map((item) => item.categoria)));
    return ["Todas", ...unique];
  }, []);

  // Estado del filtro
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  // Estado de la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filtrado de noticias
  const filteredNews = useMemo(() => {
    if (selectedCategory === "Todas") return noticiasData;
    return noticiasData.filter((item) => item.categoria === selectedCategory);
  }, [selectedCategory]);

  // Cálculo de páginas
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage) || 1;

  // Reseteo de página al cambiar de categoría
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  // Elementos a mostrar en la página actual
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredNews.slice(start, start + itemsPerPage);
  }, [filteredNews, currentPage]);

  return (
    <div className="flex flex-col space-y-10 animate-fadeIn">
      {/* Cabecera descriptiva */}
      <header className="border-b border-gray-100 pb-6 text-center sm:text-left">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Macroblog de Divulgación</span>
          <span>•</span>
          <span>Literatura Científica</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Noticias y Evidencia Científica
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
          Análisis de las últimas investigaciones publicadas sobre hipertrofia, nutrición deportiva, mercado B2B y tendencias globales de entrenamiento.
        </p>
      </header>

      {/* Botonera de Filtro de Categorías con scroll horizontal en móviles */}
      <div className="relative">
        <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-hide -mx-2 px-2 sm:mx-0 sm:px-0">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm transition-all whitespace-nowrap shrink-0 ${isActive
                  ? "bg-[#2563EB] text-white font-bold shadow-sm shadow-blue-500/10 scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium"
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid de Tarjetas Responsive (1 col móvil, 2 tablet, 3 o 4 desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-2">
        {currentItems.map((news) => {
          const badgeStyle =
            categoryStyles[news.categoria] || "bg-gray-50 text-gray-600 border-gray-100";
          const imgUrl = getNewsImage(news);

          return (
            <article
              key={news.id}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Contenedor visual superior con foto relacionada */}
                <Link href={`/noticias/${news.slug}`} className="block relative aspect-[16/10] w-full overflow-hidden bg-gray-50 border-b border-gray-100">
                  <img
                    src={imgUrl}
                    alt={news.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay sutil de protección para contraste */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-black uppercase tracking-wider border shadow-sm backdrop-blur-md bg-white/95 ${badgeStyle}`}>
                      {news.categoria}
                    </span>
                  </div>
                </Link>

                <div className="p-6 pb-0">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs text-gray-400 font-medium whitespace-nowrap">
                      {news.fecha}
                    </span>
                  </div>

                  {/* Título H3 explícitamente requerido */}
                  <h3 className="text-lg font-black text-[#111827] group-hover:text-[#2563EB] transition-colors leading-snug cursor-pointer line-clamp-2">
                    <Link href={`/noticias/${news.slug}`} className="focus:outline-none">
                      {news.titulo}
                    </Link>
                  </h3>

                  <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {news.resumen}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 mt-4 border-t border-gray-50 flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-gray-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                  {news.tiempoLectura}
                </span>
                <Link
                  href={`/noticias/${news.slug}`}
                  className="text-xs sm:text-sm font-bold text-[#2563EB] hover:text-blue-700 inline-flex items-center space-x-1 group-hover:underline decoration-2 underline-offset-4"
                >
                  <span>Leer análisis completo</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* Controles de Paginación */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${currentPage === 1
                ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 active:scale-95 shadow-sm"
                }`}
            >
              Anterior
            </button>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${currentPage === totalPages
                ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 active:scale-95 shadow-sm"
                }`}
            >
              Siguiente
            </button>
          </div>

          <span className="text-xs sm:text-sm font-bold text-gray-500">
            Página {currentPage} de {totalPages}
          </span>
        </div>
      )}

      {/* Estado vacío por si un filtro no tuviera resultados */}
      {currentItems.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-3xl border border-gray-100">
          <p className="text-base text-gray-500 font-medium">
            No se encontraron noticias para esta categoría.
          </p>
          <button
            onClick={() => handleCategoryChange("Todas")}
            className="mt-4 text-xs font-bold text-[#2563EB] hover:underline"
          >
            Ver todas las noticias
          </button>
        </div>
      )}
    </div>
  );
}
