import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

import Button from "@/components/common/button";
import HamburgerIconMenu from "./hamburger-menu-icon";
import useMobileNavbar from "@/hooks/use-mobile-navbar";
import useNavbarLinks from "@/hooks/use-navbar-links";

import styles from "./header.module.scss";
import logoMadSolo from "@/assets/images/logo_mad_solo.svg";

export default function Header() {
  const { opened: menuOpened, toggle } = useMobileNavbar();
  const navLinks = useNavbarLinks();
  const { pathname } = useLocation();
  const [activeLinkPosition, setActiveLinkPosition] =
    useState(findCurrentPathIndex);

  useEffect(() => {
    setActiveLinkPosition(findCurrentPathIndex());
  }, [pathname]);

  function findCurrentPathIndex() {
    return navLinks.findIndex((nl) => nl.href == pathname);
  }

  return (
    <header className={styles.header}>
      <HamburgerIconMenu active={menuOpened} onClick={toggle} />
      <img src={logoMadSolo} alt="MAD" className={styles["logo-mad"]} />
      <nav className={styles.nav}>
        <ul className={styles["nav-list"]}>
          <div
            className={styles["nav-selector"]}
            style={{ left: `${9 * activeLinkPosition}rem` }}
          ></div>
          {navLinks.map(({ text, href }) => (
            <li key={href} className={styles["nav-list-item"]}>
              <Link to={href} className={styles["nav-list-item-a"]}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button
        href="/portafolios"
        sx={{
          ml: "auto",
          py: {
            lg: "0",
          },
          height: "100%",
        }}
      >
        Portafolios
      </Button>
    </header>
  );
}
