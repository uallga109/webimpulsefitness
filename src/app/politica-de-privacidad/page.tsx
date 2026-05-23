import React from "react";

export default function Privacidad() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Cabecera Premium */}
      <header className="mb-12 border-b border-gray-200 pb-8 text-left">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 mb-4 border border-emerald-100">
          Protección de Datos Activa (RGPD)
        </span>
        <h1 className="text-4xl font-extrabold text-[#111827] tracking-tight sm:text-5xl">
          Política de Privacidad
        </h1>
        <p className="text-gray-500 mt-3 font-medium text-sm">
          De conformidad con el Reglamento General de Protección de Datos (RGPD) • Última actualización: 23 de mayo de 2026
        </p>
      </header>

      {/* Introducción de Confianza */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
        <h2 className="text-xl font-bold text-[#111827] mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Compromiso con su Privacidad
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          En <strong>Impulse Fitness Marketing</strong> nos tomamos muy en serio la seguridad y confidencialidad de tus datos personales. Esta Política de Privacidad describe de manera totalmente transparente cómo recopilamos, tratamos, protegemos y almacenamos la información que se genera al navegar por nuestro portal <strong>impulsefitnessmarketing.com</strong> o al hacer uso de nuestras calculadoras y formularios.
        </p>
      </div>

      {/* Contenido Legal Detallado */}
      <div className="prose prose-emerald max-w-none text-gray-600 space-y-10 leading-relaxed text-sm sm:text-base">
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-[#111827] mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 font-bold text-sm">1</span>
            Responsable del Tratamiento de sus Datos
          </h2>
          <p className="mb-4">
            El titular y responsable único del tratamiento de los datos recabados en este sitio web es:
          </p>
          <ul className="list-none space-y-2.5 bg-gray-50/50 p-5 rounded-2xl border border-gray-100 text-sm">
            <li><strong>Denominación comercial:</strong> Impulse Fitness Marketing</li>
            <li><strong>Titular Responsable:</strong> Luis García</li>
            <li><strong>N.I.F. / D.N.I.:</strong> 54142907X</li>
            <li><strong>País de Operación:</strong> España</li>
            <li><strong>Correo electrónico de contacto:</strong> <a href="mailto:impulsefitnessmarketing1@gmail.com" className="text-[#2563EB] font-semibold hover:underline">impulsefitnessmarketing1@gmail.com</a></li>
          </ul>
        </section>

        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-[#111827] mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 font-bold text-sm">2</span>
            ¿Qué Datos Recopilamos y de qué Forma?
          </h2>
          <p className="mb-4">
            Recopilamos la información mínima imprescindible para garantizar la funcionalidad y optimización técnica del sitio web. Las vías de obtención de información son las siguientes:
          </p>
          <div className="space-y-4 text-sm sm:text-base">
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <strong className="text-[#111827] block mb-1">A. Datos facilitados directamente por el usuario:</strong>
              Si te pones en contacto con nosotros a través de nuestro correo electrónico de contacto (<a href="mailto:impulsefitnessmarketing1@gmail.com" className="text-[#2563EB] hover:underline">impulsefitnessmarketing1@gmail.com</a>), o en el futuro mediante formularios de registro de newsletters o directorios, almacenaremos el correo electrónico, tu nombre y los datos que libremente decidas adjuntar a fin de gestionar tu consulta.
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <strong className="text-[#111827] block mb-1">B. Datos de navegación generados automáticamente (Cookies):</strong>
              Al visitar la web, se recopilan datos técnicos como tu dirección IP (anonimizada), tipo de navegador, sistema operativo, páginas visitadas dentro del sitio, tiempo de permanencia y origen geográfico aproximado. Esto se realiza de manera segura mediante <strong>Google Analytics 4</strong> y <strong>Google AdSense</strong>.
            </div>
          </div>
        </section>

        {/* 🚨 BLOQUE CRÍTICO MANDATORIO DE GOOGLE ADSENSE 🚨 */}
        <section className="bg-blue-50 border border-blue-100 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
          <h2 className="text-2xl font-bold text-[#111827] mb-4 flex items-center gap-2">
            <svg className="w-6 h-6 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Cláusula Obligatoria de Google AdSense
          </h2>
          <p className="text-gray-700 font-medium mb-4 leading-relaxed">
            En cumplimiento estricto de las políticas contractuales de Google AdSense y como usuario del programa de monetización publicitaria, te informamos detalladamente sobre lo siguiente:
          </p>
          <div className="bg-white border-l-4 border-[#2563EB] p-5 rounded-r-2xl text-gray-800 text-sm sm:text-base italic leading-relaxed shadow-sm font-semibold">
            "Terceros proveedores, incluido Google, utilizan cookies para publicar anuncios basándose en las visitas anteriores de un usuario a este sitio web u otros sitios web. El uso de cookies de publicidad permite a Google y a sus socios publicar anuncios basados en las visitas que los usuarios realizan a sus sitios. Los usuarios pueden inhabilitar la publicidad personalizada visitando la Configuración de anuncios de Google."
          </div>
          <p className="text-xs text-gray-500 mt-4 leading-relaxed">
            Adicionalmente, te informamos de que puedes inhabilitar por completo el uso de cookies de publicidad personalizada de otros terceros proveedores externos a través del portal de autoregulación e inhabilitación internacional de publicidad en la red <a href="https://optout.aboutads.info/?c=2&lang=EN" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline font-semibold">AboutAds (aboutads.info)</a>.
          </p>
        </section>

        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-[#111827] mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 font-bold text-sm">3</span>
            ¿Para qué Utilizaremos sus Datos?
          </h2>
          <p className="mb-4">
            Tratamos los datos recopilados bajo bases jurídicas perfectamente legitimadas con los siguientes fines exclusivos:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            <li><strong>Gestión de consultas:</strong> Dar respuesta a tus dudas planteadas mediante correo electrónico.</li>
            <li><strong>Mantenimiento y rendimiento técnico:</strong> Permitir que las calculadoras de salud, IMC, macros, porcentaje de grasa, y bases de datos funcionen de forma óptima sin fallos de sistema.</li>
            <li><strong>Análisis estadístico y optimización:</strong> Medir el tráfico de la web de forma colectiva y anónima con Google Analytics para determinar qué rutinas, dietas y suplementos resultan más interesantes.</li>
            <li><strong>Publicidad contextual y personalizada:</strong> Financiar el mantenimiento gratuito de la plataforma mediante la inyección y muestra de anuncios relevantes a través de Google AdSense.</li>
          </ul>
        </section>

        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-[#111827] mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 font-bold text-sm">4</span>
            ¿Cuánto Tiempo Conservamos sus Datos?
          </h2>
          <p>
            Los datos personales facilitados para consultas se conservarán únicamente durante el tiempo necesario para resolver y dar por cerrada la comunicación comercial o informativa. Los datos recogidos a través de cookies técnicas se destruyen al finalizar la sesión del navegador. En cuanto a las cookies analíticas y publicitarias (como las de Google Analytics o Google AdSense), los datos se conservarán bajo los periodos máximos estipulados y configurados por dichos proveedores externos (máximo 14 meses en el caso de GA4), o hasta que retires expresamente tu consentimiento borrando las cookies en tu dispositivo.
          </p>
        </section>

        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-[#111827] mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 font-bold text-sm">5</span>
            ¿Se Comparten sus Datos con Terceros?
          </h2>
          <p>
            Garantizamos plenamente que <strong>no vendemos, alquilamos ni cedemos</strong> datos personales bajo ningún concepto. Tus datos solo se compartirán con proveedores indispensables para dar soporte técnico a la web bajo estrictos estándares de privacidad mutua:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-sm sm:text-base">
            <li><strong>Google LLC (Google Analytics y Google AdSense):</strong> Para realizar los análisis estadísticos de rendimiento y la inyección de anuncios dirigidos bajo el amparo de la legislación de privacidad y el marco Data Privacy Framework de la UE.</li>
            <li><strong>Proveedor de Hosting y Servidores:</strong> Para alojar el código de la plataforma de forma segura en servidores de primer nivel dentro del territorio europeo.</li>
          </ul>
        </section>

        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-[#111827] mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 font-bold text-sm">6</span>
            Derechos de los Usuarios (RGPD)
          </h2>
          <p className="mb-4">
            Como usuario residente en la Unión Europea, el RGPD te confiere el control absoluto sobre tus datos. Puedes ejercer los siguientes derechos sin coste alguno:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 text-sm">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <strong className="text-[#111827]">Acceso y Rectificación:</strong> Conocer si estamos tratando tus datos y modificarlos si son inexactos o incompletos.
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <strong className="text-[#111827]">Supresión (Olvido):</strong> Solicitar la eliminación total de tus datos personales de nuestras bases de datos de forma inmediata.
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <strong className="text-[#111827]">Oposición y Limitación:</strong> Oponerte al tratamiento de tus datos para fines específicos o limitar su alcance técnico.
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <strong className="text-[#111827]">Portabilidad:</strong> Solicitar la entrega de tus datos de forma estructurada para trasladarlos a otro responsable.
            </div>
          </div>
          <p className="mb-4">
            Para ejercer cualquiera de estos derechos, tan solo debes enviarnos una comunicación por escrito al correo electrónico oficial de contacto:
          </p>
          <div className="bg-emerald-50/50 border-l-4 border-emerald-600 p-4 rounded-r-2xl my-4 text-center">
            <span className="text-emerald-800 font-bold text-base block mb-1">Contacto para Privacidad:</span>
            <a href="mailto:impulsefitnessmarketing1@gmail.com" className="text-[#2563EB] font-bold hover:underline text-lg">impulsefitnessmarketing1@gmail.com</a>
            <p className="text-xs text-gray-500 mt-2">
              Para tramitar tu solicitud, es requisito indispensable acreditar tu identidad (por ejemplo, enviando una copia digital de tu DNI o equivalente) conforme a las directrices de la Agencia Española de Protección de Datos (AEPD).
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
