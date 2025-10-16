import type { PropsWithChildren } from "react";

import styles from "./information-container.module.scss";

export default function InformationContainer({ children }: PropsWithChildren) {
  return <div className={styles["information-container"]}>{children}</div>;
}
