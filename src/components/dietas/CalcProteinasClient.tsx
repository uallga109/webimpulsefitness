"use client";

import React, { useState } from "react";

export default function CalcProteinasClient() {
  const [weight, setWeight] = useState("75");
  const [discipline, setDiscipline] = useState("hypertrophy");

  const w = parseFloat(weight) || 0;

  let factor = 2.0;
  if (discipline === "sed") factor = 1.0;
  if (discipline === "endurance") factor = 1.4;
  if (discipline === "extreme") factor = 2.4;

  const totalProtein = Math.round(w * factor);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      {/* Formulario en Tarjeta limpia */}
      <div className="lg:col-span-1 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm">
        <h2 className="text-xl font-bold text-[#111827] mb-6 border-b border-gray-100 pb-3">
          Parámetros
        </h2>
        
        <div className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
              Peso Corporal (kg)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-base text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
              Tipo de Entrenamiento
            </label>
            <select
              value={discipline}
              onChange={(e) => setDiscipline(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-base text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:bg-white transition-all"
            >
              <option value="sed">Mantenimiento Base / Sin Entreno (1.0g/kg)</option>
              <option value="endurance">Deportes de Resistencia / Running (1.4g/kg)</option>
              <option value="hypertrophy">Hipertrofia & Musculación (2.0g/kg)</option>
              <option value="extreme">Definición Extrema / Retención Magra (2.4g/kg)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Resultado */}
      <div className="lg:col-span-2 space-y-6">
        {/* Color secundario: Verde fitness suave (#22C55E) para indicar éxito/resultado */}
        <div className="p-8 rounded-3xl bg-green-50/50 border border-green-200 relative overflow-hidden shadow-sm">
          <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-white text-[#22C55E] border border-green-100 shadow-xs">
            Ingesta Diaria Sugerida
          </span>
          <div className="mt-6 flex items-baseline space-x-2">
            <span className="text-5xl sm:text-6xl font-black text-[#111827] tracking-tight">
              {totalProtein}
            </span>
            <span className="text-gray-600 font-bold text-lg">gramos de proteína</span>
          </div>
          <p className="text-sm text-gray-500 mt-3 font-medium">
            Basado en un factor de <strong className="text-[#111827]">{factor}g</strong> por kilo de peso corporal.
          </p>
        </div>

        {/* Fuentes alimenticias en Tarjeta limpia */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-[#111827] mb-4 border-b border-gray-100 pb-3">
            Mejores Fuentes de Proteína
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-base text-gray-600">
            {[
              "Pechuga de Pollo",
              "Huevos Enteros",
              "Salmón / Atún",
              "Proteína de Suero (Whey)",
              "Tofu / Tempeh",
              "Lácteos desnatados",
            ].map((src, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                {/* Color primario: Azul eléctrico moderado (#2563EB) */}
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                <span>{src}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
