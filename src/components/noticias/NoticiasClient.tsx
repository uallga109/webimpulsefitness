"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

// Array exacto de noticias proporcionado por el usuario
export const noticiasData = [
  { 
    id: 1, 
    slug: 'volumen-vs-intensidad', 
    categoria: 'Entrenamiento', 
    fecha: '12 Mayo 2026', 
    titulo: 'Volumen vs Intensidad: Meta-análisis reciente sobre hipertrofia', 
    resumen: 'Una revisión exhaustiva de 24 estudios confirma que el volumen semanal de series extremas no ofrece ventajas significativas frente a un volumen moderado.', 
    tiempoLectura: '6 min',
    contenido: `
## El fin del mito: Más no siempre es mejor

Durante décadas, la cultura del culturismo ha promovido entrenamientos maratonianos de más de 20 series por grupo muscular a la semana. Sin embargo, la ciencia deportiva actual ha puesto bajo la lupa esta práctica, dando lugar al debate definitivo: **Volumen vs Intensidad en hipertrofia**.

Un reciente meta-análisis que agrupa 24 estudios clínicos ha demostrado que el "volumen basura" (series realizadas lejos del fallo muscular) no aporta beneficios adicionales al crecimiento muscular y, de hecho, puede lastrar la recuperación del sistema nervioso central (SNC).

### La clave: Series Efectivas y el RIR

El estudio concluye que realizar entre **10 y 15 series semanales** por grupo muscular es el "punto dulce" para el 90% de los atletas naturales. La condición innegociable es la intensidad. 

Para que una serie cuente como "efectiva", debe llevarse a un **RIR (Repeticiones en Recámara) de 0 a 2**. Si terminas una serie de press banca y sientes que podías haber hecho 5 repeticiones más, esa serie ha generado fatiga, pero no el estímulo mecánico necesario para la síntesis proteica.

### Aplicación práctica en tu rutina
*   **Audita tu volumen:** Reduce tus series actuales en un 20%.
*   **Aumenta la carga:** Si bajas el volumen, debes subir el peso o acercarte más al fallo real.
*   **Frecuencia 2:** Divide esas 10-15 series en dos días a la semana (ej. Lunes 6 series, Jueves 6 series) para maximizar los picos de síntesis proteica.
    `
  },
  { 
    id: 2, 
    slug: 'modelo-hibrido-entrenadores', 
    categoria: 'B2B', 
    fecha: '8 Mayo 2026', 
    titulo: 'El auge del modelo Híbrido en Entrenadores Personales', 
    resumen: 'Los profesionales que combinan 1 sesión presencial al mes con seguimiento 100% online han duplicado sus ingresos y maximizado la adherencia.', 
    tiempoLectura: '4 min',
    contenido: `
## La evolución del Personal Training

El techo de cristal de cualquier entrenador personal presencial son las horas del día. Si cobras por hora, tus ingresos están matemáticamente limitados. Aquí es donde el **modelo de entrenamiento híbrido** ha revolucionado el mercado B2B del fitness.

Los datos del último trimestre de 2026 son reveladores: los entrenadores que han migrado a un sistema híbrido han aumentado su facturación en un 115% mientras reducen sus horas en la sala de musculación.

### ¿Qué es el Modelo Híbrido?

Consiste en combining lo mejor de ambos mundos. El cliente paga una cuota mensual (suscripción) que incluye:
1.  **Una sesión presencial al mes:** Exclusiva para pulir técnica, realizar test de RM y afianzar el vínculo personal.
2.  **Seguimiento digital continuo:** Entrega de rutinas, control de macros y resolución de dudas mediante software y apps de gestión.

### Beneficios del sistema para escalar tu negocio
*   **Escalabilidad:** Puedes gestionar a 50 clientes online en el mismo tiempo que te toma entrenar a 10 presenciales.
*   **Retención (LTV):** Al ser una cuota mensual más accesible que pagar 4 sesiones semanales presenciales, los clientes permanecen meses e incluso años.
*   **Autoridad:** Te posicionas como un asesor de salud integral, no solo como un "contador de repeticiones".
    `
  },
  { 
    id: 3, 
    slug: 'crononutricion-ventana-anabolica', 
    categoria: 'Nutrición', 
    fecha: '3 Mayo 2026', 
    titulo: 'Crononutrición: ¿Importa la ventana anabólica post-entreno?', 
    resumen: 'Desmitificamos la necesidad imperiosa de tomar el batido de proteínas inmediatamente al soltar las pesas.', 
    tiempoLectura: '5 min',
    contenido: `
## El mito del batido en el vestuario

Todos hemos visto la escena: un usuario termina su última serie de bíceps y corre desesperadamente a su taquilla a mezclar su batido de suero de leche antes de que pasen 30 minutos. Este concepto, conocido como la **ventana anabólica**, ha dominado la suplementación deportiva durante años. 

Pero, ¿qué dice realmente la crononutrición moderna?

### La ventana es más grande de lo que crees

La investigación actual ha demostrado que el entrenamiento de fuerza de resistencia eleva la **Síntesis de Proteína Muscular (MPS)** de forma sostenida durante 24 a 48 horas post-entrenamiento, no solo durante 30 minutos.

Si has consumido una comida rica en proteínas 2 o 3 horas antes de entrenar, los aminoácidos de esa comida seguirán liberándose en tu torrente sanguíneo mucho después de que hayas terminado tu rutina.

### Lo que realmente importa (Orden de prioridades)
1.  **Ingesta Total Diaria:** Consumir entre 1.6g y 2.2g de proteína por kilo de peso corporal al día es el factor crítico.
2.  **Distribución (Timing):** Dividir esa proteína en 3-5 comidas a lo largo del día (cada 3-4 horas) para mantener la leucina en niveles óptimos.
3.  **El Post-entreno:** Si entrenaste en ayunas, sí es urgente consumir proteína de rápida absorción. Si comiste antes, puedes ducharte e ir a casa tranquilamente a cenar.
    `
  },
  { 
    id: 4, 
    slug: 'ia-aplicada-vbt', 
    categoria: 'Tecnología', 
    fecha: '28 Abril 2026', 
    titulo: 'La Inteligencia Artificial aplicada al control de fatiga (VBT)', 
    resumen: 'Cómo los smartphones están reemplazando las estimaciones subjetivas de RIR/RPE midiendo la velocidad concéntrica en tiempo real.', 
    tiempoLectura: '7 min',
    contenido: `
## El fin de las estimaciones subjetivas

El concepto de RIR (Repeticiones en Recámara) revolucionó la autorregulación. Sin embargo, tiene un problema grave: los humanos somos pésimos estimando nuestra propia fatiga. Aquí es donde entra el **Velocity Based Training (VBT) o Entrenamiento Basado en la Velocidad**.

Tradicionalmente, medir la velocidad de una barra requería codificadores lineales carísimos (encoders de más de 400€). Hoy, la **Inteligencia Artificial y la visión por computadora** han democratizado esta tecnología.

### ¿Cómo funciona la IA en tu smartphone?

Las nuevas aplicaciones fitness utilizan la cámara de tu teléfono móvil. Mediante algoritmos de seguimiento de píxeles (computer vision), identifican los extremos de la barra olímpica y calculan los metros por segundo (m/s) a los que se desplaza en la fase concéntrica.

### La correlación Velocidad-Fatiga
La ciencia es clara: a medida que te acercas al fallo muscular, la velocidad de la barra disminuye de forma predecible e involuntaria. 

*   **Velocidad de calentamiento:** > 0.8 m/s
*   **Zona de hipertrofia óptima:** 0.5 - 0.3 m/s
*   **Fallo técnico/muscular:** < 0.15 m/s

Si tu aplicación detecta que tu sentadilla ha bajado de 0.3 m/s, sabes con precisión matemática que estás a 1 o 2 repeticiones del fallo. No hay lugar para el ego ni para el sobreentrenamiento.
    `
  },
  { 
    id: 5, 
    slug: 'creatina-beneficios-cognitivos', 
    categoria: 'Suplementación', 
    fecha: '15 Mayo 2026', 
    titulo: 'Creatina más allá del músculo: Beneficios cognitivos', 
    resumen: 'Nuevos estudios demuestran su impacto directo en la reducción de la fatiga mental y la mejora de la memoria a corto plazo.', 
    tiempoLectura: '5 min',
    contenido: `
## El Nootrópico más barato y estudiado del mundo

Si creías que el **monohidrato de creatina** solo servía para ganar un par de kilos de músculo y levantar más pesado, te estás perdiendo la mitad de la historia. La neurología moderna ha coronado a la creatina como uno de los protectores cognitivos más potentes del mercado.

### El cerebro: Un devorador de energía

Tu cerebro consume aproximadamente el 20% de tu energía diaria (ATP). Al igual que los músculos, el cerebro requiere fosfocreatina para reponer el ATP rápidamente durante tareas que demandan un gran esfuerzo cognitivo.

Estudios recientes han suplementado a estudiantes universitarios y profesionales sometidos a estrés con **5 gramos diarios de creatina**, observando resultados sorprendentes:

### Beneficios demostrados a nivel cerebral
*   **Privación del sueño:** Mitiga drásticamente la caída del rendimiento cognitivo tras noches de poco descanso.
*   **Memoria de trabajo (A corto plazo):** Mejora la capacidad para recordar secuencias numéricas y resolver problemas lógicos complejos bajo presión.
*   **Fatiga mental:** Retrasa la sensación de "niebla mental" tras largas jornadas frente al ordenador.

**Conclusión:** La creatina ya no es exclusiva de culturistas y powerlifters. Es un suplemento de salud fundamental para opositores, programadores y cualquier persona que dependa de su rendimiento intelectual.
    `
  },
  { 
    id: 6, 
    slug: 'colageno-hidrolizado-verdad', 
    categoria: 'Suplementación', 
    fecha: '18 Mayo 2026', 
    titulo: 'Colágeno Hidrolizado: ¿Dinero tirado o salvavidas articular?', 
    resumen: 'Analizamos si la suplementación con colágeno realmente llega a tendones y ligamentos, o si se descompone en aminoácidos comunes.', 
    tiempoLectura: '6 min',
    contenido: `
## El debate de la Biodisponibilidad

Pocos suplementos han generado tanta controversia como el **colágeno hidrolizado**. Los críticos afirman que es una "proteína incompleta y cara", argumentando que al digerirse en el estómago, se descompone en aminoácidos (glicina, prolina) y tu cuerpo no sabe que deben ir a tus articulaciones.

Sin embargo, la literatura científica deportiva reciente ha arrojado luz sobre un mecanismo de acción mucho más complejo y esperanzador para la **salud articular y de tendones**.

### Pequeños péptidos con un gran mensaje

Es cierto que el colágeno se descompone, pero la hidrólisis avanzada permite que pequeñas cadenas (dipéptidos y tripéptidos como la hidroxiprolina) sobrevivan al tracto intestinal y lleguen al torrente sanguíneo intactas.

Estos péptidos no solo aportan "ladrillos" estructurales, sino que actúan como **moléculas señalizadoras**, indicando a los fibroblastos y condrocitos (las células de tus tendones y cartílagos) que aumenten su propia producción endógena de colágeno.

### El Protocolo de Keith Baar para Tendinopatías
Para que el colágeno funcione, el timing es crucial. El tendón tiene muy poco flujo sanguíneo, actuando como una esponja. El protocolo óptimo comprobado consiste en:
1.  Tomar **15 gramos de colágeno hidrolizado** junto con **50 mg de Vitamina C** (imprescindible para la síntesis).
2.  Esperar exactamente **60 minutos** para que los niveles en sangre lleguen a su pico.
3.  Realizar ejercicio específico (ej. isométricos o pliometría) para bombear sangre y nutrientes mecánicamente hacia el tendón dañado.
    `
  },
  { 
    id: 7, 
    slug: 'futbolistas-levantan-pesado', 
    categoria: 'Deportes', 
    fecha: '20 Mayo 2026', 
    titulo: 'Por qué los futbolistas modernos levantan pesado', 
    resumen: 'El mito de que "las pesas te hacen lento" ha muerto. Cómo la fuerza máxima reduce las roturas de isquiotibiales en un 40%.', 
    tiempoLectura: '7 min',
    contenido: `
## De los rondos a la jaula de sentadillas

Hace apenas una década, los entrenadores de fútbol prohibían a sus jugadores tocar barras y discos pesados bajo el pretexto de que "se volverían lentos, rígidos y perderían agilidad". Hoy, la biomecánica ha aplastado ese mito. 

Los equipos de la Champions League actual pasan tanto tiempo en la sala de fuerza como en el césped. La razón no es la estética, sino la **fuerza relativa y la prevención de lesiones**.

### Fuerza Relativa: El verdadero motor de la velocidad

La velocidad de un sprint no depende solo de mover las piernas rápido, sino de la **fuerza contra el suelo** (Rate of Force Development). Un futbolista capaz de hacer una sentadilla profunda con el doble de su peso corporal aplica más Newtons de fuerza en cada zancada, proyectándose hacia adelante con una explosividad inalcanzable solo corriendo.

### El terror de las roturas de isquiotibiales
Las lesiones musculares en la parte posterior del muslo son la plaga del fútbol moderno debido a las desaceleraciones bruscas. Para prevenirlas, los preparadores físicos han implementado el **entrenamiento excéntrico pesado**:

*   **Curl Nórdico (Nordic Hamstring Curl):** Resiste la caída del cuerpo solo con la fuerza de los isquios.
*   **Peso Muerto Rumano (RDL):** Fortalece el estiramiento bajo carga.

La evidencia dicta que aumentar la longitud de los fascículos musculares a través de entrenamiento de fuerza excéntrica reduce la tasa de roturas por sprint en más de un 40%.
    `
  },
  { 
    id: 8, 
    slug: 'pliometria-salto-vertical', 
    categoria: 'Deportes', 
    fecha: '22 Mayo 2026', 
    titulo: 'Pliometría: El secreto del salto vertical en baloncesto y voleibol', 
    resumen: 'Guía práctica para implementar el ciclo estiramiento-acortamiento (CEA) sin destrozar tus rodillas en el intento.', 
    tiempoLectura: '5 min',
    contenido: `
## Volando sobre la red

Si quieres machacar un aro o clavar un remate por encima del bloqueo, tener unas piernas fuertes no es suficiente. Necesitas transformar esa fuerza base en potencia explosiva. El puente que une la fuerza absoluta con la velocidad pura se llama **Entrenamiento Pliométrico**.

### Entendiendo el Ciclo Estiramiento-Acortamiento (CEA)

La pliometría se basa en hackear los reflejos de tu propio cuerpo. Cuando un músculo se estira rápidamente (fase excéntrica), los husos musculares envían una señal de emergencia a la médula espinal que responde contrayendo el músculo con una fuerza brutal para evitar una rotura. Esto es el CEA.

Tus tendones, en particular el tendón de Aquiles, actúan como gomas elásticas. Almacenan energía cinética al caer y la liberan instantáneamente al saltar.

### Ejercicios clave vs Ejercicios de "Circo"

Saltar a un cajón muy alto (Box Jump) parece espectacular en Instagram, pero en realidad mide tu flexibilidad de cadera, no tu salto vertical. Para mejorar realmente:

*   **Drop Jumps (Saltos de caída):** Déjate caer desde un cajón bajo (30 cm). El objetivo es que tus pies toquen el suelo el menor tiempo posible (menos de 0.25 segundos) antes de rebotar hacia arriba.
*   **Pogo Jumps:** Saltos repetitivos usando casi exclusivamente los tobillos, manteniendo las rodillas bloqueadas para fortalecer la rigidez (stiffness) tendinosa.

**Advertencia:** La pliometría es extremadamente demandante para el sistema nervioso central. El volumen debe ser bajo (3-4 series de 5 repeticiones) y siempre garantizando una recuperación total entre series.
    `
  },
  { 
    id: 9, 
    slug: 'ayuno-intermitente-mujeres', 
    categoria: 'Nutrición', 
    fecha: '25 Mayo 2026', 
    titulo: 'Ayuno Intermitente en mujeres: Impacto hormonal', 
    resumen: 'Por qué el protocolo 16/8 no funciona igual en hombres que en mujeres, y cómo adaptar las ventanas de ingesta al ciclo menstrual.', 
    tiempoLectura: '8 min',
    contenido: `
## La biología no es unisex

El protocolo de **ayuno intermitente 16/8** (ayunar 16 horas y comer en una ventana de 8) se ha popularizado masivamente como la herramienta definitiva para la pérdida de grasa y la sensibilidad a la insulina. Sin embargo, la inmensa mayoría de los estudios iniciales se realizaron en hombres o ratones macho.

Cuando las mujeres aplican protocolos estrictos de ayuno a largo plazo, a menudo reportan pérdida de cabello, alteraciones menstruales (amenorrea), insomnio y estancamiento en la pérdida de peso.

### La proteína Kisspeptina y la sensibilidad al estrés

Las mujeres tienen una sensibilidad exquisita a la privación calórica debido a una proteína llamada **Kisspeptina**, que regula el eje hipotálamo-hipófisis-gonadal. Un déficit energético prolongado (como un ayuno muy largo) es interpretado por el cerebro femenino como un entorno hostil (hambruna). 

Para proteger la capacidad reproductiva, el cuerpo eleva el cortisol, reduce la actividad de la glándula tiroides y detiene la ovulación.

### Cómo adaptar el ayuno al Ciclo Menstrual
Para obtener los beneficios de la autofagia y la quema de grasas sin arruinar el balance hormonal, la clave es la flexibilidad:

1.  **Fase Folicular (Días 1-14):** Los estrógenos están altos y la tolerancia al estrés es mayor. Ventanas de ayuno de **14 a 16 horas** son bien toleradas.
2.  **Fase Lútea (Días 15-28):** La progesterona domina y el cuerpo requiere más carbohidratos y energía constante para construir el revestimiento uterino. En esta fase, es recomendable **reducir el ayuno a 12 horas** (ej. de 21:00h a 09:00h) y no entrenar en ayunas a alta intensidad.
    `
  },
  { 
    id: 10, 
    slug: 'dieta-keto-crossfit', 
    categoria: 'Nutrición', 
    fecha: '28 Mayo 2026', 
    titulo: 'Dieta Keto en deportes explosivos (CrossFit/Sprints)', 
    resumen: '¿Se puede rendir a alta intensidad sin glucógeno muscular? Lo que dice la fisiología sobre usar grasa como combustible a más de 160 ppm.', 
    tiempoLectura: '6 min',
    contenido: `
## El choque entre dos mundos

La **Dieta Cetogénica (Keto)**, caracterizada por un consumo inferior a 50g de carbohidratos diarios, ha demostrado ser una herramienta excepcional para revertir la resistencia a la insulina y proveer energía estable para maratonistas o ultra-fondistas. 

Pero, ¿qué ocurre cuando cruzas la puerta de un box de CrossFit e intentas hacer un WOD como "Fran" (Thrusters y Dominadas al fallo) estando en cetosis?

### La fisiología de la intensidad

El cuerpo humano tiene diferentes motores de energía. A bajas pulsaciones (caminar, trote suave), oxidar grasas (cetonas) es eficiente. Sin embargo, cuando la frecuencia cardíaca supera el 80% (más de 160 ppm) y el esfuerzo se vuelve anaeróbico, el cuerpo exige **Glucólisis Rápida**.

Oxidar grasa es un proceso metabólicamente lento y requiere mucho oxígeno. A alta intensidad, **el músculo necesita glucógeno (carbohidratos almacenados)**. Si no hay glucógeno, el rendimiento se desploma, la percepción de esfuerzo se dispara y la potencia máxima disminuye hasta un 15%.

### La Solución: Dieta Cetogénica Cíclica o TKD

Si un atleta desea mantener los beneficios metabólicos de la keto pero necesita rendir en deportes explosivos (CrossFit, BJJ, Sprinters), la ciencia sugiere una **Targeted Ketogenic Diet (TKD)**:

*   Consiste en ingerir entre **15g y 30g de carbohidratos de altísima absorción** (como dextrosa o gomitas) estrictamente 30 minutos antes del WOD.
*   Estos carbohidratos se queman por completo durante la sesión explosiva, permitiendo rendir al máximo sin sacar al atleta del estado de cetosis sistémica durante el resto del día.
    `
  },
  { id: 11, slug: 'banos-hielo-recuperacion', categoria: 'Salud', fecha: '1 Junio 2026', titulo: 'Baños de hielo (Ice Baths): ¿Recuperación o freno a la hipertrofia?', resumen: 'Sumergirse en agua helada baja la inflamación, pero la inflamación post-entreno es necesaria para que el músculo crezca. ¿Cuándo usarlos?', tiempoLectura: '5 min' },
  { id: 12, slug: 'sueno-profundo-testosterona', categoria: 'Salud', fecha: '3 Junio 2026', titulo: 'El impacto del sueño profundo en tu testosterona natural', resumen: 'Dormir 5 horas vs 8 horas: Los datos sobre cómo la falta de descanso envejece tu sistema endocrino el equivalente a 10 años.', tiempoLectura: '4 min' },
  { id: 13, slug: 'estiramientos-vs-movilidad', categoria: 'Entrenamiento', fecha: '5 Junio 2026', titulo: 'Estiramientos estáticos vs Movilidad activa antes de entrenar', resumen: 'Tocar la punta de tus pies antes de hacer sentadillas reduce tu fuerza explosiva. Descubre cómo calentar el sistema nervioso central.', tiempoLectura: '4 min' },
  { id: 14, slug: 'rir-rpe-mortales', categoria: 'Entrenamiento', fecha: '8 Junio 2026', titulo: 'RIR y RPE para mortales: Cómo saber si de verdad estás entrenando duro', resumen: 'El 80% de los usuarios de gimnasio dejan 5 o más repeticiones en recámara creyendo que están al fallo. Cómo calibrar tu esfuerzo.', tiempoLectura: '6 min' },
  { id: 15, slug: 'apple-watch-calorias', categoria: 'Tecnología', fecha: '10 Junio 2026', titulo: 'El margen de error de tu Apple Watch al contar calorías', resumen: '¿Por qué tu reloj inteligente dice que quemaste 800 kcal en tu sesión de pesas? Desmontamos los algoritmos de las pulseras de actividad.', tiempoLectura: '5 min' },
  { id: 16, slug: 'fin-maquinas-cardio', categoria: 'B2B', fecha: '12 Junio 2026', titulo: 'El fin de las máquinas de cardio estáticas en gimnasios', resumen: 'Por qué los grandes centros están cambiando las cintas tradicionales por remos y SkiErgs para rentabilizar el espacio.', tiempoLectura: '6 min' },
  { id: 17, slug: 'proteina-vegetal-vs-animal-leucina', categoria: 'Nutrición', fecha: '15 Junio 2026', titulo: 'Proteína Vegetal vs Animal: El umbral de Leucina', resumen: 'Por qué 30 gramos de proteína de guisante no construyen el mismo músculo que 30 gramos de Whey, y cómo solucionarlo combinando fuentes.', tiempoLectura: '6 min' },
  { id: 18, slug: 'entrenamiento-concurrente-cardio-fuerza', categoria: 'Entrenamiento', fecha: '18 Junio 2026', titulo: 'Entrenamiento Concurrente: Cómo hacer cardio sin perder músculo', resumen: 'Separar las sesiones por 6 horas o elegir bicicleta en lugar de correr: las claves para que la AMPK no bloquee tus ganancias de fuerza.', tiempoLectura: '7 min' },
  { id: 19, slug: 'ashwagandha-cortisol-testosterona', categoria: 'Suplementación', fecha: '20 Junio 2026', titulo: 'Ashwagandha: El adaptógeno que reduce el estrés y eleva la testosterona', resumen: 'Revisamos la literatura científica sobre la raíz de KSM-66 y su impacto real en la modulación del cortisol en atletas estresados.', tiempoLectura: '5 min' },
  { id: 20, slug: 'hrv-variabilidad-frecuencia-cardiaca', categoria: 'Salud', fecha: '23 Junio 2026', titulo: 'HRV (Variabilidad de Frecuencia Cardíaca): Tu semáforo de entrenamiento', resumen: 'Por qué deberías medir tu HRV cada mañana antes de decidir si te toca un entrenamiento pesado o una sesión de descanso activo.', tiempoLectura: '6 min' },
  { id: 21, slug: 'boutiques-micro-gimnasios-b2b', categoria: 'B2B', fecha: '25 Junio 2026', titulo: 'El auge de los Micro-Gimnasios Boutique de alto ticket', resumen: 'Cómo espacios de solo 150m2 están facturando más que macro-centros tradicionales cobrando cuotas de 150€ con atención hiper-personalizada.', tiempoLectura: '8 min' },
  { id: 22, slug: 'anillos-inteligentes-oura-vs-relojes', categoria: 'Tecnología', fecha: '28 Junio 2026', titulo: 'Anillos Inteligentes vs Smartwatches: ¿Quién mide mejor el sueño?', resumen: 'Comparamos la precisión de los sensores biométricos en los dedos frente a las muñecas para las fases de sueño REM y profundo.', tiempoLectura: '5 min' },
  { id: 23, slug: 'biomecanica-carrera-talon-vs-metatarso', categoria: 'Deportes', fecha: '1 Julio 2026', titulo: 'Biomecánica del Running: ¿Dejar de talonar evita lesiones?', resumen: 'El debate eterno sobre la pisada. Analizamos si cambiar tu técnica de carrera hacia el metatarso reduce el impacto en las rodillas o sobrecarga los gemelos.', tiempoLectura: '7 min' },
  { id: 24, slug: 'magnesio-glicinato-vs-citrato', categoria: 'Suplementación', fecha: '3 Julio 2026', titulo: 'La guía definitiva del Magnesio: Glicinato, Citrato o Treonato', resumen: 'No todos los magnesios son iguales. Descubre cuál necesitas para dormir mejor, cuál para ir al baño y cuál para la salud cognitiva.', tiempoLectura: '6 min' },
  { id: 25, slug: 'edulcorantes-microbiota-intestinal', categoria: 'Nutrición', fecha: '6 Julio 2026', titulo: 'Sucralosa, Eritritol y tu Microbiota Intestinal', resumen: '¿Los edulcorantes cero calorías arruinan tu flora bacteriana? Lo que dicen los últimos estudios sobre la resistencia a la insulina inducida.', tiempoLectura: '5 min' },
  { id: 26, slug: 'tempo-excentrico-hipertrofia', categoria: 'Entrenamiento', fecha: '8 Julio 2026', titulo: 'El poder de la fase Excéntrica para destruir fibras (y crecer)', resumen: 'Bajar el peso en 4 segundos provoca más micro-roturas musculares que levantarlo. Cómo programar el "Tempo" en tus rutinas.', tiempoLectura: '5 min' },
  { id: 27, slug: 'pistolas-masaje-perfusion-sanguinea', categoria: 'Salud', fecha: '11 Julio 2026', titulo: 'Pistolas de Masaje: ¿Ciencia real o placebo vibratorio?', resumen: 'Analizamos si la terapia de percusión realmente acelera la recuperación del tejido fascial o si solo proporciona un alivio neurológico temporal.', tiempoLectura: '4 min' },
  { id: 28, slug: 'sensores-glucosa-continuos-fitness', categoria: 'Tecnología', fecha: '14 Julio 2026', titulo: 'Sensores de Glucosa (CGM) en atletas no diabéticos', resumen: 'Por qué los corredores de maratón y crossfiteros se están parcheando el brazo para monitorizar sus picos de insulina en tiempo real.', tiempoLectura: '6 min' },
  { id: 29, slug: 'prevencion-lesiones-padel', categoria: 'Deportes', fecha: '16 Julio 2026', titulo: 'Epicondilitis y Padel: Cómo blindar tus codos y hombros', resumen: 'El deporte de moda está llenando las clínicas de fisioterapia. Ejercicios de fuerza específicos para soportar los impactos excéntricos de la pala.', tiempoLectura: '5 min' },
  { id: 30, slug: 'retencion-apps-gamificacion-b2b', categoria: 'B2B', fecha: '19 Julio 2026', titulo: 'Gamificación en Gimnasios: Retener clientes jugando', resumen: 'Sistemas de recompensas, niveles y retos internos que están bajando la tasa de abandono (churn rate) un 18% en los primeros 6 meses.', tiempoLectura: '6 min' },
  { id: 31, slug: 'pre-entrenos-sin-cafeina', categoria: 'Suplementación', fecha: '21 Julio 2026', titulo: 'Pre-entrenos "Pump" sin estimulantes: Congestión sin insomnio', resumen: 'Citrulina, Glicerol y Nitratos. Cómo conseguir el máximo flujo sanguíneo entrenando a las 20:00h sin destrozar tu calidad de sueño.', tiempoLectura: '5 min' },
  { id: 32, slug: 'maquinas-vs-pesos-libres', categoria: 'Entrenamiento', fecha: '24 Julio 2026', titulo: 'Máquinas vs Pesos Libres: El fin del dogmatismo', resumen: 'Por qué los culturistas de élite prefieren las máquinas de palanca para aislar el músculo con seguridad frente a las inestables sentadillas con barra.', tiempoLectura: '7 min' },
  { id: 33, slug: 'carga-carbohidratos-supercompensacion', categoria: 'Nutrición', fecha: '26 Julio 2026', titulo: 'Supercompensación de Glucógeno: No es solo comer pasta', resumen: 'El protocolo exacto para duplicar tus reservas de energía muscular los días previos a una competición de resistencia.', tiempoLectura: '6 min' },
  { id: 34, slug: 'saunas-infrarrojas-longevidad', categoria: 'Salud', fecha: '29 Julio 2026', titulo: 'Saunas Infrarrojas vs Tradicionales: Heat Shock Proteins', resumen: 'El impacto de la exposición al calor en la longevidad celular y por qué la sudoración pasiva imita los beneficios cardiovasculares del cardio moderado.', tiempoLectura: '5 min' },
  { id: 35, slug: 'periodizacion-ondulante-crossfit', categoria: 'Deportes', fecha: '1 Agosto 2026', titulo: 'Periodización Ondulante: Evitando el sobreentrenamiento en CrossFit', resumen: 'Cómo programar microciclos alternando cargas pesadas y metabólicos para no quemar tu sistema nervioso central en la primera semana.', tiempoLectura: '7 min' },
  { id: 36, slug: 'frecuencia-dos-vs-tres-hipertrofia', categoria: 'Entrenamiento', fecha: '4 Agosto 2026', titulo: '¿Frecuencia 2 o Frecuencia 3? Optimizando la síntesis proteica', resumen: 'Entrenar el pecho una vez a la semana es ineficiente. Descubre cuántas horas dura realmente la ventana de crecimiento muscular post-entrenamiento.', tiempoLectura: '5 min' },
  { id: 37, slug: 'sodio-hidratacion-rendimiento', categoria: 'Nutrición', fecha: '6 Agosto 2026', titulo: 'Sodio antes de entrenar: El secreto del "Pump" y la resistencia', resumen: 'Beber solo agua deshidrata a nivel intracelular. Por qué añadir media cucharadita de sal al pre-entreno está revolucionando el rendimiento.', tiempoLectura: '4 min' },
  { id: 38, slug: 'beta-alanina-parestesia-lactato', categoria: 'Suplementación', fecha: '9 Agosto 2026', titulo: 'Beta-Alanina: Más allá del picor en la piel', resumen: 'El mecanismo exacto por el que la carnosina retrasa la acumulación de ácido láctico, permitiéndote sacar esas 2 repeticiones extra al final de la serie.', tiempoLectura: '6 min' },
  { id: 39, slug: 'fatiga-sistema-nervioso-central', categoria: 'Salud', fecha: '12 Agosto 2026', titulo: 'Fatiga del SNC: Cuando tu cerebro dice basta antes que tu músculo', resumen: 'Por qué bostezas durante los levantamientos pesados y cómo medir tu agarre (dynamometry) para saber si estás frito neurológicamente.', tiempoLectura: '7 min' },
  { id: 40, slug: 'software-gestion-reservas-b2b', categoria: 'B2B', fecha: '14 Agosto 2026', titulo: 'El fin de las reservas por WhatsApp en centros deportivos', resumen: 'La pérdida económica oculta de gestionar clases manualmente. Cómo la automatización de listas de espera aumenta un 15% la asistencia real.', tiempoLectura: '5 min' },
  { id: 41, slug: 'error-imc-atletas-ffmi', categoria: 'Tecnología', fecha: '18 Agosto 2026', titulo: 'El error del IMC en atletas: Por qué el FFMI es tu verdadero indicador', resumen: 'Si levantas pesas, el Índice de Masa Corporal te clasificará como obeso. Descubre cómo calcular tu Índice de Masa Libre de Grasa (FFMI) para conocer tu límite genético real.', tiempoLectura: '6 min' },
  { id: 42, slug: 'calculadora-1rm-vs-levantamiento-real', categoria: 'Entrenamiento', fecha: '20 Agosto 2026', titulo: 'Calculadoras de 1RM vs Levantamiento real: Protege tu Sistema Nervioso', resumen: 'Por qué hacer un test de repetición máxima real puede arruinar tu semana de entrenamiento y cómo usar las fórmulas de Brzycki o Epley con un 95% de precisión.', tiempoLectura: '5 min' },
  { id: 43, slug: 'bioimpedancia-vs-dexa-porcentaje-grasa', categoria: 'Tecnología', fecha: '23 Agosto 2026', titulo: 'Básculas de Bioimpedancia vs DEXA: La verdad sobre tu porcentaje de grasa', resumen: 'Esa báscula inteligente de 30€ no sabe cuánta grasa tienes. Analizamos el margen de error del agua corporal y por qué el espejo sigue siendo superior.', tiempoLectura: '7 min' },
  { id: 44, slug: 'dieta-flexible-iifym-macros', categoria: 'Nutrición', fecha: '25 Agosto 2026', titulo: 'Dieta Flexible (IIFYM): Cuadrar macros no significa comer basura', resumen: 'La ciencia detrás de la calculadora de macronutrientes. Cómo el balance energético dicta tu peso, pero la densidad de micronutrientes dicta tu salud y rendimiento.', tiempoLectura: '6 min' },
  { id: 45, slug: 'preparacion-hyrox-hibrido', categoria: 'Deportes', fecha: '28 Agosto 2026', titulo: 'Preparación para Hyrox: La anatomía del entrenamiento híbrido perfecto', resumen: 'Combinar 8 kilómetros de carrera con trineos pesados requiere una periodización especial. El split semanal definitivo para no perder fuerza mientras ganas fondo.', tiempoLectura: '8 min' },
  { id: 46, slug: 'peak-week-culturismo-natural-wnbf', categoria: 'Deportes', fecha: '30 Agosto 2026', titulo: 'La "Peak Week" en Culturismo Natural (WNBF): Puestas a punto sin química', resumen: 'El vaciado y carga de carbohidratos, la manipulación de sodio/potasio y por qué cortar el agua por completo te hará salir plano a la tarima.', tiempoLectura: '7 min' },
  { id: 47, slug: 'tendencias-fibo-equipamiento', categoria: 'B2B', fecha: '2 Septiembre 2026', titulo: 'Tendencias FIBO 2026: Hacia dónde va el equipamiento comercial', resumen: 'De las máquinas con IA que ajustan el peso solas a la realidad virtual en el cardio. Un repaso a lo que los dueños de gimnasios comprarán este año.', tiempoLectura: '5 min' },
  { id: 48, slug: 'clear-whey-isolate-verano', categoria: 'Suplementación', fecha: '5 Septiembre 2026', titulo: 'Clear Whey Isolate: ¿Puro marketing o la mejor proteína del mercado?', resumen: 'Analizamos el proceso de hidrólisis ácida que convierte un batido lechoso en una bebida transparente como el zumo, y si justifica su elevado precio.', tiempoLectura: '4 min' },
  { id: 49, slug: 'nootropicos-pre-entreno-enfoque', categoria: 'Suplementación', fecha: '8 Septiembre 2026', titulo: 'Nootrópicos en el pre-entreno: Cambiando la taquicardia por foco mental', resumen: 'Alpha-GPC, Tirosina y Melena de León. La nueva tendencia de las marcas para conectarte con el músculo sin los temblores de los estimulantes masivos.', tiempoLectura: '6 min' },
  { id: 50, slug: 'sellos-calidad-creapure-kyowa', categoria: 'Marcas', fecha: '10 Septiembre 2026', titulo: 'Patentes en Suplementos: Qué significan Creapure, Kyowa y CarnoSyn', resumen: 'Aprende a leer las etiquetas de tus botes. Por qué una patente alemana o japonesa te garantiza que no estás comprando polvo de arroz encubierto.', tiempoLectura: '5 min' },
  { id: 51, slug: 'sentadilla-bulgara-hipertrofia-piernas', categoria: 'Entrenamiento', fecha: '13 Septiembre 2026', titulo: 'Sentadilla Búlgara: El ejercicio unilateral que destrona a la prensa', resumen: 'Odiado por todos, respaldado por la ciencia. Cómo la inestabilidad de la sentadilla dividida recluta más fibras del glúteo y vasto medial con menos carga espinal.', tiempoLectura: '6 min' },
  { id: 52, slug: 'semanas-descarga-deload-activo', categoria: 'Entrenamiento', fecha: '15 Septiembre 2026', titulo: 'Semanas de Descarga (Deload): El secreto para romper estancamientos', resumen: 'Reducir el volumen a la mitad no te hará perder músculo. La fisiología detrás de disipar la fatiga acumulada para que se exprese tu fuerza real.', tiempoLectura: '5 min' },
  { id: 53, slug: 'entrenamiento-oclusivo-bfr-rehabilitacion', categoria: 'Salud', fecha: '18 Septiembre 2026', titulo: 'Entrenamiento Oclusivo (BFR): Hipertrofia extrema con cargas mínimas', resumen: 'Cómo usar torniquetes para restringir el flujo venoso consigue un estímulo hipertrófico levantando solo el 20% de tu RM. Ideal para lesiones articulares.', tiempoLectura: '7 min' },
  { id: 54, slug: 'entrenamiento-cuello-conmociones', categoria: 'Salud', fecha: '20 Septiembre 2026', titulo: 'Entrenamiento de Cuello: El eslabón perdido en deportes de contacto', resumen: 'La ciencia de los amortiguadores naturales. Cómo añadir 2 cm a la circunferencia de tu cuello reduce drásticamente el riesgo de conmociones cerebrales.', tiempoLectura: '4 min' },
  { id: 55, slug: 'dieta-carnivora-autoinmunidad', categoria: 'Nutrición', fecha: '23 Septiembre 2026', titulo: 'Dieta Carnívora y Autoinmunidad: ¿Qué dice la ciencia empírica?', resumen: 'Eliminar todas las plantas y antinutrientes como dieta de eliminación extrema. Los riesgos a largo plazo y por qué algunos atletas reportan cero inflamación.', tiempoLectura: '6 min' },
  { id: 56, slug: 'ciclodextrinas-carbohidratos-intra-entreno', categoria: 'Suplementación', fecha: '26 Septiembre 2026', titulo: 'Carbohidratos intra-entreno (Ciclodextrinas): ¿Quién los necesita?', resumen: 'Si tu entrenamiento de pesas dura menos de 90 minutos, estás tirando el dinero. Cuándo y cómo utilizar carbohidratos de vaciado gástrico rápido.', tiempoLectura: '5 min' },
  { id: 57, slug: 'osmolaridad-electrolitos-deshidratacion', categoria: 'Nutrición', fecha: '28 Septiembre 2026', titulo: 'Osmolaridad y Electrolitos: Por qué beber agua sola te deshidrata', resumen: 'El sudor no es solo agua. La importancia de reponer sodio, potasio y magnesio en proporciones isotónicas para evitar calambres y bajones de tensión.', tiempoLectura: '5 min' },
  { id: 58, slug: 'psicologia-precios-gimnasios', categoria: 'B2B', fecha: '1 Octubre 2026', titulo: 'Psicología de Precios en Gimnasios: El impacto de los céntimos', resumen: 'Neuromarketing B2B: Analizamos por qué las cuotas de 39,99€ reducen la fricción de compra un 20% en comparación con un precio redondo de 40,00€.', tiempoLectura: '4 min' },
  { id: 59, slug: 'sindrome-burnout-entrenadores-personales', categoria: 'B2B', fecha: '4 Octubre 2026', titulo: 'El síndrome de Burnout en Entrenadores: Cómo evitar quemarte', resumen: 'Jornadas partidas de 6:00h a 22:00h. Las señales de alerta del agotamiento del entrenador y estrategias para poner límites a los clientes por WhatsApp.', tiempoLectura: '6 min' },
  { id: 60, slug: 'wearables-acceso-gimnasios-rfid', categoria: 'Tecnología', fecha: '7 Octubre 2026', titulo: 'Integración de Wearables en Gimnasios: El fin de las tarjetas plásticas', resumen: 'Cómo los principales softwares de gestión ya permiten a los usuarios fichar en el torno directamente acercando su Apple Watch o anillo Oura.', tiempoLectura: '5 min' },
  { id: 61, slug: 'calistenia-vs-pesas-tension-mecanica', categoria: 'Entrenamiento', fecha: '10 Octubre 2026', titulo: 'Calistenia vs Pesas: La verdad sobre la tensión mecánica', resumen: '¿Puede tu peso corporal generar la misma hipertrofia que una barra olímpica? Analizamos la curva de resistencia y cómo lastrar los básicos para igualar el estímulo.', tiempoLectura: '6 min' },
  { id: 62, slug: 'eje-intestino-cerebro-motivacion', categoria: 'Salud', fecha: '13 Octubre 2026', titulo: 'El eje Intestino-Cerebro: Por qué tu flora intestinal dicta tu motivación', resumen: 'El 90% de la serotonina se produce en el intestino. Cómo una disbiosis por mala dieta está saboteando tus ganas de ir a entrenar cada tarde.', tiempoLectura: '7 min' },
  { id: 63, slug: 'bcaa-vs-eaa-suplementacion-obsoleta', categoria: 'Suplementación', fecha: '15 Octubre 2026', titulo: 'BCAAs vs EAAs: Por qué los aminoácidos ramificados están obsoletos', resumen: 'Construir músculo solo con Leucina, Isoleucina y Valina es como hacer un muro sin cemento. Descubre por qué los Aminoácidos Esenciales (EAA) han ganado la batalla.', tiempoLectura: '5 min' },
  { id: 64, slug: 'terapia-luz-roja-mitocondrias', categoria: 'Salud', fecha: '18 Octubre 2026', titulo: 'Terapia de Luz Roja (Red Light): Hackeando la función mitocondrial', resumen: 'Paneles LED de infrarrojos en vestuarios premium. Analizamos la evidencia sobre la fotobiomodulación para acelerar la recuperación del tejido dañado.', tiempoLectura: '6 min' },
  { id: 65, slug: 'leasing-vs-compra-maquinaria-gym', categoria: 'B2B', fecha: '21 Octubre 2026', titulo: 'Leasing vs Compra: La trampa financiera de equipar un gimnasio', resumen: 'Por qué descapitalizarse comprando 300.000€ en máquinas es el error número uno de los nuevos emprendedores fitness. Ventajas fiscales del renting tecnológico.', tiempoLectura: '8 min' },
  { id: 66, slug: 'realidad-virtual-cardio-meta-quest', categoria: 'Tecnología', fecha: '24 Octubre 2026', titulo: 'Realidad Virtual en el Fitness: Quemar calorías jugando', resumen: 'Aplicaciones como Supernatural en Meta Quest están logrando que usuarios sedentarios mantengan 150 ppm durante una hora esquivando obstáculos invisibles.', tiempoLectura: '5 min' },
  { id: 67, slug: 'acondicionamiento-mma-deportes-contacto', categoria: 'Deportes', fecha: '27 Octubre 2026', titulo: 'Preparación Física en MMA: Fuerza Isométrica y Sistemas Energéticos', resumen: 'Luchar requiere una resistencia específica. Cómo los luchadores de élite alternan el sistema anaeróbico aláctico con agarres isométricos asfixiantes.', tiempoLectura: '7 min' },
  { id: 68, slug: 'zone-2-cardio-longevidad', categoria: 'Entrenamiento', fecha: '30 Octubre 2026', titulo: 'Zone 2 Cardio: El secreto antienvejecimiento de los atletas', resumen: 'Ni HIIT ni paseos suaves. Mantener el 65-75% de tu frecuencia cardíaca máxima durante 45 minutos es la clave para crear nuevas mitocondrias y limpiar residuos celulares.', tiempoLectura: '6 min' },
  { id: 69, slug: 'refeeds-vs-cheat-meals-leptina', categoria: 'Nutrición', fecha: '2 Noviembre 2026', titulo: 'Refeeds vs Cheat Meals: Reseteando la Leptina sin ganar grasa', resumen: 'Comer pizza hasta reventar no acelera tu metabolismo. El protocolo matemático de recarga de carbohidratos limpios para reactivar tu tiroides en definición.', tiempoLectura: '5 min' },
  { id: 70, slug: 'ratio-omega3-inflamacion-articular', categoria: 'Suplementación', fecha: '5 Noviembre 2026', titulo: 'El engaño del Omega-3: Por qué el ratio EPA/DHA lo es todo', resumen: 'No compres cápsulas baratas de aceite de pescado. Qué cantidad exacta de EPA necesitas para reducir el dolor articular y mejorar el perfil lipídico.', tiempoLectura: '4 min' },
  { id: 71, slug: 'cupping-puncion-seca-fisioterapia', categoria: 'Salud', fecha: '8 Noviembre 2026', titulo: 'Cupping y Punción Seca: ¿Evidencia clínica o efecto placebo?', resumen: 'Marcas circulares moradas en atletas olímpicos y agujas en puntos gatillo. Qué dice realmente la ciencia sobre estas técnicas invasivas de fisioterapia.', tiempoLectura: '6 min' },
  { id: 72, slug: 'clases-virtuales-horas-valle-gimnasios', categoria: 'B2B', fecha: '11 Noviembre 2026', titulo: 'Clases Virtuales en Pantalla Gigante: Rentabilizando las horas valle', resumen: 'Cómo los gimnasios 24/7 están usando proyectores automáticos con instructores holográficos para ofrecer ciclo indoor a las 3:00 am sin coste de personal.', tiempoLectura: '5 min' },
  { id: 73, slug: 'isometricos-tendinopatia-rehabilitacion', categoria: 'Entrenamiento', fecha: '14 Noviembre 2026', titulo: 'Isométricos Pesados: La cura contra las tendinopatías rotulianas', resumen: 'Si te duelen las rodillas, dejar de entrenar es lo peor que puedes hacer. Cómo mantener una carga estática reestructura las fibras de colágeno del tendón.', tiempoLectura: '6 min' },
  { id: 74, slug: 'corte-peso-deshidratacion-deportes-combate', categoria: 'Nutrición', fecha: '17 Noviembre 2026', titulo: 'El peligroso arte del "Weight Cutting" en deportes de combate', resumen: 'Sudaderas de plástico, baños de sal de Epsom y restricción hídrica severa. La fisiología extrema de perder 8 kg de agua en 24 horas y sus riesgos renales.', tiempoLectura: '7 min' },
  { id: 75, slug: 'zapatillas-placa-carbono-vs-minimalismo', categoria: 'Tecnología', fecha: '20 Noviembre 2026', titulo: 'Placas de Carbono vs Calzado Minimalista (Barefoot)', resumen: 'El debate de la ingeniería deportiva. Mientras los corredores de élite buscan resortes en sus suelas, la tendencia de la salud articular aboga por pies descalzos.', tiempoLectura: '6 min' },
  { id: 76, slug: 'melatonina-arquitectura-sueno', categoria: 'Suplementación', fecha: '23 Noviembre 2026', titulo: 'Cuidado con la Melatonina: Dosis altas arruinan la arquitectura del sueño', resumen: 'Tomar 5mg de melatonina para dormir te está dejando "resaca". Descubre por qué las microdosis (0.3mg) son mucho más efectivas para engañar a tu reloj circadiano.', tiempoLectura: '5 min' },
  { id: 77, slug: 'halterofilia-deportistas-no-olimpicos', categoria: 'Deportes', fecha: '26 Noviembre 2026', titulo: 'Halterofilia para mortales: ¿Merece la pena aprender Snatch y Clean?', resumen: 'La relación riesgo/beneficio de los movimientos olímpicos. Por qué la triple extensión es brutal para ganar potencia, pero su curva de aprendizaje provoca lesiones.', tiempoLectura: '6 min' },
  { id: 78, slug: 'diseno-iluminacion-selfies-gimnasios', categoria: 'B2B', fecha: '29 Noviembre 2026', titulo: 'Marketing de Espejos: El ROI de la iluminación perfecta para selfies', resumen: 'Por qué invertir 5.000€ en focos cenitales en la zona de peso libre genera más publicidad gratuita en Instagram que cualquier campaña de Facebook Ads.', tiempoLectura: '4 min' },
  { id: 79, slug: 'respiracion-nasal-entrenamiento-oxido-nitrico', categoria: 'Salud', fecha: '2 Diciembre 2026', titulo: 'Respiración Nasal entrenando: Óxido Nítrico y tolerancia al CO2', resumen: 'Por qué los atletas de élite se ponen esparadrapo en la boca. Descubre cómo respirar por la nariz vasodilata tus arterias y disminuye tus pulsaciones en esfuerzo.', tiempoLectura: '5 min' },
  { id: 80, slug: 'entrenamiento-fuerza-tercera-edad-sarcopenia', categoria: 'Entrenamiento', fecha: '5 Diciembre 2026', titulo: 'Reviertiendo la Sarcopenia: Entrenamiento pesado en la tercera edad', resumen: 'La pérdida de masa muscular por envejecimiento no es irreversible. Casos clínicos de personas de 70 años duplicando su densidad ósea a través de peso muerto.', tiempoLectura: '7 min' },
  { id: 81, slug: 'dieta-vertical-stan-efferding-digestibilidad', categoria: 'Nutrición', fecha: '8 Diciembre 2026', titulo: 'La Dieta Vertical: Sacrificando variedad por digestibilidad extrema', resumen: 'Por qué los atletas de fuerza más grandes del mundo basan su dieta exclusivamente en arroz blanco, carne roja y caldo de huesos para evitar la inflamación intestinal.', tiempoLectura: '6 min' },
  { id: 82, slug: 'cluster-sets-fuerza-sin-fatiga', categoria: 'Entrenamiento', fecha: '11 Diciembre 2026', titulo: 'Cluster Sets: Cómo levantar tu 90% RM diez veces seguidas', resumen: 'Introduce descansos de 15 segundos entre repeticiones de una misma serie. La técnica soviética para acumular volumen de fuerza máxima sin freír el sistema nervioso.', tiempoLectura: '5 min' },
  { id: 83, slug: 'turkesterona-ecdisterona-esteroides-naturales', categoria: 'Suplementación', fecha: '14 Diciembre 2026', titulo: 'Turkesterona y Ecdisterona: ¿Esteroides naturales o estafa comercial?', resumen: 'Revisamos los ensayos clínicos sobre los fitoecdisteroides (hormonas de insectos y plantas). ¿Realmente igualan los efectos anabólicos del Dianabol como afirman las marcas?', tiempoLectura: '7 min' },
  { id: 84, slug: 'microplasticos-shakers-disruptores-endocrinos', categoria: 'Salud', fecha: '17 Diciembre 2026', titulo: 'Microplásticos en tu Shaker: El enemigo oculto de tu testosterona', resumen: 'Beber suplementos diarios en plástico desgastado libera disruptores endocrinos. Cómo los ftalatos y el BPA están saboteando tu perfil hormonal y por qué pasar al acero inoxidable.', tiempoLectura: '6 min' },
  { id: 85, slug: 'software-retencion-ia-gimnasios', categoria: 'B2B', fecha: '20 Diciembre 2026', titulo: 'IA Predictiva B2B: El software que sabe cuándo un cliente se va a dar de baja', resumen: 'Sistemas que analizan los horarios de paso por el torno y la asistencia a clases para enviar una oferta de retención automática 14 días antes de que el socio cancele la cuota.', tiempoLectura: '5 min' },
  { id: 86, slug: 'ropa-inteligente-electromiografia-emg', categoria: 'Tecnología', fecha: '23 Diciembre 2026', titulo: 'Ropa Inteligente con EMG: Monitorizando la activación muscular en tiempo real', resumen: 'Camisetas de compresión que se conectan a tu móvil para decirte, mediante electromiografía, si en el press banca estás usando más los deltoides que el pectoral.', tiempoLectura: '6 min' },
  { id: 87, slug: 'natacion-densidad-osea-osteoporosis', categoria: 'Deportes', fecha: '27 Diciembre 2026', titulo: 'El lado oscuro de la natación: Gravedad cero y densidad ósea', resumen: 'Aunque es excelente para las articulaciones, nadar no estimula la creación de hueso. Por qué los nadadores de élite necesitan entrenamiento pesado para evitar la osteopenia.', tiempoLectura: '5 min' },
  { id: 88, slug: 'curl-nordico-vs-peso-muerto-rumano', categoria: 'Entrenamiento', fecha: '30 Diciembre 2026', titulo: 'Curl Nórdico vs Peso Muerto Rumano: Blindando los isquiosurales', resumen: 'Comparativa biomecánica. Por qué la contracción excéntrica aislada del nórdico previene más roturas en velocistas que las variantes de bisagra de cadera.', tiempoLectura: '6 min' },
  { id: 89, slug: 'colina-yemas-huevo-sistema-nervioso', categoria: 'Nutrición', fecha: '2 Enero 2027', titulo: 'Colina y Acetilcolina: Por qué tirar la yema del huevo arruina tu SNC', resumen: 'El mito del colesterol obsoleto. La yema contiene los precursores neurológicos esenciales para que la señal eléctrica de tu cerebro viaje rápido hasta el músculo.', tiempoLectura: '5 min' },
  { id: 90, slug: 'l-citrulina-vs-citrulina-malato', categoria: 'Suplementación', fecha: '5 Enero 2027', titulo: 'L-Citrulina vs Citrulina Malato: Leyendo la letra pequeña', resumen: 'Por qué un bote de Citrulina Malato 2:1 te da mucha menos citrulina real de la que crees, y cuál es la dosis clínica comprobada para reducir el ácido láctico.', tiempoLectura: '4 min' },
  { id: 91, slug: 'adicion-entrenamiento-dopamina-overtraining', categoria: 'Salud', fecha: '8 Enero 2027', titulo: 'Adicción al entrenamiento: Dopamina, endorfinas y el Síndrome Overtraining', resumen: 'Cuando el gimnasio pasa de ser una herramienta de salud a un parche psicológico. Los síntomas clínicos del sobreentrenamiento parasimpático crónico.', tiempoLectura: '7 min' },
  { id: 92, slug: 'boutiques-franquicia-vs-centros-propios', categoria: 'B2B', fecha: '11 Enero 2027', titulo: 'Franquicias vs Marca Propia: El dilema del inversor fitness en 2027', resumen: 'Análisis de márgenes. ¿Compensa ceder un 7% de royalties mensuales a una cadena internacional a cambio de su marketing, o es mejor crear un gimnasio boutique desde cero?', tiempoLectura: '6 min' },
  { id: 93, slug: 'chatgpt-ia-creacion-dietas', categoria: 'Tecnología', fecha: '14 Enero 2027', titulo: '¿Puede la IA crear dietas? El riesgo de los planes nutricionales por ChatGPT', resumen: 'Analizamos las dietas generadas por inteligencia artificial. Aciertan en los macros, pero fallan estrepitosamente en las patologías digestivas y el timing de absorción.', tiempoLectura: '5 min' },
  { id: 94, slug: 'ciclismo-indoor-hipertrofia-cuadriceps', categoria: 'Deportes', fecha: '17 Enero 2027', titulo: 'Ciclismo Indoor y Cuádriceps: ¿Realmente ganas masa muscular pedaleando?', resumen: 'Los ciclistas de pista tienen piernas enormes, pero tu clase de spinning no. La diferencia entre hipertrofia por resistencia pesada (vatios) y resistencia cardiovascular.', tiempoLectura: '5 min' },
  { id: 95, slug: 'entrenamiento-gemelos-genetica-fascia', categoria: 'Entrenamiento', fecha: '20 Enero 2027', titulo: 'El enigma de los gemelos: ¿Genética o falta de estiramiento fascial?', resumen: 'Hacer rebotes rápidos en la máquina de elevación de talones no sirve. Cómo usar pausas de 3 segundos en máximo estiramiento para vencer la fuerza del tendón de Aquiles.', tiempoLectura: '6 min' },
  { id: 96, slug: 'kombucha-probioticos-mitos', categoria: 'Nutrición', fecha: '23 Enero 2027', titulo: 'Kombucha y Kéfir: ¿Probióticos reales o refrescos azucarados caros?', resumen: 'Analizamos si las cepas bacterianas vivas sobreviven al ácido del estómago y si la cantidad residual de azúcar anula los beneficios para tu microbiota.', tiempoLectura: '5 min' },
  { id: 97, slug: 'zma-zinc-magnesio-suenos-lucidos', categoria: 'Suplementación', fecha: '26 Enero 2027', titulo: 'ZMA y Sueños Lúcidos: Lo que nadie te cuenta de este suplemento', resumen: 'Más allá de recuperar testosterona deficiente. Por qué la combinación de Vitamina B6 y Magnesio provoca fases REM tan intensas que los usuarios reportan sueños cinematográficos.', tiempoLectura: '4 min' },
  { id: 98, slug: 'auriculares-cancelacion-ruido-propiocepcion', categoria: 'Salud', fecha: '29 Enero 2027', titulo: 'Cancelación de ruido en el gimnasio: Riesgos para tu propiocepción', resumen: 'Entrenar aislado del mundo afecta a tu sistema vestibular (el equilibrio del oído interno). Por qué hacer sentadillas pesadas con AirPods Pro puede ser una mala idea.', tiempoLectura: '6 min' },
  { id: 99, slug: 'cross-selling-recepcion-gimnasios', categoria: 'B2B', fecha: '2 Febrero 2027', titulo: 'Cross-Selling en Recepción: Aumenta la facturación un 12% con suplementos', resumen: 'Cómo optimizar la exposición de monodosis de pre-entrenos, barritas de proteína y bebidas frías en el mostrador para exprimir las compras de impulso de tus socios.', tiempoLectura: '5 min' },
  { id: 100, slug: 'mito-core-abdominales-isometricos', categoria: 'Entrenamiento', fecha: '5 Febrero 2027', titulo: 'El mito de "hacer Core": Los crunches abdominales han muerto', resumen: 'Tu abdomen está diseñado para resistir el movimiento (anti-extensión y anti-rotación), no para flexionarse repetitivamente. La era de la rueda abdominal, el paseo del granjero y las planchas lastradas.', tiempoLectura: '6 min' },
  { id: 101, slug: 'chalecos-electroestimulacion-ems-mito', categoria: 'Tecnología', fecha: '8 Febrero 2027', titulo: 'Chalecos de Electroestimulación (EMS): ¿20 minutos equivalen a 3 horas de pesas?', resumen: 'Desmontamos el marketing de las franquicias de EMS. Cuándo la corriente galvánica es útil para rehabilitación y por qué nunca reemplazará la sobrecarga progresiva real.', tiempoLectura: '5 min' },
  { id: 102, slug: 'carbohidratos-noche-insulina-grasa', categoria: 'Nutrición', fecha: '11 Febrero 2027', titulo: 'El mito de los carbohidratos nocturnos: Por qué cenar pasta no te hace engordar', resumen: 'La insulina no tiene reloj. Explicamos cómo el reparto de carbohidratos al final del día puede incluso mejorar tu sueño profundo al facilitar la síntesis de triptófano.', tiempoLectura: '6 min' },
  { id: 103, slug: 'suplementacion-nmn-nad-longevidad', categoria: 'Suplementación', fecha: '14 Febrero 2027', titulo: 'NMN y NAD+: La píldora de la longevidad que arrasa en Silicon Valley', resumen: 'Analizamos la evidencia sobre los precursores del NAD+. ¿De verdad pueden mejorar la energía mitocondrial y revertir el envejecimiento celular celular o es marketing?', tiempoLectura: '7 min' },
  { id: 104, slug: 'rango-parcial-estiramiento-hipertrofia', categoria: 'Entrenamiento', fecha: '17 Febrero 2027', titulo: 'Repeticiones Parciales: Cuando hacer la mitad del ejercicio construye más músculo', resumen: 'La ciencia de las "Long Length Partial Reps". Por qué hacer medias repeticiones en la fase de máximo estiramiento del músculo supera al rango de movimiento completo.', tiempoLectura: '6 min' }
];

// Mapeo visual premium de colores para los badges según la categoría
const categoryStyles: Record<string, string> = {
  Entrenamiento: "bg-blue-50 text-[#2563EB] border-blue-100",
  Nutrición: "bg-purple-50 text-purple-600 border-purple-100",
  Suplementación: "bg-amber-50 text-amber-600 border-amber-100",
  Tecnología: "bg-cyan-50 text-cyan-600 border-cyan-100",
  B2B: "bg-emerald-50 text-emerald-600 border-emerald-100",
  Deportes: "bg-rose-50 text-rose-600 border-rose-100",
  Salud: "bg-indigo-50 text-indigo-600 border-indigo-100",
};

// Asignación inteligente de fotos reales asociadas semánticamente a cada noticia
export const getNewsImage = (news: typeof noticiasData[0]) => {
  const slug = news.slug.toLowerCase();
  
  // Prioridad alta: Nuevas fotos fotorrealistas generadas a medida
  if (slug.includes('vbt') || slug.includes('ia-aplicada') || slug.includes('chatgpt')) return '/images/noticias/vbt_ai_fatiga.png';
  if (slug.includes('hibrido') || slug.includes('burnout') || slug.includes('franquicia')) return '/images/noticias/entrenador_hibrido_b2b.png';
  if (slug.includes('crononutricion') || slug.includes('ventana') || slug.includes('batido')) return '/images/noticias/batido_post_entreno.png';
  if (slug.includes('salto') || slug.includes('pliometria')) return '/images/noticias/salto_vertical_pliometria.png';
  if (slug.includes('hrv') || slug.includes('variabilidad') || slug.includes('wearable') || slug.includes('anillo')) return '/images/noticias/smartwatch_hrv_sensor.png';
  if (slug.includes('ciclismo') || slug.includes('spinning') || slug.includes('vatios')) return '/images/noticias/ciclismo_indoor_vatios.png';
  if (slug.includes('sauna') || slug.includes('infrarroja') || slug.includes('calor') || slug.includes('luz-roja')) return '/images/noticias/sauna_infrarroja_glow.png';
  if (slug.includes('microplasticos') || slug.includes('shaker') || slug.includes('acero')) return '/images/noticias/shaker_acero_inoxidable.png';
  if (slug.includes('ems') || slug.includes('electroestimulacion') || slug.includes('chaleco')) return '/images/noticias/chaleco_ems_fitness.png';
  if (slug.includes('cardio') || slug.includes('remo') || slug.includes('skierg')) return '/images/noticias/remo_cardio_espacio.png';
  if (slug.includes('pistola') || slug.includes('masaje') || slug.includes('percusiva') || slug.includes('fascia')) return '/images/noticias/masaje_percusivo_pistola.png';
  if (slug.includes('vertical') || slug.includes('arroz') || slug.includes('carne')) return '/images/noticias/plato_dieta_vertical.png';

  // Coincidencias específicas previas de alta calidad
  if (slug.includes('creatina')) return '/images/suplementos/creatina.png';
  if (slug.includes('whey') || slug.includes('proteina') || slug.includes('clear')) return '/images/suplementos/whey.png';
  if (slug.includes('omega3') || slug.includes('pescado')) return '/images/suplementos/omega3.png';
  if (slug.includes('cafeina') || slug.includes('pre-entreno') || slug.includes('nootropicos')) return '/images/suplementos/cafeina.png';
  if (slug.includes('beta-alanina')) return '/images/suplementos/beta-alanina.png';
  if (slug.includes('citrulina')) return '/images/suplementos/citrulina.png';
  if (slug.includes('ashwagandha')) return '/images/suplementos/ashwagandha.png';
  if (slug.includes('vitaminad3')) return '/images/suplementos/vitaminad3.png';
  if (slug.includes('eaa') || slug.includes('bcaa')) return '/images/suplementos/eaas.png';
  if (slug.includes('keto')) return '/images/dietas/keto.png';
  if (slug.includes('ayuno')) return '/images/dietas/ayuno.png';
  if (slug.includes('volumen') || slug.includes('hipertrofia')) return '/images/dietas/volumen-limpio.png';
  if (slug.includes('definicion') || slug.includes('refeeds')) return '/images/dietas/definicion.png';
  if (slug.includes('kettlebell') || slug.includes('fuerza')) return '/images/ejercicios/kettlebells.png';
  if (slug.includes('trx') || slug.includes('calistenia')) return '/images/ejercicios/trx.png';
  if (slug.includes('sarcopenia') || slug.includes('recuperacion') || slug.includes('hielo') || slug.includes('sueno')) return '/images/suplementos/recuperacion.png';

  // Fallbacks premium rotativos garantizados para cubrir el resto del Macroblog
  switch (news.categoria) {
    case 'Nutrición':
      const nutImgs = ['/images/noticias/plato_dieta_vertical.png', '/images/noticias/batido_post_entreno.png', '/images/dietas/mediterranea.png', '/images/dietas/keto.png', '/images/dietas/ayuno.png'];
      return nutImgs[news.id % nutImgs.length];
    case 'Suplementación':
    case 'Marcas':
      const supImgs = ['/images/noticias/shaker_acero_inoxidable.png', '/images/suplementos/creatina.png', '/images/suplementos/whey.png', '/images/suplementos/omega3.png'];
      return supImgs[news.id % supImgs.length];
    case 'Entrenamiento':
    case 'Deportes':
      const entImgs = ['/images/noticias/salto_vertical_pliometria.png', '/images/noticias/ciclismo_indoor_vatios.png', '/images/ejercicios/kettlebells.png', '/images/ejercicios/trx.png'];
      return entImgs[news.id % entImgs.length];
    default:
      const genImgs = ['/images/noticias/vbt_ai_fatiga.png', '/images/noticias/entrenador_hibrido_b2b.png', '/images/noticias/smartwatch_hrv_sensor.png', '/images/noticias/sauna_infrarroja_glow.png', '/images/noticias/remo_cardio_espacio.png'];
      return genImgs[news.id % genImgs.length];
  }
};

export default function NoticiasClient() {
  // Categorías únicas extraídas de los datos
  const categories = useMemo(() => {
    const unique = Array.from(new Set(noticiasData.map((item) => item.categoria)));
    return ["Todas", ...unique];
  }, []);

  // Estado del filtro
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  // Estado de la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filtrado de noticias
  const filteredNews = useMemo(() => {
    if (selectedCategory === "Todas") return noticiasData;
    return noticiasData.filter((item) => item.categoria === selectedCategory);
  }, [selectedCategory]);

  // Cálculo de páginas
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage) || 1;

  // Reseteo de página al cambiar de categoría
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  // Elementos a mostrar en la página actual
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredNews.slice(start, start + itemsPerPage);
  }, [filteredNews, currentPage]);

  return (
    <div className="flex flex-col space-y-10 animate-fadeIn">
      {/* Cabecera descriptiva */}
      <header className="border-b border-gray-100 pb-6 text-center sm:text-left">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
          <span>Macroblog de Divulgación</span>
          <span>•</span>
          <span>Literatura Científica</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
          Noticias y Evidencia Científica
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
          Análisis de las últimas investigaciones publicadas sobre hipertrofia, nutrición deportiva, mercado B2B y tendencias globales de entrenamiento.
        </p>
      </header>

      {/* Botonera de Filtro de Categorías con scroll horizontal en móviles */}
      <div className="relative">
        <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-hide -mx-2 px-2 sm:mx-0 sm:px-0">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm transition-all whitespace-nowrap shrink-0 ${isActive
                  ? "bg-[#2563EB] text-white font-bold shadow-sm shadow-blue-500/10 scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium"
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid de Tarjetas Responsive (1 col móvil, 2 tablet, 3 o 4 desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-2">
        {currentItems.map((news) => {
          const badgeStyle =
            categoryStyles[news.categoria] || "bg-gray-50 text-gray-600 border-gray-100";
          const imgUrl = getNewsImage(news);

          return (
            <article
              key={news.id}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Contenedor visual superior con foto relacionada */}
                <Link href={`/noticias/${news.slug}`} className="block relative aspect-[16/10] w-full overflow-hidden bg-gray-50 border-b border-gray-100">
                  <img
                    src={imgUrl}
                    alt={news.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay sutil de protección para contraste */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-black uppercase tracking-wider border shadow-sm backdrop-blur-md bg-white/95 ${badgeStyle}`}>
                      {news.categoria}
                    </span>
                  </div>
                </Link>

                <div className="p-6 pb-0">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs text-gray-400 font-medium whitespace-nowrap">
                      {news.fecha}
                    </span>
                  </div>

                  {/* Título H3 explícitamente requerido */}
                  <h3 className="text-lg font-black text-[#111827] group-hover:text-[#2563EB] transition-colors leading-snug cursor-pointer line-clamp-2">
                    <Link href={`/noticias/${news.slug}`} className="focus:outline-none">
                      {news.titulo}
                    </Link>
                  </h3>

                  <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {news.resumen}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 mt-4 border-t border-gray-50 flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-gray-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                  {news.tiempoLectura}
                </span>
                <Link
                  href={`/noticias/${news.slug}`}
                  className="text-xs sm:text-sm font-bold text-[#2563EB] hover:text-blue-700 inline-flex items-center space-x-1 group-hover:underline decoration-2 underline-offset-4"
                >
                  <span>Leer análisis completo</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* Controles de Paginación */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${currentPage === 1
                ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 active:scale-95 shadow-sm"
                }`}
            >
              Anterior
            </button>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${currentPage === totalPages
                ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 active:scale-95 shadow-sm"
                }`}
            >
              Siguiente
            </button>
          </div>

          <span className="text-xs sm:text-sm font-bold text-gray-500">
            Página {currentPage} de {totalPages}
          </span>
        </div>
      )}

      {/* Estado vacío por si un filtro no tuviera resultados */}
      {currentItems.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-3xl border border-gray-100">
          <p className="text-base text-gray-500 font-medium">
            No se encontraron noticias para esta categoría.
          </p>
          <button
            onClick={() => handleCategoryChange("Todas")}
            className="mt-4 text-xs font-bold text-[#2563EB] hover:underline"
          >
            Ver todas las noticias
          </button>
        </div>
      )}
    </div>
  );
}
