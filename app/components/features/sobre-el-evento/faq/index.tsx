import { useState } from "react";
import FAQItem from "../faq-item";
import styles from "./faq.module.scss";

export default function FAQ() {
  const [currentActive, setCurrentActive] = useState<number | undefined>(0);

  const handleFAQItemClick = (i: number) =>
    setCurrentActive((prev) => (prev == i ? undefined : i));

  return (
    <div className={styles.faq}>
      <FAQItem
        title="Sobre MAD"
        active={currentActive == 0}
        onClick={() => handleFAQItemClick(0)}
      >
        <h2 className="my-2 text-2xl font-bold">Historia</h2>
        <p className="lg:text-xl">
          La Muestra Anual de Diseño (MAD) de la Universidad Don Bosco nació en
          2015 como un espacio para proyectar el talento y la visión de los
          futuros diseñadores gráficos. Con el paso de los años, ha evolucionado
          hacia escenarios más profesionales, consolidándose como una plataforma
          clave de conexión entre la formación universitaria y la industria
          creativa, donde los estudiantes presentan sus portafolios y dan el
          primer paso hacia su proyección profesional.
        </p>
        <h2 className="my-2 text-2xl font-bold">Objetivos</h2>
        <p className="lg:text-xl">
          Nuestro propósito es brindar a los estudiantes un espacio donde
          convergen creatividad, estrategia y visión. MAD tiene como objetivo
          conectar el aprendizaje académico con la práctica profesional,
          mostrando cómo el diseño transforma realidades e inspira nuevas
          oportunidades.
        </p>
        <h2 className="my-2 text-2xl font-bold">Valores</h2>
        <p className="lg:text-xl">
          MAD se sostiene en valores que impulsan la formación y el quehacer
          creativo: innovación, colaboración y responsabilidad. Cada edición
          busca inspirar a través de la diversidad de ideas y la pasión por el
          diseño, proyectando el talento joven hacia la industria.
        </p>
      </FAQItem>
      <div className="my-4 w-full rounded-full border-1 border-white p-2 text-center font-bold">
        Preguntas frecuentes
      </div>
      <div>
        {FAQS.map(({ title, content }, i) => (
          <FAQItem
            title={title}
            active={currentActive == i + 1}
            onClick={() => handleFAQItemClick(i + 1)}
          >
            <p className="text-justify lg:text-xl">{content}</p>
          </FAQItem>
        ))}
      </div>
    </div>
  );
}

const FAQS = [
  {
    title: "¿Quiénes presentarán sus portafolios en MAD 2025?",
    content:
      "Los portafolios son presentados por los estudiantes de la Licenciatura en Diseño Gráfico de la Universidad Don Bosco, quienes culminan su formación académica mostrando proyectos que reflejan creatividad, innovación y visión profesional.",
  },
];
