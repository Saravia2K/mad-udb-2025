import { useMemo } from "react";
import { Link, useLocation } from "react-router";

import Button from "@/components/common/button";
import useMobileNavbar from "@/hooks/use-mobile-navbar";
import useNavbarLinks from "@/hooks/use-navbar-links";
import HamburgerIconMenu from "./hamburger-menu-icon";

import styles from "./header.module.scss";
import logoMadSolo from "@/assets/images/logo_mad_solo.svg";

export default function Header() {
  const { opened: menuOpened, toggle } = useMobileNavbar();
  const navLinks = useNavbarLinks();
  const { pathname } = useLocation();
  const activeLinkPosition = useMemo(() => {
    if (pathname === "/") return 0;

    const idx = navLinks.findIndex((nl) => {
      if (nl.href === "/") return false; // root handled above
      return (
        pathname === nl.href ||
        pathname.startsWith(`${nl.href}/`) ||
        pathname.startsWith(`${nl.href}?`) ||
        pathname.startsWith(nl.href)
      );
    });

    return idx;
  }, [pathname]);

  return (
    <header className={styles.header}>
      <HamburgerIconMenu active={menuOpened} onClick={toggle} />
      <Link to="/" className={styles["logo-mad"]}>
        <img src={logoMadSolo} alt="MAD" className="h-full" />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles["nav-list"]}>
          <div
            className={styles["nav-selector"]}
            style={{
              left: `${9 * activeLinkPosition}rem`,
              display: activeLinkPosition >= 0 ? "block" : "none",
            }}
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
          fontSize: "1rem",
        }}
      >
        Portafolios
      </Button>
    </header>
  );
}
