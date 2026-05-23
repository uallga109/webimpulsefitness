"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function TrainerPricingCalculatorPage() {
  // Estados para los inputs
  const [targetNetIncome, setTargetNetIncome] = useState(3000); // Ingreso neto mensual deseado en €
  const [operatingExpenses, setOperatingExpenses] = useState(400); // Gastos de negocio (software, autónomo, seguro) en €
  const [taxRate, setTaxRate] = useState(20); // % IRPF estimado
  const [workHoursPerWeek, setWorkHoursPerWeek] = useState(25); // Horas de trabajo con clientes a la semana
  const [activeClients, setActiveClients] = useState(15); // Número de clientes recurrentes

  // Cálculos matemáticos B2B
  // Ingreso Bruto Necesario = (Neto + Gastos) / (1 - Impuestos/100)
  const grossIncomeNeeded = Math.round((targetNetIncome + operatingExpenses) / (1 - taxRate / 100));
  
  // Tarifa por Hora en caso de clases presenciales 1-on-1 (4 semanas al mes)
  const totalMonthlyHours = workHoursPerWeek * 4;
  const idealHourlyRate = totalMonthlyHours > 0 ? Math.round(grossIncomeNeeded / totalMonthlyHours) : 0;

  // Tarifa por Cliente Recurrente al mes (Membresía de Asesoría Online)
  const idealMonthlyRatePerClient = activeClients > 0 ? Math.round(grossIncomeNeeded / activeClients) : 0;

  return (
    <div className="flex flex-col space-y-12 animate-fadeIn max-w-5xl mx-auto w-full py-4">
      {/* Botón de regreso */}
      <div>
        <Link
          href="/entrenadores/marketing"
          className="inline-flex items-center space-x-2 text-sm font-bold text-[#2563EB] hover:text-blue-700 transition-colors mb-6 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Volver a Soluciones de Entrenador</span>
        </Link>

        <header className="border-b border-gray-100 pb-6">
          <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-black uppercase tracking-wider mb-3 inline-block">
            Herramienta Financiera Premium
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
            Calculadora Financiera de Tarifas para Entrenadores
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            ¿Sabes exactamente cuánto cobrar por tus servicios? Define tus objetivos de sueldo neto tras impuestos y descubre tus tarifas ideales por hora física presencial o por cliente de asesoría online mensual.
          </p>
        </header>
      </div>

      {/* Grid del Calculador */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Panel Izquierdo: Inputs (Sliders) */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 space-y-6 shadow-sm">
          <h3 className="text-xl font-bold text-[#111827] border-b border-gray-100 pb-3">Tus Objetivos Financieros</h3>

          {/* Input 1: Sueldo neto deseado */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-bold text-gray-700">
              <label htmlFor="target-income">Sueldo Limpio Deseado (Neto Mensual)</label>
              <span className="text-[#2563EB] font-mono">{targetNetIncome}€</span>
            </div>
            <input
              id="target-income"
              type="range"
              min="1500"
              max="8000"
              step="100"
              value={targetNetIncome}
              onChange={(e) => setTargetNetIncome(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>1.500€</span>
              <span>8.000€</span>
            </div>
          </div>

          {/* Input 2: Gastos de negocio */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-bold text-gray-700">
              <label htmlFor="expenses">Gastos Mensuales (Autónomo, Apps, Seguro)</label>
              <span className="text-[#2563EB] font-mono">{operatingExpenses}€</span>
            </div>
            <input
              id="expenses"
              type="range"
              min="100"
              max="1500"
              step="50"
              value={operatingExpenses}
              onChange={(e) => setOperatingExpenses(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>100€ (Mínimo)</span>
              <span>1.500€ (Alquiler de sala VIP)</span>
            </div>
          </div>

          {/* Input 3: Tasa de impuestos */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-bold text-gray-700">
              <label htmlFor="tax">IRPF / Impuestos Estimados</label>
              <span className="text-[#2563EB] font-mono">{taxRate}%</span>
            </div>
            <input
              id="tax"
              type="range"
              min="10"
              max="45"
              step="1"
              value={taxRate}
              onChange={(e) => setTaxRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>10% (Rendimientos bajos)</span>
              <span>45% (Tramos altos de IRPF)</span>
            </div>
          </div>

          {/* Input 4: Horas a la semana */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-bold text-gray-700">
              <label htmlFor="work-hours">Horas de Entrenamiento Semanal (1-on-1)</label>
              <span className="text-[#2563EB] font-mono">{workHoursPerWeek}h / sem</span>
            </div>
            <input
              id="work-hours"
              type="range"
              min="10"
              max="40"
              step="1"
              value={workHoursPerWeek}
              onChange={(e) => setWorkHoursPerWeek(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>10h (Media jornada)</span>
              <span>40h (Límite físico insalubre)</span>
            </div>
          </div>

          {/* Input 5: Clientes activos online */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-bold text-gray-700">
              <label htmlFor="clients">Clientes Activos Deseados (Asesoría Online)</label>
              <span className="text-[#2563EB] font-mono">{activeClients} clientes</span>
            </div>
            <input
              id="clients"
              type="range"
              min="5"
              max="60"
              step="1"
              value={activeClients}
              onChange={(e) => setActiveClients(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>5 clientes</span>
              <span>60 clientes (Límite con software)</span>
            </div>
          </div>
        </div>

        {/* Panel Derecho: Métricas de Resultados */}
        <div className="lg:col-span-6 bg-gradient-to-br from-[#111827] to-gray-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-between shadow-lg">
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b border-gray-800 pb-3 text-gray-300">Facturación e Ingresos Requeridos</h3>
            
            <div className="bg-white/5 rounded-2xl p-5 border border-white/5 text-center">
              <span className="text-xs text-gray-400 block uppercase">Facturación Bruta Mensual Requerida</span>
              <span className="text-3xl sm:text-4xl font-black font-mono text-[#22C55E] block mt-1">
                {grossIncomeNeeded.toLocaleString()}€
              </span>
              <span className="text-[10px] text-gray-400 block mt-1">
                Para cubrir {targetNetIncome}€ netos, {operatingExpenses}€ de costes y {taxRate}% de IRPF.
              </span>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-800">
              <h4 className="text-sm font-bold text-gray-300 uppercase">Tarifas Recomendadas por Modelo de Negocio</h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                  <span className="text-xs text-gray-400 block uppercase">1-on-1 Presencial</span>
                  <span className="text-2xl font-black font-mono text-[#2563EB] block mt-1">{idealHourlyRate}€ / h</span>
                  <span className="text-[9px] text-gray-400 block mt-0.5">Tarifa mínima por sesión física</span>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                  <span className="text-xs text-gray-400 block uppercase">Asesoría Online</span>
                  <span className="text-2xl font-black font-mono text-[#22C55E] block mt-1">{idealMonthlyRatePerClient}€ / mes</span>
                  <span className="text-[9px] text-gray-400 block mt-0.5">Suscripción recurrente por cliente</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-4 border border-white/5 mt-6 space-y-2">
            <div className="flex justify-between text-xs text-gray-400">
              <span>IMUESTOS TOTALES ESTIMADOS:</span>
              <span className="font-mono text-white font-bold">{Math.round(grossIncomeNeeded * (taxRate / 100))}€</span>
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>GASTOS OPERATIVOS ANUALES:</span>
              <span className="font-mono text-white font-bold">{operatingExpenses * 12}€</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: Explicación Semántica Profunda para AdSense y EEAT */}
      <section className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 space-y-6">
        <h2 className="text-2xl font-black text-[#111827]">La Estructura de Precios Científica del Entrenamiento Personal</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          Muchos entrenadores cometen el error de establecer sus precios basándose únicamente en lo que cobra el gimnasio de su zona o su competencia directa. Esto les obliga a trabajar 40 horas físicas a la semana, provocando un agotamiento físico inmediato y limitando la calidad de su seguimiento.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h4 className="text-lg font-bold text-[#111827]">¿Por qué evitar cobrar tarifas bajas en asesorías?</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Cobrar 30€ o 40€ al mes por una asesoría online exige captar más de 80 clientes activos para alcanzar un sueldo neto digno tras cubrir costes e impuestos de autónomos en España. Gestionar 80 rutinas y planificaciones de forma personalizada es inviable, reduciendo la calidad drásticamente y disparando la tasa de bajas.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-bold text-[#111827]">La Transición hacia el Modelo de Alto Ticket (High-Ticket)</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Posicionar tus asesorías online a partir de **120€ - 180€ al mes** te permite ofrecer un servicio de primer nivel, limitando tus clientes a un número manejable (ej. 15-25 personas). De este modo, puedes dedicar tiempo de calidad al análisis biomecánico de sus vídeos, llamadas de apoyo y ajustes nutricionales milimétricos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
