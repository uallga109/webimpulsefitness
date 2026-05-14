import React from "react";

export default function AvisoLegal() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 sm:px-8">
      <header className="mb-12 border-b border-gray-100 pb-8">
        <h1 className="text-4xl font-black text-[#111827] tracking-tight">Aviso Legal</h1>
        <p className="text-gray-500 mt-2 font-medium italic">Última actualización: 14 de mayo de 2024</p>
      </header>

      <div className="prose prose-blue max-w-none text-gray-600 space-y-8 leading-relaxed">
        <section>
          <h2 className="text-2xl font-black text-[#111827] mb-4">1. Datos Identificativos</h2>
          <p>
            En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos:
          </p>
          <ul className="list-none space-y-2 mt-4 border-l-4 border-blue-500 pl-4 bg-blue-50/30 py-4 rounded-r-xl">
            <li><strong>Titular:</strong> Impulse Fitness Marketing</li>
            <li><strong>Sitio Web:</strong> impulsefitnessmarketing.com</li>
            <li><strong>Correo electrónico de contacto:</strong> impulsefitnessmarketing1@gmail.com</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-[#111827] mb-4">2. Usuarios</h2>
          <p>
            El acceso y/o uso de este portal de Impulse Fitness Marketing atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-[#111827] mb-4">3. Uso del Portal</h2>
          <p>
            <strong>impulsefitnessmarketing.com</strong> proporciona el acceso a multitud de informaciones, servicios, herramientas (calculadoras fitness) o datos (en adelante, "los contenidos") en Internet pertenecientes a Impulse Fitness Marketing o a sus licenciantes a los que el USUARIO pueda tener acceso.
          </p>
          <p className="mt-4">
            El USUARIO asume la responsabilidad del uso del portal. El USUARIO se compromete a hacer un uso adecuado de los contenidos y servicios que Impulse Fitness Marketing ofrece a través de su portal y con carácter enunciativo pero no limitativo, a no emplearlos para incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-[#111827] mb-4">4. Propiedad Intelectual e Industrial</h2>
          <p>
            Impulse Fitness Marketing por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo: imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.).
          </p>
          <p className="mt-4">
            Todos los derechos reservados. Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Impulse Fitness Marketing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-[#111827] mb-4">5. Exclusión de Garantías y Responsabilidad</h2>
          <p>
            Impulse Fitness Marketing no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
          </p>
          <p className="mt-4">
            Las calculadoras y herramientas proporcionadas tienen fines meramente informativos y no sustituyen el consejo médico o profesional de un especialista en salud o nutrición.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-[#111827] mb-4">6. Modificaciones</h2>
          <p>
            Impulse Fitness Marketing se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
          </p>
        </section>
      </div>
    </div>
  );
}
