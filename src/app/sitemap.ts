import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://impulsefitnessmarketing.com'

  // 1. Rutas Estáticas Principales
  const staticRoutes = [
    '',
    '/rutinas',
    '/rutinas/casa',
    '/rutinas/gimnasio',
    '/rutinas/generador',
    '/dietas',
    '/suplementos',
    '/herramientas',
    '/gyms',
    '/marcas',
    '/noticias',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // 2. Rutas Dinámicas (Ejemplos de mapeo de lo que ya hemos construido)
  
  // Suplementos
  const supplementSlugs = [
    'creatina', 'whey', 'cafeina', 'beta-alanina', 'citrulina', 
    'recuperacion', 'omega3', 'ashwagandha', 'vitaminad3', 'eaas'
  ]
  const supplementRoutes = supplementSlugs.map((slug) => ({
    url: `${baseUrl}/suplementos/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Dietas
  const dietSlugs = [
    'volumen-limpio', 'definicion-estricta', 'keto', 'mediterranea', 'ayuno-intermitente'
  ]
  const dietRoutes = dietSlugs.map((slug) => ({
    url: `${baseUrl}/dietas/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Ejercicios en Casa
  const exerciseSlugs = [
    'trx', 'kettlebells', 'barra-dominadas', 'hiit-casa', 'yoga-movilidad', 
    'sliders', 'mochila-lastrada', 'pilates-suelo', 'miniparalelas', 
    'salto-comba', 'entrenamiento-isometrico', 'fitball', 
    'peso-corporal', 'bandas-elasticas', 'mancuernas-ajustables'
  ]
  const exerciseRoutes = exerciseSlugs.map((slug) => ({
    url: `${baseUrl}/rutinas/casa/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Herramientas / Calculadoras
  const toolSlugs = [
    'calculadora-calorias', 'calculadora-imc', 'calculadora-proteinas',
    'calculadora-deficit', 'calculadora-masa-muscular', 'calculadora-grasa-corporal',
    'calculadora-1rm', 'calculadora-macros', 'calculadora-ritmo-running',
    'calculadora-vo2-max', 'calculadora-hidratacion', 'calculadora-gasto-ciclismo'
  ]
  const toolRoutes = toolSlugs.map((slug) => ({
    url: `${baseUrl}/herramientas/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [
    ...staticRoutes,
    ...supplementRoutes,
    ...dietRoutes,
    ...exerciseRoutes,
    ...toolRoutes,
  ]
}
