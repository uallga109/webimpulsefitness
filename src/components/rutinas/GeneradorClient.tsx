"use client";

import React, { useState } from "react";

interface WorkoutDay {
  dayName: string;
  focus: string;
  exercises: string[];
}

export default function GeneradorClient() {
  const [level, setLevel] = useState("intermedio");
  const [days, setDays] = useState("4");
  const [goal, setGoal] = useState("hipertrofia");
  const [generatedPlan, setGeneratedPlan] = useState<WorkoutDay[] | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    setTimeout(() => {
      let plan: WorkoutDay[] = [];

      if (days === "3") {
        plan = [
          {
            dayName: "Día 1",
            focus: "FullBody A (Énfasis Empuje)",
            exercises: ["Sentadilla Trasera 3x8", "Press Banca 4x8", "Remo con Barra 3x10", "Elevaciones Laterales 3x15"],
          },
          {
            dayName: "Día 2",
            focus: "FullBody B (Énfasis Tracción)",
            exercises: ["Peso Muerto 3x5", "Press Militar 3x8", "Dominadas o Jalón 4x8", "Curl de Bíceps 3x12"],
          },
          {
            dayName: "Día 3",
            focus: "FullBody C (Énfasis Pierna)",
            exercises: ["Prensa Inclinada 4x10", "Fondos en Paralelas 3x10", "Remo en Polea Baja 3x12", "Zancadas 3x12"],
          },
        ];
      } else if (days === "4") {
        plan = [
          {
            dayName: "Lunes",
            focus: "Torso Pesado",
            exercises: ["Press Banca 4x6", "Remo con Mancuerna 4x8", "Press Militar 3x8", "Jalón al Pecho 3x10"],
          },
          {
            dayName: "Martes",
            focus: "Pierna Pesada",
            exercises: ["Sentadilla 4x6", "Peso Muerto Rumano 3x8", "Prensa 3x10", "Gemelos en Máquina 4x15"],
          },
          {
            dayName: "Jueves",
            focus: "Torso Hipertrofia",
            exercises: ["Press Inclinado Mancuernas 4x10", "Jalón Supino 4x10", "Elevaciones Laterales 4x15", "Super-serie Bíceps/Tríceps 3x12"],
          },
          {
            dayName: "Viernes",
            focus: "Pierna Hipertrofia",
            exercises: ["Sentadilla Búlgara 3x10", "Curl Femoral Tumbado 4x12", "Extensiones de Cuádriceps 4x15", "Abdomen en Polea 3x15"],
          },
        ];
      } else {
        plan = [
          { dayName: "Día 1", focus: "Empuje (Pecho, Hombro, Tríceps)", exercises: ["Press Banca 4x8", "Press Militar Mancuernas 3x10", "Aperturas en Polea 3x12", "Tríceps Cuerda 4x12"] },
          { dayName: "Día 2", focus: "Tracción (Espalda, Bíceps)", exercises: ["Remo con Barra 4x8", "Jalón al Pecho 3x10", "Pull-over en Polea 3x12", "Curl Martillo 4x12"] },
          { dayName: "Día 3", focus: "Pierna Completa", exercises: ["Sentadilla 4x8", "Prensa 3x10", "Curl Femoral 4x12", "Elevación de Talones 4x15"] },
          { dayName: "Día 4", focus: "Torso Bombeo", exercises: ["Press Pecho Máquina 4x12", "Remo Gironda 4x12", "Elevaciones Laterales 5x15", "Bíceps/Tríceps 4x15"] },
          { dayName: "Día 5", focus: "Pierna Posterior & Glúteo", exercises: ["Hip Thrust 4x10", "Peso Muerto Rumano 3x10", "Zancadas 3x12", "Abdomen 4x15"] },
        ];
      }

      setGeneratedPlan(plan);
      setIsGenerating(false);
    }, 400);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      {/* Columna del formulario en formato Tarjeta (Card) limpia */}
      <div className="lg:col-span-1 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm">
        <h2 className="text-xl font-bold text-[#111827] mb-6 border-b border-gray-100 pb-3">
          Configuración del Plan
        </h2>
        
        <form onSubmit={handleGenerate} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
              Nivel de Experiencia
            </label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-base text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:bg-white transition-all"
            >
              <option value="principiante">Principiante (0-1 año)</option>
              <option value="intermedio">Intermedio (1-3 años)</option>
              <option value="avanzado">Avanzado (+3 años)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
              Días por Semana
            </label>
            <select
              value={days}
              onChange={(e) => setDays(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-base text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:bg-white transition-all"
            >
              <option value="3">3 Días (FullBody)</option>
              <option value="4">4 Días (Torso / Pierna)</option>
              <option value="5">5 Días (Híbrida / Frecuencia 2)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
              Objetivo Principal
            </label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-base text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:bg-white transition-all"
            >
              <option value="hipertrofia">Ganancia Muscular (Hipertrofia)</option>
              <option value="fuerza">Fuerza Máxima</option>
              <option value="definicion">Pérdida de Grasa</option>
            </select>
          </div>

          {/* Color primario: Azul eléctrico moderado (#2563EB) */}
          <button
            type="submit"
            disabled={isGenerating}
            className="w-full mt-6 bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl transition-colors shadow-sm disabled:opacity-50 text-base flex items-center justify-center"
          >
            {isGenerating ? "Calculando división..." : "Generar Rutina Ahora"}
          </button>
        </form>
      </div>

      {/* Columna de Resultados */}
      <div className="lg:col-span-2">
        {generatedPlan ? (
          <div className="space-y-6 animate-fadeIn">
            {/* Color secundario: Verde fitness suave (#22C55E) para indicar éxito */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-green-50 border border-green-200 px-5 py-4 rounded-2xl">
              <div className="flex items-center space-x-2">
                <span className="text-lg">✅</span>
                <span className="text-sm font-bold text-[#22C55E] uppercase tracking-wide">
                  Plan generado con éxito
                </span>
              </div>
              <span className="text-sm font-semibold text-gray-600 mt-1 sm:mt-0">
                {days} días • Énfasis {goal}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {generatedPlan.map((day, index) => (
                <article
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                      <span className="text-sm font-black text-[#111827] uppercase tracking-wider">
                        {day.dayName}
                      </span>
                      <span className="text-xs font-bold text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                        {day.focus}
                      </span>
                    </div>
                    <ul className="space-y-2.5">
                      {day.exercises.map((ex, exIdx) => (
                        <li key={exIdx} className="text-base text-gray-600 flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0 mt-2" />
                          <span className="leading-snug">{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-3 border-t border-gray-100 text-xs font-semibold text-gray-400 text-right">
                    Descanso sugerido: 90-120s
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <div className="h-full min-h-[350px] border border-dashed border-gray-300 rounded-3xl flex flex-col items-center justify-center p-8 text-center bg-white shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-2xl mb-4">
              ⚡
            </div>
            <h3 className="text-lg font-bold text-[#111827]">
              Ningún plan generado todavía
            </h3>
            <p className="mt-2 text-base text-gray-500 max-w-sm">
              Ajusta los parámetros en el panel izquierdo y haz clic en generar para
              obtener tu distribución semanal inteligente.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
