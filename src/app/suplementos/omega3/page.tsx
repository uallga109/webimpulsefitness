import React from "react";
import type { Metadata } from "next";
import SupplementDetailLayout from "@/components/suplementos/SupplementDetailLayout";

export const metadata: Metadata = {
  title: "Omega 3 (EPA y DHA): Beneficios, Dosis Óptima y Antiinflamatorio",
  description: "Aprende cómo el Omega 3 (EPA y DHA) reduce la inflamación articular, mejora la salud cardiovascular y optimiza la síntesis de proteínas. Guía de dosis y calidad.",
  keywords: ["omega 3 suplemento", "beneficios omega 3", "epa y dha dosis", "antiinflamatorio muscular", "salud cardiovascular", "acidos grasos"],
};

export default function Omega3Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Omega 3 (EPA y DHA)",
    "description": "Ácidos grasos esenciales poliinsaturados de cadena larga clave para el control inflamatorio sistémico y la integridad celular.",
    "brand": {
      "@type": "Brand",
      "name": "Impulse Fitness"
    },
    "category": "Suplementos Deportivos",
    "image": "https://impulsefitnessmarketing.com/images/suplementos/omega3.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "165"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SupplementDetailLayout 
        slug="omega3"
        title="Omega 3 (EPA & DHA)"
        subtitle="El modulador inflamatorio sistémico indispensable. Optimiza la fluidez de tus membranas celulares, protege tus articulaciones del estrés articular y promueve la salud cardiovascular integral."
        image="/images/suplementos/omega3.png"
        evidence="Evidencia: Grado A"
        objective="Objetivo: Salud Cardiovascular & Antiinflamatorio"
        whatIs="El Omega 3 es una familia de ácidos grasos poliinsaturados de cadena larga (PUFAs). Los dos miembros más activos biológicamente en humanos son el Ácido Eicosapentaenoico (EPA) y el Ácido Docosahexaenoico (DHA). Al ser ácidos grasos 'esenciales', el organismo no los puede sintetizar a partir de otras grasas de forma eficiente (la conversión a partir de fuentes vegetales como el ALA es inferior al 5%). Se incorporan a los fosfolípidos de las membranas celulares de todo el cuerpo, determinando su permeabilidad y modulando las cascadas de señalización inmunológica."
        benefits={[
          "Ejerce un potente efecto antiinflamatorio sistémico al competir con el ácido araquidónico, reduciendo citocinas proinflamatorias como IL-6 y TNF-alfa.",
          "Protege activamente la integridad del cartílago articular, mitigando el desgaste y las molestias del entrenamiento pesado crónico.",
          "Mejora notablemente el perfil lipídico plasmático reduciendo los triglicéridos y optimizando la salud cardiovascular y endotelial.",
          "Aumenta la sensibilidad a la insulina celular y, en investigaciones recientes, demuestra potenciar la síntesis proteica muscular al sensibilizar la vía mTOR."
        ]}
        protocol={{
          dosing: "1.5 a 3 gramos netos combinados de EPA y DHA activos al día (no confundir con 1-3g de aceite de pescado total, que suele contener solo 30% de principios activos).",
          timing: "Consumir junto a las comidas principales que contengan otras grasas para garantizar una correcta absorción y asimilación lipídica.",
          notes: "Busca siempre suplementos que cuenten con la certificación independiente IFOS (International Fish Oil Standards), la cual garantiza la pureza frente a metales pesados, PCB y oxidación de las grasas."
        }}
        myths={[
          "Mito: 'Las semillas de chía o lino aportan suficiente Omega 3'. Las fuentes vegetales contienen Ácido Alfa-Linolénico (ALA). Para que el ALA sea útil, el cuerpo debe convertirlo en EPA y DHA. En adultos humanos sanos, la tasa de conversión es extremadamente baja (menos del 5-8% para EPA y menos del 1% para DHA), haciendo obligatoria la ingesta de aceite de pescado, krill o microalgas concentradas.",
          "Mito: '1000mg de aceite de pescado equivalen a 1000mg de Omega 3'. Falso. La mayoría de perlas comerciales de baja calidad de 1000mg de aceite de pescado solo contienen 180mg de EPA y 120mg de DHA (un 30% útil); el 70% restante son otras grasas de relleno. Se debe leer siempre el reverso de la etiqueta para sumar únicamente los miligramos reales de EPA + DHA.",
          "Mito: 'Todas las grasas poliinsaturadas son iguales'. El exceso de grasas Omega-6 (muy abundantes en aceites vegetales refinados y ultraprocesados) desplaza metabólicamente al Omega-3, fomentando un estado inflamatorio crónico de bajo grado. Mantener una proporción equilibrada es el objetivo clave."
        ]}
        category="Salud"
        science={{
          research: "Estudios clínicos de primer nivel demuestran que dosis diarias altas de EPA y DHA (2-3g netos) atenúan los marcadores inflamatorios musculares y reducen las agujetas post-esfuerzo, además de potenciar la respuesta de ganancia de fuerza muscular en deportistas al mejorar la sensibilidad del ribosoma p70S6K y optimizar la flexibilidad mitocondrial.",
          keyPoints: [
            "Fluidez de Membrana: Permite que las células de los tejidos musculares absorban aminoácidos y glucosa de forma más eficiente.",
            "Modulación de Eicosanoides: Promueve la síntesis de mediadores resolutivos de la inflamación (resolvinas y protectinas) tras entrenamientos agresivos.",
            "Prevención Cardiovascular: Ayuda a estabilizar la placa de ateroma y a regular la presión arterial de manera suave.",
            "Certificación IFOS: Exclusivo sello de calidad que certifica un índice de oxidación (totox) bajo y la ausencia total de mercurio o plomo."
          ]
        }}
        faqs={[
          {
            question: "¿Por qué es tan importante buscar el sello de certificación IFOS?",
            answer: "Los aceites de pescado son sumamente inestables y propensos a la oxidación por calor o luz, volviéndose rancios (lo cual genera un efecto pro-inflamatorio contraproducente). Además, el pescado azul tiende a acumular metales pesados (mercurio, plomo, cadmio) y toxinas marinas (dioxinas). La certificación IFOS analiza de forma externa cada lote para garantizar que el producto está 100% libre de contaminantes y no está oxidado."
          },
          {
            question: "¿Puedo obtener suficiente Omega 3 si como pescado dos veces por semana?",
            answer: "Consumir pescado azul (salmón, sardinas, caballa, arenque) dos veces por semana es excelente para la salud. Sin embargo, para atletas de fuerza que someten sus tejidos a un estrés diario elevado y buscan un efecto marcadamente antiinflamatorio y protector articular, la dosis terapéutica recomendada suele ser difícil de alcanzar de forma exclusiva con la dieta habitual, haciendo muy conveniente la suplementación."
          },
          {
            question: "¿Qué ocurre si soy vegetariano o vegano, cómo puedo tomarlo?",
            answer: "Para la comunidad vegana o vegetariana, existen suplementos excepcionales de Omega 3 obtenidos directamente de aceites de microalgas marinas cultivadas en entornos controlados de laboratorio. De hecho, las algas son la fuente original de donde los peces obtienen el EPA y el DHA. Son igual de eficaces y biodisponibles que el aceite de pescado convencional."
          },
          {
            question: "¿Tiene efectos secundarios o contraindicaciones?",
            answer: "El Omega 3 es extremadamente seguro. En dosis muy elevadas (superiores a 5-6g netos diarios) puede poseer un leve efecto anticoagulante. Por lo tanto, personas que tomen medicamentos anticoagulantes (como Sintrom o aspirina diaria) o vayan a someterse a una cirugía programada deben regular y consultar a su especialista médico la idoneidad de la suplementación."
          }
        ]}
      />
    </>
  );
}
