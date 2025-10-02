import type { PropsWithChildren } from "react";
import clsx from "clsx";
import { DesktopTriangle } from "./triangle";

import styles from "./decorations.module.scss";

export default function Decorations({ children }: PropsWithChildren) {
  return (
    <div className={styles["home-decorations"]}>
      <div className={clsx(styles.decoration, styles["top-left-circle"])}></div>
      <div
        className={clsx(styles.decoration, styles["bottom-right-square"])}
      ></div>
      <DesktopTriangle
        className={clsx(styles.decoration, styles["bottom-right-triangle"])}
      />
      {children}
    </div>
  );
}
