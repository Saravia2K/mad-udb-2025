import styles from "./countdown.module.scss";

export default function CountdownItem({ number, label }: CountdownItemProps) {
  return (
    <div className={styles.item}>
      <span className={styles.number}>{number}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

type CountdownItemProps = {
  number: string;
  label: string;
};
