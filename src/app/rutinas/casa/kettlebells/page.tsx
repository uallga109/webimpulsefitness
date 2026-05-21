import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Entrenamiento con Pesas Rusas (Kettlebells) | Impulse Fitness",
  description: "Potencia funcional y cardio extremo con Kettlebells. Domina el swing y construye una cadena posterior irrompible.",
  keywords: [
    "entrenamiento pesas rusas kettlebells",
    "kettlebell swing tecnica bisagra",
    "pesas rusas ejercicios en casa",
    "peso de kettlebell para empezar",
    "levantamiento turco kettlebell beneficios",
    "cardio balistico kettlebells",
    "cadena posterior fuerza kettlebell",
  ],
};

export default function KettlebellsPage() {
  const biomechanics = {
    explanation: "El entrenamiento con pesas rusas (kettlebells) se fundamenta en la física balística y la oscilación del péndulo. Al tener el centro de masas desplazado fuera de la empuñadura del asa, el kettlebell introduce un momento de fuerza y una inercia rotacional que exigen una desaceleración excéntrica brutal y una contracción refleja protectora en toda la cadena posterior (isquiotibiales, glúteos y erectores espinales). La bisagra de cadera genera una transferencia de fuerza a través de una triple extensión (tobillos, rodillas y cadera) idónea para ganar potencia explosiva atlética.",
    mechanisms: [
      "Momento de fuerza péndular debido al centro de masa excéntrico respecto al agarre.",
      "Carga de desaceleración excéntrica y absorción de impacto cinético.",
      "Establecimiento del patrón de bisagra de cadera como transferencia de potencia neuromuscular."
    ]
  };

  const topExercises = [
    {
      name: "Kettlebell Swing (Columpio)",
      target: "Glúteos, Isquiotibiales y Erectores de la Columna",
      desc: "El ejercicio rey de la potencia balística que construye un core posterior irrompible y mejora la fuerza de despegue.",
      tip: "Visualiza que estás empujando una pared detrás de ti con tu trasero. Es un empuje horizontal de cadera, no una sentadilla vertical."
    },
    {
      name: "Levantamiento Turco (Turkish Get-Up)",
      target: "Estabilizadores del Hombro, Core y Movilidad de Cadera",
      desc: "Movimiento multiarticular lento que consiste en levantarse del suelo sosteniendo la pesa sobre la cabeza con el brazo bloqueado.",
      tip: "Mantén tu mirada fija en el kettlebell durante todo el recorrido. Empuja con fuerza el talón del pie apoyado contra el suelo."
    },
    {
      name: "Sentadilla Goblet (Cáliz)",
      target: "Cuádriceps, Core y Flexores de Cadera",
      desc: "Excelente variación de sentadilla profunda que fomenta una postura erguida debido al contrapeso de la carga sostenida al frente.",
      tip: "Sostén la pesa firmemente contra tu pecho por los cuernos del asa. Desciende rompiendo el plano paralelo con los codos por dentro de las rodillas."
    }
  ];

  const faqs = [
    {
      question: "¿Cuál es el peso adecuado de kettlebell para empezar a entrenar?",
      answer: "Para aprender la técnica correcta de forma segura, se sugieren los siguientes rangos iniciales:\n- Hombres activos: Se recomienda empezar con una pesa de 16 kg. Aquellos con base de fuerza sólida pueden optar por 20-24 kg.\n- Mujeres activas: Se recomienda empezar con 8-12 kg. Si ya entrenas fuerza, una pesa de 16 kg es ideal para movimientos balísticos."
    },
    {
      question: "¿Cómo distingo un swing de sentadilla de un swing de bisagra correcto?",
      answer: "El swing correcto es de bisagra de cadera (hip hinge): tu pelvis viaja hacia atrás flexionando muy poco las rodillas (15-20 grados) y el tronco se inclina hacia adelante. En un swing de sentadilla (incorrecto), flexionas rodillas a 90 grados bajando el trasero hacia el suelo, lo que elimina el estímulo elástico del glúteo y sobrecarga los hombros al forzar un empuje de brazos."
    },
    {
      question: "¿Qué beneficios aporta el kettlebell frente a una mancuerna común?",
      answer: "El kettlebell destaca por su versatilidad balística y entrenamiento dinámico tridimensional. Permite flujos continuos de movimientos gimnásticos sin detener la inercia (como el clean y jerk), mejora sustancialmente la resistencia y fuerza de agarre, y reta más activamente al core al requerir estabilización de cargas excéntricas y descentradas."
    }
  ];

  return (
    <ExerciseDetailLayout 
      slug="kettlebells"
      title="Pesas Rusas (Kettlebells)"
      subtitle="Potencia funcional y acondicionamiento extremo combinando fuerza balística y cardio."
      image="/images/ejercicios/kettlebells.png"
      category="Cardio / Fuerza"
      muscles={{
        primary: "Cadena posterior (Glúteos, Isquios, Erectores)",
        secondary: "Hombros, antebrazos y core oblicuo."
      }}
      material={[
        "1 o 2 pesas rusas (Kettlebells)",
        "8-12kg (mujeres) / 16-20kg (hombres) recomendado"
      ]}
      keyExercise={{
        name: "Kettlebell Swing",
        steps: [
          "Pies a la anchura de hombros, pesa en el suelo delante de ti.",
          "Flexiona rodillas ligeramente, cadera atrás y agarra el asa.",
          "Tira de la pesa hacia atrás entre tus piernas de forma explosiva.",
          "Empuja la cadera hacia adelante con potencia contrayendo glúteos.",
          "La pesa debe subir por inercia hasta la altura del pecho."
        ]
      }}
      benefits={[
        "Quema calórica brutal: Gasto disparado por movimientos explosivos.",
        "Desarrollo de potencia: Mejora el salto y la fuerza de cadera.",
        "Fuerza de agarre: Mejora la resistencia de antebrazos."
      ]}
      commonErrors={[
        "Hacer una sentadilla en lugar de una bisagra de cadera.",
        "Elevar la pesa con los hombros en lugar del impulso del glúteo.",
        "Arquear la espalda en la parte baja del movimiento."
      ]}
      biomechanics={biomechanics}
      topExercises={topExercises}
      faqs={faqs}
    />
  );
}
