import React from "react";
import SchemaMarkup from "@/components/seo/SchemaMarkup";

interface GymPageProps {
  params: {
    slug: string;
  };
}

// Ejemplo de cómo se vería una página dinámica de gimnasio
export default async function GymDetailPage({ params }: GymPageProps) {
  const { slug } = params;

  // En un caso real, aquí harías fetch a tu base de datos
  // const gym = await getGymBySlug(slug);
  
  // Datos mock para el ejemplo
  const gym = {
    name: "Pure Gym Málaga",
    description: "El mejor centro de entrenamiento de fuerza en el corazón de Málaga.",
    address: "Calle Fitness 123, Málaga",
    rating: 4.8,
    reviews: 124,
    image: "https://impulsefitnessmarketing.com/images/gyms/malaga.jpg"
  };

  return (
    <>
      {/* 🚀 Inyección DINÁMICA del Schema para Google */}
      <SchemaMarkup 
        type="HealthAndBeautyBusiness"
        data={{
          name: gym.name,
          description: gym.description,
          address: {
            "@type": "PostalAddress",
            "streetAddress": gym.address,
            "addressLocality": "Málaga",
            "addressRegion": "Andalucía",
            "postalCode": "29001",
            "addressCountry": "ES"
          },
          image: gym.image,
          aggregateRating: {
            "@type": "AggregateRating",
            "ratingValue": gym.rating,
            "reviewCount": gym.reviews
          }
        }}
      />

      <div className="py-12">
        <h1 className="text-5xl font-black text-gray-900 mb-4">{gym.name}</h1>
        <p className="text-xl text-gray-600">{gym.description}</p>
        {/* Aquí iría el resto del diseño premium de la ficha */}
      </div>
    </>
  );
}
