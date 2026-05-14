import { MetadataRoute } from 'next'
import { 
  getAllSupplements, 
  getAllDiets, 
  getAllExercises, 
  getAllTools, 
  getAllGyms 
} from '@/lib/data'

/**
 * GENERADOR DE SITEMAP 100% DINÁMICO
 * Este archivo se ejecuta de forma asíncrona y consulta directamente 
 * nuestra "base de datos" para generar las URLs.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://impulsefitnessmarketing.com'

  // 1. Rutas Estáticas Manuales
  const staticPaths = [
    '',
    '/rutinas',
    '/rutinas/casa',
    '/dietas',
    '/suplementos',
    '/herramientas',
    '/gyms',
    '/marcas',
    '/noticias',
    '/aviso-legal',
    '/politica-de-privacidad',
    '/politica-de-cookies'
  ]

  const staticRoutes = staticPaths.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // 2. Rutas Dinámicas desde la "Base de Datos"
  
  // Consultas en paralelo para máxima eficiencia
  const [supplements, diets, exercises, tools, gyms] = await Promise.all([
    getAllSupplements(),
    getAllDiets(),
    getAllExercises(),
    getAllTools(),
    getAllGyms()
  ]);

  const supplementRoutes = supplements.map((item) => ({
    url: `${baseUrl}/suplementos/${item.slug}`,
    lastModified: item.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const dietRoutes = diets.map((item) => ({
    url: `${baseUrl}/dietas/${item.slug}`,
    lastModified: item.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const exerciseRoutes = exercises.map((item) => ({
    url: `${baseUrl}/rutinas/casa/${item.slug}`,
    lastModified: item.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const toolRoutes = tools.map((item) => ({
    url: `${baseUrl}/herramientas/${item.slug}`,
    lastModified: item.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  const gymRoutes = gyms.map((item) => ({
    url: `${baseUrl}/gyms/${item.slug}`,
    lastModified: item.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticRoutes,
    ...supplementRoutes,
    ...dietRoutes,
    ...exerciseRoutes,
    ...toolRoutes,
    ...gymRoutes,
  ]
}
