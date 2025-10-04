import CountdownItem from "./item";
import useDateCountdown from "@/hooks/use-date-countdown";

import styles from "./countdown.module.scss";
import clsx from "clsx";

export default function Countdown() {
  const { days, hours, minutes, seconds } = useDateCountdown(
    "2025-10-13T17:00:00",
  );

  return (
    <div className={styles.countdown}>
      <CountdownItem label="Días" number={`${days}`} />
      <Separator first />
      <CountdownItem label="Horas" number={hours.toString().padStart(2, "0")} />
      <Separator />
      <CountdownItem
        label="Minutos"
        number={minutes.toString().padStart(2, "0")}
      />
      <Separator />
      <CountdownItem
        label="Segundos"
        number={seconds.toString().padStart(2, "0")}
      />
    </div>
  );
}

const Separator = ({ first }: { first?: boolean }) => (
  <div
    className={clsx(
      "h-[15%] w-[1px] bg-white md:h-[20%] lg:mx-8 lg:h-[75%] lg:w-[2px]",
      {
        "max-lg:hidden": first,
      },
    )}
  ></div>
);
