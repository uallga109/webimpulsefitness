"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface FeaturedItem {
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  icon: string;
  href: string;
}

export default function GlobalSearchBar() {
  const [catalogCategory, setCatalogCategory] = useState("Todo el catálogo");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Cerrar al hacer clic fuera del contenedor
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Enrutamiento inteligente basado en palabras clave para evitar páginas vacías
  const getSmartRoute = (text: string): string => {
    const q = text.trim().toLowerCase();
    if (q.includes("gim") || q.includes("centr") || q.includes("club") || q.includes("local")) {
      return "/gimnasios/marketing";
    }
    if (q.includes("entren") || q.includes("coach") || q.includes("person") || q.includes("marca")) {
      return "/entrenadores/marketing";
    }
    if (q.includes("calor") || q.includes("macro") || q.includes("diet") || q.includes("prote") || q.includes("nutri")) {
      return "/dietas";
    }
    if (q.includes("rutin") || q.includes("ejercic") || q.includes("crossfit") || q.includes("fuerz") || q.includes("hipertrofia") || q.includes("pecho") || q.includes("espalda")) {
      return "/rutinas";
    }
    if (q.includes("suple") || q.includes("crea") || q.includes("whey") || q.includes("proteina")) {
      return "/suplementos";
    }
    return "/herramientas";
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsFocused(false);
    router.push(getSmartRoute(searchQuery));
  };

  const handleSelectSuggestion = (text: string, customHref?: string) => {
    setSearchQuery(text);
    setIsFocused(false);
    if (customHref) {
      router.push(customHref);
    } else {
      router.push(getSmartRoute(text));
    }
  };

  // Resalta en negrita la coincidencia exacta de la cadena escrita
  const renderBoldMatch = (str: string, q: string) => {
    if (!q.trim()) return <span className="text-gray-600">{str}</span>;
    // Escapar caracteres especiales para RegExp segura
    const safeQ = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${safeQ})`, "gi");
    const parts = str.split(regex);
    return (
      <span className="text-gray-600">
        {parts.map((part, idx) =>
          part.toLowerCase() === q.toLowerCase() ? (
            <strong key={idx} className="text-[#111827] font-black">
              {part}
            </strong>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  // Motor predictivo basado en las intenciones de búsqueda
  const getSuggestions = () => {
    const q = searchQuery.trim().toLowerCase();

    // Búsquedas populares iniciales (cuando el buscador está vacío)
    if (!q) {
      return {
        popular: [
          "gimnasios madrid",
          "creatina monohidrato",
          "rutinas hipertrofia",
          "calculadora tdee",
          "entrenador personal",
          "crossfit barcelona",
          "rutina torso pierna",
          "ejercicios de pecho",
          "proteina whey",
          "gimnasios valencia",
          "dieta flexible",
        ],
      };
    }

    // Si el usuario escribe "port" (ejemplo PcComponentes)
    if (q.includes("port")) {
      return {
        featured: [
          {
            title: "Hub de Análisis Biomecánico Advance 15.6\"",
            subtitle: "Especializado en software de cinemática y control de accesos",
            badge: "PROFESIONAL",
            badgeColor: "bg-blue-600 text-white",
            icon: "📊",
            href: "/herramientas",
          },
          {
            title: "Sistema Cyborg Tracker para Rendimiento Deportivo",
            subtitle: "Análisis de vídeo VBT en tiempo real y métricas de potencia",
            badge: "ALTA GAMA",
            badgeColor: "bg-[#22C55E] text-white",
            icon: "⚡",
            href: "/entrenadores",
          },
        ],
        categories: ["Accesorios Portatiles", "Hubs/Switchs", "Tarjetas de Red", "Docks"],
        strings: [
          "portatil",
          "portatil gaming",
          "laptop",
          "portati",
          "portatil gamer",
          "portatil lenovo",
          "portatil hp",
          "laptop gaming",
          "portatil msi",
        ],
        advice: [
          "Portátil para entrenadores personales: la guía definitiva con modelos recomendados",
          "Portátil para software de gestión B2B: características, precios y compatibilidad",
          "Portátiles para biomecánicos: qué hay que tener en cuenta y mejores sensores",
          "Portátiles AERO de Gigabyte para edición de vídeo fitness: análisis y puntos fuertes",
        ],
      };
    }

    // Si el usuario escribe "pec" (petición específica del usuario)
    if (q.includes("pec")) {
      return {
        featured: [
          {
            title: "Rutina Pectoral Completa en Gimnasio (Presses y Ángulos)",
            subtitle: "Guía técnica con mancuernas, barra libre y cruces en polea",
            badge: "GRATIS",
            badgeColor: "bg-[#22C55E] text-white",
            icon: "🏋️‍♂️",
            href: "/rutinas/gimnasio",
          },
          {
            title: "Ejercicios de Pecho para Casa (Flexiones y Sobrecarga)",
            subtitle: "Progresiones sin material para hipertrofia y estimulación de fibras",
            badge: "CALISTENIA",
            badgeColor: "bg-[#2563EB] text-white",
            icon: "🏠",
            href: "/rutinas/casa",
          },
        ],
        categories: ["Rutinas para Casa", "Ejercicios de Pecho", "Musculación", "Bandas Elásticas"],
        strings: [
          "pectoral",
          "pecho en casa",
          "rutinas de pecho",
          "pectoral superior",
          "pecho inferior polea",
          "pectoral con mancuernas",
          "pecho calistenia",
          "pectoral hipertrofia",
        ],
        advice: [
          "Guía definitiva para un pectoral masivo sin dolor en los hombros",
          "Rango de repeticiones y proximidad al fallo en ejercicios de empuje",
          "¿Es necesario tocar el pecho en el press de banca para maximizar ganancias?",
          "Activación electromiográfica del pectoral superior con inclinación a 30 grados",
        ],
      };
    }

    // Filtro básico por categoría de catálogo
    const categoryFilter = catalogCategory === "Todo el catálogo" ? "" : catalogCategory.toLowerCase();

    // Si el usuario escribe "gim" o la categoría es Gimnasios
    if (q.includes("gim") || categoryFilter === "gimnasios") {
      return {
        featured: [
          {
            title: "Calculadora de ROI de Marketing",
            subtitle: "Estima el retorno de inversión y el coste de adquisición (CAC) de tu centro",
            badge: "CALCULADORA",
            badgeColor: "bg-[#2563EB] text-white",
            icon: "📊",
            href: "/gimnasios/marketing/calculadora-roi",
          },
          {
            title: "Estrategias de Captación Local B2B",
            subtitle: "Embudos de adquisición y secuencias de WhatsApp para gimnasios",
            badge: "PLAN",
            badgeColor: "bg-[#22C55E] text-white",
            icon: "📈",
            href: "/gimnasios/marketing/captacion",
          },
        ],
        categories: ["Marketing Local", "Retención de Socios", "SEO en Google Maps", "Optimización ROI"],
        strings: [
          "marketing de gimnasios",
          "calculadora roi gimnasio",
          "captacion de socios",
          "seo local para gimnasios",
          "fidelizacion de clientes",
          "fichas de google maps",
        ],
        advice: [
          "Cómo captar clientes para tu gimnasio en menos de 72 horas",
          "Claves de SEO local para aparecer el primero en Google Maps",
          "El método definitivo para reducir el churn rate en centros deportivos",
        ],
      };
    }

    // Si el usuario escribe "die", "cal" o la categoría es Dietas
    if (q.includes("die") || q.includes("cal") || categoryFilter === "dietas") {
      return {
        featured: [
          {
            title: "Calculadora de Calorías TDEE",
            subtitle: "Calcula tu gasto energético diario total con precisión científica",
            badge: "POPULAR",
            badgeColor: "bg-[#22C55E] text-white",
            icon: "🥗",
            href: "/dietas/calculadora-calorias",
          },
          {
            title: "Dieta Hipertrofia: Guía Completa",
            subtitle: "Aprende a estructurar tus macros para ganar masa muscular",
            badge: "GUÍA",
            badgeColor: "bg-[#2563EB] text-white",
            icon: "🥩",
            href: "/dietas",
          },
        ],
        categories: ["Calculadoras", "Macros", "Planes Nutricionales", "Recetas Fitness"],
        strings: [
          "dietas",
          "dieta para ganar musculo",
          "dieta para perder grasa",
          "calculadora de calorias",
          "dieta flexible",
          "dieta cetogenica",
        ],
        advice: [
          "La importancia de la adherencia en cualquier plan nutricional",
          "Cómo calcular tus macros sin volverte loco en el proceso",
          "Mitos sobre la ventana anabólica y la frecuencia de comidas",
        ],
      };
    }

    // Si el usuario escribe "rut" o la categoría es Rutinas
    if (q.includes("rut") || categoryFilter === "rutinas") {
      return {
        featured: [
          {
            title: "Generador Automático de Rutinas",
            subtitle: "Crea tu plan de entrenamiento personalizado en segundos",
            badge: "HOT",
            badgeColor: "bg-orange-500 text-white",
            icon: "⚡",
            href: "/rutinas/generador",
          },
          {
            title: "Rutina de Fuerza 5x5",
            subtitle: "El clásico para ganar fuerza base y masa muscular",
            badge: "FUERZA",
            badgeColor: "bg-gray-800 text-white",
            icon: "🏋️",
            href: "/rutinas/gimnasio",
          },
        ],
        categories: ["Rutinas Gimnasio", "Rutinas Casa", "Powerlifting", "Culturismo"],
        strings: [
          "rutinas",
          "rutina fullbody",
          "rutina torso pierna",
          "rutina de empuje traccion",
          "rutina para principiantes",
        ],
        advice: [
          "Cómo estructurar tu rutina para maximizar la hipertrofia",
          "La importancia del descanso y la recuperación entre sesiones",
          "Sobrecarga progresiva: la clave para seguir mejorando",
        ],
      };
    }

    // Si el usuario escribe "sup", "cre" o la categoría es Suplementos
    if (q.includes("sup") || q.includes("cre") || categoryFilter === "suplementos") {
      return {
        featured: [
          {
            title: "Creatina Monohidrato: Evidencia Científica",
            subtitle: "El suplemento más estudiado para la mejora del rendimiento",
            badge: "GRADO A",
            badgeColor: "bg-green-600 text-white",
            icon: "💊",
            href: "/suplementos",
          },
          {
            title: "Guía de Suplementación Básica",
            subtitle: "¿Qué suplementos valen realmente la pena?",
            badge: "INFO",
            badgeColor: "bg-[#2563EB] text-white",
            icon: "🥛",
            href: "/suplementos",
          },
        ],
        categories: ["Proteínas", "Creatinas", "Pre-entrenos", "Vitaminas"],
        strings: [
          "suplementos",
          "creatina",
          "proteina de suero",
          "pre entreno",
          "omega 3",
          "multivitaminicos",
        ],
        advice: [
          "Suplementos con mayor evidencia científica en 2024",
          "Cómo tomar creatina para maximizar sus beneficios",
          "¿Son necesarios los suplementos para progresar en el gimnasio?",
        ],
      };
    }

    // Para cualquier otra búsqueda genérica
    return {
      featured: [
        {
          title: "Marketing para Gimnasios",
          subtitle: "Calculadoras de ROI, plantillas y planes B2B de captación",
          badge: "B2B",
          badgeColor: "bg-[#2563EB] text-white",
          icon: "🏢",
          href: "/gimnasios/marketing",
        },
        {
          title: "Marketing para Entrenadores",
          subtitle: "Calculadoras de tarifas, automatizaciones y playbooks",
          badge: "B2B",
          badgeColor: "bg-[#22C55E] text-white",
          icon: "🚀",
          href: "/entrenadores/marketing",
        },
      ],
      categories: ["Calculadoras B2B", "Estrategia Local", "Planes de Entrenamiento", "Herramientas de Salud"],
      strings: [
        searchQuery,
        `marketing para ${searchQuery}`,
        `calculadora de ${searchQuery}`,
        `rutinas de ${searchQuery}`,
        `estrategias de ${searchQuery}`,
        `herramientas ${searchQuery}`,
      ],
      advice: [
        `Cómo integrar ${searchQuery} en tu planificación semanal`,
        `Últimos estudios sobre la efectividad de ${searchQuery}`,
        `Errores comunes al planificar ${searchQuery}`,
      ],
    };
  };

  const results = getSuggestions();

  return (
    <div ref={containerRef} className="relative w-full max-w-4xl mx-auto z-50">
      {/* Contenedor principal de la barra de búsqueda estilo PcComponentes */}
      <form
        onSubmit={handleSearchSubmit}
        className="flex flex-col sm:flex-row items-stretch bg-white rounded-xl sm:rounded-2xl border border-gray-300 shadow-sm focus-within:ring-2 focus-within:ring-[#2563EB] focus-within:border-transparent transition-all overflow-hidden"
      >
        {/* Selector izquierdo de catálogo */}
        <div className="relative flex items-center bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-200 shrink-0">
          <select
            value={catalogCategory}
            onChange={(e) => setCatalogCategory(e.target.value)}
            className="appearance-none bg-transparent pl-4 pr-9 py-3 text-sm sm:text-base font-semibold text-gray-700 focus:outline-none cursor-pointer w-full sm:w-auto"
          >
            <option value="Todo el catálogo">Todo el catálogo</option>
            <option value="Gimnasios">Gimnasios</option>
            <option value="Entrenadores">Entrenadores</option>
            <option value="Rutinas">Rutinas</option>
            <option value="Dietas">Dietas</option>
            <option value="Suplementos">Suplementos</option>
          </select>
          {/* Flecha personalizada */}
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Input principal de texto */}
        <div className="flex-1 flex items-center relative pl-4 pr-3 py-2.5 sm:py-3 bg-white">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsFocused(true);
            }}
            onFocus={() => setIsFocused(true)}
            placeholder="Buscar en todo el ecosistema fitness..."
            className="w-full text-base sm:text-lg text-[#111827] placeholder-gray-400 focus:outline-none bg-transparent"
          />
          
          {/* Botón con icono de Lupa a la derecha */}
          <button
            type="submit"
            className="p-2 text-gray-600 hover:text-[#2563EB] transition-colors focus:outline-none"
            aria-label="Ejecutar búsqueda"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </form>

      {/* POPVER / CAJÓN INTELIGENTE DESPLEGABLE */}
      {isFocused && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden z-50 animate-fadeIn">
          {/* ESTADO 1: VACÍO (Muestra LO MÁS BUSCADO) */}
          {results.popular ? (
            <div className="p-6">
              <span className="text-sm font-black tracking-wider text-[#111827] uppercase block mb-3">
                LO MÁS BUSCADO
              </span>
              <div className="flex flex-wrap gap-2">
                {results.popular.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => handleSelectSuggestion(tag)}
                    className="px-4 py-2 rounded-xl bg-gray-50 hover:bg-blue-50 text-[#111827] hover:text-[#2563EB] text-sm font-medium border border-gray-200 hover:border-blue-100 transition-all text-left"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* ESTADO 2: CON RESULTADOS PREDICTIVOS (Destacados, Categorías, Negrita, Consejos) */
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
              {/* BLOQUE A: DESTACADOS */}
              {results.featured && results.featured.length > 0 && (
                <div>
                  <span className="text-sm font-black tracking-wider text-[#111827] uppercase block mb-3">
                    DESTACADOS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {results.featured.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setIsFocused(false)}
                        className="flex items-start space-x-3 p-3 rounded-xl bg-gray-50/70 hover:bg-gray-50 border border-gray-100 transition-all group block"
                      >
                        <span className="text-2xl sm:text-3xl p-2 rounded-lg bg-white shadow-xs shrink-0">
                          {item.icon}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <span className={`px-1.5 py-0.5 rounded text-[11px] font-black tracking-wider ${item.badgeColor}`}>
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-sm font-bold text-[#111827] group-hover:text-[#2563EB] transition-colors mt-1 line-clamp-2">
                            {item.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                            {item.subtitle}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* BLOQUE B: EN CATEGORÍA */}
              {results.categories && results.categories.length > 0 && (
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center space-x-1 mb-2">
                    <span className="text-gray-400 text-sm">└</span>
                    <span className="text-sm font-semibold text-gray-500">En categoría:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pl-3">
                    {results.categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => handleSelectSuggestion(cat)}
                        className="px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-600 text-sm font-medium transition-colors"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* BLOQUE C: CADENAS DE SUGERENCIAS CON NEGRITA PREDICTIVA */}
              {results.strings && results.strings.length > 0 && (
                <div className="border-t border-gray-100 pt-4">
                  <ul className="space-y-1">
                    {results.strings.map((str, idx) => (
                      <li key={idx}>
                        <button
                          type="button"
                          onClick={() => handleSelectSuggestion(str)}
                          className="w-full text-left py-1.5 px-2 rounded-lg hover:bg-blue-50/50 transition-colors text-base sm:text-lg block"
                        >
                          {renderBoldMatch(str, searchQuery.trim())}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* BLOQUE D: CONSEJOS (Artículos de ayuda) */}
              {results.advice && results.advice.length > 0 && (
                <div className="border-t border-gray-100 pt-4">
                  <span className="text-sm font-black tracking-wider text-[#111827] uppercase block mb-3">
                    CONSEJOS
                  </span>
                  <ul className="space-y-2.5">
                    {results.advice.map((adv, idx) => (
                      <li key={idx}>
                        <Link
                          href="/noticias"
                          onClick={() => setIsFocused(false)}
                          className="text-sm text-gray-600 hover:text-[#2563EB] hover:underline transition-colors block leading-relaxed"
                        >
                          {adv}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Pie del Popover */}
          <div className="bg-gray-50/80 px-6 py-2.5 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-500">
              Presiona <strong className="text-[#111827]">Enter</strong> para ver la página recomendada del ecosistema
            </span>
            <button
              type="button"
              onClick={() => setIsFocused(false)}
              className="text-xs font-bold text-[#2563EB] hover:underline"
            >
              Cerrar sugerencias
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
