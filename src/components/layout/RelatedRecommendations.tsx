import React from "react";
import Link from "next/link";
import { getRecommendations } from "@/data/recommendations";

interface RelatedRecommendationsProps {
  slug?: string;
  category: string;
  position: "sidebar" | "content";
  index: number;
}

const colorStyles = {
  blue: {
    badgeBg: "bg-blue-50/80 text-blue-600 border border-blue-200/50",
    text: "text-blue-600",
    hoverText: "group-hover:text-blue-600",
    glow: "bg-blue-500/5",
    hoverGlow: "group-hover:bg-blue-500/10",
  },
  green: {
    badgeBg: "bg-green-50/80 text-green-700 border border-green-200/50",
    text: "text-green-700",
    hoverText: "group-hover:text-green-700",
    glow: "bg-green-500/5",
    hoverGlow: "group-hover:bg-green-500/10",
  },
  purple: {
    badgeBg: "bg-purple-50/80 text-purple-600 border border-purple-200/50",
    text: "text-purple-600",
    hoverText: "group-hover:text-purple-600",
    glow: "bg-purple-500/5",
    hoverGlow: "group-hover:bg-purple-500/10",
  },
  orange: {
    badgeBg: "bg-orange-50/80 text-orange-600 border border-orange-200/50",
    text: "text-orange-600",
    hoverText: "group-hover:text-orange-600",
    glow: "bg-orange-500/5",
    hoverGlow: "group-hover:bg-orange-500/10",
  },
  amber: {
    badgeBg: "bg-amber-50/80 text-amber-600 border border-amber-200/50",
    text: "text-amber-600",
    hoverText: "group-hover:text-amber-600",
    glow: "bg-amber-500/5",
    hoverGlow: "group-hover:bg-amber-500/10",
  },
  indigo: {
    badgeBg: "bg-indigo-50/80 text-indigo-600 border border-indigo-200/50",
    text: "text-indigo-600",
    hoverText: "group-hover:text-indigo-600",
    glow: "bg-indigo-500/5",
    hoverGlow: "group-hover:bg-indigo-500/10",
  },
};

export default function RelatedRecommendations({
  slug,
  category,
  position,
  index,
}: RelatedRecommendationsProps) {
  const items = getRecommendations(slug, category);
  const item = items[index];

  if (!item) return null;

  const style = colorStyles[item.accentColor] || colorStyles.blue;

  if (position === "sidebar") {
    return (
      <article className="p-6 rounded-3xl border border-gray-250 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
        {/* Glow de fondo decorativo */}
        <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl pointer-events-none transition-colors ${style.glow} ${style.hoverGlow}`} />
        
        {/* Imagen Cabecera Compacta */}
        <div className="h-28 relative rounded-2xl overflow-hidden mb-4 bg-slate-950">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-wider bg-white/95 text-slate-800 shadow-sm">
              {item.badgeText}
            </span>
          </div>
        </div>

        <div>
          <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${style.badgeBg}`}>
            {item.category}
          </span>
          <h3 className="text-lg font-black text-[#111827] mt-3 group-hover:text-[#2563EB] transition-colors leading-tight">
            {item.title}
          </h3>
          <p className="mt-2 text-xs text-gray-500 leading-relaxed font-semibold">
            {item.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <Link 
            href={item.href}
            className="inline-flex items-center text-xs font-black text-slate-900 group-hover:text-[#2563EB] transition-colors"
          >
            <span>Optimizar mi plan</span>
            <svg 
              className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </article>
    );
  }

  // Posicionamiento en el cuerpo principal de contenido (Content Column)
  return (
    <article className="rounded-3xl border border-gray-250 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row group relative">
      {/* Glow de fondo decorativo */}
      <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none transition-colors ${style.glow} ${style.hoverGlow}`} />

      {/* Panel Izquierdo con Imagen */}
      <div className="relative w-full sm:w-48 h-44 sm:h-auto min-h-[160px] bg-slate-950 shrink-0">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
        <div className="absolute top-4 left-4 z-10">
          <span className="px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider bg-white/95 text-slate-800 shadow-sm border border-white/10">
            {item.badgeText}
          </span>
        </div>
      </div>

      {/* Contenido Derecho */}
      <div className="p-6 flex flex-col justify-between flex-grow z-10">
        <div>
          <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${style.badgeBg}`}>
            {item.category}
          </span>
          <h3 className="text-xl font-black text-[#111827] mt-3 group-hover:text-[#2563EB] transition-colors leading-tight">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed font-semibold">
            {item.description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Plan Impulse Fitness</span>
          <Link 
            href={item.href}
            className="inline-flex items-center text-xs font-black text-slate-900 group-hover:text-[#2563EB] transition-colors"
          >
            <span>Explorar esta estrategia</span>
            <svg 
              className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
