/**
 * FUENTE DE VERDAD ÚNICA PARA LA PLATAFORMA
 * En un entorno de producción, estos datos vendrían de una base de datos (PostgreSQL, MongoDB, etc.)
 */

// 1. Suplementos
export const SUPPLEMENTS = [
  { slug: 'creatina', lastModified: new Date() },
  { slug: 'whey', lastModified: new Date() },
  { slug: 'cafeina', lastModified: new Date() },
  { slug: 'beta-alanina', lastModified: new Date() },
  { slug: 'citrulina', lastModified: new Date() },
  { slug: 'recuperacion', lastModified: new Date() },
  { slug: 'omega3', lastModified: new Date() },
  { slug: 'ashwagandha', lastModified: new Date() },
  { slug: 'vitaminad3', lastModified: new Date() },
  { slug: 'eaas', lastModified: new Date() },
];

// 2. Dietas
export const DIETS = [
  { slug: 'volumen-limpio', lastModified: new Date() },
  { slug: 'definicion-estricta', lastModified: new Date() },
  { slug: 'keto', lastModified: new Date() },
  { slug: 'mediterranea', lastModified: new Date() },
  { slug: 'ayuno-intermitente', lastModified: new Date() },
];

// 3. Ejercicios en Casa
export const HOME_EXERCISES = [
  { slug: 'trx', lastModified: new Date() },
  { slug: 'kettlebells', lastModified: new Date() },
  { slug: 'barra-dominadas', lastModified: new Date() },
  { slug: 'hiit-casa', lastModified: new Date() },
  { slug: 'yoga-movilidad', lastModified: new Date() },
  { slug: 'sliders', lastModified: new Date() },
  { slug: 'mochila-lastrada', lastModified: new Date() },
  { slug: 'pilates-suelo', lastModified: new Date() },
  { slug: 'miniparalelas', lastModified: new Date() },
  { slug: 'salto-comba', lastModified: new Date() },
  { slug: 'entrenamiento-isometrico', lastModified: new Date() },
  { slug: 'fitball', lastModified: new Date() },
  { slug: 'peso-corporal', lastModified: new Date() },
  { slug: 'bandas-elasticas', lastModified: new Date() },
  { slug: 'mancuernas-ajustables', lastModified: new Date() },
];

// 4. Herramientas
export const TOOLS = [
  { slug: 'calculadora-calorias', lastModified: new Date() },
  { slug: 'calculadora-imc', lastModified: new Date() },
  { slug: 'calculadora-proteinas', lastModified: new Date() },
  { slug: 'calculadora-deficit', lastModified: new Date() },
  { slug: 'calculadora-masa-muscular', lastModified: new Date() },
  { slug: 'calculadora-grasa-corporal', lastModified: new Date() },
  { slug: 'calculadora-1rm', lastModified: new Date() },
  { slug: 'calculadora-macros', lastModified: new Date() },
  { slug: 'calculadora-ritmo-running', lastModified: new Date() },
  { slug: 'calculadora-vo2-max', lastModified: new Date() },
  { slug: 'calculadora-hidratacion', lastModified: new Date() },
  { slug: 'calculadora-gasto-ciclismo', lastModified: new Date() },
];

// 5. Gimnasios (Ejemplo dinámico)
export const GYMS = [
  { slug: 'malaga-centro', lastModified: new Date() },
  { slug: 'madrid-retiro', lastModified: new Date() },
  { slug: 'barcelona-diagonal', lastModified: new Date() },
];

/**
 * Simuladores de funciones de base de datos
 */
export async function getAllSupplements() { return SUPPLEMENTS; }
export async function getAllDiets() { return DIETS; }
export async function getAllExercises() { return HOME_EXERCISES; }
export async function getAllTools() { return TOOLS; }
export async function getAllGyms() { return GYMS; }
