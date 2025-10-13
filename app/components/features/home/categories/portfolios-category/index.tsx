import { Link } from "react-router";

import CategoryItemCircle from "./portfolios-category-circle";
import PosrtfoliosCategoryBody, {
  type PortfoliosCategoryBodyProps,
} from "./portfolios-category-body";

import styles from "./portfolios-category.module.scss";

export default function PortfolioCategory(props: PortfoliosCategoryBodyProps) {
  return (
    <Link to="/portafolios" className={styles["category-item"]}>
      <div className={styles.luces}>
        <span className="font-bold">//</span> <span>LUCES</span>
      </div>
      <PosrtfoliosCategoryBody {...props} />
      <CategoryItemCircle className={styles["category-item-circle"]} />
      <h3 className={styles.label}>VER PORTAFOLIOS</h3>
    </Link>
  );
}
