import React from "react";
import type { Metadata } from "next";
import SupplementDetailLayout from "@/components/suplementos/SupplementDetailLayout";

export const metadata: Metadata = {
  title: "Beta-Alanina: Carnosina Muscular, Parestesia y Resistencia",
  description: "Descubre cómo la beta-alanina retrasa la fatiga y neutraliza el ácido láctico en los músculos. Toda la ciencia sobre carnosina, dosis y el picor de la parestesia.",
  keywords: ["beta alanina", "retrasar fatiga muscular", "carnosina muscular", "parestesia beta alanina", "resistencia gimnasio", "tampon lactico"],
};

export default function BetaAlaninaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Beta-Alanina",
    "description": "El aminoácido limitante en la síntesis de carnosina, fundamental para retrasar la fatiga ácida en esfuerzos glucolíticos intensos.",
    "brand": {
      "@type": "Brand",
      "name": "Impulse Fitness"
    },
    "category": "Suplementos Deportivos",
    "image": "https://impulsefitnessmarketing.com/images/suplementos/beta-alanina.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "115"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SupplementDetailLayout 
        slug="beta-alanina"
        title="Beta-Alanina"
        subtitle="Tu blindaje contra la acidosis muscular. Eleva las reservas intramusculares de carnosina, mitiga la quemazón del lactato y mantén la potencia máxima en esfuerzos de alta intensidad."
        image="/images/suplementos/beta-alanina.png"
        evidence="Evidencia: Grado A"
        objective="Objetivo: Amortiguación del Lactato & Resistencia"
        whatIs="La beta-alanina es un aminoácido no esencial modificado y el único aminoácido beta de ocurrencia natural. A nivel fisiológico, es el sustrato limitante en la síntesis de la carnosina (un dipéptido formado por beta-alanina e histidina). La carnosina actúa como un potente amortiguador o 'tampón' de pH intracelular en las fibras musculares de contracción rápida, secuestrando los iones de hidrógeno (H+) que se acumulan durante la glucólisis anaeróbica y que provocan la acidosis y fatiga muscular."
        benefits={[
          "Eleva los niveles de Carnosina muscular de forma sustancial (hasta un 80% en 10 semanas de uso continuado).",
          "Retrasa significativamente la quemazón muscular producida por la acumulación de protones (ácido láctico).",
          "Optimiza el rendimiento en esfuerzos glucolíticos máximos con una duración de entre 60 y 240 segundos (ej. series largas de gimnasio, CrossFit, atletismo).",
          "Actúa en sinergia fisiológica comprobada con la creatina, potenciando la capacidad de fuerza y resistencia del deportista."
        ]}
        protocol={{
          dosing: "3.2 a 6.4 gramos diarios repartidos a lo largo del día. Se requiere un protocolo crónico acumulativo similar al de la creatina.",
          timing: "A diario. Funciona por acumulación en el músculo. No es obligatorio tomarla justo antes de entrenar, aunque se incluya en los pre-entrenos.",
          notes: "Su consumo suele generar parestesia (un picor y hormigueo característico e inofensivo en la piel). Para evitarlo, divide la dosis diaria en tomas de 1.6g espaciadas por 3-4 horas."
        }}
        myths={[
          "Mito: 'El picor (parestesia) es una reacción alérgica peligrosa'. La parestesia se debe a la estimulación transitoria de los receptores sensitivos neuronales MrgprD en la piel por la rápida absorción del aminoácido. Es un efecto totalmente inofensivo que desaparece en 60-90 minutos y se reduce dividiendo las tomas.",
          "Mito: 'Solo sirve si entrenas resistencia aeróbica (carreras largas)'. Al contrario, la carnosina abunda en las fibras tipo II (de fuerza rápida). Su mayor efectividad se da en el rango anaeróbico láctico de alta intensidad (gimnasio, series al fallo y CrossFit), no en el maratón puro.",
          "Mito: 'Debo tomarla solo los días de entrenamiento'. Al igual que con la creatina, saltarse los días de descanso evitará que los depósitos musculares de carnosina alcancen el nivel de saturación óptimo."
        ]}
        category="Resistencia"
        science={{
          research: "El posicionamiento oficial del Comité Olímpico Internacional (COI) y la ISSN reconoce a la beta-alanina como una de las escasas sustancias con evidencia clase A para mejorar de forma directa el rendimiento en deportes de alta intensidad. Al mantener el pH intracelular equilibrado (amortiguando H+), protege las enzimas glucolíticas y la sensibilidad al calcio de las miofibrillas, impidiendo la pérdida de fuerza.",
          keyPoints: [
            "Tampón Fisiológico: Absorbe los iones de hidrógeno libres impidiendo el descenso drástico del pH del citoplasma muscular.",
            "Acumulación de Carnosina: A diferencia de tomar carnosina oral (que se destruye en el estómago), tomar beta-alanina eleva directamente la carnosina muscular.",
            "Sensibilidad al Calcio: Facilita que el músculo siga contrayéndose de forma eficiente aun en condiciones de acidosis extrema.",
            "Efecto Antioxidante: La carnosina actúa adicionalmente secuestrando radicales libres generados por el estrés del entrenamiento severo."
          ]
        }}
        faqs={[
          {
            question: "¿Por qué se me eriza la piel o me pican las manos al tomarla?",
            answer: "Es el fenómeno biológico conocido como parestesia. Ocurre cuando hay un pico rápido de beta-alanina en sangre, lo cual satura temporalmente los receptores neuronales MrgprD de la piel. Es inofensivo, no causa daños y disminuye si usas fórmulas de liberación prolongada o divides tu dosis diaria en tomas más pequeñas de 1.6 gramos repartidas a lo largo de la jornada."
          },
          {
            question: "¿Cuánto tiempo tarda en empezar a hacer efecto real?",
            answer: "Los beneficios notables en la resistencia y retraso de la fatiga muscular empiezan a manifestarse a partir de las 2 semanas de consumo diario constante, alcanzando su punto óptimo de saturación de carnosina muscular entre las 4 y 10 semanas de suplementación ininterrumpida."
          },
          {
            question: "¿Es mejor tomar carnosina directamente en lugar de beta-alanina?",
            answer: "No. La carnosina ingerida de forma directa se hidroliza de inmediato en el tracto gastrointestinal y la sangre por acción de la enzima carnosinasa, dividiéndose en beta-alanina e histidina antes de llegar al músculo. Por ello, suplementarse directamente con beta-alanina es metabólicamente mucho más eficiente y significativamente más económico."
          },
          {
            question: "¿Puedo combinarla con la creatina en el mismo batido?",
            answer: "Sí, es una combinación sinérgica ideal respaldada por la ciencia. La creatina optimiza los primeros segundos de energía explosiva vía el sistema de fosfágenos (ATP-PCr), mientras que la beta-alanina entra en juego a partir de los 15-30 segundos mitigando la acidosis que se produce a continuación. Tomarlas juntas potencia globalmente la fuerza y la resistencia."
          }
        ]}
      />
    </>
  );
}
