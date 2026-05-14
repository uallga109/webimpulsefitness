import React from "react";

interface SchemaMarkupProps {
  type: "Product" | "ExercisePlan" | "HealthAndBeautyBusiness" | "Article" | "Review";
  data: Record<string, any>;
}

/**
 * Componente para inyectar datos estructurados (JSON-LD) de forma dinámica.
 * Úsalo en páginas de detalle (gimnasios, entrenadores, rutinas, suplementos).
 */
export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
