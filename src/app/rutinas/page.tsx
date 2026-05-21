import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rutinas de Entrenamiento y Planes de Fuerza | Impulse Fitness",
  description:
    "Descubre rutinas estructuradas basadas en biomecánica para hipertrofia y fuerza. Acceso a guías de gimnasio, calistenia en casa y generador inteligente.",
  keywords: [
    "rutinas de entrenamiento gimnasio",
    "planes de fuerza sobrecarga progresiva",
    "generador de rutinas automatico",
    "ejercicios de gimnasio biomecanica",
    "entrenamiento calistenia en casa",
    "tension mecanica hipertrofia",
    "frecuencia de entrenamiento semanal",
    "repeticiones en recamara rir",
    "rutina push pull legs españa",
  ],
};

export default function RutinasPage() {
  const faqs = [
    {
      question: "¿Cuál es la mejor división de entrenamiento para ganar masa muscular (hipertrofia)?",
      answer: "No existe una división 'perfecta' universal, sino la que mejor se adapte a tu adherencia y disponibilidad semanal. \n- Para principiantes (1-3 días): Una división FullBody (Cuerpo Completo) es ideal para maximizar la frecuencia y la coordinación neuromuscular.\n- Para intermedios (4 días): La división Torso-Pierna balancea perfectamente el volumen de series y permite una recuperación óptima.\n- Para avanzados (5-6 días): La distribución Push-Pull-Legs (Empuje-Tirón-Pierna) permite aislar los grupos musculares acumulando mayor volumen de series por sesión sin solapamientos mecánicos."
    },
    {
      question: "¿Qué es el RIR (Repeticiones en Recámara) y por qué es clave en tu rutina?",
      answer: "El RIR (Reps in Reserve) es una herramienta de autorregulación del esfuerzo. Mide cuántas repeticiones adicionales podrías haber completado antes de llegar al fallo muscular real en una serie. Por ejemplo, completar 10 repeticiones con un RIR 2 significa que podrías haber hecho 12. Mantener tus series principales en un rango de RIR 1 a RIR 3 es el estándar de oro de la hipertrofia científica, ya que estimula las fibras musculares de alto umbral evitando la fatiga excesiva del SNC asociada al fallo absoluto continuo."
    },
    {
      question: "¿Cuántos días a la semana se debe entrenar cada músculo (Frecuencia)?",
      answer: "La literatura científica coincide en que la Frecuencia 2 (entrenar cada grupo muscular dos veces por semana) es sustancialmente superior a la Frecuencia 1 (las clásicas rutinas Weider de un músculo al día). Entrenar un músculo activa la síntesis de proteínas musculares por unas 36-48 horas. Al aplicar una Frecuencia 2, mantienes ese estímulo anabólico activo durante el doble de tiempo al mes, permitiendo además repartir el volumen de series semanales de forma más eficiente y con menos fatiga acumulada en cada sesión."
    },
    {
      question: "¿Cuánto tiempo hay que descansar entre series para maximizar el crecimiento?",
      answer: "Durante años se creyó que descansos cortos (30-60 segundos) optimizaban la hipertrofia debido al estrés metabólico. Sin embargo, metaanálisis recientes confirman que descansos más prolongados (2 a 3 minutos en ejercicios multiarticulares pesados como sentadillas o presses, y 1.5 a 2 minutos en ejercicios de aislamiento) son superiores. Esto se debe a que permiten una resíntesis completa de ATP celular y limpian subproductos ácidos metabólicos, permitiéndote aplicar mayor tensión mecánica (más peso y repeticiones) en las series posteriores."
    }
  ];

  // Inyectar FAQPage Schema para aumentar el SEO orgánico
  const faqSchema = {
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
  };

  return (
    <div className="flex flex-col space-y-12 animate-fadeIn mb-20">
      {/* Marcador estructurado JSON-LD FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 🚀 CABECERA GIGANTE Y PREMIUM CON ESTÉTICA CLARA */}
      <header className="relative w-full rounded-3xl overflow-hidden shadow-lg bg-white border border-slate-200/80 p-8 sm:p-12 md:p-14 flex flex-col justify-center min-h-[300px]">
        {/* Luces decorativas neon muy sutiles */}
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[250px] h-[250px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-50/80 text-purple-700 text-xs font-black uppercase tracking-wider border border-purple-200/60 shadow-sm">
            <span>🏋️ Programación de Fuerza</span>
            <span>•</span>
            <span>Estímulo Mecánico y Fisiología Funcional</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Rutinas de Entrenamiento <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Científicamente Estructuradas
            </span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-medium">
            Entrena de forma inteligente, no solo dura. Estructura tus entrenamientos basándote en vectores de fuerza biomecánicos, gestiona la sobrecarga progresiva y optimiza la fatiga sistémica. Utiliza nuestras guías y generadores para construir un físico fuerte y equilibrado.
          </p>
        </div>
      </header>

      {/* 🛠️ TARJETA PRINCIPAL DESTACADA: GENERADOR (Mantenida arriba) */}
      <section className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all p-6 sm:p-10 relative overflow-hidden group">
        {/* Glow de la tarjeta */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/10 transition-colors duration-300" />
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="text-xs font-black text-[#22C55E] bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-xl uppercase tracking-wider">
            Inteligencia Artificial Aplicada
          </span>
          <h2 className="text-3xl font-black text-[#111827] leading-tight">
            Generador Inteligente de Rutinas
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            ¿No sabes por dónde empezar? Configura tu perfil deportivo ingresando tu nivel técnico, disponibilidad de días semanales y objetivos primarios de recomposición. Nuestro motor generará una división perfecta con volumen y descanso calculados al instante.
          </p>
          
          <div className="pt-4">
            <Link
              href="/rutinas/generador"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-2xl bg-[#2563EB] hover:bg-blue-700 text-white font-black text-sm transition-all shadow-md group-hover:scale-102"
            >
              <span>Configurar mi Rutina en Segundos</span>
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 🏋️ GRID DE DIVISIONES GIMNASIO VS CASA (Mantenida arriba) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all p-8 flex flex-col justify-between group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-2xl">💪</div>
            <h3 className="text-2xl font-black text-[#111827] group-hover:text-[#2563EB] transition-colors leading-tight">
              Ejercicios para Gimnasio
            </h3>
            <p className="text-base text-gray-600 leading-relaxed font-medium">
              Buscador detallado de técnica biomecánica para press de banca, sentadillas, remos y poleas. Conoce el estímulo exacto de cada ejercicio para maximizar la tensión muscular profunda.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400">Biomecánica Avanzada</span>
            <Link
              href="/rutinas/gimnasio"
              className="text-sm font-black text-[#2563EB] hover:underline"
            >
              Ver biblioteca de ejercicios →
            </Link>
          </div>
        </article>

        <article className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all p-8 flex flex-col justify-between group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-2xl">🏡</div>
            <h3 className="text-2xl font-black text-[#111827] group-hover:text-[#2563EB] transition-colors leading-tight">
              Ejercicios para Casa
            </h3>
            <p className="text-base text-gray-600 leading-relaxed font-medium">
              Planificaciones eficientes con peso corporal (calistenia), bandas elásticas, kettlebells o mancuernas. Diseñado para conseguir entrenar de forma intensa en cualquier entorno.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400">Calistenia & Bandas</span>
            <Link
              href="/rutinas/casa"
              className="text-sm font-black text-[#2563EB] hover:underline"
            >
              Ver rutinas para casa →
            </Link>
          </div>
        </article>
      </section>

      {/* 🔬 NUEVAS SECCIONES INNOVADORAS INYECTADAS DE ALTÍSIMA DENSIDAD DE PALABRAS CLAVE (SEO al 200%) */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-8 relative overflow-hidden">
        {/* Decorativo de fondo */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Los Tres Pilares de la Hipertrofia y Adaptaciones Fisiológicas de Fuerza
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-medium">
            Programar un <strong>entrenamiento de fuerza</strong> exitoso requiere entender los mecanismos moleculares que activan la síntesis proteica muscular. Durante décadas, se consideraron múltiples factores, pero la ciencia deportiva actual consolida el crecimiento muscular bajo tres principios clave que deben estar reflejados en tu <strong>rutina de gimnasio</strong> semanal:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-slate-800 text-sm">
          <div className="space-y-2">
            <h3 className="font-bold text-blue-400 text-base">1. Tensión Mecánica</h3>
            <p className="text-slate-400 leading-relaxed">
              Es el factor primario del crecimiento. Ocurre cuando las fibras del músculo se someten a una carga de estiramiento y contracción pesada. Mover pesos exigentes forzando al músculo a través de un rango de recorrido completo (*stretch-mediated hypertrophy*) activa los mecanoreceptores celulares que ordenan fabricar nueva proteína.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-purple-400 text-base">2. Estrés Metabólico</h3>
            <p className="text-slate-400 leading-relaxed">
              Asociado a entrenamientos con rangos de repeticiones de intermedio a alto (8-15 reps). Genera acumulación de subproductos metabólicos (como lactato y grupos fosfato) y tumescencia celular (*bombeo muscular*). La hinchazón resultante actúa como señal molecular de estrés que presiona la pared celular, activando vías anabólicas.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-emerald-400 text-base">3. Daño Muscular</h3>
            <p className="text-slate-400 leading-relaxed">
              Provocado por microlesiones ultraestructurales en las sarcómeras del músculo durante la fase excéntrica del levantamiento (la bajada controlada). Aunque ya no se considera el motor principal de la hipertrofia, su reparación estimula las células satélite para fusionarse y expandir el diámetro miofibrilar.
            </p>
          </div>
        </div>
      </section>

      {/* ❓ ACORDEÓN DE EXPERTOS EN RUTINAS Y ENTRENAMIENTO (SEO FAQ Boost) */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest">Preguntas Científicas</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
            Respuestas de Expertos en Programación de Fuerza
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
