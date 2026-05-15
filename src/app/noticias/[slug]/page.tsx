import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { noticiasData, getNewsImage } from "@/data/noticiasData";

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export async function generateStaticParams() {
  return noticiasData.map((news) => ({
    slug: news.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const newsItem = noticiasData.find((n) => n.slug === resolvedParams.slug);
  if (!newsItem) return {};

  return {
    title: `${newsItem.titulo} | Divulgación Científica`,
    description: newsItem.resumen,
  };
}

export default async function NoticiaPage({ params }: PageProps) {
  const resolvedParams = await params;
  const newsItem = noticiasData.find((n) => n.slug === resolvedParams.slug);

  if (!newsItem) {
    notFound();
  }

  const bgImage = getNewsImage(newsItem);

  // Parseador ligero de Markdown a JSX con estilo "Modern Wellness"
  const renderContent = (content?: string) => {
    if (!content) {
      return (
        <p className="text-gray-600 italic my-8">
          El análisis completo de esta investigación estará disponible próximamente en nuestra plataforma.
        </p>
      );
    }

    const lines = content.trim().split("\n");
    return lines.map((line, idx) => {
      const tLine = line.trim();
      if (!tLine) return <div key={idx} className="h-4" />;

      if (tLine.startsWith("## ")) {
        return (
          <h2 key={idx} className="text-2xl sm:text-3xl font-black text-[#111827] mt-8 mb-4 tracking-tight">
            {tLine.replace("## ", "")}
          </h2>
        );
      }
      if (tLine.startsWith("### ")) {
        return (
          <h3 key={idx} className="text-xl sm:text-2xl font-bold text-[#111827] mt-6 mb-3 tracking-tight">
            {tLine.replace("### ", "")}
          </h3>
        );
      }
      if (tLine.startsWith("* ")) {
        const innerText = tLine.replace(/^\* +/, "");
        const parts = innerText.split(/(\*\*.*?\*\*)/g);
        return (
          <li key={idx} className="flex items-start gap-3 my-2.5 text-base sm:text-lg text-gray-700 leading-relaxed">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] mt-2.5 shrink-0" />
            <span>
              {parts.map((part, pIdx) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return <strong key={pIdx} className="font-bold text-[#111827]">{part.slice(2, -2)}</strong>;
                }
                return part;
              })}
            </span>
          </li>
        );
      }

      // Párrafos normales con soporte de negrita
      const parts = tLine.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={idx} className="text-base sm:text-lg text-gray-700 leading-relaxed my-4">
          {parts.map((part, pIdx) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return <strong key={pIdx} className="font-bold text-[#111827]">{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <main className="min-h-screen bg-white pb-20 animate-fadeIn">
      {/* Contenedor Hero Superior con la imagen de fondo y un overlay premium */}
      <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[60vh] bg-gray-900 flex items-end overflow-hidden border-b border-gray-100">
        {/* Imagen de fondo ocupando todo */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt={newsItem.titulo}
            className="w-full h-full object-cover object-center transition-transform duration-1000"
          />
          {/* Gradiente oscuro superior e inferior para legibilidad perfecta */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-gray-900/30" />
        </div>

        {/* Contenido sobre el Hero */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full text-white">
          <Link
            href="/noticias"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors mb-6 group backdrop-blur-md bg-black/30 px-3.5 py-1.5 rounded-xl border border-white/10"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Volver al Macroblog</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider bg-[#2563EB] text-white shadow-sm">
              {newsItem.categoria}
            </span>
            <span className="text-xs sm:text-sm text-gray-300 font-medium">
              Publicado el {newsItem.fecha}
            </span>
            <span className="text-xs sm:text-sm text-gray-400 font-medium">•</span>
            <span className="text-xs sm:text-sm text-gray-300 font-medium">
              ⌛ {newsItem.tiempoLectura} de lectura
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl">
            {newsItem.titulo}
          </h1>
        </div>
      </div>

      {/* Contenedor del Cuerpo de la Noticia */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Tarjeta de Resumen Rápido (TL;DR) */}
        <div className="bg-slate-50 border-l-4 border-[#2563EB] p-6 rounded-r-2xl mb-10 shadow-sm">
          <h4 className="text-xs font-black text-[#2563EB] uppercase tracking-wider mb-1">
            Resumen Ejecutivo (TL;DR)
          </h4>
          <p className="text-base sm:text-lg text-gray-800 font-medium italic leading-relaxed">
            "{newsItem.resumen}"
          </p>
        </div>

        {/* Cuerpo del Artículo parseado */}
        <article className="max-w-none">
          {renderContent((newsItem as any).contenido)}
        </article>

        {/* Sección Inferior de Compartir / Retorno */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h5 className="text-sm font-bold text-gray-900">¿Te ha resultado útil esta evidencia?</h5>
            <p className="text-xs text-gray-500 mt-0.5">Comparte este artículo con tus entrenadores o socios en tu centro deportivo.</p>
          </div>
          <Link
            href="/noticias"
            className="px-6 py-3 rounded-xl bg-[#2563EB] text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center"
          >
            Explorar más investigaciones
          </Link>
        </div>
      </div>
    </main>
  );
}
