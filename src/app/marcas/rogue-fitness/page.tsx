import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rogue Fitness | Acero Industrial y Equipamiento de Fuerza",
  description:
    "Descubre Rogue Fitness en España. La marca líder en CrossFit, Powerlifting y Strongman. Analizamos su gama de racks Monster, la mítica barra Ohio Bar y su Cerakote.",
};

export default function RoguePage() {
  const faqs = [
    {
      question: "¿Qué ventajas ofrece la barra Ohio Bar con recubrimiento de Cerakote?",
      answer: "La mítica Ohio Bar destaca por ofrecer el acabado Cerakote, una resina cerámico-polimérica importada de la industria militar que proporciona una resistencia a la corrosión y oxidación hasta 100 veces superior al zinc o al cromo. Además, permite dar un acabado texturizado sumamente cómodo que no reduce la adherencia del moleteado y ofrece colores personalizados estéticos."
    },
    {
      question: "¿Por qué los racks de la serie Rogue Monster son considerados indestructibles?",
      answer: "Los racks Rogue Monster están fabricados con perfiles de acero industrial de calibre 11 de 3x3 pulgadas y pernos estructurales masivos de 1 pulgada de grosor. Están diseñados mediante corte láser robótico automatizado en Columbus (Ohio) y soldados de forma continua, resistiendo cargas que superan la tonelada métrica de tracción estática."
    },
    {
      question: "¿Cómo se calibran los discos de competición de powerlifting de Rogue?",
      answer: "Los discos Rogue Competition Powerlifting se fabrican en fundición maciza de acero y cuentan con una tolerancia al peso extremadamente estricta (+15 gramos / -0 gramos). Para lograr esta precisión milimétrica, incorporan un tapón de plomo calibrador en su parte trasera que los técnicos ajustan a mano antes de sellar el disco para la tarima oficial de la IPF."
    }
  ];

  // Inyectar Esquemas JSON-LD duales (Organization/Brand + FAQPage)
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Brand",
        "@id": "https://impulsefitness.com/marcas/rogue-fitness#brand",
        "name": "Rogue Fitness",
        "logo": "https://impulsefitness.com/icon.png",
        "description": "El coloso global del equipamiento de fuerza moderno y oficial de los CrossFit Games, con fabricación pesada en Estados Unidos.",
        "slogan": "Rogue - The Legend",
        "foundingDate": "2006",
        "foundingLocation": {
          "@type": "Place",
          "name": "Columbus, Ohio, EE. UU."
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://impulsefitness.com/marcas/rogue-fitness#faq",
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
        <span className="text-slate-800">Rogue Fitness</span>
      </nav>

      {/* 🚀 HERO SECTION PREMIUM - CRIMSON & SLATE */}
      <header className="relative w-full rounded-3xl overflow-hidden shadow-lg bg-white border border-slate-200/80 p-8 sm:p-12 md:p-16 flex flex-col justify-center min-h-[350px]">
        {/* Glows decorativos rojos de fuerza */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-slate-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-50/80 text-red-700 text-xs font-black uppercase tracking-wider border border-red-200/60 shadow-sm">
            <span>🇺🇸 Acero Industrial Made in USA</span>
            <span>•</span>
            <span>Músculo e Innovación Modular</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Rogue Fitness <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-slate-900 via-red-600 to-red-700 bg-clip-text text-transparent">
              La Revolución del Acero Pesado
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-medium">
            Rogue representa la ingeniería pesada norteamericana del siglo XXI. De nacer en un modesto garaje, se ha convertido en el titán indiscutible del CrossFit, la fuerza y la cultura Strongman a nivel mundial.
          </p>
        </div>
      </header>

      {/* 🇺🇸 LA HISTORIA DEL GARAJE A LA SOLDADURA INDUSTRIAL */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        <article className="md:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest">Nacida de la Necesidad</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Del Garaje de Bill a los CrossFit Games
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Fundada en 2006 en Columbus, Ohio, por Bill Henniger, un exoficial de la Fuerza Aérea de EE. UU., Rogue nació de una frustración. Al abrir su propio box de CrossFit, Henniger no encontró un solo fabricante que entregara material con la rigidez necesaria y plazos cortos. Decidió diseñar el acero él mismo.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Su explosivo crecimiento fue parejo al boom del CrossFit global. Diseñando los inmensos andamios y sistemas modulares de competición (*rigs*) de los CrossFit Games, la marca demostró una fiabilidad letal, capturando el mercado mundial de gimnasios domésticos (*home gyms*).
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-red-500/5 border border-red-500/10 flex items-center space-x-4">
            <span className="text-3xl">🛠️</span>
            <span className="text-xs text-red-800 font-bold leading-relaxed">
              Hoy, sus plantas de Columbus automatizan corte láser 3D y soldadura robótica avanzada sobre acero local estadounidense.
            </span>
          </div>
        </article>

        <article className="md:col-span-5 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6 flex flex-col justify-between relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
          <div className="space-y-4">
            <span className="text-xs font-black text-red-400 uppercase tracking-widest">Modularidad LEGO</span>
            <h2 className="text-3xl font-black tracking-tight leading-tight">
              Ecosistema Modular Monster
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              La gran revolución de Rogue fue la modularidad de sus racks de potencia de calibre 11 (tubo de 3x3 pulgadas y pernos de 1 pulgada).
            </p>
            <ul className="space-y-3 pt-2 text-sm text-slate-300 font-medium">
              <li className="flex items-center space-x-2">
                <span className="text-red-400">✔</span>
                <span><strong>Ecosistema Infinito</strong>: Añade poleas, brazos Jammer o soportes de fondos.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-red-400">✔</span>
                <span><strong>Láser de Precisión</strong>: Orificios numerados individualmente en corte láser.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-red-400">✔</span>
                <span><strong>Strongman Standards</strong>: Fabricantes de las colosales Piedras de Atlas de competición.</span>
              </li>
            </ul>
          </div>
          <div className="pt-4 border-t border-slate-800 text-xs text-slate-500 font-bold">
            Monster Series • Monster Lite • Cerakote Technology
          </div>
        </article>
      </section>

      {/* 🛠️ TECNOLOGÍA Y PRODUCTOS ESTRELLA */}
      <section className="space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest">Productos Emblemáticos</span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">Material estrella de Rogue</h2>
          <p className="mt-2 text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
            Analizamos la ingeniería e innovación detrás de los tres pilares del catálogo de fuerza de Rogue Fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between group hover:shadow-xl transition-all">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-red-500/10 text-red-700 rounded-xl">La Legendaria Ohio Bar</span>
              <h3 className="text-xl font-black text-slate-900 mt-2">La Ohio Bar y Cerakote</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                La barra más vendida de la historia. Fabricada con acero norteamericano de 190,000 PSI de resistencia. Rogue popularizó el recubrimiento de Cerakote militar, resistente a la abrasión del magnesio y del sudor en múltiples acabados coloridos.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-400 font-bold">
              190,000 PSI • Cerakote Finish
            </div>
          </article>

          <article className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between group hover:shadow-xl transition-all">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-slate-950/10 text-slate-700 rounded-xl">Bumpers y Acero Calibrado</span>
              <h3 className="text-xl font-black text-slate-900 mt-2">Discos de Competición</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Desde los discos de competición IPF de acero sólido fundido (con tapón trasero de plomo de calibración al gramo), hasta los icónicos Competition Bumpers con inserto central de acero de una sola pieza mecanizada.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-400 font-bold">
              IPF Approved • Mil-Spec Recycle Rubber
            </div>
          </article>

          <article className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between group hover:shadow-xl transition-all">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-red-500/10 text-red-700 rounded-xl">Soporte Lumbar Integrado</span>
              <h3 className="text-xl font-black text-slate-900 mt-2">Rhino Belt Squat</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Una máquina de sentadilla de cinturón mediante polea modular que se integra directamente en cualquier rack Monster. Aislante biomecánico para la musculatura de pierna evitando la compresión perjudicial en la columna.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-400 font-bold">
              Carga Guiada Autoportante
            </div>
          </article>
        </div>
      </section>

      {/* 📊 ESPECIFICACIONES TÉCNICAS RACKS DE POTENCIA */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Racks de Fuerza y Especificaciones de Acero</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-600">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 font-bold">
              <tr>
                <th className="px-6 py-4 rounded-l-2xl">Línea de Rack</th>
                <th className="px-6 py-4">Dimensiones de Tubo</th>
                <th className="px-6 py-4">Grosor de Pernos / Acero</th>
                <th className="px-6 py-4 rounded-r-2xl">Detalle de Corte</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              <tr>
                <td className="px-6 py-4 font-black text-slate-900">Rogue Monster</td>
                <td className="px-6 py-4">3 x 3 pulgadas</td>
                <td className="px-6 py-4">1 pulgada / Calibre 11</td>
                <td className="px-6 py-4">Orificios numerados corte láser en 4 lados</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-black text-slate-900">Rogue Monster Lite</td>
                <td className="px-6 py-4">3 x 3 pulgadas</td>
                <td className="px-6 py-4">5/8 pulgadas / Calibre 11</td>
                <td className="px-6 py-4">Orificios espaciado Westside en zona baja</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-black text-slate-900">Rogue Infinity</td>
                <td className="px-6 py-4">2 x 3 pulgadas</td>
                <td className="px-6 py-4">5/8 pulgadas / Calibre 11</td>
                <td className="px-6 py-4">Tradicional espaciado Westside</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 📈 COMPROMISO INDUSTRIAL */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-8 relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl space-y-4">
          <span className="text-xs font-black text-red-400 uppercase tracking-widest">Tanques de Acero</span>
          <h2 className="text-3xl font-black text-white tracking-tight">El Concepto Made in USA</h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
            Rogue no busca la finura estética de la alta costura italiana ni la tradición centenaria de las gofreras suecas; Rogue se enfoca en crear tanques de acero bruto diseñados para resistir cualquier tipo de abuso mecánico o ambiental. Con almacenes en Europa (Rogue Europe) y Australia, controlan una de las cadenas de suministro más potentes del deporte, vistiendo gimnasios comerciales de la NFL, bases militares de la OTAN e instalaciones olímpicas con el lema de orgullo local estadounidense.
          </p>
        </div>
      </section>

      {/* ❓ PREGUNTAS FRECUENTES (SEO FAQ Boost) */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest">Preguntas Frecuentes</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
            Preguntas Frecuentes sobre Rogue Fitness
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
