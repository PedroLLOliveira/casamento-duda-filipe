"use client";

import { useEffect, useState } from "react";

type Props = {
  targetDate: string;
};

type TimeLeft = {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
};

function calculateTimeLeft(targetDate: string): TimeLeft {
  const difference = new Date(targetDate).getTime() - new Date().getTime();

  if (difference <= 0) {
    return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
  }

  return {
    dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
    horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((difference / 1000 / 60) % 60),
    segundos: Math.floor((difference / 1000) % 60),
  };
}

export default function Countdown({ targetDate }: Props) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft(targetDate));

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const items = [
    { label: "Dias", value: timeLeft.dias },
    { label: "Horas", value: timeLeft.horas },
    { label: "Min", value: timeLeft.minutos },
    { label: "Seg", value: timeLeft.segundos },
  ];

  if (!mounted) {
    return (
      <div className="flex flex-wrap justify-center gap-3">
        {["Dias", "Horas", "Min", "Seg"].map((label) => (
          <div
            key={label}
            className="min-w-[88px] rounded-2xl bg-white/15 px-4 py-4 backdrop-blur-sm"
          >
            <div className="text-2xl font-semibold md:text-3xl">--</div>
            <div className="mt-1 text-xs uppercase tracking-[0.2em]">
              {label}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="min-w-[88px] rounded-2xl bg-white/15 px-4 py-4 backdrop-blur-sm"
        >
          <div className="text-2xl font-semibold md:text-3xl">{item.value}</div>
          <div className="mt-1 text-xs uppercase tracking-[0.2em]">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}