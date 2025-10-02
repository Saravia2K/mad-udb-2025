import CountdownItem from "./item";
import useDateCountdown from "@/hooks/useDateCountdown";

export default function Countdown() {
  const { days, hours, minutes, seconds } = useDateCountdown(
    "2025-10-13T17:00:00",
  );

  return (
    <div id="countdown" className="mt-7 flex justify-center gap-8">
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
  <div className="flex flex-col justify-center gap-3 text-9xl text-white">
    <div className="size-5 rounded-full bg-white"></div>
    <div className="size-5 rounded-full bg-white"></div>
  </div>
);
