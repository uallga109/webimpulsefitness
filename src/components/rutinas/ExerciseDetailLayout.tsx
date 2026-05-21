import React from "react";
import Link from "next/link";
import RelatedRecommendations from "@/components/layout/RelatedRecommendations";

interface ExerciseDetailProps {
  slug?: string;
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
  biomechanics?: {
    explanation: string;
    mechanisms: string[];
  };
  topExercises?: Array<{
    name: string;
    target: string;
    desc: string;
    tip: string;
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

export default function ExerciseDetailLayout({
  slug,
  title,
  subtitle,
  image,
  muscles,
  material,
  keyExercise,
  benefits,
  commonErrors,
  category,
  biomechanics,
  topExercises,
  faqs
}: ExerciseDetailProps) {
  // Generate FAQ JSON-LD Schema
  const faqSchema = faqs && faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      }
    : null;

  return (
    <div className="flex flex-col space-y-12 animate-fadeIn mb-20">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Header Section */}
      <header className="relative w-full h-[320px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover opacity-65" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-900">
             <span className="text-8xl opacity-20 font-black uppercase tracking-tighter">{category}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
            <span>Entrenamiento</span>
            <span>•</span>
            <span>{category}</span>
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

          {/* Recomendación Contextualizada Intermedia en Columna Principal (Alto Tráfico) */}
          <RelatedRecommendations slug={slug} category="rutinas" position="content" index={2} />

          {/* Biomecánica y Anatomía Científica (Opcional - SEO Boost) */}
          {biomechanics && (
            <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-blue-900/50">
              <h2 className="text-2xl font-black text-white mb-4 flex items-center space-x-3">
                <span className="text-blue-400">🔬</span>
                <span>Base Científica & Biomecánica</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 font-medium">
                {biomechanics.explanation}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {biomechanics.mechanisms.map((mech, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-blue-400 text-lg font-bold">0{idx + 1}</span>
                    <p className="text-gray-200 text-sm font-medium leading-relaxed">{mech}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Guía Paso a Paso del Ejercicio Clave */}
          <section className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-sm">
            <h2 className="text-2xl font-black text-[#111827] mb-8 flex items-center space-x-3">
              <span className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center text-lg font-bold italic">!</span>
              <span>Patrón de Movimiento Clave: {keyExercise.name}</span>
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

          {/* Lista de Ejercicios Top (Opcional - UX Elevada) */}
          {topExercises && topExercises.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-black text-[#111827] flex items-center space-x-3">
                <span className="text-blue-500">🏆</span>
                <span>Los Ejercicios Más Efectivos del Grupo Muscular</span>
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {topExercises.map((exercise, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-600" />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                      <h3 className="text-xl font-bold text-[#111827]">{exercise.name}</h3>
                      <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-black bg-blue-50 text-[#2563EB] uppercase tracking-wider">
                        {exercise.target}
                      </span>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed mb-4">{exercise.desc}</p>
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start space-x-3">
                      <span className="text-amber-500 text-lg">💡</span>
                      <p className="text-amber-800 text-sm font-medium leading-relaxed">
                        <strong className="font-bold">Consejo Pro:</strong> {exercise.tip}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

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

          {/* Recomendación Contextualizada en Columna Principal */}
          <RelatedRecommendations slug={slug} category="rutinas" position="content" index={1} />

          {/* Acordeón de FAQs (Opcional - SEO Boost) */}
          {faqs && faqs.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-black text-[#111827] flex items-center space-x-3">
                <span className="text-blue-500">❓</span>
                <span>Preguntas Frecuentes y Evidencia Científica</span>
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-gray-200 rounded-2xl bg-white [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                      <h3 className="font-black text-lg text-[#111827] group-open:text-[#2563EB] transition-colors leading-snug pr-4">
                        {faq.question}
                      </h3>
                      <span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200">
                        <svg
                          className="w-4 h-4 text-gray-500 group-open:text-[#2563EB]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-0 border-t border-gray-100 text-gray-600 text-base leading-relaxed">
                      <p className="whitespace-pre-line pt-4">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Recomendación Contextualizada en Barra Lateral */}
          <RelatedRecommendations slug={slug} category="rutinas" position="sidebar" index={0} />

          <div className="p-8 rounded-3xl bg-[#111827] text-white shadow-xl">
            <h3 className="text-xl font-black mb-6">Equipamiento Necesario</h3>
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
            <h3 className="text-lg font-bold text-[#111827] mb-4">Beneficios Clave</h3>
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <span className="mt-1 text-[#22C55E] font-bold">✓</span>
                  <p className="text-sm text-gray-600 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <Link href="/rutinas/gimnasio" className="flex items-center justify-center w-full py-4 rounded-2xl border border-gray-250 bg-gray-50 text-gray-700 font-bold hover:bg-gray-100 hover:text-gray-900 transition-all text-center">
            ← Volver a Rutinas de Gimnasio
          </Link>
        </aside>
      </div>
    </div>
  );
}
