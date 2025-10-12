import MadLocationSocialNetworks from "@/components/common/mad-location-social-networks";
import Countdown from "../countdown";

import styles from "./hero.module.scss";
import madPrismaImg from "@/assets/images/logo_mad.svg";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img
        src={madPrismaImg}
        alt="MAD - Prisma/DSGN"
        className={styles["logo-mad-prisma"]}
      />
      <p className={styles.introduction}>
        Bienvenidos a la Muestra Anual de Portafolios 2025. Este año, PRISMA nos
        invita a descubrir cómo la luz de la creatividad se transforma en
        múltiples expresiones de diseño. Aquí convergen las ideas y talentos de
        los estudiantes de la Universidad Don Bosco, plasmados en proyectos que
        narran su evolución académica y profesional.
      </p>
      <MadLocationSocialNetworks />
      <Countdown />
    </section>
  );
}
