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
  title: {
    template: "%s | Impulse Fitness",
    default: "Impulse Fitness | El mayor buscador fitness y nutrición",
  },
  description:
    "Plataforma líder en fitness: encuentra gimnasios, rutinas de entrenamiento, dietas personalizadas y suplementación basada en evidencia científica.",
  keywords: [
    "fitness",
    "gimnasios",
    "rutinas casa",
    "suplementos deportivos",
    "calculadora calorías",
    "nutrición",
    "impulse fitness",
  ],
  authors: [{ name: "Impulse Fitness Team" }],
  openGraph: {
    title: "Impulse Fitness | Modern Wellness Platform",
    description: "Tu guía definitiva para el entrenamiento y la salud.",
    url: "https://impulsefitnessmarketing.com",
    siteName: "Impulse Fitness",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Impulse Fitness",
    description: "El mayor buscador fitness del mercado.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "9vG_QauSG6Wxi4GedqoV7ctobOxUonOOdaUDzfnj4GY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* 🛡️ BLOQUE LEGAL: CMP (Consent Management Platform) 
            Pega aquí el script de tu banner de cookies certificado por la IAB (Cookiebot, Quantcast, etc.)
            Requerido para cumplir con RGPD y mostrar anuncios de AdSense en Europa.
        */}
        
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google Analytics 4 (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
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

