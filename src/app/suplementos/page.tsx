import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Suplementos Deportivos con Evidencia Científica | Impulse Fitness",
  description:
    "Análisis riguroso de suplementos con grado de evidencia A. Creatina monohidrato, proteína de suero, cafeína y fórmulas pre-entrenamiento.",
};

export default function SuplementosPage() {
  return (
    <div className="flex flex-col space-y-8 animate-fadeIn">
      {/* Cabecera grande y limpia */}
      <header className="border-b border-gray-200 pb-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Área Principal</span>
          <span>•</span>
          <span>Ayudas Ergogénicas</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Suplementos Deportivos
        </h1>
        {/* Texto normal (Body): ideal de 16px a 18px */}
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
          Filtramos el marketing engañoso. Descubre los suplementos que realmente
          cuentan con respaldo científico sólido (Grado A del Instituto Australiano del Deporte).
        </p>
      </header>

      {/* Grid de Suplementos Visual */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            id: "creatina",
            name: "Creatina Monohidrato",
            ev: "Evidencia Grado A",
            evClass: "bg-green-50 text-[#22C55E]",
            desc: "Aumenta la fuerza máxima y el rendimiento en esfuerzos cortos e intensos.",
            image: "/images/suplementos/creatina.png",
            href: "/suplementos/creatina"
          },
          {
            id: "whey",
            name: "Proteína de Suero (Whey)",
            ev: "Evidencia Grado A",
            evClass: "bg-green-50 text-[#22C55E]",
            desc: "Rápida absorción y excelente perfil de aminoácidos para la síntesis proteica.",
            image: "/images/suplementos/whey.png",
            href: "/suplementos/whey"
          },
          {
            id: "cafeina",
            name: "Cafeína Anhidra",
            ev: "Evidencia Grado A",
            evClass: "bg-green-50 text-[#22C55E]",
            desc: "Estimulante que reduce la percepción del esfuerzo y aumenta el enfoque.",
            image: "/images/suplementos/cafeina.png",
            href: "/suplementos/cafeina"
          },
          {
            id: "beta-alanina",
            name: "Beta-Alanina",
            ev: "Evidencia Grado A",
            evClass: "bg-green-50 text-[#22C55E]",
            desc: "Retrasa la fatiga muscular actuando como tampón contra el ácido láctico.",
            image: "/images/suplementos/beta-alanina.png",
            href: "/suplementos/beta-alanina"
          },
          {
            id: "citrulina",
            name: "Citrulina Malato",
            ev: "Evidencia Grado B",
            evClass: "bg-blue-50 text-[#2563EB]",
            desc: "Favorece la vasodilatación, el transporte de nutrientes y el bombeo muscular.",
            image: "/images/suplementos/citrulina.png",
            href: "/suplementos/citrulina"
          },
          {
            id: "recuperacion",
            name: "Melatonina & Magnesio",
            ev: "Recuperación",
            evClass: "bg-purple-50 text-purple-600",
            desc: "Optimiza las fases de sueño profundo y facilita la relajación del SNC.",
            image: "/images/suplementos/recuperacion.png",
            href: "/suplementos/recuperacion"
          },
          {
            id: "omega3",
            name: "Omega 3 (EPA y DHA)",
            ev: "Evidencia Grado A",
            evClass: "bg-green-50 text-[#22C55E]",
            desc: "Potente antiinflamatorio sistémico y protector cardiovascular esencial.",
            image: "/images/suplementos/omega3.png",
            href: "/suplementos/omega3"
          },
          {
            id: "ashwagandha",
            name: "Ashwagandha (KSM-66)",
            ev: "Evidencia Grado B",
            evClass: "bg-blue-50 text-[#2563EB]",
            desc: "Adaptógeno que reduce el cortisol y mejora la gestión del estrés físico.",
            image: "/images/suplementos/ashwagandha.png",
            href: "/suplementos/ashwagandha"
          },
          {
            id: "vitaminad3",
            name: "Vitamina D3",
            ev: "Evidencia Grado A",
            evClass: "bg-green-50 text-[#22C55E]",
            desc: "Soporte hormonal e inmunológico clave para la salud general del atleta.",
            image: "/images/suplementos/vitaminad3.png",
            href: "/suplementos/vitaminad3"
          },
          {
            id: "eaas",
            name: "Aminoácidos (EAAs)",
            ev: "Evidencia Grado B",
            evClass: "bg-blue-50 text-[#2563EB]",
            desc: "Perfil completo de aminoácidos para el mantenimiento muscular intra-entreno.",
            image: "/images/suplementos/eaas.png",
            href: "/suplementos/eaas"
          }
        ].map((sup) => (
          <article
            key={sup.id}
            className="group bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="h-48 relative overflow-hidden">
              <img 
                src={sup.image} 
                alt={sup.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase shadow-sm ${sup.evClass}`}>
                  {sup.ev}
                </span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-xl font-bold text-[#111827] group-hover:text-[#2563EB] transition-colors">
                {sup.name}
              </h2>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">
                {sup.desc}
              </p>
              
              <Link 
                href={sup.href}
                className="mt-6 w-full py-3 rounded-xl bg-gray-50 group-hover:bg-[#2563EB] text-gray-700 group-hover:text-white text-sm font-bold text-center transition-all border border-gray-100 group-hover:border-transparent"
              >
                Ver Análisis Científico
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
