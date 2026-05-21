import React from "react";
import type { Metadata } from "next";
import SupplementDetailLayout from "@/components/suplementos/SupplementDetailLayout";

export const metadata: Metadata = {
  title: "Creatina Monohidrato: Cómo Tomar, Dosis y Guía Biomecánica",
  description: "Aprende todo sobre la creatina monohidrato, el suplemento con mayor respaldo científico. Descubre sus beneficios en fuerza, dosis óptima y mitos desmentidos.",
  keywords: ["creatina monohidrato", "como tomar creatina", "beneficios creatina", "fase de carga creatina", "creatina y riñones", "hipertrofia creatina"],
};

export default function CreatinaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Creatina Monohidrato",
    "description": "El suplemento con mayor respaldo científico para aumentar la fuerza y la masa muscular magra.",
    "brand": {
      "@type": "Brand",
      "name": "Impulse Fitness"
    },
    "category": "Suplementos Deportivos",
    "image": "https://impulsefitnessmarketing.com/images/suplementos/creatina.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "210"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SupplementDetailLayout 
        slug="creatina"
        title="Creatina Monohidrato"
        subtitle="El compuesto bioactivo más estudiado de la nutrición deportiva. Maximiza tu potencia explosiva, acelera la resíntesis de ATP y optimiza tu ganancia de masa muscular libre de grasa."
        image="/images/suplementos/creatina.png"
        evidence="Evidencia: Grado A (ISSN)"
        objective="Objetivo: Fuerza, Potencia & Hipertrofia"
        whatIs="La creatina es un ácido orgánico nitrogenado sintetizado a partir de los aminoácidos arginina, glicina y metionina en el hígado y riñones, y almacenado en un 95% en el tejido músculo-esquelético. Actúa como el sustrato principal del sistema de fosfágenos, encargándose de donar un grupo fosfato al difosfato de adenosina (ADP) para regenerar rápidamente el trifosfato de adenosina (ATP) durante contracciones musculares anaeróbicas de alta intensidad y corta duración."
        benefits={[
          "Optimiza la vía de los fosfágenos aumentando los depósitos musculares de fosfocreatina (PCr) en un 15-40%.",
          "Promueve el aumento del volumen celular mediante la retención hídrica osmótica intracelular, estimulando vías anabólicas como la vía mTOR.",
          "Aumenta la fuerza máxima de levantamiento (1RM) y potencia en sprints repetidos de forma clínicamente probada.",
          "Favorece la modulación de factores de transcripción miogénicos y la activación de células satélite encargadas de la reparación y crecimiento miofibrilar."
        ]}
        protocol={{
          dosing: "0.08 a 0.1 gramos por kilogramo de peso corporal al día (ej. 7-8g para un atleta de 80kg), o una dosis genérica de 5 gramos diarios.",
          timing: "En cualquier momento. Funciona por saturación acumulada de los depósitos musculares, no por efecto agudo. Se recomienda consistencia diaria.",
          notes: "La fase de carga (20g diarios divididos en 4 tomas por 5-7 días) es opcional. Solo sirve para acelerar la saturación en 5 días frente a los 21-28 días de la dosis constante, pero puede generar molestias estomacales."
        }}
        myths={[
          "Mito: 'Causa calvicie'. La evidencia científica actual no asocia el consumo de creatina con la alopecia. Un único estudio de 2009 en jugadores de rugby mostró un aumento de DHT (dihidrotestosterona), pero nunca se ha replicado y no se midió la caída del cabello real.",
          "Mito: 'Retiene líquidos de forma estética'. La retención ocurre exclusivamente dentro de la célula muscular (intracelular). Esto es extremadamente positivo, ya que hidrata y expande la célula, haciéndola lucir más llena y activando estímulos hipertróficos.",
          "Mito: 'Daña los riñones o el hígado'. Cientos de estudios a largo plazo confirman que no altera los biomarcadores de función renal o hepática en individuos sanos. Puede elevar levemente la creatinina en analíticas de sangre de forma inofensiva debido al aclaramiento metabólico."
        ]}
        category="Fuerza"
        science={{
          research: "El posicionamiento oficial de la Sociedad Internacional de Nutrición Deportiva (ISSN) cataloga a la creatina monohidrato como el suplemento ergogénico nutricional más eficaz disponible para atletas de fuerza y potencia. Su ingesta continuada no solo repone las reservas de fosfocreatina rápidamente, sino que disminuye el estrés oxidativo e inflamatorio celular inducido por el ejercicio severo.",
          keyPoints: [
            "Resíntesis de ATP: Evita el agotamiento rápido del sustrato energético primario durante contracciones de fuerza máxima.",
            "Expansión Celular: Actúa como osmolito incrementando la captación de agua intracelular, una señal clave para la síntesis de proteínas.",
            "Glucógeno Muscular: Se ha demostrado que la coingesta de creatina con carbohidratos eleva la acumulación de glucógeno muscular post-entrenamiento.",
            "Función Cognitiva: Investigaciones recientes indican que apoya la salud cerebral y disminuye la fatiga mental bajo privación de sueño."
          ]
        }}
        faqs={[
          {
            question: "¿Debo descansar o ciclar la toma de creatina?",
            answer: "No es necesario realizar descansos. El cuerpo no disminuye su producción endógena de forma permanente al suplementarse; una vez que dejas de consumirla, los niveles vuelven a su línea base natural de manera segura. Tomarla de forma ininterrumpida mantiene los depósitos saturados al 100%."
          },
          {
            question: "¿Cuál es el mejor tipo de creatina: monohidrato, creapure, o hcl?",
            answer: "La creatina monohidrato (preferiblemente con el sello de calidad Creapure) sigue siendo la opción recomendada. Es la forma más económica y la que cuenta con el 99% de los estudios científicos de eficacia y seguridad. Variantes como la Creatina HCl o la Etil Éster son mucho más caras y no han demostrado ninguna superioridad ergogénica en ensayos clínicos."
          },
          {
            question: "¿Se debe consumir los días de descanso del gimnasio?",
            answer: "Sí, absolutamente. Dado que su mecanismo se basa en mantener los depósitos celulares saturados, saltarse los días de no entrenamiento reducirá lentamente la concentración de fosfocreatina en el músculo. Tómala a diario, idealmente a la misma hora para mantener el hábito."
          },
          {
            question: "¿Es mejor tomarla con agua caliente o zumo con carbohidratos?",
            answer: "Aunque los carbohidratos (e inyecciones asociadas de insulina) pueden acelerar marginalmente la velocidad de captación inicial de la creatina en el tejido muscular, a largo plazo la saturación final será idéntica. Puedes tomarla simplemente con agua fría, café, proteínas o cualquier bebida de tu preferencia."
          }
        ]}
      />
    </>
  );
}
