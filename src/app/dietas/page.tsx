import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dietas Deportivas y Planificación Nutricional de Precisión | Impulse Fitness",
  description:
    "Aprende a planificar tu nutrición y ajustar tus calorías al gramo. Calculadoras de gasto energético (TDEE), proteínas y guías de dietas hipertróficas y de definición.",
  keywords: [
    "nutricion deportiva precision",
    "dietas ganar masa muscular limpia",
    "dieta de definicion estricta",
    "calculadora calorias deficit",
    "calculadora proteinas hipertrofia",
    "recomposicion corporal macronutrientes",
    "dieta cetogenica keto menu",
    "ayuno intermitente beneficios",
    "sintesis proteica muscular",
    "nutricion basada en evidencia",
  ],
};

export default function DietasPage() {
  const faqs = [
    {
      question: "¿Es viable realizar una recomposición corporal (ganar músculo y perder grasa simultáneamente)?",
      answer: "Sí, es totalmente viable bajo condiciones específicas. Este fenómeno ocurre de manera óptima en personas principiantes en el entrenamiento de fuerza, sujetos con sobrepeso u obesidad que inician una rutina regular, o atletas que retornan al entrenamiento tras un periodo largo de inactividad. El protocolo requiere un déficit calórico muy moderado (10-15%), una ingesta proteica elevada (2.0 a 2.5 g/kg de peso corporal) y un entrenamiento de fuerza enfocado en la sobrecarga progresiva."
    },
    {
      question: "¿Cuánta proteína puede asimilar el cuerpo por comida para maximizar la síntesis muscular?",
      answer: "Aunque la creencia popular limitaba la absorción a '30 gramos por toma', la literatura científica moderna confirma que el intestino absorbe virtualmente toda la proteína ingerida. Desde el punto de vista del anabolismo muscular, se activa el 'umbral de leucina' con una toma de 25-40 gramos de proteína de alta calidad (como el suero o el huevo). Ingestas mayores (por ejemplo, 60-80g en una sola comida) no se desperdician; simplemente se digieren de manera más lenta, manteniendo la elevación de aminoácidos en sangre durante más horas e inhibiendo el catabolismo."
    },
    {
      question: "¿Los carbohidratos por la noche impiden la pérdida de grasa corporal?",
      answer: "Falso. La acumulación o pérdida de grasa corporal se rige por el balance energético neto al final de las 24 horas y acumulado a lo largo de los días. Tu metabolismo no se apaga repentinamente al anochecer. Los carbohidratos consumidos por la noche se almacenarán como glucógeno muscular y hepático para tus entrenamientos matutinos. Lo relevante es que no excedas tu límite calórico diario."
    },
    {
      question: "¿Cuál es la proporción ideal de macronutrientes para ganar masa libre de grasa?",
      answer: "No existe una fórmula universal, pero una distribución óptima para deportistas de fuerza suele ser:\n1. Proteína: 1.6 a 2.2g por kg de peso corporal diario.\n2. Grasas: 0.8 a 1.2g por kg de peso corporal diario (para garantizar el soporte hormonal adecuado).\n3. Carbohidratos: El resto de tus calorías hasta alcanzar tu superávit de volumen, priorizando fuentes complejas como arroz, avena, patata y legumbres."
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
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[250px] h-[250px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-50/80 text-green-700 text-xs font-black uppercase tracking-wider border border-green-200/60 shadow-sm">
            <span>🥗 Nutrición Avanzada</span>
            <span>•</span>
            <span>Estilo de Vida y Biomecánica Nutricional</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Dietas y Planificación <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Nutricional de Precisión
            </span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-medium">
            El entrenamiento estimula el músculo, pero la nutrición estructurada es el bloque constructor de tu físico. Domina tu balance energético, optimiza la asimilación de tus comidas y alcanza tus objetivos de hipertrofia o definición con herramientas basadas en ensayos clínicos de nutrición deportiva.
          </p>
        </div>
      </header>

      {/* 🛠️ TARJETAS DE CALCULADORAS (Mantenidas arriba del todo como pidió el usuario) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full blur-2xl group-hover:bg-green-500/10 transition-colors pointer-events-none" />
          <div>
            <div className="h-44 w-full rounded-2xl bg-gradient-to-br from-green-500/5 to-emerald-500/10 flex items-center justify-center mb-6 border border-green-500/10">
              <span className="text-5xl transform group-hover:scale-110 transition-transform duration-300">🥑</span>
            </div>
            <span className="text-xs font-black text-green-500 uppercase tracking-widest">Herramienta Metabólica</span>
            <h2 className="text-2xl font-black text-[#111827] mt-2 mb-3">
              Calculadora de Calorías (TDEE)
            </h2>
            <p className="text-base text-gray-600 leading-relaxed font-medium">
              Calcula tu Metabolismo Basal (TMB) y tu Gasto Energético Total Diario (GETD) cruzando tu factor de actividad física, edad y peso para determinar tu superávit o déficit.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400">Algoritmo Katch-McArdle</span>
            <Link
              href="/dietas/calculadora-calorias"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-sm"
            >
              Calcular mis calorías →
            </Link>
          </div>
        </article>

        <article className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors pointer-events-none" />
          <div>
            <div className="h-44 w-full rounded-2xl bg-gradient-to-br from-blue-500/5 to-indigo-500/10 flex items-center justify-center mb-6 border border-blue-500/10">
              <span className="text-5xl transform group-hover:scale-110 transition-transform duration-300">🥩</span>
            </div>
            <span className="text-xs font-black text-blue-500 uppercase tracking-widest">Balance de Nitrógeno</span>
            <h2 className="text-2xl font-black text-[#111827] mt-2 mb-3">
              Calculadora de Proteínas
            </h2>
            <p className="text-base text-gray-600 leading-relaxed font-medium">
              Determina los gramos de proteína exactos que necesita tu musculatura según tu porcentaje de grasa y tu volumen de entrenamiento semanal para inhibir la proteólisis.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400">Optimizado para Atletas</span>
            <Link
              href="/dietas/calculadora-proteinas"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gray-900 hover:bg-slate-800 text-white font-bold text-sm transition-all border border-slate-200"
            >
              Calcular mis proteínas →
            </Link>
          </div>
        </article>
      </section>

      {/* 🚀 CATÁLOGO DE DIETAS CON MEJOR DISEÑO (Elevado al 200%) */}
      <section className="space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest">Enfoques Biológicos</span>
          <h2 className="text-3xl font-black text-[#111827] tracking-tight mt-1">
            Planes Nutricionales Populares
          </h2>
          <p className="mt-2 text-slate-500 text-sm sm:text-base leading-relaxed">
            Explora las dietas deportivas con base clínica. Cada protocolo incluye listas de alimentos estratégicos, explicaciones de adaptaciones metabólicas e indicaciones precisas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              id: "volumen-limpio",
              title: "Volumen Limpio",
              desc: "Superávit calórico controlado (+250 a +500 kcal) y alta densidad en carbohidratos complejos para propiciar el entorno anabólico óptimo acumulando el mínimo de tejido adiposo.",
              img: "/images/dietas/volumen-limpio.png",
              badge: "🟢 Ganancia Muscular",
              subBadge: "🔵 Hipertrofia",
              color: "hover:ring-orange-500/30",
            },
            {
              id: "definicion-estricta",
              title: "Definición Estricta",
              desc: "Déficit energético progresivo con ingesta proteica maximizada para mitigar la degradación muscular y potenciar la beta-oxidación de ácidos grasos como combustible primario.",
              img: "/images/dietas/definicion.png",
              badge: "🔴 Pérdida de Grasa",
              subBadge: "🔵 Estética",
              color: "hover:ring-red-500/30",
            },
            {
              id: "keto",
              title: "Dieta Cetogénica (Keto)",
              desc: "Restricción severa de glúcidos (<50g netos) para inducir la cetosis hepática. Excelente para mejorar la sensibilidad a la insulina celular y estabilizar la energía diaria.",
              img: "/images/dietas/keto.png",
              badge: "🔴 Pérdida de Grasa",
              subBadge: "🟡 Cetosis",
              color: "hover:ring-yellow-500/30",
            },
            {
              id: "mediterranea",
              title: "Dieta Mediterránea",
              desc: "Aporte elevado de lípidos monoinsaturados (aceite de oliva virgen extra), antioxidantes de verduras frescas y pescados ricos en Omega 3. Máxima salud cardiovascular y longevidad.",
              img: "/images/dietas/mediterranea.png",
              badge: "🟢 Salud General",
              subBadge: "🔵 Mantenimiento",
              color: "hover:ring-emerald-500/30",
            },
            {
              id: "ayuno-intermitente",
              title: "Ayuno Intermitente (16/8)",
              desc: "Protocolo de restricción temporal de comidas. Facilita la adherencia al déficit calórico mediante ventanas de alimentación de 8 horas, optimizando la autofagia celular.",
              img: "/images/dietas/ayuno.png",
              badge: "🔴 Pérdida de Grasa",
              subBadge: "🟣 Estilo de Vida",
              color: "hover:ring-purple-500/30",
            },
          ].map((dieta) => (
            <article
              key={dieta.id}
              className={`group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-transparent transition-all duration-300 flex flex-col hover:-translate-y-1.5 ring-2 ring-transparent ${dieta.color}`}
            >
              <div className="h-52 relative overflow-hidden bg-slate-900">
                <img
                  src={dieta.img}
                  alt={dieta.title}
                  className="w-full h-full object-cover opacity-75 group-hover:scale-105 group-hover:opacity-85 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex gap-1.5 z-10">
                  <span className="px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider bg-white/90 text-slate-800 shadow-sm backdrop-blur-md">
                    {dieta.badge}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider bg-slate-900/80 text-white shadow-sm border border-slate-700 backdrop-blur-md">
                    {dieta.subBadge}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 space-y-4">
                <h3 className="text-xl font-black text-[#111827] group-hover:text-[#2563EB] transition-colors leading-tight">
                  {dieta.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1 font-medium">
                  {dieta.desc}
                </p>
                <Link
                  href={`/dietas/${dieta.id}`}
                  className="w-full py-3 rounded-xl bg-slate-50 group-hover:bg-[#2563EB] text-slate-700 group-hover:text-white text-sm font-bold text-center transition-all border border-slate-200 group-hover:border-transparent flex items-center justify-center space-x-1"
                >
                  <span>Ver Plan Completo</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 🔬 NUEVAS SECCIONES INNOVADORAS INYECTADAS DE ALTÍSIMA DENSIDAD DE PALABRAS CLAVE (SEO al 200%) */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-8 relative overflow-hidden">
        {/* Decorativo de fondo */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Fundamentos Biológicos de la Recomposición Corporal y la Nutrición Deportiva
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-medium">
            Entender la física y la bioquímica de la <strong>planificación nutricional</strong> es indispensable para progresar en tu condición física de forma duradera. Todo se rige por el primer principio de la termodinámica: las calorías ingeridas frente a las gastadas determinan tu masa corporal global, mientras que el ratio de <strong>macronutrientes (proteínas de alto valor biológico, carbohidratos de asimilación lenta y grasas saludables)</strong> y el estímulo del entrenamiento determinan la calidad de esa masa corporal (masa magra muscular frente a tejido adiposo).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-800">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-green-400 flex items-center space-x-2">
              <span className="text-xl">🥩</span>
              <span>Anabolismo y Síntesis de Proteínas</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Consumir suficientes <strong>proteínas de alto valor biológico</strong> proporciona los aminoácidos esenciales (particularmente leucina, isoleucina y valina) necesarios para encender el ribosoma celular a través de la vía mTOR. Esto no solo promueve la ganancia de músculo esquelético, sino que actúa como una salvaguarda anticatabólica crucial cuando nos encontramos en un estado de déficit calórico exigente.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-blue-400 flex items-center space-x-2">
              <span className="text-xl">⚡</span>
              <span>Carbohidratos y Glucógeno Muscular</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Los carbohidratos no son tus enemigos. Se almacenan en el músculo en forma de glucógeno y retienen agua intracelular. Esto expande la célula muscular, dándole un aspecto visual denso e hidratado, y proporciona la energía rápida (vía fosfágenos y glucolítica) necesaria para mover cargas pesadas y entrenar con la intensidad óptima requerida para inducir tensión mecánica.
            </p>
          </div>
        </div>
      </section>

      {/* ❓ ACORDEÓN DE EXPERTOS EN NUTRICIÓN (SEO FAQ Boost) */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest">Preguntas Científicas</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
            Respuestas de Expertos en Fisiología Nutricional
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
