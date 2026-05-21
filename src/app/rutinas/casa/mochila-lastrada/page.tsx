import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Entrenamiento con Mochila Lastrada: Sobrecarga Progresiva | Impulse Fitness",
  description: "Descubre cómo utilizar una mochila lastrada para aplicar sobrecarga progresiva real en casa. Guía biomecánica de calistenia con lastre casero.",
  keywords: [
    "entrenamiento mochila lastrada",
    "calistenia lastrada casa",
    "sobrecarga progresiva casera",
    "ejercicios flexiones lastradas",
    "sentadillas con mochila peso",
    "como lastrar ejercicios en casa",
    "mochila peso entrenamiento"
  ],
};

export default function MochilaLastradaPage() {
  const biomechanics = {
    explanation: "El entrenamiento con mochila lastrada altera mecánicamente el centro de gravedad del cuerpo, desplazándolo hacia adelante (en carga frontal) o hacia atrás (en carga posterior). Esto introduce una demanda de par de torsión adicional en la articulación de la cadera o de la rodilla, forzando a la musculatura del core (especialmente erectores espinales en carga posterior, e inclinación pélvica posterior en carga frontal) a activarse intensamente para estabilizar la columna vertebral. Al añadir masa externa sobre el eje axial o apendicular, incrementamos la resistencia rotacional requerida para iniciar y culminar los recorridos concéntricos, permitiendo la sobrecarga progresiva sin necesidad de barras de gimnasio.",
    mechanisms: [
      "Alteración y desplazamiento del centro de masas corporal para incrementar el brazo de palanca.",
      "Incremento directo del par de fuerza articular en movimientos multiarticulares de empuje y tracción.",
      "Demanda neuromuscular y propioceptiva compensatoria de los erectores espinales."
    ]
  };

  const topExercises = [
    {
      name: "Flexiones Lastradas con Mochila",
      target: "Pectoral Mayor, Deltoides Anterior y Tríceps Braquial",
      desc: "El mejor constructor de empuje horizontal casero. Colocar el peso en la parte superior-media de la espalda imita el estímulo del press de banca.",
      tip: "Ajusta las correas para que la mochila quede alta y no se deslice hacia el cuello ni presione tu zona lumbar baja."
    },
    {
      name: "Zancadas de Caminata con Mochila Frontal",
      target: "Cuádriceps, Glúteo Mayor e Isquiotibiales",
      desc: "Excelente ejercicio unilateral que, al llevar la carga al pecho (frontal), reduce significativamente el estrés en la columna lumbar y fomenta la verticalidad.",
      tip: "Mantén el torso erguido. El peso anterior forzará a tus abdominales a estabilizar de manera más profunda."
    },
    {
      name: "Remo Invertido Lastrado (bajo mesa o barra)",
      target: "Dorsal Ancho, Redondo Mayor y Bíceps Braquial",
      desc: "Variación avanzada de tracción horizontal que añade resistencia real a tus dorsales utilizando la mochila bien ceñida al torso.",
      tip: "Asegúrate de que la mochila esté firmemente ajustada a tu pecho si lo realizas boca arriba, para evitar que cuelgue del suelo."
    }
  ];

  const faqs = [
    {
      question: "¿Qué objetos caseros son mejores para usar como lastre seguro?",
      answer: "Los mejores objetos son aquellos de densidad alta y bordes suaves. Las botellas de agua o leche llenas de líquido o arena son excelentes por su distribución de peso. Los paquetes de arroz, lentejas o legumbres son ideales ya que se amoldan a la mochila sin generar esquinas duras que puedan dañarte o romper la tela."
    },
    {
      question: "¿Cómo debo empaquetar la mochila para evitar lesiones en la espalda?",
      answer: "Biomecánicamente, el peso debe colocarse lo más cerca posible de la espalda y lo más alto posible en el interior de la mochila. Coloca las toallas o mantas en la base para rellenar los huecos bajos, y sitúa las cargas densas (como libros o botellas) justo contra el panel trasero. Esto reduce el brazo de momento que tira de tus hombros hacia atrás."
    },
    {
      question: "¿Hasta cuántos kilos es recomendable meter en una mochila escolar estándar?",
      answer: "Para una mochila estándar con costuras normales, no es recomendable superar los 15-20 kg, ya que los tirantes o las cremalleras podrían rasgarse. Si buscas entrenar con más peso de forma habitual, se recomienda adquirir una mochila táctica militar de nylon 1000D o un chaleco lastrado específico."
    }
  ];

  return (
    <ExerciseDetailLayout 
      slug="mochila-lastrada"
      title="Mochila Lastrada"
      subtitle="Sobrecarga progresiva improvisada y a coste cero para ganar masa muscular."
      image="/images/ejercicios/mochila_lastrada.png"
      category="Sin Material"
      muscles={{
        primary: "Cuádriceps, glúteos, pectoral mayor y dorsal ancho.",
        secondary: "Erectores de la columna, abdomen transverso y flexores de cadera."
      }}
      material={[
        "Mochila con costuras reforzadas y tirantes anchos.",
        "Lastre improvisado: Libros, botellas de agua o paquetes de legumbres.",
        "Toalla o manta pequeña para acolchar y fijar el interior."
      ]}
      keyExercise={{
        name: "Sentadilla Frontal con Mochila",
        steps: [
          "Carga la mochila con el peso deseado y póntela por delante, abrazándola contra el pecho.",
          "Separa los pies a una anchura ligeramente mayor que la de tus hombros, con las puntas hacia afuera.",
          "Comienza el descenso llevando la cadera hacia abajo e introduciendo las rodillas en dirección a los dedos del pie.",
          "Rompe el paralelo (baja de los 90 grados) asegurando que el torso se mantenga erguido.",
          "Empuja con fuerza el suelo a través de los talones y el mediopié para volver a la posición de bipedestación."
        ]
      }}
      benefits={[
        "Hipertrofia accesible: Aplica sobrecarga progresiva real sin gastar dinero en material costoso.",
        "Micro-ajustes de carga: Permite aumentar la carga gramo a gramo agregando pequeños objetos.",
        "Estimulación del core: Reclutamiento superior de los estabilizadores debido al cambio de masas."
      ]}
      commonErrors={[
        "Llevar los tirantes flojos, provocando que la mochila oscile libremente y desequilibre la técnica.",
        "Utilizar objetos punzantes que concentren presiones dolorosas en la columna o dañen el material.",
        "Descuidar la alineación neutral de la columna al intentar compensar el peso inclinándose demasiado."
      ]}
      biomechanics={biomechanics}
      topExercises={topExercises}
      faqs={faqs}
    />
  );
}
