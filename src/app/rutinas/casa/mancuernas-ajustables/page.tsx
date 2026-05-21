import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Mancuernas Ajustables: Hipertrofia y Fuerza en Casa | Impulse Fitness",
  description: "Aprende a entrenar con mancuernas ajustables en casa. Guía de biomecánica de la tensión mecánica, sobrecarga progresiva real y floor press de pecho.",
  keywords: [
    "mancuernas ajustables casa",
    "pesas ajustables opiniones",
    "floor press mancuernas pecho",
    "sobrecarga progresiva hipertrofia",
    "mancuernas bowflex selectorizadas",
    "ejercicios mancuernas cuerpo completo",
    "ahorrar espacio gimnasio casa"
  ],
};

export default function MancuernasAjustablesPage() {
  const biomechanics = {
    explanation: "El entrenamiento con mancuernas ajustables representa el medio más directo para aplicar tensión mecánica pasiva y activa, el principal impulsor de la hipertrofia miofibrilar. Biomecánicamente, al ser pesos libres unidireccionales dictados por la gravedad, permiten adaptar la trayectoria del movimiento a los planos de deslizamiento naturales de cada articulación, respetando la individualidad anatómica a diferencia de las barras rígidas. Permiten además aplicar sobrecarga progresiva lineal mediante incrementos exactos de masa, forzando la activación de los mecanorreceptores celulares de los miocitos que estimulan la vía de señalización mTOR y la síntesis de proteínas musculares.",
    mechanisms: [
      "Generación de tensión mecánica de alta densidad mediante sobrecarga axial y apendicular.",
      "Adaptación del vector de movimiento a la orientación de las fibras (ej. planos de empuje a 45º).",
      "Reclutamiento masivo de estabilizadores sinérgicos para controlar la trayectoria tridimensional libre."
    ]
  };

  const topExercises = [
    {
      name: "Press de Pecho en el Suelo (Floor Press)",
      target: "Pectoral Mayor (Fibras Medias e Inferiores) y Tríceps Braquial",
      desc: "Excelente alternativa al press de banca plano que restringe la extensión del hombro limitando el rango articular nocivo, protegiendo el manguito rotador.",
      tip: "Mantén los codos en un ángulo de 45 grados respecto al torso (forma de flecha, nunca en T) y realiza una breve pausa de 1 segundo en el suelo para anular la elasticidad."
    },
    {
      name: "Sentadilla Goblet Profunda",
      target: "Cuádriceps, Glúteo Mayor y Core Anterior",
      desc: "Variación de sentadilla cargada por delante que fomenta de manera natural la verticalidad del torso, ideal para quienes carecen de movilidad de tobillo.",
      tip: "Sujeta la mancuerna firmemente contra tu pecho por debajo del mentón y asegúrate de empujar las rodillas hacia afuera al descender."
    },
    {
      name: "Remo Unilateral Apoyado con Mancuerna",
      target: "Dorsal Ancho, Trapecio, Romboides y Deltoides Posterior",
      desc: "Un reto masivo de tracción horizontal unilateral que estabiliza el torso mediante un punto de apoyo, permitiendo aislar el dorsal con pesos altos.",
      tip: "No tires de la mancuerna verticalmente hacia tu pecho; realiza una trayectoria curva llevando el peso hacia la cadera baja."
    }
  ];

  const faqs = [
    {
      question: "¿Cuáles son las ventajas de las mancuernas selectorizadas (de dial) frente a las de rosca tradicionales?",
      answer: "Las mancuernas selectorizadas (tipo Bowflex o PowerBlock) permiten cambiar de peso en apenas 2 segundos mediante el giro de un dial o la inserción de una clavija, lo cual es óptimo para realizar series descendentes (drop sets) o superseries dinámicas. Además, condensan hasta 15 pares de pesas en un solo bloque estático. Las de rosca tradicionales son más lentas de cambiar, pero son infinitamente más resistentes a golpes y caídas accidentales."
    },
    {
      question: "¿Cómo puedo calentar de manera segura antes de levantar peso pesado en casa?",
      answer: "Debes realizar un calentamiento dinámico estructurado de 3 fases:\n1. Movilidad General: Movimientos de rotación articular para lubricar con líquido sinovial los hombros, codos y muñecas.\n2. Activación: Planchas cortas o flexiones inclinadas para encender el sistema neuromuscular del core y estabilizadores escapulares.\n3. Series de Aproximación: Realiza el primer ejercicio planificado utilizando solo el 40% del peso de tu serie de trabajo, subiendo progresivamente en 2-3 series cortas hasta llegar al peso real."
    },
    {
      question: "¿Qué rango de repeticiones debo priorizar para ganar fuerza y músculo con mancuernas?",
      answer: "Para hipertrofia general, la ciencia moderna respalda que cualquier rango entre 6 y 20 repeticiones es altamente efectivo siempre que la serie se culmine a una intensidad de RIR 1-2 (1 o 2 repeticiones antes del fallo real). Prioriza rangos de 6-10 repeticiones para ejercicios compuestos pesados (como el Floor Press o Peso Muerto Rumano) y de 12-20 repeticiones para movimientos de aislamiento (como elevaciones laterales o curl de bíceps)."
    }
  ];

  return (
    <ExerciseDetailLayout 
      slug="mancuernas-ajustables"
      title="Mancuernas Ajustables"
      subtitle="El estándar de oro para la hipertrofia en casa mediante sobrecarga progresiva."
      image="/images/ejercicios/brazos.png"
      category="Con Accesorios"
      muscles={{
        primary: "Todo el cuerpo: Pectorales, dorsales, hombros, cuádriceps, glúteos e isquiotibiales.",
        secondary: "Músculos flexores del antebrazo (fuerza de agarre) y estabilidad del core profundo."
      }}
      material={[
        "Par de mancuernas ajustables (de dial selector o de rosca tradicional).",
        "Opcional: Banco reclinable estable o colchoneta gruesa para el suelo."
      ]}
      keyExercise={{
        name: "Press de Pecho en Suelo (Floor Press)",
        steps: [
          "Túmbate boca arriba en el suelo con las rodillas flexionadas a 90 grados y los pies apoyados planos.",
          "Sujeta las mancuernas firmemente sobre tu pecho con los brazos completamente extendidos.",
          "Desciende los brazos lentamente, abriendo los codos en un ángulo de 45 grados respecto a tus costillas.",
          "Toca suavemente el suelo con la parte posterior de tus brazos (tríceps) y realiza una pausa estática de 1 segundo.",
          "Empuja de forma explosiva hacia arriba contrayendo el pectoral mayor, sin golpear las mancuernas arriba."
        ]
      }}
      benefits={[
        "Sobrecarga de alta eficiencia: Facilita la aplicación de incrementos medibles y constantes de peso para forzar adaptaciones mecánicas.",
        "Ahorro de volumen excepcional: Sustituye a una hilera comercial completa de pesas fijas, perfecto para pisos pequeños.",
        "Ergonomía articular libre: Al permitir la rotación natural de la muñeca y el brazo, reduce drásticamente el riesgo de lesiones de codo y hombro."
      ]}
      commonErrors={[
        "Realizar balanceos de torso o cadera para compensar la carga (ego lifting), disipando la tensión real del grupo muscular objetivo.",
        "Dejar caer los pesos bruscamente contra el suelo en la fase excéntrica, perdiendo el estímulo excéntrico profundo.",
        "Bloquear los hombros hacia adelante (protracción) en el Floor Press, anulando el aislamiento del pectoral."
      ]}
      biomechanics={biomechanics}
      topExercises={topExercises}
      faqs={faqs}
    />
  );
}
