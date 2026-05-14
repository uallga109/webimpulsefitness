"use client";

import React, { useState } from "react";

export default function CalcHidratacionClient() {
  const [weight, setWeight] = useState<number | "">("");
  const [exerciseTime, setExerciseTime] = useState<number | "">("");
  const [intensity, setIntensity] = useState<"baja" | "moderada" | "alta">("moderada");
  const [result, setResult] = useState<{ total: number; basal: number; exercise: number } | null>(null);

  const calculateWater = (e: React.FormEvent) => {
    e.preventDefault();
    if (!weight) return;

    // Basal: 35ml por kg
    const basal = weight * 35;
    
    // Ejercicio: 500-1000ml por hora según intensidad
    let rate = 600; // moderada
    if (intensity === "baja") rate = 400;
    else if (intensity === "alta") rate = 900;

    const exerciseExtra = (exerciseTime ? (exerciseTime / 60) * rate : 0);
    const total = basal + exerciseExtra;

    setResult({
      total: Math.round(total),
      basal: Math.round(basal),
      exercise: Math.round(exerciseExtra)
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 sm:p-12">
        <h2 className="text-2xl font-black text-[#111827] mb-6">Calculadora de Hidratación</h2>
        
        <form onSubmit={calculateWater} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Peso Corporal (kg)</label>
            <input type="number" value={weight} onChange={(e) => setWeight(parseFloat(e.target.value) || "")} placeholder="Ej: 75" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563EB] outline-none transition-all" required />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Minutos de Ejercicio Hoy</label>
              <input type="number" value={exerciseTime} onChange={(e) => setExerciseTime(parseFloat(e.target.value) || "")} placeholder="Ej: 60" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563EB] outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Intensidad</label>
              <select value={intensity} onChange={(e) => setIntensity(e.target.value as any)} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none">
                <option value="baja">Baja (Yoga, caminar)</option>
                <option value="moderada">Moderada (Pesas, trote)</option>
                <option value="alta">Alta (Crossfit, Running intenso)</option>
              </select>
            </div>
          </div>

          <button type="submit" className="w-full py-4 bg-[#2563EB] hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-blue-100">
            Calcular Ingesta de Agua
          </button>
        </form>

        {result && (
          <div className="mt-10 animate-fadeIn">
            <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center mb-6">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Total Diario Recomendado</p>
              <span className="text-6xl font-black text-blue-900">{result.total / 1000} <small className="text-xl font-normal">Litros</small></span>
              <p className="mt-2 text-sm text-blue-700">Aprox. {Math.round(result.total / 250)} vasos de agua</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Mínimo Basal</p>
                <p className="text-xl font-black text-gray-700">{result.basal} ml</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Extra Ejercicio</p>
                <p className="text-xl font-black text-gray-700">+{result.exercise} ml</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
