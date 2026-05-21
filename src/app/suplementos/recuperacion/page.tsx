import React from "react";
import type { Metadata } from "next";
import SupplementDetailLayout from "@/components/suplementos/SupplementDetailLayout";

export const metadata: Metadata = {
  title: "Melatonina y Magnesio: Descanso Profundo, Dosis y Sueño Reparador",
  description: "Descubre el poder del combo de melatonina y magnesio bisglicinato para optimizar el sueño, relajar el sistema nervioso y acelerar la recuperación muscular.",
  keywords: ["suplementos de recuperacion", "melatonina y magnesio", "sueño profundo", "recuperacion sistema nervioso", "bisglicinato de magnesio", "arquitectura del sueño"],
};

export default function RecuperacionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Melatonina & Magnesio Bisglicinato",
    "description": "Una combinación sinérgica premium diseñada para optimizar los ciclos circadianos y relajar profundamente el sistema neuromuscular.",
    "brand": {
      "@type": "Brand",
      "name": "Impulse Fitness"
    },
    "category": "Suplementos Deportivos",
    "image": "https://impulsefitnessmarketing.com/images/suplementos/recuperacion.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "175"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SupplementDetailLayout 
        slug="recuperacion"
        title="Melatonina & Magnesio"
        subtitle="El combo definitivo para optimizar la ventana de recuperación nocturna. Sincroniza tus ritmos circadianos, relaja profundamente tu musculatura y estabiliza el sistema nervioso central."
        image="/images/suplementos/recuperacion.png"
        evidence="Evidencia: Grado A"
        objective="Objetivo: Sueño Profundo & Supercompensación Neuromuscular"
        whatIs="La recuperación y la supercompensación fisiológica no ocurren durante el entrenamiento, sino en las fases de sueño profundo no-REM y REM. Este combo une la Melatonina (una neurohormona sintetizada por la glándula pineal a partir del triptófano y la serotonina que actúa como el cronorregulador biológico maestro del ritmo circadiano) con el Magnesio Bisglicinato (un mineral esencial quelado con el aminoácido glicina, indispensable como cofactor en más de 300 reacciones enzimáticas, que actúa como un antagonista natural de los receptores NMDA excitadores y promueve la relajación del tono muscular)."
        benefits={[
          "Optimiza la arquitectura del sueño, incrementando el tiempo de permanencia en las fases reparadoras de onda lenta y sueño REM.",
          "Reduce de forma drástica la latencia del sueño (el tiempo que tardas en quedarte dormido desde que te acuestas).",
          "Promueve una relajación neuromuscular profunda y previene calambres o espasmos musculares nocturnos molestos.",
          "Ejerce una potente acción antioxidante a nivel mitocondrial cerebral, barriendo radicales libres acumulados durante el estrés del día."
        ]}
        protocol={{
          dosing: "1.5 a 3 mg de Melatonina + 200 a 400 mg de Magnesio Elemental (preferiblemente en forma de Bisglicinato de Magnesio).",
          timing: "Consumir estrictamente entre 30 y 45 minutos antes de apagar las luces para acostarse a dormir.",
          notes: "Para maximizar la efectividad, acompaña la suplementación con higiene del sueño: evita la exposición a luz azul de pantallas y móviles al menos 1 hora antes de acostarte, ya que la luz azul destruye la melatonina natural."
        }}
        myths={[
          "Mito: 'La melatonina crea adicción o deprime tu producción natural para siempre'. Falso. Múltiples ensayos clínicos confirman que la suplementación con melatonina exógena a corto y medio plazo no suprime la secreción endógena de la glándula pineal (no hay efecto de retroalimentación negativa permanente) y no crea dependencia física o síndrome de abstinencia.",
          "Mito: 'Cualquier forma de Magnesio de farmacia sirve por igual'. Totalmente incorrecto. El Óxido de Magnesio es la forma más común y barata en farmacias, pero posee una biodisponibilidad y absorción intestinal inferior al 4%, provocando un fuerte efecto laxante. Para relajar el sistema nervioso y el músculo, se debe buscar obligatoriamente Magnesio Bisglicinato o Citrato, que tienen una asimilación celular superior y no alteran el colon.",
          "Mito: 'Es un sedante químico similar a los ansiolíticos farmacéuticos'. No funciona bloqueando las funciones cerebrales. La melatonina simplemente le da la señal biológica de 'es de noche' a tu reloj circadiano maestro (núcleo supraquiasmático), facilitando la cascada natural del sueño sin provocar somnolencia o aturdimiento al despertar."
        ]}
        category="Salud"
        science={{
          research: "Estudios clínicos sobre polisomnografía demuestran que el consumo sinérgico de melatonina y magnesio de alta biodisponibilidad aumenta significativamente la calidad del descanso en deportistas sometidos a altas cargas de fatiga central (SNC), reduciendo los despertares nocturnos y normalizando la hormona del crecimiento (GH) y la síntesis de proteínas que ocurren durante el sueño profundo.",
          keyPoints: [
            "Cronobiología Activa: Sincroniza los relojes periféricos de los órganos y tejidos musculares con el ciclo natural día/noche.",
            "Relajante GABAérgico: El magnesio bisglicinato y la glicina unida estimulan suavemente los receptores GABA-A cerebrales.",
            "Antagonismo NMDA: Bloquea la entrada excesiva de calcio en las neuronas, calmando la hiperexcitabilidad nerviosa del entrenamiento tardío.",
            "Supercompensación: El descanso de calidad es el único entorno metabólico donde se repara el tejido y se recarga el glucógeno."
          ]
        }}
        faqs={[
          {
            question: "¿Por qué el Bisglicinato de Magnesio es superior a otras formas de magnesio?",
            answer: "El Bisglicinato de Magnesio está quelado (unido) a dos moléculas del aminoácido Glicina. Esto le confiere dos ventajas fisiológicas brutales: primero, utiliza los transportadores de aminoácidos en el intestino en lugar de los canales minerales competitivos, logrando una absorción máxima sin diarreas. Segundo, la glicina actúa de forma independiente en el cerebro como un neurotransmisor inhibidor que reduce la temperatura corporal y calma el sistema nervioso central, potenciando el sueño."
          },
          {
            question: "¿Tiene la melatonina propiedades antioxidantes?",
            answer: "Sí, es uno de los antioxidantes endógenos más potentes conocidos. A diferencia de otros antioxidantes, la melatonina atraviesa con facilidad la barrera hematoencefálica y las membranas celulares, protegiendo las mitocondrias de las neuronas del daño oxidativo crónico inducido por el entrenamiento intensivo y los radicales libres metabólicos."
          },
          {
            question: "¿Tomar melatonina provocará pesadillas o sueños muy vívidos?",
            answer: "Al suplementarte con melatonina, se puede producir una prolongación de la fase de sueño REM (donde ocurren la mayoría de los sueños estructurados). Si tu sueño REM estaba muy recortado por el estrés o malos hábitos, este efecto de 'rebote REM' puede hacer que experimentes sueños muy detallados y vívidos al inicio de la suplementación, lo cual es una señal inequívoca de recuperación cerebral profunda."
          },
          {
            question: "¿Es seguro tomar este combo todos los días?",
            answer: "Sí, es sumamente seguro para un uso continuado. El magnesio bisglicinato puede y debe tomarse a diario, ya que la deficiencia de magnesio en atletas que sudan con frecuencia es crónica. La melatonina es segura para consumirse a diario durante periodos de 3 a 6 meses seguidos, especialmente útil en épocas de exámenes, viajes frecuentes (jet lag) o temporadas de entrenamiento muy severas."
          }
        ]}
      />
    </>
  );
}
