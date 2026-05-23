import React from "react";

export default function AvisoLegal() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Cabecera Premium */}
      <header className="mb-12 border-b border-gray-200 pb-8 text-left">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#2563EB] mb-4 border border-blue-100">
          Documento Legal Obligatorio
        </span>
        <h1 className="text-4xl font-extrabold text-[#111827] tracking-tight sm:text-5xl">
          Aviso Legal
        </h1>
        <p className="text-gray-500 mt-3 font-medium text-sm">
          De conformidad con la Ley 34/2002 (LSSI-CE) • Última actualización: 23 de mayo de 2026
        </p>
      </header>

      {/* Tarjeta de Identificación del Titular - Wow factor, alta transparencia */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
        <h2 className="text-xl font-bold text-[#111827] mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Datos Identificativos del Responsable
        </h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
          En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), a continuación se facilitan los datos identificativos del titular del sitio web:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Titular de la Web</span>
            <span className="text-base font-semibold text-[#111827] mt-1">Luis García (Impulse Fitness Marketing)</span>
          </div>
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">N.I.F. / Documento de Identidad</span>
            <span className="text-base font-semibold text-[#111827] mt-1">54142907X</span>
          </div>
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Correo Electrónico de Contacto</span>
            <span className="text-base font-semibold text-[#2563EB] mt-1 break-all">impulsefitnessmarketing1@gmail.com</span>
          </div>
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Sitio Web Principal</span>
            <span className="text-base font-semibold text-[#111827] mt-1">impulsefitnessmarketing.com</span>
          </div>
        </div>
      </div>

      {/* Contenido Legal Completo */}
      <div className="prose prose-blue max-w-none text-gray-600 space-y-10 leading-relaxed text-sm sm:text-base">
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-[#111827] mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-blue-50 text-[#2563EB] font-bold text-sm">1</span>
            Condiciones Generales de Uso
          </h2>
          <p className="mb-4">
            El acceso y/o uso de este portal de <strong>Impulse Fitness Marketing</strong> atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.
          </p>
          <p>
            El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que Impulse Fitness Marketing ofrece a través de su portal, y con carácter enunciativo pero no limitativo, a no emplearlos para incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público; difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos.
          </p>
        </section>

        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-[#111827] mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-blue-50 text-[#2563EB] font-bold text-sm">2</span>
            Propiedad Intelectual e Industrial
          </h2>
          <p className="mb-4">
            <strong>Impulse Fitness Marketing</strong> por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.), titularidad de Impulse Fitness Marketing o bien de sus licenciantes.
          </p>
          <div className="bg-yellow-50/50 border-l-4 border-yellow-500 p-4 rounded-r-2xl my-4 text-sm">
            <strong className="text-yellow-800">Todos los derechos reservados:</strong> Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización expresa por escrito de Impulse Fitness Marketing.
          </div>
          <p>
            Cualquier uso no autorizado previamente por parte del titular será considerado un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor. Las herramientas de cálculo, bases de datos de ejercicios, dietas y algoritmos de la web son fruto de un desarrollo exclusivo y están plenamente protegidos bajo la legislación de propiedad intelectual española e internacional.
          </p>
        </section>

        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-[#111827] mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-blue-50 text-[#2563EB] font-bold text-sm">3</span>
            Exclusión de Garantías y Limitación de Responsabilidad
          </h2>
          <p className="mb-4">
            Impulse Fitness Marketing no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
          </p>
          <div className="bg-blue-50 border border-blue-100 p-5 rounded-2xl my-4 text-sm text-gray-700">
            <span className="font-bold text-[#2563EB] block mb-1">Aviso de Salud Importante:</span>
            Toda la información y las calculadoras (como las calculadoras de IMC, macros, porcentaje de grasa corporal, gasto calórico, 1RM, etc.) integradas en este sitio web tienen fines exclusivamente informativos y educativos. En ningún caso pretenden sustituir el diagnóstico, consejo médico o tratamiento nutricional y deportivo personalizado de un profesional de la salud cualificado. Consulte siempre con un especialista antes de iniciar cualquier programa de ejercicios o cambiar su plan de alimentación.
          </div>
        </section>

        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-[#111827] mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-blue-50 text-[#2563EB] font-bold text-sm">4</span>
            Enlaces (Links) a Terceros
          </h2>
          <p>
            En el caso de que en <strong>impulsefitnessmarketing.com</strong> se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet, Impulse Fitness Marketing no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso Impulse Fitness Marketing asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud, veracidad, validez y constitucionalidad de cualquier material o información contenida en ninguno de dichos hipervínculos u otros sitios de Internet. Igualmente la inclusión de estas conexiones externas no implicará ningún tipo de asociación, fusión o participación con las entidades conectadas.
          </p>
        </section>

        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-[#111827] mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-blue-50 text-[#2563EB] font-bold text-sm">5</span>
            Derecho de Exclusión y Modificaciones
          </h2>
          <p className="mb-4">
            Impulse Fitness Marketing se reserva el derecho a denegar o retirar el acceso al portal y/o los servicios ofrecidos sin necesidad de preaviso, a instancia propia o de un tercero, a aquellos usuarios que incumplan las presentes Condiciones Generales de Uso.
          </p>
          <p>
            Asimismo, se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
          </p>
        </section>

        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-[#111827] mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-blue-50 text-[#2563EB] font-bold text-sm">6</span>
            Legislación Aplicable y Jurisdicción
          </h2>
          <p>
            La relación entre Impulse Fitness Marketing y el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad correspondiente al domicilio legal del titular, en España, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
          </p>
        </section>
      </div>
    </div>
  );
}
