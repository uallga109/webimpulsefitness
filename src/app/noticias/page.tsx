import React from "react";
import type { Metadata } from "next";
import NoticiasClient from "@/components/noticias/NoticiasClient";

export const metadata: Metadata = {
  title: "Noticias, Literatura Científica y Tendencias | Impulse Fitness",
  description:
    "Análisis de las últimas investigaciones publicadas sobre hipertrofia, nutrición deportiva, mercado B2B y tendencias globales de entrenamiento.",
};

export default function NoticiasPage() {
  return <NoticiasClient />;
}
