import { Fragment, type PropsWithChildren } from "react";
import clsx from "clsx";

import styles from "./decorations.module.scss";

export default function Decorations({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <div className={clsx(styles.decoration, styles["top-left-circle"])}></div>
      <div
        className={clsx(styles.decoration, styles["bottom-right-square"])}
      ></div>
      {children}
    </Fragment>
  );
}
