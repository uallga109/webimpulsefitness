export interface RecommendationItem {
  title: string;
  description: string;
  category: string; // e.g. "DIETA", "RUTINA GIMNASIO", "RUTINA EN CASA", "SUPLEMENTACIÓN", "HERRAMIENTA"
  href: string;
  image: string;
  accentColor: "blue" | "green" | "purple" | "orange" | "amber" | "indigo";
  badgeText: string;
}

const RECOMMENDATIONS_MAP: Record<string, RecommendationItem[]> = {
  // ==========================================
  // --- SUPLEMENTACIÓN ---
  // ==========================================
  creatina: [
    {
      title: "Dieta de Volumen Limpio",
      description: "Maximiza el anabolismo muscular y tu ganancia de fuerza acompañando la creatina con un superávit calórico controlado y limpio.",
      category: "DIETA",
      href: "/dietas/volumen-limpio",
      image: "/images/dietas/volumen-limpio.png",
      accentColor: "green",
      badgeText: "Volumen Muscular"
    },
    {
      title: "Biblioteca de Ejercicios de Pectoral",
      description: "Aprovecha al máximo tus picos de fuerza explosiva entrenando el pecho con nuestra guía avanzada basada en biomecánica y sobrecarga.",
      category: "RUTINA GIMNASIO",
      href: "/rutinas/gimnasio/pectoral",
      image: "/images/ejercicios/pectoral.png",
      accentColor: "blue",
      badgeText: "Fuerza de Empuje"
    },
    {
      title: "Proteína de Suero (Whey)",
      description: "El combo sinérgico definitivo: combina la ganancia de fuerza celular de la creatina con la tasa de síntesis proteica acelerada del suero.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/whey",
      image: "/images/suplementos/whey.png",
      accentColor: "purple",
      badgeText: "Combo Sinérgico"
    }
  ],
  whey: [
    {
      title: "Dieta de Volumen Limpio",
      description: "Asegura el aporte diario completo de aminoácidos integrando batidos de suero en un plan estructurado de ganancia de masa magra.",
      category: "DIETA",
      href: "/dietas/volumen-limpio",
      image: "/images/dietas/volumen-limpio.png",
      accentColor: "green",
      badgeText: "Hipertrofia"
    },
    {
      title: "Biblioteca de Ejercicios de Pierna",
      description: "Nutre las miofibrillas de tu tren inferior tras una exigente sesión científica de prensa, sentadilla o peso muerto rumano.",
      category: "RUTINA GIMNASIO",
      href: "/rutinas/gimnasio/pierna",
      image: "/images/ejercicios/pierna.png",
      accentColor: "blue",
      badgeText: "Tren Inferior"
    },
    {
      title: "Creatina Monohidrato",
      description: "Aumenta la fuerza contráctil y el volumen celular para poder reclutar más fibras musculares y maximizar el estímulo del batido de proteínas.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/creatina",
      image: "/images/suplementos/creatina.png",
      accentColor: "purple",
      badgeText: "Básico Indispensable"
    }
  ],
  cafeina: [
    {
      title: "Dieta de Definición Estricta",
      description: "Combina la cafeína con un déficit energético controlado para maximizar la oxidación de ácidos grasos y mantener tu energía estable.",
      category: "DIETA",
      href: "/dietas/definicion-estricta",
      image: "/images/dietas/definicion.png",
      accentColor: "green",
      badgeText: "Oxidación de Grasas"
    },
    {
      title: "Cardio HIIT en Casa",
      description: "Amplifica la tasa metabólica basal post-entrenamiento realizando saltos y sprints pliométricos de alta intensidad sin salir de casa.",
      category: "RUTINA EN CASA",
      href: "/rutinas/casa/hiit-casa",
      image: "/images/ejercicios/hiit_casa.png",
      accentColor: "blue",
      badgeText: "Déficit Calórico"
    },
    {
      title: "Citrulina Malato",
      description: "Mitiga los efectos vasoconstrictores de la cafeína combinándola con el vasodilatador más potente del mercado para un pump insuperable.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/citrulina",
      image: "/images/suplementos/citrulina.png",
      accentColor: "purple",
      badgeText: "Máxima Vasodilatación"
    }
  ],
  "beta-alanina": [
    {
      title: "Salto a la Comba en Casa",
      description: "Retrasa la acumulación de lactato celular en tus sesiones cardiovasculares de salto continuo y alta velocidad con la acción de la carnosina.",
      category: "RUTINA EN CASA",
      href: "/rutinas/casa/salto-comba",
      image: "/images/ejercicios/salto_comba.png",
      accentColor: "blue",
      badgeText: "Tampón de Ácido Láctico"
    },
    {
      title: "Calculadora de Proteínas",
      description: "Asegura el balance de nitrógeno óptimo estimando tus necesidades proteicas según tu intensidad y peso muscular neto.",
      category: "HERRAMIENTA",
      href: "/dietas/calculadora-proteinas",
      image: "/images/dietas/volumen-limpio.png",
      accentColor: "orange",
      badgeText: "Nutrición Científica"
    },
    {
      title: "Creatina Monohidrato",
      description: "Combina la fuerza explosiva en series cortas de la creatina con la resistencia a la acidosis en series largas de la beta-alanina.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/creatina",
      image: "/images/suplementos/creatina.png",
      accentColor: "purple",
      badgeText: "Sinergia Anaeróbica"
    }
  ],
  ashwagandha: [
    {
      title: "Dieta de Definición Estricta",
      description: "Controla los niveles de cortisol inducidos por el déficit calórico prolongado para proteger tu tejido muscular magro de forma natural.",
      category: "DIETA",
      href: "/dietas/definicion-estricta",
      image: "/images/dietas/definicion.png",
      accentColor: "green",
      badgeText: "Protección Muscular"
    },
    {
      title: "Yoga y Movilidad en Casa",
      description: "Complementa la reducción del estrés de la ashwagandha con estiramientos activos que restauran el sistema nervioso central.",
      category: "RUTINA EN CASA",
      href: "/rutinas/casa/yoga-movilidad",
      image: "/images/ejercicios/yoga_movilidad.png",
      accentColor: "indigo",
      badgeText: "Equilibrio Físico"
    }
  ],
  citrulina: [
    {
      title: "Biblioteca de Ejercicios de Pectoral",
      description: "Alcanza un bombeo muscular extremo y optimiza la llegada de oxígeno y nutrientes a tus fibras pectorales durante el entrenamiento.",
      category: "RUTINA GIMNASIO",
      href: "/rutinas/gimnasio/pectoral",
      image: "/images/ejercicios/pectoral.png",
      accentColor: "blue",
      badgeText: "Congestión Máxima"
    },
    {
      title: "Creatina Monohidrato",
      description: "Suma la vasodilatación de la citrulina a la reposición de fosfocreatina para un rendimiento inigualable en series de alta intensidad.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/creatina",
      image: "/images/suplementos/creatina.png",
      accentColor: "purple",
      badgeText: "Entorno Ergogénico"
    }
  ],
  eaas: [
    {
      title: "Ayuno Intermitente",
      description: "Protege tu masa muscular durante las horas finales de ayuno profundo aportando aminoácidos esenciales sin romper el estado metabólico.",
      category: "DIETA",
      href: "/dietas/ayuno-intermitente",
      image: "/images/dietas/volumen-limpio.png",
      accentColor: "green",
      badgeText: "Anti-Catabolismo"
    },
    {
      title: "Biblioteca de Ejercicios de Brazos",
      description: "Estimula la síntesis de proteínas inmediatamente tras tu rutina de bíceps y tríceps mediante el aporte inmediato de aminoácidos esenciales.",
      category: "RUTINA GIMNASIO",
      href: "/rutinas/gimnasio/brazos",
      image: "/images/ejercicios/brazos_hero.png",
      accentColor: "blue",
      badgeText: "Desarrollo de Brazos"
    }
  ],
  omega3: [
    {
      title: "Dieta Mediterránea",
      description: "Consigue el equilibrio perfecto de grasas saludables combinando el Omega 3 con un patrón nutricional rico en antioxidantes y fibra.",
      category: "DIETA",
      href: "/dietas/mediterranea",
      image: "/images/dietas/volumen-limpio.png",
      accentColor: "green",
      badgeText: "Salud Cardiovascular"
    },
    {
      title: "Entrenamiento Isométrico en Casa",
      description: "Optimiza la recuperación y desinflamación de tus articulaciones combinando el Omega 3 con ejercicios sin impacto articular.",
      category: "RUTINA EN CASA",
      href: "/rutinas/casa/entrenamiento-isometrico",
      image: "/images/ejercicios/isometrico.png",
      accentColor: "indigo",
      badgeText: "Protección Articular"
    }
  ],
  recuperacion: [
    {
      title: "Biblioteca de Ejercicios de Espalda",
      description: "Acelera la recuperación y reduce las agujetas (DOMS) tras una dura e intensa sesión de peso muerto, remos y dominadas.",
      category: "RUTINA GIMNASIO",
      href: "/rutinas/gimnasio/espalda",
      image: "/images/ejercicios/espalda_hero.png",
      accentColor: "blue",
      badgeText: "Reparación Espaldar"
    },
    {
      title: "Dieta de Volumen Limpio",
      description: "Proporciona las calorías y macronutrientes necesarios para activar de forma óptima los procesos de reconstrucción miofibrilar crónica.",
      category: "DIETA",
      href: "/dietas/volumen-limpio",
      image: "/images/dietas/volumen-limpio.png",
      accentColor: "green",
      badgeText: "Fase de Crecimiento"
    }
  ],
  vitaminad3: [
    {
      title: "Dieta Mediterránea",
      description: "Mejora la absorción del calcio y tu perfil hormonal consumiendo alimentos enteros y grasas saludables presentes en la dieta clásica.",
      category: "DIETA",
      href: "/dietas/mediterranea",
      image: "/images/dietas/volumen-limpio.png",
      accentColor: "green",
      badgeText: "Absorción de Calcio"
    },
    {
      title: "Calculadora de Calorías (TDEE)",
      description: "Ajusta de forma precisa tus calorías basales y tu estilo de vida para asegurar un funcionamiento hormonal óptimo y equilibrado.",
      category: "HERRAMIENTA",
      href: "/dietas/calculadora-calorias",
      image: "/images/dietas/definicion.png",
      accentColor: "orange",
      badgeText: "Metabolismo Activo"
    }
  ],

  // ==========================================
  // --- DIETAS ---
  // ==========================================
  "volumen-limpio": [
    {
      title: "Creatina Monohidrato",
      description: "El suplemento ergogénico con mayor respaldo científico para multiplicar la potencia celular, fuerza máxima e hipertrofia magra.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/creatina",
      image: "/images/suplementos/creatina.png",
      accentColor: "purple",
      badgeText: "Evidencia Grado A"
    },
    {
      title: "Mancuernas Ajustables",
      description: "Aplica tensión mecánica extrema en tu salón mediante nuestra rutina progresiva estructurada para mancuernas ajustables.",
      category: "RUTINA EN CASA",
      href: "/rutinas/casa/mancuernas-ajustables",
      image: "/images/ejercicios/mancuernas_ajustables.png",
      accentColor: "blue",
      badgeText: "Fuerza en Casa"
    },
    {
      title: "Proteína de Suero (Whey)",
      description: "Alcanza tus exigentes requerimientos diarios de proteínas de forma limpia, cómoda y deliciosa durante tu superávit calórico.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/whey",
      image: "/images/suplementos/whey.png",
      accentColor: "purple",
      badgeText: "Hipertrofia Eficiente"
    }
  ],
  "definicion-estricta": [
    {
      title: "Cafeína Anhidra",
      description: "Potencia drásticamente tu tasa metabólica, disminuye el cansancio percibido y maximiza la lipólisis activa durante tu fase de definición.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/cafeina",
      image: "/images/suplementos/cafeina.png",
      accentColor: "purple",
      badgeText: "Termogénico Natural"
    },
    {
      title: "Calculadora de Calorías (TDEE)",
      description: "Calcula con precisión milimétrica tu tasa metabólica basal para fijar el déficit energético perfecto y prevenir estancamientos.",
      category: "HERRAMIENTA",
      href: "/dietas/calculadora-calorias",
      image: "/images/dietas/definicion.png",
      accentColor: "orange",
      badgeText: "Precisión Metabólica"
    },
    {
      title: "Cardio HIIT en Casa",
      description: "Dispara la beta-oxidación de ácidos grasos residuales y el gasto metabólico post-esfuerzo con circuitos pliométricos cortos.",
      category: "RUTINA EN CASA",
      href: "/rutinas/casa/hiit-casa",
      image: "/images/ejercicios/hiit_casa.png",
      accentColor: "blue",
      badgeText: "Máximo Déficit"
    }
  ],
  "ayuno-intermitente": [
    {
      title: "Cafeína Anhidra",
      description: "Aprovecha las propiedades termogénicas de la cafeína durante el ayuno para mitigar el apetito y elevar el foco mental en tu jornada.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/cafeina",
      image: "/images/suplementos/cafeina.png",
      accentColor: "purple",
      badgeText: "Foco y Energía"
    },
    {
      title: "Cardio HIIT en Casa",
      description: "Combina el ayuno temporal con sesiones pliométricas de alta intensidad para inducir una óptima beta-oxidación de los ácidos grasos.",
      category: "RUTINA EN CASA",
      href: "/rutinas/casa/hiit-casa",
      image: "/images/ejercicios/hiit_casa.png",
      accentColor: "blue",
      badgeText: "Oxidación Lipídica"
    },
    {
      title: "Aminoácidos Esenciales (EAAs)",
      description: "Mantén el anabolismo muscular inyectando aminoácidos sin disparar picos insulínicos durante tus periodos de ayuno activo.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/eaas",
      image: "/images/suplementos/eaas.png",
      accentColor: "purple",
      badgeText: "Protección Proteica"
    }
  ],
  keto: [
    {
      title: "Cafeína Anhidra",
      description: "Dispara tu rendimiento mental y físico mientras tu organismo se adapta a la cetosis y a la falta de depósitos de glucógeno muscular.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/cafeina",
      image: "/images/suplementos/cafeina.png",
      accentColor: "purple",
      badgeText: "Energía sin Glucógeno"
    },
    {
      title: "Entrenamiento Isométrico en Casa",
      description: "Entrena a alta intensidad muscular y mantén tu tono sin las elevadas demandas energéticas glucolíticas del entrenamiento tradicional.",
      category: "RUTINA EN CASA",
      href: "/rutinas/casa/entrenamiento-isometrico",
      image: "/images/ejercicios/isometrico.png",
      accentColor: "indigo",
      badgeText: "Tono en Cetosis"
    }
  ],
  mediterranea: [
    {
      title: "Omega 3 de Alta Concentración",
      description: "Suma la salud cardiovascular del aceite de pescado a la tradicional dieta mediterránea rica en grasas saludables de origen vegetal.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/omega3",
      image: "/images/suplementos/omega3.png",
      accentColor: "purple",
      badgeText: "Ácidos Grasos Esenciales"
    },
    {
      title: "Yoga y Movilidad en Casa",
      description: "Adopta un enfoque holístico de bienestar y longevidad combinando la alimentación mediterránea con el control y la elasticidad física.",
      category: "RUTINA EN CASA",
      href: "/rutinas/casa/yoga-movilidad",
      image: "/images/ejercicios/yoga_movilidad.png",
      accentColor: "indigo",
      badgeText: "Longevidad Activa"
    }
  ],

  // ==========================================
  // --- ENTRENAMIENTO GIMNASIO ---
  // ==========================================
  pectoral: [
    {
      title: "Proteína de Suero (Whey)",
      description: "Optimiza la recuperación de las fibras musculares de tu torso aportando aminoácidos esenciales de máxima biodisponibilidad.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/whey",
      image: "/images/suplementos/whey.png",
      accentColor: "purple",
      badgeText: "Recuperación Miofibrilar"
    },
    {
      title: "Calculadora de Proteínas",
      description: "Estima la cantidad óptima de proteína que requiere tu cuerpo para reconstruir tejidos después de entrenamientos de empuje pesados.",
      category: "HERRAMIENTA",
      href: "/dietas/calculadora-proteinas",
      image: "/images/dietas/volumen-limpio.png",
      accentColor: "orange",
      badgeText: "Entorno Anabólico"
    },
    {
      title: "Creatina Monohidrato",
      description: "Dispara tus picos de fuerza explosiva en el press de banca plano e inclinado maximizando los depósitos de fosfocreatina.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/creatina",
      image: "/images/suplementos/creatina.png",
      accentColor: "purple",
      badgeText: "Fuerza de Empuje"
    }
  ],
  pierna: [
    {
      title: "Creatina Monohidrato",
      description: "Maximiza tus repeticiones pesadas en sentadilla y prensa estimulando de forma natural la resíntesis acelerada del ATP muscular.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/creatina",
      image: "/images/suplementos/creatina.png",
      accentColor: "purple",
      badgeText: "Energía Anaeróbica"
    },
    {
      title: "Dieta de Volumen Limpio",
      description: "Cubre los enormes requerimientos calóricos y de carbohidratos que implican las destructivas y estimulantes sesiones de pierna.",
      category: "DIETA",
      href: "/dietas/volumen-limpio",
      image: "/images/dietas/volumen-limpio.png",
      accentColor: "green",
      badgeText: "Superávit Anabólico"
    },
    {
      title: "Proteína de Suero (Whey)",
      description: "Asegura una reconstrucción miofibrilar inmediata tras las demandas mecánicas masivas de una sesión pesada de tren inferior.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/whey",
      image: "/images/suplementos/whey.png",
      accentColor: "purple",
      badgeText: "Recuperación Plena"
    }
  ],
  brazos: [
    {
      title: "Proteína de Suero (Whey)",
      description: "Aporta los aminoácidos y la leucina necesarios para activar la vía mTOR tras un destructivo entrenamiento de bíceps y tríceps.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/whey",
      image: "/images/suplementos/whey.png",
      accentColor: "purple",
      badgeText: "Síntesis de Proteínas"
    },
    {
      title: "Citrulina Malato",
      description: "Genera una vasodilatación máxima en tus extremidades superiores para mejorar la llegada de nutrientes y el bombeo estético.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/citrulina",
      image: "/images/suplementos/citrulina.png",
      accentColor: "purple",
      badgeText: "Bombeo Extremo"
    }
  ],
  core: [
    {
      title: "Calculadora de Calorías (TDEE)",
      description: "Consigue el porcentaje de grasa idóneo para hacer visible la musculatura de tu sección media mediante precisión matemática.",
      category: "HERRAMIENTA",
      href: "/dietas/calculadora-calorias",
      image: "/images/dietas/definicion.png",
      accentColor: "orange",
      badgeText: "Déficit Inteligente"
    },
    {
      title: "Pilates Suelo en Casa",
      description: "Mejora la estabilidad lumbo-pélvica y la fuerza profunda del transverso del abdomen con nuestro plan de Pilates.",
      category: "RUTINA EN CASA",
      href: "/rutinas/casa/pilates-suelo",
      image: "/images/ejercicios/pilates_suelo.png",
      accentColor: "indigo",
      badgeText: "Estabilidad Lumbar"
    }
  ],
  espalda: [
    {
      title: "Creatina Monohidrato",
      description: "Aumenta la fuerza explosiva en tus tracciones más pesadas (pesos muertos, remos con barra) estimulando el progreso lineal.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/creatina",
      image: "/images/suplementos/creatina.png",
      accentColor: "purple",
      badgeText: "Fuerza en Tracción"
    },
    {
      title: "Proteína de Suero (Whey)",
      description: "Recupera la gran cantidad de masa muscular reclutada tras una sesión completa de amplitud y densidad espaldar.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/whey",
      image: "/images/suplementos/whey.png",
      accentColor: "purple",
      badgeText: "Recuperación Total"
    }
  ],
  hombro: [
    {
      title: "Citrulina Malato",
      description: "Aumenta el flujo sanguíneo en el deltoides lateral y posterior para conseguir ese aspecto redondeado 3D y una contracción fluida.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/citrulina",
      image: "/images/suplementos/citrulina.png",
      accentColor: "purple",
      badgeText: "Estética 3D"
    },
    {
      title: "Barra de Dominadas en Casa",
      description: "Mejora la estabilidad de tu cintura escapular y el balance de empuje-tirón entrenando colgado para proteger tus hombros.",
      category: "RUTINA EN CASA",
      href: "/rutinas/casa/barra-dominadas",
      image: "/images/ejercicios/barra_dominadas.png",
      accentColor: "blue",
      badgeText: "Estabilidad Escapular"
    }
  ],

  // ==========================================
  // --- ENTRENAMIENTO EN CASA ---
  // ==========================================
  "hiit-casa": [
    {
      title: "Cafeína Anhidra",
      description: "Incrementa drásticamente tu potencia, concentración y movilización de grasas antes de tu circuito pliométrico cardiovascular.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/cafeina",
      image: "/images/suplementos/cafeina.png",
      accentColor: "purple",
      badgeText: "Estímulo Pre-Entreno"
    },
    {
      title: "Dieta de Definición Estricta",
      description: "Adapta tus macros para lograr una definición limpia quemando tejido adiposo mientras proteges tus estructuras musculares.",
      category: "DIETA",
      href: "/dietas/definicion-estricta",
      image: "/images/dietas/definicion.png",
      accentColor: "green",
      badgeText: "Protección Muscular"
    },
    {
      title: "Beta-Alanina",
      description: "Retrasa drásticamente la fatiga y la quemazón por lactato durante los intervalos pliométricos de máxima exigencia.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/beta-alanina",
      image: "/images/suplementos/beta-alanina.png",
      accentColor: "purple",
      badgeText: "Foco Termogénico"
    }
  ],
  "salto-comba": [
    {
      title: "Beta-Alanina",
      description: "Retrasa la sensación de quemazón por acidosis en tus gemelos y hombros acumulando carnosina para saltar más rápido y por más tiempo.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/beta-alanina",
      image: "/images/suplementos/beta-alanina.png",
      accentColor: "purple",
      badgeText: "Resistencia Muscular"
    },
    {
      title: "Dieta de Definición Estricta",
      description: "Combina el enorme gasto calórico del salto de comba con una estrategia dietética científicamente estructurada de definición estética.",
      category: "DIETA",
      href: "/dietas/definicion-estricta",
      image: "/images/dietas/definicion.png",
      accentColor: "green",
      badgeText: "Quema de Calorías"
    },
    {
      title: "Cafeína Anhidra",
      description: "Dispara tu coordinación neuromuscular, gasto calórico y reflejos antes de comenzar tu sesión intensa de saltos.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/cafeina",
      image: "/images/suplementos/cafeina.png",
      accentColor: "purple",
      badgeText: "Coordinación y Foco"
    }
  ],
  "bandas-elasticas": [
    {
      title: "Proteína de Suero (Whey)",
      description: "Cubre los requerimientos estructurales de tus fibras tras aplicar la estimulante tensión variable de las bandas elásticas.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/whey",
      image: "/images/suplementos/whey.png",
      accentColor: "purple",
      badgeText: "Nutrición Magra"
    },
    {
      title: "Calculadora de Proteínas",
      description: "Asegura el balance idóneo de nitrógeno corporal calculando tus necesidades proteicas según tus objetivos en casa.",
      category: "HERRAMIENTA",
      href: "/dietas/calculadora-proteinas",
      image: "/images/dietas/volumen-limpio.png",
      accentColor: "orange",
      badgeText: "Cálculo de Macronutrientes"
    }
  ],
  "barra-dominadas": [
    {
      title: "Creatina Monohidrato",
      description: "Consigue la fuerza anaeróbica y potencia muscular necesarias para progresar en dominadas pronas y lastradas en casa.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/creatina",
      image: "/images/suplementos/creatina.png",
      accentColor: "purple",
      badgeText: "Fuerza Pura"
    },
    {
      title: "Mochila Lastrada en Casa",
      description: "Lleva tus dominadas al siguiente nivel añadiendo sobrecarga progresiva lineal mediante el uso de una mochila lastrada técnica.",
      category: "RUTINA EN CASA",
      href: "/rutinas/casa/mochila-lastrada",
      image: "/images/ejercicios/mochila_lastrada.png",
      accentColor: "blue",
      badgeText: "Sobrecarga de Tirón"
    }
  ],
  "entrenamiento-isometrico": [
    {
      title: "Omega 3 de Alta Concentración",
      description: "Protege y nutre las vainas de tendones y articulaciones combinando el trabajo estático con una potente acción antiinflamatoria.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/omega3",
      image: "/images/suplementos/omega3.png",
      accentColor: "purple",
      badgeText: "Articulaciones Fuertes"
    },
    {
      title: "Yoga y Movilidad en Casa",
      description: "Añade elasticidad dinámica y control neuromuscular para balancear la rigidez y fuerza estática de los isométricos.",
      category: "RUTINA EN CASA",
      href: "/rutinas/casa/yoga-movilidad",
      image: "/images/ejercicios/yoga_movilidad.png",
      accentColor: "indigo",
      badgeText: "Control Postural"
    }
  ],
  fitball: [
    {
      title: "Pilates Suelo en Casa",
      description: "Combina el trabajo inestable del balón suizo con la precisión postural del Pilates en el suelo para un core indestructible.",
      category: "RUTINA EN CASA",
      href: "/rutinas/casa/pilates-suelo",
      image: "/images/ejercicios/pilates_suelo.png",
      accentColor: "indigo",
      badgeText: "Control del Core"
    },
    {
      title: "Calculadora de Calorías (TDEE)",
      description: "Fija el balance calórico ideal para apoyar tus rutinas de tonificación y control motor de forma estructurada.",
      category: "HERRAMIENTA",
      href: "/dietas/calculadora-calorias",
      image: "/images/dietas/definicion.png",
      accentColor: "orange",
      badgeText: "Optimización Energética"
    }
  ],
  kettlebells: [
    {
      title: "Cafeína Anhidra",
      description: "Potencia la explosividad de tu tren inferior y tus brazos para ejecutar swings y snatches con una velocidad y potencia óptimas.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/cafeina",
      image: "/images/suplementos/cafeina.png",
      accentColor: "purple",
      badgeText: "Potencia Explosiva"
    },
    {
      title: "Dieta de Definición Estricta",
      description: "Suma la tremenda quema calórica metabólica de las pesas rusas a un déficit estricto para derretir la grasa rebelde.",
      category: "DIETA",
      href: "/dietas/definicion-estricta",
      image: "/images/dietas/definicion.png",
      accentColor: "green",
      badgeText: "Definición Extrema"
    }
  ],
  "mancuernas-ajustables": [
    {
      title: "Creatina Monohidrato",
      description: "Aumenta tus marcas de fuerza en casa y aprovecha cada salto de peso con la resíntesis de ATP celular optimizada.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/creatina",
      image: "/images/suplementos/creatina.png",
      accentColor: "purple",
      badgeText: "Desarrollo Muscular"
    },
    {
      title: "Dieta de Volumen Limpio",
      description: "Alimenta tus entrenamientos de empuje, tirón y pierna con el superávit controlado necesario para consolidar la hipertrofia.",
      category: "DIETA",
      href: "/dietas/volumen-limpio",
      image: "/images/dietas/volumen-limpio.png",
      accentColor: "green",
      badgeText: "Superávit e Hipertrofia"
    }
  ],
  miniparalelas: [
    {
      title: "Creatina Monohidrato",
      description: "Aumenta la potencia y soporte muscular para realizar flexiones en pino, L-sits y transiciones gimnásticas de alta exigencia.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/creatina",
      image: "/images/suplementos/creatina.png",
      accentColor: "purple",
      badgeText: "Fuerza Calisténica"
    },
    {
      title: "Entrenamiento Isométrico en Casa",
      description: "Desarrolla la fuerza en posiciones fijas necesaria para consolidar posturas en barra y miniparalelas sin lesiones.",
      category: "RUTINA EN CASA",
      href: "/rutinas/casa/entrenamiento-isometrico",
      image: "/images/ejercicios/isometrico.png",
      accentColor: "indigo",
      badgeText: "Fuerza Estática"
    }
  ],
  "mochila-lastrada": [
    {
      title: "Dieta de Volumen Limpio",
      description: "Asegura que tu cuerpo disponga de bloques estructurales y energía calórica sobrante para sobrellevar los duros lastres.",
      category: "DIETA",
      href: "/dietas/volumen-limpio",
      image: "/images/dietas/volumen-limpio.png",
      accentColor: "green",
      badgeText: "Combustible de Carga"
    },
    {
      title: "Creatina Monohidrato",
      description: "El soporte de fosfocreatina clave para realizar series cortas y ultra pesadas de fondos y flexiones con carga adicional.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/creatina",
      image: "/images/suplementos/creatina.png",
      accentColor: "purple",
      badgeText: "Energía Adicional"
    }
  ],
  "peso-corporal": [
    {
      title: "Calculadora de Calorías (TDEE)",
      description: "Ajusta tu peso graso para facilitar las transiciones corporales de calistenia, logrando una excelente relación fuerza-peso.",
      category: "HERRAMIENTA",
      href: "/dietas/calculadora-calorias",
      image: "/images/dietas/definicion.png",
      accentColor: "orange",
      badgeText: "Relación Fuerza/Peso"
    },
    {
      title: "Calculadora de Proteínas",
      description: "Evita el catabolismo de la masa magra asegurando un consumo diario proteico óptimo según tu actividad calisténica.",
      category: "HERRAMIENTA",
      href: "/dietas/calculadora-proteinas",
      image: "/images/dietas/volumen-limpio.png",
      accentColor: "orange",
      badgeText: "Protección Miofibrilar"
    }
  ],
  "pilates-suelo": [
    {
      title: "Yoga y Movilidad en Casa",
      description: "Logra un equilibrio sinérgico combinando la fuerza abdominal y control del Pilates con la flexibilidad profunda del Yoga.",
      category: "RUTINA EN CASA",
      href: "/rutinas/casa/yoga-movilidad",
      image: "/images/ejercicios/yoga_movilidad.png",
      accentColor: "indigo",
      badgeText: "Elasticidad Postural"
    },
    {
      title: "Calculadora de Calorías (TDEE)",
      description: "Asegura un aporte calórico saludable y en equilibrio para mantener tu masa muscular activa y una composición corporal sana.",
      category: "HERRAMIENTA",
      href: "/dietas/calculadora-calorias",
      image: "/images/dietas/definicion.png",
      accentColor: "orange",
      badgeText: "Gasto Energético"
    }
  ],
  sliders: [
    {
      title: "Cardio HIIT en Casa",
      description: "Multiplica el gasto calórico de tus circuitos pliométricos añadiendo ejercicios deslizantes de bajo impacto para las rodillas.",
      category: "RUTINA EN CASA",
      href: "/rutinas/casa/hiit-casa",
      image: "/images/ejercicios/hiit_casa.png",
      accentColor: "blue",
      badgeText: " HIIT y Deslizamientos"
    },
    {
      title: "Calculadora de Calorías (TDEE)",
      description: "Estima tu gasto calórico basal y ajusta tu alimentación de forma científica para potenciar la quema de grasas corporal.",
      category: "HERRAMIENTA",
      href: "/dietas/calculadora-calorias",
      image: "/images/dietas/definicion.png",
      accentColor: "orange",
      badgeText: "Cálculo Calórico"
    }
  ],
  trx: [
    {
      title: "Creatina Monohidrato",
      description: "Aumenta la fuerza en tus estabilizadores corporales y dorsales durante las exigentes series de tracción y empuje en suspensión.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/creatina",
      image: "/images/suplementos/creatina.png",
      accentColor: "purple",
      badgeText: "Fuerza en Suspensión"
    },
    {
      title: "Dieta de Definición Estricta",
      description: "Consigue una definición muscular soberbia manteniendo la masa muscular activa mediante la alta demanda del trabajo en suspensión.",
      category: "DIETA",
      href: "/dietas/definicion-estricta",
      image: "/images/dietas/definicion.png",
      accentColor: "green",
      badgeText: "Definición en Suspensión"
    }
  ],
  "yoga-movilidad": [
    {
      title: "Omega 3 de Alta Concentración",
      description: "Promueve la flexibilidad y salud de tus articulaciones y cartílagos, reduciendo inflamaciones leves de ligamentos de forma natural.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/omega3",
      image: "/images/suplementos/omega3.png",
      accentColor: "purple",
      badgeText: "Salud Articular"
    },
    {
      title: "Ashwagandha",
      description: "Consigue la relajación mental y el bienestar definitivo ayudando a rebajar el cortisol y a dormir de manera reparadora.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/ashwagandha",
      image: "/images/suplementos/ashwagandha.png",
      accentColor: "purple",
      badgeText: "Relajación y Foco"
    }
  ]
};

const FALLBACKS_MAP: Record<string, RecommendationItem[]> = {
  suplementos: [
    {
      title: "Dieta de Volumen Limpio",
      description: "Maximiza el anabolismo muscular y tu progreso físico planificando tus calorías con un superávit limpio controlado.",
      category: "DIETA",
      href: "/dietas/volumen-limpio",
      image: "/images/dietas/volumen-limpio.png",
      accentColor: "green",
      badgeText: "Crecimiento Muscular"
    },
    {
      title: "Calculadora de Calorías (TDEE)",
      description: "Calcula con precisión tus requerimientos calóricos basales y de actividad diaria para optimizar la toma de tus suplementos.",
      category: "HERRAMIENTA",
      href: "/dietas/calculadora-calorias",
      image: "/images/dietas/definicion.png",
      accentColor: "orange",
      badgeText: "Ajuste Metabólico"
    }
  ],
  dietas: [
    {
      title: "Creatina Monohidrato",
      description: "El suplemento bioactivo más potente y seguro para acelerar las adaptaciones del entrenamiento de fuerza y masa libre de grasa.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/creatina",
      image: "/images/suplementos/creatina.png",
      accentColor: "purple",
      badgeText: "Fuerza y Potencia"
    },
    {
      title: "Calculadora de Calorías (TDEE)",
      description: "Calcula con precisión científica tu Tasa Metabólica Basal y tu Gasto Energético Total Diario antes de comenzar una dieta.",
      category: "HERRAMIENTA",
      href: "/dietas/calculadora-calorias",
      image: "/images/dietas/definicion.png",
      accentColor: "orange",
      badgeText: "Cálculo Científico"
    }
  ],
  rutinas: [
    {
      title: "Proteína de Suero (Whey)",
      description: "Acelera los procesos de regeneración estructural de tus miofibrillas aportando una proteína de asimilación ultra-rápida y limpia.",
      category: "SUPLEMENTACIÓN",
      href: "/suplementos/whey",
      image: "/images/suplementos/whey.png",
      accentColor: "purple",
      badgeText: "Reparación Muscular"
    },
    {
      title: "Dieta de Volumen Limpio",
      description: "Asegura el entorno biológico y el aporte energético necesario para responder y adaptarte a las demandas del entrenamiento.",
      category: "DIETA",
      href: "/dietas/volumen-limpio",
      image: "/images/dietas/volumen-limpio.png",
      accentColor: "green",
      badgeText: "Superávit Energético"
    }
  ]
};

export function getRecommendations(slug: string | undefined, category: string): RecommendationItem[] {
  if (slug && RECOMMENDATIONS_MAP[slug]) {
    return RECOMMENDATIONS_MAP[slug];
  }
  return FALLBACKS_MAP[category] || FALLBACKS_MAP["suplementos"];
}
