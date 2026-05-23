import React from "react";
import type { Metadata } from "next";
import CalcDeficitClient from "@/components/herramientas/CalcDeficitClient";

export const metadata: Metadata = {
  title: "Calculadora de Déficit Calórico | Impulse Fitness",
  description: "Calcula el déficit calórico necesario para perder grasa de forma eficiente y sostenible sin comprometer tu masa muscular.",
};

export default function CalcDeficitPage() {
  return (
    <div className="flex flex-col space-y-12 animate-fadeIn max-w-4xl mx-auto py-8">
      {/* 1. Encabezado Hero Simple y Limpio (Excelente UX) */}
      <header className="border-b border-gray-200 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Herramientas</span>
          <span>•</span>
          <span>Nutrición</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Calculadora de Déficit Calórico
        </h1>
        <p className="text-gray-500 mt-2 text-base sm:text-lg font-medium">
          Calcula el déficit energético óptimo para perder grasa sin comprometer tu masa muscular.
        </p>
      </header>

      {/* 2. La Herramienta Interactiva en primer plano */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
        <CalcDeficitClient />
      </section>

      {/* 3. Bloque de Texto SEO Profundo (E-E-A-T para Google) */}
      <article className="prose prose-blue max-w-none text-gray-600 space-y-8 leading-relaxed border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-black text-[#111827]">¿Qué es exactamente un Déficit Calórico?</h2>
        <p>
          En términos de termodinámica biológica, el **déficit calórico** se produce cuando una persona consume menos calorías de las que su cuerpo gasta para mantener sus funciones vitales y realizar sus actividades diarias. Es el principio físico fundamental e ineludible bajo el cual ocurre la oxidación y pérdida de tejido graso corporal.
        </p>
        <p>
          Cuando el cuerpo detecta que la energía aportada por los alimentos es insuficiente para cubrir el **Gasto Energético Total Diario (GETD)**, se ve obligado a recurrir a sus reservas de energía almacenada. Principalmente, oxida los ácidos grasos de los adipocitos para transformarlos en energía útil (ATP).
        </p>

        <h2 className="text-2xl font-black text-[#111827]">La Importancia de un Déficit Calórico Sostenible</h2>
        <p>
          Un error sumamente común en la cultura del fitness es recortar las calorías de manera drástica o agresiva (por ejemplo, comer 1000 kcal diarias). Esto desencadena consecuencias fisiológicas sumamente dañinas. Nuestra calculadora estima un déficit equilibrado para garantizar:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Preservación de la Masa Muscular:</strong> Un déficit moderado (de entre el 15% y el 25% de tus calorías de mantenimiento) combinado con un consumo óptimo de proteína evita que el organismo destruya fibras musculares para obtener aminoácidos.
          </li>
          <li>
            <strong>Mantenimiento del Rendimiento Deportivo:</strong> Permite que sigas entrenando con alta intensidad en el gimnasio, lo cual estimula directamente la retención del tejido magro.
          </li>
          <li>
            <strong>Salud Hormonal y Metabólica:</strong> Reduce el riesgo de sufrir una bajada severa de hormonas tiroideas (T3 y T4), leptina y testosterona, evitando el temido estancamiento metabólico.
          </li>
          <li>
            <strong>Adherencia y Sostenibilidad Psicológica:</strong> Un plan moderado reduce los niveles de grelina (la hormona del hambre) y cortisol (la hormona del estrés), previniendo los atracones y la ansiedad.
          </li>
        </ul>

        <h2 className="text-2xl font-black text-[#111827]">Cómo calcular tu Déficit Calórico de forma Profesional</h2>
        <p>
          El cálculo científico que realiza nuestra herramienta sigue una metodología contrastada de tres pasos fisiológicos clave:
        </p>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-4 text-sm">
          <p>
            <strong>Paso 1: Estimación de la Tasa Metabólica Basal (TMB):</strong> Las calorías mínimas que consume tu cuerpo en absoluto reposo. Se calcula mediante la fórmula de Harris-Benedict revisada o Katch-McArdle si conoces tu porcentaje de grasa corporal.
          </p>
          <p>
            <strong>Paso 2: Aplicación del Factor de Actividad (GETD):</strong> Multiplicamos tu TMB por un factor multiplicador según tu nivel de entrenamiento diario y pasos diarios (NEAT).
          </p>
          <p>
            <strong>Paso 3: Establecimiento del Rango de Déficit:</strong> Aplicamos una reducción del 15% (déficit suave), 20% (déficit moderado) o 25% (déficit controlado) sobre tu gasto total diario para definir tu ingesta calórica de pérdida de peso.
          </p>
        </div>

        <h2 className="text-2xl font-black text-[#111827]">Frecuencia y Progresión: Pérdida Semanal Recomendada</h2>
        <p>
          Para mantener la salud intacta, las guías de nutrición clínica aconsejan que la velocidad de pérdida de peso se sitúe entre el **0.5% y el 1.0% de tu peso corporal total por semana**. Por ejemplo, una persona de 80 kg debería aspirar a perder entre 400 y 800 gramos semanales. Perder peso a una velocidad mayor suele ser indicativo de pérdida de agua y masa muscular magra, no de tejido graso puramente.
        </p>
      </article>
    </div>
  );
}
