import type { PropsWithChildren } from "react";

import styles from "./shapes-container.module.scss";
import bg from "@/assets/images/bg-perfiles-homepage.svg";

export default function ShapesContainer({ children }: ShapesContainerProps) {
  return (
    <div className={styles["shapes-container"]}>
      <img src={bg} alt="Bg" className={styles["bg-img"]} />
      {children}
    </div>
  );
}

type ShapesContainerProps = PropsWithChildren;
