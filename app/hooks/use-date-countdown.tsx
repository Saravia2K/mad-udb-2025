import moment from "moment";
import { useCallback, useEffect, useRef, useState } from "react";

export default function useDateCountdown(
  target: string | Date,
  initialDate?: string | Date,
) {
  const [counterData, setCounterData] = useState<CounterData>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const targetDate = useRef(moment(target));
  const counterInterval = useRef<NodeJS.Timeout>(undefined);

  useEffect(() => {
    // First coutdown on initial render
    const initialCounterData = getCountdown();
    setCounterData(initialCounterData);

    // Not initializing countdown if its a past date
    if (hasCountdownFinished(initialCounterData)) return;

    // Initializing counter
    counterInterval.current = setInterval(() => {
      const countdownData = getCountdown();
      setCounterData(countdownData);

      if (hasCountdownFinished(countdownData)) {
        clearInterval(counterInterval.current);
      }
    }, 1000);

    return () => clearInterval(counterInterval.current);
  }, []);

  /**
   * Check if countdown has time left.
   */
  function hasCountdownFinished(data: CounterData) {
    return Object.values(data).every((d) => d <= 0);
  }

  /**
   * Get data for countdown to work. This returns days, hours, minutes and seconds
   * from targetDate to current datetime
   */
  const getCountdown = useCallback(() => {
    const now = moment(initialDate);
    const duration = moment.duration(targetDate.current.diff(now));

    return {
      days: Math.max(0, Math.floor(duration.asDays())),
      hours: Math.max(0, duration.hours()),
      minutes: Math.max(0, duration.minutes()),
      seconds: Math.max(0, duration.seconds()),
    };
  }, []);

  return counterData;
}

type CounterData = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
