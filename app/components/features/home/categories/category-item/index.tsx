import { Link } from "react-router";

import CategoryItemBody, {
  type CategoryItemBodyProps,
} from "./category-item-body";
import CategoryItemCircle from "./category-item-circle";

import styles from "./category-item.module.scss";

export default function CategoryItem({
  colors,
  category,
  label,
  ...bodyProps
}: CategoryItemProps) {
  return (
    <Link
      to={{
        pathname: "/portafolios",
        search: `?category=${category.toLowerCase()}`,
      }}
      className={styles["category-item"]}
    >
      <div className={styles.luces}>
        <span className="font-bold">//</span> <span>LUCES</span>
      </div>
      <CategoryItemBody {...bodyProps} colors={colors} />
      <CategoryItemCircle
        colors={colors}
        className={styles["category-item-circle"]}
      />
      <h3 className={styles.label}>{label}</h3>
    </Link>
  );
}

type CategoryItemProps = CategoryItemBodyProps & {
  category: string;
  label: string;
};
