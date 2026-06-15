import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Pilates de Suelo (Mat Pilates): Fuerza Interna y Postura | Impulse Fitness",
  description: "Descubre el Mat Pilates en casa. Mejora la estabilidad lumbopélvica, el transverso abdominal, el suelo pélvico y la alineación de tu columna de forma científica.",
};

export default function PilatesSueloPage() {
  const biomechanics = {
    explanation: "El Mat Pilates (Pilates de suelo) se fundamenta en el control voluntario del 'Powerhouse' o centro de energía corporal, compuesto por el transverso abdominal, el suelo pélvico, el diafragma y los multífidos. Biomecánicamente, trabaja en cadenas cinéticas cerradas e ingresa al cuerpo en patrones de co-activación neuromuscular profunda. Mediante la retroversión pélvica controlada (imprint) y la disociación segmentaria de la columna vertebral, se minimiza la presión intraabdominal nociva y se optimiza la distribución de cargas a lo largo del raquis, previniendo hernias y fortaleciendo las fascias profundas sin compresión articular axial.",
    mechanisms: [
      "Co-activación del transverso del abdomen y el suelo pélvico mediante espiración diafragmática forzada.",
      "Disociación intervertebral y flexión segmentaria controlada contra la gravedad.",
      "Estabilización pélvica isométrica activa en planos sagital y coronal."
    ]
  };

  const topExercises = [
    {
      name: "El Cien (The Hundred)",
      target: "Abdomen Transverso, Recto Abdominal y Control Diafragmático",
      desc: "El clásico ejercicio dinámico-isométrico que promueve el calentamiento de la circulación central y la resistencia respiratoria profunda del core.",
      tip: "Mantén el 'imprint' (espalda baja pegada a la esterilla). Si te duele la zona lumbar, eleva las piernas a 90 grados en posición de mesa."
    },
    {
      name: "El Balanceo del Gato a la Esfinge (Spine Stretch)",
      target: "Multífidos, Erectores de la Columna y Movilidad Torácica",
      desc: "Excelente movimiento dinámico que promueve la elongación axial progresiva y descomprime los discos lumbosacros bajo control excéntrico.",
      tip: "Articula la columna vértebra por vértebra, imaginando que te despegas de una pared imaginaria detrás de ti."
    },
    {
      name: "El Puente sobre los Hombros Unilateral (Single Leg Shoulder Bridge)",
      target: "Glúteo Mayor, Isquiotibiales y Estabilizadores del Core Posterior",
      desc: "Aísla la cadena posterior obligando a los oblicuos opuestos a evitar la rotación o caída de la pelvis en el plano frontal.",
      tip: "Mantén ambas crestas ilíacas a la misma altura paralela al techo durante toda la extensión de la rodilla."
    }
  ];

  const faqs = [
    {
      question: "¿Cuál es la diferencia real entre el Pilates de suelo y el Yoga?",
      answer: "Aunque ambos se realizan sobre esterilla y enfatizan el control respiratorio, tienen enfoques físicos distintos. El Yoga se centra en estiramientos estáticos (asanas), flexibilidad extrema y meditación espiritual. El Pilates de suelo es un sistema de acondicionamiento físico enfocado en el desarrollo de la fuerza del core profundo, la estabilización de la columna y el control del movimiento preciso y repetitivo bajo rigurosos principios anatómicos."
    },
    {
      question: "¿Cómo debe ser la respiración en Pilates para activar el transverso?",
      answer: "La respiración en Pilates es intercostal o lateral-torácica. Al inhalar por la nariz, debes expandir la caja torácica hacia los lados y la espalda sin inflar el abdomen. Al exhalar por la boca (soplando suavemente), debes empujar el ombligo hacia dentro y hacia arriba, contrayendo el suelo pélvico. Esta técnica mantiene la presión intraabdominal controlada y recluta de forma involuntaria el transverso del abdomen."
    },
    {
      question: "¿Es seguro hacer Mat Pilates si sufro de hernia discal lumbar?",
      answer: "Sí, es sumamente beneficioso, pero requiere adaptaciones importantes. Debes evitar las flexiones lumbares completas y los giros bruscos. Se recomienda priorizar la alineación en columna neutra (evitando el imprint forzado) y realizar ejercicios de estabilización estática como las planchas adaptadas, el puente de hombros simple y el perdiguero (bird-dog) para fortalecer los multífidos sin generar pinzamientos."
    }
  ];

  return (
    <ExerciseDetailLayout 
      slug="pilates-suelo"
      title="Pilates de Suelo (Mat Pilates)"
      subtitle="Control postural, respiración y fuerza interna para un core irrompible."
      image="/images/ejercicios/pilates_suelo.png"
      category="Sin Material"
      muscles={{
        primary: "Transverso del abdomen, suelo pélvico, multífidos y erectores espinales.",
        secondary: "Glúteo medio, aductores, flexores de la cadera y cintura escapular."
      }}
      material={[
        "Esterilla gruesa antideslizante (Mat de al menos 10mm para proteger la columna).",
        "Ropa cómoda y elástica que permita el movimiento tridimensional."
      ]}
      keyExercise={{
        name: "El Cien (The Hundred)",
        steps: [
          "Túmbate boca arriba en la esterilla con las piernas extendidas o dobladas en posición de mesa (90º).",
          "Eleva la cabeza, el cuello y los hombros hasta la base de las escápulas, manteniendo la mirada fija en el ombligo.",
          "Estira los brazos a ambos lados del cuerpo, paralelos al suelo y suspendidos a unos centímetros de altura.",
          "Inicia bombeos rápidos y controlados con los brazos desde el hombro, inhalando por la nariz en 5 bombeos.",
          "Exhala prolongadamente por la boca durante otros 5 bombeos, completando 10 ciclos respiratorios hasta llegar a 100."
        ]
      }}
      benefits={[
        "Rehabilitación lumbo-pélvica: Excelente para aliviar dolores de espalda crónicos y fortalecer el core profundo.",
        "Alineación postural activa: Corrige desviaciones causadas por el sedentarismo y la posición sentada prolongada.",
        "Control propioceptivo de élite: Desarrolla una conexión profunda entre la respiración diafragmática y la contracción muscular."
      ]}
      commonErrors={[
        "Tirar del cuello hacia adelante en lugar de flexionar la columna desde el esternón (fatiga cervical).",
        "Perder el control de la pelvis permitiendo que la espalda lumbar se arquee o rote bruscamente.",
        "Retener la respiración (apnea), lo cual eleva la presión arterial e impide activar el transverso."
      ]}
      biomechanics={biomechanics}
      topExercises={topExercises}
      faqs={faqs}
    />
  );
}
