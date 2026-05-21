import React from "react";
import type { Metadata } from "next";
import SupplementDetailLayout from "@/components/suplementos/SupplementDetailLayout";

export const metadata: Metadata = {
  title: "Citrulina Malato: Óxido Nítrico, Dosis Pre-Entreno y Congestión",
  description: "Descubre cómo la citrulina malato estimula el óxido nítrico, mejora la vasodilatación y aumenta la congestión muscular. Ciencia de la dosis y el aclaramiento de amoníaco.",
  keywords: ["citrulina malato", "oxido nitrico pre entreno", "congestión muscular", "vasodilatador gimnasio", "citrulina dosis", "bombeo muscular"],
};

export default function CitrulinaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Citrulina Malato",
    "description": "Un aminoácido no esencial enlazado a un ácido orgánico, ideal para elevar el óxido nítrico y potenciar la resistencia muscular y la congestión.",
    "brand": {
      "@type": "Brand",
      "name": "Impulse Fitness"
    },
    "category": "Suplementos Deportivos",
    "image": "https://impulsefitnessmarketing.com/images/suplementos/citrulina.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "120"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SupplementDetailLayout 
        slug="citrulina"
        title="Citrulina Malato"
        subtitle="El precursor de óxido nítrico por excelencia. Incrementa el flujo sanguíneo endotelial, optimiza el aporte de nutrientes y oxígeno al tejido activo y acelera la eliminación de metabolitos tóxicos."
        image="/images/suplementos/citrulina.png"
        evidence="Evidencia: Grado A"
        objective="Objetivo: Vasodilatación, Pumping & Resistencia"
        whatIs="La L-citrulina es un alfa-aminoácido no esencial que interviene en el ciclo de la urea en los mamíferos. Cuando se enlaza químicamente al ácido málico (un intermediario del ciclo de Krebs), forma la Citrulina Malato. Su principal valor farmacocinético reside en su capacidad para esquivar el metabolismo de primer paso del hígado, llegando intacta a los riñones, donde se biotransforma de forma ultra eficiente en L-arginina, el sustrato primario de la enzima óxido nítrico sintasa (eNOS) encargada de sintetizar el potente agente vasodilatador óxido nítrico (NO)."
        benefits={[
          "Estimula masivamente la síntesis de óxido nítrico, relajando las células de músculo liso en las arterias y produciendo vasodilatación profunda.",
          "Aumenta la velocidad y eficiencia del transporte de oxígeno, glucosa y aminoácidos directamente a las fibras musculares activas.",
          "Acelera la depuración de desechos metabólicos fatigosos como el amoníaco y el lactato en el ciclo de la urea.",
          "El componente Malato estimula directamente la vía aeróbica del ciclo de Krebs, aumentando la producción de energía celular (ATP) durante el ejercicio."
        ]}
        protocol={{
          dosing: "6 a 8 gramos de Citrulina Malato (en su proporción óptima 2:1, lo cual aporta entre 4g y 5.3g de L-citrulina pura por dosis).",
          timing: "Consumir entre 45 y 60 minutos antes de comenzar el entrenamiento de fuerza de resistencia.",
          notes: "A diferencia de otros pre-entrenos, no genera adicción ni tolerancia, por lo que puede consumirse de forma continuada sin requerir descargas o descansos."
        }}
        myths={[
          "Mito: 'Tomar L-Arginina directa es más efectivo para el óxido nítrico'. Falso. La L-arginina oral sufre un catabolismo masivo en el hígado por acción de las enzimas arginasas en el primer paso hepático, logrando una biodisponibilidad muy pobre. La L-citrulina no sufre este proceso, logrando elevar los niveles de arginina plasmática en más de un 100% de forma superior a la propia arginina.",
          "Mito: 'La congestión muscular (pump) es solo estética'. La congestión y la hinchazón celular mecánica son uno de los tres pilares fundamentales que desencadenan la hipertrofia muscular (según el modelo de Schoenfeld). La presión física del agua acumulada activa receptores integrinas en las membranas celulares que estimulan la síntesis de proteínas y reducen el catabolismo.",
          "Mito: 'La citrulina sola y la citrulina malato son lo mismo'. La L-citrulina es solo el aminoácido. La Citrulina Malato añade ácido málico, el cual interviene en la síntesis de ATP mitocondrial, siendo significativamente superior para retrasar la fatiga en deportistas de resistencia."
        ]}
        category="Rendimiento"
        science={{
          research: "Ensayos clínicos aleatorizados a doble ciego confirman que la suplementación aguda con Citrulina Malato (8g) aumenta el número de repeticiones realizadas hasta el fallo muscular en prensas o presses de pecho y disminuye de forma drástica (hasta en un 40%) el dolor muscular de aparición tardía (DOMS o agujetas) a las 24 y 48 horas post-esfuerzo, debido a una mayor oxigenación muscular profunda.",
          keyPoints: [
            "Vasodilatación Endotelial: Dilata los capilares sanguíneos periféricos permitiendo que entre más volumen de sangre (congestión).",
            "Mitigación del Amoníaco: Aumenta la velocidad de aclaramiento de las toxinas generadas por la degradación proteica en esfuerzos intensos.",
            "Krebs y ATP: El malato apoya la conversión aeróbica de la glucosa, proporcionando más combustible contráctil.",
            "Ahorro de BCAA: Se ha sugerido que optimiza el aclaramiento renal y celular de aminoácidos, reduciendo la degradación de BCAAs."
          ]
        }}
        faqs={[
          {
            question: "¿Qué significa que la proporción sea 2:1 en la Citrulina Malato?",
            answer: "Significa que por cada tres gramos del suplemento, dos gramos son de L-citrulina pura y un gramo es de ácido málico. Esta es la proporción exacta utilizada en los estudios científicos de rendimiento. Algunas marcas económicas ofrecen ratios 1:1 para abaratar costes, lo cual reduce significativamente el aporte neto del aminoácido."
          },
          {
            question: "¿Ayuda la citrulina a acelerar la recuperación entre series?",
            answer: "Sí, absolutamente. Al aumentar el flujo sanguíneo, los nutrientes y el oxígeno llegan mucho más rápido al músculo que acaba de contraerse, lo que acelera la resíntesis de fosfocreatina y la eliminación de subproductos metabólicos ácidos durante el descanso de 2 a 3 minutos entre series."
          },
          {
            question: "¿Puedo tomarla si entreno por la noche?",
            answer: "Sí, es de hecho el pre-entreno ideal para sesiones nocturnas. Al no contener ningún tipo de estimulante sobre el sistema nervioso central (a diferencia de la cafeína), proporciona toda la vasodilatación, resistencia y congestión muscular sin perturbar en absoluto la conciliación y calidad del sueño."
          },
          {
            question: "¿Es perjudicial o interactúa con medicamentos?",
            answer: "En personas sanas es extremadamente segura y libre de efectos adversos significativos (salvo leves molestias estomacales si se consume con muy poca agua). No obstante, debido a su efecto vasodilatador directo, personas que tomen medicamentos para la disfunción eréctil o para tratar la hipertensión deben consultar a su médico antes de consumirla para evitar descensos indeseados de la presión arterial."
          }
        ]}
      />
    </>
  );
}
