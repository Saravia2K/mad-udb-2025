import type { PropsWithChildren } from "react";
import Decorations from "../decorations";

import styles from "./main.module.scss";

export default function Main({ children }: PropsWithChildren) {
  return (
    <main className={styles.main}>
      <Decorations>{children}</Decorations>
    </main>
  );
}
