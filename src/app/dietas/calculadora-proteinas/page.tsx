import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CalcProteinasClient from "@/components/dietas/CalcProteinasClient";

export const metadata: Metadata = {
  title: "Calculadora de Proteínas Diarias Online | Impulse Fitness",
  description: "Descubre cuánta proteína necesitas consumir al día para optimizar la masa muscular y el rendimiento deportivo basándote en la ciencia.",
  keywords: ["calculadora de proteinas", "cuanta proteina necesito", "calcular gramos proteina", "proteina por kilo", "sintesis proteica", "batidos de proteina", "mTOR"],
};

export default function CalculadoraProteinasPage() {
  const faqs = [
    {
      question: "¿Es perjudicial comer mucha proteína para los riñones o el hígado?",
      answer: "No. En personas con riñones e hígado sanos, una ingesta alta de proteínas (incluso superior a 2.5g/kg de peso) ha demostrado ser completamente segura en múltiples ensayos clínicos a largo plazo. Los riñones se adaptan aumentando ligeramente su tasa de filtración glomerular. Únicamente las personas con una enfermedad renal crónica preexistente deben restringir su consumo proteico bajo supervisión médica."
    },
    {
      question: "¿Existe un límite real de proteína que el cuerpo puede absorber en una sola comida?",
      answer: "A nivel digestivo, tu intestino es capaz de absorber prácticamente el 100% de los aminoácidos que consumes, aunque tarde varias horas en digerirlos. Sin embargo, a nivel de síntesis de proteínas musculares (MPS), existe el concepto de 'límite anabólico' o 'umbral de saturación': consumir más de 40-50g de proteína de rápida absorción en una sola ingesta no estimula más la creación de músculo. El exceso de aminoácidos simplemente se oxidará para obtener energía o se convertirá en urea."
    },
    {
      question: "¿Es mejor tomar batidos de proteína (Whey) o comer alimentos sólidos enteros?",
      answer: "Los alimentos sólidos enteros (pechuga, pescado, huevos, legumbres) siempre deben ser la base, ya que aportan micronutrientes esenciales (hierro, zinc, vitaminas) y ejercen un mayor efecto termogénico y saciante. No obstante, los batidos de suero (Whey) son una fuente de altísima calidad biológica, rica en leucina, idónea para periodos cercanos al entrenamiento por su digestión veloz y gran comodidad."
    },
    {
      question: "¿Cómo puedo alcanzar mis requerimientos proteicos con una dieta vegetariana o vegana?",
      answer: "Es totalmente viable combinando legumbres (lentejas, garbanzos), cereales (arroz integral, quinoa), derivados de soja (tofu, tempeh, soja texturizada) y frutos secos. Dado que las fuentes vegetales tienen una menor digestibilidad y perfiles de aminoácidos limitados (aminoácidos limitantes), se aconseja elevar la meta diaria un 10% y asegurar una combinación variada a lo largo del día para obtener todos los aminoácidos esenciales."
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
      {/* Inyección de marcado FAQPage JSON-LD para Google SEO */}
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
          <span className="text-gray-900 font-bold">Calculadora de Proteínas</span>
        </nav>

        <header className="border-b border-gray-200 pb-8 flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
              Calculadora de Proteínas Diarias
            </h1>
            <p className="font-black text-[#2563EB] text-base sm:text-lg">
              Optimiza la hipertrofia muscular y acelera tu recuperación calculando tus gramos diarios recomendados de macronutriente estructural.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-semibold">
              Las proteínas constituyen los bloques de construcción de todo el tejido contráctil de tu organismo. 
              Consumir la cantidad ideal según tu peso, masa magra y nivel de entrenamiento físico es la variable 
              más determinante para el mantenimiento o ganancia de masa muscular libre de grasa.
            </p>
          </div>
          <div className="w-full lg:w-[400px] h-64 rounded-3xl overflow-hidden shadow-xl border border-gray-150 shrink-0">
            <img 
              src="/images/noticias/batido_post_entreno.png" 
              alt="Calculadora de Proteínas" 
              className="w-full h-full object-cover"
            />
          </div>
        </header>
      </div>

      {/* Interfaz Interactiva de la Calculadora de Proteínas */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-lg">
        <div className="border-b border-gray-100 pb-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-black text-[#111827] flex items-center gap-2">
            <span>🥩</span> Parámetros de Síntesis Proteica
          </h2>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">Completa los campos para estimar tus necesidades de aminoácidos</p>
        </div>
        <CalcProteinasClient />
      </section>

      {/* Artículo SEO de Alta Densidad Científica */}
      <article className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8">
        <div className="lg:col-span-2 space-y-12">
          
          {/* El rol de las proteínas y mTOR */}
          <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827] flex items-center gap-2">
              <span>🧬</span> Fisiología Anabólica: Vía mTOR y Umbral de Leucina
            </h2>
            <p className="text-gray-650 leading-relaxed text-base sm:text-lg font-semibold">
              La ingesta de proteínas no solo sirve para aportar ladrillos estructurales; actúa como un potente mensajero químico que enciende los mecanismos celulares de crecimiento.
            </p>
            <div className="space-y-4 text-xs sm:text-sm text-gray-550 font-semibold leading-relaxed">
              <p>
                Cuando consumes una porción de proteína rica en aminoácidos de cadena ramificada (BCAAs), especialmente **Leucina**, se activa en tus células el complejo proteico **mTORC1** (mammalian Target of Rapamycin). Este complejo es la llave que arranca el proceso de **Síntesis de Proteínas Musculares (MPS)**.
              </p>
              <p>
                Para lograr esta activación de forma óptima, la ciencia demuestra que se debe alcanzar el **"Umbral de Leucina"**, que equivale a ingerir entre 2.5 y 3 gramos de leucina pura en una sola comida. Esto suele traducirse en consumir unos 30-40 gramos de proteína de alta calidad biológica por ración.
              </p>
            </div>
          </section>

          {/* Requerimientos proteicos científicos */}
          <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827]">
              Pautas Científicas de Consumo Diario
            </h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-semibold">
              La Sociedad Internacional de Nutrición Deportiva (ISSN) y otras instituciones de referencia recomiendan diferentes rangos según tu actividad:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-5 border border-purple-100 bg-purple-50/20 rounded-2xl">
                <span className="font-black text-purple-700 block mb-1 text-xs uppercase tracking-wider">Sedentarios / Salud</span>
                <span className="block font-black text-gray-800 text-lg mb-2">0.8g - 1.2g/kg</span>
                <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                  Dosis mínima recomendada para evitar deficiencias de nitrógeno y mantener las funciones fisiológicas estructurales básicas.
                </p>
              </div>
              <div className="p-5 border border-indigo-100 bg-indigo-50/20 rounded-2xl">
                <span className="font-black text-indigo-700 block mb-1 text-xs uppercase tracking-wider">Deportistas de Fuerza</span>
                <span className="block font-black text-gray-800 text-lg mb-2">1.6g - 2.2g/kg</span>
                <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                  El "punto dulce" óptimo demostrado clínicamente para maximizar la ganancia de masa magra y reparar las microrroturas del entrenamiento.
                </p>
              </div>
              <div className="p-5 border border-blue-100 bg-blue-50/20 rounded-2xl">
                <span className="font-black text-blue-700 block mb-1 text-xs uppercase tracking-wider">Déficit / Definición</span>
                <span className="block font-black text-gray-800 text-lg mb-2">2.2g - 2.7g/kg</span>
                <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                  Se requiere un aporte superior de aminoácidos exógenos para evitar el catabolismo y usarse como combustible ante la escasez calórica.
                </p>
              </div>
            </div>
          </section>

          {/* Acordeón FAQs */}
          <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827] mb-6">
              Preguntas Frecuentes sobre Proteínas
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
              <span className="text-8xl font-black">🍗</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black mb-4 tracking-tight">Valor Biológico</h3>
            <p className="text-sm leading-relaxed font-semibold text-blue-50">
              No todas las proteínas son iguales. El valor biológico se define por el perfil de aminoácidos esenciales y su digestibilidad:
            </p>
            <ul className="mt-4 space-y-3 text-xs font-semibold">
              <li className="flex items-start gap-2">
                <span className="text-yellow-300 shrink-0">🥚</span>
                <span>**Huevo y Suero (Whey):** Valor biológico máximo. Espectro óptimo de aminoácidos y digestibilidad del 97-100%.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-300 shrink-0">🥩</span>
                <span>**Carnes y Pescados:** Altísimo valor. Perfil completo de aminoácidos de fácil asimilación intestinal.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-300 shrink-0">🌱</span>
                <span>**Fuentes Vegetales:** Menor digestibilidad. Requieren complementar cereales y legumbres para lograr la complementariedad proteica.</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-[32px] bg-slate-50 border border-gray-150 relative overflow-hidden">
            <h3 className="text-lg font-black text-gray-400 uppercase tracking-widest mb-3">Consejo Pro</h3>
            <p className="text-gray-650 leading-relaxed italic text-sm sm:text-base font-semibold">
              "El reparto proteico es clave. En lugar de comer una sola comida gigante de 120 gramos de proteína al final del día, la ciencia indica que dividir tu proteína en 3 a 5 comidas espaciadas de 30-40 gramos mantiene la tasa de síntesis muscular elevada de forma continua a lo largo de las 24 horas."
            </p>
          </div>
        </aside>
      </article>
    </div>
  );
}
