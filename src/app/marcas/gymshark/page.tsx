import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gymshark | Ropa Técnica Seamless y Athleisure de Élite",
  description:
    "Descubre la historia, tecnología seamless y catálogo oficial de Gymshark en España. Camisetas de compresión, mallas Vital Seamless y diseño estético ergonómico.",
};

export default function GymsharkPage() {
  const faqs = [
    {
      question: "¿Qué es la tecnología Seamless (Sin Costuras) de Gymshark y cómo beneficia al atleta?",
      answer: "La tecnología Seamless consiste en un proceso de tejido tubular tridimensional continuo realizado mediante máquinas de tejer circulares programadas por ordenador. Al no tener costuras cosidas tradicionales en las zonas críticas de fricción, la prenda actúa como una auténtica 'segunda piel'. Esto previene por completo las molestas rozaduras durante entrenamientos intensos, proporciona una elasticidad multidireccional uniforme que no limita la flexión y permite tejer distintas densidades y patrones de transpirabilidad en una sola pieza de tela."
    },
    {
      question: "¿Cómo funciona el sombreado ergonómico o 'Contouring' de Gymshark?",
      answer: "El sombreado ergonómico (Contouring) se logra integrando patrones de punto Jacquard con diferentes tonalidades de color e hilos de compresión directamente durante la fase de tejido. Esta técnica actúa como un 'maquillaje corporal tridimensional'. En las colecciones femeninas (como Vital Seamless), realza visualmente la curvatura de los glúteos y estiliza la cintura. En las colecciones masculinas, acentúa la forma en 'V' del torso, ensanchando la percepción de los hombros y definiendo la musculatura del pectoral y los brazos."
    },
    {
      question: "¿De dónde surge el fenómeno cultural de los 'Gymshark Athletes'?",
      answer: "Gymshark fue pionera absoluta en el marketing de influencers en 2012, cuando su fundador Ben Francis comenzó a enviar muestras gratuitas de ropa a los primeros YouTubers de fitness (como Matt Ogus y Lex Griffin). En lugar de crear anuncios televisivos tradicionales, Gymshark formó una comunidad exclusiva de atletas embajadores que representaban el estilo de vida del gimnasio. Esto generó un sentido de pertenencia en la era de las redes sociales, consolidado con pop-up stores mundiales donde los fans hacían colas kilométricas para conocer a sus ídolos."
    }
  ];

  // Inyectar Esquemas JSON-LD duales (Organization/Brand + FAQPage)
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Brand",
        "@id": "https://impulsefitness.com/marcas/gymshark#brand",
        "name": "Gymshark",
        "logo": "https://impulsefitness.com/icon.png",
        "description": "El gigante de la moda fitness y athleisure pionero en la tecnología seamless circular en 3D y el marketing de influencers digitales.",
        "slogan": "Be a Visionary",
        "foundingDate": "2012",
        "foundingLocation": {
          "@type": "Place",
          "name": "Birmingham, Reino Unido"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://impulsefitness.com/marcas/gymshark#faq",
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
        <span className="text-slate-800">Gymshark</span>
      </nav>

      {/* 🚀 HERO SECTION PREMIUM - TEAL & CYAN */}
      <header className="relative w-full rounded-3xl overflow-hidden shadow-lg bg-white border border-slate-200/80 p-8 sm:p-12 md:p-16 flex flex-col justify-center min-h-[350px]">
        {/* Glows decorativos turquesas y cian elegantes */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-black uppercase tracking-wider border border-teal-200/60 shadow-sm">
            <span>🇬🇧 Innovación Athleisure Mundial</span>
            <span>•</span>
            <span>Estética y Comunidad Digital</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Gymshark <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              La Fusión del Estilo y la Ingeniería Textil
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-medium">
            Gymshark es el coloso mundial del athleisure moderno. Enfocado en cómo se ve y se siente el cuerpo del atleta, revolucionó la industria textil del deporte al transformar prendas funcionales en auténticas declaraciones de confianza y estilo de vida.
          </p>
        </div>
      </header>

      {/* 🇬🇧 ORIGEN E HISTORIA: DEL GARAJE ESCOLAR AL UNICORNIO */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        <article className="md:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-black text-teal-600 uppercase tracking-widest">Caso de Éxito Global</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              De Repartir Pizzas a Fundar un Unicornio Textil
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Fundada en Birmingham, Reino Unido, en 2012 por Ben Francis (quien entonces tenía 19 años y trabajaba repartiendo en Pizza Hut) y un grupo de amigos universitarios. En sus inicios, Ben cosía las camisetas y estampaba las serigrafías manualmente en el garaje de sus padres. La marca nació ante la frustración de no encontrar ropa de gimnasio adaptada a la juventud: el equipamiento tradicional era enorme y de corte cuadrado.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              El gran punto de inflexión ocurrió en la feria <strong>BodyPower 2013</strong>. Tras alquilar un stand con todos sus ahorros y presentar su chándal entallado *Luxe*, la web colapsó vendiendo en un solo día más que en toda su historia. En 2020, tras una inversión del fondo General Atlantic, la empresa alcanzó el estatus de **Unicornio** valorado en más de 1,300 millones de dólares.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-teal-500/5 border border-teal-500/10 flex items-center space-x-4">
            <span className="text-3xl">🦈</span>
            <span className="text-xs text-teal-800 font-bold leading-relaxed">
              Las prendas cosidas a mano en un garaje escolar de Birmingham definieron el ajuste atlético moderno.
            </span>
          </div>
        </article>

        <article className="md:col-span-5 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6 flex flex-col justify-between relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="space-y-4">
            <span className="text-xs font-black text-teal-400 uppercase tracking-widest">Ingeniería Estética</span>
            <h2 className="text-3xl font-black tracking-tight leading-tight">
              Tecnología Seamless Circular 3D
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              La innovación que marcó la diferencia en el mercado fue la adopción a gran escala de tejedurías tridimensionales sin costuras:
            </p>
            <ul className="space-y-3 pt-2 text-sm text-slate-300 font-medium">
              <li className="flex items-center space-x-2">
                <span className="text-teal-400">✔</span>
                <span><strong>Estructuras Seamless</strong>: Sin costuras que provoquen rozaduras.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-teal-400">✔</span>
                <span><strong>Zonificación Biomecánica</strong>: Mayor ventilación en puntos calientes.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-teal-400">✔</span>
                <span><strong>Compresión Gradual</strong>: Soporte que se adapta a las curvas reales.</span>
              </li>
            </ul>
          </div>
          <div className="pt-4 border-t border-slate-800 text-xs text-slate-500 font-bold">
            Tejido Circular Automatizado • Efecto Segunda Piel
          </div>
        </article>
      </section>

      {/* 🛠️ TECNOLOGÍA Y PRODUCTOS ESTRELLA */}
      <section className="space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-black text-teal-600 uppercase tracking-widest">Ingeniería Textil</span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">Gamas Destacadas y Tecnología Ergonómica</h2>
          <p className="mt-2 text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
            El éxito de la marca radica en la combinación de tejidos técnicos inteligentes y patrones estéticos de sombreado anatómico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between group hover:shadow-xl transition-all">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-teal-500/10 text-teal-700 rounded-xl">Vital Seamless 2.0</span>
              <h3 className="text-xl font-black text-slate-900 mt-2">Mallas de Alta Compresión</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                La gama icónica femenina de Gymshark. Confeccionada mediante tejido circular 3D, ofrece una cintura de compresión acanalada de gran agarre que no se desliza en sentadillas profundas. Incorpora sombreado bajo el glúteo para realzar las formas anatómicas de forma natural.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-400 font-bold">
              Squat-Proof • Sombreado Jacquard
            </div>
          </article>

          <article className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between group hover:shadow-xl transition-all">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-cyan-500/10 text-cyan-700 rounded-xl">Compresión y V-Taper</span>
              <h3 className="text-xl font-black text-slate-900 mt-2">Camisetas Técnicas Slim</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Camisetas diseñadas con elastano y poliamida de alta resistencia. El patrón de hombros y mangas está estratégicamente cortado de forma raglán para ampliar la silueta visual del deltoides y ceñir la parte inferior del torso, maximizando la estética del atleta en el espejo.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-400 font-bold">
              Evacuación del Sudor • Ajuste Raglán
            </div>
          </article>

          <article className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between group hover:shadow-xl transition-all">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-slate-900/10 text-slate-800 rounded-xl">Accesorios Estéticos</span>
              <h3 className="text-xl font-black text-slate-900 mt-2">Mochilas y Correas</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Equipamiento de apoyo que incluye las famosas mochilas de almacenamiento modular de gran capacidad para el gimnasio, straps antideslizantes para levantamiento de peso muerto y bandas elásticas de tela tejida de diferentes intensidades para activación de glúteo.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-400 font-bold">
              Material Técnico Auxiliar de Fuerza
            </div>
          </article>
        </div>
      </section>

      {/* 📊 TABLA DE COMPARATIVA DE TEJIDOS */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <h3 className="text-2xl font-black text-slate-900">Guía de Materiales y Funcionalidad Biomecánica</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-600">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 font-bold">
              <tr>
                <th className="px-6 py-4 rounded-l-2xl">Colección / Prenda</th>
                <th className="px-6 py-4">Composición Principal</th>
                <th className="px-6 py-4">Índice de Compresión / Ajuste</th>
                <th className="px-6 py-4 rounded-r-2xl">Uso Recomendado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              <tr>
                <td className="px-6 py-4 font-black text-slate-900">Vital Seamless 2.0</td>
                <td className="px-6 py-4 text-teal-600">Nylon, Poliéster y Elastano 3D</td>
                <td className="px-6 py-4">Alto / Ajuste Segunda Piel</td>
                <td className="px-6 py-4">Entrenamiento funcional de fuerza y piernas pesadas</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-black text-slate-900">Arrival / Camisetas Técnicas</td>
                <td className="px-6 py-4 text-cyan-600">Poliéster Reciclado e Hilos de Secado Rápido</td>
                <td className="px-6 py-4">Medio / Corte Ajustado Ergonómico</td>
                <td className="px-6 py-4">Entrenamientos de hipertrofia o sesiones cardiovasculares</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-black text-slate-900">Apex Seamless</td>
                <td className="px-6 py-4">Hilos de Poliamida de alta resistencia y rejilla Jacquard</td>
                <td className="px-6 py-4">Máximo / Soporte Focalizado</td>
                <td className="px-6 py-4">Levantamientos de alta intensidad y crossfit ergonómico</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-black text-slate-900">Rest Day Lounge</td>
                <td className="px-6 py-4">Algodón Premium de alto gramaje y felpa francesa</td>
                <td className="px-6 py-4">Bajo / Corte Relajado Oversize</td>
                <td className="px-6 py-4">Recuperación muscular activa y descanso diario</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 📈 COMUNIDAD Y MARKETING DIGITAL: REVOLUCIÓN DE LOS INFLUENCERS */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-8 relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl space-y-4">
          <span className="text-xs font-black text-teal-400 uppercase tracking-widest">El Arte del Posicionamiento</span>
          <h2 className="text-3xl font-black text-white tracking-tight">Cultura Gymshark: Embajadores de Estilo de Vida</h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
            Gymshark no se puede concebir sin la invención moderna del marketing de creadores. En lugar de pagar por anuncios estáticos de televisión, construyeron relaciones a largo plazo con atletas de internet que compartían sus entrenamientos diarios en YouTube e Instagram. El lema corporativo **Be a Visionary** define a una comunidad global que no compra ropa por mera utilidad, sino por identificarse con sus embajadores favoritos.
          </p>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
            Hoy en día, Gymshark ha madurado y es una multinacional de primer nivel que compite directamente con gigantes tradicionales como Lululemon o Nike. Su expansión incluye espectaculares tiendas físicas permanentes de diseño tecnológico en calles exclusivas como **Regent Street en Londres**, zonas especializadas de entrenamiento en sus cuarteles generales y colecciones ergonómicas que se venden en todo el mundo.
          </p>
        </div>
      </section>

      {/* ❓ PREGUNTAS FRECUENTES DE MODA FITNESS (SEO FAQ Boost) */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-black text-teal-600 uppercase tracking-widest">Respuestas Técnicas</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
            Preguntas Frecuentes sobre Gymshark
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group border border-slate-200 rounded-3xl bg-white [&_summary::-webkit-details-marker]:hidden overflow-hidden transition-all duration-300 hover:border-slate-300"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer select-none bg-slate-50/50">
                <h3 className="font-black text-lg text-[#111827] group-open:text-teal-600 transition-colors leading-snug pr-4">
                  {faq.question}
                </h3>
                <span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                  <svg
                    className="w-4 h-4 text-gray-500 group-open:text-teal-600"
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
