import React from "react";
import type { Metadata } from "next";
import SupplementDetailLayout from "@/components/suplementos/SupplementDetailLayout";

export const metadata: Metadata = {
  title: "Ashwagandha KSM-66: Reducir Cortisol, Testosterona y Dosis",
  description: "Descubre cómo la Ashwagandha KSM-66 modula el estrés, disminuye el cortisol y favorece la testosterona. Guía de uso de este adaptógeno deportivo.",
};

export default function AshwagandhaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Ashwagandha (Withania somnifera)",
    "description": "El adaptógeno natural más potente de la fitoterapia deportiva, con el sello KSM-66 patentado para máxima pureza y concentración de withanólidos.",
    "brand": {
      "@type": "Brand",
      "name": "Impulse Fitness"
    },
    "category": "Suplementos Deportivos",
    "image": "https://impulsefitnessmarketing.com/images/suplementos/ashwagandha.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "140"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SupplementDetailLayout 
        slug="ashwagandha"
        title="Ashwagandha (KSM-66)"
        subtitle="El adaptógeno vegetal de referencia científica. Modula tu respuesta neuro-endocrina al estrés físico y mental, optimiza la curva de cortisol y acelera la regeneración del sistema nervioso."
        image="/images/suplementos/ashwagandha.png"
        evidence="Evidencia: Grado B"
        objective="Objetivo: Modulación del Cortisol & Sistema Nervioso"
        whatIs="La Ashwagandha (Withania somnifera) es un arbusto leñoso de la familia de las solanáceas muy utilizado en la medicina tradicional ayurvédica. En la nutrición deportiva moderna, es el adaptógeno (sustancia que incrementa de forma inespecífica la capacidad de resistencia del organismo frente al estrés físico, químico o biológico) más investigado. Su mecanismo de acción principal consiste en modular el eje Hipotálamo-Hipofisario-Adrenal (HPA), optimizando la secreción de glucocorticoides (cortisol) y ejerciendo un efecto protector neuronal mimético del neurotransmisor inhibidor GABA."
        benefits={[
          "Reduce de forma clínicamente probada los niveles de Cortisol sérico en individuos sometidos a estrés crónico o entrenamiento físico severo (hasta un 25-30%).",
          "Acelera la recuperación integral del Sistema Nervioso Central (SNC), reduciendo la fatiga neuronal acumulada.",
          "Favorece el aumento de la testosterona libre y total en hombres al mitigar el ambiente catabólico inducido por el estrés prolongado.",
          "Mejora significativamente los perfiles de sueño profundo (fases de descanso no-REM), reduciendo la latencia de conciliación y la ansiedad."
        ]}
        protocol={{
          dosing: "500 a 600 miligramos diarios de extracto seco de raíz estandarizado (KSM-66), garantizando una concentración mínima del 5% de withanólidos activos.",
          timing: "Tomar preferentemente por la tarde-noche (con la cena) debido a su suave efecto calmante y su capacidad para optimizar la arquitectura del sueño.",
          notes: "Se recomienda ciclar su consumo: usar de forma continua durante 8 a 12 semanas seguidas de un descanso de 3 a 4 semanas para evitar la insensibilización adaptativa de los receptores."
        }}
        myths={[
          "Mito: 'Cualquier extracto de Ashwagandha del mercado es igual de efectivo'. Falso. La inmensa mayoría de marcas baratas usan hojas de la planta para abaratar costes, lo cual contiene un compuesto potencialmente citotóxico hepático llamado Witaferina A. El sello KSM-66 es una patente premium que garantiza el uso exclusivo de las raíces de la planta mediante un proceso de extracción limpio que preserva un espectro completo de withanólidos seguros.",
          "Mito: 'Te adormece durante el día y te quita la energía'. La Ashwagandha no es un sedante químico directo, sino un adaptógeno. Regula los niveles hormonales: si tienes fatiga extrema te ayuda a recuperar energía, y si tienes cortisol disparado (ansiedad) te calma. Tomada por la noche, favorece el sueño sin dejar sensación de letargo al día siguiente.",
          "Mito: 'Eleva la testosterona de forma artificial a niveles dopantes'. No actúa como un esteroide exógeno. La elevación de testosterona ocurre de forma indirecta: dado que el cortisol y la testosterona comparten la misma ruta de precursores esteroideos (colesterol/pregnenolona), bajar el cortisol libera recursos orgánicos para sintetizar testosterona de forma natural."
        ]}
        category="Recuperación"
        science={{
          research: "Estudios aleatorizados de control con placebo confirman que la suplementación crónica con Ashwagandha KSM-66 (600mg diarios) en atletas de fuerza disminuye significativamente la percepción de estrés y fatiga subjetiva, reduce las concentraciones de cortisol sérico, potencia de forma mensurable las ganancias de fuerza en press de banca y extensión de piernas, e incrementa la velocidad de recuperación muscular profunda de las fibras.",
          keyPoints: [
            "Modulación del Eje HPA: Equilibra el sistema neuroendocrino atenuando el pico excitador de las glándulas suprarrenales.",
            "Acción GABAérgica: Mimetiza suavemente la función del neurotransmisor GABA, calmando la hiperexcitabilidad nerviosa.",
            "Withanólidos Activos: Los principios fitoquímicos clave que ejercen los efectos biológicos adaptativos a nivel celular.",
            "Ciclos de Uso: El descanso evita que el sistema suprarrenal desarrolle un plano de tolerancia refractaria a la planta."
          ]
        }}
        faqs={[
          {
            question: "¿Qué es el extracto patentado KSM-66 y por qué es superior?",
            answer: "KSM-66 es el extracto de raíz de Ashwagandha con la mayor concentración de principios activos (withanólidos, >5%) en el mercado actual. Se extrae utilizando exclusivamente la raíz de la planta (evitando las hojas, que contienen conaferina A, potencialmente tóxica). Además, su proceso de extracción sigue principios de 'química verde' sin utilizar alcoholes o disolventes sintéticos rudimentarios."
          },
          {
            question: "¿Afecta la Ashwagandha al estado de ánimo o crea 'aplanamiento emocional'?",
            answer: "En dosis normales de 600mg al día por periodos recomendados de 8-12 semanas, la Ashwagandha modula la ansiedad y el estrés de forma muy favorable. Sin embargo, si se consume en megadosis de forma ininterrumpida sin realizar los descansos pautados de 4 semanas, algunas personas pueden experimentar un leve aplanamiento afectivo debido al exceso de calma serotoninérgica y GABAérgica. Los descansos corrigen esto."
          },
          {
            question: "¿Pueden consumirla personas con problemas de tiroides?",
            answer: "Precaución. Se ha demostrado que la Ashwagandha puede aumentar levemente los niveles de hormonas tiroideas (T3 y T4). Si bien esto es beneficioso para personas con hipotiroidismo leve, puede resultar contraproducente o peligroso para personas diagnosticadas con hipertiroidismo. En estos escenarios médicos, se debe consultar con el endocrinólogo de forma mandatoria."
          },
          {
            question: "¿Cuánto tiempo tarda en notarse el efecto adaptógeno?",
            answer: "Los efectos de calma nerviosa inicial y mejora en la profundidad del sueño suelen notarse desde la primera semana de uso regular. No obstante, los efectos sistémicos sobre la optimización del eje hormonal (testosterona), la reducción sostenida del cortisol y la fuerza muscular requieren de 4 a 8 semanas de ingesta crónica."
          }
        ]}
      />
    </>
  );
}
