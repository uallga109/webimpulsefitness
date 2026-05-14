import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import GlobalSearchBar from "@/components/layout/GlobalSearchBar";
import Script from "next/script";

// Fuente principal y única: Inter
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Impulse Fitness Marketing | Modern Wellness Platform",
  description:
    "Plataforma limpia y confiable para encontrar gimnasios, entrenadores personales, rutinas basadas en evidencia y herramientas de cálculo nutricional.",
  keywords: [
    "fitness",
    "wellness",
    "gimnasios",
    "entrenadores",
    "rutinas",
    "salud",
    "impulse fitness",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" // REEMPLAZAR CON TU ID
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen bg-[#f8fafc] text-[#111827] flex flex-col selection:bg-[#2563EB] selection:text-white">
        <div className="flex min-h-screen flex-col">
          {/* Menú Lateral Izquierdo */}
          <Sidebar />

          {/* Contenedor Principal con mucho espacio en blanco (aire y separación) */}
          <main className="flex-1 flex flex-col lg:pl-72 pt-16 lg:pt-0 transition-all duration-300 ease-in-out">
            {/* BUSCADOR GLOBAL PERSISTENTE EN LA PARTE SUPERIOR (Visible en cualquier página) */}
            <div className="sticky top-16 lg:top-0 z-40 bg-[#f8fafc]/95 backdrop-blur-md border-b border-gray-200 px-6 sm:px-8 py-3.5 transition-all">
              <GlobalSearchBar />
            </div>

            {/* Texto normal (Body): ideal de 16px a 18px para garantizar mejor lectura e UX */}
            <div className="flex-1 flex flex-col w-full max-w-7xl mx-auto p-6 sm:p-8 lg:p-12 text-base sm:text-lg">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

