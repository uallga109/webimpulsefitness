"use client";

import React, { useState } from "react";

export default function CalcDeficitClient() {
  const [maintenance, setMaintenance] = useState<number | "">("");
  const [goal, setGoal] = useState<"moderado" | "agresivo" | "suave">("moderado");
  const [result, setResult] = useState<{ deficit: number; calories: number; loss: string } | null>(null);

  const calculateDeficit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!maintenance) return;

    let percentage = 0.20; // moderado
    let lossStr = "0.5kg - 0.7kg";

    if (goal === "suave") {
      percentage = 0.10;
      lossStr = "0.2kg - 0.4kg";
    } else if (goal === "agresivo") {
      percentage = 0.30;
      lossStr = "0.8kg - 1.0kg";
    }

    const deficit = Math.round(maintenance * percentage);
    const calories = Math.round(maintenance - deficit);

    setResult({ deficit, calories, loss: lossStr });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 sm:p-12">
        <h2 className="text-2xl font-black text-[#111827] mb-6">Calculadora de Déficit</h2>
        
        <form onSubmit={calculateDeficit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Calorías de Mantenimiento (kcal)</label>
            <input
              type="number"
              value={maintenance}
              onChange={(e) => setMaintenance(e.target.value ? parseFloat(e.target.value) : "")}
              placeholder="Ej: 2500"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
              required
            />
            <p className="mt-2 text-xs text-gray-400">Si no las conoces, usa primero la calculadora de calorías.</p>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-4">Tipo de Déficit</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(["suave", "moderado", "agresivo"] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setGoal(type)}
                  className={`py-3 px-4 rounded-xl text-sm font-bold transition-all border ${
                    goal === type
                      ? "bg-blue-50 border-[#2563EB] text-[#2563EB]"
                      : "bg-white border-gray-200 text-gray-500 hover:border-gray-300"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#2563EB] hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-blue-100"
          >
            Calcular Plan de Pérdida
          </button>
        </form>

        {result && (
          <div className="mt-10 p-8 bg-blue-50 rounded-2xl border border-blue-100 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="text-center sm:text-left">
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Calorías Objetivo</p>
                <p className="text-4xl font-black text-[#111827]">{result.calories} <span className="text-base font-normal text-gray-500">kcal</span></p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Déficit Diario</p>
                <p className="text-4xl font-black text-[#111827]">{result.deficit} <span className="text-base font-normal text-gray-500">kcal</span></p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-blue-200">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-gray-700">Pérdida estimada semanal:</p>
                <span className="px-3 py-1 bg-white rounded-lg text-blue-600 font-black text-sm">{result.loss}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
