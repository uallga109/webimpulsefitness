import React from "react";

export default function Privacidad() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-black text-gray-900 mb-8">Política de Privacidad</h1>
      <div className="prose prose-blue lg:prose-xl text-gray-600 space-y-6">
        <p>
          En Impulse Fitness, nos tomamos muy en serio la privacidad de tus datos. De conformidad con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD), te informamos de cómo tratamos la información que nos proporcionas.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mt-8">¿Quién es el responsable del tratamiento?</h2>
        <p>Impulse Fitness - contacto@impulsefitnessmarketing.com</p>
        
        <h2 className="text-2xl font-bold text-gray-800 mt-8">Finalidad de los datos</h2>
        <p>Utilizamos tus datos únicamente para mejorar la experiencia de usuario en la web, gestionar posibles registros y, si lo autorizas, enviarte comunicaciones relacionadas con el fitness.</p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8">Tus derechos</h2>
        <p>Tienes derecho a acceder, rectificar, suprimir y oponerte al tratamiento de tus datos en cualquier momento enviando un correo a nuestra dirección de contacto.</p>
        
        <p className="italic text-gray-400">Este documento es una plantilla básica adaptada a RGPD. Debes revisarlo legalmente según tu operativa real.</p>
      </div>
    </div>
  );
}
