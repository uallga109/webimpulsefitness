import React from "react";
import type { Metadata } from "next";
import CalcMasaMuscularClient from "@/components/herramientas/CalcMasaMuscularClient";

export const metadata: Metadata = {
  title: "Calculadora de Masa Muscular y FFMI | Impulse Fitness",
  description: "Descubre tu masa magra y tu índice FFMI. Una herramienta esencial para culturistas y atletas de fuerza que buscan medir su progreso real.",
};

export default function CalcMasaMuscularPage() {
  return (
    <div className="flex flex-col space-y-12 animate-fadeIn max-w-4xl mx-auto py-8">
      {/* 1. Encabezado Hero Simple y Limpio (Excelente UX) */}
      <header className="border-b border-gray-200 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Herramientas</span>
          <span>•</span>
          <span>Entrenamiento</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Calculadora de Masa Muscular (FFMI)
        </h1>
        <p className="text-gray-500 mt-2 text-base sm:text-lg font-medium">
          Estima tu Índice de Masa Libre de Grasa y conoce tu potencial biológico real de hipertrofia.
        </p>
      </header>

      {/* 2. La Herramienta Interactiva en primer plano */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
        <CalcMasaMuscularClient />
      </section>

      {/* 3. Bloque de Texto SEO Profundo (E-E-A-T para Google) */}
      <article className="prose prose-blue max-w-none text-gray-600 space-y-8 leading-relaxed border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-black text-[#111827]">¿Qué es exactamente la Masa Libre de Grasa y el FFMI?</h2>
        <p>
          La **Masa Libre de Grasa (MLG)** o masa magra engloba todo el peso del organismo excluyendo el tejido adiposo (es decir, incluye músculos, huesos, agua corporal, glucógeno, órganos y ligamentos). 
        </p>
        <p>
          El **FFMI (Fat-Free Mass Index)**, o *Índice de Masa Libre de Grasa*, es una métrica biométrica de élite dentro del culturismo natural. A diferencia del IMC clásico (que solo considera el peso total), el FFMI aísla tu musculatura y la normaliza en función de tu estatura. Esto permite comparar con precisión científica el nivel de desarrollo muscular de atletas de diferentes alturas.
        </p>

        <h2 className="text-2xl font-black text-[#111827]">¿Cómo se calcula el FFMI? La Ecuación Normalizada</h2>
        <p>
          El cálculo requiere conocer en primer lugar el peso corporal, la altura y tu porcentaje de grasa estimado. La fórmula estándar de FFMI es la siguiente:
        </p>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-3 text-sm">
          <p>
            <strong>1. Cálculo de Masa Magra:</strong> Masa Magra (kg) = Peso (kg) × (1 - (Grasa % / 100))
          </p>
          <p>
            <strong>2. Fórmula de FFMI Estándar:</strong> FFMI = Masa Magra (kg) / Altura² (m)
          </p>
          <p>
            <strong>3. Fórmula de FFMI Normalizada (Ecuación de Kouri):</strong> Diseñada específicamente para evitar que los atletas muy altos (más de 1.80m) obtengan lecturas falsamente abultadas.
            <br />
            <span className="font-mono bg-white px-2 py-1 rounded text-[#2563EB] border border-gray-200 inline-block mt-2">
              FFMI Normalizado = FFMI + (6.1 × (1.8 - Altura))
            </span>
          </p>
        </div>

        <h2 className="text-2xl font-black text-[#111827]">Interpretación y Rangos del FFMI en Atletas Naturales</h2>
        <p>
          Un célebre estudio clínico liderado por el Dr. Kouri analizó a una cohorte de atletas y determinó los límites biológicos e intervalos de desarrollo muscular magro sin el uso de sustancias exógenas (anabolizantes):
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>16.0 - 17.9:</strong> Desarrollo muscular promedio para personas sedentarias o principiantes que inician el gimnasio.
          </li>
          <li>
            <strong>18.0 - 19.9:</strong> Nivel típico de atletas recreativos intermedios con varios años de entrenamiento de fuerza disciplinado.
          </li>
          <li>
            <strong>20.0 - 21.9:</strong> Excelente desarrollo muscular. Indica una excelente genética y disciplina severa en cargas y nutrición.
          </li>
          <li>
            <strong>22.0 - 23.9:</strong> Nivel avanzado excepcional. Representa la élite de los atletas y culturistas naturales.
          </li>
          <li>
            <strong>24.0 - 25.0:</strong> Límite genético natural absoluto. Es sumamente infrecuente alcanzar este rango sin el uso de química, reservado para genéticas superdotadas de élite.
          </li>
          <li>
            <strong>&gt; 25.0:</strong> Rango prácticamente inalcanzable de forma fisiológica natural (frecuentemente asociado a la ayuda de fármacos de recomposición hormonal).
          </li>
        </ul>

        <h2 className="text-2xl font-black text-[#111827]">La Utilidad del FFMI en tu Planificación</h2>
        <p>
          Monitorear tu FFMI cada 3-6 meses te permite confirmar con base matemática que tus fases de volumen están construyendo masa muscular contráctil real, y no simple grasa corporal. Si al ganar 3 kilos en la báscula tu FFMI se mantiene idéntico, sabrás de antemano que la ganancia ha sido puramente grasa o retención de fluidos, permitiéndote corregir el rumbo nutricional al instante.
        </p>
      </article>
    </div>
  );
}
