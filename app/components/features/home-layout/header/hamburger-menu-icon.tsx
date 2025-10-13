import clsx from "clsx";

import styles from "./header.module.scss";

export default function HamburgerIconMenu({
  active,
  onClick,
}: HamburgerIconMenuProps) {
  return (
    <div className={styles["icono-menu"]} onClick={onClick}>
      {Array.from({ length: 3 }, (_, i) => (
        <span
          key={i}
          className={clsx(styles["menu-activador-linea"], {
            [styles.active]: active,
          })}
        ></span>
      ))}
    </div>
  );
}

type HamburgerIconMenuProps = {
  active?: boolean;
  onClick?: () => void;
};
