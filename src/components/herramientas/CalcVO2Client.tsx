"use client";

import React, { useState } from "react";

export default function CalcVO2Client() {
  const [distance, setDistance] = useState<number | "">("");
  const [age, setAge] = useState<number | "">("");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [result, setResult] = useState<{ vo2: number; category: string; color: string } | null>(null);

  const calculateVO2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!distance || !age) return;

    // Fórmula del Test de Cooper: VO2max = (Distancia - 504.9) / 44.73
    const vo2 = (distance - 504.9) / 44.73;
    
    let category = "Promedio";
    let color = "text-blue-500";

    // Simplificación de tablas de Cooper
    if (gender === "male") {
      if (vo2 > 52) { category = "Excelente"; color = "text-green-500"; }
      else if (vo2 > 43) { category = "Bueno"; color = "text-green-400"; }
      else if (vo2 < 34) { category = "Pobre"; color = "text-red-500"; }
    } else {
      if (vo2 > 45) { category = "Excelente"; color = "text-green-500"; }
      else if (vo2 > 37) { category = "Bueno"; color = "text-green-400"; }
      else if (vo2 < 28) { category = "Pobre"; color = "text-red-500"; }
    }

    setResult({ vo2: parseFloat(vo2.toFixed(1)), category, color });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 sm:p-12">
        <h2 className="text-2xl font-black text-[#111827] mb-6">Test de Cooper (VO2 Max)</h2>
        
        <form onSubmit={calculateVO2} className="space-y-6">
          <div className="flex p-1 bg-gray-100 rounded-2xl mb-6">
            <button type="button" onClick={() => setGender("male")} className={`flex-1 py-3 rounded-xl text-sm font-black transition-all ${gender === "male" ? "bg-white text-[#2563EB] shadow-sm" : "text-gray-500"}`}>Hombre</button>
            <button type="button" onClick={() => setGender("female")} className={`flex-1 py-3 rounded-xl text-sm font-black transition-all ${gender === "female" ? "bg-white text-[#2563EB] shadow-sm" : "text-gray-500"}`}>Mujer</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Distancia en 12 min (m)</label>
              <input type="number" value={distance} onChange={(e) => setDistance(parseFloat(e.target.value) || "")} placeholder="Ej: 2800" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563EB] outline-none transition-all" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Edad</label>
              <input type="number" value={age} onChange={(e) => setAge(parseInt(e.target.value) || "")} placeholder="Ej: 30" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563EB] outline-none transition-all" required />
            </div>
          </div>

          <button type="submit" className="w-full py-4 bg-[#2563EB] hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-lg">
            Calcular VO2 Max
          </button>
        </form>

        {result && (
          <div className="mt-10 p-8 bg-gray-900 rounded-3xl text-white text-center animate-fadeIn">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Consumo Máximo de Oxígeno</p>
            <span className="text-6xl font-black">{result.vo2} <small className="text-xl font-normal text-gray-400">ml/kg/min</small></span>
            <p className={`mt-4 text-xl font-bold ${result.color}`}>{result.category}</p>
          </div>
        )}
      </div>
    </div>
  );
}
