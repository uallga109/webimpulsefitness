import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import GlobalSearchBar from "@/components/layout/GlobalSearchBar";
import Footer from "@/components/layout/Footer";
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
    default: "Impulse Fitness | Marketing de Élite y Ciencias del Deporte",
  },
  description:
    "Plataforma premium de marketing digital para gimnasios y entrenadores, con herramientas de biomecánica, nutrición y rendimiento basadas en evidencia científica.",
  keywords: [
    "fitness B2B",
    "marketing para gimnasios",
    "marketing entrenadores",
    "rutinas casa",
    "suplementos deportivos",
    "calculadora calorías",
    "nutrición",
    "impulse fitness",
  ],
  authors: [{ name: "Impulse Fitness Team" }],
  openGraph: {
    title: "Impulse Fitness | Premium B2B & Science-Based Wellness",
    description: "Ecosistema B2B de crecimiento fitness y nutrición científica.",
    url: "https://impulsefitnessmarketing.com",
    siteName: "Impulse Fitness",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Impulse Fitness",
    description: "Ecosistema B2B de crecimiento fitness y nutrición científica.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "9vG_QauSG6Wxi4GedqoV7ctobOxUonOOdaUDzfnj4GY",
  },
  other: {
    "google-adsense-account": "ca-pub-5726101688695268",
  },
  icons: {
    icon: "/icon.png",
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
        {/* 
            Google AdSense (Carga clásica)
            Usamos tag <script> estándar en lugar de next/script para evitar 
            el error 'data-nscript' que bloquea la validación de Google.
        */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5726101688695268"
          crossOrigin="anonymous"
        ></script>

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

        {/* 🛡️ BLOQUE LEGAL: CMP (Consent Management Platform) */}
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

            {/* PIE DE PÁGINA (Footer) */}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}

