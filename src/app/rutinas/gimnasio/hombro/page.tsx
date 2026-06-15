import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Ejercicios de Hombro: Consigue Hombros 3D con Base Científica",
  description: "Aprende los mejores ejercicios de hombro en gimnasio. Guía avanzada de técnica para deltoides anterior, lateral y posterior.",
};

export default function HombroPage() {
  return (
    <ExerciseDetailLayout
      slug="hombro"
      title="Biblioteca de Ejercicios para Hombros"
      subtitle="Maximiza el desarrollo deltoideo tridimensional (3D). Domina los patrones de empuje vertical y aislamiento lateral respetando la salud articular del complejo del hombro."
      image="/images/ejercicios/hombro.png"
      category="Gimnasio"
      muscles={{
        primary: "Deltoides (Cabeza Anterior, Lateral y Posterior)",
        secondary: "Trapecio (Superior e Inferior), Tríceps Braquial, Serrato Anterior, Manguito Rotador"
      }}
      material={[
        "Barra olímpica y rack",
        "Mancuernas de varios pesos",
        "Poleas cruzadas",
        "Banco regulable"
      ]}
      benefits={[
        "Construye una estética atlética de hombros redondos y anchos en 3D.",
        "Aumenta la estabilidad de la cintura escapular, previniendo luxaciones y lesiones de hombro.",
        "Desarrolla fuerza de empuje vertical transferible a otros levantamientos olímpicos y gimnásticos.",
        "Corrige desequilibrios posturales y hombros caídos fortaleciendo la cabeza posterior."
      ]}
      commonErrors={[
        "Realizar elevaciones laterales en el plano frontal puro en lugar del plano escapular (30 grados adelantado), aumentando la fricción en el espacio subacromial.",
        "Arquear excesivamente la zona lumbar durante el press militar para compensar la falta de fuerza u movilidad torácica.",
        "Hacer recorridos parciales en presses verticales o balancear el cuerpo para elevar cargas excesivas.",
        "Descuidar por completo el deltoides posterior, creando asimetrías musculares y rotación interna patológica del hombro."
      ]}
      biomechanics={{
        explanation: "El deltoides se divide en tres cabezas distintas que comparten inserción pero realizan funciones motoras diferentes. Debido a su anatomía semipenniforme, las fibras laterales requieren un alto volumen de aislamiento mecánico. La clave para entrenar los hombros de forma segura es respetar la biomecánica escapular y el plano natural de movimiento del húmero.",
        mechanisms: [
          "Deltoides Anterior: Se encarga de la flexión de hombro. Recibe un gran estímulo indirecto en todos los presses de pecho, por lo que rara vez necesita aislamiento excesivo.",
          "Deltoides Lateral: Es el motor primario de la abducción del hombro. La abducción debe realizarse en el plano escapular (brazos apuntando unos 30° hacia adelante) para evitar pinzamiento subacromial.",
          "Deltoides Posterior: Realiza la abducción horizontal e hiperextensión de hombro. Es clave para dar el aspecto tridimensional 3D y contrarrestar la debilidad escapular.",
          "Plano Escapular: Es la alineación natural de la escápula sobre la caja torácica. Realizar elevaciones laterales en este plano maximiza la activación y minimiza el estrés en los ligamentos."
        ]
      }}
      keyExercise={{
        name: "Press Militar con Barra de Pie (Overhead Press)",
        steps: [
          "Coloca la barra a la altura de la parte superior del pecho en el rack.",
          "Sujeta la barra con un agarre prono un poco más ancho que la anchura de los hombros, manteniendo las muñecas rectas e impactando sobre los talones de las manos.",
          "Posición inicial: Codos apuntando ligeramente hacia adelante (no abiertos hacia los lados) para alinear el húmero en el plano escapular.",
          "Compacta el core, contrae los glúteos de forma activa y flexiona ligeramente las rodillas sin llegar a amortiguar con ellas.",
          "Empuja la barra verticalmente hacia el techo, desplazando ligeramente la cabeza hacia atrás al inicio para permitir el paso de la barra.",
          "Una vez que la barra pasa la frente, empuja la cabeza hacia adelante ('entra la cabeza') y bloquea los codos arriba, alineando la barra sobre el centro de los pies.",
          "Desciende de manera controlada de vuelta a la posición rack en la parte superior del pecho."
        ]
      }}
      topExercises={[
        {
          name: "Elevaciones Laterales con Mancuernas en Plano Escapular",
          target: "Deltoides Lateral (Anchura y Efecto Tridimensional)",
          desc: "El ejercicio estrella para ensanchar los hombros. Al elevar los brazos 30 grados adelantados respecto al torso, alineamos el deltoides lateral perfectamente contra la gravedad, protegiendo el manguito rotador.",
          tip: "No eleves las manos por encima de los codos. Piensa en empujar las mancuernas hacia los lados y lejos de ti, manteniendo los hombros abajo sin encojer el trapecio."
        },
        {
          name: "Pájaros con Mancuerna en Banco Inclinado (Reverse Fly)",
          target: "Deltoides Posterior (Densidad de la parte posterior)",
          desc: "Apoyar el pecho en un banco inclinado elimina cualquier tipo de balanceo de las piernas o de la zona lumbar, permitiendo aislar de manera brutal la cabeza posterior del deltoides.",
          tip: "Mantén un agarre prono o neutro y realiza la elevación con codos semiflexionados, enfocándote en separar los brazos horizontalmente sin juntar las escápulas atrás para que el trapecio no absorba el trabajo."
        },
        {
          name: "Elevaciones Laterales en Polea Baja de Espaldas",
          target: "Deltoides Lateral (Tensión en Estiramiento Máximo)",
          desc: "A diferencia de las mancuernas, donde la resistencia es cero al inicio del movimiento (brazo colgado), la polea cruzada ofrece tensión mecánica constante desde el milímetro cero, estimulando al músculo en su fase de máximo estiramiento.",
          tip: "Cruza el cable por detrás de tu cuerpo para crear un vector de fuerza óptimo que se alinee directamente con la dirección de las fibras acromiales."
        }
      ]}
      faqs={[
        {
          question: "¿Cómo puedo evitar el dolor o chasquido de hombros al hacer elevaciones laterales?",
          answer: "La mayoría de molestias ocurren por realizar la elevación en el plano frontal puro (brazos totalmente abiertos a los lados) con rotación interna (pulgar hacia abajo). Para solucionarlo, adelanta los brazos unos 30 grados hacia el frente (plano escapular) y gira ligeramente las muñecas de manera que los pulgares apunten sutilmente hacia arriba. Esto libera espacio en el acromion evitando que el tendón roce contra el hueso."
        },
        {
          question: "¿El press militar tras nuca es recomendable?",
          answer: "No. Al igual que el jalón tras nuca, el press tras nuca exige un grado de rotación externa e hiperabducción del hombro que la mayoría de personas no puede realizar de forma segura por falta de movilidad. Esto genera un desgaste severo en el manguito rotador. El press militar frontal de pie es infinitamente más seguro y permite aplicar sobrecarga progresiva de forma mucho más eficaz."
        },
        {
          question: "¿Por qué es tan importante entrenar la cabeza posterior del hombro?",
          answer: "La cabeza posterior del deltoides es el principal freno dinámico del hombro frente a los movimientos potentes de empuje (como el press de banca). Si no se desarrolla adecuadamente en proporción a las cabezas anterior e interna, los hombros rotarán hacia adelante (postura de cifosis o hipercifosis), reduciendo el espacio subacromial y propiciando lesiones crónicas de tendinitis."
        },
        {
          question: "¿Con qué frecuencia e intensidad responde mejor el deltoides lateral?",
          answer: "Al ser un músculo con alta proporción de fibras de contracción lenta y media, y que se recupera sumamente rápido, el deltoides lateral tolera y responde extremadamente bien a frecuencias altas (de 2 a 3 veces por semana) y técnicas de intensidad como dropsets o superseries, trabajando en rangos de 12 a 20 repeticiones."
        }
      ]}
    />
  );
}
