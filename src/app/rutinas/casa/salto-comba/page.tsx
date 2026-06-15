import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Salto a la Comba: Cardio de Alta Intensidad | Impulse Fitness",
  description: "Aprende a saltar a la comba como un atleta. Guía biomecánica de pliometría de tobillo, quema calórica extrema y acondicionamiento en casa.",
};

export default function SaltoCombaPage() {
  const biomechanics = {
    explanation: "El salto a la comba es un ejercicio pliométrico cíclico de bajo impacto por repetición pero de alta frecuencia acumulativa. Biomecánicamente, explota el ciclo de estiramiento-acortamiento (CEA) del tendón de Aquiles y el complejo gastroc-sóleo. Mediante la rigidez reactiva del tobillo (ankle stiffness), el tendón actúa como un muelle elástico, almacenando energía potencial elástica durante la fase excéntrica del aterrizaje y liberándola instantáneamente en la fase concéntrica del despegue, lo que optimiza la eficiencia del sistema neuromuscular y minimiza el coste metabólico muscular directo por salto.",
    mechanisms: [
      "Almacenamiento de energía elástica pasiva en el tendón de Aquiles mediante rigidez del tobillo.",
      "Optimización del ciclo de estiramiento-acortamiento (CEA) neuromuscular reactivo.",
      "Alta demanda de coordinación propioceptiva mediante la sincronización del ritmo óculo-manual-podal."
    ]
  };

  const topExercises = [
    {
      name: "Salto Básico Reactivo (Basic Bounce)",
      target: "Sóleo, Gastrocnemio (Gemelos) y Tendón de Aquiles",
      desc: "La base de toda la pliometría de cuerda. Consiste en saltos cortos y continuos despegando solo unos centímetros del suelo con ambos pies a la vez.",
      tip: "Mantén una mínima flexión de rodilla (10-15 grados) para forzar al tobillo y al tendón de Aquiles a absorber y transferir toda la fuerza elástica."
    },
    {
      name: "Salto del Boxeador (Boxer Step)",
      target: "Gastrocnemio, Glúteo Medio y Resistencia Aeróbica",
      desc: "Variación fluida que transfiere el peso corporal alternativamente de una pierna a la otra, emulando la guardia de un púgil.",
      tip: "Usa este paso para dosificar el esfuerzo en sesiones largas, permitiendo que una pierna descanse ligeramente mientras la otra impulsa."
    },
    {
      name: "Doble Salto (Double Under)",
      target: "Fibras de Contracción Rápida, Deltoides y Coordinación Explosiva",
      desc: "La cuerda debe pasar dos veces bajo los pies en un único salto. Exige una potencia de despegue y una velocidad de muñeca formidables.",
      tip: "Mantén el torso erguido. No dobles las rodillas hacia atrás (salto de delfín); genera la altura mediante una flexión y extensión plantar explosiva."
    }
  ];

  const faqs = [
    {
      question: "¿Cómo sé cuál es la longitud ideal que debe tener mi comba?",
      answer: "Para medir tu comba, pisa el centro del cable con un solo pie y estira los mangos hacia arriba de forma paralela a tu cuerpo. Para principiantes, los mangos (donde se une el cable) deben llegar exactamente a la altura de las axilas o el pecho medio. A medida que tu técnica mejore y saltes más bajo, puedes acortar la comba hasta la altura del pezón o las costillas inferiores para ganar velocidad y eficiencia."
    },
    {
      question: "¿Qué tipo de cuerda es mejor para entrenar en casa sin dañar el suelo?",
      answer: "Para interiores (baldosas, parqué o tarima), las cuerdas de PVC de 4mm o 5mm (licorice ropes) son las mejores por control y durabilidad, ya que no dañan el suelo y ofrecen un feedback excelente. Evita las cuerdas de cable de acero recubierto a alta velocidad (speed ropes de Crossfit) si no usas una esterilla protectora, ya que pueden rayar el parqué o desgastar su recubrimiento protector rápidamente."
    },
    {
      question: "¿Es perjudicial saltar a la comba para personas con problemas de rodilla?",
      answer: "Si tienes una patología diagnosticada (como condromalacia severa o rotura de menisco), debes evitarlo temporalmente. Sin embargo, para rodillas sanas, saltar correctamente (sobre el metatarso, elevándose apenas 2 cm y con rodillas ligeramente flexionadas) genera un impacto articular menor que correr, ya que la fuerza se disipa en la elasticidad del tobillo y el arco plantar, fortaleciendo además los ligamentos rotulianos."
    }
  ];

  return (
    <ExerciseDetailLayout 
      slug="salto-comba"
      title="Salto a la Comba"
      subtitle="Resistencia cardiovascular y coordinación neurológica en sesiones cortas e intensas."
      image="/images/ejercicios/salto_comba.png"
      category="Cardio"
      muscles={{
        primary: "Gemelos (gastrocnemio), sóleos, tendón de Aquiles y sistema cardiovascular.",
        secondary: "Deltoides posterior, antebrazos, flexores de muñeca y core profundo."
      }}
      material={[
        "Comba de PVC ajustable (evitar cable de acero desnudo sobre parqué).",
        "Calzado deportivo con amortiguación en el mediopié (evitar descalzo en superficies duras)."
      ]}
      keyExercise={{
        name: "Salto Básico Reactivo",
        steps: [
          "Colócate de pie con los codos pegados a las costillas y las manos adelantadas en un ángulo de 45 grados.",
          "Sujeta los mangos con un agarre relajado y asegúrate de que el cable repose detrás de tus talones.",
          "Inicia el giro de la cuerda realizando pequeños círculos exclusivamente con las muñecas, manteniendo los brazos fijos.",
          "Realiza saltos verticales mínimos (apenas 2 centímetros de altura) al paso de la cuerda.",
          "Aterriza de forma elástica sobre los metatarsos (puntas de los pies) absorbiendo el impacto con los tobillos."
        ]
      }}
      benefits={[
        "Densidad ósea excepcional: Los impactos repetitivos de baja intensidad estimulan la osteogénesis en el fémur y la tibia.",
        "Eficiencia de tiempo metabólica: Quema más calorías por minuto que casi cualquier otra actividad aeróbica (hasta 700 kcal/hora).",
        "Acondicionamiento elástico reactivo: Desarrolla unos tendones y articulaciones inferiores increíblemente fuertes y resistentes a lesiones."
      ]}
      commonErrors={[
        "Saltar flexionando en exceso las rodillas (salto de rebote), lo que destruye la inercia elástica del tobillo.",
        "Aterrizar con los talones en el suelo, transmitiendo toda la vibración del impacto directo a las rodillas y zona lumbar.",
        "Abrir los brazos hacia los lados para acortar la comba, forzando a los hombros a fatigarse prematuramente."
      ]}
      biomechanics={biomechanics}
      topExercises={topExercises}
      faqs={faqs}
    />
  );
}
