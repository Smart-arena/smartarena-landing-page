"use client";
import CountUp from "react-countup";

type Counter = {
  start: number;
  end: number;
  duration: number;
};

const Counter = ({ start, end, duration }: Counter) => {
  return (
    <>
      <CountUp start={start} end={end} duration={duration} />
    </>
  );
};

export default Counter;
