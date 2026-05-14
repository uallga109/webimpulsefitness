import React from "react";

export default function AvisoLegal() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-black text-gray-900 mb-8">Aviso Legal</h1>
      <div className="prose prose-blue lg:prose-xl text-gray-600 space-y-6">
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), se exponen los siguientes datos identificativos del titular de este sitio web:
        </p>
        <ul className="list-disc pl-6">
          <li><strong>Titular:</strong> Impulse Fitness</li>
          <li><strong>Dominio:</strong> impulsefitnessmarketing.com</li>
          <li><strong>Email de contacto:</strong> contacto@impulsefitnessmarketing.com</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-800 mt-8">1. Condiciones de Uso</h2>
        <p>
          El acceso y uso de este sitio web atribuye la condición de usuario, que acepta, desde dicho acceso y/o uso, las condiciones generales de uso aquí reflejadas.
        </p>
        {/* Contenido placeholder para completar luego */}
        <p className="italic text-gray-400">Este documento es una plantilla básica. Debes completarlo con tus datos fiscales reales antes del lanzamiento definitivo.</p>
      </div>
    </div>
  );
}
