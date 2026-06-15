import React from "react";
import type { Metadata } from "next";
import DietDetailLayout from "@/components/dietas/DietDetailLayout";

export const metadata: Metadata = {
  title: "Ayuno Intermitente (Protocolo 16/8) | Impulse Fitness",
  description: "Aprende a realizar el protocolo de ayuno intermitente 16/8 con base científica. Guía completa con menú de ejemplo diario, alimentos permitidos y FAQs.",
};

export default function AyunoPage() {
  const physiology = {
    scientificTitle: "Autofagia Celular y Regulación de la Insulina Basal",
    explanation: "Durante las horas de ayuno (especialmente a partir de la hora 12-14), los niveles circulantes de insulina caen a su mínimo fisiológico, activando la lipasa sensible a hormonas (HSL) para liberar ácidos grasos libres de los depósitos adiposos. Paralelamente, la privación temporal de nutrientes reduce los niveles de aminoácidos intracelulares, desactivando la vía anabólica mTOR y activando el sensor energético AMPK. La AMPK estimula de manera directa la autofagia, un mecanismo de autolimpieza donde las células degradan y reciclan proteínas dañadas y orgánulos defectuosos (como mitocondrias disfuncionales), optimizando la longevidad celular.",
    mechanisms: [
      "Supresión prolongada de la insulina pancreática, permitiendo una oxidación continua de ácidos grasos.",
      "Activación de la ruta AMPK y de la transcripción génica asociada con la reparación celular (Sirtuinas).",
      "Elevación hormonal adaptativa de la hormona del crecimiento (GH) para proteger la masa magra del catabolismo."
    ]
  };

  const sampleMenu = {
    dailyKcal: "1850",
    macros: {
      protein: "135g",
      carbs: "158g",
      fats: "66g"
    },
    schedule: [
      {
        name: "Fase de Ayuno (16 Horas)",
        time: "20:00 - 12:00",
        description: "Periodo de descanso digestivo absoluto. Se permite el consumo ilimitado de agua mineral, café solo (sin leche), té verde, té matcha e infusiones de hierbas (manzanilla, menta) sin azúcar ni edulcorantes.",
        macros: "0g P | 0g C | 0g F"
      },
      {
        name: "Comida 1 (Rompe-Ayuno)",
        time: "12:00",
        description: "Tortilla francesa de 3 huevos camperos enteros salteada con 150g de champiñones laminados y 40g de queso de cabra. Acompañado de un bol de fresas o frambuesas frescas (100g) y un té verde.",
        macros: "30g P | 12g C | 26g F"
      },
      {
        name: "Comida 2 (Media Tarde)",
        time: "16:00",
        description: "Batido cremoso de proteínas (1.5 cacitos / 35g de proteína whey) batido con 250ml de leche de almendras sin azúcar, 1 plátano mediano y 20g de semillas de chía o lino.",
        macros: "35g P | 36g C | 9g F"
      },
      {
        name: "Comida 3 (Cena de Cierre)",
        time: "19:45",
        description: "200g de pechuga de pollo marinada a la plancha, acompañada de 130g de quinoa cocida y un plato de verduras variadas (brócoli, espárragos trigueros y cebolla) salteadas con una cucharada sopera de AOVE.",
        macros: "48g P | 62g C | 19g F"
      }
    ]
  };

  const commonErrors = [
    "Romper el ayuno con comida ultraprocesada: Creer que por ayunar 16 horas puedes comer sin control alimentos hipercalóricos y de mala calidad en la ventana de alimentación. La calidad nutricional sigue determinando la salud.",
    "Abuso de edulcorantes artificiales en la fase de ayuno: Consumir refrescos zero o edulcorantes en exceso. Aunque no contienen calorías, algunos pueden generar una leve respuesta insulínica cefálica o alterar la microbiota.",
    "No hidratarse correctamente: El ayuno ejerce un fuerte efecto diurético natural. Olvidar beber agua con regularidad causa falsas sensaciones de hambre, mareos y fatiga muscular por deshidratación."
  ];

  const faqs = [
    {
      question: "¿El café solo, el té o las infusiones rompen el ayuno intermitente?",
      answer: "No. Las bebidas acalóricas puras como el café negro (sin leche ni azúcar de ningún tipo), el té verde, té matcha, té negro e infusiones herbales (manzanilla, poleo, tila) no contienen macronutrientes, por lo que no elevan los niveles de glucosa en sangre ni interrumpen la autofagia celular."
    },
    {
      question: "¿Se pierde masa muscular por realizar ayuno intermitente?",
      answer: "No, siempre que cumplas con tus requerimientos diarios totales de calorías y proteínas durante tu ventana de alimentación, y mantengas tu entrenamiento de fuerza habitual. A nivel clínico, a igualdad de calorías, el cuerpo preserva la masa magra exactamente igual con 3 comidas concentradas que con 6 esparcidas."
    },
    {
      question: "¿Es seguro entrenar fuerza o levantar pesas en ayunas?",
      answer: "Sí, es seguro y eficaz para la flexibilidad metabólica. Sin embargo, para objetivos de máxima ganancia de fuerza e hipertrofia, realizar una comida rica en carbohidratos complejos y proteínas unas 2 horas antes del entrenamiento optimiza el rendimiento. Si entrenas en ayunas, asegúrate de consumir una comida rica en proteínas poco después de entrenar."
    },
    {
      question: "¿Es el protocolo 16/8 adecuado para mujeres por igual?",
      answer: "Las mujeres suelen ser metabólicamente más sensibles a las señales de restricción de energía debido a la hormona kisspeptina que regula el eje reproductivo. Por ello, muchas mujeres responden mejor a ventanas de ayuno más suaves y flexibles (como un protocolo de 14/10 o 12/12) para evitar desajustes en el ciclo menstrual."
    }
  ];

  return (
    <DietDetailLayout 
      slug="ayuno-intermitente"
      title="Ayuno Intermitente"
      subtitle="Estructura tus ventanas de alimentación y ayuno de forma científica para potenciar la autofagia celular, optimizar la quema de grasas y simplificar tu dieta diaria."
      image="/images/dietas/ayuno.png"
      tags={["🔴 Pérdida de Grasa", "🟡 Estilo de Vida"]}
      benefits={[
        "Facilidad extrema para mantener el déficit calórico al suprimir una de las ingestas principales.",
        "Estímulo constante de la autofagia celular para depurar toxinas y proteínas disfuncionales.",
        "Aumento drástico de la flexibilidad horaria, ahorrando tiempo en la cocina por las mañanas.",
        "Regulación y optimización de la sensibilidad celular a la insulina, estabilizando la energía."
      ]}
      starFoods={[
        "Agua mineral", 
        "Café negro solo", 
        "Té verde sencha", 
        "Té matcha puro", 
        "Infusión de manzanilla", 
        "Agua con gas", 
        "Unas gotas de limón exprimido", 
        "Caldo de verduras depurativo filtrado"
      ]}
      curiosities="La palabra castellana 'desayuno' significa literalmente 'romper el ayuno' (des-ayuno), al igual que el término inglés 'breakfast' (break-fast). Históricamente, el ser humano ha evolucionado alternando periodos de escasez y abundancia, por lo que el ayuno es un estado metabólico natural."
      keyAdvice="No utilices el ayuno intermitente como una carta blanca para comer alimentos insanos en tu ventana de alimentación. Centra tus comidas en alimentos reales, densos en nutrientes y ricos en proteínas de calidad."
      category="Ayuno"
      physiology={physiology}
      sampleMenu={sampleMenu}
      commonErrors={commonErrors}
      faqs={faqs}
    />
  );
}
