import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Ejercicios de Core y Abdomen: Fuerza y Definición Abdominal",
  description: "Aprende los mejores ejercicios de core en gimnasio. Guía avanzada de biomecánica para marcar abdominales, estabilidad profunda y oblicuos.",
};

export default function CorePage() {
  return (
    <ExerciseDetailLayout
      slug="core"
      title="Biblioteca de Ejercicios para Core y Abdomen"
      subtitle="Supera los mitos tradicionales. Aprende cómo entrenar el core bajo principios de anti-movimiento, estabilidad profunda y contracción efectiva del recto abdominal."
      image="/images/ejercicios/core.png"
      category="Gimnasio"
      muscles={{
        primary: "Recto Abdominal, Oblicuos Internos y Externos, Transverso del Abdomen",
        secondary: "Erectores Espinales, Flexores de Cadera (Psoas), Serrato Anterior, Glúteo Medio"
      }}
      material={[
        "Rueda abdominal (Ab Wheel)",
        "Polea regulable con maneral",
        "Discos o sacos de arena para carga",
        "Esterilla cómoda"
      ]}
      benefits={[
        "Aumenta drásticamente la transferencia de fuerza inter-segmentaria en sentadillas, press militar y peso muerto.",
        "Previene dolores de espalda baja (lumbalgia) estabilizando la pelvis y reduciendo la hiperlordosis.",
        "Desarrolla el relieve muscular del abdomen (el 'six pack') e hipertrofia los oblicuos estéticamente.",
        "Mejora el rendimiento deportivo en gestos explosivos como carreras, saltos y lanzamientos."
      ]}
      commonErrors={[
        "Realizar crunches de rodillas tirando de la cabeza con las manos, forzando la columna cervical.",
        "Arquear la zona lumbar (hiperlordosis) durante la rueda abdominal o la plancha, transfiriendo toda la carga mecánica a la columna y comprimiendo los discos.",
        "Tirar únicamente de los flexores de cadera (psoas) en los levantamientos de piernas colgado, manteniendo el abdomen estático.",
        "Contener la respiración (apnea descontrolada) en ejercicios de estabilidad isométrica en vez de aprender a respirar bajo el bracing."
      ]}
      biomechanics={{
        explanation: "La función principal de la musculatura del core no es crear movimiento (flexionar la columna constantemente), sino resistirlo. El core actúa como un transmisor de fuerzas rígido entre el tren superior e inferior. Biomecánicamente, el entrenamiento más eficiente del core se divide en tres patrones de anti-movimiento: anti-extensión, anti-rotación y anti-flexión lateral, complementados con la flexión espinal controlada para el recto abdominal.",
        mechanisms: [
          "Anti-Extensión: El core se contrae isométricamente para evitar que la columna se arquee (rueda abdominal, planchas).",
          "Anti-Rotación: El core evita que el torso gire bajo una fuerza lateral, aislando oblicuos y transverso (Press Pallof).",
          "Anti-Flexión Lateral: Resistencia a inclinarse hacia un lado bajo carga (Paseo del granjero unilateral).",
          "Flexión Espinal Activa: Para activar el recto abdominal (abdominales), se debe acortar la distancia entre el esternón y la pelvis, realizando una retroversión pélvica activa."
        ]
      }}
      keyExercise={{
        name: "Rueda Abdominal (Ab Wheel Rollout - Anti-Extensión)",
        steps: [
          "Arrodíllate sobre una esterilla y sujeta los extremos de la rueda abdominal directamente bajo tus hombros.",
          "Coloca la pelvis en posición neutra o realiza una ligera retroversión pélvica voluntaria (apretando glúteos y metiendo abdomen) para conseguir una columna en 'forma de C' (espalda ligeramente redondeada).",
          "Inicia el rodamiento hacia adelante empujando la rueda con los brazos extendidos de forma súper controlada.",
          "Despliega primero las caderas hacia adelante y luego abre los hombros; no permitas que tu zona lumbar se hunda o se arquee bajo ningún concepto.",
          "Baja hasta el punto máximo donde tu core sea capaz de mantener la estabilidad lumbar neutra.",
          "Inicia el retorno contrayendo activamente el abdomen inferior y los glúteos, empujando la rueda hacia atrás hasta la posición inicial sin flexionar las caderas prematuramente."
        ]
      }}
      topExercises={[
        {
          name: "Press Pallof en Polea Media (Anti-Rotación)",
          target: "Oblicuos, Transverso del Abdomen y Core Profundo",
          desc: "Un ejercicio biomecánico sensacional. Te colocas de lado a una polea y empujas el maneral hacia el frente de tu pecho. El cable intenta rotar tu torso hacia la máquina, obligando a tus oblicuos y transverso a contraerse isométricamente para evitarlo.",
          tip: "Mantén una postura de semi-sentadilla estable y empuja el maneral en línea recta hacia adelante, sosteniendo la posición extendida por 2-3 segundos."
        },
        {
          name: "Plancha Isométrica con Carga (Plank)",
          target: "Estabilidad del Core General y Transverso",
          desc: "Al añadir un disco o saco de arena en la espalda media-baja, elevamos drásticamente el torque de anti-extensión que debe soportar el abdomen, mejorando el bracing intraabdominal necesario para los levantamientos pesados.",
          tip: "Enfócate en realizar una plancha de alta tensión (aprieta glúteos, cuádriceps y empuja los codos hacia tus pies isométricamente) por 20-30 segundos en lugar de aguantar minutos relajado."
        },
        {
          name: "Elevaciones de Pelvis/Piernas en Banco Declinado",
          target: "Recto Abdominal (Énfasis Fibras Inferiores)",
          desc: "Para activar realmente el recto abdominal bajo, la clave no es elevar las piernas con los flexores de cadera, sino enrollar de forma activa la pelvis hacia el esternón al final del recorrido.",
          tip: "Realiza el descenso de las piernas muy despacio, controlando que la zona lumbar esté pegada al banco en todo momento para evitar la hiperlordosis lumbar."
        }
      ]}
      faqs={[
        {
          question: "¿Hacer miles de crunches/abdominales ayuda a quemar grasa localizada?",
          answer: "No, rotundamente no. La pérdida de grasa localizada es fisiológicamente imposible mediante ejercicios específicos. Los abdominales desarrollan los músculos subyacentes del core, pero para que sean visibles (marcar abdominales), es necesario reducir el porcentaje de grasa corporal global mediante un déficit calórico sostenido en la dieta."
        },
        {
          question: "¿Qué es el transverso del abdomen y por qué es clave para un 'abdomen plano'?",
          answer: "El transverso del abdomen es el músculo más profundo del core y funciona como una faja o corsé anatómico natural. Su función es comprimir las vísceras abdominales y estabilizar la columna. Fortalecerlo mediante planchas de tensión o el ejercicio de vacío abdominal (stomach vacuum) ayuda a mantener la pared abdominal firme y plana, además de proteger de hernias."
        },
        {
          question: "¿Son perjudiciales los abdominales tradicionales tipo 'Sit-up'?",
          answer: "Los sit-ups tradicionales (levantar todo el torso hasta tocar las rodillas) implican un rango excesivo de flexión lumbar bajo compresión, y reclutan de forma masiva los flexores de cadera (psoas). Si el psoas está muy acortado y tenso, tira de la columna lumbar hacia adelante aumentando el dolor de espalda baja. Para la salud espinal, los ejercicios de anti-movimiento o el crunch McGill son infinitamente superiores."
        },
        {
          question: "¿Con qué frecuencia se debe entrenar el abdomen?",
          answer: "El core está compuesto predominantemente por fibras de contracción lenta adaptadas a la resistencia. Se recomienda entrenarlo de 2 a 3 veces por semana al final de las sesiones, integrando un ejercicio de anti-extensión (como rueda abdominal), uno de anti-rotación (como press Pallof) y uno de flexión espinal activa (como crunch declinado o elevación pélvica)."
        }
      ]}
    />
  );
}
