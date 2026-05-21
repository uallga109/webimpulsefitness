import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technogym | Biomecánica y Maquinaria de Fitness de Lujo",
  description:
    "Descubre Technogym en España. El líder indiscutible en wellness de lujo y biomecánica deportiva. Analizamos sus líneas Personal y Skill y el ecosistema Mywellness.",
  keywords: [
    "technogym españa",
    "maquinaria technogym fitness de lujo",
    "cintas de correr technogym personal",
    "technogym skillmill precio",
    "ecosistema mywellness technogym live",
    "nerio alessandri cesena italia",
    "biocircuit technogym rehabilitacion",
    "comprar maquinas de gimnasio premium",
  ],
};

export default function TechnogymPage() {
  const faqs = [
    {
      question: "¿Qué diferencia a la línea residencial Technogym Personal de otras marcas?",
      answer: "La línea Technogym Personal está diseñada en colaboración con el célebre arquitecto y diseñador Antonio Citterio. Más que equipamiento deportivo, se concibe como esculturas de alta costura destinadas a integrarse en villas de lujo y hoteles de 5 estrellas. Utilizan materiales nobles como acero pulido espejo a mano, aluminio inyectado a presión y cristal templado de seguridad."
    },
    {
      question: "¿Cómo funciona el ecosistema digital Mywellness de Technogym?",
      answer: "Mywellness es una plataforma basada en la nube que interconecta todas las pantallas de cardio y musculación de Technogym. El usuario inicia sesión mediante código QR, Apple Watch o reconocimiento facial, cargando al instante su entrenamiento personalizado, ajustes ergonómicos robotizados del asiento, listas de Spotify o perfiles de Netflix de forma automática en cualquier parte del mundo."
    },
    {
      question: "¿Qué es el sistema Skillmill y cómo simula el entrenamiento atlético?",
      answer: "El Skillmill es una cinta de correr autopropulsada y curvada que no requiere motor eléctrico. Utiliza un sistema de freno magnético variable de alta precisión (resistencia magnética). Al ajustar la palanca de resistencia, el atleta puede alternar de forma inmediata entre una carrera libre de agilidad, sprints de potencia máxima y el empuje de un trineo pesado (*sled push*), monitorizando el vector de fuerza en su pantalla Live."
    }
  ];

  // Inyectar Esquemas JSON-LD duales (Organization/Brand + FAQPage)
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Brand",
        "@id": "https://impulsefitness.com/marcas/technogym#brand",
        "name": "Technogym (The Wellness Company)",
        "logo": "https://impulsefitness.com/icon.png",
        "description": "El indiscutible imperio italiano del wellness de lujo y proveedor exclusivo en 9 Juegos Olímpicos consecutivos.",
        "slogan": "The Wellness Company",
        "foundingDate": "1983",
        "foundingLocation": {
          "@type": "Place",
          "name": "Cesena, Italia"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://impulsefitness.com/marcas/technogym#faq",
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
        <span className="text-slate-800">Technogym</span>
      </nav>

      {/* 🚀 HERO SECTION PREMIUM - LUXURY GOLD */}
      <header className="relative w-full rounded-3xl overflow-hidden shadow-lg bg-white border border-slate-200/80 p-8 sm:p-12 md:p-16 flex flex-col justify-center min-h-[350px]">
        {/* Glows decorativos dorados de lujo */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50/80 text-amber-700 text-xs font-black uppercase tracking-wider border border-amber-200/60 shadow-sm">
            <span>🇮🇹 Diseño y Wellness Italiano de Lujo</span>
            <span>•</span>
            <span>Estilo de Vida Saludable</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Technogym <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-slate-900 via-amber-600 to-amber-700 bg-clip-text text-transparent">
              La Escultura Tecnológica del Bienestar
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-medium">
            Technogym representa la sinergia definitiva entre el refinamiento estético de alta costura, la ingeniería biomecánica del movimiento y una conectividad digital inteligente sin precedentes en la industria.
          </p>
        </div>
      </header>

      {/* 🇮🇹 HISTORIA Y FILOSOFÍA DEL GARAJE A LA BOLSA DE MILÁN */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        <article className="md:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest">El Nacimiento de un Imperio</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Diseñado en un Garaje por Nerio Alessandri
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Fundada en Cesena, Italia, en 1983 por Nerio Alessandri, un joven diseñador industrial de 22 años, la marca nació en el garaje de su domicilio. Alessandri revolucionó la industria agresiva del culturismo de los años 80 introduciendo en 1992 la filosofía holística del <strong>Wellness (bienestar activo)</strong>.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Hoy en día es una empresa cotizada en la Bolsa de Milán, presente en los centros boutique y hoteles más prestigiosos. Colaboran activamente con diseñadores como Antonio Citterio, logrando que sus productos parezcan piezas de arte contemporáneo.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex items-center space-x-4">
            <span className="text-3xl">🇮🇹</span>
            <span className="text-xs text-amber-800 font-bold leading-relaxed">
              Proveedor oficial de entrenamiento exclusivo de 9 Juegos Olímpicos consecutivos (desde Sídney 2000).
            </span>
          </div>
        </article>

        <article className="md:col-span-5 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6 flex flex-col justify-between relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="space-y-4">
            <span className="text-xs font-black text-amber-400 uppercase tracking-widest">Conectividad Mywellness</span>
            <h2 className="text-3xl font-black tracking-tight leading-tight">
              Ecosistema Inteligente Live
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Technogym destaca por su software integrado en pantalla táctil con inteligencia artificial adaptada.
            </p>
            <ul className="space-y-3 pt-2 text-sm text-slate-300 font-medium">
              <li className="flex items-center space-x-2">
                <span className="text-amber-400">✔</span>
                <span><strong>Sincronización Total</strong>: Carga de métricas vía Apple Watch o código QR.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-amber-400">✔</span>
                <span><strong>Technogym Coach</strong>: Ajuste de cargas asistido por inteligencia artificial en tiempo real.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-amber-400">✔</span>
                <span><strong>Biocircuit Activo</strong>: Circuito robotizado que ajusta sillines y pesos de forma autónoma.</span>
              </li>
            </ul>
          </div>
          <div className="pt-4 border-t border-slate-800 text-xs text-slate-500 font-bold">
            Live Interface • Biocircuit Technology • Skill Series
          </div>
        </article>
      </section>

      {/* 🛠️ TECNOLOGÍA Y LÍNEAS DE PRODUCTOS */}
      <section className="space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest">Equipamiento Patentado</span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">Líneas de Diseño de Technogym</h2>
          <p className="mt-2 text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
            La marca segmenta sus gamas para satisfacer desde el entrenamiento atlético de élite hasta los gimnasios residenciales más exclusivos del planeta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between group hover:shadow-xl transition-all">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-amber-500/10 text-amber-700 rounded-xl">Línea Residencial Personal</span>
              <h3 className="text-xl font-black text-slate-900 mt-2">Personal Collection</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Diseñada por Antonio Citterio utilizando acero con pulido espejo de alta fidelidad, aluminio fundido a presión y cristales templados. Creada para fusionarse con el interiorismo de villas residenciales de súper lujo.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-400 font-bold">
              Antonio Citterio Design • Luxury Steel
            </div>
          </article>

          <article className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between group hover:shadow-xl transition-all">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-amber-500/10 text-amber-700 rounded-xl">Rendimiento Olímpico Skill</span>
              <h3 className="text-xl font-black text-slate-900 mt-2">Skill Series</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Desarrollada junto a atletas de élite olímpicos para el rendimiento deportivo puro. Skillmill, Skillrow y Skillbike implementan sistemas de resistencia magnética variable que simulan tracciones reales de agua o trineos.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-400 font-bold">
              Athletic Performance • Magnetic Resistance
            </div>
          </article>

          <article className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between group hover:shadow-xl transition-all">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-slate-950/10 text-slate-700 rounded-xl">Musculación Comercial Artis</span>
              <h3 className="text-xl font-black text-slate-900 mt-2">Artis & Biocircuit</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                La gama más alta para clubes deportivos comerciales y clínicas. Máquinas de poleas con levas de resistencia excéntricas que respetan las curvas de fuerza humana. Biocircuit guía de forma robotizada y guiada los pesos y posturas.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-400 font-bold">
              Biomechanical Cam • Automatic Seat Setup
            </div>
          </article>
        </div>
      </section>

      {/* 📊 ESPECIFICACIONES DE EQUIPOS */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Especificaciones y Aplicación Tecnológica</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-600">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 font-bold">
              <tr>
                <th className="px-6 py-4 rounded-l-2xl">Familia de Máquinas</th>
                <th className="px-6 py-4">Público y Enfoque</th>
                <th className="px-6 py-4">Software Integrado</th>
                <th className="px-6 py-4 rounded-r-2xl">Características Biomecánicas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              <tr>
                <td className="px-6 py-4 font-black text-slate-900">Personal Collection</td>
                <td className="px-6 py-4">Residencial / Hoteles Gran Lujo</td>
                <td className="px-6 py-4">Technogym Live (Pantallas Full HD)</td>
                <td className="px-6 py-4">Diseño Antonio Citterio, Acero Espejo</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-black text-slate-900">Skill Series</td>
                <td className="px-6 py-4">Atletas Olímpico / Alto Rendimiento</td>
                <td className="px-6 py-4">Skillarena & Biofeedback</td>
                <td className="px-6 py-4">Resistencia Magnética autopropulsada</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-black text-slate-900">Biocircuit / Artis</td>
                <td className="px-6 py-4">Clínicas Médicas / Fitness Premium</td>
                <td className="px-6 py-4">Ecosistema Cloud Inteligente</td>
                <td className="px-6 py-4">Ajustes robóticos automáticos de altura</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 📈 PRESTIGIO Y SPONSORSHIP */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-8 relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl space-y-4">
          <span className="text-xs font-black text-amber-400 uppercase tracking-widest">Estatus Global</span>
          <h2 className="text-3xl font-black text-white tracking-tight">Patrocinador y Proveedor Oficial</h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
            Technogym es sinónimo de estatus y exclusividad. Es la marca elegida cuando no existen límites presupuestarios y se exige una perfecta fusión entre el diseño italiano refinado y el software en la nube del futuro. Visten oficialmente las salas de preparación física de escuderías de Fórmula 1 (como Ferrari y McLaren), clubes de fútbol de élite mundial (como el Real Madrid, Juventus o Paris Saint-Germain), e incluso programas internacionales de entrenamiento aeroespacial militar.
          </p>
        </div>
      </section>

      {/* ❓ PREGUNTAS FRECUENTES (SEO FAQ Boost) */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest">Preguntas Frecuentes</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
            Preguntas Frecuentes sobre Technogym
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
