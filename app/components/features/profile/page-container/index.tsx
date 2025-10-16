import type { PropsWithChildren } from "react";

import styles from "./page-container.module.scss";

export default function PageContainer({ children }: PropsWithChildren) {
  return <div className={styles["page-container"]}>{children}</div>;
}
