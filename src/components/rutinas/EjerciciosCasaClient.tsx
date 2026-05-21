"use client";

import React, { useState } from "react";
import Link from "next/link";

type Category = "Todos" | "Sin Material" | "Con Accesorios" | "Cardio" | "Movilidad";

interface Exercise {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  tag: string;
  categories: Category[];
  icon: string;
  color: string;
  href: string;
  image?: string;
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Entrenamiento en Suspensión (TRX)",
    subtitle: "Tensión Estabilizadora",
    desc: "Usa la gravedad y tu peso corporal para trabajar el core, la estabilidad y la fuerza de tracción y empuje en todos los ángulos posibles.",
    tag: "Anclaje en cualquier puerta",
    categories: ["Con Accesorios"],
    icon: "⛓️",
    color: "bg-blue-50 text-[#2563EB]",
    href: "/rutinas/casa/trx",
    image: "/images/ejercicios/trx.png"
  },
  {
    id: 2,
    title: "Pesas Rusas (Kettlebells)",
    subtitle: "Potencia Funcional",
    desc: "Combina entrenamiento cardiovascular y de fuerza balística con swings, levantamientos turcos y sentadillas goblet.",
    tag: "Fuerza y cardio simultáneos",
    categories: ["Con Accesorios", "Cardio"],
    icon: "💣",
    color: "bg-orange-50 text-orange-600",
    href: "/rutinas/casa/kettlebells",
    image: "/images/ejercicios/kettlebells.png"
  },
  {
    id: 3,
    title: "Barra de Dominadas",
    subtitle: "Tracción Vertical",
    desc: "El accesorio rey para construir una espalda en forma de V y bíceps fuertes desde el marco de tu puerta.",
    tag: "Desarrollo de fuerza pura",
    categories: ["Con Accesorios"],
    icon: "🧗",
    color: "bg-gray-100 text-gray-900",
    href: "/rutinas/casa/barra-dominadas",
    image: "/images/ejercicios/barra_dominadas.png"
  },
  {
    id: 4,
    title: "Cardio HIIT (Sin Impacto)",
    subtitle: "Acondicionamiento Metabólico",
    desc: "Quema calorías en tiempo récord con rutinas de alta intensidad adaptadas para no saltar y no molestar a los vecinos de abajo.",
    tag: "Alta quema calórica",
    categories: ["Sin Material", "Cardio"],
    icon: "🔥",
    color: "bg-red-50 text-red-600",
    href: "/rutinas/casa/hiit-casa",
    image: "/images/ejercicios/hiit_casa.png"
  },
  {
    id: 5,
    title: "Yoga y Movilidad",
    subtitle: "Flexibilidad y Rango",
    desc: "Recupera tu rango de movimiento, elimina dolores posturales generados por el teletrabajo y fortalece tendones desde tu esterilla.",
    tag: "Recuperación activa y salud",
    categories: ["Sin Material", "Movilidad"],
    icon: "🧘",
    color: "bg-green-50 text-[#22C55E]",
    href: "/rutinas/casa/yoga-movilidad",
    image: "/images/ejercicios/yoga_movilidad.png"
  },
  {
    id: 6,
    title: "Discos Deslizadores (Sliders)",
    subtitle: "Fricción y Control",
    desc: "Convierte el suelo en una superficie de inestabilidad para maximizar la tensión en abdominales, glúteos e isquiotibiales.",
    tag: "Tensión continua del core",
    categories: ["Con Accesorios"],
    icon: "🥏",
    color: "bg-purple-50 text-purple-600",
    href: "/rutinas/casa/sliders",
    image: "/images/ejercicios/sliders.png"
  },
  {
    id: 7,
    title: "Mochila Lastrada",
    subtitle: "Sobrecarga Improvisada",
    desc: "Carga libros o botellas de agua en una mochila estándar para añadir kilos reales a tus flexiones, sentadillas y remos.",
    tag: "Resistencia a coste cero",
    categories: ["Sin Material"],
    icon: "🎒",
    color: "bg-yellow-50 text-yellow-600",
    href: "/rutinas/casa/mochila-lastrada",
    image: "/images/ejercicios/mochila_lastrada.png"
  },
  {
    id: 8,
    title: "Pilates de Suelo (Mat Pilates)",
    subtitle: "Control Postural",
    desc: "Trabajo profundo de la musculatura estabilizadora del tronco y alineación de la columna sin necesidad de máquinas.",
    tag: "Fuerza interna y postura",
    categories: ["Sin Material", "Movilidad"],
    icon: "🤸",
    color: "bg-indigo-50 text-indigo-600",
    href: "/rutinas/casa/pilates-suelo",
    image: "/images/ejercicios/pilates_suelo.png"
  },
  {
    id: 9,
    title: "Miniparalelas (Parallettes)",
    subtitle: "Empuje Avanzado",
    desc: "Eleva tu calistenia casera. Desarrolla fuerza masiva en hombros y tríceps mediante fondos profundos, L-sits y flexiones en déficit.",
    tag: "Dominio del peso corporal",
    categories: ["Con Accesorios"],
    icon: "🧱",
    color: "bg-slate-100 text-slate-800",
    href: "/rutinas/casa/miniparalelas",
    image: "/images/ejercicios/miniparalelas.png"
  },
  {
    id: 10,
    title: "Salto a la Comba",
    subtitle: "Resistencia Cardiovascular",
    desc: "El acondicionamiento cardiovascular por excelencia de los boxeadores. 10 minutos intensos equivalen a 30 de carrera continua.",
    tag: "Coordinación y agilidad",
    categories: ["Con Accesorios", "Cardio"],
    icon: "➰",
    color: "bg-rose-50 text-rose-600",
    href: "/rutinas/casa/salto-comba",
    image: "/images/ejercicios/salto_comba.png"
  },
  {
    id: 11,
    title: "Entrenamiento Isométrico",
    subtitle: "Tensión sin Movimiento",
    desc: "Contracciones sostenidas sin cambiar la longitud del músculo. Sentadillas contra la pared y planchas para resistencia extrema.",
    tag: "Cero impacto articular",
    categories: ["Sin Material"],
    icon: "🛑",
    color: "bg-emerald-50 text-emerald-600",
    href: "/rutinas/casa/entrenamiento-isometrico",
    image: "/images/ejercicios/isometrico.png"
  },
  {
    id: 12,
    title: "Fitball (Pelota Suiza)",
    subtitle: "Inestabilidad Controlada",
    desc: "Usa esta base inestable para hacer press, curl femoral o planchas, forzando al cuerpo a reclutar el doble de fibras estabilizadoras.",
    tag: "Fortalecimiento pélvico y lumbar",
    categories: ["Con Accesorios"],
    icon: "🔵",
    color: "bg-cyan-50 text-cyan-600",
    href: "/rutinas/casa/fitball",
    image: "/images/ejercicios/fitball.png"
  },
  {
    id: 13,
    title: "Peso Corporal (Calistenia)",
    subtitle: "Dominio Absoluto",
    desc: "La base de todo. Antes de mover peso externo, debes ser capaz de mover tu propio cuerpo en el espacio con control total.",
    tag: "Sin material requerido",
    categories: ["Sin Material"],
    icon: "👤",
    color: "bg-violet-50 text-violet-600",
    href: "/rutinas/casa/peso-corporal",
    image: "/images/ejercicios/peso_corporal.png"
  },
  {
    id: 14,
    title: "Bandas Elásticas",
    subtitle: "Resistencia Variable",
    desc: "Simulación de poleas y estímulo continuo. Proporcionan resistencia en cualquier plano de movimiento por una fracción del precio.",
    tag: "Gimnasio portátil definitivo",
    categories: ["Con Accesorios"],
    icon: "🎗️",
    color: "bg-fuchsia-50 text-fuchsia-600",
    href: "/rutinas/casa/bandas-elasticas",
    image: "/images/ejercicios/trx.png"
  },
  {
    id: 15,
    title: "Mancuernas Ajustables",
    subtitle: "Sobrecarga de Oro",
    desc: "El estándar para la hipertrofia en casa. Permiten aplicar sobrecarga progresiva añadiendo kilos medibles semana a semana.",
    tag: "Máximo estímulo muscular",
    categories: ["Con Accesorios"],
    icon: "🏋️",
    color: "bg-neutral-100 text-neutral-800",
    href: "/rutinas/casa/mancuernas-ajustables",
    image: "/images/ejercicios/brazos.png"
  }
];

export default function EjerciciosCasaClient() {
  const [filter, setFilter] = useState<Category>("Todos");

  const filteredExercises = filter === "Todos" 
    ? exercises 
    : exercises.filter(ex => ex.categories.includes(filter));

  const filters: Category[] = ["Todos", "Sin Material", "Con Accesorios", "Cardio", "Movilidad"];

  return (
    <div className="space-y-10">
      {/* Menu de Filtros Estilo Pastilla */}
      <div className="flex flex-wrap gap-3 pb-4">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
              filter === f
                ? "bg-[#2563EB] text-white border-[#2563EB] shadow-lg shadow-blue-100"
                : "bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-900"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid de Ejercicios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
        {filteredExercises.map((ex) => (
          <Link
            key={ex.id}
            href={ex.href}
            className="group bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col text-left"
          >
            {ex.image ? (
              <div className="h-48 overflow-hidden relative">
                <img src={ex.image} alt={ex.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" />
                <div className="absolute top-4 left-4">
                  <div className={`w-10 h-10 rounded-xl ${ex.color.split(' ')[0]} flex items-center justify-center text-xl shadow-md`}>
                    {ex.icon}
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-8 pb-0">
                <div className={`w-14 h-14 rounded-2xl ${ex.color.split(' ')[0]} flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:rotate-12 transition-transform`}>
                  {ex.icon}
                </div>
              </div>
            )}
            
            <div className="p-8 pt-6 flex flex-col flex-1">
              <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider self-start ${ex.color}`}>
                {ex.subtitle}
              </span>
              <h3 className="text-xl font-black text-[#111827] mt-4 mb-3 leading-tight group-hover:text-[#2563EB] transition-colors">
                {ex.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                {ex.desc}
              </p>
              
              <div className="pt-6 border-t border-gray-50 mt-auto">
                <div className="flex items-center space-x-2 text-xs font-bold text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                  <span>{ex.tag}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredExercises.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <p className="text-gray-400 font-medium">No se encontraron ejercicios en esta categoría.</p>
        </div>
      )}
    </div>
  );
}
