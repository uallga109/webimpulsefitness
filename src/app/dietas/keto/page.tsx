import React from "react";
import type { Metadata } from "next";
import DietDetailLayout from "@/components/dietas/DietDetailLayout";

export const metadata: Metadata = {
  title: "Dieta Cetogénica (Keto) Completa | Impulse Fitness",
  description: "Entra en cetosis y quema grasa de forma altamente eficiente. Guía científica de la dieta keto con menú de ejemplo, alimentos estrella y pautas esenciales.",
};

export default function KetoPage() {
  const physiology = {
    scientificTitle: "Transición Energética y Adaptación a la Cetogénesis",
    explanation: "Al reducir drásticamente el aporte de hidratos de carbono por debajo de los 30-50g netos diarios, la secreción de insulina disminuye masivamente y el glucógeno almacenado se agota en 24-48 horas. Para subsistir, el hígado activa la beta-oxidación de ácidos grasos y la cetogénesis, transformando los triglicéridos en cuerpos cetónicos: Acetoacetato, Beta-hidroxibutirato (BHB) y Acetona. El BHB y el acetoacetato cruzan con facilidad la barrera hematoencefálica, sirviendo como un sustrato energético excepcionalmente limpio y eficiente para el cerebro y el músculo esquelético.",
    mechanisms: [
      "Supresión del apetito por modulación directa de la grelina (hormona del hambre) y estimulación de la colecistocinina (CCK).",
      "Vaciado y reprogramación de los depósitos de glucógeno y retención hidrosalina celular.",
      "Uso preferente del Beta-hidroxibutirato en las mitocondrias de las neuronas, reduciendo el estrés oxidativo sistémico."
    ]
  };

  const sampleMenu = {
    dailyKcal: "2050",
    macros: {
      protein: "110g",
      carbs: "22g",
      fats: "168g"
    },
    schedule: [
      {
        name: "Desayuno",
        time: "08:30",
        description: "Café a prueba de balas (Bulletproof Coffee): Café negro licuado con 15g de aceite de coco orgánico virgen y 15g de mantequilla de pasto sin sal. Acompañado de una tortilla de 3 huevos camperos grandes salteada con 50g de espinacas y 30g de queso cheddar curado.",
        macros: "26g P | 2g C | 50g F"
      },
      {
        name: "Almuerzo",
        time: "12:00",
        description: "Un puñado (35g) de nueces de macadamia crudas y 60g de jamón ibérico de bellota de alta calidad.",
        macros: "14g P | 2g C | 27g F"
      },
      {
        name: "Comida",
        time: "15:00",
        description: "200g de filete de salmón salvaje a la plancha con su piel, cubierto con 25g de mantequilla de ajo casera y espárragos trigueros salteados en aceite de coco.",
        macros: "38g P | 3g C | 42g F"
      },
      {
        name: "Merienda",
        time: "18:00",
        description: "Un aguacate mediano maduro machacado con sal, limón y pimienta negra, acompañado de 30g de queso de cabra curado.",
        macros: "7g P | 4g C | 24g F"
      },
      {
        name: "Cena",
        time: "21:30",
        description: "Ensalada templada compuesta por 140g de contramuslo de pollo troceado a la plancha, 50g de bacon ahumado crujiente, hojas de lechuga romana y aderezado generosamente con mayonesa casera elaborada con aceite de oliva.",
        macros: "25g P | 11g C | 25g F"
      }
    ]
  };

  const commonErrors = [
    "Deshidratación y deficiencia de electrolitos: Al vaciarse el glucógeno, el cuerpo excreta agua y minerales a gran velocidad. Esto causa dolor de cabeza intenso, cansancio y calambres (Keto-gripe). Es indispensable tomar agua con sal marina o caldos de huesos.",
    "Exceso de proteínas dietéticas: Consumir demasiada proteína activa el proceso hepático de gluconeogénesis (conversión de aminoácidos en glucosa), lo que puede elevar la insulina y expulsarte del estado metabólico de cetosis.",
    "Keto 'Sucia' o procesada: Limitar los carbohidratos comiendo fiambres de mala calidad, quesos fundidos ultraprocesados y aceites vegetales refinados (girasol, soja). La dieta cetogénica debe basarse en alimentos densos en nutrientes y grasas naturales enteras."
  ];

  const faqs = [
    {
      question: "¿Cómo puedo saber con absoluta certeza si estoy en cetosis?",
      answer: "El método de referencia clínico es el medidor de cetonas en sangre digital mediante tiras reactivas capilares, buscando valores entre 0.5 y 3.0 mmol/L de Beta-hidroxibutirato. Las tiras de orina son útiles al inicio, pero pierden fiabilidad a medida que el cuerpo se adapta y deja de excretar cetonas por la orina."
    },
    {
      question: "¿Se puede comer algún tipo de fruta en la dieta cetogénica?",
      answer: "La mayoría de las frutas contienen altas dosis de fructosa que interrumpen la cetosis hepática. Sin embargo, están permitidos los frutos rojos en pequeñas porciones (fresas, frambuesas, moras) debido a su elevada fibra y bajo impacto glucémico. El aguacate, botánicamente una fruta, es el rey de la dieta keto por sus grasas saludables."
    },
    {
      question: "¿Qué es la 'Keto-gripe' (Keto Flu) y cómo puedo aliviarla?",
      answer: "Es una fase de adaptación en los primeros 3 a 7 días en la que el cuerpo aprende a oxidar grasas de forma eficiente. Causa fatiga, náuseas e irritabilidad por pérdida de sodio. Se alivia instantáneamente bebiendo caldos de huesos salados, salando más los alimentos y suplementando con citrato de magnesio y potasio."
    },
    {
      question: "¿Es compatible la dieta cetogénica con el rendimiento en el culturismo o CrossFit?",
      answer: "Aunque es excelente para la pérdida de grasa y la claridad mental, el entrenamiento anaeróbico láctico de alta intensidad (CrossFit, series pesadas al fallo) depende prioritariamente del sistema glucolítico. Para atletas que entrenan a máxima intensidad, el rendimiento absoluto suele optimizarse mejor con un aporte controlado de carbohidratos."
    }
  ];

  return (
    <DietDetailLayout 
      slug="keto"
      title="Dieta Cetogénica (Keto)"
      subtitle="Reconfigura tu motor metabólico para utilizar grasas y cuerpos cetónicos como combustible primario, erradicando los antojos de azúcar de forma radical."
      image="/images/dietas/keto.png"
      tags={["🔴 Pérdida de Grasa", "🟡 Rendimiento"]}
      benefits={[
        "Reducción fulminante del apetito y supresión de la ansiedad por comer dulce.",
        "Pérdida rápida y notoria de peso al inicio de la fase de adaptación cetogénica.",
        "Claridad cognitiva superior y energía sumamente lineal sin bajones de insulina.",
        "Mejora notable del perfil lipídico y aumento del colesterol HDL protector."
      ]}
      starFoods={[
        "Aguacate", 
        "Aceite de coco virgen", 
        "Nueces de macadamia", 
        "Salmón salvaje", 
        "Ternera de pasto", 
        "Huevos ecológicos", 
        "Queso parmesano", 
        "Mantequilla de pasto", 
        "Espinacas", 
        "Aceite de oliva virgen extra"
      ]}
      curiosities="La dieta cetogénica no se inventó con fines estéticos. Fue estructurada por el Dr. Russell Wilder en el año 1921 en la Clínica Mayo para imitar los beneficios metabólicos del ayuno en el tratamiento clínico de niños con epilepsia refractaria."
      keyAdvice="Al inicio de la dieta keto, es imperativo elevar el consumo de sal de mar y agua. Si te sientes sin energía o con dolores de cabeza, un simple vaso de agua con una pizca de sal y limón suele restablecer tu vitalidad en minutos."
      category="Keto"
      physiology={physiology}
      sampleMenu={sampleMenu}
      commonErrors={commonErrors}
      faqs={faqs}
    />
  );
}
