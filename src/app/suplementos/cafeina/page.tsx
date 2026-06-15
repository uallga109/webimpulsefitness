import React from "react";
import type { Metadata } from "next";
import SupplementDetailLayout from "@/components/suplementos/SupplementDetailLayout";

export const metadata: Metadata = {
  title: "Cafeína Anhidra: Dosis Pre-Entreno, Rendimiento y Grasa Corporal",
  description: "Aprende cómo usar la cafeína anhidra para disparar tu rendimiento deportivo, fuerza y quemar grasa. Guía científica de dosis, tolerancia y metabolismo.",
};

export default function CafeinaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Cafeína Anhidra",
    "description": "El estimulante del sistema nervioso central más potente y estudiado para optimizar el rendimiento y la movilización de grasas.",
    "brand": {
      "@type": "Brand",
      "name": "Impulse Fitness"
    },
    "category": "Suplementos Deportivos",
    "image": "https://impulsefitnessmarketing.com/images/suplementos/cafeina.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "180"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SupplementDetailLayout 
        slug="cafeina"
        title="Cafeína Anhidra"
        subtitle="El estimulante psicoactivo de referencia para atletas de élite. Dispara tu enfoque mental, reduce la percepción del esfuerzo y aumenta la fuerza explosiva de forma inmediata."
        image="/images/suplementos/cafeina.png"
        evidence="Evidencia: Grado A"
        objective="Objetivo: Energía, Foco & Lipólisis"
        whatIs="La cafeína anhidra es cafeína pura y deshidratada en polvo, procesada mecánicamente a partir de fuentes naturales de café para eliminar el agua. A nivel molecular, actúa como un potente antagonista de los receptores de adenosina en el sistema nervioso central. Al unirse competitivamente a estos receptores, impide que la adenosina ejerza su efecto depresor y sedante, lo que desencadena una cascada adrenérgica con una liberación masiva de catecolaminas (adrenalina y noradrenalina)."
        benefits={[
          "Antagoniza los receptores de adenosina, bloqueando las señales de fatiga central y manteniendo el estado de alerta máximo.",
          "Aumenta la fuerza contráctil muscular al optimizar la liberación y reabsorción de calcio intracelular en el retículo sarcoplásmico.",
          "Estimula la lipólisis (movilización de ácidos grasos libres) al inhibir la fosfodiesterasa, aumentando el AMP cíclico (AMPc).",
          "Reduce significativamente la Percepción de Esfuerzo Relativo (RPE), haciendo que los pesos pesados parezcan más ligeros."
        ]}
        protocol={{
          dosing: "3 a 6 miligramos por kilogramo de peso corporal (por ejemplo, 240mg a 480mg para un deportista de 80kg). Dosis mayores a 9mg/kg no aportan más beneficios y disparan efectos adversos.",
          timing: "Consumir entre 45 y 60 minutos antes del entrenamiento para coincidir con el pico plasmático de cafeína en el torrente sanguíneo.",
          notes: "Se recomienda ciclar su consumo para evitar la tolerancia del receptor (hacer descargas de cafeína de 7 a 10 días cada 4-6 semanas de consumo continuo)."
        }}
        myths={[
          "Mito: 'Te deshidrata drásticamente durante el ejercicio'. La cafeína tiene un efecto diurético leve en reposo si no se está acostumbrado, pero durante el ejercicio físico la secreción de catecolaminas reduce el flujo renal anulando este efecto.",
          "Mito: 'Tomar café normal es idéntico a la cafeína anhidra'. El café contiene cientos de compuestos biológicos adicionales que varían la tasa de absorción. La cafeína anhidra se absorbe mucho más rápido y de manera predecible, produciendo un efecto ergogénico más potente en el rendimiento deportivo.",
          "Mito: 'Causa arritmias en todos los consumidores'. En dosis normales (hasta 400-500mg diarios), la cafeína es sumamente segura para el sistema cardiovascular en personas sanas. Solo personas propensas a la taquicardia o hipertensión crónica deben evitarla o regularla."
        ]}
        category="Energía"
        science={{
          research: "Los consensos científicos internacionales (incluidos el de la ISSN y la ACSM) colocan a la cafeína en la cúspide de la ayuda ergogénica para deportes de fuerza, resistencia e interválicos. Al estimular las neuronas simpáticas, optimiza el reclutamiento de unidades motoras y el rendimiento glucolítico, permitiendo una mayor tolerancia a la acumulación de lactato.",
          keyPoints: [
            "Antagonismo de Adenosina: Evita el adormecimiento y la relajación neuronal durante esfuerzos prolongados.",
            "Liberación de Calcio: Mejora el puente cruzado de actina y miosina a nivel muscular profundo para contracciones más potentes.",
            "Gasto Energético: Eleva la tasa metabólica basal (TMB) a corto plazo en un 3-11% a través del estímulo simpático.",
            "Genética CYP1A2: Los metabolizadores rápidos (gen AA) obtienen enormes beneficios, mientras que los lentos (gen AC/CC) pueden sufrir nerviosismo e insomnio."
          ]
        }}
        faqs={[
          {
            question: "¿Cómo funciona la tolerancia a la cafeína y cómo se realiza una descarga?",
            answer: "Con el consumo diario prolongado, el cerebro crea nuevos receptores de adenosina (upregulation) para compensar los que están bloqueados. Esto hace que necesites dosis mayores para sentir el mismo efecto. Para restablecer la sensibilidad original, debes realizar un 'reset de cafeína': reduce gradualmente tu dosis a la mitad durante 3 días, y luego elimínala por completo durante 7 a 10 días."
          },
          {
            question: "¿Qué diferencia hay entre la cafeína en cápsulas y las bebidas pre-entreno?",
            answer: "Las cápsulas de cafeína anhidra contienen el compuesto puro de forma económica y con dosificación exacta. Las bebidas pre-entreno suelen combinar la cafeína con otros ingredientes sinérgicos como la citrulina malato, beta-alanina o tirosina, mejorando la vasodilatación y el bombeo de forma paralela a la estimulación nerviosa central."
          },
          {
            question: "¿A partir de qué hora debo evitar tomar cafeína para no dañar el sueño?",
            answer: "La cafeína tiene una vida media promedio de 5 a 7 horas (e incluso más en metabolizadores lentos). Para asegurar que no interfiera con las fases de sueño profundo y REM, se aconseja evitar su consumo al menos 6 a 8 horas antes de acostarse. Si entrenas tarde, es preferible utilizar pre-entrenos sin estimulantes."
          },
          {
            question: "¿Afecta tomar cafeína a la absorción de la creatina?",
            answer: "Aunque un antiguo estudio sugirió una ligera interferencia al tomar dosis masivas de cafeína de forma simultánea con creatina, la literatura científica moderna confirma que tomar creatina diariamente junto con cafeína pre-entrenamiento no merma en absoluto los beneficios crónicos de fuerza e hipertrofia de ninguno de los dos suplementos."
          }
        ]}
      />
    </>
  );
}
