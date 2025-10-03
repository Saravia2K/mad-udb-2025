import CountdownItem from "./item";
import useDateCountdown from "@/hooks/use-date-countdown";

export default function Countdown() {
  const { days, hours, minutes, seconds } = useDateCountdown(
    "2025-10-13T17:00:00",
  );

  return (
    <div
      id="countdown"
      className="mt-5 mb-2 flex max-lg:flex-col lg:mt-9 lg:mb-13 lg:items-center lg:justify-center lg:gap-7 2xl:mb-16"
    >
      <CountdownItem separator label="Días" number={`${days}`} />
      <CountdownItem
        separator
        label="Horas"
        number={hours.toString().padStart(2, "0")}
      />
      <CountdownItem
        separator
        label="Minutos"
        number={minutes.toString().padStart(2, "0")}
      />
      <CountdownItem
        label="Segundos"
        number={seconds.toString().padStart(2, "0")}
      />
    </div>
  );
}
