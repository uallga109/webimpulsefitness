"use client";

import React, { useState } from "react";

export default function Calc1RMClient() {
  const [weight, setWeight] = useState<number | "">("");
  const [reps, setReps] = useState<number | "">("");
  const [result, setResult] = useState<{ oneRM: number; percentages: { pct: number; weight: number }[] } | null>(null);

  const calculate1RM = (e: React.FormEvent) => {
    e.preventDefault();
    if (!weight || !reps) return;

    // Fórmula de Brzycki
    const oneRM = weight / (1.0278 - 0.0278 * reps);
    
    const percentages = [95, 90, 85, 80, 75, 70, 60, 50].map(pct => ({
      pct,
      weight: Math.round(oneRM * (pct / 100))
    }));

    setResult({ oneRM: Math.round(oneRM), percentages });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 sm:p-12">
        <h2 className="text-2xl font-black text-[#111827] mb-6">Calculadora de 1RM</h2>
        
        <form onSubmit={calculate1RM} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Peso Levantado (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value ? parseFloat(e.target.value) : "")}
                placeholder="Ej: 100"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Repeticiones</label>
              <input
                type="number"
                value={reps}
                onChange={(e) => setReps(e.target.value ? parseFloat(e.target.value) : "")}
                placeholder="Ej: 5"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                required
                max={12}
              />
              <p className="mt-1 text-[10px] text-gray-400">* Máximo 12 reps para precisión</p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#2563EB] hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-blue-100"
          >
            Estimar Fuerza Máxima
          </button>
        </form>

        {result && (
          <div className="mt-10 animate-fadeIn">
            <div className="p-8 bg-gray-900 rounded-3xl text-white text-center mb-8">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Tu 1RM Estimado</p>
              <span className="text-7xl font-black">{result.oneRM} <small className="text-xl font-normal text-gray-400">kg</small></span>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-bold text-[#111827] px-2 mb-4">Porcentajes para tu entrenamiento:</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {result.percentages.map((item) => (
                  <div key={item.pct} className="bg-white border border-gray-100 rounded-2xl p-4 text-center">
                    <p className="text-[10px] font-bold text-gray-400 mb-1">{item.pct}%</p>
                    <p className="text-lg font-black text-[#111827]">{item.weight} kg</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
