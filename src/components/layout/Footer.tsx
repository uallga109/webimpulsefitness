import React from "react";
import Link from "next/link";

/**
 * Footer minimalista y elegante para la plataforma "Modern Wellness".
 * Incluye branding, copyright dinámico y enlaces legales.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-100 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          {/* Columna Izquierda: Branding */}
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center text-white font-black text-lg shadow-sm">
                I
              </div>
              <span className="text-xl font-black text-[#111827] tracking-tight">
                Impulse <span className="text-[#2563EB]">Fitness</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              El ecosistema fitness definitivo respaldado por la ciencia y diseñado para el rendimiento humano.
            </p>
            <p className="text-xs text-gray-400 font-medium pt-2">
              © {currentYear} Impulse Fitness Marketing. Todos los derechos reservados.
            </p>
          </div>

          {/* Columna Derecha: Enlaces Legales */}
          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            <Link 
              href="/aviso-legal" 
              className="text-sm font-bold text-gray-500 hover:text-[#2563EB] transition-colors"
            >
              Aviso Legal
            </Link>
            <Link 
              href="/politica-de-privacidad" 
              className="text-sm font-bold text-gray-500 hover:text-[#2563EB] transition-colors"
            >
              Privacidad
            </Link>
            <Link 
              href="/politica-de-cookies" 
              className="text-sm font-bold text-gray-500 hover:text-[#2563EB] transition-colors"
            >
              Cookies
            </Link>
          </nav>

        </div>

        {/* Separador sutil inferior */}
        <div className="mt-12 pt-8 border-t border-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <span>Evidence Based</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span>Health Tech</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span>Premium UI</span>
          </div>
          <div className="text-[10px] font-bold text-gray-300 uppercase tracking-tighter">
            Designed for Excellence
          </div>
        </div>
      </div>
    </footer>
  );
}
