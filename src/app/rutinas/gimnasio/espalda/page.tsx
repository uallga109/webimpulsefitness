import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Ejercicios de Espalda: Guía Biomecánica para Dorsal y Densidad",
  description: "Aprende los mejores ejercicios de espalda en gimnasio. Consigue amplitud de dorsal ancho y densidad con técnicas biomecánicas avanzadas.",
};

export default function EspaldaPage() {
  return (
    <ExerciseDetailLayout
      slug="espalda"
      title="Biblioteca de Ejercicios para Espalda"
      subtitle="Descubre la anatomía funcional de la espalda y aprende a tirar de manera eficiente para esculpir un dorsal ancho en forma de 'V' y una densidad muscular tridimensional."
      image="/images/ejercicios/espalda.png"
      category="Gimnasio"
      muscles={{
        primary: "Dorsal Ancho, Trapecio (Superior, Medio e Inferior), Romboides",
        secondary: "Bíceps Braquial, Deltoides Posterior, Redondo Mayor, Erectores Espinales"
      }}
      material={[
        "Barra de dominadas",
        "Barra olímpica y discos",
        "Polea alta con manerales",
        "Mancuernas pesadas"
      ]}
      benefits={[
        "Construye la estética en forma de 'V' ensanchando los dorsales superiores.",
        "Aumenta la densidad y el grosor de la espalda alta mediante tracciones horizontales.",
        "Fortalece la cadena posterior y previene dolores de espalda baja (lumbalgia).",
        "Mejora significativamente la postura corporal al contrarrestar la rotación interna del hombro."
      ]}
      commonErrors={[
        "Iniciar el tirón con los brazos en lugar de realizar una retracción escapular activa.",
        "Utilizar balanceo excesivo (kiping o inercia lumbar) para mover cargas que superan la capacidad real.",
        "Limitar el rango de movimiento al no permitir el estiramiento completo de los omóplatos en la fase excéntrica.",
        "Encojer los hombros hacia arriba durante el tirón, delegando el esfuerzo en el trapecio superior."
      ]}
      biomechanics={{
        explanation: "La espalda no es un solo músculo, sino un complejo de más de una decena de estructuras musculares. Para entrenarla con base científica, debemos diferenciar entre tracciones verticales (que priorizan la anchura y estimulación del dorsal ancho) y tracciones horizontales (que priorizan la densidad, activando trapecios, romboides y deltoides posteriores). La clave reside en la posición y trayectoria de los codos.",
        mechanisms: [
          "Tracciones Verticales (Frontal): El codo baja en el plano frontal pegado al cuerpo, enfocando la contracción en las fibras ilíacas y costales del dorsal ancho.",
          "Tracciones Horizontales (Sagital): Los codos se dirigen hacia atrás. Si los codos viajan pegados al torso, trabaja el dorsal. Si se abren a 90°, trabaja la espalda alta.",
          "Función de la Escápula: Una contracción completa de la espalda alta requiere movimiento escapular (retracción y depresión activa).",
          "Aislamiento de Brazos: Al visualizar los codos como 'ganchos' que guían la fuerza en vez de tirar con las manos, reducimos drásticamente la fatiga del bíceps."
        ]
      }}
      keyExercise={{
        name: "Remo con Barra Libre (Técnica Pendlay y Clásica)",
        steps: [
          "Coloca los pies al ancho de las caderas con la barra situada sobre la mitad del pie.",
          "Bisagra de cadera profunda (empuja la pelvis atrás) manteniendo la columna vertebral neutra y paralela o casi paralela al suelo.",
          "Sujeta la barra con agarre prono un poco más ancho que tus hombros.",
          "Antes de tirar, 'rompe' la barra hacia afuera para activar los dorsales y compactar la zona media.",
          "Inicia el tirón tirando de los codos hacia atrás y hacia el abdomen inferior, retrayendo firmemente las escápulas.",
          "Toca suavemente la parte superior del abdomen y desciende de forma controlada hasta estirar los dorsales sin perder la tensión lumbar."
        ]
      }}
      topExercises={[
        {
          name: "Dominadas Pronas (Pull-ups)",
          target: "Dorsal Ancho (Amplitud y Grosor vertical)",
          desc: "El ejercicio rey para la amplitud de la espalda. Utilizar el peso corporal prono recluta masivamente las fibras del dorsal ancho y el redondo mayor en una contracción isométrica e isotónica óptima.",
          tip: "Enfócate en llevar el pecho hacia la barra, no la barbilla. Esto garantiza que estás completando una correcta retracción y depresión escapular."
        },
        {
          name: "Jalón al Pecho con Agarre Neutro y Cerrado",
          target: "Fibras Inferiores del Dorsal Ancho",
          desc: "Al utilizar un agarre neutro estrecho, permites que los codos viajen en el plano sagital extremadamente pegados al torso, lo cual alinea la resistencia directamente con la división inferior del dorsal.",
          tip: "No te reclines excesivamente hacia atrás durante la fase concéntrica; mantén el torso estable para evitar que actúe la gravedad y disminuya el rango."
        },
        {
          name: "Pullover en Polea Alta (Brazos Rígidos)",
          target: "Dorsal Ancho (Aislamiento Puro)",
          desc: "Es el único ejercicio que elimina por completo la flexión del codo (y por tanto el bíceps), permitiendo fatigar el dorsal de manera pura mediante la extensión pura del hombro.",
          tip: "Mantén una flexión estática de codo de 10-15 grados y concéntrate en empujar el maneral hacia tus muslos trazando un arco amplio."
        }
      ]}
      faqs={[
        {
          question: "¿Cómo puedo evitar que se me fatiguen los bíceps antes que la espalda?",
          answer: "Este es un problema muy común debido a una mala conexión mente-músculo o un exceso de carga. Prueba dos cosas: primero, imagínate que tus manos son meros 'ganchos' y que el esfuerzo se realiza empujando el codo hacia atrás. Segundo, utiliza correas de agarre (straps) para reducir la tensión del antebrazo y del bíceps, lo cual permite concentrar el estímulo en el dorsal."
        },
        {
          question: "¿Es mejor el agarre supino o prono para entrenar espalda?",
          answer: "Ambos tienen su lugar biomecánico. El agarre supino (palmas hacia arriba) involucra más el bíceps braquial por su posición de ventaja mecánica y suele permitir tirar con codos más cerrados, beneficiando el dorsal bajo. El agarre prono (palmas hacia abajo) minimiza el bíceps y facilita la abducción horizontal del hombro, ideal para activar el trapecio medio, romboides y deltoides posterior."
        },
        {
          question: "¿El jalón tras nuca es lesivo o ineficiente?",
          answer: "Sí, es ineficiente y potencialmente lesivo. Obliga a realizar una rotación externa extrema del hombro bajo carga que compromete el manguito rotador y adelanta la cabeza del húmero. Además, los estudios demuestran que el jalón frontal al pecho activa las fibras del dorsal de forma igual o superior, ofreciendo mayor seguridad y permitiendo aplicar mayor sobrecarga."
        },
        {
          question: "¿Qué ejercicios dan más 'grosor' o densidad a la espalda alta?",
          answer: "Los remos en todas sus variantes (remo con barra, remo con mancuerna, remo en polea baja, remo apoyado en banco). Para enfatizar la densidad (trapecios y romboides), debes abrir ligeramente los codos respecto al cuerpo (unos 45 a 60 grados) y buscar juntar los omóplatos con fuerza máxima al final de cada repetición."
        }
      ]}
    />
  );
}
