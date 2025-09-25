'use client';
import CountUp from 'react-countup';

type CounterProps = {
  end: number;
  suffix?: string;
  duration?: number;
};

export default function Counter({ end, suffix = '', duration = 2 }: CounterProps) {
  return <CountUp end={end} duration={duration} suffix={suffix} />;
}
