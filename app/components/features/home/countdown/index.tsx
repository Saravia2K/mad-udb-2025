import { useRef, useState } from "react";
import clsx from "clsx";

import useDateCountdown from "@/hooks/use-date-countdown";

import styles from "./countdown.module.scss";
import arrowDown from "@/assets/images/transparent-arrow-down.svg";

const zeroStartNumber = (number: number) => number.toString().padStart(2, "0");

export default function Countdown() {
  const { days, hours, minutes, seconds } = useDateCountdown(
    "2025-10-13T19:00:00",
  );
  const countdownContainerRef = useRef<HTMLDivElement | null>(null);
  const [hidden, setHidden] = useState(false);

  const countdownContainerHeight =
    countdownContainerRef.current?.getBoundingClientRect().height;

  return (
    <div
      className={clsx(styles.countdown, { [styles.hidden]: hidden })}
      style={{ top: !hidden ? 0 : `${countdownContainerHeight}px` }}
    >
      <img
        src={arrowDown}
        alt="Arrow down icon"
        className={styles["arrow-down"]}
        onClick={() => setHidden((prev) => !prev)}
      />
      <div
        ref={countdownContainerRef}
        className={styles["countdown-container"]}
      >
        <h2>Inicia pronto</h2>
        <div className={styles["countdown-numbers-container"]}>
          <CountdownNumber plain number={days} label="Días" />
          <CountdownNumber number={hours} label="Horas" />
          <CountdownNumber number={minutes} label="Minutos" />
          <CountdownNumber number={seconds} label="Segundos" />
        </div>
      </div>
    </div>
  );
}

type CountdownNumberProps = {
  number: number;
  label: string;
  plain?: boolean;
};
const CountdownNumber = ({ number, label, plain }: CountdownNumberProps) => (
  <div className={styles["countdown-number"]}>
    <span className={styles.number}>
      {plain ? number : zeroStartNumber(number)}
    </span>
    <span className={styles.label}>{label}</span>
  </div>
);
