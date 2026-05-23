import React from "react";

export default function Cookies() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Cabecera Premium */}
      <header className="mb-12 border-b border-gray-200 pb-8 text-left">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#2563EB] mb-4 border border-blue-100">
          Uso de Cookies Transparente
        </span>
        <h1 className="text-4xl font-extrabold text-[#111827] tracking-tight sm:text-5xl">
          Política de Cookies
        </h1>
        <p className="text-gray-500 mt-3 font-medium text-sm">
          Cumplimiento de la Directiva de Privacidad de la UE (ePrivacy) • Última actualización: 23 de mayo de 2026
        </p>
      </header>

      {/* Explicación de Cookies */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
        <h2 className="text-xl font-bold text-[#111827] mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          ¿Qué es una Cookie?
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Una cookie (o galleta informática) es un archivo de texto de tamaño reducido que un servidor web descarga e instala en tu navegador o dispositivo al acceder a determinadas páginas. Las cookies permiten que el sitio recuerde información útil sobre tu visita, como tu idioma preferido, opciones de cálculo guardadas, configuraciones visuales y otros datos esenciales destinados a optimizar y hacer más cómoda tu próxima visita.
        </p>
      </div>

      {/* Contenido Legal Completo */}
      <div className="prose prose-blue max-w-none text-gray-600 space-y-10 leading-relaxed text-sm sm:text-base">
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-[#111827] mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-blue-50 text-[#2563EB] font-bold text-sm">1</span>
            Tipos de Cookies que Utiliza esta Web
          </h2>
          <p className="mb-6">
            Durante la navegación por <strong>impulsefitnessmarketing.com</strong> se emplean diversos tipos de cookies, clasificadas según su finalidad:
          </p>
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <strong className="text-[#111827] block mb-1">A. Cookies Técnicas e Indispensables (Propias)</strong>
              Son las necesarias para permitir una navegación fluida por el portal. En nuestro caso, permiten el correcto funcionamiento de las <strong>calculadoras fitness</strong> (como el cálculo del IMC, macros, porcentaje de grasa corporal y estimación de 1RM) al retener temporalmente los parámetros introducidos por el usuario durante la sesión activa. Sin ellas, el portal no funcionaría con la precisión requerida.
            </div>
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <strong className="text-[#111827] block mb-1">B. Cookies de Análisis Estadístico (Terceros)</strong>
              Bajo la tutela técnica de <strong>Google Analytics 4 (GA4)</strong>, estas cookies recopilan información de tráfico de manera completamente anónima y agregada. Nos permiten conocer qué artículos del blog, rutinas de gimnasio o guías de suplementación son los más leídos, con el único fin de seguir optimizando los contenidos y mejorar el portal para la comunidad.
            </div>
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <strong className="text-[#111827] block mb-1">C. Cookies de Publicidad Personalizada y Comportamental (Terceros)</strong>
              Integradas mediante el servicio de monetización de <strong>Google AdSense</strong>. Estas cookies estudian los hábitos de navegación global de los usuarios en internet de forma no intrusiva. Por ejemplo, si has realizado búsquedas previas de zapatillas de running o ropa de deporte, AdSense detectará dicho interés global para mostrarte anuncios relacionados en nuestra web. Su objetivo es inyectar anuncios publicitarios verdaderamente relevantes y personalizados, evitando mostrar publicidad irrepetible o no deseada.
            </div>
          </div>
        </section>

        {/* Tabla Detallada de Cookies para Google Reviewers */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm overflow-hidden">
          <h2 className="text-2xl font-bold text-[#111827] mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-blue-50 text-[#2563EB] font-bold text-sm">2</span>
            Inventario Detallado de Cookies Activas
          </h2>
          <p className="mb-6">
            A continuación, listamos las cookies exactas de terceros instaladas en nuestro dominio bajo servicios autorizados:
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-left text-xs sm:text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold text-[#111827]">Cookie</th>
                  <th scope="col" className="px-4 py-3 font-semibold text-[#111827]">Proveedor</th>
                  <th scope="col" className="px-4 py-3 font-semibold text-[#111827]">Finalidad</th>
                  <th scope="col" className="px-4 py-3 font-semibold text-[#111827]">Duración</th>
                  <th scope="col" className="px-4 py-3 font-semibold text-[#111827]">Tipo</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100 text-gray-600">
                <tr>
                  <td className="px-4 py-3.5 font-semibold text-gray-900">_ga</td>
                  <td className="px-4 py-3.5">Google Analytics</td>
                  <td className="px-4 py-3.5">Identificación y conteo de visitas únicas para analítica web.</td>
                  <td className="px-4 py-3.5">2 años</td>
                  <td className="px-4 py-3.5">Analítica</td>
                </tr>
                <tr className="bg-gray-50/30">
                  <td className="px-4 py-3.5 font-semibold text-gray-900">_ga_*</td>
                  <td className="px-4 py-3.5">Google Analytics</td>
                  <td className="px-4 py-3.5">Mantenimiento del estado de la sesión activa en la web.</td>
                  <td className="px-4 py-3.5">24 horas</td>
                  <td className="px-4 py-3.5">Analítica</td>
                </tr>
                <tr>
                  <td className="px-4 py-3.5 font-semibold text-gray-900">__gads</td>
                  <td className="px-4 py-3.5">Google AdSense</td>
                  <td className="px-4 py-3.5">Medición de interacciones y rentabilidad de campañas.</td>
                  <td className="px-4 py-3.5">13 meses</td>
                  <td className="px-4 py-3.5">Publicitaria</td>
                </tr>
                <tr className="bg-gray-50/30">
                  <td className="px-4 py-3.5 font-semibold text-gray-900">__gpi</td>
                  <td className="px-4 py-3.5">Google AdSense</td>
                  <td className="px-4 py-3.5">Gestión de frecuencia de anuncios y prevención del fraude.</td>
                  <td className="px-4 py-3.5">13 meses</td>
                  <td className="px-4 py-3.5">Publicitaria</td>
                </tr>
                <tr>
                  <td className="px-4 py-3.5 font-semibold text-gray-900">IDE / DSID</td>
                  <td className="px-4 py-3.5">DoubleClick (Google)</td>
                  <td className="px-4 py-3.5">Orientación y personalización de anuncios en base al historial del usuario.</td>
                  <td className="px-4 py-3.5">2 años</td>
                  <td className="px-4 py-3.5">Publicitaria</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Configuración y Desactivación en Navegadores */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-[#111827] mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-blue-50 text-[#2563EB] font-bold text-sm">3</span>
            ¿Cómo Configurar o Desactivar las Cookies?
          </h2>
          <p className="mb-6">
            Como usuario, tienes el pleno derecho a configurar, bloquear o desactivar las cookies instaladas en tu equipo en cualquier momento. Esto se puede realizar de manera sencilla modificando la configuración del navegador de tu ordenador o teléfono inteligente.
          </p>
          <p className="mb-6 text-sm">
            A continuación, facilitamos los enlaces a las guías de soporte oficial de los principales navegadores del mercado para que puedas ejercer dicho bloqueo de forma segura:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href="https://support.google.com/chrome/answer/95647?hl=es" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-gray-50 rounded-2xl border border-gray-100 block hover:bg-blue-50/50 hover:border-blue-200 transition-all group"
            >
              <strong className="text-[#111827] block group-hover:text-[#2563EB]">Google Chrome</strong>
              <p className="text-xs text-gray-500 mt-1">Configuración &gt; Privacidad y Seguridad &gt; Cookies de terceros</p>
            </a>

            <a 
              href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-gray-50 rounded-2xl border border-gray-100 block hover:bg-blue-50/50 hover:border-blue-200 transition-all group"
            >
              <strong className="text-[#111827] block group-hover:text-[#2563EB]">Mozilla Firefox</strong>
              <p className="text-xs text-gray-500 mt-1">Ajustes &gt; Privacidad y Seguridad &gt; Cookies y datos del sitio</p>
            </a>

            <a 
              href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-gray-50 rounded-2xl border border-gray-100 block hover:bg-blue-50/50 hover:border-blue-200 transition-all group"
            >
              <strong className="text-[#111827] block group-hover:text-[#2563EB]">Apple Safari</strong>
              <p className="text-xs text-gray-500 mt-1">Ajustes &gt; Privacidad &gt; Bloquear todas las cookies</p>
            </a>

            <a 
              href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-gray-50 rounded-2xl border border-gray-100 block hover:bg-blue-50/50 hover:border-blue-200 transition-all group"
            >
              <strong className="text-[#111827] block group-hover:text-[#2563EB]">Microsoft Edge</strong>
              <p className="text-xs text-gray-500 mt-1">Configuración &gt; Cookies y permisos del sitio &gt; Administrar cookies</p>
            </a>
          </div>

          <div className="bg-yellow-50 border border-yellow-100 p-5 rounded-2xl my-6 text-sm text-gray-700 leading-relaxed">
            <strong className="text-yellow-800 block mb-1">Nota sobre la desactivación de cookies:</strong>
            Si bloqueas o eliminas las cookies indispensables (técnicas), es muy probable que algunas de las funcionalidades interactivas de nuestro sitio web se degraden temporalmente. Por ejemplo, es posible que las calculadoras de salud fitness no retengan correctamente tus datos de entrada al refrescar la pantalla.
          </div>
        </section>
      </div>
    </div>
  );
}
