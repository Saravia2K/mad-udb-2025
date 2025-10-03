import styles from "./countdown.module.scss";

export default function CountdownItem({
  number,
  label,
  separator,
}: CountdownItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.number}>
        <span>{number}</span>
        <span className={styles.label}>{label}</span>
      </div>
      {separator && <Separator />}
    </div>
  );
}

const Separator = () => (
  <div className="hidden flex-col justify-center gap-3 text-9xl text-white lg:flex">
    <div className="size-5 rounded-full bg-white"></div>
    <div className="size-5 rounded-full bg-white"></div>
  </div>
);

type CountdownItemProps = {
  number: string;
  label: string;
  separator?: boolean;
};
