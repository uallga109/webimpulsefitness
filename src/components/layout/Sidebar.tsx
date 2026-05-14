"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SubMenuItem {
  title: string;
  href: string;
}

interface MenuItem {
  id: string;
  title: string;
  href: string;
  icon: React.ReactNode;
  subItems?: SubMenuItem[];
}

export default function Sidebar() {
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Iconos premium limpios y neutros
  const menuItems: MenuItem[] = [
    {
      id: "gimnasios",
      title: "Gimnasios y Centros",
      href: "/gimnasios",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      subItems: [
        { title: "Inicio Gimnasios", href: "/gimnasios" },
        { title: "Buscador de gimnasios", href: "/gimnasios/buscador" },
        { title: "Marketing para gimnasios", href: "/gimnasios/marketing" },
      ],
    },
    {
      id: "entrenadores",
      title: "Entrenadores Personales",
      href: "/entrenadores",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      subItems: [
        { title: "Inicio Entrenadores", href: "/entrenadores" },
        { title: "Buscador de entrenadores", href: "/entrenadores/buscador" },
        { title: "Marketing para entrenadores", href: "/entrenadores/marketing" },
      ],
    },
    {
      id: "rutinas",
      title: "Rutinas",
      href: "/rutinas",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      subItems: [
        { title: "Inicio Rutinas", href: "/rutinas" },
        { title: "Ejercicios para gimnasios", href: "/rutinas/gimnasio" },
        { title: "Ejercicios para casa", href: "/rutinas/casa" },
        { title: "Generador de rutinas", href: "/rutinas/generador" },
      ],
    },
    {
      id: "herramientas",
      title: "Herramientas fitness",
      href: "/herramientas",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      subItems: [
        { title: "Explorar todas", href: "/herramientas" },
        { title: "Calculadora IMC", href: "/herramientas/calculadora-imc" },
        { title: "Grasa Corporal", href: "/herramientas/calculadora-grasa-corporal" },
        { title: "Masa Muscular", href: "/herramientas/calculadora-masa-muscular" },
        { title: "Calculadora 1RM", href: "/herramientas/calculadora-1rm" },
        { title: "Macros", href: "/herramientas/calculadora-macros" },
      ],
    },
    {
      id: "dietas",
      title: "Dietas",
      href: "/dietas",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      subItems: [
        { title: "Inicio Dietas", href: "/dietas" },
        { title: "Calculadora de calorías", href: "/dietas/calculadora-calorias" },
        { title: "Calculadora de proteínas", href: "/dietas/calculadora-proteinas" },
      ],
    },
    {
      id: "suplementos",
      title: "Suplementos",
      href: "/suplementos",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      id: "marcas",
      title: "Marcas",
      href: "/marcas",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143Z" />
        </svg>
      ),
    },
    {
      id: "eventos",
      title: "Eventos fitness",
      href: "/eventos",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "noticias",
      title: "Noticias",
      href: "/noticias",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
    },
    {
      id: "deportes",
      title: "Deportes",
      href: "/deportes",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      subItems: [
        { title: "Inicio Deportes", href: "/deportes" },
        { title: "Ritmo Running", href: "/herramientas/calculadora-ritmo-running" },
        { title: "VO2 Max", href: "/herramientas/calculadora-vo2-max" },
        { title: "Gasto Ciclismo", href: "/herramientas/calculadora-gasto-ciclismo" },
        { title: "Hidratación", href: "/herramientas/calculadora-hidratacion" },
      ],
    },
  ];

  const renderNavItems = () => (
    <div className="flex flex-col space-y-1">
      {menuItems.map((item) => {
        const hasSubItems = item.subItems && item.subItems.length > 0;
        const isOpen = openSection === item.id;
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <div key={item.id} className="flex flex-col">
            {hasSubItems ? (
              <button
                onClick={() => toggleSection(item.id)}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-200 group ${
                  isActive
                    ? "bg-blue-50 text-[#2563EB] font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#111827]"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className={`transition-colors duration-200 ${isActive ? "text-[#2563EB]" : "text-gray-400 group-hover:text-[#2563EB]"}`}>
                    {item.icon}
                  </span>
                  <span className="text-base tracking-wide text-left">{item.title}</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#2563EB]" : "text-gray-400"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ) : (
              <Link
                href={item.href}
                onClick={closeMobileMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-200 group ${
                  isActive
                    ? "bg-blue-50 text-[#2563EB] font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#111827]"
                }`}
              >
                <span className={`transition-colors duration-200 ${isActive ? "text-[#2563EB]" : "text-gray-400 group-hover:text-[#2563EB]"}`}>
                  {item.icon}
                </span>
                <span className="text-base tracking-wide">{item.title}</span>
              </Link>
            )}

            {/* Submenú desplegable con mucho aire y separación */}
            {hasSubItems && isOpen && (
              <div className="mt-1 mb-2 ml-9 flex flex-col space-y-1 border-l border-gray-100 pl-3 animate-fadeIn">
                {item.subItems!.map((sub) => {
                  const isSubActive = pathname === sub.href;
                  return (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={closeMobileMenu}
                      className={`text-sm py-2 px-3 rounded-xl transition-all duration-150 flex items-center space-x-2 ${
                        isSubActive
                          ? "text-[#2563EB] font-semibold bg-blue-50/50"
                          : "text-gray-500 hover:text-[#111827] hover:bg-gray-50"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isSubActive ? "bg-[#2563EB]" : "bg-gray-300"}`} />
                      <span>{sub.title}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      {/* VERSIÓN MÓVIL: BARRA SUPERIOR */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md border-b border-gray-200 px-4 flex items-center justify-between z-40">
        <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
          <span className="text-xl font-black tracking-tight text-[#111827]">
            IMPULSE
          </span>
          <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-blue-50 text-[#2563EB] border border-blue-100">
            FITNESS
          </span>
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-xl text-gray-600 hover:text-[#111827] hover:bg-gray-50 transition-colors focus:outline-none"
          aria-label="Abrir menú"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* OVERLAY DE FONDO (MÓVIL) */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={closeMobileMenu}
        />
      )}

      {/* CAJÓN LATERAL (MÓVIL) */}
      <aside
        className={`lg:hidden fixed top-0 left-0 bottom-0 w-72 bg-white border-r border-gray-200 z-50 flex flex-col transition-transform duration-300 ease-in-out shadow-2xl ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-100">
          <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
            <span className="text-xl font-black tracking-tight text-[#111827]">IMPULSE</span>
            <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-blue-50 text-[#2563EB]">FITNESS</span>
          </Link>
          <button onClick={closeMobileMenu} className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-3 custom-scrollbar">
          {renderNavItems()}
        </div>

        <div className="p-4 border-t border-gray-100 bg-gray-50/50">
          <div className="flex items-center space-x-3 px-2 py-1.5">
            {/* Color secundario: Verde fitness suave (#22C55E) para indicar éxito/salud */}
            <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
            <span className="text-xs text-gray-500 font-medium">Plataforma Activa</span>
          </div>
        </div>
      </aside>

      {/* VERSIÓN ESCRITORIO: SIDEBAR FIJO SOBRE FONDO BLANCO */}
      <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 w-72 bg-white border-r border-gray-200 flex-col z-30">
        <div className="h-20 flex flex-col justify-center px-6 border-b border-gray-100">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-black tracking-tight text-[#111827]">
              IMPULSE
            </span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-lg bg-blue-50 text-[#2563EB] border border-blue-100 transition-colors">
              FITNESS
            </span>
          </Link>
          <span className="text-xs font-semibold text-gray-400 tracking-wider mt-0.5">
            MODERN WELLNESS PLATFORM
          </span>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-3 custom-scrollbar">
          {renderNavItems()}
        </div>

        {/* Tarjeta inferior limpia con diseño premium y radio ideal */}
        <div className="p-4 border-t border-gray-100 bg-white">
          <div className="rounded-2xl p-4 bg-gray-50 border border-gray-100 flex flex-col items-start shadow-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E] mb-2" />
            <p className="text-sm font-bold text-[#111827] mb-1">Impulse Hub</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-3">
              Encuentra centros y rutinas con datos basados en evidencia.
            </p>
            {/* Color primario: Azul eléctrico moderado (#2563EB) para botones y enlaces */}
            <Link
              href="/gimnasios/buscador"
              className="inline-flex items-center justify-center w-full py-2.5 px-3 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-medium text-sm shadow-sm transition-all"
            >
              Explorar directorio
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
