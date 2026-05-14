import React from "react";

export default function Privacidad() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 sm:px-8">
      <header className="mb-12 border-b border-gray-100 pb-8">
        <h1 className="text-4xl font-black text-[#111827] tracking-tight">Política de Privacidad</h1>
        <p className="text-gray-500 mt-2 font-medium italic">Última actualización: 14 de mayo de 2024</p>
      </header>

      <div className="prose prose-blue max-w-none text-gray-600 space-y-8 leading-relaxed">
        <section>
          <h2 className="text-2xl font-black text-[#111827] mb-4">1. Responsable del Tratamiento</h2>
          <p>
            Impulse Fitness Marketing informa a los usuarios del sitio web sobre su política respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o contratación de servicios a través de su sitio web.
          </p>
          <p className="mt-4">
            <strong>Identidad:</strong> Impulse Fitness Marketing<br />
            <strong>Correo electrónico:</strong> impulsefitnessmarketing1@gmail.com
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-[#111827] mb-4">2. Finalidad del Tratamiento de Datos</h2>
          <p>
            La recogida y tratamiento de los datos personales tiene como finalidades:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Gestionar el acceso a las herramientas de cálculo y directorios de la web.</li>
            <li>Atender las consultas y peticiones realizadas a través de los formularios de contacto.</li>
            <li>Mejorar la experiencia de navegación mediante el análisis estadístico (Google Analytics).</li>
            <li>Mostrar publicidad personalizada según los intereses del usuario (Google AdSense).</li>
            <li>En el futuro, gestionar el registro de usuarios y empresas en el directorio.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-[#111827] mb-4">3. Legitimación</h2>
          <p>
            El tratamiento de tus datos se realiza con las siguientes bases jurídicas:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>El consentimiento del interesado para el contacto y el uso de cookies analíticas/publicitarias.</li>
            <li>El interés legítimo para la seguridad y mantenimiento del sitio web.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-[#111827] mb-4">4. Destinatarios</h2>
          <p>
            Los datos no se comunicarán a terceros ajenos a Impulse Fitness Marketing, salvo obligación legal o para la prestación de servicios técnicos necesarios (hosting, Google Analytics, Google AdSense).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-[#111827] mb-4">5. Derechos de los Usuarios</h2>
          <p>
            El RGPD concede a los interesados la posibilidad de ejercer una serie de derechos relacionados con el tratamiento de sus datos personales:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Acceso:</strong> Derecho a saber qué datos tratamos.</li>
            <li><strong>Rectificación:</strong> Derecho a modificar datos inexactos.</li>
            <li><strong>Supresión (Olvido):</strong> Derecho a que eliminemos tus datos personales.</li>
            <li><strong>Oposición:</strong> Derecho a que no tratemos tus datos para fines específicos.</li>
            <li><strong>Portabilidad:</strong> Derecho a recibir tus datos en un formato estructurado.</li>
          </ul>
          <p className="mt-6">
            Para ejercer estos derechos, el usuario debe enviar una comunicación por escrito, acreditando su identidad, a: <strong>impulsefitnessmarketing1@gmail.com</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
