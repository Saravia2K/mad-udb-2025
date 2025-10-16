import clsx from "clsx";
import {
  faBehance,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Profile } from "@/lib/types";

import styles from "./social-networks.module.scss";

export default function SocialNetworks({ profile }: { profile: Profile }) {
  const { behance, linkedin, email, instagram } = profile;

  const networks: { icon: any; url?: string }[] = [
    { icon: faBehance, url: behance },
    { icon: faLinkedin, url: linkedin },
    { icon: faInstagram, url: instagram },
  ];

  return (
    <div className={styles["social-networks"]}>
      {networks
        .filter((n) => n.url)
        .map((n, i) => (
          <a
            key={i}
            href={n.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.network}
          >
            <FontAwesomeIcon icon={n.icon} />
          </a>
        ))}
      {email && (
        <a
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(styles.network, styles.email)}
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="ml-2">{email}</span>
        </a>
      )}
    </div>
  );
}
