import clsx from "clsx";
import { Link, matchPath, useLocation } from "react-router";

import InstagramIcon from "@/components/icons/instagram";
import useMobileNavbar from "@/hooks/use-mobile-navbar";
import useNavbarLinks from "@/hooks/use-navbar-links";
import FacebookIcon from "./icons/facebook";
import TiktokIcon from "./icons/tiktok";

import styles from "./mobile-navbar.module.scss";

export default function MobileNavbar() {
  const navLinks = useNavbarLinks();
  const { opened, close } = useMobileNavbar();
  const location = useLocation();

  const isCurrentPathActive = (desiredPath: string) => {
    const { pathname } = location;
    return !!matchPath(pathname, desiredPath);
  };

  return (
    <nav
      className={clsx(styles["mobile-navbar"], {
        [`${styles.show}`]: opened,
      })}
    >
      <ul className={styles.menu}>
        {navLinks.map(({ text, href }) => (
          <li
            key={href}
            className={clsx(styles["menu-item"], {
              [`${styles.active}`]: isCurrentPathActive(href),
            })}
            onClick={close}
          >
            <Link to={href}>{text}</Link>
          </li>
        ))}
      </ul>
      <div className={styles.phrase}>
        <span>Ilumina.</span>{" "}
        <span className="border-b-[1px] border-b-white pb-4">Crea.</span>{" "}
        <span>Inspira.</span>
      </div>
      <div className={styles["social-networks"]}>
        {socialNetworks.map(({ text, icon: I, href }) => (
          <a key={href} href={href} target="_blank">
            <I />
            <span>{text}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

const socialNetworks = [
  {
    text: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/portafoliodg.udb?igsh=MThvamZiNXRoejVlbg==",
  },
  {
    text: "Facebook",
    icon: FacebookIcon,
    href: "https://www.facebook.com/share/17CHiE4NwX/",
  },
  {
    text: "Tik Tok",
    icon: TiktokIcon,
    href: "https://vm.tiktok.com/ZMHWnh9MNDFfT-fZJC1/",
  },
];
