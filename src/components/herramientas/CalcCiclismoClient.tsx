"use client";

import React, { useState } from "react";

export default function CalcCiclismoClient() {
  const [weight, setWeight] = useState<number | "">("");
  const [time, setTime] = useState<number | "">("");
  const [speed, setSpeed] = useState<number | "">("");
  const [result, setResult] = useState<{ calories: number; met: number } | null>(null);

  const calculateCycling = (e: React.FormEvent) => {
    e.preventDefault();
    if (!weight || !time || !speed) return;

    // Estimación de MET según velocidad (km/h)
    let met = 8; // moderado
    if (speed < 15) met = 4;
    else if (speed < 19) met = 6;
    else if (speed < 22) met = 8;
    else if (speed < 25) met = 10;
    else if (speed < 30) met = 12;
    else met = 15;

    // Calorías = MET * Peso * Tiempo (horas)
    const calories = met * weight * (time / 60);

    setResult({ calories: Math.round(calories), met });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 sm:p-12">
        <h2 className="text-2xl font-black text-[#111827] mb-6">Calculadora de Gasto Ciclismo</h2>
        
        <form onSubmit={calculateCycling} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Peso Corporal (kg)</label>
              <input type="number" value={weight} onChange={(e) => setWeight(parseFloat(e.target.value) || "")} placeholder="Ej: 75" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563EB] outline-none transition-all" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Velocidad Media (km/h)</label>
              <input type="number" value={speed} onChange={(e) => setSpeed(parseFloat(e.target.value) || "")} placeholder="Ej: 25" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563EB] outline-none transition-all" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Duración (minutos)</label>
            <input type="number" value={time} onChange={(e) => setTime(parseFloat(e.target.value) || "")} placeholder="Ej: 60" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563EB] outline-none transition-all" required />
          </div>

          <button type="submit" className="w-full py-4 bg-[#2563EB] hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-blue-100">
            Calcular Calorías Quemadas
          </button>
        </form>

        {result && (
          <div className="mt-10 p-8 bg-emerald-50 rounded-3xl border border-emerald-100 text-center animate-fadeIn">
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">Gasto Energético Estimado</p>
            <span className="text-6xl font-black text-emerald-900">{result.calories} <small className="text-xl font-normal">kcal</small></span>
            <div className="mt-6 flex items-center justify-center space-x-4">
              <span className="px-3 py-1 bg-white rounded-lg text-emerald-600 text-xs font-bold border border-emerald-100">INTENSIDAD: {result.met} METs</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
