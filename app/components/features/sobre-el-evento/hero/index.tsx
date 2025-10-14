import styles from "./hero.module.scss";
import prismaImg from "@/assets/images/prisma.svg";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <img src={prismaImg} alt="Prisma" />
      <p className={styles.introduction}>
        MAD 2025 se inspira en el prisma como símbolo de transformación y
        diversidad. Así como la luz se descompone en múltiples colores, los
        estudiantes de Diseño Gráfico de la UDB proyectan su talento en
        distintas áreas creativas, convergiendo en un universo visual que
        refleja innovación, identidad y nuevas perspectivas para la industria.
      </p>
    </div>
  );
}
