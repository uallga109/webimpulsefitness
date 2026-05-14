"use client";

import React, { useState } from "react";

export default function CalcGrasaCorporalClient() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [weight, setWeight] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [neck, setNeck] = useState<number | "">("");
  const [waist, setWaist] = useState<number | "">("");
  const [hip, setHip] = useState<number | "">(""); // Solo para mujeres
  const [result, setResult] = useState<{ fat: number; mass: number; category: string } | null>(null);

  const calculateFat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!weight || !height || !neck || !waist) return;
    if (gender === "female" && !hip) return;

    let bodyFat = 0;
    const h = height;
    const n = neck;
    const w = waist;
    const hp = hip || 0;

    if (gender === "male") {
      // Fórmula US Navy para hombres
      bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
    } else {
      // Fórmula US Navy para mujeres
      bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(w + hp - n) + 0.221 * Math.log10(h)) - 450;
    }

    let category = "Promedio";
    if (gender === "male") {
      if (bodyFat < 6) category = "Esencial";
      else if (bodyFat < 14) category = "Atleta";
      else if (bodyFat < 18) category = "Fitness";
      else if (bodyFat < 25) category = "Aceptable";
      else category = "Obesidad";
    } else {
      if (bodyFat < 14) category = "Esencial";
      else if (bodyFat < 21) category = "Atleta";
      else if (bodyFat < 25) category = "Fitness";
      else if (bodyFat < 32) category = "Aceptable";
      else category = "Obesidad";
    }

    setResult({
      fat: parseFloat(bodyFat.toFixed(1)),
      mass: parseFloat((weight * (bodyFat / 100)).toFixed(1)),
      category
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 sm:p-12">
        <h2 className="text-2xl font-black text-[#111827] mb-6">Calculadora de Grasa Corporal</h2>
        
        <form onSubmit={calculateFat} className="space-y-6">
          <div className="flex p-1 bg-gray-100 rounded-2xl mb-8">
            <button
              type="button"
              onClick={() => setGender("male")}
              className={`flex-1 py-3 rounded-xl text-sm font-black transition-all ${
                gender === "male" ? "bg-white text-[#2563EB] shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Hombre
            </button>
            <button
              type="button"
              onClick={() => setGender("female")}
              className={`flex-1 py-3 rounded-xl text-sm font-black transition-all ${
                gender === "female" ? "bg-white text-[#2563EB] shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Mujer
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Peso (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value ? parseFloat(e.target.value) : "")}
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
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Cuello (cm)</label>
              <input
                type="number"
                value={neck}
                onChange={(e) => setNeck(e.target.value ? parseFloat(e.target.value) : "")}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Cintura (cm)</label>
              <input
                type="number"
                value={waist}
                onChange={(e) => setWaist(e.target.value ? parseFloat(e.target.value) : "")}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                required
              />
            </div>
          </div>

          {gender === "female" && (
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Cadera (cm)</label>
              <input
                type="number"
                value={hip}
                onChange={(e) => setHip(e.target.value ? parseFloat(e.target.value) : "")}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-4 bg-[#2563EB] hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-blue-100"
          >
            Calcular Grasa Corporal
          </button>
        </form>

        {result && (
          <div className="mt-10 p-8 bg-gray-50 rounded-2xl border border-gray-100 animate-fadeIn text-center">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Resultado Estimado</p>
            <div className="flex flex-col items-center">
              <span className="text-6xl font-black text-[#111827]">{result.fat}%</span>
              <p className="mt-4 text-xl font-bold text-[#2563EB]">{result.category}</p>
              <p className="mt-2 text-sm text-gray-500 font-medium">Masa grasa: {result.mass} kg</p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-[11px] text-gray-400 leading-relaxed italic">
                * El método de la Marina de EE.UU. tiene un margen de error de +/- 3%, pero es una herramienta consistente para medir progreso.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
