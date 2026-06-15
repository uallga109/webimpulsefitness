import React from "react";
import type { Metadata } from "next";
import DietDetailLayout from "@/components/dietas/DietDetailLayout";

export const metadata: Metadata = {
  title: "Dieta Mediterránea Saludable: Qué es y Menú | Impulse Fitness",
  description: "Descubre el patrón alimenticio más saludable del mundo avalado por la ciencia. Alimentos estrella, guía de longevidad y menú de ejemplo diario.",
};

export default function MediterraneaPage() {
  const physiology = {
    scientificTitle: "Ácidos Grasos Monoinsaturadas y Reducción del Estrés Oxidativo",
    explanation: "El pilar fundamental de la dieta mediterránea radica en el consumo preferente de ácido oleico (grasa monoinsaturada procedente del AOVE) y ácidos grasos poliinsaturados Omega-3 (procedentes del pescado azul y frutos secos). Estos lípidos de alta calidad modulan la rigidez de las membranas celulares y aumentan la expresión de los receptores hepáticos de LDL, reduciendo el colesterol aterogénico de baja densidad en sangre. Además, su elevadísima concentración de polifenoles y carotenoides actúa como un potente agente antiinflamatorio sistémico que protege la pared endotelial de las arterias.",
    mechanisms: [
      "Mitigación del colesterol LDL oxidado (oxLDL), la verdadera molécula iniciadora de la placa de ateroma.",
      "Estimulación de la síntesis de óxido nítrico endotelial, favoreciendo la elasticidad arterial y la regulación de la tensión.",
      "Optimización de la microbiota intestinal mediante un aporte masivo y variado de fibras prebióticas y almidón resistente."
    ]
  };

  const sampleMenu = {
    dailyKcal: "2100",
    macros: {
      protein: "122g",
      carbs: "215g",
      fats: "79g"
    },
    schedule: [
      {
        name: "Desayuno",
        time: "08:30",
        description: "Rebanada de 80g de pan integral de masa madre de hogaza tostada, untada con 100g de tomate natural rallado y un chorro generoso (15ml) de aceite de oliva virgen extra (AOVE). Acompañado de dos huevos camperos pasados por agua y una taza de café o té verde sin azúcar.",
        macros: "24g P | 38g C | 22g F"
      },
      {
        name: "Almuerzo",
        time: "11:30",
        description: "Un yogur griego natural sin azúcar (125g) mezclado con 25g de nueces de nogal peladas y un puñado de arándanos o moras frescas.",
        macros: "11g P | 12g C | 16g F"
      },
      {
        name: "Comida",
        time: "14:30",
        description: "Potaje tradicional elaborado con 85g (en seco) de garbanzos castellanos cocidos con espinacas frescas, calabaza, ajo y cebolla. Acompañado de 160g de bacalao fresco al horno con un toque de pimentón dulce.",
        macros: "44g P | 66g C | 9g F"
      },
      {
        name: "Merienda",
        time: "18:00",
        description: "Una manzana asada al horno con canela en polvo y un puñado (25g) de almendras crudas con su piel protectora.",
        macros: "6g P | 29g C | 13g F"
      },
      {
        name: "Cena",
        time: "21:30",
        description: "Filete de dorada o lubina a la espalda (180g) cocinado con ajo laminado y una pizca de guindilla en sartén. Acompañado de una parrillada de 200g de verduras de la huerta (calabacín, pimiento rojo y berenjena) rociada con AOVE.",
        macros: "37g P | 70g C | 19g F"
      }
    ]
  };

  const commonErrors = [
    "Malinterpretar los ingredientes tradicionales: Consumir de forma habitual fritos comerciales elaborados con aceites vegetales refinados o abusar de embutidos grasos con la excusa de ser productos del entorno regional.",
    "Exceso en el consumo de alcohol bajo el pretexto del 'resveratrol': Aunque el vino tinto forma parte de la cultura mediterránea, el alcohol sigue siendo una toxina celular. Su consumo debe ser estrictamente moderado e idealmente opcional.",
    "Ignorar las porciones y las calorías totales: Los alimentos principales de este patrón (AOVE, frutos secos, semillas) son muy ricos en grasas y densos calóricamente. Consumirlos en exceso anulará el déficit necesario para quienes buscan perder peso."
  ];

  const faqs = [
    {
      question: "¿Por qué la dieta mediterránea está catalogada sistemáticamente como la más saludable?",
      answer: "Es el patrón dietético que cuenta con el mayor volumen de investigación científica rigurosa y ensayos clínicos controlados a gran escala (como el famoso estudio PREDIMED en España). Ha demostrado de manera inequívoca que reduce la incidencia de accidentes cerebrovasculares, infartos de miocardio, diabetes tipo 2 y aumenta notablemente la esperanza de vida saludable."
    },
    {
      question: "¿Es adecuada la dieta mediterránea para atletas que buscan ganar masa muscular?",
      answer: "Sí, es excelente. Solo es necesario escalar las porciones de carbohidratos densos (como pasta integral, arroz, legumbres y patatas) y asegurar que las proteínas alcancen los umbrales diarios mediante huevos, aves, mariscos, pescados y fuentes lácteas como el kéfir o el queso fresco batido."
    },
    {
      question: "¿Puedo seguir la dieta mediterránea si soy una persona vegetariana?",
      answer: "Absolutamente. La dieta mediterránea es eminentemente 'plant-based'. Sus cimientos se estructuran sobre verduras, hortalizas, legumbres, granos enteros y frutos secos. Solo se requiere sustituir el pescado y las carnes por proteínas vegetales autóctonas como garbanzos, lentejas y alubias, complementándolo con huevos y lácteos si eres ovolactovegetariano."
    },
    {
      question: "¿El estilo de vida influye tanto como la comida en este patrón?",
      answer: "Sí, el término original 'diaita' significa 'estilo de vida'. Incluye la socialización activa (comer en familia o con amigos reduce los niveles de cortisol), el descanso reparador, la exposición solar moderada y mantenerse físicamente activo a través de actividades cotidianas como caminar o cultivar el huerto."
    }
  ];

  return (
    <DietDetailLayout 
      slug="mediterranea"
      title="Dieta Mediterránea"
      subtitle="El patrón alimentario más estudiado y respaldado por la ciencia médica para potenciar la longevidad celular, reducir la inflamación y proteger el corazón."
      image="/images/dietas/mediterranea.png"
      tags={["🟢 Salud", "🔵 Mantenimiento"]}
      benefits={[
        "Reducción científicamente demostrada en la incidencia de infartos e ictus.",
        "Aporte masivo de antioxidantes naturales que combaten el envejecimiento celular prematuro.",
        "Nivel insuperable de adherencia psicológica debido a su inmensa variedad y riqueza gastronómica.",
        "Mejora notable del microbioma intestinal gracias a la abundancia de fibra soluble y polifenoles."
      ]}
      starFoods={[
        "Aceite de Oliva Virgen Extra", 
        "Garbanzos", 
        "Lentejas pardinas", 
        "Sardinas", 
        "Nueces de nogal", 
        "Almendras crudas", 
        "Tomates frescos", 
        "Ajo", 
        "Naranjas de temporada", 
        "Brócoli de la huerta"
      ]}
      curiosities="La Dieta Mediterránea fue declarada Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO en el año 2010 debido a su profundo valor histórico, social y de salud pública."
      keyAdvice="Utiliza siempre el Aceite de Oliva Virgen Extra (AOVE) en crudo como aliño principal para aderezar tus platos. Es el auténtico elixir de oro que aporta las grasas saludables y los antioxidantes protectores."
      category="Salud"
      physiology={physiology}
      sampleMenu={sampleMenu}
      commonErrors={commonErrors}
      faqs={faqs}
    />
  );
}
