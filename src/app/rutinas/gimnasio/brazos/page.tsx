import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Ejercicios de Brazos: Rutina Científica de Bíceps y Tríceps",
  description: "Aprende los mejores ejercicios de brazos en gimnasio. Optimiza tu curl de bíceps y extensiones de tríceps con bases biomecánicas.",
};

export default function BrazosPage() {
  return (
    <ExerciseDetailLayout
      slug="brazos"
      title="Biblioteca de Ejercicios para Brazos"
      subtitle="Maximiza la hipertrofia de tus brazos. Entiende la biomecánica del bíceps braquial, braquial anterior y las tres cabezas del tríceps para lograr un crecimiento óptimo."
      image="/images/ejercicios/brazos.png"
      category="Gimnasio"
      muscles={{
        primary: "Bíceps Braquial (Cabeza Larga y Corta), Tríceps Braquial (Cabeza Larga, Lateral y Medial)",
        secondary: "Braquial Anterior, Braquiorradial (Antebrazo), Coracobraquial"
      }}
      material={[
        "Barra EZ y discos",
        "Mancuernas de peso variado",
        "Polea alta y baja con cuerdas y barras",
        "Banco Scott o predicador"
      ]}
      benefits={[
        "Aumenta la fuerza de tracción y empuje complementando los ejercicios multiarticulares principales.",
        "Desarrolla brazos proporcionados con el característico relieve estético del bíceps y la herradura del tríceps.",
        "Fortalece y estabiliza las articulaciones de la muñeca y el codo, previniendo epicondilitis (codo de tenista/golfista).",
        "Permite aplicar técnicas de bombeo metabólico muy directas con una rápida recuperación local."
      ]}
      commonErrors={[
        "Balancear el torso (inercia lumbar) en los curls de bíceps, eliminando toda la carga mecánica del flexor del codo.",
        "Abrir excesivamente los codos hacia los lados durante el press francés o las extensiones tras nuca, desviando la tensión hacia los hombros.",
        "No realizar un rango de movimiento completo, acortando la excéntrica (no estirar el codo) en polea o predicador.",
        "Muñecas caídas o dobladas bajo carga en los curls barra, aumentando drásticamente la tensión en los tendones del antebrazo."
      ]}
      biomechanics={{
        explanation: "El brazo responde increíblemente bien al entrenamiento basado en la física del movimiento. Para los bíceps, el factor clave es la posición del hombro (codos detrás del cuerpo estiran la cabeza larga; codos delante aíslan la cabeza corta y el braquial) y la supinación activa de la muñeca. Para los tríceps, la cabeza larga es biarticular y solo puede estirarse al máximo llevando los codos por encima de la cabeza.",
        mechanisms: [
          "Bíceps - Supinación: El bíceps no solo flexiona el codo, sino que es el supinador más potente de la muñeca. Debes girar la palma hacia el techo al subir.",
          "Bíceps - Cabeza Larga vs Corta: El curl inclinado estira la cabeza larga. El curl en banco Scott o Predicador acorta el hombro, activando la cabeza corta y braquial.",
          "Tríceps - Cabeza Larga (Biarticular): Cruza la articulación del hombro. Para reclutarla, debes realizar extensiones por encima de la cabeza (flexión de hombro).",
          "Tríceps - Cabezas Lateral y Medial: Son monoarticulares y se activan al máximo en movimientos con hombro extendido (como los tirones en polea)."
        ]
      }}
      keyExercise={{
        name: "Curl con Barra EZ (Flexión de Codo en Supinación)",
        steps: [
          "Ponte de pie con la columna neutra y los pies separados al ancho de los hombros.",
          "Sujeta la barra EZ en los ángulos curvos con un agarre supino (las palmas mirando ligeramente hacia adentro y arriba), lo que reduce el estrés en las muñecas respecto a la barra recta.",
          "Fija los codos firmemente contra los costados de tu torso y mantén los hombros deprimidos.",
          "Inicia la flexión de codos subiendo la barra de forma controlada hasta que esté cerca de tus hombros, sin permitir que los codos se desplacen hacia adelante.",
          "Aprieta voluntariamente los bíceps en el punto máximo de contracción durante un segundo.",
          "Desciende la barra realizando una fase excéntrica lenta e hipercontrolada (3 segundos) hasta estirar los brazos casi por completo sin llegar a hiperextender el codo."
        ]
      }}
      topExercises={[
        {
          name: "Curl Inclinado con Mancuernas (45 grados)",
          target: "Bíceps Braquial (Énfasis Cabeza Larga)",
          desc: "Al sentarte en un banco reclinado a 45 grados, tus codos quedan suspendidos por detrás del torso (extensión de hombro). Esto somete a la cabeza larga del bíceps a una pre-extensión pasiva brutal, estimulándola en su punto de máxima debilidad mecánica, lo que genera hipertrofia masiva.",
          tip: "Mantén los codos inmóviles perpendiculares al suelo durante todo el movimiento; no permitas que viajen hacia adelante al flexionar."
        },
        {
          name: "Extensiones de Tríceps en Polea con Cuerda (Tirón de Tríceps)",
          target: "Tríceps (Cabeza Lateral y Medial - Definición Externa)",
          desc: "Excelente ejercicio de aislamiento mecánico. La polea proporciona tensión constante. Al usar la cuerda, puedes separar las manos al final del movimiento en una extensión terminal profunda, reclutando las fibras de la cabeza lateral (la 'herradura').",
          tip: "Mantén los codos pegados a las costillas y bloquea los hombros. Abre y extiende activamente la cuerda hacia los lados del muslo en la parte inferior."
        },
        {
          name: "Press Francés con Barra EZ (Skullcrusher)",
          target: "Tríceps Braquial (Desarrollo Global y Cabeza Larga)",
          desc: "Un clásico constructor de masa. Al acostarte en banco plano y llevar la barra hacia la frente (o mejor, ligeramente por detrás de la cabeza), colocamos las fibras del tríceps en un estiramiento dinámico óptimo bajo alta sobrecarga progresiva.",
          tip: "Para proteger los codos de tendinitis y activar más la cabeza larga, inclina los brazos unos 15 grados hacia atrás desde la vertical y desciende la barra detrás de tu coronilla."
        }
      ]}
      faqs={[
        {
          question: "¿Por qué el uso de la barra EZ es mejor que la barra recta para bíceps?",
          answer: "La barra recta obliga a realizar una supinación total y forzada del antebrazo durante todo el movimiento. En muchas personas con limitaciones anatómicas de rotación del cúbito y el radio, esto genera una tensión excesiva e inflamación en la muñeca y en el tendón del bíceps distal. La barra EZ permite una supinación ligeramente más natural e inclinada (semisupino), reduciendo drásticamente el riesgo de lesiones y epicondilitis."
        },
        {
          question: "¿Cómo puedo conseguir el pico del bíceps?",
          answer: "El 'pico' o altura del bíceps está determinado principalmente por la genética (longitud del tendón muscular). No obstante, biomecánicamente puedes potenciar el relieve estético enfocándote en la cabeza larga (que forma la parte externa superior del brazo). Ejercicios con los codos hacia atrás (como el curl inclinado) y ejercicios que demanden una fuerte supinación son ideales para maximizar la cabeza larga."
        },
        {
          question: "¿Es cierto que el tríceps representa la mayor parte del tamaño del brazo?",
          answer: "Sí, es totalmente cierto. El tríceps braquial representa aproximadamente el 60% del volumen total del brazo, mientras que el bíceps y el braquial anterior forman el 40% restante. Si tu objetivo es tener brazos grandes y definidos, debes prestar la misma o incluso mayor atención a estructurar adecuadamente tu rutina de tríceps."
        },
        {
          question: "¿Cuál es el mejor ejercicio para el braquial anterior y por qué importa?",
          answer: "El mejor ejercicio es el Curl Martillo (agarre neutro). El braquial anterior es un músculo profundo que se sitúa debajo de la porción inferior del bíceps. Al hipertrofiarse, empuja literalmente al bíceps hacia arriba, dando mayor volumen, altura y un aspecto de brazo mucho más ancho cuando se ve de perfil."
        }
      ]}
    />
  );
}
