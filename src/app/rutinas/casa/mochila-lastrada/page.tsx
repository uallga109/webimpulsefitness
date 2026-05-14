import React from "react";
import type { Metadata } from "next";
import ExerciseDetailLayout from "@/components/rutinas/ExerciseDetailLayout";

export const metadata: Metadata = {
  title: "Entrenamiento con Mochila Lastrada | Impulse Fitness",
  description: "Sobrecarga progresiva a coste cero. Cómo usar una mochila para añadir peso a tus sentadillas, flexiones y remos en casa.",
};

export default function MochilaLastradaPage() {
  return (
    <ExerciseDetailLayout 
      title="Mochila Lastrada"
      subtitle="Sobrecarga progresiva improvisada y a coste cero para ganar masa muscular."
      category="Sin Material / Fuerza"
      muscles={{
        primary: "Piernas (Sentadillas) o Espalda/Pecho (Remos/Flexiones).",
        secondary: "Core estabilizador por el cambio de centro de gravedad."
      }}
      material={[
        "Mochila resistente de tirantes anchos",
        "Lastre: Libros, botellas de agua o paquetes de legumbres"
      ]}
      keyExercise={{
        name: "Sentadilla Frontal con Mochila",
        steps: [
          "Carga la mochila y póntela por delante, apoyada en el pecho.",
          "Separa los pies a la anchura de los hombros.",
          "Desciende llevando la cadera atrás y abajo (torso erguido).",
          "Baja hasta que tus muslos rompan el paralelo del suelo.",
          "Empuja el suelo con fuerza para volver arriba."
        ]
      }}
      benefits={[
        "Accesibilidad máxima: Entrena hipertrofia sin invertir dinero.",
        "Ajuste micro-progresivo: Sube el peso de gramo en gramo.",
        "Versatilidad: Útil para casi cualquier ejercicio básico."
      ]}
      commonErrors={[
        "No ajustar bien los tirantes (el peso no debe balancear).",
        "Usar objetos con picos que puedan clavarse o dañar la mochila.",
        "Comprometer la técnica de espalda por exceso de peso."
      ]}
    />
  );
}
