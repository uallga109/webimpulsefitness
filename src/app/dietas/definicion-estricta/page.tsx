import React from "react";
import type { Metadata } from "next";
import DietDetailLayout from "@/components/dietas/DietDetailLayout";

export const metadata: Metadata = {
  title: "Dieta de Definición Estricta (Cutting) | Impulse Fitness",
  description: "Consigue una definición muscular máxima manteniendo tu masa magra. Guía científica completa de definición con pautas alimentarias y menú diario.",
  keywords: ["dieta de definicion", "cutting", "perder grasa sin perder musculo", "dieta definir", "deficit calorico estricto", "definicion muscular"],
};

export default function DefinicionPage() {
  const physiology = {
    scientificTitle: "Déficit Calórico Moderado e Integridad Miofibrilar",
    explanation: "Para movilizar los ácidos grasos de los adipocitos, es fisiológicamente obligatorio crear un balance de energía negativo (déficit calórico). No obstante, un déficit excesivo (>25% de tu TDEE) eleva de manera crónica los niveles de cortisol e induce la ruta de la ubiquitina-proteasoma, desencadenando la degradación de proteínas contractiles (catabolismo muscular). Nuestra estrategia propone un déficit controlado (15% al 20% del TDEE) acoplado a una ingesta proteica elevada (2.0g a 2.5g por kilogramo de peso) para maximizar la retención de nitrógeno e indicarle al organismo que priorice la quema de lípidos.",
    mechanisms: [
      "Activación de la lipólisis celular a través de la estimulación de los receptores beta-adrenérgicos en el tejido graso.",
      "Mantenimiento de la síntesis de proteínas musculares (MPS) activa mediante aminoácidos esenciales ricos en leucina.",
      "Entrenamiento con cargas pesadas para enviar una señal mecánica al cuerpo de que el tejido muscular es necesario."
    ]
  };

  const sampleMenu = {
    dailyKcal: "1950",
    macros: {
      protein: "178g",
      carbs: "172g",
      fats: "58g"
    },
    schedule: [
      {
        name: "Desayuno",
        time: "08:30",
        description: "Tortilla de 5 claras de huevo y 1 huevo entero campero, acompañada de 50g de avena en copos integral cocida en agua y un puñado (50g) de arándanos o fresas frescas.",
        macros: "38g P | 36g C | 8g F"
      },
      {
        name: "Almuerzo",
        time: "12:00",
        description: "180g de queso fresco batido 0% grasas, mezclado con un cacito (25g) de proteína de suero aislada (Isolate) y 15g de nueces picadas.",
        macros: "36g P | 9g C | 10g F"
      },
      {
        name: "Comida",
        time: "15:00",
        description: "170g de pechuga de pollo a la plancha con especias al gusto (sin salsas calóricas), 60g de arroz integral (medido en seco) y 200g de calabacín y espárragos trigueros al horno.",
        macros: "40g P | 50g C | 4g F"
      },
      {
        name: "Merienda (Pre-Entreno)",
        time: "18:00",
        description: "Una lata mediana de atún claro al natural escurrida, acompañada de dos tortas de arroz integral y una manzana verde tipo Granny Smith.",
        macros: "28g P | 26g C | 2g F"
      },
      {
        name: "Cena",
        time: "21:30",
        description: "200g de filete de merluza, bacalao fresco o lenguado a la plancha con un chorro de limón, acompañado de 150g de patata cocida al vapor y un bol de ensalada de espinacas y tomates cherry aliñado con una cucharada sopera de AOVE.",
        macros: "36g P | 51g C | 16g F"
      }
    ]
  };

  const commonErrors = [
    "Recortar calorías de forma drástica al comenzar: Esto provoca una caída súbita en la producción de hormonas tiroideas (T3), ralentiza el metabolismo a nivel clínico y destruye la masa muscular.",
    "Bajar los pesos y subir a repeticiones altísimas: Creer que para 'definir' hay que hacer 20-30 repeticiones con poco peso. Esto elimina el estímulo mecánico de fuerza, indicándole a tu cuerpo que puede deshacerse del músculo porque no requiere cargar pesado.",
    "Eliminar por completo las grasas saludables: Las grasas dietéticas son indispensables para regular las hormonas androgénicas como la testosterona. Reducirlas a menos de 0.5g/kg destruirá tu entorno hormonal."
  ];

  const faqs = [
    {
      question: "¿Cómo puedo controlar el hambre voraz durante la dieta de definición?",
      answer: "La herramienta más potente es la densidad volumétrica: consume alimentos ricos en agua y fibra que ocupen espacio en el estómago con muy pocas calorías. Prioriza vegetales como el brócoli, espinacas y pepino, frutas como la sandía o el melón, carnes muy magras, pescados blancos y gelatinas light sin azúcar."
    },
    {
      question: "¿Se puede perder grasa y ganar músculo a la vez (Recomposición)?",
      answer: "Sí, pero este proceso fisiológico ocurre principalmente en tres perfiles: principiantes absolutos con alto porcentaje de grasa, personas que retoman el entrenamiento tras un periodo largo de inactividad (gracias a la memoria muscular) y personas bajo la influencia de ayudas exógenas hormonales."
    },
    {
      question: "¿Es 100% obligatorio hacer ejercicio cardiovascular para definir?",
      answer: "No. El cardio es una excelente herramienta para potenciar el gasto energético diario y mejorar la salud cardiovascular, pero la definición se rige por el déficit calórico. Puedes conseguir una definición impecable únicamente controlando tu alimentación y entrenando fuerza con alta intensidad."
    },
    {
      question: "¿Cuándo se recomienda programar un Refeed o carga de carbohidratos?",
      answer: "Cuando el porcentaje de grasa es bajo (menos de un 10-12% en hombres o 18-20% en mujeres) y el rendimiento en el gimnasio empieza a resentirse. Consumir una carga controlada de carbohidratos complejos durante 24-48 horas recarga el glucógeno muscular, normaliza la leptina y acelera el metabolismo basal temporalmente."
    }
  ];

  return (
    <DietDetailLayout 
      slug="definicion-estricta"
      title="Dieta de Definición"
      subtitle="Elimina el porcentaje de grasa corporal hasta un dígito manteniendo intacto cada gramo de músculo mediante estrategias nutricionales avanzadas y de alta saciedad."
      image="/images/dietas/definicion.png"
      tags={["🔴 Pérdida de Grasa", "🔵 Estética"]}
      benefits={[
        "Pérdida continua y predecible de grasa corporal subcutánea sin efecto rebote.",
        "Aumento drástico de la definición muscular, vascularización y estética visual.",
        "Restauración completa de la sensibilidad celular a la insulina y control de glucosa.",
        "Preservación de la masa muscular magra y la fuerza estructural mediante un balance de nitrógeno óptimo."
      ]}
      starFoods={[
        "Claras de huevo", 
        "Pechuga de pavo", 
        "Pescado blanco (merluza, bacalao)", 
        "Brócoli", 
        "Espinacas frescas", 
        "Patata cocida", 
        "Sandía", 
        "Queso batido 0%", 
        "Frambuesas", 
        "Gelatina light 0%"
      ]}
      curiosities="La grasa no se puede perder de forma localizada. Por muchos ejercicios de abdominales que hagas, tu genética y perfil hormonal decidirán de qué zonas de tu cuerpo se quema la grasa primero cuando entras en un estado de déficit calórico."
      keyAdvice="Mantén tu consumo de proteína alto (mínimo de 2g a 2.4g por kilogramo de peso corporal) y entrena igual de pesado que en volumen. Tu cuerpo necesita una razón (tensión mecánica) para conservar el tejido muscular."
      category="Definición"
      physiology={physiology}
      sampleMenu={sampleMenu}
      commonErrors={commonErrors}
      faqs={faqs}
    />
  );
}
