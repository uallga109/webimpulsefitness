import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import GeneradorClient from "@/components/rutinas/GeneradorClient";

export const metadata: Metadata = {
  title: "Generador Automático de Rutinas Inteligentes | Impulse Fitness",
  description:
    "Crea tu rutina de gimnasio o casa personalizada en segundos. Planificaciones basadas en la ciencia del volumen, frecuencia de entrenamiento y sobrecarga progresiva.",
};

export default function GeneradorRutinasPage() {
  return (
    <div className="flex flex-col space-y-12 animate-fadeIn">
      {/* Migas de pan y Cabecera */}
      <div>
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-2">
          <Link href="/rutinas" className="hover:text-[#2563EB] transition-colors">
            Rutinas
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Generador Automático</span>
        </nav>

        <header className="border-b border-gray-200 pb-6">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-black uppercase tracking-wider mb-3 inline-block">
            Ciencia Aplicada al Entrenamiento
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight">
            Generador Automático de Rutinas
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Estructura tu entrenamiento con base científica. Elige tus días de disponibilidad, tu nivel actual y tus objetivos deportivos para generar al instante una distribución óptima de series, ejercicios y volumen semanal.
          </p>
        </header>
      </div>

      {/* Componente Cliente Interactivo (Mantiene su funcionalidad en la parte superior para UX de élite) */}
      <section className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm">
        <h2 className="text-xl sm:text-2xl font-black text-[#111827] mb-6">Configura tu Plan de Entrenamiento</h2>
        <GeneradorClient />
      </section>

      {/* SECCIÓN EDUCATIVA DE ALTA DENSIDAD Y EEAT (Evita Thin Content para AdSense) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6 border-t border-gray-200">
        
        {/* Lado Izquierdo: El Gran Artículo Científico */}
        <article className="lg:col-span-8 space-y-8">
          
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
              La Ciencia detrás de la Distribución de Rutinas
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Diseñar una rutina de entrenamiento no consiste en seleccionar ejercicios al azar. Para maximizar la hipertrofia muscular y las ganancias de fuerza, la estructura debe respetar los principios de **Volumen de Entrenamiento**, **Frecuencia** y **Sobrecarga Progresiva**. 
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Dependiendo de tu disponibilidad semanal, el generador adaptará tu rutina en una de las cuatro grandes divisiones biomecánicas validadas por los meta-análisis más prestigiosos en ciencias del deporte:
            </p>
          </div>

          {/* Tarjetas informativas de splits de rutinas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs">
              <h3 className="text-lg font-bold text-[#111827]">Torso-Pierna (Upper-Lower)</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Excelente para frecuencias de 4 días semanales. Separa el estrés sistémico en el tren superior e inferior, permitiendo una gran intensidad de carga y una recuperación óptima del sistema nervioso central.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs">
              <h3 className="text-lg font-bold text-[#111827]">Empuje-Tirón-Pierna (Push-Pull-Legs)</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                La división de oro para frecuencias de 3 o 6 días. Agrupa los músculos según sus patrones de movimiento biomecánicos: empujes pectorales y tríceps; tracciones de espalda y bíceps; y la sesión aislada de piernas.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs">
              <h3 className="text-lg font-bold text-[#111827]">Rutinas de Cuerpo Completo (Fullbody)</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Ideal para principiantes o personas con disponibilidad de 2 a 3 días semanales. Estimula todos los grupos principales en cada sesión mediante ejercicios multiarticulares, maximizando la síntesis de proteínas.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs">
              <h3 className="text-lg font-bold text-[#111827]">Rutinas Divididas (Split / Weider)</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Enfocadas a atletas avanzados que requieren un volumen de series extremadamente alto por grupo muscular en una sola sesión (frecuencia 1). Permite un bombeo profundo pero exige periodos de descanso muy prolongados.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-[#111827]">
              Frecuencia 2: El Santo Grial del Atleta Natural
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              La síntesis de proteínas musculares (MPS) permanece elevada durante aproximadamente 36 a 48 horas después de una sesión de entrenamiento intensa en sujetos naturales. Si entrenas cada músculo una sola vez por semana (frecuencia 1), el músculo pasará el resto de la semana en un estado metabólico neutro o catabólico.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Dividir el mismo volumen semanal en dos sesiones (Frecuencia 2) mantiene la síntesis proteica elevada constantemente y reduce la fatiga acumulada por entrenamiento, permitiendo que cada serie se ejecute con una calidad técnica muy superior.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-[#111827]">
              La Selección de Ejercicios y su Jerarquía Biomecánica
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Para estructurar tus sesiones, nuestro algoritmo organiza los ejercicios en base a su demanda neuromuscular y perfil de tensión:
            </p>
            <ul className="list-decimal pl-5 text-base text-gray-600 space-y-2">
              <li><strong>Ejercicios Multiarticulares Primarios:</strong> Sentadillas, Press de Banca y Peso Muerto. Trabajan grandes masas musculares, involucran carga axial y demandan alta concentración. Se sitúan siempre al inicio de la sesión.</li>
              <li><strong>Ejercicios Multiarticulares Secundarios:</strong> Remos con barra, Press Militar o Zancadas. Complementan el volumen biomecánico con un menor impacto de fatiga sistémica.</li>
              <li><strong>Ejercicios de Aislamiento y Cables:</strong> Cruces de poleas, Elevaciones laterales o Curls de bíceps. Se encargan de focalizar la tensión mecánica en un músculo individual en su rango de estiramiento o acortamiento máximo.</li>
            </ul>
          </div>
        </article>

        {/* Lado Derecho: Contenido visual, enlaces de interés y Calculadoras */}
        <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
          {/* Ilustración de Planificación Fitness */}
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs">
            <img
              src="/images/herramientas/routine_blueprint.png"
              alt="Planificación y biomecánica de rutinas de entrenamiento"
              className="w-full h-auto object-cover"
            />
            <div className="p-5 bg-gray-50 border-t border-gray-100">
              <span className="text-xs font-black text-[#2563EB] uppercase block">Rutina Visual Blueprint</span>
              <p className="text-xs text-gray-500 mt-1">
                Representación gráfica de la anatomía muscular y la distribución semanal para la hipertrofia limpia.
              </p>
            </div>
          </div>

          {/* Caja de Enlaces Relacionados (Siloing SEO) */}
          <div className="bg-white rounded-3xl border border-gray-200 p-6 space-y-4 shadow-xs">
            <h3 className="text-lg font-bold text-[#111827] border-b border-gray-100 pb-3">Herramientas Recomendadas</h3>
            <div className="space-y-3">
              
              <Link
                href="/herramientas/calculadora-1rm"
                className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-blue-50 transition-colors group block"
              >
                <span className="text-xl">🏋️‍♂️</span>
                <div>
                  <span className="text-sm font-bold text-[#111827] group-hover:text-[#2563EB]">Calculadora de 1RM</span>
                  <p className="text-[10px] text-gray-400">Estima tus cargas máximas para progresar con precisión.</p>
                </div>
              </Link>

              <Link
                href="/dietas/calculadora-calorias"
                className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-blue-50 transition-colors group block"
              >
                <span className="text-xl">🥗</span>
                <div>
                  <span className="text-sm font-bold text-[#111827] group-hover:text-[#2563EB]">Gasto Energético (TDEE)</span>
                  <p className="text-[10px] text-gray-400">Calcula tus calorías de mantenimiento o superávit.</p>
                </div>
              </Link>

              <Link
                href="/dietas/calculadora-proteinas"
                className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-blue-50 transition-colors group block"
              >
                <span className="text-xl">🥩</span>
                <div>
                  <span className="text-sm font-bold text-[#111827] group-hover:text-[#2563EB]">Calculadora de Proteínas</span>
                  <p className="text-[10px] text-gray-400">Averigua los gramos de proteína óptimos para hipertrofia.</p>
                </div>
              </Link>

              <Link
                href="/herramientas/calculadora-grasa-corporal"
                className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-blue-50 transition-colors group block"
              >
                <span className="text-xl">🔍</span>
                <div>
                  <span className="text-sm font-bold text-[#111827] group-hover:text-[#2563EB]">Porcentaje de Grasa Corporal</span>
                  <p className="text-[10px] text-gray-400">Estima tu masa grasa mediante pliegues o cinta métrica.</p>
                </div>
              </Link>

            </div>
          </div>

          {/* Caja B2B de Enlace a Consultoría de Gimnasios */}
          <div className="bg-[#111827] text-white rounded-3xl p-6 space-y-4 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
            <span className="px-2 py-0.5 rounded bg-white/10 text-gray-300 text-[10px] font-bold uppercase tracking-wider">
              Área Gimnasios B2B
            </span>
            <h4 className="text-base font-bold">¿Eres dueño de un gimnasio?</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Ayudamos a centros deportivos a rentabilizar sus salas instalando software de entrenamiento y embudos de captación.
            </p>
            <Link
              href="/gimnasios/marketing"
              className="block text-center text-xs font-bold bg-[#2563EB] hover:bg-blue-600 py-2.5 rounded-xl text-white transition-all active:scale-95"
            >
              Ver Soluciones de Negocio
            </Link>
          </div>
        </aside>

      </section>
    </div>
  );
}
