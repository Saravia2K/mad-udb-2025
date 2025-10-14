import styles from "./description.module.scss";
import PATROCINADORES from "@/assets/json/sponsorships.json";
import Shape from "../shape";
import InstagramIcon from "@/components/icons/instagram";
import type { ElementType } from "react";
import FacebookIcon from "@/components/icons/facebook";
import TiktokIcon from "@/components/icons/tiktok";

export default function Description() {
  return (
    <div className={styles.description}>
      <div className={styles.introduction}>
        <h1>Patrocinadores MAD 2025</h1>
        <p>
          PRISMA MAD 2025 es posible gracias al apoyo de instituciones y
          empresas que creen en el poder del diseño como motor de cambio. Su
          confianza y compromiso fortalecen este espacio de encuentro entre
          estudiantes y la industria creativa, impulsando nuevas oportunidades
          para el talento emergente. A todos nuestros patrocinadores, gracias
          por ser parte de esta experiencia que proyecta la creatividad hacia el
          futuro.
        </p>
      </div>
      <div className={styles["sponshorships-list"]}>
        {PATROCINADORES.map((p) => {
          const { imageSettings } = p;

          return (
            <div key={p.name} className={styles.sponshorship}>
              <a href={p.web} target="_blank">
                <Shape
                  imageUrl={`/images/patrocinadores/${p.img}`}
                  imageWidth={imageSettings?.width ?? undefined}
                  imageHeight={imageSettings?.height ?? undefined}
                  imageX={imageSettings?.x}
                  imageY={imageSettings?.y}
                />
              </a>
              <h2>{p.name}</h2>
              <p>{p.description}</p>
              <div className="mt-4 mb-4 grid grid-cols-2 gap-4 lg:grid-cols-3">
                <Pill
                  icon={InstagramIcon}
                  text="Instagram"
                  link={p.instagram}
                />
                <Pill icon={FacebookIcon} text="Facebook" link={p.facebook} />
                <Pill icon={TiktokIcon} text="TikTok" link={p.tiktok} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

type PillProps = { icon: ElementType; text: string; link: string };
const Pill = ({ icon: I, text, link }: PillProps) => (
  <a className={styles.pill} href={link} target="_blank">
    <I />
    <span>{text}</span>
  </a>
);
