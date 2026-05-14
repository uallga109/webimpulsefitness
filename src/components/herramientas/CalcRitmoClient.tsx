"use client";

import React, { useState } from "react";

export default function CalcRitmoClient() {
  const [distance, setDistance] = useState<number | "">("");
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [result, setResult] = useState<{ pace: string; speed: string } | null>(null);

  const calculatePace = (e: React.FormEvent) => {
    e.preventDefault();
    if (!distance) return;

    const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    if (totalSeconds === 0) return;

    const paceSecondsPerKm = totalSeconds / (distance as number);
    const paceMin = Math.floor(paceSecondsPerKm / 60);
    const paceSec = Math.round(paceSecondsPerKm % 60);
    
    const speed = ((distance as number) / (totalSeconds / 3600)).toFixed(2);

    setResult({
      pace: `${paceMin}:${paceSec < 10 ? '0' : ''}${paceSec} min/km`,
      speed: `${speed} km/h`
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 sm:p-12">
        <h2 className="text-2xl font-black text-[#111827] mb-6">Calculadora de Ritmo</h2>
        
        <form onSubmit={calculatePace} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Distancia (km)</label>
            <input
              type="number"
              step="0.01"
              value={distance}
              onChange={(e) => setDistance(e.target.value ? parseFloat(e.target.value) : "")}
              placeholder="Ej: 10"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Tiempo Total</label>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <input type="number" placeholder="HH" value={hours || ""} onChange={(e) => setHours(parseInt(e.target.value) || 0)} className="w-full px-3 py-3 rounded-xl border border-gray-200 text-center" />
                <span className="text-[10px] text-gray-400 text-center block mt-1">Horas</span>
              </div>
              <div>
                <input type="number" placeholder="MM" value={minutes || ""} onChange={(e) => setMinutes(parseInt(e.target.value) || 0)} className="w-full px-3 py-3 rounded-xl border border-gray-200 text-center" />
                <span className="text-[10px] text-gray-400 text-center block mt-1">Minutos</span>
              </div>
              <div>
                <input type="number" placeholder="SS" value={seconds || ""} onChange={(e) => setSeconds(parseInt(e.target.value) || 0)} className="w-full px-3 py-3 rounded-xl border border-gray-200 text-center" />
                <span className="text-[10px] text-gray-400 text-center block mt-1">Segundos</span>
              </div>
            </div>
          </div>

          <button type="submit" className="w-full py-4 bg-[#2563EB] hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-blue-100">
            Calcular Ritmo y Velocidad
          </button>
        </form>

        {result && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeIn">
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 text-center">
              <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">Ritmo Medio</p>
              <p className="text-3xl font-black text-orange-900">{result.pace}</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Velocidad</p>
              <p className="text-3xl font-black text-blue-900">{result.speed}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
