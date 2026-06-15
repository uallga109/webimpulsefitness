import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Ejercicios de Pierna: Guía Biomecánica y Rutina de Tren Inferior",
  description: "Aprende los mejores ejercicios de pierna en gimnasio. Domina la sentadilla libre, el peso muerto rumano y el desarrollo de cuádriceps e isquios.",
};

export default function PiernaPage() {
  return (
    <ExerciseDetailLayout
      slug="pierna"
      title="Biblioteca de Ejercicios para Piernas"
      subtitle="Domina la biomecánica del tren inferior. Desarrolla cuádriceps masivos, glúteos potentes e isquiosurales densos mediante patrones de movimiento validados científicamente."
      image="/images/ejercicios/pierna.png"
      category="Gimnasio"
      muscles={{
        primary: "Cuádriceps, Isquiosurales (Bíceps Femoral, Semitendinoso), Glúteo Mayor",
        secondary: "Adductores, Gastrocnemio (Gemelos), Sóleo, Erectores Espinales"
      }}
      material={[
        "Rack de sentadillas",
        "Barra olímpica y discos pesados",
        "Prensa a 45 grados",
        "Máquina de extensiones y curl femoral"
      ]}
      benefits={[
        "Desencadena una alta respuesta hormonal y metabólica sistémica debido a la masa muscular involucrada.",
        "Desarrolla una base sólida de fuerza, estabilidad lumbo-pélvica y potencia funcional.",
        "Previene lesiones de rodilla fortaleciendo de manera compensada los flexores y extensores.",
        "Esculpe una simetría estética proporcional entre el tren superior y el inferior."
      ]}
      commonErrors={[
        "Valgo de rodilla (las rodillas colapsan hacia adentro durante la sentadilla), comprometiendo el ligamento cruzado anterior.",
        "Guiño de glúteo (retroversión pélvica o butt wink) al final del descenso en sentadilla, sobrecargando los discos intervertebrales lumbares.",
        "Falta de rango de movimiento profundo (hacer media sentadilla), lo que reduce drásticamente el reclutamiento del glúteo y el cuádriceps superior.",
        "Flectar la columna vertebral durante el peso muerto rumano en lugar de realizar una bisagra de cadera neutra."
      ]}
      biomechanics={{
        explanation: "El tren inferior está compuesto por grandes palancas mecánicas y articulaciones complejas (cadera y rodilla). Para maximizar el desarrollo, debemos entender la relación entre los momentos de fuerza: los ejercicios dominantes de rodilla (como sentadillas y prensa) activan preferentemente los cuádriceps, mientras que los ejercicios dominantes de cadera (como peso muerto rumano e hip thrust) reclutan masivamente los glúteos e isquiosurales.",
        mechanisms: [
          "Dominancia de Rodilla: Cuanto mayor sea la flexión de rodilla y menor el ángulo de inclinación del torso, mayor será el torque en los cuádriceps.",
          "Dominancia de Cadera: La bisagra de cadera maximiza el estiramiento excéntrico de la cadena posterior, donde el glúteo e isquios son más fuertes.",
          "Relación Longitud-Tensión: Los isquiosurales son biarticulares. Para aislar sus funciones, el curl femoral sentado estimula las fibras en una posición de mayor estiramiento que el curl tumbado.",
          "Profundidad de Sentadilla: Superar los 90 grados de flexión de rodilla aumenta significativamente la activación del glúteo mayor sin comprometer las rodillas sanas."
        ]
      }}
      keyExercise={{
        name: "Sentadilla Trasera Libre (Back Squat con Barra)",
        steps: [
          "Coloca la barra sobre los trapecios (barra alta) o sobre las espinas escapulares (barra baja) en el rack.",
          "Retira la barra dando dos o tres pasos cortos hacia atrás, colocando los pies un poco más anchos que la anchura de las caderas.",
          "Abre ligeramente las puntas de los pies (15-30 grados) hacia afuera según tu anatomía de cadera.",
          "Inhala profundo de forma diafragmática y realiza el 'brace' abdominal (presión intraabdominal) para proteger la columna.",
          "Inicia el descenso empujando la cadera ligeramente atrás y abriendo las rodillas en la misma dirección que las puntas de los pies.",
          "Desciende hasta romper el paralelo (caderas por debajo de la parte superior de las rodillas) manteniendo el pecho erguido.",
          "Empuja fuertemente contra el suelo distribuyendo el peso de manera uniforme en todo el pie (trípode podal) para volver al punto inicial."
        ]
      }}
      topExercises={[
        {
          name: "Peso Muerto Rumano con Barra (RDL)",
          target: "Cadena Posterior (Isquiosurales y Glúteos)",
          desc: "El ejercicio estrella para el desarrollo de la porción excéntrica de los isquiotibiales. Se basa en una bisagra de cadera donde las rodillas se mantienen semiflexionadas de forma estática mientras la cadera viaja horizontalmente hacia atrás.",
          tip: "Baja la barra rozando los muslos y detente cuando tus caderas dejen de desplazarse hacia atrás. Ir más abajo doblará tu columna lumbar perdiendo efectividad."
        },
        {
          name: "Prensa de Piernas a 45 Grados",
          target: "Cuádriceps (Énfasis en Hipertrofia Mecánica)",
          desc: "Al eliminar la demanda de estabilidad lumbar y axial que requiere la sentadilla, la prensa permite llevar los cuádriceps al fallo muscular absoluto con total seguridad, permitiendo un volumen e intensidad muy elevados.",
          tip: "No dejes que tu pelvis se despegue del asiento en la parte inferior del movimiento, ya que esto crea una flexión lumbar severa bajo carga."
        },
        {
          name: "Búlgara Split Squat (Zancada Búlgara con Mancuernas)",
          target: "Cuádriceps, Glúteo Medio y Estabilidad Unilateral",
          desc: "Brutal ejercicio unilateral que corrige asimetrías de fuerza y tamaño. Elevar la pierna trasera en un banco aumenta la demanda de estiramiento y el recorrido de la pierna delantera.",
          tip: "Para enfocarlo en cuádriceps, mantén el torso erguido. Para enfocarlo en glúteos, inclina ligeramente el torso hacia adelante y desplaza la rodilla un poco menos."
        }
      ]}
      faqs={[
        {
          question: "¿Es malo para las rodillas que superen la punta de los pies al agacharse?",
          answer: "No, este es un mito biomecánico superado. Permitir que la rodilla pase la punta de los pies es una respuesta anatómica natural y necesaria para lograr una sentadilla profunda, especialmente en personas con fémures largos. Limitar artificialmente este movimiento obliga a inclinar excesivamente el torso hacia adelante, multiplicando por más de un 1000% las fuerzas de cizallamiento en la zona lumbar."
        },
        {
          question: "¿Cuál es la diferencia entre sentadilla barra alta y barra baja?",
          answer: "En la barra alta, la barra reposa sobre los trapecios, lo que permite un torso más vertical, mayor flexión de rodilla y más énfasis en los cuádriceps. En la barra baja, la barra descansa sobre los deltoides posteriores, lo que obliga a inclinar más el torso, desplazando más el centro de gravedad hacia la cadera y activando con mayor fuerza la cadena posterior (glúteos e isquios) permitiendo levantar más peso."
        },
        {
          question: "¿Cómo puedo activar más el glúteo durante las rutinas de pierna?",
          answer: "Incorpora ejercicios dominantes de cadera donde el glúteo alcance su máxima tensión en acortamiento, como el Hip Thrust, y ejercicios con gran estiramiento, como las sentadillas profundas o las zancadas búlgaras. Mantener una rotación externa de la cadera (puntas ligeramente hacia afuera) y concentrarse en el bloqueo de cadera arriba potenciará su activación."
        },
        {
          question: "¿Con qué frecuencia se debe entrenar el tren inferior?",
          answer: "Se recomienda entrenar piernas 2 veces por semana. Una forma muy efectiva es dividir las sesiones: una sesión enfocada en dominancia de rodilla (cuádriceps) y otra en dominancia de cadera (isquiosurales y glúteos). Esto permite entrenar con alta intensidad cada grupo sin acumular fatiga excesiva."
        }
      ]}
    />
  );
}
