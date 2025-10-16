import CATEGORIES from "@/assets/json/categories.json";
import styles from "./areas.module.scss";

export default function Areas({ areas }: { areas: string[] }) {
  return (
    <div className={styles.areas}>
      {areas.map((a) => (
        <div
          key={a}
          className="rounded-4xl border-1 border-white px-5 py-1 text-center lg:w-full"
        >
          {CATEGORIES[a as keyof typeof CATEGORIES]}
        </div>
      ))}
    </div>
  );
}
