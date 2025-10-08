import clsx from "clsx";

import SocialNetworkButton from "@/components/common/social-network-button";
import FacebookIcon from "@/components/icons/facebook";
import InstagramIcon from "@/components/icons/instagram";
import LinkedInIcon from "@/components/icons/linked-in";
import XIcon from "@/components/icons/x";
import WebIcon from "@/components/icons/web";
import YouTubeIcon from "@/components/icons/youtube";
import Button from "@/components/common/button";

import styles from "./footer.module.scss";
import udbLogotipo from "@/assets/images/udb-logotipo.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.information}>
        <div className={styles.institution}>
          <div className={styles["udb-logo-container"]}>
            <img src={udbLogotipo} alt="Universidad Don Bosco" />
          </div>
          <p>
            Somos una institución de Educación Superior con carisma salesiano
            dedicada a la formación integral de la persona humana, por medio de
            la investigación, la ciencia, la cultura, la tecnología, la
            innovación y el compromiso con la comunidad para la construcción de
            una sociedad libre, justa y solidaria.
          </p>
          <div className={styles["social-networks"]}>
            {socialNetworks.map(({ icon: I, link }, i) => (
              <SocialNetworkButton key={i} icon={<I />} href={link} />
            ))}
          </div>
        </div>
        <div className={styles["contact-info"]}>
          <div className={styles["contact-data-container"]}>
            {Object.entries(contactData).map(([name, items], i) => (
              <div key={i} className={styles["contact-row"]}>
                <h3 className={styles["contact-row-name"]}>{name}</h3>
                <ul className={styles["contact-list"]}>
                  {items.map((item, j) => (
                    <li
                      key={j}
                      className={clsx({
                        [`${styles.link}`]: item.link,
                      })}
                    >
                      {item.link ? (
                        <a href={item.link} target="_blank">
                          {item.text}
                        </a>
                      ) : (
                        item.text
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="md:px-[3.5rem]">
            <Button
              sx={{
                mt: "3rem",
                width: "100%",
              }}
              href="/portafolios"
            >
              Ver portafolios
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        MAD 2025. Todos los derechos reservados
      </div>
    </footer>
  );
}

type ContactDataKeys = "Direcciones" | "Contactos" | "Correos";
type ContactData = {
  [K in ContactDataKeys]: { text: string; link?: string }[];
};
const contactData: ContactData = {
  Direcciones: [
    { text: "Soyapango", link: "sexo" },
    { text: "Antiguo Cuscatlán", link: "sexo" },
    { text: "UDB Virtual", link: "sexo" },
  ],
  Contactos: [{ text: "2251-8200" }, { text: "2527-2314" }],
  Correos: [{ text: "diseno@udb.edu.sv" }, { text: "udbvirtual@udb.edu.sv" }],
};

const socialNetworks = [
  { icon: FacebookIcon, link: "" },
  { icon: XIcon, link: "" },
  { icon: InstagramIcon, link: "" },
  { icon: LinkedInIcon, link: "" },
  { icon: YouTubeIcon, link: "" },
  { icon: WebIcon, link: "" },
];
