import React from "react";
import type { Metadata } from "next";
import DietDetailLayout from "@/components/dietas/DietDetailLayout";

export const metadata: Metadata = {
  title: "Dieta de Volumen Limpio (Clean Bulking) | Impulse Fitness",
  description: "Maximiza tu ganancia de masa muscular de forma predecible controlando el superávit calórico. Alimentos clave, guía científica y menú de ejemplo diario.",
  keywords: ["volumen limpio", "clean bulking", "dieta ganar musculo", "superavit calorico", "dieta volumen muscular", "hipertrofia"],
};

export default function VolumenLimpioPage() {
  const physiology = {
    scientificTitle: "Optimización de la Vía mTOR y Balance de Nitrógeno",
    explanation: "Para construir nuevo tejido muscular, el organismo requiere de un balance de nitrógeno positivo y de energía adicional que active la vía metabólica mTOR (objetivo de la rapamicina en mamíferos). Un superávit controlado de entre 300 y 500 kcal diarias por encima de tu gasto de mantenimiento maximiza la síntesis de proteínas sin saturar la capacidad de almacenamiento de los adipocitos, evitando la ganancia excesiva de grasa y manteniendo la sensibilidad insulínica óptima.",
    mechanisms: [
      "Elevación de la síntesis de proteínas musculares (MPS) por encima de la tasa de degradación proteica.",
      "Aumento en los niveles del factor de crecimiento similar a la insulina tipo 1 (IGF-1) mediado por carbohidratos complejos.",
      "Supercompensación de glucógeno intramuscular para permitir entrenamientos intensos bajo sobrecarga progresiva."
    ]
  };

  const sampleMenu = {
    dailyKcal: "2950",
    macros: {
      protein: "165g",
      carbs: "390g",
      fats: "78g"
    },
    schedule: [
      {
        name: "Desayuno",
        time: "08:30",
        description: "Porridge de avena integral (90g) cocida con agua o leche vegetal, endulzada con stevia, mezclada con 1 plátano en rodajas, 30g de nueces crudas y 1.5 cacitos (40g) de proteína de suero whey.",
        macros: "45g P | 82g C | 16g F"
      },
      {
        name: "Almuerzo",
        time: "11:30",
        description: "Dos sándwiches de pan integral de centeno con 130g de pechuga de pavo al natural, acompañado de una manzana mediana y 15g de almendras.",
        macros: "38g P | 52g C | 7g F"
      },
      {
        name: "Comida",
        time: "14:30",
        description: "120g (en seco) de arroz jazmín o basmati cocido, salteado con 160g de ternera magra picada y 150g de brócoli al vapor. Aliñado con una cucharada sopera de aceite de oliva virgen extra (AOVE).",
        macros: "42g P | 96g C | 20g F"
      },
      {
        name: "Merienda (Pre-Entreno)",
        time: "18:00",
        description: "Tres tortas de arroz integral untadas con 35g de crema de cacahuete 100% pura y un yogur griego natural sin azúcar.",
        macros: "15g P | 32g C | 20g F"
      },
      {
        name: "Cena",
        time: "21:30",
        description: "220g de patata dulce (camote) asada al horno, acompañada de 180g de filete de salmón a la plancha y un bol grande de ensalada verde (canónigos y espinacas) con unas gotas de limón.",
        macros: "35g P | 48g C | 22g F"
      }
    ]
  };

  const commonErrors = [
    "Hacer 'volumen sucio' (Dirty Bulking): Consumir comida basura con la excusa de 'meter calorías'. Esto solo acelera la ganancia de grasa corporal, reduce la sensibilidad a la insulina y entorpece la partición de nutrientes.",
    "Falta de paciencia y miedo a verse tapado: Controlar demasiado las calorías por miedo a perder los abdominales, impidiendo que el cuerpo entre en un verdadero estado anabólico de construcción.",
    "No progresar en las cargas del gimnasio: Comer de más sin darle un estímulo mecánico progresivo al músculo solo se traducirá en ganancia de tejido graso, no en hipertrofia celular."
  ];

  const faqs = [
    {
      question: "¿Cuánta masa muscular es posible ganar al mes de forma natural?",
      answer: "Un principiante absoluto puede ganar entre 1 y 1.2 kg de músculo real al mes. Un atleta intermedio se situará en un rango de 0.5 a 0.7 kg mensuales, mientras que los avanzados apenas ganarán unas décimas (100g - 200g). Subir de peso más rápido que esto significa acumulación excesiva de grasa y agua."
    },
    {
      question: "¿Es necesario tomar batidos de proteínas para ganar masa muscular?",
      answer: "No son obligatorios. Su única función es la comodidad y la facilidad para llegar a los requerimientos proteicos diarios de una forma económica y rápida. Puedes obtener exactamente los mismos resultados consumiendo fuentes enteras como pollo, pescado, huevos o legumbres."
    },
    {
      question: "¿Qué suplementos deportivos tienen base científica real para fase de volumen?",
      answer: "Los tres suplementos con mayor respaldo clínico y seguridad son la Creatina Monohidrato (mejora la fuerza, potencia e hidratación celular), la Proteína de Suero o Whey (comodidad proteica y alta concentración de leucina) y la Cafeína (mejora el rendimiento en entrenamientos pesados)."
    },
    {
      question: "¿Cuánto debe durar una etapa de volumen limpio?",
      answer: "Idealmente debe planificarse a largo plazo, mínimo de 6 a 12 meses. Los procesos de síntesis y construcción de tejido contráctil son sumamente lentos comparados con la pérdida de grasa. Entrar y salir de volumen en periodos de 2 meses no da tiempo a consolidar ganancias reales."
    }
  ];

  return (
    <DietDetailLayout 
      slug="volumen-limpio"
      title="Volumen Limpio"
      subtitle="Maximiza tu ganancia de masa muscular libre de grasa controlando minuciosamente el superávit calórico y la síntesis proteica de forma científica."
      image="/images/dietas/volumen-limpio.png"
      tags={["🟢 Ganancia Muscular", "🔵 Hipertrofia"]}
      benefits={[
        "Aumento constante y progresivo de la fuerza y potencia muscular en el gimnasio.",
        "Construcción de tejido contráctil real (hipertrofia miofibrilar) en lugar de retención de grasa o líquidos.",
        "Mantenimiento de una óptima flexibilidad metabólica y una alta sensibilidad a la insulina.",
        "Niveles de energía elevados y estables durante todo el día, mejorando el rendimiento cognitivo."
      ]}
      starFoods={[
        "Avena integral", 
        "Arroz basmati", 
        "Pasta de trigo espelta", 
        "Pechuga de pollo", 
        "Ternera magra", 
        "Huevos camperos", 
        "Aguacate fresco", 
        "Almendras crudas", 
        "Crema de cacahuete pura", 
        "Aceite de oliva virgen extra (AOVE)"
      ]}
      curiosities="Muchos atletas creen que para crecer es obligatorio hacer un 'volumen sucio'. No obstante, estudios clínicos demuestran que un excedente ligero de 300-500 kcal estimula la vía mTOR al mismo nivel que un excedente masivo, con la diferencia de que no acumulas grasa masiva."
      keyAdvice="Pésate a diario en ayunas y saca la media matemática semanal. Si subes más de un 1% a un 1.5% de tu peso corporal total al mes, reduce ligeramente tus carbohidratos o grasas, ya que estarás ganando grasa innecesaria."
      category="Volumen"
      physiology={physiology}
      sampleMenu={sampleMenu}
      commonErrors={commonErrors}
      faqs={faqs}
    />
  );
}
