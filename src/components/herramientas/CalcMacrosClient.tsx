"use client";

import React, { useState } from "react";

export default function CalcMacrosClient() {
  const [calories, setCalories] = useState<number | "">("");
  const [goal, setGoal] = useState<"balanced" | "muscle" | "shred">("balanced");
  const [result, setResult] = useState<{ protein: number; carbs: number; fats: number } | null>(null);

  const calculateMacros = (e: React.FormEvent) => {
    e.preventDefault();
    if (!calories) return;

    let pPct = 0.3, cPct = 0.4, fPct = 0.3; // Balanced

    if (goal === "muscle") {
      pPct = 0.35; cPct = 0.45; fPct = 0.20;
    } else if (goal === "shred") {
      pPct = 0.40; cPct = 0.25; fPct = 0.35;
    }

    setResult({
      protein: Math.round((calories * pPct) / 4),
      carbs: Math.round((calories * cPct) / 4),
      fats: Math.round((calories * fPct) / 9),
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 sm:p-12">
        <h2 className="text-2xl font-black text-[#111827] mb-6">Calculadora de Macros</h2>
        
        <form onSubmit={calculateMacros} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Calorías Diarias (kcal)</label>
            <input
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value ? parseFloat(e.target.value) : "")}
              placeholder="Ej: 2500"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-4">Tu Objetivo</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: "balanced", label: "Equilibrado", desc: "30/40/30" },
                { id: "muscle", label: "Volumen", desc: "35/45/20" },
                { id: "shred", label: "Definición", desc: "40/25/35" }
              ].map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setGoal(type.id as any)}
                  className={`py-3 px-4 rounded-xl border text-center transition-all ${
                    goal === type.id
                      ? "bg-blue-50 border-[#2563EB] text-[#2563EB]"
                      : "bg-white border-gray-200 text-gray-500 hover:border-gray-300"
                  }`}
                >
                  <p className="text-sm font-black">{type.label}</p>
                  <p className="text-[10px] font-medium opacity-70">{type.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#2563EB] hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-blue-100"
          >
            Distribuir Macronutrientes
          </button>
        </form>

        {result && (
          <div className="mt-10 grid grid-cols-3 gap-4 animate-fadeIn">
            <div className="bg-red-50 p-4 rounded-2xl border border-red-100 text-center">
              <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-1">Proteína</p>
              <p className="text-2xl font-black text-red-900">{result.protein}g</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 text-center">
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">Carbohidratos</p>
              <p className="text-2xl font-black text-blue-900">{result.carbs}g</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-2xl border border-yellow-100 text-center">
              <p className="text-[10px] font-bold text-yellow-600 uppercase tracking-widest mb-1">Grasas</p>
              <p className="text-2xl font-black text-yellow-900">{result.fats}g</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
