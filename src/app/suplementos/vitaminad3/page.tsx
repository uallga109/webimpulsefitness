import React from "react";
import type { Metadata } from "next";
import SupplementDetailLayout from "@/components/suplementos/SupplementDetailLayout";

export const metadata: Metadata = {
  title: "Vitamina D3: Dosis Diaria, Hormona del Sol y Rendimiento Deportivo",
  description: "Aprende todo sobre la Vitamina D3 (Colecalciferol). Su papel clave como pro-hormona en la testosterona, fuerza muscular, absorción de calcio y salud ósea.",
};

export default function VitaminaD3Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Vitamina D3 (Colecalciferol)",
    "description": "Una pro-hormona esteroidea sintetizada por la luz solar, indispensable para la función inmunológica, el rendimiento de fuerza muscular y la salud de los huesos.",
    "brand": {
      "@type": "Brand",
      "name": "Impulse Fitness"
    },
    "category": "Suplementos Deportivos",
    "image": "https://impulsefitnessmarketing.com/images/suplementos/vitaminad3.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "195"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SupplementDetailLayout 
        slug="vitaminad3"
        title="Vitamina D3 (Colecalciferol)"
        subtitle="Más que una vitamina, una potente pro-hormona esteroidea. Optimiza tu síntesis hormonal, maximiza tu potencia de contracción muscular y blinda tu salud ósea e inmunológica."
        image="/images/suplementos/vitaminad3.png"
        evidence="Evidencia: Grado A"
        objective="Objetivo: Soporte Hormonal & Salud Inmune"
        whatIs="La vitamina D3 (Colecalciferol) es un secosteroide sintetizado en la piel a partir del 7-deshidrocolesterol mediante la exposición a la radiación ultravioleta B (UVB) solar. Sufre dos hidroxilaciones metabólicas para activarse: la primera en el hígado, convirtiéndose en calcidiol [25(OH)D], y la segunda principalmente en los riñones, dando lugar a la hormona biológicamente activa calcitriol [1,25(OH)2D]. La hormona activa se une al receptor de vitamina D (VDR) presente en casi todas las células humanas, modulando la expresión de más de 2000 genes."
        benefits={[
          "Esencial para la regulación homeostática del Calcio y el Fósforo, garantizando una correcta mineralización y densidad ósea.",
          "Estimula de forma directa los receptores VDR en las fibras musculares esqueléticas tipo II (de fuerza rápida), aumentando la potencia muscular.",
          "Modula activamente el sistema inmunológico innato y adaptativo, reduciendo la incidencia de infecciones respiratorias agudas.",
          "Optimiza la síntesis de testosterona libre y total en hombres con niveles séricos deficientes preexistentes."
        ]}
        protocol={{
          dosing: "2.000 a 5.000 UI (Unidades Internacionales) al día, ajustadas mediante analíticas sanguíneas individuales.",
          timing: "Consumir junto a la comida más copiosa del día que contenga grasas saludables (al ser una vitamina liposoluble requiere lípidos para su correcta absorción entérica).",
          notes: "Se recomienda encarecidamente combinar su ingesta con Vitamina K2 (especialmente la forma MK-7) para asegurar que el calcio absorbido se dirija directamente a los huesos y dientes en lugar de calcificar los tejidos blandos o las arterias."
        }}
        myths={[
          "Mito: 'Si vivo en un país con mucho sol, no tengo deficiencia'. Falso. La síntesis cutánea depende drásticamente de factores como el uso de cremas solares (un factor de protección 15 reduce la síntesis en un 99%), el ángulo del sol (en invierno el sol no tiene la inclinación necesaria en latitudes templadas), la contaminación y el estilo de vida de oficina. Los estudios sugieren deficiencias de hasta el 80% en países muy soleados de la cuenca mediterránea.",
          "Mito: 'Tomar más siempre es mejor y no tiene riesgos'. Al ser una vitamina liposoluble, se almacena en el tejido graso corporal y no se excreta de forma fácil por la orina. Tomar megadosis sin control analítico (ej. superiores a 10.000 UI diarias durante meses) puede generar hipercalcemia y toxicidad.",
          "Mito: 'Los alimentos son suficientes para cubrir mis necesidades'. Muy pocos alimentos contienen cantidades representativas de vitamina D3 natural (pescado azul graso, yema de huevo y lácteos enriquecidos). Llegar a los niveles óptimos diarios solo con dieta es metabólicamente inviable para la inmensa mayoría."
        ]}
        category="Salud"
        science={{
          research: "Investigaciones endocrinológicas modernas muestran que mantener niveles séricos de 25(OH)D en el rango óptimo (entre 40 y 60 ng/ml) mejora significativamente el rendimiento atlético al aumentar la fuerza explosiva en ejercicios multiarticulares, optimizar el perfil lipídico e inmune y acelerar de forma directa los procesos de recuperación neuromuscular de los tejidos musculares dañados.",
          keyPoints: [
            "Receptores VDR Músculo: Regula la síntesis de proteínas musculares y el reclutamiento celular rápido de unidades motoras.",
            "Inmunomodulador: Estimula la síntesis de péptidos antimicrobianos (catelicidinas) en las defensas corporales.",
            "Homeostasis del Calcio: Abre canales intestinales facilitando la asimilación del calcio dietético imprescindible para los huesos.",
            "Sinergia K2: La osteocalcina activada por la vitamina D requiere vitamina K2 para fijar el calcio de forma estable al hueso."
          ]
        }}
        faqs={[
          {
            question: "¿Cuál es la diferencia entre Vitamina D2 y Vitamina D3?",
            answer: "La Vitamina D2 (Ergocalciferol) es de origen vegetal (hongos expuestos a luz UV). La Vitamina D3 (Colecalciferol) es de origen animal (sintetizada en la piel o extraída de la lanolina de oveja) y es idéntica a la que produce el ser humano. Los estudios clínicos demuestran que la Vitamina D3 es hasta 3 veces más eficaz para elevar y mantener los niveles séricos de almacenamiento plasmático de calcidiol."
          },
          {
            question: "¿Por qué debo tomar la Vitamina D3 combinada con Vitamina K2?",
            answer: "La Vitamina D3 aumenta de forma masiva la absorción de calcio en el intestino. No obstante, para que ese calcio se deposite realmente en los huesos (salud ósea) y no flote en el torrente sanguíneo calcificando las paredes arteriales (ateroesclerosis) o creando cálculos renales, se requiere de la Vitamina K2, la cual activa la proteína osteocalcina y la MGP, encargadas de depositar el calcio en los huesos y retirar la calcificación blanda."
          },
          {
            question: "¿Cómo sé si tengo deficiencia y cuál es el rango sanguíneo óptimo?",
            answer: "La única forma fiable es solicitar en tu analítica de sangre el parámetro '25-hidroxivitamina D' o '25(OH)D'. El rango de deficiencia clínica severa se sitúa por debajo de los 20 ng/ml; la insuficiencia entre 20 y 30 ng/ml. Para un rendimiento deportivo de fuerza óptimo, la salud inmunológica y el soporte hormonal máximo, el rango ideal se sitúa entre los 40 y 60 ng/ml."
          },
          {
            question: "¿Puede la Vitamina D3 elevar los niveles de testosterona de verdad?",
            answer: "Sí, pero bajo una condición: solo en hombres que presenten niveles séricos deficientes de Vitamina D3 de forma previa. En este sector, normalizar la concentración plasmática mediante suplementación a niveles óptimos ha demostrado en estudios clínicos controlados aumentar de forma representativa los niveles de testosterona libre y total, debido a la alta densidad de receptores VDR en los testículos."
          }
        ]}
      />
    </>
  );
}
