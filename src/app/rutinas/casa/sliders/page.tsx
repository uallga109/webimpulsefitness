import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Discos Deslizadores (Sliders): Core de Acero y Fricción | Impulse Fitness",
  description: "Maximiza la tensión mecánica en abdominales, oblicuos e isquiotibiales con discos deslizadores (sliders). Guía científica de entrenamiento excéntrico en casa.",
  keywords: [
    "discos deslizadores ejercicios casa",
    "sliders core abdominales",
    "curl femoral sliders biomecanica",
    "entrenamiento inestabilidad sliders",
    "ejercicios deslizantes isquiotibiales",
    "core slide entrenamiento funcional",
    "fuerza abdominal sin impacto"
  ],
};

export default function SlidersPage() {
  const biomechanics = {
    explanation: "El entrenamiento con discos deslizadores (sliders) elimina la fase de rebote e inercia a través de la reducción del coeficiente de fricción con el suelo. Biomecánicamente, esto obliga a los músculos a mantener una contracción isométrica u excéntrica constante durante todo el recorrido dinámico, erradicando los llamados 'puntos muertos' de tensión. En el plano del core, la inestabilidad de deslizamiento activa de forma masiva el transverso del abdomen y los multífidos para contrarrestar la fuerza de cizallamiento y mantener el control pélvico, mientras que en la cadena posterior genera una tensión excéntrica profunda de gran valor terapéutico.",
    mechanisms: [
      "Erradicación de la inercia mediante tensión mecánica constante de fricción lineal.",
      "Carga excéntrica acentuada y controlada en articulaciones de cadera y rodilla.",
      "Co-contracción refleja del complejo coxe-lumbo-pélvico para estabilizar el centro de gravedad flotante."
    ]
  };

  const topExercises = [
    {
      name: "Curl Femoral Deslizante",
      target: "Isquiotibiales (Semimembranoso, Semitendinoso y Bíceps Femoral)",
      desc: "Excelente ejercicio para el desarrollo excéntrico de los flexores de rodilla, simulando a la perfección la máquina de curl de gimnasio.",
      tip: "Mantén una extensión activa de cadera durante todo el recorrido para forzar al glúteo mayor a trabajar en sinergia."
    },
    {
      name: "Escalador de Montaña con Deslizamiento",
      target: "Abdomen Transverso, Recto Abdominal y Flexores de Cadera",
      desc: "Variación de alta tensión que elimina el impacto articular típico de los saltos y enfoca el esfuerzo en la compresión del core.",
      tip: "Mantén los hombros alineados verticalmente sobre las muñecas y no permitas que la pelvis oscile lateralmente."
    },
    {
      name: "Aperturas Laterales de Pierna en Plancha",
      target: "Oblicuos, Tensor de la Fascia Lata y Abductores",
      desc: "Un reto brutal de estabilización lateral que fortalece el plano frontal y mejora el control rotacional del core.",
      tip: "Desliza la pierna hacia afuera de forma lenta y vuelve aplicando fuerza hacia el eje central con los aductores."
    }
  ];

  const faqs = [
    {
      question: "¿Qué tipo de discos deslizadores debo usar según mi tipo de suelo?",
      answer: "Existen dos superficies principales para los sliders: las de plástico rígido liso (óptimas para alfombras o moquetas) y las de fieltro o espuma densa (diseñadas para parqué, tarima flotante o baldosas). Muchos modelos comerciales son de doble cara, permitiendo su uso en cualquier tipo de superficie sin dañarla."
    },
    {
      question: "¿Por qué el curl femoral con sliders es tan propenso a causar calambres?",
      answer: "Los calambres en los isquiotibiales durante este ejercicio ocurren por la co-contracción extrema a la que son sometidos en flexión de rodilla bajo una gran palanca mecánica. Al estar la cadera extendida, el bíceps femoral se encuentra en acortamiento activo máximo. Si eres principiante, reduce el rango de movimiento o realiza la fase concéntrica (recogida) con la cadera apoyada en el suelo."
    },
    {
      question: "¿Puedo fabricar mis propios sliders caseros con materiales comunes?",
      answer: "Sí, perfectamente. Si tu suelo es de baldosas o parqué, puedes utilizar toallas pequeñas, trapos de cocina o calcetines gruesos. Si entrenas sobre una alfombra o césped artificial, puedes emplear platos de cartón o tapas de plástico lisas. La física del deslizamiento es idéntica."
    }
  ];

  return (
    <ExerciseDetailLayout 
      slug="sliders"
      title="Discos Deslizadores (Sliders)"
      subtitle="Fricción y tensión continua para un core de acero y piernas potentes."
      image="/images/ejercicios/sliders.png"
      category="Con Accesorios"
      muscles={{
        primary: "Abdomen transverso, oblicuos e isquiotibiales.",
        secondary: "Glúteos, flexores de la cadera y aductores."
      }}
      material={[
        "Discos deslizadores (Sliders)",
        "Alternativa casera: Trapos de cocina o platos de cartón"
      ]}
      keyExercise={{
        name: "Curl Femoral Deslizante",
        steps: [
          "Túmbate boca arriba con rodillas flexionadas y talones firmes en los sliders.",
          "Eleva la cadera hacia el techo hasta alinear rodillas, cadera y hombros.",
          "Desliza lentamente los pies alejándolos hasta que las piernas queden extendidas.",
          "Mantén la pelvis elevada del suelo en todo momento activando glúteos.",
          "Tira de los talones de vuelta a la posición inicial contrayendo los isquiotibiales."
        ]
      }}
      benefits={[
        "Tensión continua absoluta: Elimina las fases de reposo del recorrido articular.",
        "Estabilidad lumbopélvica profunda: Recluta el core profundo en todos los planos.",
        "Bajísimo impacto: Ideal para el acondicionamiento articular y prevención de lesiones."
      ]}
      commonErrors={[
        "Arquear en exceso la zona lumbar (hiperlordosis de compensación).",
        "Permitir que la cadera colapse y caiga hacia el suelo al alejar los pies.",
        "Realizar el deslizamiento a gran velocidad perdiendo el control propioceptivo."
      ]}
      biomechanics={biomechanics}
      topExercises={topExercises}
      faqs={faqs}
    />
  );
}
