import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Entrenamiento con Peso Corporal (Calistenia): Dominio Total | Impulse Fitness",
  description: "Aprende a dominar tu propio cuerpo. Guía biomecánica de calistenia casera, variaciones avanzadas de flexiones, sentadillas y progresiones sin material.",
};

export default function PesoCorporalPage() {
  const biomechanics = {
    explanation: "El entrenamiento con peso corporal (calistenia) se rige por las leyes de la física y la palanca mecánica en lugar del peso absoluto. Biomecánicamente, para aumentar la intensidad del ejercicio no añadimos discos, sino que modificamos el brazo de momento de la resistencia, cambiamos la inclinación corporal respecto al vector de gravedad o reducimos la base de sustentación (transición bilateral a unilateral). Al forzar al sistema neuromuscular a mover todo el cuerpo como una unidad integrada, desarrollamos una fuerza relativa excepcional, incrementando el reclutamiento sinérgico de las cadenas cinéticas anteriores y posteriores coordinadas por el core.",
    mechanisms: [
      "Modificación del brazo de momento y del centro de masas para aumentar el torque articular.",
      "Desarrollo de fuerza relativa y eficiencia en cadenas cinéticas cerradas.",
      "Co-contracción obligatoria del complejo del core para mantener la rigidez estructural del torso."
    ]
  };

  const topExercises = [
    {
      name: "Sentadilla Búlgara Unilateral (Rear Foot Elevated Split Squat)",
      target: "Cuádriceps, Glúteo Mayor y Glúteo Medio (Estabilizador de Cadera)",
      desc: "El ejercicio unilateral de pierna por excelencia. Carga de manera brutal el miembro delantero mientras mejora drásticamente el equilibrio postural y la fuerza de cadera.",
      tip: "Inclina el torso ligeramente hacia adelante (15 grados) para alinear el vector de fuerza sobre el talón y potenciar la extensión de cadera por parte de tus glúteos."
    },
    {
      name: "Flexiones Arqueras (Archer Push-ups)",
      target: "Pectoral Mayor, Deltoides Anterior y Tríceps Braquial",
      desc: "Excelente progresión intermedia hacia la flexión a una mano. Consiste en descender sobre un brazo mientras el otro se mantiene estirado lateralmente.",
      tip: "Mantén el brazo de apoyo completamente bloqueado en el codo durante el descenso del lado dinámico. Abre el pecho."
    },
    {
      name: "Extensiones Lumbares en Pronación (Superman)",
      target: "Erectores de la Columna, Multífidos, Glúteos y Deltoides Posteriores",
      desc: "Excelente ejercicio para el plano posterior que contrarresta el colapso torácico y cervical provocado por las horas frente a las pantallas.",
      tip: "No hiperstiendas la columna cervical. Mantén la mirada fija en el suelo para preservar una correcta alineación del raquis dorsal y cervical."
    }
  ];

  const faqs = [
    {
      question: "¿Cómo puedo aplicar sobrecarga progresiva en calistenia si no puedo añadir peso?",
      answer: "La sobrecarga progresiva en calistenia se logra mediante 5 variables físicas principales:\n1. Desventaja Mecánica: Modificar la palanca (ej. pasar de flexiones normales a flexiones declinadas o flexiones en pica).\n2. Unilateralidad: Reducir apoyos (ej. sentadilla búlgara a una pierna o flexión arquera).\n3. Rango de Movimiento (ROM): Aumentar el recorrido articular (ej. flexiones con manos elevadas sobre soportes).\n4. Tiempo bajo Tensión (TUT): Ralentizar las fases excéntricas o añadir paradas isométricas.\n5. Volumen: Incrementar series, repeticiones o disminuir los tiempos de descanso."
    },
    {
      question: "¿Es posible ganar la misma masa muscular con calistenia que con pesas en el gimnasio?",
      answer: "Sí, la ciencia demuestra que el crecimiento muscular (hipertrofia) responde a la tensión mecánica profunda y al estrés metabólico, independientemente de la fuente de resistencia. Si entrenas en un rango de repeticiones estimulantes (de 5 a 30 repeticiones) y llevas tus series cerca del fallo muscular mecánico real, el músculo experimentará un estímulo hipertrófico idéntico al de las mancuernas o poleas."
    },
    {
      question: "¿Qué puedo hacer si todavía no puedo realizar ni una sola flexión de pecho en el suelo?",
      answer: "Biomecánicamente, debes reducir la carga de peso corporal con respecto a la gravedad. La mejor manera es elevar la altura de las manos (flexión inclinada) apoyándolas sobre una pared, el borde de una mesa resistente o el reposabrazos del sofá. A medida que ganes fuerza, reduce la inclinación descendiendo hacia objetos más bajos hasta llegar al suelo. Evita apoyar las rodillas, ya que altera el patrón de tensión del core y la pelvis que necesitarás después."
    }
  ];

  return (
    <ExerciseDetailLayout 
      slug="peso-corporal"
      title="Peso Corporal (Calistenia)"
      subtitle="Dominio absoluto de tu cuerpo de nivel básico a experto sin necesidad de material externo."
      image="/images/ejercicios/peso_corporal.png"
      category="Sin Material"
      muscles={{
        primary: "Cuádriceps, glúteos, pectoral mayor, tríceps braquial y recto abdominal.",
        secondary: "Deltoides anterior, erectores de la columna, flexores de la cadera y pantorrillas."
      }}
      material={[
        "Tu propio peso corporal.",
        "Mobiliario básico casero (una silla o sofá para sentadillas búlgaras o fondos de tríceps)."
      ]}
      keyExercise={{
        name: "Sentadilla Búlgara Unilateral",
        steps: [
          "Colócate de espaldas a una distancia de unos dos pasos de una silla estable o sofá.",
          "Eleva tu pierna derecha hacia atrás y apoya firmemente el empeine sobre la superficie de la silla.",
          "Mantén el torso erguido y las manos en la cadera o entrelazadas frente a tu pecho.",
          "Desciende lentamente flexionando la rodilla delantera hasta que el muslo izquierdo quede paralelo al suelo.",
          "Empuja con fuerza el mediopié izquierdo contra el suelo para elevarte, manteniendo la alineación rodilla-pie sin colapsos."
        ]
      }}
      benefits={[
        "Cero barreras de entrada: Entrena de forma inmediata a coste cero en cualquier lugar del planeta.",
        "Equilibrio neuromuscular simétrico: El trabajo unilateral corrige asimetrías de fuerza y masa muscular de forma muy eficiente.",
        "Mejora de la fuerza relativa: Desarrolla un control propioceptivo superior de todo tu esquema corporal en el espacio."
      ]}
      commonErrors={[
        "Realizar repeticiones rápidas e incompletas sin controlar la fase excéntrica (pérdida de tensión mecánica real).",
        "Permitir que la rodilla delantera colapse hacia el interior (valgo dinámico), sobrecargando el ligamento cruzado.",
        "Descuidar la posición del core, arqueando excesivamente la zona lumbar durante las flexiones o planchas."
      ]}
      biomechanics={biomechanics}
      topExercises={topExercises}
      faqs={faqs}
    />
  );
}
