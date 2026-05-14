"use client";

import React, { useState } from "react";

export default function CalcMasaMuscularClient() {
  const [weight, setWeight] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [fat, setFat] = useState<number | "">("");
  const [result, setResult] = useState<{ leanMass: number; ffmi: number; normalizedFfmi: number; category: string } | null>(null);

  const calculateMass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!weight || !height || !fat) return;

    const leanMass = weight * (1 - fat / 100);
    const heightInMeters = height / 100;
    const ffmi = leanMass / (heightInMeters * heightInMeters);
    const normalizedFfmi = ffmi + 6.0 * (heightInMeters - 1.8);

    let category = "Promedio";
    if (normalizedFfmi > 25) category = "Límite Natural / Genética Superior";
    else if (normalizedFfmi > 22) category = "Excelente";
    else if (normalizedFfmi > 20) category = "Bueno";
    else if (normalizedFfmi < 18) category = "Bajo";

    setResult({
      leanMass: parseFloat(leanMass.toFixed(1)),
      ffmi: parseFloat(ffmi.toFixed(1)),
      normalizedFfmi: parseFloat(normalizedFfmi.toFixed(1)),
      category
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 sm:p-12">
        <h2 className="text-2xl font-black text-[#111827] mb-6">Calculadora de Masa Magra y FFMI</h2>
        
        <form onSubmit={calculateMass} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Peso (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value ? parseFloat(e.target.value) : "")}
                placeholder="Ej: 80"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Altura (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value ? parseFloat(e.target.value) : "")}
                placeholder="Ej: 175"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Grasa Corporal Estimada (%)</label>
            <input
              type="number"
              value={fat}
              onChange={(e) => setFat(e.target.value ? parseFloat(e.target.value) : "")}
              placeholder="Ej: 15"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#2563EB] hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-blue-100"
          >
            Calcular Masa Magra
          </button>
        </form>

        {result && (
          <div className="mt-10 p-8 bg-gray-50 rounded-2xl border border-gray-100 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Masa Magra</p>
                <p className="text-4xl font-black text-[#111827]">{result.leanMass} <span className="text-base font-normal text-gray-500">kg</span></p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Índice FFMI</p>
                <p className="text-4xl font-black text-[#111827]">{result.normalizedFfmi}</p>
                <p className={`text-xs font-bold mt-1 uppercase ${result.normalizedFfmi > 22 ? 'text-green-600' : 'text-blue-600'}`}>{result.category}</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-[11px] text-gray-400 leading-relaxed italic">
                * El FFMI (Fat-Free Mass Index) es un indicador más preciso que el IMC para atletas, ya que tiene en cuenta la masa muscular acumulada.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
