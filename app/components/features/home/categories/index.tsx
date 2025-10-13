import CategoryItem from "./category-item";
import CATEGORIES from "./categories";

import styles from "./categories.module.scss";
import PortfolioCategory from "./portfolios-category";

export default function Categories() {
  return (
    <section className={styles.categories}>
      <PortfolioCategory />
      {CATEGORIES.map((c) => (
        <CategoryItem
          key={c.category}
          imageUrl={c.image}
          colors={c.colors}
          category={c.category}
          label={c.label}
          imageX={c.x}
        />
      ))}
    </section>
  );
}
