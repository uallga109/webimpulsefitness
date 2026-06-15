import React from "react";
import type { Metadata } from "next";
import SupplementDetailLayout from "@/components/suplementos/SupplementDetailLayout";

export const metadata: Metadata = {
  title: "Aminoácidos Esenciales (EAAs): Beneficios, BCAAs vs EAAs y Dosis",
  description: "Descubre por qué los aminoácidos esenciales (EAAs) son superiores a los BCAAs para la síntesis proteica. Guía sobre dosis, intra-entreno y recuperación muscular.",
};

export default function EAAsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Aminoácidos Esenciales (EAAs)",
    "description": "El conjunto de los 9 aminoácidos fundamentales que el cuerpo no puede sintetizar por sí mismo, clave para encender y mantener la síntesis proteica muscular.",
    "brand": {
      "@type": "Brand",
      "name": "Impulse Fitness"
    },
    "category": "Suplementos Deportivos",
    "image": "https://impulsefitnessmarketing.com/images/suplementos/eaas.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "reviewCount": "95"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SupplementDetailLayout 
        slug="eaas"
        title="Aminoácidos Esenciales (EAAs)"
        subtitle="Los verdaderos bloques de construcción muscular. Aporta los 9 aminoácidos esenciales en su forma libre, estimulando el anabolismo de forma inmediata sin sobrecargar tu sistema digestivo."
        image="/images/suplementos/eaas.png"
        evidence="Evidencia: Grado B (Sólida)"
        objective="Objetivo: Anticatabolismo & Síntesis Proteica"
        whatIs="Los Aminoácidos Esenciales (EAAs por sus siglas en inglés) son un grupo de 9 aminoácidos (Leucina, Isoleucina, Valine, Lisina, Treonina, Fenilalanina, Metionina, Histidina y Triptófano) que el cuerpo humano es incapaz de sintetizar por sí mismo de manera endógena a partir de otros compuestos, lo que obliga a su ingesta dietética directa. Se presentan en forma libre, lo que significa que no poseen enlaces peptídicos que requieran digestión enzimática gástrica, absorbiéndose en el torrente sanguíneo de forma casi instantánea."
        benefits={[
          "Proporciona de manera íntegra todos los sustratos necesarios para completar la síntesis proteica muscular sin depender del catabolismo de otros tejidos.",
          "Protege la masa muscular frente a la degradación proteolítica (anticatabolismo) durante sesiones de entrenamiento de alta intensidad o en ayunas.",
          "Estimula fuertemente la vía de crecimiento mTOR gracias a su aporte preciso de BCAAs, combinados con los otros 6 bloques estructurales obligatorios.",
          "Ofrece una digestión ultra ligera con residuo nulo, siendo ideal para consumirse intra-entrenamiento sin desviar el flujo de sangre al tracto digestivo."
        ]}
        protocol={{
          dosing: "10 a 15 gramos de EAAs en polvo disueltos en agua.",
          timing: "Principalmente intra-entrenamiento (durante la sesión) o inmediatamente antes de empezar a entrenar.",
          notes: "Especialmente recomendados para atletas que entrenan en ayunas, realizan sesiones dobles, o se encuentran en fases avanzadas de definición donde las calorías totales son extremadamente bajas."
        }}
        myths={[
          "Mito: 'Los BCAAs (aminoácidos ramificados) son mejores que los EAAs'. Totalmente falso. Los BCAAs solo aportan 3 de los 9 aminoácidos necesarios (Leucina, Isoleucina y Valina). La ciencia demuestra que aunque la Leucina es el 'interruptor' que enciende la síntesis proteica, si no dispones de los otros 6 bloques de construcción esenciales (EAAs), la célula muscular no podrá fabricar nueva proteína e incluso recurrirá al catabolismo interno para obtenerlos.",
          "Mito: 'Si ya tomas batidos de Whey, necesitas tomar EAAs de forma paralela'. Ineficiente. La proteína de suero (Whey) ya es una proteína completa que contiene de forma natural un porcentaje elevadísimo de EAAs (aproximadamente un 45-50%). Tomar EAAs junto al batido es redundante; su utilidad real reside en momentos donde buscas aminoácidos en forma libre sin digestión, como intra-entrenamiento.",
          "Mito: 'Los EAAs rompen el ayuno intermitente'. Sí, lo rompen. Al ser aminoácidos libres de rápida absorción, estimulan la secreción de insulina (efecto insulinogénico) y aportan calorías metabólicas (~4 kcal por gramo), suspendiendo temporalmente el estado de ayuno fisiológico profundo y la autofagia intensa."
        ]}
        category="Mantenimiento"
        science={{
          research: "Estudios fisiológicos de cinética de aminoácidos demuestran que la ingesta de aminoácidos esenciales libres durante el ejercicio eleva la concentración plasmática de aminoácidos hiper-rápidamente, lo que atenúa la respuesta de degradación muscular (MPS vs MPB) inducida por el estrés mecánico agudo y optimiza el balance neto de nitrógeno de manera sustancial.",
          keyPoints: [
            "Absorción Sin Digestión: Al no requerir degradación de péptidos en el estómago, se absorben en el duodeno en menos de 15 minutos.",
            "Superioridad contra BCAAs: Los BCAAs solos no pueden sostener la síntesis proteica; los EAAs sí contienen el perfil anabólico estructural completo.",
            "Umbral mTOR: Activa los sensores celulares de aminoácidos para indicar al cuerpo que es seguro reconstruir tejido.",
            "Eficiencia en Ayunas: Permite entrenar con alta intensidad limitando drásticamente el catabolismo proteico estructural."
          ]
        }}
        faqs={[
          {
            question: "¿Por qué los EAAs son mejores que los BCAAs tradicionales?",
            answer: "Los BCAAs (L-leucina, L-isoleucina y L-valina) solo activan el mecanismo de inicio de síntesis de proteínas. Sin embargo, para crear tejido nuevo el cuerpo necesita 'ladrillos'. Si no tienes los 9 aminoácidos esenciales completos, el proceso se detiene. Los EAAs aportan la fórmula completa de 9 bloques, lo que evita que el músculo deba canibalizarse a sí mismo para completar la síntesis proteica."
          },
          {
            question: "¿Es mejor tomar EAAs o Proteína Whey?",
            answer: "Para la mayoría de situaciones cotidianas, la proteína Whey es preferible por su relación calidad-precio y porque ya contiene todos los EAAs de forma natural. Sin embargo, los EAAs en polvo son superiores para consumirse *durante* el entrenamiento (intra-entreno) o justo antes, ya que su absorción no requiere digestión previa, evitando que la sangre se desvíe al estómago y previniendo molestias estomacales."
          },
          {
            question: "¿Los EAAs son útiles en fases de pérdida de grasa o definición?",
            answer: "Sí, son una herramienta de preservación excepcional. En fases de déficit calórico estricto, el riesgo de perder masa muscular (catabolismo) se dispara de forma notable. Suplementar la sesión con EAAs intra-entrenamiento asegura que el cuerpo tenga un suministro constante de aminoácidos esenciales en sangre, protegiendo las miofibrillas de la descomposición sin añadir apenas calorías."
          },
          {
            question: "¿Pueden consumirlos personas vegetarianas o veganas?",
            answer: "Sí, de hecho, son especialmente beneficiosos para este sector. La mayoría de los suplementos de EAAs modernos de alta calidad se obtienen mediante procesos de fermentación bacteriana vegetal y son 100% aptos para veganos, ayudando a complementar los perfiles de aminoácidos de las proteínas vegetales que suelen ser deficientes en lisina o metionina."
          }
        ]}
      />
    </>
  );
}
