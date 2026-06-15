import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Miniparalelas (Parallettes): Calistenia y Empuje Avanzado | Impulse Fitness",
  description: "Protege tus muñecas y aumenta el rango de movimiento con miniparalelas. Guía biomecánica para dominar L-sit, fondos y progresiones de calistenia.",
};

export default function MiniparalelasPage() {
  const biomechanics = {
    explanation: "El uso de miniparalelas (parallettes) modifica drásticamente la cinemática de los ejercicios de empuje con peso corporal. Biomecánicamente, al permitir un agarre neutro, reducen la flexión extrema de la muñeca (que en el suelo es de 90 grados bajo carga axial), eliminando el cizallamiento en el túnel carpiano y el ligamento triangular. Adicionalmente, elevan el centro de masas corporal con respecto a la base de sustentación, lo que permite un recorrido de flexión extendido (déficit) que incrementa el estiramiento excéntrico de las fibras del pectoral mayor e introduce una mayor palanca mecánica para reclutar los deltoides anteriores.",
    mechanisms: [
      "Ergonomía articular mediante el mantenimiento de la muñeca en alineación neutra y neutra-radial.",
      "Aumento del rango de recorrido dinámico (ROM) superando el plano del suelo.",
      "Demanda neuromuscular de depresión y protracción escapular para sostener el cuerpo en suspensión."
    ]
  };

  const topExercises = [
    {
      name: "L-Sit (Escuadra isométrica)",
      target: "Abdomen Transverso, Recto Abdominal, Iliopsoas y Tríceps Braquial",
      desc: "El ejercicio de fuerza isométrica de core definitivo en calistenia. Exige mantener el torso suspendido y las piernas paralelas al suelo.",
      tip: "Enfócate en deprimir activamente la escápula (empujar las barras con fuerza hacia abajo, alejando los hombros de las orejas) para ganar altura."
    },
    {
      name: "Flexiones en Déficit Escapular",
      target: "Pectoral Mayor, Deltoides Anterior y Tríceps Braquial",
      desc: "Flexiones profundas que descienden por debajo de la altura de las manos, logrando una elongación de fibras pectorales imposible de replicar en el suelo.",
      tip: "Baja con un tempo lento y controlado (3 segundos) para capitalizar el estímulo hipertrófico de la fase excéntrica."
    },
    {
      name: "Fondos de Tríceps en Parallettes",
      target: "Tríceps Braquial, Pectoral Menor y Deltoides Anterior",
      desc: "Excelente constructor de la porción lateral del tríceps aprovechando la elevación para completar un recorrido articular completo.",
      tip: "Evita que tus hombros roten internamente (hacia adelante) al llegar a la parte baja del movimiento. Abre el pecho."
    }
  ];

  const faqs = [
    {
      question: "¿Es mejor comprar miniparalelas de madera, metal o plástico PVC?",
      answer: "Las de madera son la opción de élite por su ergonomía. Absorben el sudor de las manos de forma natural, garantizando un agarre óptimo sin deslizamientos y reduciendo la necesidad de usar magnesio. Las de acero son extremadamente duraderas y estables, pero pueden resultar resbaladizas si no se recubren. Las de PVC son ligeras y baratas, pero carecen de la rigidez necesaria para cargas pesadas o ejercicios dinámicos."
    },
    {
      question: "¿Cómo puedo empezar si no tengo fuerza para sostener el L-Sit?",
      answer: "El L-Sit es un ejercicio sumamente exigente. Puedes progresar de la siguiente manera:\n1. Tuck L-Sit: Mantén las rodillas flexionadas pegadas al pecho en suspensión.\n2. L-Sit a una pierna: Extiende una pierna mientras dejas la otra flexionada, alternando lados.\n3. L-Sit asistido: Mantén los talones ligeramente apoyados en el suelo mientras empujas con tus brazos para activar la cintura escapular."
    },
    {
      question: "¿Por qué me duelen los flexores de la cadera al levantar las piernas?",
      answer: "Esto se debe a la 'insuficiencia activa' de los flexores de la cadera (principalmente el psoas ilíaco y el recto femoral). Al flexionar la cadera al máximo con rodillas extendidas, estos músculos se acortan tanto que experimentan espasmos o calambres de defensa. Es completamente normal y mejora con el fortalecimiento isométrico y la flexibilización de los isquiotibiales."
    }
  ];

  return (
    <ExerciseDetailLayout 
      slug="miniparalelas"
      title="Miniparalelas (Parallettes)"
      subtitle="Empuje avanzado y calistenia de alto nivel para un dominio total del peso corporal."
      image="/images/ejercicios/miniparalelas.png"
      category="Con Accesorios"
      muscles={{
        primary: "Pectoral mayor, deltoides anterior, tríceps braquial e iliopsoas.",
        secondary: "Abdomen transverso, oblicuos, trapecio inferior y antebrazos."
      }}
      material={[
        "Miniparalelas estables (preferiblemente de madera de haya para mejor agarre).",
        "Superficie plana y antideslizante."
      ]}
      keyExercise={{
        name: "L-Sit (Escuadra isométrica)",
        steps: [
          "Siéntate en el suelo centrado exactamente entre ambas miniparalelas.",
          "Coloca las manos firmes sobre los agarres y bloquea los codos por completo.",
          "Realiza una depresión escapular activa alejando con fuerza los hombros de las orejas.",
          "Contrae el abdomen, eleva la cadera del suelo y levanta las piernas rectas a 90 grados.",
          "Sostén la posición manteniendo las rodillas bloqueadas y las puntas de los pies estiradas."
        ]
      }}
      benefits={[
        "Salud articular garantizada: Mantiene las muñecas alineadas en un vector neutro sin tensiones mecánicas nocivas.",
        "Estímulo hipertrófico superior: Permite aumentar drásticamente el rango de movimiento excéntrico (déficit).",
        "Fuerza escapular y de hombros: Base de soporte fundamental para progresiones avanzadas (como el pino o planche)."
      ]}
      commonErrors={[
        "Encoger los hombros hacia arriba, cargando todo el estrés articular en los ligamentos de la articulación glenohumeral.",
        "Mantener una flexión refleja en los codos que desvíe la fuerza hacia los tendones del bíceps.",
        "Permitir que la pelvis caiga por detrás de la línea de las manos en L-Sit por debilidad del core abdominal."
      ]}
      biomechanics={biomechanics}
      topExercises={topExercises}
      faqs={faqs}
    />
  );
}
