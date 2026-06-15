import React from "react";
import type { Metadata } from "next";
import SupplementDetailLayout from "@/components/suplementos/SupplementDetailLayout";

export const metadata: Metadata = {
  title: "Proteína Whey: Tipos (Aislado, Concentrado), Dosis y Síntesis Proteica",
  description: "Aprende todo sobre la proteína de suero de leche (Whey). Guía científica sobre absorción, umbral de leucina, diferencias entre aislado y concentrado, y mitos.",
};

export default function WheyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Proteína de Suero (Whey Protein)",
    "description": "La fuente de proteína de mayor valor biológico y velocidad de asimilación para optimizar la síntesis proteica muscular.",
    "brand": {
      "@type": "Brand",
      "name": "Impulse Fitness"
    },
    "category": "Suplementos Deportivos",
    "image": "https://impulsefitnessmarketing.com/images/suplementos/whey.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "340"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SupplementDetailLayout 
        slug="whey"
        title="Proteína de Suero (Whey)"
        subtitle="La fuente proteica con el valor biológico más elevado del planeta. Potencia la reconstrucción de miofibrillas, acelera tu recuperación post-esfuerzo y maximiza la ganancia de masa muscular."
        image="/images/suplementos/whey.png"
        evidence="Evidencia: Grado A"
        objective="Objetivo: Hipertrofia & Recuperación"
        whatIs="La proteína de suero de leche (Whey Protein) es una mezcla de proteínas globulares aisladas del suero líquido, un subproducto obtenido durante el proceso de coagulación y fabricación del queso. Se compone principalmente de beta-lactoglobulina, alfa-lactalbúmina, albúmina de suero bovino e inmunoglobulinas. Destaca clínicamente por poseer una digestibilidad excepcional (puntuación PDCAAS de 1.0), un perfil completo de aminoácidos esenciales y una absorción gastrointestinal sumamente rápida."
        benefits={[
          "Estimula de forma potente la cascada de señalización anabólica celular vía mTORC1 debido a su elevadísima concentración de Leucina (~3g por toma).",
          "Acelera los procesos de reparación de microrroturas miofibrilares inducidas por el entrenamiento con cargas pesadas.",
          "Facilita la consecución de las necesidades proteicas diarias del atleta de forma cómoda, limpia, rápida y muy económica por gramo neto.",
          "Favorece la preservación de masa muscular magra en fases de déficit calórico estricto gracias a su efecto altamente anticatabólico."
        ]}
        protocol={{
          dosing: "25 a 40 gramos por toma (aportando un mínimo de 2.5-3g de Leucina), ajustado de acuerdo a los requerimientos proteicos diarios globales del individuo.",
          timing: "Aunque la ventana anabólica post-entrenamiento es mucho más amplia de lo que se creía (hasta 4-6 horas), consumirla en las primeras 2 horas post-esfuerzo optimiza la resíntesis de proteínas.",
          notes: "Puede tomarse con agua, leche o bebidas vegetales. Consumirla con agua acelera ligeramente la absorción, mientras que con leche la hace más lenta y sostenida en el tiempo."
        }}
        myths={[
          "Mito: 'Es un compuesto químico dañino o no natural'. La proteína Whey es simplemente suero de leche deshidratado y filtrado mediante procesos mecánicos. Es un alimento tan natural como la leche líquida o el queso, con un nivel de procesamiento físico mínimo.",
          "Mito: 'Engorda o crea retención de grasa'. Ningún alimento engorda por sí mismo; el aumento de peso está determinado por un superávit calórico total. La proteína de suero es muy saciante y tiene un efecto termogénico elevado, lo cual la hace ideal para perder peso.",
          "Mito: 'Es obligatoria justo al terminar de entrenar'. No existe una ventana de 30 minutos mágica. Lo que importa para la hipertrofia es el volumen total de proteína diaria y repartirla adecuadamente a lo largo del día en tomas consistentes."
        ]}
        category="Masa Muscular"
        science={{
          research: "Estudios clínicos controlados demuestran que la suplementación con proteína de suero de leche, cuando se combina con entrenamiento de fuerza de resistencia progresiva, promueve mayores ganancias de masa libre de grasa y fuerza en comparación con otras fuentes proteicas como la soja o la caseína micelar, debido a su mayor velocidad de digestión y su rica concentración en aminoácidos de cadena ramificada (BCAAs).",
          keyPoints: [
            "Valor Biológico Supremo: Puntuación de 104, superando al huevo (100) y la carne vacuna (80).",
            "Umbral de Leucina: Proporciona de forma fácil los 3g de Leucina necesarios para 'encender' la síntesis proteica.",
            "Fracciones Bioactivas: Contiene lactoferrina e inmunoglobulinas que refuerzan activamente la función inmune sistémica.",
            "Saciedad Mecánica: Estimula la liberación de péptidos saciantes (como el GLP-1 y el CCK) en el intestino delgado."
          ]
        }}
        faqs={[
          {
            question: "¿Cuál es la diferencia entre concentrado, aislado e hidrolizado de suero?",
            answer: "El Concentrado (WPC) tiene un 70-80% de proteína, conteniendo pequeñas trazas de lactosa y grasa. Es el más económico y conserva la mayoría de fracciones bioactivas. El Aislado (WPI) se filtra más a fondo, logrando un 90% de proteína pura y estando virtualmente libre de lactosa y grasas (ideal para intolerantes severos). El Hidrolizado (WPH) contiene proteínas pre-digeridas enzimáticamente para una absorción aún más rápida, siendo el más costoso pero con una diferencia ergogénica mínima en atletas sanos."
          },
          {
            question: "¿Es perjudicial para los riñones a largo plazo?",
            answer: "No. En personas con riñones sanos, una ingesta alta en proteínas (incluso superior a 2.2g/kg de peso) no induce ningún tipo de patología renal o daño funcional. Únicamente personas con enfermedad renal crónica preexistente deben restringir el consumo de proteínas bajo estricta supervisión médica."
          },
          {
            question: "¿Es mejor tomarla con agua o con leche?",
            answer: "Depende de tus objetivos y tolerancia digestiva. Tomarla con agua disminuye el aporte calórico y acelera la velocidad de absorción, lo cual es ideal post-entreno. Tomarla con leche retarda la digestión (aportando caseína de liberación lenta), ideal para periodos de ayuno o antes de dormir, además de mejorar la textura y el sabor."
          },
          {
            question: "¿Puedo tomarla si soy intolerante a la lactosa?",
            answer: "Si tu intolerancia es leve a moderada, el concentrado de suero suele tolerarse bien. Sin embargo, para personas con intolerancia severa o que sufren de inflamación intestinal, es altamente recomendable optar por un Aislado de Proteína (WPI) obtenido por microfiltración de flujo cruzado (CFM), ya que contiene porcentajes indetectables de lactosa."
          }
        ]}
      />
    </>
  );
}
