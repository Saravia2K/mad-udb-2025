import { Fragment, type PropsWithChildren } from "react";
import clsx from "clsx";

import styles from "./decorations.module.scss";

export default function Decorations({ children }: PropsWithChildren) {
  return (
    <div className="relative size-full overflow-hidden">
      <div
        className={clsx(
          styles.decoration,
          styles["desktop-top-left-square"],
          "max-lg:hidden",
        )}
      ></div>
      <div
        className={clsx(styles.decoration, styles["shared-top-left-circle"])}
      ></div>

      <div
        className={clsx(
          styles.decoration,
          styles["shared-bottom-right-square"],
        )}
      ></div>
      <div
        className={clsx(
          styles.decoration,
          styles["desktop-bottom-right-circle"],
          "max-lg:hidden",
        )}
      ></div>
      {children}
    </div>
  );
}
