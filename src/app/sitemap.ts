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
 * GENERADOR DE SITEMAP 100% DINÁMICO
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

  const noticiasRoutes = noticiasData.map((item: { slug: string; fecha: string }) => ({
    url: `${baseUrl}/noticias/${item.slug}`,
    lastModified: parseSpanishDate(item.fecha),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
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
