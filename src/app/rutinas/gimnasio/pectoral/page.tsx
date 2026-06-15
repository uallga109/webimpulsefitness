import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Ejercicios de Pectoral: Guía Biomecánica y Entrenamiento de Pecho",
  description: "Aprende los mejores ejercicios de pectoral en gimnasio. Guía científica de biomecánica para hipertrofia del pectoral superior, medio e inferior.",
};

export default function PectoralPage() {
  return (
    <ExerciseDetailLayout
      slug="pectoral"
      title="Biblioteca de Ejercicios para Pectoral"
      subtitle="Domina la biomecánica de empuje y aprende a estimular cada división del pectoral (superior, medio e inferior) con la máxima eficiencia y seguridad articular."
      image="/images/ejercicios/pectoral.png"
      category="Gimnasio"
      muscles={{
        primary: "Pectoral Mayor (Fibras Claviculares, Sternocostales y Abdominales)",
        secondary: "Deltoides Anterior, Tríceps Braquial, Serrato Anterior"
      }}
      material={[
        "Barra olímpica y discos",
        "Mancuernas de diferentes pesos",
        "Polea regulable en altura",
        "Banco plano e inclinado"
      ]}
      benefits={[
        "Maximiza la hipertrofia general del torso mediante la sobrecarga progresiva.",
        "Desarrolla fuerza funcional de empuje útil para el rendimiento deportivo.",
        "Mejora la estabilidad escapular y la postura general si se equilibra con tracciones.",
        "Permite el aislamiento óptimo de las diferentes porciones del pecho ajustando los ángulos de empuje."
      ]}
      commonErrors={[
        "Rebotar la barra contra el pecho en el press de banca, disipando la tensión elástica del músculo.",
        "Extender excesivamente los codos hacia afuera (abducción de 90°), aumentando drásticamente la fuerza de cizallamiento en la articulación del hombro.",
        "Despegar las escápulas del banco durante la fase concéntrica, perdiendo el soporte y limitando la activación del pectoral.",
        "No completar el rango de movimiento completo, perdiendo el estímulo clave en el estiramiento máximo."
      ]}
      biomechanics={{
        explanation: "El pectoral mayor es un músculo en forma de abanico con múltiples orientaciones de fibra. Para lograr un desarrollo completo, es fundamental entender que el pecho no se divide en 'interno' y 'externo', sino en porciones anatómicas según su origen óseo. La alineación de la línea de fuerza (resistencia) con la orientación de las fibras es la clave biomecánica para el aislamiento definitivo.",
        mechanisms: [
          "Cabeza Clavicular (Superior): Se activa óptimamente mediante empujes inclinados (30° a 45°) o cruces ascendentes, realizando flexión de hombro.",
          "Cabeza Sternocostal (Medio): Responde mejor a empujes horizontales puros (press plano) y aducción horizontal pura del húmero.",
          "Cabeza Abdominal (Inferior): Se estimula con empujes declinados, fondos en paralelas o cruces descendentes en polea alta.",
          "Perfil de Resistencia: Las poleas mantienen la tensión constante en todo el recorrido, mientras que los pesos libres pierden tensión en el acortamiento máximo."
        ]
      }}
      keyExercise={{
        name: "Press de Banca Plano con Barra (Técnica Científica)",
        steps: [
          "Túmbate en el banco y coloca los pies firmemente plantados en el suelo para maximizar el leg drive.",
          "Realiza una retracción escapular activa (junta los omóplatos) y una depresión escapular (bájalos hacia la pelvis), manteniendo un arco lumbar natural.",
          "Sujeta la barra con un agarre ligeramente más ancho que la anchura de los hombros y sácala de los soportes.",
          "Inicia el descenso controlado dirigiendo los codos hacia adentro en un ángulo aproximado de 45° a 60° respecto al torso.",
          "Toca suavemente la porción inferior del esternón (línea de los pezones) sin rebotar.",
          "Empuja la barra verticalmente y ligeramente hacia atrás, imaginando que empujas el banco lejos de ti, manteniendo las escápulas retraídas."
        ]
      }}
      topExercises={[
        {
          name: "Press Inclinado con Mancuernas (30 grados)",
          target: "Pectoral Superior (Fibras Claviculares)",
          desc: "Al utilizar mancuernas, permites una trayectoria de movimiento convergente que se adapta perfectamente a la orientación anatómica de la cabeza clavicular, además de eliminar desequilibrios de fuerza bilaterales.",
          tip: "Evita inclinar el banco a más de 30-45 grados, ya que esto transferirá la mayor parte del trabajo al deltoides anterior en lugar del pectoral."
        },
        {
          name: "Cruces en Polea Alta (Crossover)",
          target: "Pectoral Inferior y Adhesión de Fibras Internas",
          desc: "Excelente ejercicio de aislamiento mecánico. La polea proporciona tensión constante. Al cruzar las manos en el punto de contracción máxima, logramos una aducción horizontal del húmero más profunda que con barra o mancuernas.",
          tip: "Mantén una ligera flexión estática en los codos durante todo el rango de movimiento y concéntrate en juntar los bíceps contra el pecho en el punto de máximo acortamiento."
        },
        {
          name: "Fondos en Paralelas (Dips enfocado a Pecho)",
          target: "Pectoral Inferior (Fibras Abdominales)",
          desc: "Un movimiento de fuerza multiarticular extremadamente potente. Al inclinar el torso hacia adelante, reclutamos de manera muy directa la porción inferior del pectoral y el serrato anterior.",
          tip: "Mantén las piernas adelantadas, el torso inclinado hacia adelante unos 30 grados y los codos ligeramente abiertos hacia afuera para maximizar la tensión en el pectoral."
        }
      ]}
      faqs={[
        {
          question: "¿Cómo puedo aislar la parte 'interna' del pectoral?",
          answer: "Anatómicamente, no existe un músculo pectoral interno separado. Sin embargo, para maximizar la tensión en las fibras en su punto de máximo acortamiento (donde se siente la contracción interna), debes realizar ejercicios que permitan cruzar la línea media del cuerpo. Los cruces en polea y las máquinas de aperturas (pec deck) son ideales para esto, ya que a diferencia del press de banca clásico, mantienen una alta resistencia en el punto final del recorrido."
        },
        {
          question: "¿Es mejor entrenar con barra o con mancuernas para la hipertrofia?",
          answer: "Ambas herramientas tienen ventajas únicas respaldadas por la ciencia. La barra permite cargar más peso absoluto, lo cual es excelente para la sobrecarga progresiva mecánica. Por su parte, las mancuernas ofrecen un mayor rango de movimiento (estiramiento profundo en la parte inferior y convergencia al final) y demandan una mayor estabilidad, reduciendo el riesgo de asimetrías. Un programa óptimo de hipertrofia debería combinar ambas herramientas."
        },
        {
          question: "¿Qué ángulo es el mejor para desarrollar el pectoral superior?",
          answer: "Los estudios electromiográficos (EMG) sugieren que una inclinación de entre 30 y 45 grados es el punto dulce para activar las fibras claviculares. Si aumentas la inclinación por encima de los 45 grados, la activación del deltoides anterior (hombro) se dispara de forma drástica, reduciendo la efectividad del ejercicio para el pecho."
        },
        {
          question: "¿Cuántas veces a la semana debo entrenar el pectoral?",
          answer: "Para atletas naturales, la frecuencia óptima de entrenamiento para un grupo muscular es de 2 veces por semana. Esto maximiza la síntesis de proteínas musculares a lo largo de la semana sin exceder la capacidad de recuperación local. Un volumen semanal de entre 10 y 20 series efectivas repartidas en dos sesiones es idóneo para la mayoría."
        }
      ]}
    />
  );
}
