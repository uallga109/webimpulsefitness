import React from "react";
import type { Metadata } from "next";
import CalcCiclismoClient from "@/components/herramientas/CalcCiclismoClient";

export const metadata: Metadata = {
  title: "Calculadora de Gasto Calórico en Ciclismo | Impulse Fitness",
  description: "Estima cuántas calorías quemas en tus rutas de bicicleta según tu peso, la velocidad media y el tiempo de pedaleo.",
};

export default function CalcCiclismoPage() {
  return (
    <div className="flex flex-col space-y-12 animate-fadeIn max-w-4xl mx-auto py-8">
      {/* 1. Encabezado Hero Simple y Limpio (Excelente UX) */}
      <header className="border-b border-gray-200 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Herramientas</span>
          <span>•</span>
          <span>Deportes</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Gasto Calórico en Ciclismo
        </h1>
        <p className="text-gray-500 mt-2 text-base sm:text-lg font-medium">
          Estima las calorías consumidas sobre la bicicleta para planificar tus recargas de glucógeno de forma profesional.
        </p>
      </header>

      {/* 2. La Herramienta Interactiva en primer plano */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
        <CalcCiclismoClient />
      </section>

      {/* 3. Bloque de Texto SEO Profundo (E-E-A-T para Google) */}
      <article className="prose prose-blue max-w-none text-gray-600 space-y-8 leading-relaxed border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-black text-[#111827]">¿Cómo se determina el Gasto Energético en el Ciclismo?</h2>
        <p>
          El ciclismo es un deporte aeróbico de alta eficiencia muscular que genera un **gasto energético masivo**, capaz de superar fácilmente las 800-1000 calorías por hora a intensidades moderadas o altas. Estimar este gasto es fundamental para que los deportistas planifiquen adecuadamente su nutrición e hidratación.
        </p>
        <p>
          A diferencia del running, en el ciclismo la **resistencia aerodinámica** y el peso del ciclista (especialmente al subir pendientes) alteran drásticamente el consumo de energía en vatios, haciendo que la velocidad media y el tiempo efectivo sean las variables cinemáticas de mayor peso para estimar el consumo calórico indirecto.
        </p>

        <h2 className="text-2xl font-black text-[#111827]">Los Equivalentes Metabólicos (METs) Aplicados a la Bicicleta</h2>
        <p>
          Para realizar una estimación científica, nuestra calculadora utiliza el sistema de **Equivalentes Metabólicos (METs)**, un estándar de fisiología médica deportiva que representa la tasa de consumo de oxígeno por minuto de una actividad en comparación con el reposo basal (1 MET = 3.5 ml O₂/kg/min). 
        </p>
        <p>
          Según la velocidad de pedaleo, se aplican los siguientes factores METs oficiales:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Paseo / Ritmo suave (&lt; 15 km/h):</strong> Equivale a unos **4.0 METs**.
          </li>
          <li>
            <strong>Ritmo moderado (15 - 20 km/h):</strong> Representa aproximadamente **6.0 METs**.
          </li>
          <li>
            <strong>Ritmo activo / Deportivo (20 - 25 km/h):</strong> Aumenta la intensidad a unos **8.0 METs**.
          </li>
          <li>
            <strong>Entrenamiento de alta intensidad / Competición (&gt; 25 km/h):</strong> Exige demandas metabólicas extremas superiores a **10.0 - 12.0 METs**.
          </li>
        </ul>

        <h2 className="text-2xl font-black text-[#111827]">La Importancia de la Nutrición Intra-Entrenamiento para Ciclistas</h2>
        <p>
          Conocer tu gasto energético exacto en tus salidas o rodajes sobre la bicicleta te aporta beneficios nutricionales determinantes:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Prevención de la &ldquo;Pájara&rdquo; (Bonking):</strong> Ocurre cuando el organismo agota por completo sus reservas de glucógeno hepático y muscular, obligándolo a degradar aminoácidos en condiciones de fatiga extrema.
          </li>
          <li>
            <strong>Dosificación de Carbohidratos:</strong> Para salidas superiores a las 2 horas, se aconseja ingerir entre **60g y 90g de carbohidratos por hora** (mediante geles, ciclodextrina o barritas) para compensar el gasto calórico activo sin decaer en potencia.
          </li>
          <li>
            <strong>Recomposición Corporal Inteligente:</strong> Evita que los ciclistas recreativos sobrestimen el gasto del entrenamiento y consuman calorías en exceso al finalizar la salida, boicoteando sus objetivos de pérdida de grasa.
          </li>
        </ul>
      </article>
    </div>
  );
}
