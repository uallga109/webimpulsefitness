"use client";

import React, { useState } from "react";

export default function CalcIMCClient() {
  const [weight, setWeight] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [result, setResult] = useState<{ imc: number; category: string; color: string } | null>(null);

  const calculateIMC = (e: React.FormEvent) => {
    e.preventDefault();
    if (!weight || !height) return;

    const heightInMeters = height / 100;
    const imc = weight / (heightInMeters * heightInMeters);
    
    let category = "";
    let color = "";

    if (imc < 18.5) {
      category = "Bajo peso";
      color = "text-blue-500";
    } else if (imc < 25) {
      category = "Peso normal (Saludable)";
      color = "text-green-500";
    } else if (imc < 30) {
      category = "Sobrepeso";
      color = "text-yellow-500";
    } else {
      category = "Obesidad";
      color = "text-red-500";
    }

    setResult({ imc: parseFloat(imc.toFixed(1)), category, color });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 sm:p-12">
        <h2 className="text-2xl font-black text-[#111827] mb-6">Calculadora de IMC</h2>
        
        <form onSubmit={calculateIMC} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Peso (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value ? parseFloat(e.target.value) : "")}
              placeholder="Ej: 75"
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
              placeholder="Ej: 180"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#2563EB] hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-blue-100"
          >
            Calcular IMC
          </button>
        </form>

        {result && (
          <div className="mt-10 p-8 bg-gray-50 rounded-2xl border border-gray-100 animate-fadeIn">
            <p className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Tu resultado</p>
            <div className="text-center">
              <span className="text-6xl font-black text-[#111827]">{result.imc}</span>
              <p className={`mt-4 text-xl font-bold ${result.color}`}>{result.category}</p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 leading-relaxed">
                * El Índice de Masa Corporal (IMC) es una medida orientativa. No distingue entre masa muscular y grasa corporal.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
