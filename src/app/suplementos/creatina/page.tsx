import React from "react";
import type { Metadata } from "next";
import SupplementDetailLayout from "@/components/suplementos/SupplementDetailLayout";

export const metadata: Metadata = {
  title: "Creatina Monohidrato: Guía Completa y Beneficios | Impulse Fitness",
  description: "Descubre por qué la creatina es el suplemento más estudiado para ganar fuerza y potencia. Ciencia, dosis y mitos desmentidos.",
};

export default function CreatinaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Creatina Monohidrato",
    "description": "El suplemento con mayor respaldo científico para aumentar la fuerza y el rendimiento deportivo.",
    "brand": {
      "@type": "Brand",
      "name": "Impulse Fitness"
    },
    "category": "Suplementos Deportivos",
    "image": "https://impulsefitnessmarketing.com/images/suplementos/creatina.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SupplementDetailLayout 
      title="Creatina Monohidrato"
      subtitle="El suplemento con mayor respaldo científico para aumentar tu rendimiento en el gimnasio."
      image="/images/suplementos/creatina.png"
      evidence="Evidencia: Grado A"
      objective="Objetivo: Fuerza y Potencia"
      whatIs="La creatina es un ácido orgánico nitrogenado que se encuentra naturalmente en los músculos. Su función principal es reciclar el ATP (la moneda de energía del cuerpo), permitiéndote mantener esfuerzos máximos durante más tiempo antes de llegar a la fatiga. Es el suplemento más estudiado de la historia."
      benefits={[
        "Aumento significativo de la fuerza máxima (1RM) y potencia.",
        "Mayor volumen celular (hidrata la célula muscular desde dentro).",
        "Mejora en la recuperación entre series pesadas."
      ]}
      protocol={{
        dosing: "3 a 5 gramos al día.",
        timing: "En cualquier momento del día (funciona por acumulación).",
        notes: "No es necesaria la fase de carga; simplemente saturarás los depósitos más lentamente pero sin molestias estomacales."
      }}
      myths={[
        "'Retiene líquidos': Sí, pero a nivel intracelular, lo cual es bueno para el músculo, no extracelular, por lo que no te verás 'tapado'.",
        "'Daña los riñones': Totalmente falso en personas sanas."
      ]}
      category="Fuerza"
    />
    </>
  );
}
