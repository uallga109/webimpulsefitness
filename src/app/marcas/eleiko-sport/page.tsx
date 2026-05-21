import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Eleiko Sport | Barras de Halterofilia y Powerlifting de Élite",
  description:
    "Descubre la historia, tecnología y catálogo oficial de Eleiko Sport en España. Barras olímpicas certificadas por IWF e IPF, discos calibrados y plataformas SVR.",
  keywords: [
    "eleiko sport españa",
    "barra halterofilia oficial iwf",
    "barra powerlifting homologada ipf",
    "acero sueco eleiko steel precio",
    "discos bumpers competicion",
    "plataformas svr eleiko ruido",
    "comprar material de fuerza sueco",
    "records del mundo halterofilia eleiko",
  ],
};

export default function EleikoPage() {
  const faqs = [
    {
      question: "¿Qué hace especial al acero patentado de las barras Eleiko (Eleiko Steel™)?",
      answer: "El acero Eleiko Steel™ es una aleación de ultra alta pureza fabricada en Suecia que ofrece una resistencia a la tracción superior a los 215,000 PSI. Su propiedad fundamental es la elasticidad controlada o 'whip' en halterofilia, que acumula energía elástica durante el levantamiento y ayuda al atleta a impulsarse, volviendo a su rectitud original perfecta tras soportar toneladas de presión hidráulica sin deformación permanente."
    },
    {
      question: "¿Cuál es la diferencia técnica entre una barra de halterofilia y una de powerlifting de Eleiko?",
      answer: "Las diferencias principales radican en tres factores mecánicos:\n1. Sistema de Giro: La barra de Halterofilia (IWF) utiliza rodamientos de agujas de precisión (Optimal Rotation System™) para un giro ultra fluido que previene lesiones de muñeca en movimientos dinámicos. La de Powerlifting (IPF) emplea casquillos de bronce más rígidos para dar mayor estabilidad.\n2. Diámetro y Rigidez: La barra olímpica de halterofilia mide 28 mm y tiene flexión controlada. La barra de powerlifting mide 29 mm y es extremadamente rígida.\n3. Moleteado: La barra de powerlifting tiene un moleteado o 'knurling' de 1.5 mm, sumamente afilado y agresivo para evitar deslizamientos en pesos muertos pesados."
    },
    {
      question: "¿Cómo funcionan las plataformas SVR de reducción acústica de Eleiko?",
      answer: "Las plataformas SVR (Sound, Vibration, Relief) utilizan múltiples capas de espuma de absorción de impacto de alta ingeniería biomecánica, madera multilaminada y caucho denso. Este sándwich de materiales estructurales disipa la energía cinética de la barra lanzada desde arriba de la cabeza, reduciendo el ruido acústico en hasta un 50% y eliminando la vibración transmitida por el suelo, haciendo viable el entrenamiento pesado en gimnasios residenciales o urbanos."
    }
  ];

  // Inyectar Esquemas JSON-LD duales (Organization/Brand + FAQPage)
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Brand",
        "@id": "https://impulsefitness.com/marcas/eleiko-sport#brand",
        "name": "Eleiko Sport",
        "logo": "https://impulsefitness.com/icon.png",
        "description": "El estándar de oro mundial en equipamiento para halterofilia y powerlifting profesional con triple certificación IWF, IPF y WPPO.",
        "slogan": "The Strongest Girls and Boys in the World",
        "foundingDate": "1927",
        "foundingLocation": {
          "@type": "Place",
          "name": "Halmstad, Suecia"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://impulsefitness.com/marcas/eleiko-sport#faq",
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
        <span className="text-slate-800">Eleiko Sport</span>
      </nav>

      {/* 🚀 HERO SECTION PREMIUM - ORO SUECO */}
      <header className="relative w-full rounded-3xl overflow-hidden shadow-lg bg-white border border-slate-200/80 p-8 sm:p-12 md:p-16 flex flex-col justify-center min-h-[350px]">
        {/* Glows decorativos dorados elegantes */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50/80 text-amber-700 text-xs font-black uppercase tracking-wider border border-amber-200/60 shadow-sm">
            <span>🇸🇪 Ingeniería y Tradición Sueca</span>
            <span>•</span>
            <span>Estándar de Oro Mundial</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Eleiko Sport <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              La Realidad Absoluta de la Fuerza
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-medium">
            Considerada de forma unánime como el estándar de oro en equipamiento para halterofilia y powerlifting profesional, Eleiko representa la máxima precisión metalúrgica y durabilidad en la historia del deporte de fuerza.
          </p>
        </div>
      </header>

      {/* 🇸🇪 ORÍGENES Y LA HISTORIA DE LAS GOFRERAS */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        <article className="md:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest">Giro Histórico</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              De Gofreras a Récords Mundiales
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Nacida en Halmstad, Suecia, en 1927, la compañía originalmente fabricaba pequeños electrodomésticos, principalmente gofreras industriales. En 1957, el supervisor de la fábrica, apasionado del levantamiento de pesas, propuso diseñar una barra de acero endurecido sueco para evitar fracturas bajo carga extrema.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Como guiño histórico, el <strong>moleteado (knurling)</strong> original imitaba el patrón texturizado de sus gofreras. En 1963, la barra debutó en los Campeonatos Mundiales de Estocolmo, siendo la primera barra del mundo en durar toda una competición oficial intacta.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex items-center space-x-4">
            <span className="text-3xl">🧇</span>
            <span className="text-xs text-amber-800 font-bold leading-relaxed">
              El moleteado característico de las gofreras de 1957 sentó las bases mecánicas del mejor agarre del planeta.
            </span>
          </div>
        </article>

        <article className="md:col-span-5 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6 flex flex-col justify-between relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="space-y-4">
            <span className="text-xs font-black text-amber-400 uppercase tracking-widest">Presencia Olímpica</span>
            <h2 className="text-3xl font-black tracking-tight leading-tight">
              Triple Certificación de Élite
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Eleiko ha sido la marca oficial de levantamiento en 6 Juegos Olímpicos y Paralímpicos, batiéndose más de 1,000 récords del mundo utilizando su equipamiento patentado.
            </p>
            <ul className="space-y-3 pt-2 text-sm text-slate-300 font-medium">
              <li className="flex items-center space-x-2">
                <span className="text-green-400">✔</span>
                <span><strong>IWF (Halterofilia)</strong>: Certificados desde 1969.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-400">✔</span>
                <span><strong>IPF (Powerlifting)</strong>: Socios oficiales exclusivos.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-400">✔</span>
                <span><strong>WPPO (Para Powerlifting)</strong>: Proveedor adaptado.</span>
              </li>
            </ul>
          </div>
          <div className="pt-4 border-t border-slate-800 text-xs text-slate-500 font-bold">
            6+ Juegos Olímpicos • 40+ Mundiales • 1000+ Récords
          </div>
        </article>
      </section>

      {/* 🛠️ TECNOLOGÍA Y PRODUCTOS ESTRELLA */}
      <section className="space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest">Ingeniería Mecánica</span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">Productos Estrella de Fuerza</h2>
          <p className="mt-2 text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
            Cada producto se somete a procesos de fatiga y controles metalúrgicos extremos. A continuación, analizamos las tres familias más famosas de Eleiko.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between group hover:shadow-xl transition-all">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-amber-500/10 text-amber-700 rounded-xl">Barras Eleiko Steel™</span>
              <h3 className="text-xl font-black text-slate-900 mt-2">Barras de Competición</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Pasan controles extremos en prensa hidráulica con 1,500 kg de presión. Si no recuperan su rectitud perfecta con una desviación menor a 0.5 mm, son rechazadas. Cada barra lleva la firma grabada de su artesano metalúrgico.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-400 font-bold">
              Rodamientos de Agujas • 215k PSI
            </div>
          </article>

          <article className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between group hover:shadow-xl transition-all">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-blue-500/10 text-blue-700 rounded-xl">Discos Calibrados</span>
              <h3 className="text-xl font-black text-slate-900 mt-2">Discos de Competición</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Bumpers de caucho de altísima densidad vulcanizados a presión con núcleo de acero sólido para amortiguar impactos sin rebotar. Discos de powerlifting ultrafinos de hierro calibrados individualmente al gramo.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-400 font-bold">
              IWF Bumpers • Hierro Calibrado IPF
            </div>
          </article>

          <article className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between group hover:shadow-xl transition-all">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-purple-500/10 text-purple-700 rounded-xl">Absorción SVR</span>
              <h3 className="text-xl font-black text-slate-900 mt-2">Plataformas SVR</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                La plataforma definitiva acústica que combina madera estructural, amortiguadores elastómeros avanzados y caucho técnico. Disipa la onda de choque acústico en más del 50% y previene las molestas vibraciones en el suelo.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-400 font-bold">
              Reducción del 50% de Ruido
            </div>
          </article>
        </div>
      </section>

      {/* 📊 TABLA DE CERTIFICACIONES Y DIVISIONES */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Catálogo y Estándares de Competición</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-600">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 font-bold">
              <tr>
                <th className="px-6 py-4 rounded-l-2xl">Equipamiento</th>
                <th className="px-6 py-4">Certificación</th>
                <th className="px-6 py-4">Diámetro / Tolerancia</th>
                <th className="px-6 py-4 rounded-r-2xl">Material Principal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              <tr>
                <td className="px-6 py-4 font-black text-slate-900">Barra de Halterofilia</td>
                <td className="px-6 py-4 text-blue-600">IWF Oficial</td>
                <td className="px-6 py-4">28 mm / ±10 gramos</td>
                <td className="px-6 py-4">Acero Sueco Elástico 215k PSI</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-black text-slate-900">Barra de Powerlifting</td>
                <td className="px-6 py-4 text-purple-600">IPF Oficial</td>
                <td className="px-6 py-4">29 mm / ±10 gramos</td>
                <td className="px-6 py-4">Acero Rígido Knurling Afilado</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-black text-slate-900">Bumpers de Competición</td>
                <td className="px-6 py-4 text-blue-600">IWF Oficial</td>
                <td className="px-6 py-4">450 mm / Rebote mínimo</td>
                <td className="px-6 py-4">Caucho Vulcanizado y Cubo de Acero</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-black text-slate-900">Discos de Powerlifting</td>
                <td className="px-6 py-4 text-purple-600">IPF Oficial</td>
                <td className="px-6 py-4">Espesor Delgado Calibrado</td>
                <td className="px-6 py-4">Hierro Fundido Sólido</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 📊 ESTADO ACTUAL Y SENSORES */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-8 relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl space-y-4">
          <span className="text-xs font-black text-amber-400 uppercase tracking-widest">El Presente de la Fuerza</span>
          <h2 className="text-3xl font-black text-white tracking-tight">Tecnología Inteligente sin Alterar el Acero</h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
            Eleiko sigue operando como una empresa familiar desde su sede en Halmstad, Suecia, exportando material a más de 180 países del mundo. Su última revolución es integrar sensores de velocidad y analítica biomecánica avanzada directamente en el interior del cilindro de las barras oficiales de competición. Esto permite registrar métricas de velocidad de empuje (*Velocity-Based Training* o VBT) en tiempo real sin alterar las dimensiones oficiales de la IWF ni el peso exacto del acero sueco, lo que les valió el premio de diseño internacional iF DESIGN AWARD.
          </p>
        </div>
      </section>

      {/* ❓ PREGUNTAS FRECUENTES DE HALTEROFILIA Y POWERLIFTING (SEO FAQ Boost) */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest">Respuestas Técnicas</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
            Preguntas Frecuentes sobre Eleiko Sport
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
