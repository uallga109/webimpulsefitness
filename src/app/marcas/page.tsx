import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marcas Fitness y Equipamiento de Fuerza de Élite | Impulse Fitness",
  description:
    "Directorio de los mejores fabricantes de equipamiento pesado, biomecánica cardiovascular, suplementos deportivos certificados y accesorios de gimnasio.",
  keywords: [
    "marcas fitness elite",
    "fabricantes barras halterofilia iwf ipf",
    "suplementos materia prima patentada",
    "maquinaria biomecanica technogym",
    "accesorios powerlifting sbd",
    "ropa seamless gymshark precio",
    "barras olimpicas eleiko comprar",
    "hsnsports sellos de calidad",
  ],
};

export default function MarcasPage() {
  const faqs = [
    {
      question: "¿Por qué el equipamiento pesado certificado por IPF o IWF (como Eleiko) is tan costoso?",
      answer: "Las barras y discos certificados por la Federación Internacional de Powerlifting (IPF) y la Federación Internacional de Halterofilia (IWF) se fabrican con aleaciones de acero de ultra alta resistencia (a menudo superando los 215,000 PSI de resistencia a la tracción). Cada unidad se calibra manualmente con una tolerancia al peso extremadamente estricta (+/- 10 gramos para barras de 20kg), lo que garantiza precisión absoluta en competiciones internacionales. Además, se someten a pruebas electromagnéticas de grietas para garantizar que nunca se fracturarán bajo cargas pesadas."
    },
    {
      question: "¿Qué significan patentes como Creapure®, Lacprodan® o CFM en marcas de suplementación?",
      answer: "Estas patentes representan materias primas que certifican la máxima pureza y control clínico:\n1. Creapure®: Creatina monohidrato de fabricación alemana con un 99.9% de pureza, totalmente libre de subproductos tóxicos como la dicianodiamida.\n2. Lacprodan®: Proteína de suero desarrollada por Arla Foods, que garantiza un perfil intacto de beta-lactoglobulinas y nula desnaturalización.\n3. CFM (Microfiltración de Flujo Cruzado): Un método físico de separación por membrana fría que elimina grasas y lactosa sin dañar la estructura molecular original de la proteína."
    },
    {
      question: "¿Cuáles son las ventajas reales de la indumentaria técnica sin costuras (Seamless)?",
      answer: "La ropa seamless se teje de forma circular tridimensional continua en máquinas de alta tecnología, eliminando las costuras cosidas tradicionales en las zonas críticas de flexión. Esto aporta múltiples ventajas biomecánicas al deportista: previene rozaduras dolorosas en la piel durante entrenamientos con alta fricción y sudoración, ofrece una elasticidad uniforme multidireccional que no restringe el movimiento y mejora notablemente el ajuste anatómico y la transpirabilidad."
    },
    {
      question: "¿Cómo evaluar si una máquina de poleas o guiada cuenta con un buen diseño biomecánico?",
      answer: "Una excelente marca de maquinaria (como Technogym) destaca por:\n1. Perfil de resistencia ajustable mediante poleas excéntricas (levas) adaptadas al perfil de fuerza humana (donde el ejercicio es más duro en el punto biomecánico de máxima ventaja física).\n2. Alineación precisa del eje de rotación de la articulación del usuario con el pivote de la máquina.\n3. Recorridos convergentes y divergentes que respetan el movimiento natural del miembro esquelético."
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
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[250px] h-[250px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50/80 text-amber-700 text-xs font-black uppercase tracking-wider border border-amber-200/60 shadow-sm">
            <span>🏷️ Fabricantes Oficiales</span>
            <span>•</span>
            <span>Estándares de Calidad e Ingeniería Deportiva</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Marcas Deportivas y <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              Equipamiento de Élite
            </span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-medium">
            Filtramos el mercado para traerte únicamente los fabricantes líderes en equipamiento pesado de fuerza, maquinaria cardiovascular con biomecánica de precisión, ropa técnica ergonómica y marcas de suplementación con sellos de pureza garantizados.
          </p>
        </div>
      </header>

      {/* 🏷️ GRID DE MARCAS (Mantenida arriba) */}
      <section className="space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest">Catálogo Premium</span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">Directorio de Fabricantes</h2>
          <p className="mt-2 text-slate-500 text-sm sm:text-base leading-relaxed">
            Navega por las firmas más respetadas del sector fitness. Diseñadas bajo estándares olímpicos y certificaciones de laboratorios independientes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Eleiko Sport",
              cat: "Equipamiento Pesado",
              catClass: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
              desc: "Barras de alta tracción y discos calibrados a la micra con certificación oficial IWF e IPF. El estándar de oro absoluto en halterofilia y powerlifting profesional.",
              ringColor: "hover:ring-blue-500/30",
              href: "/marcas/eleiko-sport",
            },
            {
              name: "Rogue Fitness",
              cat: "CrossFit & Fuerza",
              catClass: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
              desc: "Estructuras modulares (racks y rigs), trineos de arrastre y balones medicinales indestructibles. Proveedor oficial de los CrossFit Games.",
              ringColor: "hover:ring-purple-500/30",
              href: "/marcas/rogue-fitness",
            },
            {
              name: "HSN Labs",
              cat: "Nutrición Deportiva",
              catClass: "bg-green-500/10 text-green-400 border border-green-500/20",
              desc: "Suplementos dietéticos de fabricación directa en laboratorios españoles con sellos IFS Food. Uso estricto de Creapure®, CFM y Lacprodan®.",
              ringColor: "hover:ring-green-500/30",
              href: "/marcas/hsn-labs",
            },
            {
              name: "Technogym",
              cat: "Cardio & Biomecánica",
              catClass: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
              desc: "Maquinaria cardiovascular y de carga guiada italiana con levas de resistencia ergonómicas e integración digital. La elección de gimnasios de lujo.",
              ringColor: "hover:ring-amber-500/30",
              href: "/marcas/technogym",
            },
            {
              name: "SBD Apparel",
              cat: "Protección & Soportes",
              catClass: "bg-red-500/10 text-red-400 border border-red-500/20",
              desc: "Rodilleras de neopreno de alta compresión, coderas, vendas y cinturones de palanca homologados para el powerlifting de la IPF.",
              ringColor: "hover:ring-red-500/30",
              href: "/marcas/sbd-apparel",
            },
            {
              name: "Gymshark",
              cat: "Indumentaria",
              catClass: "bg-slate-500/10 text-slate-400 border border-slate-500/20",
              desc: "Prendas de compresión y camisetas técnicas confeccionadas mediante tecnología Seamless. Absorción rápida del sudor y realce estético del físico.",
              ringColor: "hover:ring-slate-500/30",
              href: "/marcas/gymshark",
            },
          ].map((brand, idx) => (
            <article
              key={idx}
              className={`group bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:shadow-2xl hover:border-transparent transition-all duration-300 hover:-translate-y-1.5 ring-2 ring-transparent ${brand.ringColor}`}
            >
              <div>
                <span className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider ${brand.catClass}`}>
                  {brand.cat}
                </span>
                <h3 className="text-2xl font-black text-[#111827] mt-4 group-hover:text-[#2563EB] transition-colors leading-tight">
                  {brand.name}
                </h3>
                <p className="mt-3 text-slate-500 text-sm leading-relaxed font-medium">
                  {brand.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-bold">Distribuidor Oficial Autorizado</span>
                <Link href={brand.href} className="text-xs font-black text-[#2563EB] group-hover:underline">
                  Ver catálogo completo →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 🔬 NUEVAS SECCIONES INNOVADORAS INYECTADAS DE ALTÍSIMA DENSIDAD DE PALABRAS CLAVE (SEO al 200%) */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-8 relative overflow-hidden">
        {/* Decorativo de fondo */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            La importancia de la Biomecánica del Equipamiento y Calidad de Suplementos
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-medium">
            Entrenar en un entorno deportivo de alto rendimiento requiere herramientas que garanticen tu seguridad y el estímulo fisiológico de tus músculos. La diferencia entre una máquina barata y una de <strong>ingeniería biomecánica certificada</strong> radica en el vector de movimiento: las marcas de élite estudian las curvas de fuerza humana para que la polea se adapte a tu eje articular exacto, evitando la sobrecarga lesiva en tendones y concentrando la tensión en las fibras del músculo diana. Asimismo, al elegir marcas de nutrición, exigir materias primas con <strong>patentes farmacéuticas</strong> certifica que estás consumiendo principios activos sin metales pesados ni dopantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-800 text-sm">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-amber-400 flex items-center space-x-2">
              <span className="text-xl">🔩</span>
              <span>Acero Calibrado e Ingeniería Olímpica</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Las barras y discos profesionales se someten a estrictos tratamientos térmicos para asegurar flexión controlada bajo pesos extremos sin deformarse. Esto es crítico en levantamientos como sentadillas pesadas o tirones olímpicos, donde la barra debe retornar elásticamente a su forma recta de manera segura.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-green-400 flex items-center space-x-2">
              <span className="text-xl">🔬</span>
              <span>Laboratorios Acreditados IFS & GMP</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Exigir que las marcas de suplementación fabriquen en laboratorios con certificaciones internacionales GMP (Good Manufacturing Practices) e IFS Food blinda tu salud frente a contaminantes orgánicos e inorgánicos, garantizando que el aminograma listado en la etiqueta es 100% verídico.
            </p>
          </div>
        </div>
      </section>

      {/* ❓ ACORDEÓN DE EXPERTOS EN MARCAS Y BIOMECÁNICA (SEO FAQ Boost) */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest">Preguntas Científicas</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
            Respuestas de Expertos en Equipamiento e Ingeniería Deportiva
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
