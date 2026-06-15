import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Suplementos Deportivos con Evidencia Científica | Guía de Nutrición de Élite",
  description:
    "Análisis clínico riguroso de suplementos con grado de evidencia A y B del Instituto Australiano del Deporte. Creatina, proteína de suero, cafeína, pre-entrenos y adaptógenos.",
};

export default function SuplementosPage() {
  const categories = [
    {
      title: "Ayudas Ergogénicas de Grado A (Máxima Evidencia Científica)",
      description: "Suplementos que cuentan con el respaldo de cientos de ensayos clínicos controlados, aleatorizados y revisiones sistemáticas de la ISSN y el AIS. Su eficacia ergogénica y perfil de seguridad están firmemente probados en atletas de élite y recreativos.",
      grade: "Grado A",
      items: [
        {
          id: "creatina",
          name: "Creatina Monohidrato",
          ev: "Evidencia Grado A",
          evClass: "bg-green-500/10 text-green-400 border border-green-500/20",
          ringClass: "hover:ring-green-500/30",
          glowClass: "from-green-500/5 to-transparent",
          desc: "El compuesto bioactivo más potente para incrementar las reservas de fosfocreatina intracelular, maximizando la fuerza explosiva y el volumen celular libre de grasa.",
          image: "/images/suplementos/creatina.png",
          href: "/suplementos/creatina",
          targets: ["Regeneración de ATP", "Volumen Celular", "Fuerza Máxima (1RM)"],
          dose: "0.08 - 0.1g/kg al día",
          timing: "Consistencia diaria (Saturación acumulada)",
        },
        {
          id: "whey",
          name: "Proteína de Suero (Whey)",
          ev: "Evidencia Grado A",
          evClass: "bg-green-500/10 text-green-400 border border-green-500/20",
          ringClass: "hover:ring-green-500/30",
          glowClass: "from-green-500/5 to-transparent",
          desc: "Fuente proteica de valor biológico inigualable. Aporta un perfil completo de aminoácidos esenciales con máxima biodisponibilidad y asimilación para activar la vía anabólica mTORC1.",
          image: "/images/suplementos/whey.png",
          href: "/suplementos/whey",
          targets: ["Síntesis Proteica", "Umbral de Leucina", "Recuperación Miofibrilar"],
          dose: "25 - 40g por toma (~3g Leucina)",
          timing: "Post-entrenamiento o periodos de ayuno",
        },
        {
          id: "cafeina",
          name: "Cafeína Anhidra",
          ev: "Evidencia Grado A",
          evClass: "bg-green-500/10 text-green-400 border border-green-500/20",
          ringClass: "hover:ring-green-500/30",
          glowClass: "from-green-500/5 to-transparent",
          desc: "Potente estimulante del SNC que actúa bloqueando competitivamente los receptores de adenosina, reduciendo el esfuerzo percibido y mejorando el reclutamiento de unidades motoras.",
          image: "/images/suplementos/cafeina.png",
          href: "/suplementos/cafeina",
          targets: ["Bloqueo de Adenosina", "Liberación de Calcio", "Movilización de Grasas (Lipólisis)"],
          dose: "3 - 6 mg/kg de peso corporal",
          timing: "45 - 60 min Pre-Entrenamiento",
        },
        {
          id: "beta-alanina",
          name: "Beta-Alanina",
          ev: "Evidencia Grado A",
          evClass: "bg-green-500/10 text-green-400 border border-green-500/20",
          ringClass: "hover:ring-green-500/30",
          glowClass: "from-green-500/5 to-transparent",
          desc: "Precursor limitante de la carnosina muscular. Actúa como el tampón intracelular definitivo contra el ácido láctico (H+), posponiendo la fatiga en esfuerzos intensos de 1 a 4 minutos.",
          image: "/images/suplementos/beta-alanina.png",
          href: "/suplementos/beta-alanina",
          targets: ["Síntesis de Carnosina", "Tampón contra la Acidosis", "Retraso del Fallo Muscular"],
          dose: "3.2 - 6.4g diarios (Toma crónica)",
          timing: "Dividida en tomas (evita parestesia)",
        },
        {
          id: "omega3",
          name: "Omega 3 (EPA y DHA)",
          ev: "Evidencia Grado A",
          evClass: "bg-green-500/10 text-green-400 border border-green-500/20",
          ringClass: "hover:ring-green-500/30",
          glowClass: "from-green-500/5 to-transparent",
          desc: "Ácidos grasos poliinsaturados indispensables de cadena larga. Modulan de forma potente las cascadas antiinflamatorias corporales y mejoran la fluidez y comunicación de las membranas celulares.",
          image: "/images/suplementos/omega3.png",
          href: "/suplementos/omega3",
          targets: ["Resolución Inflamatoria", "Fluidez de Membrana", "Salud Endotelial"],
          dose: "1.5 - 3g netos (Suma de EPA+DHA)",
          timing: "Junto a comidas con otras grasas",
        },
        {
          id: "vitaminad3",
          name: "Vitamina D3",
          ev: "Evidencia Grado A",
          evClass: "bg-green-500/10 text-green-400 border border-green-500/20",
          ringClass: "hover:ring-green-500/30",
          glowClass: "from-green-500/5 to-transparent",
          desc: "Una auténtica hormona secosteroide que interactúa con el receptor VDR en múltiples tejidos. Clave para regular los niveles de testosterona libre, la densidad mineral ósea y la respuesta inmune.",
          image: "/images/suplementos/vitaminad3.png",
          href: "/suplementos/vitaminad3",
          targets: ["Soporte Hormonal y Testosterona", "Función Inmunitaria", "Absorción de Calcio"],
          dose: "2000 - 5000 UI diarias",
          timing: "Junto con grasas saludables",
        },
      ],
    },
    {
      title: "Optimizadores de Rendimiento y Adaptógenos (Grado B)",
      description: "Suplementos que demuestran efectos fisiológicos sumamente interesantes en ensayos emergentes de primer nivel. Aunque el cuerpo de evidencia general es algo más joven que el del Grado A, su adición al protocolo deportivo ofrece ventajas biomecánicas y de gestión del estrés demostradas.",
      grade: "Grado B",
      items: [
        {
          id: "citrulina",
          name: "Citrulina Malato",
          ev: "Evidencia Grado B",
          evClass: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
          ringClass: "hover:ring-blue-500/30",
          glowClass: "from-blue-500/5 to-transparent",
          desc: "Precursor natural de L-arginina que potencia la síntesis endotelial de Óxido Nítrico (NO). Mejora la vasodilatación, el aclaramiento del amoníaco y la resíntesis energética por el malato de Krebs.",
          image: "/images/suplementos/citrulina.png",
          href: "/suplementos/citrulina",
          targets: ["Bombeo y Óxido Nítrico", "Aclaramiento de Lactato", "Oxigenación Muscular"],
          dose: "6 - 8g de Citrulina Malato 2:1",
          timing: "60 min Pre-Entrenamiento",
        },
        {
          id: "ashwagandha",
          name: "Ashwagandha (KSM-66)",
          ev: "Evidencia Grado B",
          evClass: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
          ringClass: "hover:ring-blue-500/30",
          glowClass: "from-blue-500/5 to-transparent",
          desc: "Hierba adaptógena de referencia para regular el eje HPA (hipotálamo-hipofisario-adrenal). Reduce significativamente el cortisol plasmático crónico y modula el sistema de neurotransmisores GABA.",
          image: "/images/suplementos/ashwagandha.png",
          href: "/suplementos/ashwagandha",
          targets: ["Reducción de Cortisol", "Adaptógeno del Eje HPA", "Foco y Serenidad"],
          dose: "600mg de extracto estandarizado (KSM-66)",
          timing: "Con el desayuno o antes de dormir",
        },
        {
          id: "eaas",
          name: "Aminoácidos Esenciales (EAAs)",
          ev: "Evidencia Grado B",
          evClass: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
          ringClass: "hover:ring-blue-500/30",
          glowClass: "from-blue-500/5 to-transparent",
          desc: "Los 9 aminoácidos constitutivos que el cuerpo humano no es capaz de fabricar. Perfectos para mantener un balance de nitrógeno neto positivo en entrenamientos de alto volumen o en ayuno.",
          image: "/images/suplementos/eaas.png",
          href: "/suplementos/eaas",
          targets: ["Prevención de la Proteólisis", "Balance de Nitrógeno", "Entrenamiento en Ayunas"],
          dose: "10 - 15g netos de aminoácidos",
          timing: "Intra-entrenamiento o pre-entrenamiento",
        },
      ],
    },
    {
      title: "Recuperación Nocturna y Optimización del Sueño",
      description: "Compuestos diseñados para facilitar la transición hacia el sueño profundo e inhibir la hiperactividad neuromuscular. La suplementación nocturna inteligente es un pilar fundamental para potenciar el anabolismo y recuperar el Sistema Nervioso Central (SNC) tras cargas exigentes.",
      grade: "Recuperación",
      items: [
        {
          id: "recuperacion",
          name: "Melatonina & Magnesio",
          ev: "Salud y Recuperación",
          evClass: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
          ringClass: "hover:ring-purple-500/30",
          glowClass: "from-purple-500/5 to-transparent",
          desc: "Sinergia reparadora del sistema nervioso central. La melatonina regula los ritmos circadianos del sueño y el magnesio bisglicinato actúa regulando la excitabilidad neuromuscular vía receptores NMDA.",
          image: "/images/suplementos/recuperacion.png",
          href: "/suplementos/recuperacion",
          targets: ["Inducción del Sueño Profundo", "Antagonismo NMDA", "Relajación Muscular"],
          dose: "1.9mg Melatonina + 300mg Magnesio Bisglicinato",
          timing: "30 - 45 min antes de acostarse",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col space-y-12 animate-fadeIn mb-16">
      {/* 🚀 HERO SECTION PREMIUM Y EXTRA GRANDE CON ESTÉTICA CLARA Y GLOWS */}
      <header className="relative w-full rounded-3xl overflow-hidden shadow-lg bg-white border border-slate-200/80 p-8 sm:p-12 md:p-16 flex flex-col justify-center min-h-[350px]">
        {/* Glows decorativos de fondo de diseño premium muy sutiles */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50/80 text-[#2563EB] text-xs font-black uppercase tracking-wider border border-blue-200/60 shadow-sm">
            <span>🔬 Nutrición Deportiva</span>
            <span>•</span>
            <span>Ayudas Ergogénicas de Precisión</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Guía de Suplementación <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Basada en Evidencia Científica
            </span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-medium">
            Filtramos el marketing engañoso de la industria del fitness. Accede de forma gratuita al análisis fisiológico más riguroso y detallado de las sustancias con mayor respaldo clínico e investigación independiente del planeta. 
          </p>
        </div>
      </header>

      {/* 🛡️ SECCIÓN DE E-E-A-T CLAVE PARA EL SEO DE GOOGLE (Muestra autoridad de la web) */}
      <section className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#2563EB] to-indigo-600" />
        <div className="max-w-4xl space-y-4">
          <h2 className="text-2xl font-black text-[#111827] flex items-center space-x-2">
            <span className="text-2xl">📋</span>
            <span>¿Cómo clasificamos las sustancias y suplementos?</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            Nuestros análisis técnicos respetan rigurosamente las clasificaciones de organismos científicos líderes mundiales, como la <strong>Sociedad Internacional de Nutrición Deportiva (ISSN)</strong> y el <strong>Instituto Australiano del Deporte (AIS)</strong>. Desglosamos cada suplemento bajo protocolos doble ciego para garantizar que la inversión en tu suplementación deportiva maximice tu fuerza, hipertrofia y rendimiento sin riesgos de toxicidad o desequilibrios biológicos.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
              <span className="text-xs font-black text-green-500 uppercase tracking-widest mb-1">Grado A</span>
              <p className="text-sm font-bold text-slate-800 mb-2">Máximo Respaldo Clínico</p>
              <p className="text-xs text-slate-500 leading-relaxed">Efecto ergogénico directo y seguro demostrado en múltiples ensayos controlados y metaanálisis robustos.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
              <span className="text-xs font-black text-blue-500 uppercase tracking-widest mb-1">Grado B</span>
              <p className="text-sm font-bold text-slate-800 mb-2">Evidencia Científica Emergente</p>
              <p className="text-xs text-slate-500 leading-relaxed">Sustancias con resultados fisiológicos muy prometedores que justifican plenamente su uso inteligente en atletas.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
              <span className="text-xs font-black text-purple-500 uppercase tracking-widest mb-1">Recuperación</span>
              <p className="text-sm font-bold text-slate-800 mb-2">Salud y Crononutrición</p>
              <p className="text-xs text-slate-500 leading-relaxed">Fórmula orientada a mejorar la calidad del sueño, balance del SNC y optimizar las hormonas anabólicas basales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 LISTADO POR CATEGORÍAS Y CADA TARJETA CON EXCELENTE DISEÑO Y SEO */}
      {categories.map((cat, catIdx) => (
        <section key={catIdx} className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <div className="inline-flex items-center space-x-2 text-xs font-black text-[#2563EB] uppercase tracking-widest mb-2">
              <span>{cat.grade}</span>
              <span>•</span>
              <span>Evidencia Fisiológica</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{cat.title}</h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-4xl leading-relaxed">{cat.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cat.items.map((sup) => (
              <article
                key={sup.id}
                className={`group bg-white rounded-3xl border border-slate-200/90 overflow-hidden hover:shadow-2xl hover:border-transparent transition-all duration-300 flex flex-col hover:-translate-y-1.5 ring-2 ring-transparent ${sup.ringClass}`}
              >
                {/* Imagen del suplemento con efecto hover zoom */}
                <div className="h-52 relative overflow-hidden bg-slate-900">
                  <img
                    src={sup.image}
                    alt={sup.name}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
                  />
                  {/* Gradiente sutil decorativo en la imagen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Badge de Evidencia flotando arriba izquierda */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider backdrop-blur-md ${sup.evClass}`}>
                      {sup.ev}
                    </span>
                  </div>
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="p-6 flex flex-col flex-1 space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-[#111827] group-hover:text-[#2563EB] transition-colors leading-tight">
                      {sup.name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 font-medium">
                      {sup.desc}
                    </p>
                  </div>

                  {/* Bullet points de mecanismos metabólicos/fisiológicos (SEO Boost) */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Objetivos Principales</p>
                    <div className="flex flex-wrap gap-1.5">
                      {sup.targets.map((tgt, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-100 text-slate-600 text-xs font-bold"
                        >
                          {tgt}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Datos clínicos breves y útiles */}
                  <div className="grid grid-cols-2 gap-4 pt-2 text-xs border-t border-slate-50">
                    <div>
                      <p className="font-bold text-slate-400 uppercase tracking-widest text-[9px]">Dosis Recomendada</p>
                      <p className="font-black text-slate-700 mt-0.5">{sup.dose}</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-400 uppercase tracking-widest text-[9px]">Momento Óptimo</p>
                      <p className="font-black text-slate-700 mt-0.5">{sup.timing}</p>
                    </div>
                  </div>

                  {/* Enlace dinámico con hover */}
                  <Link
                    href={sup.href}
                    className="w-full mt-auto py-3.5 rounded-2xl bg-slate-50 group-hover:bg-[#2563EB] text-slate-700 group-hover:text-white text-sm font-bold text-center transition-all border border-slate-200 group-hover:border-transparent flex items-center justify-center space-x-2 group-hover:shadow-md"
                  >
                    <span>Analizar Evidencia Científica</span>
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      {/* 🔬 FOOTER DE SEO DENSE: INFORMACIÓN ADICIONAL PARA CAPTAR PALABRAS CLAVE */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-6">
        <h3 className="text-xl sm:text-2xl font-black text-white">
          La importancia de la Suplementación Deportiva fundamentada clínicamente
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base text-slate-400 leading-relaxed">
          <p>
            En la actualidad, la oferta comercial de <strong>nutrición deportiva y suplementación para culturismo</strong> o deportes cardiovasculares está saturada de promesas milagrosas. Sin embargo, estudios metabólicos profundos demuestran que más del 90% de los suplementos que prometen un rápido incremento de masa magra o la quema de lípidos de forma milagrosa no superan los controles farmacológicos básicos. Por ello, en <strong>Impulse Fitness</strong> nos enfocamos exclusivamente en aislar las sustancias que han aprobado rigurosos controles independientes.
          </p>
          <p>
            Alimentos y compuestos concentrados como la <strong>creatina monohidrato de calidad Creapure</strong>, los perfiles completos de <strong>aminoácidos esenciales (EAAs)</strong>, o el aporte estratégico de la <strong>proteína whey en fases post-entrenamiento</strong> forman la piedra angular de cualquier planificación nutricional de éxito. Recuerda que un suplemento debe actuar como complemento y optimizador, asentando su efectividad sobre una dieta hiperproteica perfectamente balanceada y un entrenamiento de fuerza programado con sobrecarga progresiva.
          </p>
        </div>
      </section>
    </div>
  );
}
