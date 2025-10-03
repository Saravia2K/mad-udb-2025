import CountdownItem from "./item";
import useDateCountdown from "@/hooks/use-date-countdown";

export default function Countdown() {
  const { days, hours, minutes, seconds } = useDateCountdown(
    "2025-10-13T17:00:00",
  );

  return (
    <div
      id="countdown"
      className="mt-5 flex max-lg:flex-col lg:mt-6 lg:items-center lg:justify-center lg:gap-7"
    >
      <CountdownItem label="Días" number={`${days}`} />
      <Separator />
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

const Separator = () => (
  <div className="hidden justify-center gap-3 text-9xl text-white lg:flex lg:flex-col">
    <div className="size-5 rounded-full bg-white"></div>
    <div className="size-5 rounded-full bg-white"></div>
  </div>
);
