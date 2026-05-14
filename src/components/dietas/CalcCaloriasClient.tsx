"use client";

import React, { useState } from "react";

export default function CalcCaloriasClient() {
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("75");
  const [height, setHeight] = useState("175");
  const [age, setAge] = useState("25");
  const [activity, setActivity] = useState("1.55");
  const [goalOffset, setGoalOffset] = useState("maintain");

  const w = parseFloat(weight) || 0;
  const h = parseFloat(height) || 0;
  const a = parseFloat(age) || 0;

  let bmr = 10 * w + 6.25 * h - 5 * a;
  bmr += gender === "male" ? 5 : -161;
  bmr = Math.max(0, Math.round(bmr));

  const tdee = Math.round(bmr * parseFloat(activity));

  let finalCalories = tdee;
  if (goalOffset === "cut") finalCalories -= 500;
  if (goalOffset === "bulk") finalCalories += 300;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      {/* Formulario de Entrada en Tarjeta limpia */}
      <div className="lg:col-span-1 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm">
        <h2 className="text-xl font-bold text-[#111827] mb-6 border-b border-gray-100 pb-3">
          Tus Datos Físicos
        </h2>
        
        <div className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
              Género
            </label>
            <div className="grid grid-cols-2 gap-3">
              {/* Color primario: Azul eléctrico moderado (#2563EB) */}
              <button
                type="button"
                onClick={() => setGender("male")}
                className={`py-3 px-4 text-base font-bold rounded-xl border transition-all ${
                  gender === "male"
                    ? "bg-blue-50 border-[#2563EB] text-[#2563EB]"
                    : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
                }`}
              >
                Hombre
              </button>
              <button
                type="button"
                onClick={() => setGender("female")}
                className={`py-3 px-4 text-base font-bold rounded-xl border transition-all ${
                  gender === "female"
                    ? "bg-blue-50 border-[#2563EB] text-[#2563EB]"
                    : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
                }`}
              >
                Mujer
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
              Peso (kg)
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
              Altura (cm)
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-base text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
              Edad (años)
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-base text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
              Factor de Actividad
            </label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-base text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:bg-white transition-all"
            >
              <option value="1.2">Sedentario (Poco o ningún ejercicio)</option>
              <option value="1.375">Ligero (Ejercicio 1-3 días/sem)</option>
              <option value="1.55">Moderado (Ejercicio 3-5 días/sem)</option>
              <option value="1.725">Activo (Ejercicio 6-7 días/sem)</option>
              <option value="1.9">Muy Activo (Atleta / Trabajo pesado)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
              Ajuste de Objetivo
            </label>
            <select
              value={goalOffset}
              onChange={(e) => setGoalOffset(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-base text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:bg-white transition-all"
            >
              <option value="maintain">Mantenimiento (TDEE Actual)</option>
              <option value="cut">Definición (-500 kcal/día)</option>
              <option value="bulk">Volumen Limpio (+300 kcal/día)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Panel de Visualización del Gasto */}
      <div className="lg:col-span-2 space-y-6">
        {/* Color secundario: Verde fitness suave (#22C55E) para indicar calorías/progreso/éxito */}
        <div className="p-8 rounded-3xl bg-green-50/50 border border-green-200 relative overflow-hidden shadow-sm">
          <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-white text-[#22C55E] border border-green-100 shadow-xs">
            Resultado Sugerido
          </span>
          <div className="mt-6 flex items-baseline space-x-2">
            <span className="text-5xl sm:text-6xl font-black text-[#111827] tracking-tight">
              {finalCalories}
            </span>
            <span className="text-gray-600 font-bold text-lg">kcal / día</span>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-green-100">
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Metabolismo Basal</p>
              <p className="text-xl font-black text-[#111827] mt-1">{bmr} kcal</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Gasto Total (TDEE)</p>
              <p className="text-xl font-black text-[#22C55E] mt-1">{tdee} kcal</p>
            </div>
          </div>
        </div>

        {/* Explicación en Tarjeta limpia */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-[#111827] mb-3">
            Distribución de Macros de Ejemplo
          </h3>
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            Una vez fijadas tus calorías, puedes distribuir la energía con un
            esquema alto en proteínas para retener o construir músculo:
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <span className="block text-xs font-bold text-[#2563EB] uppercase tracking-wider">Proteínas</span>
              <span className="text-base font-black text-[#111827] mt-1 block">~2.2g/kg</span>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <span className="block text-xs font-bold text-[#22C55E] uppercase tracking-wider">Grasas</span>
              <span className="text-base font-black text-[#111827] mt-1 block">~25% total</span>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <span className="block text-xs font-bold text-purple-600 uppercase tracking-wider">Carbos</span>
              <span className="text-base font-black text-[#111827] mt-1 block">Resto</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
