import React from "react";
import Image from "next/image";
import Link from "next/link";
import RelatedRecommendations from "@/components/layout/RelatedRecommendations";

interface SupplementDetailProps {
  slug?: string;
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
  science?: {
    research: string;
    keyPoints: string[];
  };
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

export default function SupplementDetailLayout({
  slug,
  title,
  subtitle,
  image,
  evidence,
  objective,
  whatIs,
  benefits,
  protocol,
  myths,
  category,
  science,
  faqs
}: SupplementDetailProps) {
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
      <header className="relative w-full h-[320px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-gray-950">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-black shadow-lg uppercase tracking-wider">
              {evidence}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-black border border-white/30 uppercase tracking-wider">
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
          <section className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-sm">
            <h2 className="text-2xl font-black text-[#111827] mb-6 flex items-center space-x-3">
              <span className="w-9 h-9 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center text-lg font-bold">?</span>
              <span>¿Qué es y cómo funciona en el organismo?</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              {whatIs}
            </p>
          </section>

          {/* Beneficios */}
          <section>
            <h2 className="text-2xl font-black text-[#111827] mb-6 flex items-center space-x-3">
              <span className="w-9 h-9 rounded-xl bg-green-50 text-[#22C55E] flex items-center justify-center text-lg font-bold">✓</span>
              <span>Beneficios Demostrados Científicamente</span>
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-start space-x-4">
                   <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB] mt-2.5 shrink-0" />
                   <p className="text-gray-700 font-bold text-base sm:text-lg leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Recomendación Contextualizada Intermedia en Columna Principal (Alto Tráfico) */}
          <RelatedRecommendations slug={slug} category="suplementos" position="content" index={2} />

          {/* Base Científica y Ensayos Clínicos (Opcional - SEO Boost) */}
          {science && (
            <section className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-indigo-900/50">
              <h2 className="text-2xl font-black text-white mb-4 flex items-center space-x-3">
                <span className="text-indigo-400">🔬</span>
                <span>Evidencia Fisiológica & Ensayos Clínicos</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 font-medium">
                {science.research}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {science.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-indigo-400 text-lg font-bold">0{idx + 1}</span>
                    <p className="text-gray-200 text-sm font-medium leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Protocolo de Uso */}
          <section className="p-8 sm:p-10 rounded-3xl bg-gray-900 text-white shadow-xl">
            <h2 className="text-2xl font-black mb-8 flex items-center space-x-3">
              <span className="text-blue-400 text-2xl">⚡</span>
              <span>Protocolo Clínico de Uso</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Dosis Recomendada</p>
                <p className="text-lg font-bold text-gray-200">{protocol.dosing}</p>
              </div>
              <div>
                <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Momento Óptimo (Timing)</p>
                <p className="text-lg font-bold text-gray-200">{protocol.timing}</p>
              </div>
              {protocol.notes && (
                <div className="sm:col-span-2 pt-6 border-t border-gray-800">
                  <p className="text-base text-gray-400 italic leading-relaxed">{protocol.notes}</p>
                </div>
              )}
            </div>
          </section>

          {/* Recomendación Contextualizada en Columna Principal */}
          <RelatedRecommendations slug={slug} category="suplementos" position="content" index={1} />

          {/* Acordeón de FAQs (Opcional - SEO Boost) */}
          {faqs && faqs.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-black text-[#111827] flex items-center space-x-3">
                <span className="text-blue-500">❓</span>
                <span>Preguntas Frecuentes y Respuestas de Expertos</span>
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

        {/* Sidebar / Myths Section */}
        <aside className="space-y-8">
          {/* Recomendación Contextualizada en Barra Lateral */}
          <RelatedRecommendations slug={slug} category="suplementos" position="sidebar" index={0} />

          <div className="p-8 rounded-3xl bg-red-50 border border-red-100 shadow-sm">
            <h3 className="text-xl font-black text-red-900 mb-6 flex items-center space-x-2">
              <span className="text-2xl">🚫</span>
              <span>Mitos y Evidencias</span>
            </h3>
            <div className="space-y-6">
              {myths.map((myth, idx) => (
                <div key={idx} className="flex flex-col border-b border-red-100/50 pb-4 last:border-0 last:pb-0">
                  <p className="text-gray-700 leading-relaxed text-sm font-medium">
                    {myth}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl border border-gray-200 bg-white shadow-sm">
            <h3 className="text-lg font-bold text-[#111827] mb-4">Evidencia Clínica</h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Recuerda que los suplementos son el 5% del resultado. Prioriza tu entrenamiento de fuerza y nutrición.
            </p>
            <Link 
              href="/herramientas" 
              className="flex items-center justify-center w-full py-3 rounded-xl bg-[#2563EB] text-white font-bold text-sm hover:bg-blue-700 transition-all mb-4"
            >
              Calculadoras Fitness
            </Link>
          </div>

          <Link href="/suplementos" className="flex items-center justify-center w-full py-4 rounded-2xl border border-gray-250 bg-gray-50 text-gray-700 font-bold hover:bg-gray-100 hover:text-gray-900 transition-all text-center">
            ← Volver a Suplementos
          </Link>
        </aside>
      </div>
    </div>
  );
}
