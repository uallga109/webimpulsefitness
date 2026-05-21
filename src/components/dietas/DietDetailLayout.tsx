import React from "react";
import Image from "next/image";
import Link from "next/link";
import RelatedRecommendations from "@/components/layout/RelatedRecommendations";

interface FAQItem {
  question: string;
  answer: string;
}

interface MealItem {
  name: string;
  time?: string;
  description: string;
  macros: string;
}

interface PhysiologySection {
  scientificTitle: string;
  explanation: string;
  mechanisms: string[];
}

interface DietDetailProps {
  slug?: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  benefits: string[];
  starFoods: string[];
  curiosities: string;
  keyAdvice: string;
  category: string;
  
  // Nuevos campos opcionales para SEO avanzado e información detallada
  physiology?: PhysiologySection;
  sampleMenu?: {
    dailyKcal: string;
    macros: { protein: string; carbs: string; fats: string; };
    schedule: MealItem[];
  };
  commonErrors?: string[];
  faqs?: FAQItem[];
}

export default function DietDetailLayout({
  slug,
  title,
  subtitle,
  image,
  tags,
  benefits,
  starFoods,
  curiosities,
  keyAdvice,
  category,
  physiology,
  sampleMenu,
  commonErrors,
  faqs = [],
}: DietDetailProps) {
  // Inyección automática de marcado estructurado JSON-LD FAQPage para Google SEO
  const jsonLd = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <div className="flex flex-col space-y-16 animate-fadeIn mb-24">
      {/* Marcado JSON-LD inyectado para mejorar visibilidad de búsqueda en Google */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      {/* Header Section Premium */}
      <header className="relative w-full h-[450px] rounded-[32px] overflow-hidden shadow-2xl border border-gray-150">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-700 hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
        <div className="absolute bottom-10 left-6 right-6 sm:left-10 sm:right-10 z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-[#2563EB]/80 backdrop-blur-md text-white text-xs font-black tracking-wider uppercase border border-white/20">
              Categoría: {category}
            </span>
            {tags.map((tag, idx) => (
              <span key={idx} className="px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none drop-shadow-md">
            {title}
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-4xl leading-relaxed font-medium">
            {subtitle}
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Columna Principal (Contenido) */}
        <div className="lg:col-span-2 space-y-14">
          
          {/* 1. Beneficios Principales */}
          <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827] mb-6 flex items-center space-x-3">
              <span className="w-9 h-9 rounded-xl bg-green-50 text-[#22C55E] flex items-center justify-center text-lg font-bold border border-green-150">✓</span>
              <span>Beneficios Nutricionales y Fisiológicos</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#F8FAFC] border border-gray-100 shadow-sm hover:border-[#2563EB]/20 transition-all flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                  <p className="text-gray-700 font-semibold leading-relaxed text-sm sm:text-base">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Recomendación Contextualizada Intermedia en Columna Principal (Alto Tráfico) */}
          <RelatedRecommendations slug={slug} category="dietas" position="content" index={2} />

          {/* 2. Sección Científica y Fisiológica (Mejora EEAT de Google) */}
          {physiology && (
            <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-black text-[#111827] mb-4 flex items-center space-x-3">
                <span className="w-9 h-9 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center text-lg border border-blue-150">🧬</span>
                <span>Base Científica: {physiology.scientificTitle}</span>
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  {physiology.explanation}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-150">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Mecanismos clave de adaptación:</h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {physiology.mechanisms.map((mechanism, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-gray-750 text-sm sm:text-base bg-blue-50/20 p-3.5 rounded-xl border border-blue-50/50">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                        <span className="font-semibold text-gray-700">{mechanism}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* 3. Menú de Ejemplo Estructurado */}
          {sampleMenu && (
            <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-150 pb-6 mb-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#111827] flex items-center space-x-3">
                    <span className="w-9 h-9 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center text-lg border border-orange-150">📅</span>
                    <span>Ejemplo de Menú Diario</span>
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">Plan de distribución nutricional recomendado</p>
                </div>
                <div className="mt-4 sm:mt-0 flex gap-3 text-xs bg-gray-50 p-3 rounded-2xl border border-gray-150 shrink-0">
                  <div className="text-center px-2">
                    <span className="block font-black text-gray-700 text-sm">{sampleMenu.dailyKcal} Kcal</span>
                    <span className="text-[10px] text-gray-400 uppercase font-bold">Total Diario</span>
                  </div>
                  <div className="w-[1px] bg-gray-200" />
                  <div className="text-center px-2">
                    <span className="block font-bold text-[#2563EB] text-xs">P: {sampleMenu.macros.protein}</span>
                    <span className="block font-bold text-green-600 text-xs">C: {sampleMenu.macros.carbs}</span>
                    <span className="block font-bold text-yellow-600 text-xs">F: {sampleMenu.macros.fats}</span>
                    <span className="text-[9px] text-gray-400 font-bold uppercase">Macros</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {sampleMenu.schedule.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row border border-gray-100 rounded-2xl overflow-hidden hover:shadow-sm transition-shadow">
                    <div className="sm:w-36 bg-[#F8FAFC] border-b sm:border-b-0 sm:border-r border-gray-100 p-4 flex flex-col justify-center items-start shrink-0">
                      {item.time && (
                        <span className="text-xs font-bold text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded-md mb-1">{item.time}</span>
                      )}
                      <span className="text-sm font-black text-gray-800">{item.name}</span>
                    </div>
                    <div className="flex-1 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <p className="text-gray-700 text-sm sm:text-base font-semibold leading-relaxed">
                        {item.description}
                      </p>
                      <span className="text-xs font-bold text-gray-400 bg-gray-50 border border-gray-150 px-3 py-1 rounded-xl whitespace-nowrap shrink-0 self-start sm:self-center">
                        {item.macros}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 4. Alimentos Estrella */}
          <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827] mb-6 flex items-center space-x-3">
              <span className="w-9 h-9 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center text-lg border border-orange-150">⭐</span>
              <span>Alimentos Estrella Recomendados</span>
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {starFoods.map((food, idx) => (
                <span key={idx} className="px-4 py-2.5 rounded-2xl bg-gray-50 border border-gray-200/60 text-[#111827] text-sm font-bold shadow-sm hover:bg-gray-100/50 hover:border-gray-300 transition-colors">
                  {food}
                </span>
              ))}
            </div>
          </section>

          {/* Recomendación Contextualizada en Columna Principal */}
          <RelatedRecommendations slug={slug} category="dietas" position="content" index={1} />

          {/* 5. Errores Comunes */}
          {commonErrors && (
            <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-black text-[#111827] mb-6 flex items-center space-x-3">
                <span className="w-9 h-9 rounded-xl bg-red-50 text-red-500 flex items-center justify-center text-lg border border-red-150">⚠️</span>
                <span>Errores Comunes y Cómo Evitarlos</span>
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {commonErrors.map((error, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-red-50/20 border border-red-100 flex items-start space-x-4">
                    <span className="text-red-500 text-lg shrink-0 mt-0.5">✖</span>
                    <p className="text-gray-700 font-semibold leading-relaxed text-sm sm:text-base">{error}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 6. Preguntas Frecuentes (FAQs) Acordeón NATIVO SEO-Friendly (Zero JS Client) */}
          {faqs.length > 0 && (
            <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-black text-[#111827] mb-6 flex items-center space-x-3">
                <span className="w-9 h-9 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center text-lg border border-purple-150">❓</span>
                <span>Preguntas Frecuentes (FAQ)</span>
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <details 
                    key={idx} 
                    className="group border border-gray-150 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-center justify-between p-5 font-black text-[#111827] hover:text-[#2563EB] cursor-pointer bg-white hover:bg-slate-50 transition-colors select-none">
                      <span className="text-sm sm:text-base pr-4 leading-tight">{faq.question}</span>
                      <span className="text-xs transition-transform duration-300 group-open:rotate-180 shrink-0 text-gray-400 group-open:text-[#2563EB]">
                        ▼
                      </span>
                    </summary>
                    <div className="p-5 pt-0 bg-white border-t border-gray-100">
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* Barra Lateral (Aside) */}
        <aside className="space-y-8">
          {/* Recomendación Contextualizada en Barra Lateral */}
          <RelatedRecommendations slug={slug} category="dietas" position="sidebar" index={0} />
          
          {/* Consejos Clave */}
          <div className="p-8 rounded-[32px] bg-[#2563EB] text-white shadow-xl shadow-blue-100 border border-blue-600 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="text-8xl font-black">💡</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black mb-4 tracking-tight flex items-center gap-2">
              <span>Consejo Clave</span>
            </h3>
            <p className="text-blue-50 leading-relaxed text-base font-semibold">
              {keyAdvice}
            </p>
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-[10px] text-blue-200 font-bold uppercase tracking-widest">Recomendación Científica Impulse</p>
            </div>
          </div>

          {/* Curiosidades */}
          <div className="p-8 rounded-[32px] bg-slate-50 border border-gray-150 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <span className="text-9xl font-black">?</span>
            </div>
            <h3 className="text-lg font-black text-gray-400 uppercase tracking-widest mb-3">¿Sabías que...?</h3>
            <p className="text-gray-650 leading-relaxed italic relative z-10 text-base font-semibold">
              "{curiosities}"
            </p>
          </div>

          {/* Enlace Calculadoras */}
          <div className="p-8 rounded-[32px] border border-gray-200 bg-white shadow-sm space-y-6">
            <div className="h-10 w-10 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center text-lg border border-blue-100">
              🧮
            </div>
            <div>
              <h3 className="text-lg font-black text-[#111827] leading-tight">Cálculo Calórico Científico</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed font-semibold">
                Para aplicar esta estrategia de forma exitosa y segura, es fundamental estimar tus requerimientos de energía diarios.
              </p>
            </div>
            <div className="space-y-3">
              <Link 
                href="/dietas/calculadora-calorias" 
                className="flex items-center justify-center w-full py-3.5 rounded-2xl bg-[#111827] text-white font-black text-sm hover:bg-black transition-all shadow-sm"
              >
                Calculadora de Calorías (TDEE)
              </Link>
              <Link 
                href="/dietas/calculadora-proteinas" 
                className="flex items-center justify-center w-full py-3.5 rounded-2xl bg-white border border-gray-200 text-[#111827] font-black text-sm hover:bg-gray-50 transition-all"
              >
                Calculadora de Proteínas
              </Link>
            </div>
          </div>

        </aside>
      </div>
    </div>
  );
}
