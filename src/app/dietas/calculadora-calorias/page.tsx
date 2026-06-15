import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CalcCaloriasClient from "@/components/dietas/CalcCaloriasClient";

export const metadata: Metadata = {
  title: "Calculadora de Calorías Diarias y TDEE | Impulse Fitness",
  description: "Calcula con precisión tus calorías para déficit, mantenimiento o volumen. Descubre tu TDEE y metabolismo basal mediante ecuaciones científicas.",
};

export default function CalculadoraCaloriasPage() {
  const faqs = [
    {
      question: "¿Por qué mi peso se ha estancado si estoy en un supuesto déficit calórico?",
      answer: "El estancamiento suele deberse a tres factores principales: 1) Infraestimación de las calorías ingeridas (no pesar los alimentos crudos, aderezos o picoteos). 2) Adaptación metabólica y caída del NEAT (te mueves inconscientemente menos a medida que pierdes peso). 3) Retención de líquidos por estrés elevado y cortisol alto que enmascara la pérdida de grasa en la báscula."
    },
    {
      question: "¿Con qué frecuencia debo volver a calcular mis calorías diarias?",
      answer: "Es recomendable recalcular tus calorías cada vez que pierdas o ganes entre 3 y 5 kilogramos de peso corporal, o cuando cambies notablemente tu nivel de actividad física diaria. Tu masa corporal influye directamente en tu gasto energético basal."
    },
    {
      question: "¿Es real el concepto de la 'tumba metabólica' (daño metabólico)?",
      answer: "El daño metabólico permanente no existe. Lo que ocurre es la termogénesis adaptativa: tu cuerpo optimiza sus funciones biológicas para gastar menos energía ante una escasez prolongada. Esto se soluciona realizando periodos cortos de mantenimiento (Diet Breaks) o recargas de carbohidratos (Refeeds) para restablecer la leptina y las hormonas tiroideas."
    },
    {
      question: "¿Debo sumar de nuevo las calorías que mi reloj inteligente dice que he quemado entrenando?",
      answer: "No. Los relojes y pulseras de actividad suelen sobreestimar enormemente el gasto calórico de los entrenamientos (hasta en un 40%). Nuestra calculadora ya incluye el factor de actividad física en el cálculo del TDEE. Si sumas las calorías del entrenamiento, probablemente estarás comiendo de más."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="flex flex-col space-y-12 animate-fadeIn mb-20">
      {/* Inyección automática de marcado FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Migas de pan y Cabecera */}
      <div>
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-2">
          <Link href="/dietas" className="hover:text-[#2563EB] transition-colors font-semibold">
            Dietas
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-bold">Calculadora de Calorías</span>
        </nav>

        <header className="border-b border-gray-200 pb-8 flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
              Calculadora de Calorías (TDEE)
            </h1>
            <p className="font-black text-[#2563EB] text-base sm:text-lg">
              Estima tus requerimientos energéticos reales mediante algoritmos matemáticos clínicos de alta precisión.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-semibold">
              El Gasto Energético Total Diario (TDEE) representa la suma total de las calorías que tu cuerpo oxida en un periodo de 24 horas. 
              Conocer esta cifra con precisión científica es el paso indispensable antes de emprender cualquier plan de pérdida de grasa, 
              mantenimiento o ganancia muscular.
            </p>
          </div>
          <div className="w-full lg:w-[400px] h-64 rounded-3xl overflow-hidden shadow-xl border border-gray-150 shrink-0">
            <img 
              src="/images/herramientas/calculadora_calorias_macros.png" 
              alt="Calculadora de Calorías" 
              className="w-full h-full object-cover"
            />
          </div>
        </header>
      </div>

      {/* Interfaz Interactiva de la Calculadora */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-lg">
        <div className="border-b border-gray-100 pb-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-black text-[#111827] flex items-center gap-2">
            <span>⚙️</span> Ajuste de Macronutrientes y Kcal
          </h2>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">Completa los campos para calcular tu perfil energético</p>
        </div>
        <CalcCaloriasClient />
      </section>

      {/* Artículo SEO de Alta Densidad Científica */}
      <article className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8">
        <div className="lg:col-span-2 space-y-12">
          
          {/* Componentes del Gasto Energético */}
          <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827] flex items-center gap-2">
              <span>🧬</span> Fisiología Energética: ¿Cómo Gastamos Calorías?
            </h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-semibold">
              El cuerpo humano no es un simple horno térmico; es un sistema metabólico altamente complejo. Tu gasto energético diario total (TDEE) se divide en cuatro pilares fundamentales:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-100">
                <span className="text-xs font-black text-[#2563EB] block mb-1">1. Tasa Metabólica Basal (BMR - 60-70%)</span>
                <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed">
                  La energía mínima requerida para mantener tus órganos vitales en funcionamiento (cerebro, corazón, pulmones) en reposo absoluto.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-100">
                <span className="text-xs font-black text-green-600 block mb-1">2. Termogénesis por Actividad No Física (NEAT - 15-30%)</span>
                <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed">
                  Cualquier movimiento físico cotidiano no planificado como entrenar: caminar al trabajo, limpiar la casa, subir escaleras o gesticular.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-100">
                <span className="text-xs font-black text-orange-500 block mb-1">3. Efecto Termogénico de Alimentos (TEF - ~10%)</span>
                <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed">
                  Las calorías consumidas en digerir, absorber e internalizar los nutrientes. Las proteínas requieren hasta un 25-30% de su propia energía para procesarse.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-100">
                <span className="text-xs font-black text-purple-500 block mb-1">4. Termogénesis por Ejercicio (EAT - 5-15%)</span>
                <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed">
                  Las calorías explícitamente consumidas durante sesiones programadas de entrenamiento (pesas, running, ciclismo).
                </p>
              </div>
            </div>
          </section>

          {/* Fórmulas clínicas */}
          <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827]">
              Ecuaciones Científicas Utilizadas
            </h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-semibold">
              Nuestra calculadora implementa las tres ecuaciones clínicas con mayor validez epidemiológica para garantizar cálculos precisos:
            </p>
            <div className="space-y-4">
              <div className="border border-gray-150 p-5 rounded-2xl">
                <h4 className="text-sm font-black text-gray-800">Mifflin-St Jeor (Por Defecto)</h4>
                <p className="text-xs sm:text-sm text-gray-500 font-semibold mt-1 leading-relaxed">
                  Considerada la ecuación más precisa por la Academia de Nutrición y Dietética para estimar las necesidades energéticas basándose en estatura, peso, sexo y edad en personas promedio.
                </p>
              </div>
              <div className="border border-gray-150 p-5 rounded-2xl">
                <h4 className="text-sm font-black text-gray-800">Harris-Benedict (Revisada en 1984)</h4>
                <p className="text-xs sm:text-sm text-gray-500 font-semibold mt-1 leading-relaxed">
                  La fórmula clásica adaptada por Roza y Shizgal que funciona excelentemente con personas con un porcentaje de grasa corporal en rangos normales y deportistas recreativos activos.
                </p>
              </div>
              <div className="border border-gray-150 p-5 rounded-2xl">
                <h4 className="text-sm font-black text-gray-800">Katch-McArdle (Avanzada)</h4>
                <p className="text-xs sm:text-sm text-gray-500 font-semibold mt-1 leading-relaxed">
                  La ecuación reina para atletas. Calcula el metabolismo basal basándose exclusivamente en tu masa magra libre de grasa. Requiere que conozcas tu porcentaje de grasa corporal de forma fiable.
                </p>
              </div>
            </div>
          </section>

          {/* Acordeón FAQs */}
          <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827] mb-6">
              Preguntas Frecuentes sobre Calorías
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details 
                  key={idx} 
                  className="group border border-gray-150 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between p-5 font-black text-[#111827] hover:text-[#2563EB] cursor-pointer bg-white hover:bg-slate-50 transition-colors select-none">
                    <span className="text-sm sm:text-base pr-4 leading-tight">{faq.question}</span>
                    <span className="text-xs transition-transform duration-300 group-open:rotate-180 shrink-0 text-gray-400 group-open:text-[#2563EB]">
                      ▼
                    </span>
                  </summary>
                  <div className="p-5 pt-0 bg-white border-t border-gray-100">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-semibold">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>

        </div>

        {/* Sidebar Informativa */}
        <aside className="space-y-8">
          <div className="p-8 rounded-[32px] bg-[#2563EB] text-white shadow-xl shadow-blue-100 border border-blue-600 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="text-8xl font-black">⚡</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black mb-4 tracking-tight">Cómo usar tu TDEE</h3>
            <div className="space-y-4 text-sm font-semibold">
              <div className="border-b border-white/20 pb-3">
                <span className="block font-black text-yellow-300">Pérdida de Grasa (Déficit):</span>
                Restar un 15% al 20% a tu TDEE. Crea un déficit progresivo para conservar músculo.
              </div>
              <div className="border-b border-white/20 pb-3">
                <span className="block font-black text-green-300">Volumen Limpio (Superávit):</span>
                Añadir entre 300 y 500 Kcal a tu TDEE para alimentar de forma anabólica tu síntesis proteica.
              </div>
              <div>
                <span className="block font-black text-blue-200">Recomposición Corporal:</span>
                Mantente en tu TDEE clavado. Pierde grasa y gana músculo si eres principiante o vuelves a entrenar.
              </div>
            </div>
          </div>

          <div className="p-8 rounded-[32px] bg-slate-50 border border-gray-150 relative overflow-hidden">
            <h3 className="text-lg font-black text-gray-400 uppercase tracking-widest mb-3">Consejo Pro</h3>
            <p className="text-gray-650 leading-relaxed italic text-sm sm:text-base font-semibold">
              "El NEAT es el componente que más fluctúa de forma inconsciente. Si estás en déficit calórico estricto y dejas de caminar, gesticular o te sientes perezoso, tu gasto energético caerá drásticamente, frenando tu pérdida de peso. ¡Oblígate a dar mínimo 10,000 pasos diarios!"
            </p>
          </div>
        </aside>
      </article>
    </div>
  );
}
