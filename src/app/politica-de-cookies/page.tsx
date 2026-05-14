import React from "react";

export default function Cookies() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-black text-gray-900 mb-8">Política de Cookies</h1>
      <div className="prose prose-blue lg:prose-xl text-gray-600 space-y-6">
        <p>
          Este sitio web utiliza cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-800 mt-8">¿Qué es una cookie?</h2>
        <p>Una cookie es un pequeño archivo que se almacena en el navegador del usuario al visitar una página web.</p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8">Cookies utilizadas en este sitio</h2>
        <ul className="list-disc pl-6">
          <li><strong>Técnicas:</strong> Necesarias para el funcionamiento de la web.</li>
          <li><strong>Analíticas:</strong> Google Analytics (para estadísticas de tráfico).</li>
          <li><strong>Publicitarias:</strong> Google AdSense (para mostrar anuncios relevantes).</li>
        </ul>

        <p className="italic text-gray-400">Esta política de cookies es obligatoria según la LSSI-CE y el RGPD para el uso de AdSense.</p>
      </div>
    </div>
  );
}
