import { MetadataRoute } from 'next'
import {
  getAllSupplements,
  getAllDiets,
  getAllExercises,
  getAllTools,
  getAllGyms
} from '@/lib/data'

import { noticiasData } from '@/data/noticiasData'

/**
 * GENERADOR DE SITEMAP 100% DINÁMICO Y COMPLETO
 */

// Helper para parsear fechas en español (Ej: "12 Mayo 2026")
function parseSpanishDate(dateStr: string): Date {
  const months: { [key: string]: number } = {
    enero: 0, febrero: 1, marzo: 2, abril: 3, mayo: 4, junio: 5,
    julio: 6, agosto: 7, septiembre: 8, octubre: 9, noviembre: 10, diciembre: 11
  };
  
  try {
    const parts = dateStr.toLowerCase().split(' ');
    if (parts.length === 3) {
      const day = parseInt(parts[0]);
      const month = months[parts[1]];
      const year = parseInt(parts[2]);
      
      if (!isNaN(day) && month !== undefined && !isNaN(year)) {
        const date = new Date(year, month, day);
        if (!isNaN(date.getTime())) return date;
      }
    }
  } catch (e) {
    console.error('Error parsing date:', dateStr);
  }
  
  return new Date(); // Fallback a fecha actual
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://impulsefitnessmarketing.com'

  // 1. Rutas Estáticas Manuales
  const staticPaths = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    
    // Hubs Principales
    { path: '/rutinas', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/rutinas/casa', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/rutinas/gimnasio', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/rutinas/generador', priority: 0.8, changeFrequency: 'weekly' as const },
    
    { path: '/dietas', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/suplementos', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/herramientas', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/marcas', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/noticias', priority: 0.8, changeFrequency: 'weekly' as const },
    
    // Rutas Estáticas de Deportes y Eventos
    { path: '/deportes', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/eventos', priority: 0.7, changeFrequency: 'weekly' as const },

    // Rutas Estáticas de Calculadoras Duplicadas en /dietas (Silado SEO)
    { path: '/dietas/calculadora-calorias', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/dietas/calculadora-proteinas', priority: 0.7, changeFrequency: 'monthly' as const },

    // Rutas de Gimnasio Estáticas por Grupo Muscular
    { path: '/rutinas/gimnasio/brazos', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/rutinas/gimnasio/core', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/rutinas/gimnasio/espalda', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/rutinas/gimnasio/hombro', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/rutinas/gimnasio/pectoral', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/rutinas/gimnasio/pierna', priority: 0.7, changeFrequency: 'monthly' as const },

    // Marcas de Élite Individuales (Manuales para asegurar indexación perfecta)
    { path: '/marcas/eleiko-sport', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/marcas/rogue-fitness', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/marcas/hsn-labs', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/marcas/technogym', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/marcas/sbd-apparel', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/marcas/gymshark', priority: 0.7, changeFrequency: 'monthly' as const },

    // Hubs de Gimnasios y Marketing Local
    { path: '/gimnasios', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/gimnasios/marketing', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/gimnasios/marketing/captacion', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/gimnasios/marketing/fidelizacion', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/gimnasios/marketing/rentabilidad', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/gimnasios/marketing/seo-local', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/gimnasios/marketing/calculadora-roi', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/gimnasios/marketing/plantillas-copywriting', priority: 0.7, changeFrequency: 'monthly' as const },

    // Hubs de Entrenadores y Marketing Digital
    { path: '/entrenadores', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/entrenadores/marketing', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/entrenadores/marketing/automatizacion', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/entrenadores/marketing/confianza', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/entrenadores/marketing/escalabilidad', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/entrenadores/marketing/visibilidad', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/entrenadores/marketing/calculadora-tarifas', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/entrenadores/marketing/playbook-adquisicion', priority: 0.7, changeFrequency: 'monthly' as const },

    // Corporativo y Legales
    { path: '/sobre-nosotros', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/aviso-legal', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/politica-de-privacidad', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/politica-de-cookies', priority: 0.3, changeFrequency: 'yearly' as const }
  ]

  const staticRoutes = staticPaths.map((item) => ({
    url: `${baseUrl}${item.path}`,
    lastModified: new Date(),
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }))

  // 2. Rutas Dinámicas desde la "Base de Datos"
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
    priority: 0.7,
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
    priority: 0.7,
  }))

  const toolRoutes = tools
    .filter((item) => item.slug !== 'calculadora-calorias' && item.slug !== 'calculadora-proteinas')
    .map((item) => ({
      url: `${baseUrl}/herramientas/${item.slug}`,
      lastModified: item.lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

  // CORREGIDO: Ruta correcta es /gimnasios/ en lugar de /gyms/
  const gymRoutes = gyms.map((item) => ({
    url: `${baseUrl}/gimnasios/${item.slug}`,
    lastModified: item.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const noticiasRoutes = noticiasData.map((item: { slug: string; fecha: string }) => ({
    url: `${baseUrl}/noticias/${item.slug}`,
    lastModified: parseSpanishDate(item.fecha),
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
    ...noticiasRoutes,
  ]
}
