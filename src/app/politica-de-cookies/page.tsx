import React from "react";

export default function Cookies() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 sm:px-8">
      <header className="mb-12 border-b border-gray-100 pb-8">
        <h1 className="text-4xl font-black text-[#111827] tracking-tight">Política de Cookies</h1>
        <p className="text-gray-500 mt-2 font-medium italic">Última actualización: 14 de mayo de 2024</p>
      </header>

      <div className="prose prose-blue max-w-none text-gray-600 space-y-8 leading-relaxed">
        <section>
          <h2 className="text-2xl font-black text-[#111827] mb-4">1. ¿Qué son las cookies?</h2>
          <p>
            Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-[#111827] mb-4">2. ¿Qué tipos de cookies utiliza esta página web?</h2>
          <div className="space-y-4">
            <p><strong>Cookies de análisis:</strong> Son aquellas que, tratadas por nosotros o por terceros (Google Analytics), nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.</p>
            <p><strong>Cookies publicitarias:</strong> Son aquellas que, tratadas por nosotros o por terceros (Google AdSense), permiten gestionar de la forma más eficaz posible la oferta de los espacios publicitarios que hay en la página web, adecuando el contenido del anuncio al contenido del servicio solicitado o al uso que realice de nuestra página web.</p>
            <p><strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través del área restringida y la utilización de sus diferentes funciones.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-[#111827] mb-4">3. Cookies de terceros</h2>
          <p>
            Este sitio web utiliza servicios de terceros para recopilar información con fines estadísticos y de uso de la web. En particular, usamos:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Google Analytics:</strong> Cookies utilizadas para analizar el tráfico y comportamiento de los usuarios en la web.</li>
            <li><strong>Google AdSense:</strong> Cookies utilizadas para mejorar la publicidad. Se suelen utilizar para orientar la publicidad según el contenido que es relevante para un usuario, mejorar los informes de rendimiento de la campaña y evitar mostrar anuncios que el usuario ya haya visto.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-[#111827] mb-4">4. Desactivación y eliminación de cookies</h2>
          <p>
            Tienes la opción de permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en su ordenador:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="font-bold text-[#111827]">Google Chrome</p>
              <p className="text-xs mt-1">Configuración {">"} Privacidad {">"} Cookies</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="font-bold text-[#111827]">Mozilla Firefox</p>
              <p className="text-xs mt-1">Opciones {">"} Privacidad {">"} Historial</p>
            </div>
          </div>
          <p className="mt-6 text-sm italic">
            Si no acepta las cookies es posible que el sitio web no funcione correctamente.
          </p>
        </section>
      </div>
    </div>
  );
}
