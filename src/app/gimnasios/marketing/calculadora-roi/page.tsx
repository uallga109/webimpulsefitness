"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function GymRoiCalculatorPage() {
  // Estados para los inputs de la calculadora
  const [budget, setBudget] = useState(1500); // Presupuesto mensual en €
  const [cpl, setCpl] = useState(8); // Coste por Lead en €
  const [conversionRate, setConversionRate] = useState(25); // % Conversión Lead a Socio
  const [monthlyFee, setMonthlyFee] = useState(49); // Cuota mensual en €
  const [churnRate, setChurnRate] = useState(5); // % Churn rate mensual

  // Cálculos matemáticos
  const totalLeads = Math.round(budget / cpl);
  const conversionMultiplier = conversionRate / 100;
  const newSocios = Math.round(totalLeads * conversionMultiplier);
  const cac = newSocios > 0 ? Math.round(budget / newSocios) : 0;
  
  // LTV (Lifetime Value) = Cuota mensual / (Churn mensual / 100)
  const averageMonths = churnRate > 0 ? 100 / churnRate : 0;
  const ltv = Math.round(monthlyFee * averageMonths);
  const ltvCacRatio = cac > 0 ? (ltv / cac).toFixed(1) : "0.0";
  
  // ROI de primer mes e Ingresos Totales de ciclo de vida
  const firstMonthRevenue = newSocios * monthlyFee;
  const totalLifetimeRevenue = newSocios * ltv;
  const netRoi = budget > 0 ? Math.round(((totalLifetimeRevenue - budget) / budget) * 100) : 0;

  return (
    <div className="flex flex-col space-y-12 animate-fadeIn max-w-5xl mx-auto w-full py-4">
      {/* Botón de regreso */}
      <div>
        <Link
          href="/gimnasios/marketing"
          className="inline-flex items-center space-x-2 text-sm font-bold text-[#2563EB] hover:text-blue-700 transition-colors mb-6 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Volver a Soluciones de Gimnasio</span>
        </Link>

        <header className="border-b border-gray-100 pb-6">
          <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-black uppercase tracking-wider mb-3 inline-block">
            Herramienta B2B Premium
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
            Calculadora Interactiva de ROI para Gimnasios
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Audita el rendimiento financiero de tu inversión publicitaria. Modifica los parámetros de tus campañas y costes operativos en tiempo real para visualizar tu Coste de Adquisición (CAC), el Valor de Vida del Socio (LTV) y el retorno de inversión real (ROAS).
          </p>
        </header>
      </div>

      {/* Grid del Calculador */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Panel Izquierdo: Inputs (Sliders) */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 space-y-6 shadow-sm">
          <h3 className="text-xl font-bold text-[#111827] border-b border-gray-100 pb-3">Parámetros Operativos</h3>

          {/* Input 1: Presupuesto publicitario */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-bold text-gray-700">
              <label htmlFor="budget">Presupuesto Mensual de Marketing</label>
              <span className="text-[#2563EB] font-mono">{budget}€</span>
            </div>
            <input
              id="budget"
              type="range"
              min="500"
              max="10000"
              step="100"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>500€</span>
              <span>10.000€</span>
            </div>
          </div>

          {/* Input 2: Coste por lead */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-bold text-gray-700">
              <label htmlFor="cpl">Coste por Lead (CPL) Promedio</label>
              <span className="text-[#2563EB] font-mono">{cpl}€</span>
            </div>
            <input
              id="cpl"
              type="range"
              min="2"
              max="25"
              step="1"
              value={cpl}
              onChange={(e) => setCpl(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>2€ (Meta Ads)</span>
              <span>25€ (Google Ads premium)</span>
            </div>
          </div>

          {/* Input 3: Tasa de conversión */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-bold text-gray-700">
              <label htmlFor="conversion">Tasa de Conversión (Lead a Socio)</label>
              <span className="text-[#2563EB] font-mono">{conversionRate}%</span>
            </div>
            <input
              id="conversion"
              type="range"
              min="5"
              max="60"
              step="1"
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>5% (Malo)</span>
              <span>60% (Equipo de ventas de élite)</span>
            </div>
          </div>

          {/* Input 4: Cuota mensual */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-bold text-gray-700">
              <label htmlFor="fee">Cuota Mensual Promedio</label>
              <span className="text-[#2563EB] font-mono">{monthlyFee}€</span>
            </div>
            <input
              id="fee"
              type="range"
              min="19"
              max="150"
              step="1"
              value={monthlyFee}
              onChange={(e) => setMonthlyFee(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>19€ (Low Cost)</span>
              <span>150€ (Boutique de Especialización)</span>
            </div>
          </div>

          {/* Input 5: Churn rate */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-bold text-gray-700">
              <label htmlFor="churn">Tasa de Abandono (Churn Rate) Mensual</label>
              <span className="text-[#2563EB] font-mono">{churnRate}%</span>
            </div>
            <input
              id="churn"
              type="range"
              min="2"
              max="15"
              step="0.5"
              value={churnRate}
              onChange={(e) => setChurnRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>2% (Excelente)</span>
              <span>15% (Pérdidas críticas)</span>
            </div>
          </div>
        </div>

        {/* Panel Derecho: Métricas de Resultados */}
        <div className="lg:col-span-6 bg-gradient-to-br from-[#111827] to-gray-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-between shadow-lg">
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b border-gray-800 pb-3 text-gray-300">Métricas de Rendimiento</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                <span className="text-xs text-gray-400 block uppercase">Nuevos Leads</span>
                <span className="text-2xl font-black font-mono block mt-1">{totalLeads}</span>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                <span className="text-xs text-gray-400 block uppercase">Nuevos Socios</span>
                <span className="text-2xl font-black font-mono text-[#22C55E] block mt-1">+{newSocios}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                <span className="text-xs text-gray-400 block uppercase">Coste Adquisición (CAC)</span>
                <span className="text-2xl font-black font-mono block mt-1">{cac}€</span>
                <span className="text-[10px] text-gray-400 block mt-0.5">Inversión para traer 1 socio</span>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                <span className="text-xs text-gray-400 block uppercase">Valor del Socio (LTV)</span>
                <span className="text-2xl font-black font-mono block mt-1">{ltv}€</span>
                <span className="text-[10px] text-gray-400 block mt-0.5">Permanencia promedio: {averageMonths.toFixed(1)} meses</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-gray-800 pt-6">
              <div>
                <span className="text-xs text-gray-400 block uppercase">Relación LTV : CAC</span>
                <span className={`text-3xl font-black font-mono mt-1 block ${Number(ltvCacRatio) >= 3 ? "text-green-400" : "text-amber-400"}`}>
                  {ltvCacRatio}x
                </span>
                <span className="text-[10px] text-gray-400 block mt-0.5">Recomendado: &gt; 3.0x</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block uppercase">Retorno Neto (ROI)</span>
                <span className="text-3xl font-black font-mono text-[#22C55E] block mt-1">+{netRoi}%</span>
                <span className="text-[10px] text-gray-400 block mt-0.5">Retorno total de por vida</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-4 border border-white/5 mt-6 flex justify-between items-center">
            <div>
              <span className="text-xs text-gray-400 block uppercase">Ingresos de Ciclo de Vida</span>
              <span className="text-2xl font-black font-mono text-[#22C55E]">{totalLifetimeRevenue.toLocaleString()}€</span>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-400 block uppercase">Ingreso Mes 1</span>
              <span className="text-xl font-bold font-mono">{firstMonthRevenue.toLocaleString()}€</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: Explicación Semántica Profunda para AdSense y EEAT */}
      <section className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 space-y-6">
        <h2 className="text-2xl font-black text-[#111827]">La Ciencia de la Rentabilidad en Negocios Fitness</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          Para que una instalación deportiva sea sostenible, las dos métricas reinas son el **CAC (Customer Acquisition Cost)** y el **LTV (Lifetime Value)**. La salud a largo plazo del gimnasio no se mide por la facturación bruta inicial, sino por la eficiencia y la permanencia de los abonados.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h4 className="text-lg font-bold text-[#111827]">¿Cómo reducir el Coste de Adquisición (CAC)?</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              El CAC mide el coste de marketing y ventas necesario para traer a un solo socio activo. Si tu CPL es alto o tu tasa de conversión en recepción es baja, el CAC se disparará, haciendo imposible recuperar la inversión en los primeros meses. Para optimizar el CAC:
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Usa anuncios hiper-locales dirigidos a códigos postales clave.</li>
              <li>Automatiza secuencias por WhatsApp inmediatamente tras el registro.</li>
              <li>Forma a tu equipo de recepción en técnicas estructuradas de cierre.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-bold text-[#111827]">¿Cómo incrementar el Lifetime Value (LTV)?</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              El LTV representa el beneficio neto que un socio aporta a tu gimnasio a lo largo de toda su vida útil. Está directamente vinculado a la permanencia y a los ingresos por socio (ARPU). Incrementar el LTV implica:
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Mejorar el onboarding los primeros 90 días para evitar el abandono prematuro.</li>
              <li>Implementar alertas de asistencia automática (retención predictiva).</li>
              <li>Añadir servicios de upselling (dietas, retos grupales o retail).</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
