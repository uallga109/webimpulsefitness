import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SBD Apparel | Rodilleras y Cinturones de Powerlifting Oficiales IPF",
  description:
    "Descubre el equipamiento oficial de SBD Apparel en España. Rodilleras de neopreno de 7 mm, cinturón de palanca patentado de 13 mm y material homologado IPF.",
  keywords: [
    "sbd apparel españa",
    "rodilleras sbd 7mm powerlifting",
    "cinturon sbd palanca ajustable",
    "sbd knee sleeves original",
    "comprar rodilleras sbd oficiales ipf",
    "muñequeras sbd stiff rigidas",
    "cinturon de cuero 13mm sbd",
    "sbd eclipse y defy edicion limitada",
    "material homologado ipf powerlifting",
  ],
};

export default function SBDApparelPage() {
  const faqs = [
    {
      question: "¿Cómo funciona la hebilla de palanca patentada del cinturón SBD Belt?",
      answer: "A diferencia de los cinturones de palanca tradicionales que requieren desatornillar y recolocar la placa metálica cuando cambia tu peso o usas ropa diferente, la palanca patentada de SBD combina la compresión rápida de un cierre de palanca con la versatilidad de ajuste de una hebilla de hebijón. Cuenta con un sistema deslizante dentado que te permite ajustar la holgura milímetro a milímetro en cada serie sin necesidad de herramientas, manteniendo un cierre hermético de máxima presión intraabdominal."
    },
    {
      question: "¿Por qué las rodilleras SBD de 7 mm mejoran el rendimiento en la sentadilla (Efecto Rebote)?",
      answer: "Las rodilleras SBD Knee Sleeves utilizan un neopreno de alta densidad grado competición de 7 mm de grosor, el máximo legal permitido por la IPF. Su corte anatómico patentado de alta tensión comprime fuertemente la articulación de la rodilla. En el fondo de la sentadilla, el material se pliega y acumula una gran energía elástica (resistencia a la deformación), la cual se libera durante la fase concéntrica de ascenso. Esto genera un 'efecto rebote' mecánico capaz de aportar estabilidad lateral absoluta y sumar varios kilos a tu levantamiento máximo de forma 100% legal."
    },
    {
      question: "¿Cuál es la diferencia entre las muñequeras SBD en grado 'Flexible' y 'Stiff'?",
      answer: "Las muñequeras SBD se fabrican en dos rigideces específicas para adaptarse al estilo del atleta:\n1. Flexible: Permite un rango mínimo de movilidad articular y adaptación, ideal para entrenamientos regulares de fuerza general o levantamientos olímpicos donde se requiere cierta extensión de muñeca.\n2. Stiff (Rígida): Incorpora fibras elásticas tejidas de grado industrial ultra pesadas que bloquean por completo la articulación. Convierte la muñeca en una auténtica columna indestructible de cemento, ideal para sostener barras extremadamente pesadas de press de banca o sentadilla baja sin el más mínimo desvío estructural."
    }
  ];

  // Inyectar Esquemas JSON-LD duales (Organization/Brand + FAQPage)
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Brand",
        "@id": "https://impulsefitness.com/marcas/sbd-apparel#brand",
        "name": "SBD Apparel",
        "logo": "https://impulsefitness.com/icon.png",
        "description": "La marca de culto británica de protección y soporte de fuerza para powerlifting de élite, fabricada localmente en Sheffield, Inglaterra.",
        "slogan": "The Global Standard for Strength Sports",
        "foundingDate": "2013",
        "foundingLocation": {
          "@type": "Place",
          "name": "Sheffield, Inglaterra, Reino Unido"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://impulsefitness.com/marcas/sbd-apparel#faq",
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
        <span className="text-slate-800">SBD Apparel</span>
      </nav>

      {/* 🚀 HERO SECTION PREMIUM - CRIMSON & BLACK */}
      <header className="relative w-full rounded-3xl overflow-hidden shadow-lg bg-white border border-slate-200/80 p-8 sm:p-12 md:p-16 flex flex-col justify-center min-h-[350px]">
        {/* Glows decorativos rojos de competición elegantes */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-slate-900/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-black uppercase tracking-wider border border-red-200/60 shadow-sm">
            <span>🇬🇧 Fabricado en Sheffield, Inglaterra</span>
            <span>•</span>
            <span>Estándar de Oro en Powerlifting</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            SBD Apparel <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-black bg-clip-text text-transparent">
              La Armadura Definitiva de la Fuerza
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-medium">
            SBD Apparel es el sinónimo absoluto de máxima protección, soporte articular y rendimiento biomecánico en el powerlifting de élite. Más del 80% de los atletas en tarimas mundiales confían en sus icónicas letras rojas y negras para soportar toneladas de metal sobre su cuerpo.
          </p>
        </div>
      </header>

      {/* 🇬🇧 ORIGEN E HISTORIA: DISEÑADO POR Y PARA ATLETAS */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        <article className="md:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-black text-red-600 uppercase tracking-widest">Ingeniería Británica</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Origen e Historia: Diseñado para los Movimientos Básicos
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Fundada en 2013 en el Reino Unido por Benjamin Banks, SBD nació con una visión clara y directa: maximizar el rendimiento y la seguridad del atleta en los tres movimientos básicos del powerlifting: **Squat (Sentadilla), Bench press (Press de banca) y Deadlift (Peso muerto)**.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Al percatarse de que el material existente en el mercado se degradaba rápidamente o no optimizaba los límites del reglamento oficial, Banks decidió fabricar un ecosistema ergonómico de soporte. En lugar de externalizar la producción a Asia, SBD mantiene su núcleo duro de diseño y costura en su planta robotizada de <strong>Sheffield, Inglaterra</strong>, una ciudad históricamente famosa por su metalurgia pesada y la calidad de su manufactura.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-red-500/5 border border-red-500/10 flex items-center space-x-4">
            <span className="text-3xl">🛡️</span>
            <span className="text-xs text-red-800 font-bold leading-relaxed">
              El acrónimo SBD define exactamente los tres pilares de la fuerza bruta: Squat, Bench y Deadlift.
            </span>
          </div>
        </article>

        <article className="md:col-span-5 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6 flex flex-col justify-between relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
          <div className="space-y-4">
            <span className="text-xs font-black text-red-400 uppercase tracking-widest">Monopolio de Tarima</span>
            <h2 className="text-3xl font-black tracking-tight leading-tight">
              Homologación Oficial IPF Absoluta
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              SBD Apparel no solo viste al atleta, sino que cumple con las tolerancias y reglamentos internacionales más rigurosos del powerlifting profesional:
            </p>
            <ul className="space-y-3 pt-2 text-sm text-slate-300 font-medium">
              <li className="flex items-center space-x-2">
                <span className="text-red-500">✔</span>
                <span><strong>Grosor Regulado</strong>: Rodilleras de 7mm exactos.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-red-500">✔</span>
                <span><strong>Ancho Legal</strong>: Cinturón de 10cm de ancho oficial.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-red-500">✔</span>
                <span><strong>Certificación IPF</strong>: Evita descalificaciones en pesaje.</span>
              </li>
            </ul>
          </div>
          <div className="pt-4 border-t border-slate-800 text-xs text-slate-500 font-bold">
            100% Homologado IPF • Hecho en el Reino Unido
          </div>
        </article>
      </section>

      {/* 🛠️ TECNOLOGÍA Y PRODUCTOS ESTRELLA */}
      <section className="space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-black text-red-600 uppercase tracking-widest">Armadura Articular</span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">Los Tres Pilares de Soporte SBD</h2>
          <p className="mt-2 text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
            Analizamos la ingeniería patentada detrás de los accesorios de soporte que protegen las articulaciones y optimizan los kilogramos levantados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between group hover:shadow-xl transition-all">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-red-500/10 text-red-700 rounded-xl">Neopreno Técnico</span>
              <h3 className="text-xl font-black text-slate-900 mt-2">Rodilleras SBD 7mm</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Confeccionadas con neopreno de alta densidad vulcanizado y costuras externas reforzadas. Su compresión brutal sobre la articulación evita desplazamientos patelares laterales y proporciona un poderoso <strong>efecto rebote</strong> elástico al levantarte del fondo de la sentadilla.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-400 font-bold">
              Compresión Grado Competición • 7mm
            </div>
          </article>

          <article className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between group hover:shadow-xl transition-all">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-slate-950/10 text-slate-900 rounded-xl">Hebilla Deslizante Patentada</span>
              <h3 className="text-xl font-black text-slate-900 mt-2">Cinturón de Palanca</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Fabricado con 13 mm de cuero inglés curtido al vegetal. Integra una hebilla de palanca única patentada que te permite ajustar milimétricamente el cinturón en cada serie sin necesidad de usar destornilladores, logrando una presión intraabdominal óptima de forma inmediata.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-400 font-bold">
              13mm de Cuero • Ajuste sin Herramientas
            </div>
          </article>

          <article className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between group hover:shadow-xl transition-all">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-red-500/10 text-red-700 rounded-xl">Estabilidad de Cemento</span>
              <h3 className="text-xl font-black text-slate-900 mt-2">Muñequeras y Coderas</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Las muñequeras en versión 'Stiff' combinan bandas elastómeras que inmovilizan la articulación en cargas pesadas de empuje. Las coderas reducen la tensión y previenen la tendinitis del tríceps al combinar dos densidades elásticas diferentes.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-400 font-bold">
              Muñequeras Stiff • Coderas de Soporte
            </div>
          </article>
        </div>
      </section>

      {/* 📊 TABLA DE ESPECIFICACIONES SBD */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Reglamento Técnico y Dimensiones de Soporte</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-600">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 font-bold">
              <tr>
                <th className="px-6 py-4 rounded-l-2xl">Accesorio SBD</th>
                <th className="px-6 py-4">Grosor / Medida Oficial</th>
                <th className="px-6 py-4">Sistema de Cierre / Ajuste</th>
                <th className="px-6 py-4 rounded-r-2xl">Beneficio Biomecánico Principal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              <tr>
                <td className="px-6 py-4 font-black text-slate-900">Rodilleras de Competición</td>
                <td className="px-6 py-4 text-red-600">7 mm de Neopreno Especial</td>
                <td className="px-6 py-4">Ajuste Anatómico 3D Sellado</td>
                <td className="px-6 py-4">Efecto rebote elástico concéntrico y estabilidad rotacional</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-black text-slate-900">Cinturón SBD Belt</td>
                <td className="px-6 py-4 text-slate-900">13 mm de Grosor / 10 cm de Ancho</td>
                <td className="px-6 py-4">Palanca Ajustable Patentada</td>
                <td className="px-6 py-4">Soporte rígido de la maniobra de Valsalva lumbar</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-black text-slate-900">Muñequeras Stiff</td>
                <td className="px-6 py-4 text-red-600">Hasta 1 metro de longitud legal</td>
                <td className="px-6 py-4">Velcro Industrial Reforzado</td>
                <td className="px-6 py-4">Soporte vertical rígido impidiendo la hiperextensión</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-black text-slate-900">Coderas de Compresión</td>
                <td className="px-6 py-4">5 mm de doble neopreno flexible</td>
                <td className="px-6 py-4">Mangas deslizantes anatómicas</td>
                <td className="px-6 py-4">Alivio de la inflamación del tendón de inserción del codo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 📈 CULTURA PREMIUM: EDICIONES LIMITADAS Y SIN DESCUENTOS */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-8 relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl space-y-4">
          <span className="text-xs font-black text-red-400 uppercase tracking-widest">Estrategia y Prestigio</span>
          <h2 className="text-3xl font-black text-white tracking-tight">Cultura de Marca: Las Colecciones Exclusivas de SBD</h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
            SBD opera con una filosofía de exclusividad estricta similar a las firmas de alta costura pero en la fuerza bruta. <strong>No aplican rebajas ni códigos de descuento</strong> en sus productos principales, confiando plenamente en la durabilidad perpetua de su material (un cinturón SBD es una inversión para toda la vida). 
          </p>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
            Para dinamizar el mercado, lanzan periódicamente colecciones de edición limitada como las gamas **Eclipse, Defy, Phoenix**, introduciendo combinaciones en verde militar, azul invierno o gris carbón. Estas ediciones se agotan en horas a nivel mundial y se convierten en objetos de coleccionista. Además, patrocinan al "Dream Team" de atletas más fuertes del planeta, incluyendo a leyendas de la talla de **Jesus Olivares, Amanda Lawrence, Ray Williams** (primer hombre en hacer sentadilla raw con más de 1,000 lbs) y el campeón de halterofilia **Lasha Talakhadze**.
          </p>
        </div>
      </section>

      {/* ❓ PREGUNTAS FRECUENTES DE POWERLIFTING SBD (SEO FAQ Boost) */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-black text-red-600 uppercase tracking-widest">Respuestas Técnicas</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
            Preguntas Frecuentes sobre SBD Apparel
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group border border-slate-200 rounded-3xl bg-white [&_summary::-webkit-details-marker]:hidden overflow-hidden transition-all duration-300 hover:border-slate-300"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer select-none bg-slate-50/50">
                <h3 className="font-black text-lg text-[#111827] group-open:text-red-600 transition-colors leading-snug pr-4">
                  {faq.question}
                </h3>
                <span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                  <svg
                    className="w-4 h-4 text-gray-500 group-open:text-red-600"
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
