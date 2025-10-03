import type { PropsWithChildren } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

import fondoContadorDesktop from "@/assets/images/fondo_contador_desktop.webp";
import fondoContadorTablet from "@/assets/images/fondo_contador_tablet.webp";

import styles from "./main.module.scss";

export default function Main({ children }: PropsWithChildren) {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <main className={styles.main}>
      <img
        className={styles["bg-img"]}
        src={isTablet ? fondoContadorTablet : fondoContadorDesktop}
      />
      {children}
    </main>
  );
}
