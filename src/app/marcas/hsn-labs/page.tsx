import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HSN Labs | Suplementación Directa de Fábrica y Calidad Certificada",
  description:
    "Descubre HSN Labs en España. La marca líder en suplementación deportiva directo de fábrica al consumidor. Analizamos sus materias primas, sello IFS Food y gamas.",
};

export default function HsnPage() {
  const faqs = [
    {
      question: "¿Cómo consigue HSN ofrecer precios tan bajos en suplementos premium?",
      answer: "HSN emplea un modelo económico Factory-to-Consumer (F2C). Al fabricar de manera directa en sus instalaciones robóticas de Albolote (Granada), eliminan por completo los márgenes de distribuidores, importadores y comisiones de tiendas físicas. Además, compran materias primas por toneladas métricas de forma masiva (economías de escala), envasando de forma automatizada miles de sacos por hora con mínima intervención humana."
    },
    {
      question: "¿Qué garantías ofrece la certificación IFS Food con la que cuenta la fábrica de HSN?",
      answer: "La certificación IFS Food (International Featured Standards) es el estándar europeo de seguridad alimentaria más exigente. HSN cuenta con este sello renovado a nivel 'Higher Level' (Nivel Superior). Esto blinda al consumidor garantizando la trazabilidad absoluta de cada ingrediente, análisis regulares libres de metales pesados o contaminantes orgánicos, y un entorno de fabricación farmacéutico."
    },
    {
      question: "¿Cuáles son las diferencias entre las materias primas Lacprodan® y CFM en sus proteínas?",
      answer: "Lacprodan® es una materia prima láctea patentada por el gigante escandinavo Arla Foods que asegura un perfil óptimo de lactoglobulinas sin desnaturalización térmica. CFM (Microfiltración de Flujo Cruzado) es un proceso de filtración física en frío por membrana que separa la proteína láctea de las grasas y la lactosa sin alterar la estructura de sus péptidos bioactivos moleculares originales."
    }
  ];

  // Inyectar Esquemas JSON-LD duales (Organization/Brand + FAQPage)
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Brand",
        "@id": "https://impulsefitness.com/marcas/hsn-labs#brand",
        "name": "HSN Labs (Harrison Sport Nutrition)",
        "logo": "https://impulsefitness.com/icon.png",
        "description": "El gigante de la nutrición deportiva en España y Europa, pionero en el modelo Directo de Fábrica y con renovación de certificación de élite IFS Food Higher Level.",
        "slogan": "Direct from Factory to Consumer",
        "foundingDate": "2008",
        "foundingLocation": {
          "@type": "Place",
          "name": "Albolote, Granada, España"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://impulsefitness.com/marcas/hsn-labs#faq",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      }
    ]
  };

  return (
    <div className="flex flex-col space-y-12 animate-fadeIn mb-20">
      {/* Marcador estructurado JSON-LD FAQPage & Brand */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* 🚀 BREADCRUMBS */}
      <nav className="text-sm font-semibold text-slate-500 flex items-center space-x-2">
        <Link href="/" className="hover:text-[#2563EB] transition-colors">Inicio</Link>
        <span>•</span>
        <Link href="/marcas" className="hover:text-[#2563EB] transition-colors">Marcas</Link>
        <span>•</span>
        <span className="text-slate-800">HSN Labs</span>
      </nav>

      {/* 🚀 HERO SECTION PREMIUM - GREEN & EMERALD */}
      <header className="relative w-full rounded-3xl overflow-hidden shadow-lg bg-white border border-slate-200/80 p-8 sm:p-12 md:p-16 flex flex-col justify-center min-h-[350px]">
        {/* Glows decorativos verdes de nutrición */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-50/80 text-green-700 text-xs font-black uppercase tracking-wider border border-green-200/60 shadow-sm">
            <span>🇪🇸 Laboratorio Farmacéutico Español</span>
            <span>•</span>
            <span>Seguridad Alimentaria Total</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            HSN Labs <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Nutrición de Máxima Pureza Científica
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-medium">
            HSN revolucionó el mercado europeo introduciendo la filosofía Factory-to-Consumer (F2C). Eliminando intermediarios físicos, entrega materias primas con patentes de élite a precio real de coste sin sacrificar análisis de pureza.
          </p>
        </div>
      </header>

      {/* 🇪🇸 HISTORIA Y BLINDAJE DE SEGURIDAD EN GRANADA */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        <article className="md:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest">Nacida de la Era Digital</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              De Tienda Multimarca Online a Gigante Industrial
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Nacida en Granada en 2008 como una modesta tienda online de suplementos multimarca, HSN detectó una falta de transparencia en fórmulas y un excesivo sobrecoste impuesto por importadores. Decidieron fundar sus propias líneas de producción en Albolote, automatizando la logística.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Para combatir los prejuicios de marcas de bajo coste, HSN se convirtió en la primera marca en España en someterse a análisis externos a ciegas por laboratorios acreditados de terceros (como Eurofins) y publicarlos de forma totalmente abierta en su web oficial.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-green-500/5 border border-green-500/10 flex items-center space-x-4">
            <span className="text-3xl">🔬</span>
            <span className="text-xs text-green-800 font-bold leading-relaxed">
              Fórmula envasada con materias primas patentadas: Creapure®, Lacprodan®, CFM, Cluster Dextrin®, y KSM-66®.
            </span>
          </div>
        </article>

        <article className="md:col-span-5 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6 flex flex-col justify-between relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl" />
          <div className="space-y-4">
            <span className="text-xs font-black text-green-400 uppercase tracking-widest">Certificaciones de Calidad</span>
            <h2 className="text-3xl font-black tracking-tight leading-tight">
              IFS Food Higher Level
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              HSN cuenta con la máxima acreditación europea que certifica los mismos controles de higiene y trazabilidad que las grandes multinacionales de consumo humano.
            </p>
            <ul className="space-y-3 pt-2 text-sm text-slate-300 font-medium">
              <li className="flex items-center space-x-2">
                <span className="text-green-400">✔</span>
                <span><strong>IFS Food (Nivel Superior)</strong>: Auditoría estricta de seguridad.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-400">✔</span>
                <span><strong>GMP (Correcta Fabricación)</strong>: Control ambiental e higiénico.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-400">✔</span>
                <span><strong>Eurofins Labs</strong>: Certificaciones ciegas periódicas publicadas.</span>
              </li>
            </ul>
          </div>
          <div className="pt-4 border-t border-slate-800 text-xs text-slate-500 font-bold">
            F2C Directo de Fábrica • Eurofins Verified • GMP
          </div>
        </article>
      </section>

      {/* 📦 ESTRUCTURA DE LÍNEAS DE PRODUCTO */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Especialización de Líneas de Suplementación</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-600">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 font-bold">
              <tr>
                <th className="px-6 py-4 rounded-l-2xl">Línea de Producto</th>
                <th className="px-6 py-4">Enfoque Principal</th>
                <th className="px-6 py-4 rounded-r-2xl">Ejemplos Destacados</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium font-medium">
              <tr>
                <td className="px-6 py-4 font-black text-slate-900 text-green-600">SportSeries</td>
                <td className="px-6 py-4">Fórmulas avanzadas listas para el rendimiento y recuperación.</td>
                <td className="px-6 py-4">Evowhey, Evolate (Aislado CFM), Evopump.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-black text-slate-900 text-blue-600">RawSeries</td>
                <td className="px-6 py-4">Ingredientes 100% puros sin saborizantes ni añadidos químicos.</td>
                <td className="px-6 py-4">Creatina Excell, Glutamina, Beta-Alanina Raw.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-black text-slate-900 text-purple-600">EssentialSeries</td>
                <td className="px-6 py-4">Salud general, micronutrición y longevidad integral.</td>
                <td className="px-6 py-4">Omega-3 EPA/DHA, Magnesio Bisglicinato, Melatonina.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-black text-slate-900 text-amber-600">FoodSeries</td>
                <td className="px-6 py-4">Alimentación saludable fit, snacks proteicos y repostería.</td>
                <td className="px-6 py-4">Crema de Cacahuete 100%, Harina de Avena instantánea.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 🧪 MATERIAS PRIMAS EXPLICADAS */}
      <section className="space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest">Patentes Internacionales</span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">Materias Primas Patentadas</h2>
          <p className="mt-2 text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
            HSN Labs empaqueta directamente los compuestos moleculares con mayor evidencia científica en sus botes de grado farmacéutico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between group hover:shadow-xl transition-all">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-green-500/10 text-green-700 rounded-xl">Pureza de Creatina</span>
              <h3 className="text-xl font-black text-slate-900 mt-2">Creapure® (Alemania)</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Monohidrato de creatina de origen 100% alemán con un 99.9% de pureza certificado clínicamente. Libre de impurezas químicas nocivas como la dicianodiamida o la creatinina.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-400 font-bold">
              99.9% Pureza • Germany Patent
            </div>
          </article>

          <article className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between group hover:shadow-xl transition-all">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-blue-500/10 text-blue-700 rounded-xl">Suero de Arla Foods</span>
              <h3 className="text-xl font-black text-slate-900 mt-2">Lacprodan® & CFM</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Materia prima láctea premium de vacas de pasto escandinavas de Arla Foods. Procesada mediante microfiltración de flujo cruzado en frío (CFM) para evitar desnaturalizaciones térmicas.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-400 font-bold">
              Arla Foods Premium Lácteo • CFM Cold Filtered
            </div>
          </article>

          <article className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between group hover:shadow-xl transition-all">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-purple-500/10 text-purple-700 rounded-xl">Adaptógenos Clínicos</span>
              <h3 className="text-xl font-black text-slate-900 mt-2">KSM-66® Ashwagandha</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Extracto patentado estandarizado de raíz de Ashwagandha que modula el eje hipotálamo-hipofisario-adrenal (HPA), demostrando en ensayos clínicos reducir el cortisol plasmático crónico.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-400 font-bold">
              Cortisol Control • 5% Withanólidos
            </div>
          </article>
        </div>
      </section>

      {/* ❓ PREGUNTAS FRECUENTES (SEO FAQ Boost) */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest">Preguntas Frecuentes</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
            Preguntas Frecuentes sobre HSN Labs
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group border border-slate-200 rounded-3xl bg-white [&_summary::-webkit-details-marker]:hidden overflow-hidden transition-all duration-300 hover:border-slate-300"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer select-none bg-slate-50/50">
                <h3 className="font-black text-lg text-[#111827] group-open:text-[#2563EB] transition-colors leading-snug pr-4">
                  {faq.question}
                </h3>
                <span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm">
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
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 text-slate-600 text-base leading-relaxed bg-white">
                <p className="whitespace-pre-line pt-3 font-medium text-slate-600">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
